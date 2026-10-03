#!/usr/bin/env node
/**
 * Genera public/og-coma.png (1200x630) para redes sociales con Playwright.
 * Uso: node scripts/og-image.cjs
 */
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const fontFile = path.join(
  ROOT,
  "node_modules/@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2"
);
const font = fs.readFileSync(fontFile).toString("base64");
const comma =
  '<svg viewBox="0 0 20 40" width="190"><path d="M6 0h14v21c0 10-5 16.5-15 19l-2-5.5c5-1.8 7.5-5.2 8-9.5H6z" fill="#e1112d"/></svg>';

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:A;src:url(data:font/woff2;base64,${font}) format("woff2");font-weight:100 900;font-stretch:62% 125%}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#f3f0ea;font-family:A;color:#121212;position:relative;overflow:hidden;padding:64px 72px;display:flex;flex-direction:column;justify-content:space-between}
.glow{position:absolute;width:900px;height:900px;right:-380px;top:-420px;border-radius:50%;background:radial-gradient(closest-side,rgba(225,17,45,.28),rgba(225,17,45,0) 70%)}
.c{position:absolute;right:70px;top:70px}
.logo{font-variation-settings:"wdth" 125;font-weight:700;font-size:44px;letter-spacing:-.02em}
.logo b{color:#e1112d}
h1{font-variation-settings:"wdth" 125;font-weight:600;font-size:92px;line-height:.92;letter-spacing:-.045em;max-width:900px}
h1 span{color:#e1112d}
.row{display:flex;gap:16px;align-items:center;font-size:26px}
.pill{background:#121212;color:#f3f0ea;border-radius:999px;padding:14px 26px;font-weight:600}
.pill b{color:#ff5068}
.muted{color:#5f5a54}
</style></head><body><div class="glow"></div><div class="c">${comma}</div>
<div class="logo">COMA<b>’</b> <span class="muted" style="font-size:24px;font-variation-settings:'wdth' 100;font-weight:500;letter-spacing:0">Comunicación en Mallorca · desde 1997</span></div>
<h1>Hacemos que tu empresa se note<span>,</span></h1>
<div class="row"><span class="pill">Webs desde <b>99 €</b> + IVA</span><span class="muted">SEO · GEO · Agentes de IA · Automatización</span></div>
</body></html>`;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.setContent(html);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(ROOT, "public/og-coma.png") });
  await browser.close();
  console.log("public/og-coma.png generado");
})();
