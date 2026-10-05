# COMA - Comunicación en Mallorca

Web de [comunicacionenmallorca.com](https://comunicacionenmallorca.com) (Publicom Marketing 2000 SL), construida con [Astro](https://astro.build) como sitio estático.

## Estructura

- `src/pages/` — inicio, servicios (`[service].astro`: diseño web, SEO y GEO, agentes de IA, automatizaciones, notoriedad), precios (presupuesto dinámico), Kit Digital, contacto, legales y `llms.txt`.
- `src/data/` — contenido editable: empresa, clientes y sectores (`site.ts`), servicios (`services.ts`), precios y extras del presupuesto dinámico (`pricing.ts`) y textos legales (`legal/*.html`).
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
- Precio base (99 € + IVA), lo que incluye y extras: `src/data/pricing.ts`. Para mostrar el precio de un extra, rellena su campo `price`.
- Precios del presupuesto dinámico: `src/data/pricing.ts` (cada extra tiene `billing`: `once`, `month` o `custom`; `custom` = a medida, no suma). Los importes actuales son orientativos: ajústalos a tu tarifa real.
- No hay página de trabajos: el portfolio es la propia web (`/trabajos/` redirige a la home).
- Email, dirección, clientes, referencias y sectores: `src/data/site.ts`.
- Imagen para redes sociales: `node scripts/og-image.cjs` regenera `public/og-coma.png`.
- Estado del Kit Digital (fecha y convocatoria): `src/pages/kit-digital.astro`. Revísalo cuando Red.es publique una nueva convocatoria.

## SEO y GEO

Ver [docs/SEO-GEO.md](docs/SEO-GEO.md). En resumen: ~350 páginas (servicios, `/zonas/` con 82 lugares, `/<servicio>/<lugar>/`, `/guias/`, `/sobre-coma/`), schema.org completo, sitemap con `lastmod`, `robots.txt` con rastreadores de IA, `/llms.txt` y `/llms-full.txt`, IndexNow (`npm run seo:indexnow`). Contenido local en `src/data/places.ts`, guías en `src/data/guides.ts`, personas y opiniones reales en `src/data/site.ts` (`team`, `testimonials`, `social`).

## Anuncios y outbound

Ver [docs/ADS.md](docs/ADS.md): GTM/GA4/Google Ads/Meta/TikTok/LinkedIn/Bing por variables `PUBLIC_*`, Consent Mode v2, eventos y atribución UTM, landings `/lp/*` y personalización para outbound.

## Analítica y cookies

Microsoft Clarity se inyecta en el HTML con `CLARITY_PROJECT_ID`, y el resto de etiquetas (ver docs/ADS.md) se cargan por variables `PUBLIC_*`. **Nada se carga si el usuario no acepta las cookies** (`coma_cookie_consent` en `localStorage`).

## Despliegue

- **Railway** (recomendado): ver [docs/DEPLOY-RAILWAY.md](docs/DEPLOY-RAILWAY.md). El `Dockerfile` hace el build de Astro y sirve `dist/`.
- **Dinahosting**: ver [docs/DEPLOY-DINAHOSTING.md](docs/DEPLOY-DINAHOSTING.md) (`npm run pack:dinahosting` genera `release/coma-dinahosting.zip`).
- **Vercel**: `vercel.json` ya define build, salida y cabeceras.

Repositorio: https://github.com/nobadis/COMA
