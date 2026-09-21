#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT/dist"
ZIP="$DIST/coma-dinahosting.zip"

mkdir -p "$DIST"
rm -f "$ZIP"

# Inyecta Clarity solo si CLARITY_PROJECT_ID está definido en el entorno.
node "$ROOT/scripts/inject_clarity.js"

cd "$ROOT/site"
zip -r -q "$ZIP" . -x "*.DS_Store" -x "vercel.json" -x "_headers" -x "serve.json"

echo "Paquete listo: $ZIP"
echo "Sube y extrae en public_html de Dinahosting"
