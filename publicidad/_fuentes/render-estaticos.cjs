/** Captura cada .ad de estaticos.html en su archivo (data-out, relativo a publicidad/). */
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
  const ads = await page.$$(".ad");
  for (const ad of ads) {
    const out = path.resolve(__dirname, "..", await ad.getAttribute("data-out"));
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await ad.screenshot({ path: out });
    console.log(path.relative(path.resolve(__dirname, ".."), out));
  }
  await browser.close();
})();
