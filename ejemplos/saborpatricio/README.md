# Sabor Patricio · Web

Web de **Sabor Patricio**, empanadas argentinas en Cala Major (Palma de Mallorca).
Hecha con [Astro](https://astro.build): HTML estático, ~8 KB de JS, imágenes AVIF/WebP automáticas.

## Páginas

- `/` — Landing con hero 3D, clásicas y gourmet, postres, bebidas, combos, pizza, historia, galería y ubicación. Sin precios ni carrito; los pedidos van directamente a WhatsApp.
- `/pedir` — Página anterior conservada, sin enlaces desde la landing.

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

Es un sitio 100 % estático (`dist/`). Se puede subir a Netlify, Vercel o Cloudflare Pages:

- Comando de build: `npm run build`
- Carpeta de salida: `dist`

## Qué editar

Todo el contenido del negocio está en **`src/config/site.ts`**:

- `url`: dominio definitivo (cambialo también en `astro.config.mjs` y `public/robots.txt`).
- `hours`: horario real. Con horario cargado, la web muestra «Abierto ahora / Cerrado ahora» (hora de Madrid).
- `reviews`: reseñas reales de Google (texto literal). Si está vacío, se muestra solo el botón a Google.
- `flavors`: sabores, ingredientes y color de cada tarjeta. Las fotos están en `src/assets/flavors/<id>.png`.

## Pendiente

- [x] Horario real (`hours`), según el perfil de Instagram @saborpatricio: lunes a jueves 10:30–22:30, viernes y sábado 10:30–23:30, domingo 10:30–23:00.
- [ ] Dominio definitivo (`url`)
- [ ] Reseñas de Google (`reviews`)
- [ ] Confirmar si hacen envío a domicilio (ahora el pedido ofrece «Consultar envío»)
