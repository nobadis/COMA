#!/usr/bin/env bash
# Arranque Railway: inyecta Clarity desde CLARITY_PROJECT_ID y sirve dist/ con scripts/server.cjs.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

node "$ROOT/scripts/inject_clarity.cjs"

# Igual que `serve dist` (compresión, ETag, dist/serve.json) y además www → dominio sin www (301).
exec node "$ROOT/scripts/server.cjs"
