/** Capturas del vídeo para los PDF (pdf/img/*.jpg). Uso: node img.cjs */
const path = require("path");
const fs = require("fs");
const { execFileSync } = require("child_process");
const { chromium } = require("playwright");

const SHOTS = { hero: [45.2, true], live: [50.2], map: [68.5], unit: [79], tabA: [88.9], tabB: [94.6], ship: [143.9], cons: [121.6], dev: [155.5], wall: [105] };
(async () => {
  const exe = "/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell";
  const browser = await chromium.launch(fs.existsSync(exe) ? { executablePath: exe } : {});
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto("file://" + path.join(__dirname, "video", "demo.html"));
  await page.evaluate(() => document.fonts.ready);
  const dir = path.join(__dirname, "pdf", "img");
  fs.mkdirSync(dir, { recursive: true });
  for (const [name, [t, clean]] of Object.entries(SHOTS)) {
    await page.evaluate(([t, clean]) => {
      window.render(t);
      document.querySelectorAll("section.layer").forEach((s) => clean && (s.style.display = "none"));
    }, [t, !!clean]);
    const raw = path.join(dir, name + ".png");
    await page.screenshot({ path: raw });
    execFileSync("python3", ["-c", "import sys\nfrom PIL import Image\nim=Image.open(sys.argv[1]).convert('RGB')\nim=im.resize((1440,810),Image.LANCZOS)\nim.save(sys.argv[2],quality=86,optimize=True)", raw, raw.replace(".png", ".jpg")]);
    fs.unlinkSync(raw);
  }
  await browser.close();
  console.log("capturas en", dir);
})();
