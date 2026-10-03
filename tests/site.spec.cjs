const { test, expect } = require("@playwright/test");

const PAGES = [
  "/",
  "/diseno-web/",
  "/seo-geo/",
  "/precios/",
  "/trabajos/",
  "/notoriedad-de-marca/",
  "/agentes-ia/",
  "/automatizaciones/",
  "/kit-digital/",
  "/contacto/",
  "/aviso-legal/",
  "/cookies/",
  "/privacidad/",
];
const LEGAL = ["/aviso-legal/", "/cookies/", "/privacidad/"];

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("coma_cookie_consent", "rejected"));
});

test.describe("COMA - Comunicación en Mallorca", () => {
  test("home con branding, hero y servicios", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/COMA - Comunicación en Mallorca/i);
    await expect(page.getByRole("heading", { level: 1 })).toHaveAccessibleName(
      /Hacemos que tu empresa se note/i
    );
    await expect(page.getByRole("link", { name: /Quiero mi web por 99/ }).first()).toBeVisible();
    await expect(page.getByText(/Mallorca Live Festival/).first()).toBeVisible();
    const servicios = page.locator("#servicios");
    for (const name of [
      "Diseño web",
      "SEO y posicionamiento en IA",
      "Notoriedad y medios",
      "Agentes de IA",
      "Automatizaciones",
      "Kit Digital",
    ]) {
      await expect(servicios.getByRole("link", { name: new RegExp(name, "i") })).toBeAttached();
    }
  });

  test("todas las páginas cargan con un único h1 y sin desbordamiento horizontal", async ({
    page,
  }) => {
    for (const path of PAGES) {
      const res = await page.goto(path);
      expect(res?.status(), path).toBe(200);
      await expect(page.locator("h1"), path).toHaveCount(1);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth
      );
      expect(overflow, path).toBeLessThanOrEqual(0);
    }
  });

  test("SEO básico: canonical, description y año dinámico", async ({ page }) => {
    for (const path of PAGES) {
      await page.goto(path);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `https://comunicacionenmallorca.com${path}`
      );
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.{50,}/);
    }
    await expect(page.locator(".coma-year").first()).toHaveText(String(new Date().getFullYear()));
  });

  test("no muestra teléfono, plantilla ni datos antiguos", async ({ page }) => {
    const banned = [
      /659\s*47/i,
      /barky/i,
      /About Us/,
      /Jaime/i,
      /Mora\s+Bosch/i,
      /son\s+Catlaret/i,
    ];
    for (const path of PAGES) {
      await page.goto(path);
      const text = await page.locator("body").innerText();
      for (const pattern of banned) expect(text, `${path} ${pattern}`).not.toMatch(pattern);
    }
  });

  test("textos legales con datos corporativos", async ({ page }) => {
    for (const path of LEGAL) {
      await page.goto(path);
      const main = page.locator("main");
      await expect(main.getByText("Publicom Marketing 2000 SL").first()).toBeVisible();
      await expect(main.getByText(/PASEO MALLORCA,\s*16/i).first()).toBeVisible();
      await expect(
        page.locator('main a[href^="mailto:info@comunicacionenmallorca.com"]').first()
      ).toBeVisible();
    }
  });

  test("footer con enlaces legales y email", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    for (const href of LEGAL) await expect(footer.locator(`a[href="${href}"]`)).toBeAttached();
    await expect(
      footer.locator('a[href^="mailto:info@comunicacionenmallorca.com"]').first()
    ).toBeAttached();
  });

  test("banner de cookies aparece y recuerda la elección", async ({ context }) => {
    const fresh = await context.newPage();
    await fresh.goto("/");
    const banner = fresh.locator("#cookie-banner");
    await expect(banner).toBeVisible();
    await fresh.getByRole("button", { name: "Aceptar" }).click();
    await expect(banner).toBeHidden();
    expect(await fresh.evaluate(() => localStorage.getItem("coma_cookie_consent"))).toBe(
      "accepted"
    );
    await fresh.reload();
    await expect(banner).toBeHidden();
  });

  test("Kit Digital informa del estado de la convocatoria", async ({ page }) => {
    await page.goto("/kit-digital/");
    await expect(page.getByText(/Orden TDF\/39\/2026/).first()).toBeVisible();
    await expect(page.getByRole("img", { name: /Kit Digital cofinanciado/i })).toBeAttached();
  });

  test("configurador de precios lleva los extras al contacto", async ({ page }) => {
    await page.goto("/precios/");
    await expect(page.locator("main h1")).toContainText("99");
    await page.locator("label.opt", { hasText: "Multiidioma" }).click();
    await page.locator("label.opt", { hasText: "Blog" }).click();
    await expect(page.locator("[data-sum]")).toContainText("Multiidioma, Blog");
    await page.getByRole("button", { name: /Pedir presupuesto/ }).click();
    await expect(page).toHaveURL(/\/contacto\/\?plan=web&extras=/);
    await expect(page.locator('input[value^="Web desde"]')).toBeChecked();
    await expect(page.locator("textarea[name=mensaje]")).toHaveValue(/Multiidioma, Blog/);
  });

  test("SEO/GEO: datos estructurados válidos, llms.txt y robots", async ({ page, request }) => {
    for (const path of PAGES) {
      await page.goto(path);
      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
      expect(blocks.length, path).toBeGreaterThan(0);
      for (const b of blocks) expect(() => JSON.parse(b), path).not.toThrow();
    }
    const llms = await request.get("/llms.txt");
    expect(llms.status()).toBe(200);
    expect(await llms.text()).toMatch(/99 €/);
    const robots = await (await request.get("/robots.txt")).text();
    expect(robots).toMatch(/GPTBot/);
    expect(robots).toMatch(/sitemap-index\.xml/);
  });

  test("brief de contacto valida campos obligatorios", async ({ page }) => {
    await page.goto("/contacto/");
    await page.getByRole("button", { name: /Preparar email/i }).click();
    await expect(page.getByText(/Indica tu nombre/)).toBeVisible();
  });

  test("menú móvil abre y navega", async ({ page, isMobile }) => {
    test.skip(!isMobile, "solo móvil");
    await page.goto("/");
    await page.getByRole("button", { name: "Abrir menú" }).click();
    const menu = page.getByRole("navigation", { name: "Menú móvil" });
    await expect(menu).toBeVisible();
    await menu.getByRole("link", { name: "Kit Digital" }).click();
    await expect(page).toHaveURL(/\/kit-digital\/$/);
  });

  test("navegación principal en escritorio", async ({ page, isMobile }) => {
    test.skip(isMobile, "solo escritorio");
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Principal" });
    await nav.getByRole("link", { name: "Agentes de IA" }).click();
    await expect(page).toHaveURL(/\/agentes-ia\/$/);
    await expect(nav.getByRole("link", { name: "Agentes de IA" })).toHaveAttribute(
      "aria-current",
      "page"
    );
  });
});
