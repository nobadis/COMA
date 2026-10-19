const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("coma_cookie_consent", "rejected");
    sessionStorage.setItem("coma_intro", "1");
  });
  await page.goto("/despachos/");
});

test("303: aprobación obligatoria, bloqueo de incidencias y justificante simulado", async ({
  page,
}) => {
  const demo = page.locator("[data-iva-demo]");
  const consent = demo.getByRole("checkbox", { name: /He revisado el borrador/ });
  const issue = demo.getByRole("checkbox", { name: /Simular una incidencia/ });
  const submit = demo.getByRole("button", { name: "Simular presentación", exact: true });
  const status = demo.getByRole("status");

  await expect(demo).toContainText("Sin conexión con la AEAT");
  await expect(demo).toContainText("2.200,00 €");
  await expect(submit).toBeDisabled();
  await consent.check();
  await expect(submit).toBeEnabled();
  await issue.check();
  await expect(consent).not.toBeChecked();
  await expect(consent).toBeDisabled();
  await expect(submit).toBeDisabled();
  await expect(status).toContainText("Presentación bloqueada");
  await issue.uncheck();
  await expect(submit).toBeDisabled();
  await consent.check();
  await submit.click();
  await expect(status).toContainText("No se ha enviado ninguna declaración");
  await expect(demo.locator("[data-iva-receipt]")).toBeVisible();
  await expect(demo.locator("[data-iva-receipt]")).toContainText("Sin validez fiscal");
  await expect(demo.locator("[data-iva-receipt]")).toContainText("Pago pendiente");
  await expect(submit).toBeDisabled();
  await demo.getByRole("button", { name: "Reiniciar demostración" }).click();
  await expect(consent).not.toBeChecked();
  await expect(submit).toBeDisabled();
  await expect(demo.locator("[data-iva-receipt]")).toBeHidden();
});

test("303: propuesta, alcance y contacto están conectados", async ({ page }) => {
  const section = page.locator("#modelo-303");
  await expect(section.getByRole("heading", { level: 2 })).toContainText("El IVA no termina");
  const cta = section.getByRole("link", { name: "Quiero automatizar mis 303" });
  await expect(cta).toHaveAttribute("href", /^mailto:info@comunicacionenmallorca\.com/);
  const href = await cta.getAttribute("href");
  expect(decodeURIComponent(href)).toContain("Me interesa el módulo Modelo 303");
  await expect(section).toContainText("fuera de las cuotas base");
  await expect(section).toContainText("Si no hay canal compatible");
  const faq = page.locator(".faq details").filter({ hasText: "¿El Modelo 303 está incluido" });
  await faq.locator("summary").click();
  await expect(faq).toContainText("El módulo 303 tiene presupuesto propio");
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth
  );
  expect(overflow).toBeLessThanOrEqual(0);
});

test("303: el contenido y el contacto siguen disponibles sin JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  try {
    await page.goto("http://127.0.0.1:4173/despachos/");
    const section = page.locator("#modelo-303");
    await expect(section.getByRole("link", { name: "Quiero automatizar mis 303" })).toBeVisible();
    await expect(section.locator("noscript p")).toContainText("tu equipo revisa y aprueba");
    await expect(section.locator("[data-iva-controls]")).toBeHidden();
  } finally {
    await context.close();
  }
});
