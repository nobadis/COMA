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
- COMA para despachos (`/despachos/`): módulos, precios (orientativos), extras bajo demanda, FAQ y el email del diagnóstico en `src/data/despachos.ts`. Las demos están en `src/components/despachos/`.
- No hay página de trabajos: el portfolio es la propia web (`/trabajos/` redirige a la home).
- Email, dirección, clientes, referencias y sectores: `src/data/site.ts`.
- Imagen para redes sociales: `node scripts/og-image.cjs` regenera `public/og-coma.png`.
- Estado del Kit Digital (fecha y convocatoria): `src/pages/kit-digital.astro`. Revísalo cuando Red.es publique una nueva convocatoria.

## SEO y GEO

Ver [docs/SEO-GEO.md](docs/SEO-GEO.md). El posicionamiento va en `<head>`, archivos de rastreo y páginas nuevas; el texto visible se mantiene corto. En resumen: ~350 páginas (servicios, `/zonas/` con 82 lugares, `/<servicio>/<lugar>/`, `/guias/`, `/sobre-coma/`), schema.org completo, sitemap con `lastmod`, `robots.txt` con rastreadores de IA, `/llms.txt` y `/llms-full.txt`, IndexNow (`npm run seo:indexnow`). El pie enlaza a Sobre COMA, guías y zonas. Contenido local en `src/data/places.ts`, guías en `src/data/guides.ts`, personas y opiniones reales en `src/data/site.ts` (`team`, `testimonials`, `social`).

## Anuncios y outbound

Ver [docs/ADS.md](docs/ADS.md): medición por variables `PUBLIC_*`, eventos (`generate_lead`, `view_offer`, `cta_click`), landings `/lp/*` y la estrategia de arranque (web a 99 € en Google Search y Meta).

Plan de campaña nov 2026 - feb 2027 con todas las piezas (vídeos, imágenes, textos de Google, simulación): carpeta [`publicidad/`](publicidad/). Se empieza por `publicidad/00-EMPIEZA-AQUI.html` y `publicidad/01-PLAN-DE-CAMPANA.txt`.

## Webs de ejemplo para clientes

Maquetas completas de webs de clientes servidas en `/ejemplos-web/<id>/<proyecto>/`. El `id` es aleatorio y largo, y las páginas no se enlazan, van con `noindex` (meta y cabecera `X-Robots-Tag`) y no están en el sitemap ni llevan la analítica de COMA. Cada página lleva marca de agua («Propuesta de diseño de COMA para <negocio> · no es la web oficial»): trama diagonal casi invisible más una etiqueta que enlaza a /contacto/.

- Código de cada ejemplo: `ejemplos/<proyecto>/` (un proyecto Astro propio). Registro de ids: `ejemplos/ejemplos.json`.
- Añadir o actualizar uno desde GitHub: `npm run ejemplo -- <proyecto> <url-del-repo>`. Al actualizar se conserva el id, así que el enlace del cliente no cambia. Con `--negocio="Nombre"` se fija el nombre de la etiqueta de la marca de agua (queda en `ejemplos.json`).
- `scripts/build-ejemplos.cjs` (dentro de `npm run build` y del `Dockerfile`) compila cada ejemplo con su `base` y reescribe las rutas absolutas para que la navegación funcione dentro de la subcarpeta.

## Vídeos promocionales

- `video/coma/` es el vídeo general (34 s) y `video/despachos/` el de COMA para despachos. Cada uno tiene `promo.html` (escenas animadas; abierto en el navegador se reproduce sin sonido) y `sound.py` (banda sonora sintetizada con numpy).
- Para regenerarlo: `node video/render.cjs video/coma/promo.html <carpeta-fotogramas>`, `python video/coma/sound.py sonido.wav` y montaje con ffmpeg (H.264 + AAC, `-movflags +faststart`). Las salidas locales (`video/*/out/`) no se suben.
- El vídeo publicado es `public/video/coma-promo.mp4` (con `coma-promo.jpg` de portada). Se abre desde el botón «COMA en 34 segundos» del pie, en un diálogo que solo descarga el MP4 al pulsarlo.

## Analítica y cookies

Microsoft Clarity se inyecta en el HTML con `CLARITY_PROJECT_ID`, y el resto de etiquetas (ver docs/ADS.md) se cargan por variables `PUBLIC_*`. **Nada se carga si el usuario no acepta las cookies** (`coma_cookie_consent` en `localStorage`).

## Despliegue

- **Railway** (recomendado): ver [docs/DEPLOY-RAILWAY.md](docs/DEPLOY-RAILWAY.md). El `Dockerfile` hace el build de Astro y sirve `dist/`.
- **Dinahosting**: ver [docs/DEPLOY-DINAHOSTING.md](docs/DEPLOY-DINAHOSTING.md) (`npm run pack:dinahosting` genera `release/coma-dinahosting.zip`).
- **Vercel**: `vercel.json` ya define build, salida y cabeceras.

Repositorio: https://github.com/nobadis/COMA
