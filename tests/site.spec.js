const { test, expect } = require("@playwright/test");

test.describe("Clon comunicacionenmallorca.com", () => {
  test("home carga con branding y carrusel", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/kit digital/i);
    await expect(page.locator(".elementor-image-carousel")).toBeVisible();
    await expect(page.locator('img[src*="logo-alta"]').first()).toBeVisible();
    await expect(page.getByRole("heading", { name: /Kit digital para Pymes/i })).toBeVisible();
  });

  test("no muestra teléfono ni plantilla barky", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText(/659/i)).toHaveCount(0);
    await expect(page.getByText(/barky/i)).toHaveCount(0);
    await expect(page.getByText("About Us")).toHaveCount(0);
  });

  test("año dinámico en copyright", async ({ page }) => {
    await page.goto("/");
    const year = String(new Date().getFullYear());
    await expect(page.locator(".coma-year").first()).toHaveText(year);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      /comunicacionenmallorca\.com/
    );
  });

  test("páginas legales cargan", async ({ page }) => {
    for (const path of ["/aviso-legal/", "/cookies/", "/privacidad/"]) {
      await page.goto(path);
      await expect(page.locator("h1, h2").first()).toBeVisible();
      await expect(page.getByText(/659/i)).toHaveCount(0);
    }
  });

  test("banner cookies funcional", async ({ page }) => {
    await page.addInitScript(() => localStorage.removeItem("coma_cookie_consent"));
    await page.goto("/");
    const banner = page.locator("#cmplz-cookiebanner-container .cmplz-cookiebanner");
    await expect(banner).toBeVisible();
    await page.getByRole("button", { name: "Aceptar" }).first().click();
    await expect(banner).toBeHidden();
  });

  test("menú y secciones principales", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Soluciones digitales" })).toBeVisible();
    await expect(page.getByRole("link", { name: /kit digital/i })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contacto" })).toBeVisible();
    await page.locator("#soluciones").scrollIntoViewIfNeeded();
    await expect(page.getByText("Comercio Electrónico").first()).toBeAttached();
  });

  test("textos legales con datos corporativos actualizados", async ({ page }) => {
    const banned = [/Jaime/i, /Mora\s+Bosch/i, /son\s+Catlaret/i, /659\s*47/i, /659477715/];
    for (const path of ["/aviso-legal/", "/cookies/", "/privacidad/"]) {
      await page.goto(path);
      for (const pattern of banned) {
        await expect(page.getByText(pattern)).toHaveCount(0);
      }
      await expect(page.getByText("Publicom Marketing 2000 SL").first()).toBeVisible();
      await expect(page.getByText(/PASEO MALLORCA,\s*16/i).first()).toBeVisible();
      await expect(
        page.locator('a[href^="mailto:info@comunicacionenmallorca.com"]').first()
      ).toBeVisible();
    }
  });

  test("contacto y footer correctos", async ({ page }) => {
    await page.goto("/");
    await page.locator("#contacto").scrollIntoViewIfNeeded();
    await expect(
      page.getByRole("heading", {
        name: /¿Necesitas alguna información sobre nosotros o algún servicio\?/i,
      })
    ).toBeVisible();
    await expect(
      page.locator('a[href^="mailto:info@comunicacionenmallorca.com"]').first()
    ).toBeVisible();
    await expect(page.locator(".elementor-element-422b94f3 iframe")).toBeVisible();

    const footer = page.locator(".elementor-location-footer");
    await footer.scrollIntoViewIfNeeded();
    await expect(footer.locator('a[href="/aviso-legal/"]').first()).toBeVisible();
    await expect(footer.locator('a[href="/cookies/"]').first()).toBeVisible();
    await expect(footer.locator('a[href="/privacidad/"]').first()).toBeVisible();
    await expect(page.locator(".coma-year").first()).toHaveText(String(new Date().getFullYear()));
  });
});
