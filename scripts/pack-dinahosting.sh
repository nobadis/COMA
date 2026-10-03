#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/release"
ZIP="$OUT/coma-dinahosting.zip"

mkdir -p "$OUT"
rm -f "$ZIP"

# Build de Astro + Clarity (solo si CLARITY_PROJECT_ID está definido en el entorno).
cd "$ROOT"
npm run build

cd "$ROOT/dist"
zip -r -q "$ZIP" . -x "*.DS_Store" -x "_headers" -x "serve.json"

echo "Paquete listo: $ZIP"
echo "Sube y extrae en public_html de Dinahosting"
