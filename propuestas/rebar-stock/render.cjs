/**
 * Captura video/demo.html fotograma a fotograma (1920x1080, JPEG) con varios navegadores en paralelo.
 * Uso: node render.cjs <carpeta-salida> [fps] [workers]
 *      node render.cjs <carpeta-salida> --at 12.5,40,61   (solo esos segundos, para revisar)
 * También deja cues.json (efectos de sonido) junto a los fotogramas.
 */
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

const html = path.join(__dirname, "video", "demo.html");
const out = path.resolve(process.argv[2] || "frames");
const atIdx = process.argv.indexOf("--at");
const only = atIdx > 0 ? process.argv[atIdx + 1].split(",").map(Number) : null;
const fps = only || process.argv.includes("--range") ? 30 : Number(process.argv[3] || 30);
const workers = only ? 1 : process.argv.includes("--range") ? 3 : Number(process.argv[4] || 3);
fs.mkdirSync(out, { recursive: true });

async function open(browser) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto("file://" + html);
  await page.evaluate(() => document.fonts.ready);
  return page;
}

(async () => {
  const exe = "/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell";
  const browser = await chromium.launch(fs.existsSync(exe) ? { executablePath: exe } : {});
  const first = await open(browser);
  const duration = await first.evaluate(() => window.DURATION);
  fs.writeFileSync(path.join(out, "cues.json"), JSON.stringify(await first.evaluate(() => window.CUES)));
  const rg = process.argv.indexOf("--range");
  const times = rg > 0 ? (() => { const a = Math.round(+process.argv[rg + 1] * fps), b = Math.round(+process.argv[rg + 2] * fps); return Array.from({ length: b - a }, (_, i) => (a + i) / fps); })() : only || Array.from({ length: Math.round(duration * fps) }, (_, i) => i / fps);
  const pages = [first];
  for (let w = 1; w < workers; w++) pages.push(await open(browser));
  let next = 0, done = 0;
  await Promise.all(
    pages.map(async (page) => {
      while (next < times.length) {
        const i = next++;
        await page.evaluate((t) => window.render(t), times[i]);
        const name = only ? `t${times[i].toFixed(2)}.jpg` : `f${String(Math.round(times[i] * fps)).padStart(5, "0")}.jpg`;
        await page.screenshot({ path: path.join(out, name), type: "jpeg", quality: 90 });
        if (++done % 300 === 0) console.log(`${done}/${times.length}`);
      }
    })
  );
  await browser.close();
  console.log(`${times.length} fotogramas en ${out}`);
})();
