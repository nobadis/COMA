const { test, expect } = require("@playwright/test");

const PAGES = [
  "/",
  "/diseno-web/",
  "/seo-geo/",
  "/precios/",
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
  await page.addInitScript(() => {
    localStorage.setItem("coma_cookie_consent", "rejected");
    sessionStorage.setItem("coma_intro", "1");
  });
});

test.describe("COMA - Comunicación en Mallorca", () => {
  test("home con branding, hero y servicios", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/COMA - Comunicación en Mallorca/i);
    await expect(page.getByRole("heading", { level: 1 })).toHaveAccessibleName(
      /Hacemos que tu empresa se note/i
    );
    await expect(page.getByRole("link", { name: /Calcula tu web desde 99/ }).first()).toBeVisible();
    await expect(page.getByText(/Mallorca Live Festival/).first()).toBeVisible();
    const servicios = page.locator("#servicios");
    for (const name of [
      "Diseño web",
      "SEO y GEO",
      "Agentes de IA",
      "Automatizaciones",
      "Notoriedad de marca",
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

  test("presupuesto dinámico: suma en directo y lleva el resumen al contacto", async ({ page }) => {
    await page.goto("/precios/");
    await expect(page.locator("main h1")).toContainText("Monta tu web");
    await expect(page.locator("[data-once]")).toHaveText("99");
    await page.locator(".opt", { hasText: "Multiidioma" }).locator("label").click();
    await page.locator(".opt", { hasText: "Blog" }).locator("label").click();
    await expect(page.locator("[data-once]")).toHaveText("227");
    await expect(page.locator("[data-sum]")).toContainText("Multiidioma, Blog");
    await page.locator(".opt", { hasText: "SEO local" }).locator("label").click();
    await expect(page.locator("[data-month]")).toHaveText("99");
    await page.locator(".opt", { hasText: "Agente de IA" }).locator("label").click();
    await expect(page.locator("[data-custom]")).toContainText("Agente de IA");
    await expect(page.locator("[data-once]")).toHaveText("227"); // la IA no suma: es a medida
    await page.getByRole("button", { name: /Pedir presupuesto/ }).click();
    await expect(page).toHaveURL(/\/contacto\/\?plan=web&extras=/);
    await expect(page.locator('input[value^="Web desde"]')).toBeChecked();
    const msg = page.locator("textarea[name=mensaje]");
    await expect(msg).toHaveValue(/Multiidioma, Blog/);
    await expect(msg).toHaveValue(/227 € \+ IVA/);
  });

  test("las cantidades (idiomas) multiplican el precio y no hay extra de más páginas", async ({
    page,
  }) => {
    await page.goto("/precios/");
    await expect(page.locator(".opt", { hasText: "Más páginas" })).toHaveCount(0);
    const opt = page.locator(".opt", { hasText: "Multiidioma" });
    await opt.getByRole("button", { name: /Más idiomas/ }).click();
    await expect(page.locator("[data-once]")).toHaveText("148"); // 99 + 1 × 49
    await opt.getByRole("button", { name: /Más idiomas/ }).click();
    await expect(page.locator("[data-once]")).toHaveText("197"); // 99 + 2 × 49
  });

  test("SEO tiene presupuesto dinámico y la IA se presupuesta a medida", async ({ page }) => {
    await page.goto("/seo-geo/");
    await page.locator(".opt", { hasText: "SEO local" }).locator("label").click();
    await expect(page.locator("[data-month]")).toHaveText("99");
    await page.goto("/agentes-ia/");
    await expect(page.getByRole("heading", { name: /a medida/i })).toBeVisible();
    await expect(page.locator(".opt")).toHaveCount(0);
  });

  test("la navegación no lista Webs ni SEO, tiene Inicio y no hay página de trabajos", async ({
    page,
    request,
    isMobile,
  }) => {
    test.skip(isMobile, "la barra principal solo se ve en escritorio");
    await page.goto("/precios/");
    const nav = page.getByRole("navigation", { name: "Principal" });
    await expect(nav.getByRole("link", { name: "Webs" })).toHaveCount(0);
    await expect(nav.getByRole("link", { name: /SEO/ })).toHaveCount(0);
    await expect(nav.getByRole("link", { name: "Inicio" })).toHaveAttribute("href", "/");
    await expect(page.locator('a[href="/trabajos/"]')).toHaveCount(0);
    const res = await request.get("/trabajos/");
    expect(await res.text()).toMatch(/url=\//); // redirige a la home
  });

  test("la home cuenta con intro la primera vez y la retira", async ({ browser }) => {
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    await page.addInitScript(() => localStorage.setItem("coma_cookie_consent", "rejected"));
    await page.goto("/");
    await expect(page.locator("[data-intro]")).toBeVisible();
    await expect(page.locator("[data-intro]")).toHaveCount(0, { timeout: 8000 });
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await ctx.close();
  });

  test("transición entre páginas con cortina", async ({ page }) => {
    await page.goto("/");
    await page.locator('footer a[href="/precios/"]').first().click();
    await expect(page).toHaveURL(/\/precios\/$/);
    await expect(page.locator("main h1")).toBeVisible();
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

  test("móvil: carrusel de deslizar (servicios) con imán y barra de posición", async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, "solo móvil");
    await page.goto("/diseno-web/");
    const list = page.locator(".dl__list[data-hs]");
    await list.scrollIntoViewIfNeeded();
    const sizes = await list.evaluate((e) => ({ sw: e.scrollWidth, cw: e.clientWidth }));
    expect(sizes.sw).toBeGreaterThan(sizes.cw);
    await list.evaluate((e) => e.scrollTo({ left: e.clientWidth * 0.8 }));
    await expect(list.locator("xpath=following-sibling::*[1]").locator("i")).toHaveAttribute(
      "style",
      /left: (?!0%)/
    );
  });

  test("móvil: sin scroll horizontal de página en ninguna ruta", async ({ page, isMobile }) => {
    test.skip(!isMobile, "solo móvil");
    for (const path of PAGES) {
      await page.goto(path);
      const h = await page.evaluate(() => document.documentElement.scrollHeight);
      for (let y = 0; y < h; y += 700) {
        await page.evaluate((v) => window.scrollTo({ top: v, behavior: "instant" }), y);
        const extra = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth
        );
        expect(extra, `${path} @${y}`).toBeLessThanOrEqual(0);
      }
    }
  });

  test("móvil: las tarjetas se mueven de lado solo con el scroll vertical", async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, "solo móvil");
    await page.goto("/");
    const sec = page.locator("[data-pin]").first();
    await expect(sec).toHaveClass(/is-pinned/);
    const geo = await sec.evaluate((e) => ({
      top: e.getBoundingClientRect().top + scrollY,
      h: e.getBoundingClientRect().height,
      vh: innerHeight,
    }));
    const left = () =>
      sec.evaluate((e) => e.querySelector("[data-pin-track] > *").getBoundingClientRect().left);
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), geo.top + 10);
    await page.waitForTimeout(400);
    const a = await left();
    await page.evaluate(
      (y) => window.scrollTo({ top: y, behavior: "instant" }),
      geo.top + (geo.h - geo.vh) * 0.7
    );
    await page.waitForTimeout(400);
    expect(await left()).toBeLessThan(a - 300);
  });

  test("zoom a la coma: se llena de rojo y se funde en el texto", async ({ page }) => {
    await page.goto("/");
    const geo = await page.evaluate(() => {
      const r = document.querySelector(".portal").getBoundingClientRect();
      return { top: r.top + scrollY, h: r.height, vh: innerHeight };
    });
    const veilOpacity = () =>
      page.evaluate(() => getComputedStyle(document.querySelector(".portal__veil")).opacity);
    const at = async (f) => {
      await page.evaluate(
        (y) => window.scrollTo({ top: y, behavior: "instant" }),
        geo.top + (geo.h - geo.vh) * f
      );
      await page.waitForTimeout(350);
    };
    await at(0.3);
    expect(Number(await veilOpacity())).toBeGreaterThan(0.95);
    await at(0.98);
    expect(Number(await veilOpacity())).toBeLessThan(0.05);
    await expect(page.locator(".portal__copy")).toBeVisible();
  });

  test("escritorio: las tarjetas entran desplazándose de lado y quedan en su sitio", async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, "solo escritorio");
    await page.goto("/");
    const top = await page.evaluate(
      () => document.querySelector(".pf").getBoundingClientRect().top + scrollY
    );
    const lastItem = page.locator(".pf__item").last();
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), top + 100);
    await page.waitForTimeout(400);
    const shiftX = () =>
      lastItem.evaluate((e) => new DOMMatrixReadOnly(getComputedStyle(e).transform).m41);
    expect(await shiftX()).toBeGreaterThan(50); // todavía desplazado hacia la derecha
    const bottom = await page.evaluate(
      () => document.querySelector(".pf").getBoundingClientRect().bottom + scrollY
    );
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), bottom - 900);
    await page.waitForTimeout(400);
    expect(await shiftX()).toBe(0);
  });

  test("navegación principal en escritorio", async ({ page, isMobile }) => {
    test.skip(isMobile, "solo escritorio");
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Principal" });
    await nav.getByRole("link", { name: "Precios" }).click();
    await expect(page).toHaveURL(/\/precios\/$/);
    await expect(nav.getByRole("link", { name: "Precios" })).toHaveAttribute(
      "aria-current",
      "page"
    );
  });
});

