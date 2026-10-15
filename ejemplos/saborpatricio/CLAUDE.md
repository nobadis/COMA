# Sabor Patricio

Web de Sabor Patricio (Astro estático). Ver README.md.

## Regla: esta web vive en dos sitios y siempre deben coincidir

1. **Este repo** (`nobadis/SABOR-PATRICIO`, rama `main`) es la fuente. Todo cambio se hace aquí.
2. **La demo en COMA** (`nobadis/COMA`, carpeta `ejemplos/saborpatricio/`) es una copia exacta de `main`.
   Tras cada push a `main` de este repo, en COMA: `npm run ejemplo -- saborpatricio`, compilar y push a `main`.
   Comprobar que `diff -rq` entre ambos (sin `.git`, `node_modules`, `dist`, `.astro`) no da diferencias.

Nunca edites la copia de COMA a mano ni dejes un cambio en una sola de las dos.

- Datos del negocio y del titular legal (Marfer Obrador SL): `src/config/site.ts`.
- La marca de agua de la demo la pone COMA al compilar; no forma parte de esta web.
