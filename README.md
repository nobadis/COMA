# COMA - Comunicación en Mallorca

Web de [comunicacionenmallorca.com](https://comunicacionenmallorca.com) (Publicom Marketing 2000 SL), construida con [Astro](https://astro.build) como sitio estático.

## Estructura

- `src/pages/` — páginas: inicio, notoriedad, agentes de IA, automatizaciones (`[service].astro`), Kit Digital, contacto y legales.
- `src/data/` — contenido editable: datos de empresa (`site.ts`), servicios (`services.ts`) y textos legales (`legal/*.html`).
- `src/components/` — secciones reutilizables (hero, servicios, demo de agente IA, flujo de automatización, FAQ, CTA…).
- `src/styles/global.css` — sistema de diseño (tokens, tipografía, botones, animaciones).
- `src/scripts/main.ts` — scroll suave (Lenis), cabecera, menú móvil, animaciones y banner de cookies.
- `public/` — favicon, robots y cabeceras de seguridad (`serve.json`, `_headers`, `.htaccess`).

## Comandos

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # genera dist/ (+ Clarity si CLARITY_PROJECT_ID está definido)
npm run preview      # sirve dist/ en http://127.0.0.1:4173
npm run validate     # formato + tipos + lint + build + tests E2E (escritorio y móvil)
```

## Editar contenidos

- Textos de servicios: `src/data/services.ts`.
- Email, dirección y datos legales: `src/data/site.ts`.
- Estado del Kit Digital (fecha y convocatoria): `src/pages/kit-digital.astro`. Revísalo cuando Red.es publique una nueva convocatoria.

## Analítica y cookies

Microsoft Clarity se inyecta en el HTML con `CLARITY_PROJECT_ID`, pero **solo se carga si el usuario acepta las cookies** (`coma_cookie_consent` en `localStorage`).

## Despliegue

- **Railway** (recomendado): ver [docs/DEPLOY-RAILWAY.md](docs/DEPLOY-RAILWAY.md). El `Dockerfile` hace el build de Astro y sirve `dist/`.
- **Dinahosting**: ver [docs/DEPLOY-DINAHOSTING.md](docs/DEPLOY-DINAHOSTING.md) (`npm run pack:dinahosting` genera `release/coma-dinahosting.zip`).
- **Vercel**: `vercel.json` ya define build, salida y cabeceras.

Repositorio: https://github.com/nobadis/COMA
