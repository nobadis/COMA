# Despliegue en Railway

Web Astro: el **Dockerfile** hace `astro build` y sirve `dist/` con `serve`.

Microsoft Clarity se inyecta al **arrancar** leyendo `CLARITY_PROJECT_ID` y solo se carga si el visitante acepta las cookies.

## Variable

| Variable             | Valor producción | Descripción                                                                               |
| -------------------- | ---------------- | ----------------------------------------------------------------------------------------- |
| `CLARITY_PROJECT_ID` | `ylu80felfk` | ID del proyecto Clarity. El Dockerfile ya lo define; puedes sobreescribirlo en Variables. |

Si la variable está vacía, Clarity no se carga.

## Config del repo

- `Dockerfile` — `npm ci` + `astro build` + `npm prune --omit=dev`
- `railway.toml` — builder `DOCKERFILE`
- `scripts/railway-start.sh` — inject + `serve`
- `scripts/inject_clarity.cjs` — inyección desde env
- `public/serve.json` (se copia a `dist/`) — CSP con Clarity permitido

## Panel Railway

1. Conecta el repo `nobadis/COMA`.
2. Root Directory: raíz del repo.
3. Confirma `CLARITY_PROJECT_ID=ylu80felfk` en Variables (o deja el default del Dockerfile).
4. Deploy.

## Comprobar

En el HTML de la URL Railway debe aparecer `ylu80felfk` junto a `clarity.ms/tag/`.
