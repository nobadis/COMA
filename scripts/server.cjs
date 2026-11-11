#!/usr/bin/env node
/**
 * Servidor de producción (Railway). Hace lo mismo que `serve dist` (compresión, ETag y la
 * configuración de dist/serve.json: cabeceras y redirecciones) y además:
 *   - www.comunicacionenmallorca.com → https://comunicacionenmallorca.com (301), para que
 *     Google y las IA vean un único dominio aunque alguien enlace con www.
 * Las redirecciones de URLs antiguas (WordPress) viven en public/serve.json.
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const handler = require("serve-handler");
const compression = require("compression");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "dist");
const fileConfig = JSON.parse(fs.readFileSync(path.join(PUBLIC, "serve.json"), "utf8"));
const config = { ...fileConfig, public: PUBLIC, etag: true };
const compress = compression();
const PORT = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res) => {
  const host = String(req.headers.host ?? "")
    .toLowerCase()
    .replace(/:\d+$/, "");
  if (host.startsWith("www.")) {
    res.writeHead(301, {
      Location: `https://${host.slice(4)}${req.url ?? "/"}`,
      "Cache-Control": "public, max-age=86400",
    });
    res.end();
    return;
  }
  compress(req, res, () => {
    handler(req, res, config).catch((err) => {
      console.error(err);
      if (!res.headersSent) res.writeHead(500);
      res.end();
    });
  });
});

server.listen(PORT, "0.0.0.0", () => console.log(`COMA en http://0.0.0.0:${PORT}`));
