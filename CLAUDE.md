# COMA - Comunicación en Mallorca

Web de comunicacionenmallorca.com (Astro). Ver README.md y docs/.

## Webs de ejemplo (ejemplos/): siempre iguales que su repo

Cada carpeta de `ejemplos/` es una copia exacta de la rama `main` del repo del cliente
(p. ej. `ejemplos/saborpatricio/` ← `nobadis/SABOR-PATRICIO`). Para cualquier cambio en una demo:

1. Hacerlo y subirlo a `main` en el repo del cliente.
2. Aquí: `npm run ejemplo -- <proyecto>`, `npm run build`, push a `main`.
3. `npm run ejemplos:check` debe dar ✓ para todas.

Nunca editar `ejemplos/<proyecto>/` a mano ni dejar un cambio solo en uno de los dos repos.
La marca de agua de las demos la añade `scripts/build-ejemplos.cjs` al compilar.

## Web de COMA

- El SEO no alarga la página: va en `<head>`, rastreo y páginas nuevas. El texto visible se queda corto. El pie enlaza a `/sobre-coma/`, `/guias/` y `/zonas/`; el menú no (docs/SEO-GEO.md).
- Push a `main` directamente cuando el usuario lo pide ("como siempre").
