/**
 * Renderiza una pieza animada (window.render + window.DURATION) a fotogramas JPEG.
 * Uso: [QUERY=sinmarcas=1] node render.cjs <pieza.html> <formato 916|45|11> <carpeta-salida> [fps=30] [solo-segundos,separados]
 */
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

(async () => {
  const [html, f, outDir, fpsArg, onlyArg] = process.argv.slice(2);
  const extra = process.env.QUERY ? "&" + process.env.QUERY : "";
  const fps = Number(fpsArg || 30);
  const only = onlyArg ? onlyArg.split(",").map(Number) : null;
  const size = { 916: [1080, 1920], 45: [1080, 1350], 11: [1080, 1080] }[f];
  fs.mkdirSync(outDir, { recursive: true });
  // Si el Chromium de esta versión de Playwright no está, prueba el del sistema
  let browser;
  try {
    browser = await chromium.launch();
  } catch {
    browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium" });
  }
  const page = await browser.newPage({ viewport: { width: size[0], height: size[1] } });
  await page.goto("file://" + path.resolve(html) + "?f=" + f + extra);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  const duration = await page.evaluate(() => window.DURATION);
  const times = only || Array.from({ length: Math.round(duration * fps) }, (_, i) => i / fps);
  for (let i = 0; i < times.length; i++) {
    await page.evaluate((t) => window.render(t), times[i]);
    const name = only ? `t${times[i].toFixed(2)}.jpg` : `f${String(i).padStart(4, "0")}.jpg`;
    await page.screenshot({ path: path.join(outDir, name), type: "jpeg", quality: 93 });
  }
  await browser.close();
  console.log(`${times.length} fotogramas · ${path.basename(html)} · ${f}`);
})();
