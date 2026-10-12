#!/usr/bin/env node
/**
 * Webs de ejemplo para clientes: compila cada proyecto de ejemplos/ y lo publica en
 * dist/ejemplos-web/<id>/<proyecto>/. El id es largo y aleatorio para que nadie la encuentre,
 * y todas llevan noindex (meta + cabecera X-Robots-Tag en serve.json) y una marca de agua.
 * ejemplos.json admite "negocio" (nombre que sale en la etiqueta de la marca de agua).
 *
 * Cada ejemplo es un proyecto Astro independiente. Se compila con su `base` y luego se
 * reescriben las rutas absolutas escritas a mano ("/pedir", url('/fuente.woff2')…) para que
 * la navegación funcione dentro de la subcarpeta.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const EJEMPLOS = path.join(ROOT, "ejemplos");
const OUT = path.join(ROOT, "dist", "ejemplos-web");
const SITE = "https://comunicacionenmallorca.com";
const NOINDEX = '<meta name="robots" content="noindex, nofollow, noarchive">';

const escapeHtml = (t) =>
  t.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
  );

/**
 * Marca de agua de la propuesta: trama diagonal casi invisible sobre toda la página (se ve en
 * capturas y vídeos) y una etiqueta pequeña abajo a la izquierda que enlaza con COMA.
 * Solo CSS inline: no necesita scripts y pasa la CSP (style-src 'unsafe-inline', img-src data:).
 */
function watermark(negocio) {
  const text = (dx, fill, opacity) =>
    `<text x="${20 + dx}" y="${130 + dx}" transform="rotate(-24 190 120)" fill="${fill}" fill-opacity="${opacity}" ` +
    'font-family="Arial,sans-serif" font-size="17" font-weight="700" letter-spacing="3">' +
    "PROPUESTA DE DISEÑO · COMA</text>";
  // Blanco y negro desplazados 1 px: legible sobre fondos claros y oscuros.
  const tile = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="380" height="240">${text(0, "#fff", 0.1)}${text(1, "#000", 0.08)}</svg>`
  );
  const name = escapeHtml(negocio);
  return (
    "<style>" +
    `.coma-wm{position:fixed;inset:0;z-index:2147483646;pointer-events:none;user-select:none;background:url("data:image/svg+xml,${tile}") 0 0/380px 240px repeat}` +
    ".coma-wm-tag{position:fixed;left:0;right:0;bottom:0;z-index:2147483647;display:block;padding:5px 12px;background:rgba(17,17,17,.9);color:#fff;text-align:center;font:600 11px/1.3 system-ui,-apple-system,Segoe UI,Arial,sans-serif;text-decoration:none}" +
    ".coma-wm-tag:hover{background:#c8102e}" +
    ".coma-wm-tag span{display:none}@media(min-width:560px){.coma-wm-tag span{display:inline}}" +
    "@media print{.coma-wm,.coma-wm-tag{display:none}}" +
    "</style>" +
    '<div class="coma-wm" aria-hidden="true"></div>' +
    `<a class="coma-wm-tag" href="${SITE}/contacto/" rel="noopener" target="_blank">Propuesta de diseño de COMA para ${name}<span> · no es la web oficial</span></a>`
  );
}

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    return e.isDirectory() ? walk(full) : [full];
  });

/** "/x" → base + "x", salvo "//cdn…" y lo que ya lleva la base. */
const prefixer = (base) => (url) =>
  url.startsWith("/") && !url.startsWith("//") && !url.startsWith(base) ? base + url.slice(1) : url;

function rewrite(text, ext, base, negocio) {
  const fix = prefixer(base);
  const esc = SITE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // URLs absolutas del dominio (canonical, og:image, JSON-LD).
  let out = text.replace(new RegExp(`${esc}(/[^"'\\s<>)]*)?`, "g"), (_m, p = "/") => SITE + fix(p));
  if (ext === ".css" || ext === ".html") {
    out = out.replace(/url\((['"]?)(\/[^'")]*)\1\)/g, (_m, q, u) => `url(${q}${fix(u)}${q})`);
  }
  if (ext === ".html" || ext === ".js" || ext === ".mjs") {
    // Atributos en HTML y en cadenas de JS que generan HTML (href="/pedir").
    out = out.replace(
      /\b(href|src|action|poster|content)=(\\?["'])(\/[^"'\\]*)/g,
      (_m, attr, q, u) => `${attr}=${q}${fix(u)}`
    );
    out = out.replace(
      /\b(srcset|imagesrcset)=(["'])([^"']*)\2/g,
      (_m, attr, q, v) =>
        `${attr}=${q}${v
          .split(",")
          .map((s) => s.replace(/^(\s*)(\S+)/, (_x, sp, u) => sp + fix(u)))
          .join(",")}${q}`
    );
  }
  if (ext === ".webmanifest" || ext === ".json") {
    out = out.replace(/"(\/[^"]*)"/g, (_m, u) => `"${fix(u)}"`);
  }
  if (ext === ".html") {
    out = out
      .replace(/<meta name="robots"[^>]*>/gi, "")
      .replace(/<link rel="sitemap"[^>]*>/gi, "")
      .replace(/<head([^>]*)>/i, `<head$1>${NOINDEX}`);
    // Después de reescribir las rutas: el enlace de la etiqueta apunta a COMA, no al ejemplo.
    const wm = watermark(negocio);
    out = /<\/body>/i.test(out) ? out.replace(/<\/body>/i, `${wm}</body>`) : out + wm;
  }
  return out;
}

function build({ proyecto, id, negocio }) {
  if (!/^[a-z0-9-]+$/.test(proyecto) || !/^[a-z0-9]{16,}$/.test(id)) {
    throw new Error(`Ejemplo inválido: ${proyecto}/${id}`);
  }
  const dir = path.join(EJEMPLOS, proyecto);
  const base = `/ejemplos-web/${id}/${proyecto}/`;
  const run = (cmd) => execSync(cmd, { cwd: dir, stdio: "inherit" });

  console.log(`\n▸ Ejemplo ${proyecto} → ${base}`);
  if (!fs.existsSync(path.join(dir, "node_modules"))) run("npm ci --no-audit --no-fund");
  fs.rmSync(path.join(dir, "dist"), { recursive: true, force: true });
  run(`npx astro build --site ${SITE} --base ${base}`);

  const dist = path.join(dir, "dist");
  for (const f of ["robots.txt", "sitemap-index.xml", "sitemap-0.xml"]) {
    fs.rmSync(path.join(dist, f), { force: true });
  }
  for (const file of walk(dist)) {
    const ext = path.extname(file);
    if (![".html", ".css", ".js", ".mjs", ".webmanifest", ".json"].includes(ext)) continue;
    const text = fs.readFileSync(file, "utf8");
    const updated = rewrite(text, ext, base, negocio || proyecto);
    if (updated !== text) fs.writeFileSync(file, updated, "utf8");
  }

  const target = path.join(OUT, id, proyecto);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.cpSync(dist, target, { recursive: true });
  console.log(`✓ ${SITE}${base}`);
}

const list = JSON.parse(fs.readFileSync(path.join(EJEMPLOS, "ejemplos.json"), "utf8"));
if (!fs.existsSync(path.join(ROOT, "dist"))) {
  console.error('No existe dist/; ejecuta antes "astro build"');
  process.exit(1);
}
fs.rmSync(OUT, { recursive: true, force: true });
list.forEach(build);
