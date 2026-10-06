#!/usr/bin/env node
/**
 * Webs de ejemplo para clientes: compila cada proyecto de ejemplos/ y lo publica en
 * dist/ejemplos-web/<id>/<proyecto>/. El id es largo y aleatorio para que nadie la encuentre,
 * y todas llevan noindex (meta + cabecera X-Robots-Tag en serve.json).
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

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    return e.isDirectory() ? walk(full) : [full];
  });

/** "/x" → base + "x", salvo "//cdn…" y lo que ya lleva la base. */
const prefixer = (base) => (url) =>
  url.startsWith("/") && !url.startsWith("//") && !url.startsWith(base) ? base + url.slice(1) : url;

function rewrite(text, ext, base) {
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
  }
  return out;
}

function build({ proyecto, id }) {
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
    const updated = rewrite(text, ext, base);
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
