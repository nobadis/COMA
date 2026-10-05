// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const SITE = "https://comunicacionenmallorca.com";
// Páginas que no deben indexarse (landings de anuncios y conversión): fuera del sitemap.
const EXCLUDED = /\/(lp|gracias)\//;
// Fecha de despliegue: Bing y Google la usan para decidir cuándo volver a rastrear.
const BUILD_DATE = new Date();

/**
 * Prioridad orientativa por tipo de página.
 * @param {string} path
 */
function priority(path) {
  if (path === "/") return 1;
  if (
    /^\/(diseno-web|seo-geo|agentes-ia|automatizaciones|notoriedad-de-marca|precios|kit-digital)\/$/.test(
      path
    )
  )
    return 0.9;
  if (/^\/(sobre-coma|contacto|zonas)\/$/.test(path)) return 0.8;
  if (/^\/(zonas\/mallorca|(diseno-web|seo-geo|agentes-ia)\/(mallorca|palma))\/$/.test(path))
    return 0.8;
  if (/^\/guias\//.test(path)) return 0.7;
  if (/^\/(aviso-legal|cookies|privacidad)\/$/.test(path)) return 0.2;
  return 0.6;
}

export default defineConfig({
  site: SITE,
  trailingSlash: "always",
  build: { format: "directory", inlineStylesheets: "auto" },
  redirects: { "/trabajos/": "/" },
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  integrations: [
    sitemap({
      filter: (page) => !EXCLUDED.test(page),
      serialize(item) {
        const path = new URL(item.url).pathname;
        return {
          ...item,
          lastmod: BUILD_DATE.toISOString(),
          changefreq: /** @type {any} */ (
            path === "/" || /^\/guias\/$/.test(path) ? "weekly" : "monthly"
          ),
          priority: priority(path),
        };
      },
    }),
  ],
  devToolbar: { enabled: false },
});
