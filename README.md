# Comunicación en Mallorca - Sitio estático profesional

Migración desde WordPress a stack propio (HTML/CSS/JS) con estándares de calidad para producción.

## Incluye

- Home con contenido principal de servicios Kit Digital.
- Diseño responsive con mejora de jerarquía visual y CTA.
- SEO básico técnico: `title`, `meta description`, Open Graph, `robots.txt`, `sitemap.xml`, datos estructurados.
- Banner de cookies funcional (consentimiento local).
- Páginas legales separadas: aviso legal, privacidad y cookies.
- Pipeline CI con GitHub Actions para validación automática en cada push/PR.
- Testing E2E con Playwright.
- Linting y validación de HTML.
- Cabeceras de seguridad listas para despliegue en Vercel.

## Comandos de calidad

```bash
npm install
npm run validate
```

Comandos disponibles:

- `npm run dev`: servidor local en `http://127.0.0.1:4173`
- `npm run lint:js`: lint de JavaScript
- `npm run lint:html`: validación HTML
- `npm run test:e2e`: tests de navegador con Playwright
- `npm run validate`: formato + lint + tests E2E

## Publicación recomendada

- GitHub Pages (rápido y gratis)
- Vercel (recomendado para evoluciones)
- Cloudflare Pages

## Pasos rápidos con GitHub

1. Inicializar repositorio git y subir archivos.
2. Activar despliegue en tu plataforma elegida.
3. Configurar dominio `comunicacionenmallorca.com`.
4. Añadir SSL obligatorio.

## Pendientes para cerrar al 100%

- Sustituir textos legales por versión validada por asesoría jurídica.
- Revisar y copiar posibles páginas internas adicionales no accesibles durante extracción automática.
- Añadir analítica solo tras consentimiento explícito (por ejemplo GA4 con modo consentimiento).