/* ------------------------------------------------------------------ SEO / GEO / Ads */
const fs = require("fs");
const nodePath = require("path");

const DIST = nodePath.join(__dirname, "..", "dist");
const htmlFiles = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = nodePath.join(dir, e.name);
    if (e.isDirectory()) return htmlFiles(full);
    return e.name === "index.html" ? [full] : [];
  });
const meta = (html, re) => (html.match(re) || [])[1];

test.describe("SEO / GEO / Ads", () => {
  test("zonas: hub y páginas locales con contenido propio", async ({ page }) => {
    for (const path of [
      "/zonas/",
      "/zonas/mallorca/",
      "/zonas/palma/",
      "/zonas/cataluna/",
      "/diseno-web/palma/",
      "/seo-geo/valencia/",
      "/agentes-ia/comunidad-de-madrid/",
    ]) {
      const res = await page.goto(path);
      expect(res?.status(), path).toBe(200);
      await expect(page.locator("h1"), path).toHaveCount(1);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `https://comunicacionenmallorca.com${path}`
      );
      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
      const types = blocks.flatMap((b) => JSON.parse(b)).map((o) => o["@type"]);
      expect(types.flat(), path).toContain("BreadcrumbList");
    }
    await page.goto("/diseno-web/valencia/");
    await expect(page.locator("h1")).toContainText("Valencia");
    await expect(page).toHaveTitle(/Diseño web en Valencia desde 99/);
    // Honestidad: fuera de Palma se declara trabajo en remoto, nunca una oficina inventada.
    await expect(page.locator("main")).toContainText(/en remoto desde nuestra sede de Palma/);
    await page.goto("/diseno-web/palma/");
    await expect(page.locator("main")).toContainText(/Paseo Mallorca, 16/);
  });

  test("todas las páginas indexables tienen título y descripción únicos", () => {
    const seen = { title: new Map(), desc: new Map() };
    for (const file of htmlFiles(DIST)) {
      const html = fs.readFileSync(file, "utf8");
      if (!html.includes("</head>") || /name="robots" content="noindex/.test(html)) continue;
      const title = meta(html, /<title>([^<]+)<\/title>/);
      const desc = meta(html, /<meta name="description" content="([^"]+)"/);
      expect(title, file).toBeTruthy();
      expect(desc, file).toBeTruthy();
      expect(title.length, `${file} título`).toBeLessThanOrEqual(72);
      expect(desc.length, `${file} descripción`).toBeLessThanOrEqual(215);
      expect(
        seen.title.has(title),
        `título repetido: ${title} (${file} / ${seen.title.get(title)})`
      ).toBe(false);
      expect(seen.desc.has(desc), `descripción repetida: ${desc} (${file})`).toBe(false);
      seen.title.set(title, file);
      seen.desc.set(desc, file);
    }
    expect(seen.title.size).toBeGreaterThan(300);
  });

  test("sitemap: cientos de URLs con lastmod y sin landings ni gracias", async ({ request }) => {
    const index = await (await request.get("/sitemap-index.xml")).text();
    expect(index).toMatch(/sitemap-0\.xml/);
    const xml = await (await request.get("/sitemap-0.xml")).text();
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    expect(locs.length).toBeGreaterThan(300);
    expect(xml).toMatch(/<lastmod>\d{4}-\d{2}-\d{2}T/);
    expect(locs.some((u) => /\/lp\/|\/gracias\//.test(u))).toBe(false);
    for (const u of ["/guias/", "/zonas/", "/sobre-coma/", "/seo-geo/palma/"])
      expect(locs).toContain(`https://comunicacionenmallorca.com${u}`);
  });

  test("robots, llms y archivos de confianza", async ({ request }) => {
    const robots = await (await request.get("/robots.txt")).text();
    for (const bot of [
      "GPTBot",
      "ClaudeBot",
      "Claude-SearchBot",
      "PerplexityBot",
      "Google-Extended",
      "Bingbot",
      "AdsBot-Google",
    ])
      expect(robots).toContain(bot);
    expect(robots).not.toMatch(/Disallow:\s*\/\s*$/m);
    const full = await request.get("/llms-full.txt");
    expect(full.status()).toBe(200);
    expect(await full.text()).toMatch(/Diseño web en Valencia|\/diseno-web\/valencia\//);
    const key = fs.readdirSync(nodePath.join(DIST)).find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
    expect(key, "archivo de clave IndexNow").toBeTruthy();
    expect((await (await request.get(`/${key}`)).text()).trim()).toBe(key.replace(".txt", ""));
    expect((await request.get("/.well-known/security.txt")).status()).toBe(200);
    expect((await request.get("/manifest.webmanifest")).status()).toBe(200);
  });

  test("guías: Article con autoría y fechas", async ({ page }) => {
    await page.goto("/guias/");
    await expect(page.locator("main h1")).toBeVisible();
    await page.goto("/guias/cuanto-cuesta-una-pagina-web/");
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const article = blocks.flatMap((b) => JSON.parse(b)).find((o) => o["@type"] === "Article");
    expect(article.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}/);
    expect(article.author["@id"]).toContain("#org");
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute("content", "article");
  });

  test("sobre COMA: datos reales y sin inventar personas ni opiniones", async ({ page }) => {
    await page.goto("/sobre-coma/");
    const main = page.locator("main");
    await expect(main).toContainText("Publicom Marketing 2000 SL");
    await expect(main).toContainText("B07949647");
    await expect(main.getByText("Quién está detrás")).toHaveCount(0); // solo si hay equipo en site.ts
    await expect(main.getByText("Lo que dicen nuestros clientes")).toHaveCount(0);
  });

  test("landings de anuncios: noindex, sin menú, formulario y personalización", async ({
    page,
  }) => {
    await page.goto("/lp/web-99/");
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.locator("header .hdr__nav")).toHaveCount(0);
    await page
      .getByRole("button", { name: /Quiero mi web/ })
      .last()
      .click();
    await expect(page.getByText(/Indica tu nombre y un email o teléfono/)).toBeVisible();
    await page.goto("/lp/tu-empresa/?e=Cl%C3%ADnica%20Sol&s=dental");
    await expect(page.locator("[data-lp-company]").first()).toHaveText("Clínica Sol");
    await expect(page.locator("[data-lp-sector]").first()).toHaveText("dental");
    // Sin HTML: la personalización solo escribe texto plano.
    await page.goto("/lp/tu-empresa/?e=%3Cimg%20src%3Dx%20onerror%3Dalert(1)%3E");
    await expect(page.locator("main img[src='x']")).toHaveCount(0);
    const res = await page.goto("/gracias/");
    expect(res?.status()).toBe(200);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  });

  test("sin IDs configurados no se carga ninguna etiqueta de seguimiento", async ({ page }) => {
    const hosts = [];
    page.on("request", (r) => hosts.push(new URL(r.url()).hostname));
    await page.addInitScript(() => localStorage.setItem("coma_cookie_consent", "accepted"));
    await page.goto("/");
    await page.waitForTimeout(800);
    for (const h of [
      "googletagmanager.com",
      "connect.facebook.net",
      "analytics.tiktok.com",
      "snap.licdn.com",
      "bat.bing.com",
    ])
      expect(
        hosts.some((x) => x.endsWith(h)),
        h
      ).toBe(false);
  });

  test("las cuatro configuraciones de cabeceras comparten la misma CSP", () => {
    const root = nodePath.join(__dirname, "..");
    const vercel = JSON.parse(fs.readFileSync(nodePath.join(root, "vercel.json"), "utf8"));
    const serve = JSON.parse(fs.readFileSync(nodePath.join(root, "public/serve.json"), "utf8"));
    const pick = (cfg) =>
      cfg.headers[0].headers.find((h) => h.key === "Content-Security-Policy").value;
    const csp = pick(vercel);
    expect(pick(serve)).toBe(csp);
    expect(fs.readFileSync(nodePath.join(root, "public/_headers"), "utf8")).toContain(csp);
    expect(fs.readFileSync(nodePath.join(root, "public/.htaccess"), "utf8")).toContain(csp);
    for (const host of [
      "googletagmanager.com",
      "connect.facebook.net",
      "analytics.tiktok.com",
      "snap.licdn.com",
      "bat.bing.com",
    ])
      expect(csp).toContain(host);
  });
});
