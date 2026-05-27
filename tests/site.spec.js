const { test, expect } = require("@playwright/test");

const legalPages = ["/aviso-legal.html", "/privacidad.html", "/cookies.html"];

test.describe("Sitio principal", () => {
  test("carga home y muestra contenidos clave", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Kit Digital - Comunicación en Mallorca/i);
    await expect(
      page.getByRole("heading", { name: /Kit Digital para pymes y autónomos/i })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: /Solicitar información/i })).toBeVisible();
  });

  test("navegación y enlaces legales funcionan", async ({ page }) => {
    await page.goto("/");
    for (const path of legalPages) {
      await page.goto(path);
      await expect(page.locator("h1")).toBeVisible();
    }
  });

  test("banner de cookies aparece si no hay consentimiento", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#cookieBanner")).toBeVisible();
  });

  test("aceptar cookies oculta banner y persiste estado", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Aceptar" }).click();
    await expect(page.locator("#cookieBanner")).toBeHidden();
    await page.reload();
    await expect(page.locator("#cookieBanner")).toBeHidden();
  });

  test("enlaces principales del menú existen", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Soluciones digitales" })).toBeVisible();
    await expect(page.getByRole("link", { name: "¿Qué es el Kit Digital?" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contacto" })).toBeVisible();
  });
});
