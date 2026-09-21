# Despliegue en Railway

Sitio estático servido desde `site/` con **Dockerfile** (build reproducible).

Microsoft Clarity se inyecta al **arrancar** leyendo `CLARITY_PROJECT_ID`.

## Variable

| Variable             | Valor producción | Descripción                                                                               |
| -------------------- | ---------------- | ----------------------------------------------------------------------------------------- |
| `CLARITY_PROJECT_ID` | `yltviknta6`     | ID del proyecto Clarity. El Dockerfile ya lo define; puedes sobreescribirlo en Variables. |

Si la variable está vacía, Clarity no se carga.

## Config del repo

- `Dockerfile` — `npm ci --omit=dev` + arranque
- `railway.toml` — builder `DOCKERFILE`
- `scripts/railway-start.sh` — inject + `serve`
- `scripts/inject_clarity.js` — inyección desde env
- `site/serve.json` — CSP con Clarity permitido

## Panel Railway

1. Conecta el repo `nobadis/COMA`.
2. Root Directory: raíz del repo.
3. Confirma `CLARITY_PROJECT_ID=yltviknta6` en Variables (o deja el default del Dockerfile).
4. Deploy.

## Comprobar

En el HTML de la URL Railway debe aparecer `yltviknta6` junto a `clarity.ms/tag/`.
