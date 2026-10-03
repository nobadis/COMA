// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://comunicacionenmallorca.com",
  trailingSlash: "always",
  build: { format: "directory", inlineStylesheets: "auto" },
  redirects: { "/trabajos/": "/" },
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
