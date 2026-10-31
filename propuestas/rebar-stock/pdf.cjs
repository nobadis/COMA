/**
 * Genera los PDF (A4) a partir de pdf/resumen.html y pdf/propuesta.html con Chromium.
 * Portada a sangre (sin márgenes) + cuerpo con pie y número de página; se unen con pypdf.
 * Uso: node pdf.cjs <carpeta-salida>
 */
const path = require("path");
const fs = require("fs");
const { execFileSync } = require("child_process");
const { chromium } = require("playwright");

const dir = path.join(__dirname, "pdf");
const out = path.resolve(process.argv[2] || __dirname);
const DOCS = [
  { src: "resumen.html", name: "COMA-Rebar-Stock-Resumen.pdf", label: "COMA Rebar Stock · Resumen" },
  { src: "propuesta.html", name: "COMA-Rebar-Stock-Propuesta-tecnico-comercial.pdf", label: "COMA Rebar Stock · Propuesta técnico-comercial" },
];

const MERGE = `
import sys, io
from pypdf import PdfReader, PdfWriter, Transformation
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
buf = io.BytesIO(); c = canvas.Canvas(buf, pagesize=A4)
c.setFillColorRGB(0xef / 255, 0xec / 255, 0xe4 / 255); c.rect(0, 0, A4[0], A4[1], stroke=0, fill=1); c.save()
w = PdfWriter()
w.append(sys.argv[2])
for page in PdfReader(sys.argv[3]).pages:
    bg = PdfReader(io.BytesIO(buf.getvalue())).pages[0]
    bg.merge_page(page)
    w.add_page(bg)
w.write(sys.argv[1])
`;
const inline = (html) => html.replace(/<!--@include ([^>]+?)-->/g, (_, f) => fs.readFileSync(path.join(dir, f.trim()), "utf8"));

(async () => {
  const exe = "/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell";
  const browser = await chromium.launch(fs.existsSync(exe) ? { executablePath: exe } : {});
  const page = await browser.newPage();
  for (const d of DOCS) {
    const html = inline(fs.readFileSync(path.join(dir, d.src), "utf8"));
    const [head, rest] = html.split("<!--@cover-->");
    const [cover, body] = rest.split("<!--@body-->");
    const parts = [];
    for (const [kind, content] of [["cover", head + "<style>@page{margin:0}</style>" + cover + "</body></html>"], ["body", head + body]]) {
      const tmp = path.join(dir, `.tmp-${kind}.html`);
      fs.writeFileSync(tmp, content);
      await page.goto("file://" + tmp);
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(300);
      const file = path.join(dir, `.tmp-${kind}.pdf`);
      await page.pdf({
        path: file,
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: kind === "body",
        headerTemplate: "<div></div>",
        footerTemplate: `<div style="width:100%;font-family:Archivo V,sans-serif;font-size:7.5px;color:#5d5851;padding:0 17mm;display:flex;justify-content:space-between"><span><b style="color:#0c0c0c">COMA</b><span style="color:#e1112d">,</span> ${d.label} · Confidencial</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`,
      });
      parts.push(file);
      fs.unlinkSync(tmp);
    }
    const target = path.join(out, d.name);
    // une portada y cuerpo, y pone el papel COMA de fondo en todo el cuerpo (también en los márgenes)
    execFileSync("python3", ["-c", MERGE, target, ...parts]);
    parts.forEach((f) => fs.unlinkSync(f));
    console.log("PDF:", target);
  }
  await browser.close();
})();
