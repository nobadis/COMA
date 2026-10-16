// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: cambiar por el dominio definitivo (también en src/config/site.ts)
export default defineConfig({
  site: 'https://saborpatricio.com',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !/\/(pedir|404)\/?$/.test(new URL(page).pathname) })],
  build: { inlineStylesheets: 'always' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
