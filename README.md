# Comunicación en Mallorca — clon estático

Clon fiel de [comunicacionenmallorca.com](https://comunicacionenmallorca.com) migrado desde WordPress/Elementor a hosting estático con control total del código.

## Contenido

- Sitio espejado en `site/` (HTML, CSS, JS, imágenes, fuentes y carruseles Swiper).
- Páginas: inicio, aviso legal, cookies y privacidad.
- Sin teléfono en la web (solicitado).
- Año del copyright dinámico (`coma-year.js`).
- Eliminados popups de plantilla demo (Barky).

## Comandos

```bash
npm install
npm run dev          # http://127.0.0.1:4173
npm run mirror       # re-sincronizar desde WordPress
npm run validate     # lint + tests E2E
```

## Despliegue

- **Vercel**: `outputDirectory` = `site` (ver `vercel.json` raíz).
- **Cloudflare Pages / GitHub Pages**: publicar carpeta `site/`.

## Repositorio

https://github.com/nobadis/COMA
