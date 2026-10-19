/**
 * Captura un vídeo HTML (window.render(t) + window.DURATION) fotograma a fotograma, 1920x1080, en JPEG.
 * Uso: node video/render.cjs <promo.html> <carpeta-salida> [fps] [solo-estos-segundos,separados,por,comas]
 */
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

(async () => {
  const html = path.resolve(process.argv[2]);
  const out = path.resolve(process.argv[3] || "frames");
  const fps = Number(process.argv[4] || 30);
  const only = process.argv[5] ? process.argv[5].split(",").map(Number) : null;
  fs.mkdirSync(out, { recursive: true });

  // Usa el Chromium de Playwright que haya instalado, aunque no coincida con la versión del paquete.
  const pw = path.join(process.env.LOCALAPPDATA || "", "ms-playwright");
  const shell = fs.existsSync(pw) && fs.readdirSync(pw).filter((d) => d.startsWith("chromium_headless_shell-")).sort().pop();
  const executablePath = shell ? path.join(pw, shell, "chrome-headless-shell-win64", "chrome-headless-shell.exe") : undefined;
  const browser = await chromium.launch({ executablePath });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto("file://" + html.replace(/\\/g, "/"));
  await page.evaluate(() => document.fonts.ready);
  const duration = await page.evaluate(() => window.DURATION);

  const times = only || Array.from({ length: Math.round(duration * fps) }, (_, i) => i / fps);
  for (let i = 0; i < times.length; i++) {
    await page.evaluate((t) => window.render(t), times[i]);
    const name = only ? `t${times[i].toFixed(2)}.jpg` : `f${String(i).padStart(4, "0")}.jpg`;
    await page.screenshot({ path: path.join(out, name), type: "jpeg", quality: 92 });
  }
  await browser.close();
  console.log(`${times.length} fotogramas en ${out}`);
})();
