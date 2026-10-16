# Sabor Patricio · Web

Web de **Sabor Patricio**, empanadas argentinas en Cala Major (Palma de Mallorca).
Hecha con [Astro](https://astro.build): HTML estático, ~8 KB de JS, imágenes AVIF/WebP automáticas.

## Páginas

- `/` — Landing con hero 3D, clásicas y gourmet, postres, bebidas, combos, pizza, historia, galería y ubicación. Sin precios ni carrito; los pedidos van directamente a WhatsApp.
- `/carta/` — Carta indexable y preguntas frecuentes locales.
- `/pedir` — Redirige a WhatsApp. De momento no se admiten pedidos desde la web; el formulario con carrito está aparcado en `src/pages/_pedir-formulario.astro` (el guion bajo evita que se publique) para retomarlo más adelante.

La selección de productos se basa en [Uber Eats](https://www.ubereats.com/es/store/sabor-patricio-empanadas/RKJ6avdNUqKkgAAOAqE3jg); los horarios se han incorporado desde la imagen del perfil de Instagram facilitada por el negocio.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
npm run preview
```

Requiere Node 22.12 o superior.

## Publicar

Railway despliega automáticamente `main` de `nobadis/SABOR-PATRICIO`. `railway.json` fija `npm run build` y `npm start`; el servidor entrega `dist/`, redirige `/pedir/` a WhatsApp y devuelve 404 real. GitHub debe tener `main` como rama predeterminada.

Guía de keywords, SEO local y tareas de Search Console: [docs/SEO-GEO.md](docs/SEO-GEO.md).

Es un sitio 100 % estático (`dist/`). Se puede subir a Netlify, Vercel o Cloudflare Pages:

- Comando de build: `npm run build`
- Carpeta de salida: `dist`

## Qué editar

Todo el contenido del negocio está en **`src/config/site.ts`**:

- `url`: dominio definitivo (cambialo también en `astro.config.mjs` y `public/robots.txt`).
- `hours`: horario real. Con horario cargado, la web muestra «Abierto ahora / Cerrado ahora» (hora de Madrid).
- `reviews`: reseñas reales de Google (texto literal). Si está vacío, se muestra solo el botón a Google.
- `flavors`: sabores, ingredientes y color de cada tarjeta. Las fotos están en `src/assets/flavors/<id>.png`.

## Legal

Titular de la web: **Marfer Obrador SL** (CIF B10645463), Carrer Son Julià, 7, nave 5 (Polígono Son Noguera), 07620 Llucmajor. Los datos viven en `site.legal` (`src/config/site.ts`) y alimentan `/aviso-legal`, `/privacidad`, `/cookies`, el pie y los datos estructurados. La web no usa cookies de analítica ni publicidad (la web no guarda nada en el navegador), por eso no hay aviso de cookies: si se añade analítica, hay que poner aviso y actualizar `/cookies`.

En el pie hay un crédito discreto «Web hecha por COMA» (`src/components/ComaCredit.astro`).

## Pendiente

- [x] Horario real (`hours`), según el perfil de Instagram @saborpatricio: lunes a jueves 10:30–22:30, viernes y sábado 10:30–23:30, domingo 10:30–23:00.
- [ ] Email de contacto del titular (`site.legal.email`): la LSSI pide un email en el aviso legal
- [ ] Datos de inscripción en el Registro Mercantil de Marfer Obrador SL (tomo, folio, hoja) para el aviso legal
- [x] Dominio definitivo: https://saborpatricio.com
- [ ] Reseñas de Google (`reviews`)
- [ ] Confirmar si hacen envío a domicilio (cuando se retome el formulario de pedido, que ofrece «Consultar envío»)
