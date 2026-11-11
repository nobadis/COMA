/**
 * Captura cada .ad de estaticos.html en su archivo (data-out, relativo a publicidad/).
 * Con un argumento solo genera las piezas cuyo data-out lo contiene, p. ej.:
 *   node publicidad/_fuentes/render-estaticos.cjs 7-linkedin
 */
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

(async () => {
  let browser;
  try {
    browser = await chromium.launch();
  } catch {
    browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium" });
  }
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
  await page.goto("file://" + path.resolve(__dirname, "estaticos.html"));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForLoadState("networkidle");
  // La ventana tiene que caber la pieza más ancha (la cabecera de LinkedIn mide 2256 px) o la captura se corta.
  const widest = await page.$$eval(".ad", (els) => Math.max(...els.map((e) => e.offsetWidth)));
  await page.setViewportSize({ width: Math.max(1400, widest + 80), height: 1000 });
  const ads = await page.$$(".ad");
  const only = process.argv[2];
  for (const ad of ads) {
    const rel = await ad.getAttribute("data-out");
    if (only && !rel.includes(only)) continue;
    const out = path.resolve(__dirname, "..", rel);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await ad.screenshot({ path: out });
    console.log(path.relative(path.resolve(__dirname, ".."), out));
  }
  await browser.close();
})();
