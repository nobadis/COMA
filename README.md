# Comunicación en Mallorca — sitio estático

Clon fiel de [comunicacionenmallorca.com](https://comunicacionenmallorca.com) migrado desde WordPress/Elementor.

## Estructura

- `site/` — sitio publicable (HTML, assets, legal, cookies).
- `scripts/mirror.py` — descarga desde WordPress.
- `scripts/postprocess.py` — SEO, seguridad, responsive y fixes estáticos.

## Comandos

```bash
npm install
npm run dev          # http://127.0.0.1:4173
npm run postprocess  # aplicar fixes sin re-descargar
npm run mirror       # re-clonar + postprocesar
npm run validate     # lint + tests E2E
```

## Calidad

- Layout Elementor + Swiper conservado.
- CSS con rutas locales (sin dependencias rotas a WordPress).
- SEO: canonical, meta description, Open Graph.
- Seguridad: cabeceras HSTS/CSP en `site/vercel.json` y `site/_headers`.
- Sin teléfono, año dinámico, cookies funcionales en estático.
- Tests Playwright automatizados.

## Despliegue

Publicar carpeta `site/` en Vercel, Cloudflare Pages o GitHub Pages.

Repositorio: https://github.com/nobadis/COMA
