#!/usr/bin/env bash
# Arranque Railway: inyecta Clarity desde CLARITY_PROJECT_ID y sirve dist/ (build de Astro).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

node "$ROOT/scripts/inject_clarity.cjs"

PORT="${PORT:-3000}"
NO_UPDATE_CHECK=1 exec "$ROOT/node_modules/.bin/serve" -n -l "tcp://0.0.0.0:${PORT}" dist
