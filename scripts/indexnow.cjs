#!/usr/bin/env node
/**
 * Avisa a Bing, Yandex y demás buscadores IndexNow de las URLs nuevas o cambiadas.
 * Uso (tras desplegar):  npm run seo:indexnow
 * Lee todas las URLs de dist/sitemap-0.xml y las envía en lotes. No necesita cuenta:
 * la clave es el nombre del archivo public/<clave>.txt, que prueba que el dominio es tuyo.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const HOST = "comunicacionenmallorca.com";
const keyFile = fs
  .readdirSync(path.join(ROOT, "public"))
  .find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) {
  console.error("No hay archivo de clave IndexNow (public/<32 hex>.txt)");
  process.exit(1);
}
const key = keyFile.replace(".txt", "");

const sitemap = path.join(ROOT, "dist", "sitemap-0.xml");
if (!fs.existsSync(sitemap)) {
  console.error("Falta dist/sitemap-0.xml: ejecuta antes npm run build");
  process.exit(1);
}
const urls = [...fs.readFileSync(sitemap, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (m) => m[1]
);

async function main() {
  const dry = process.argv.includes("--dry");
  for (let i = 0; i < urls.length; i += 9000) {
    const batch = urls.slice(i, i + 9000);
    const body = { host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList: batch };
    if (dry) {
      console.log(`[dry] ${batch.length} URLs`);
      continue;
    }
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });
    console.log(`IndexNow ${res.status} (${batch.length} URLs)`);
    if (!res.ok && res.status !== 202) process.exitCode = 1;
  }
}
main();
