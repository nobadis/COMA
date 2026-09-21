#!/usr/bin/env bash
# Arranque Railway: inyecta Clarity desde CLARITY_PROJECT_ID y sirve site/.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

node "$ROOT/scripts/inject_clarity.js"

PORT="${PORT:-3000}"
exec "$ROOT/node_modules/.bin/serve" -l "tcp://0.0.0.0:${PORT}" site
