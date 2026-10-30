#!/usr/bin/env bash
# Regenera los entregables de COMA Rebar Stock: 2 PDF (español) y el vídeo demo (inglés, con efectos, sin música).
# Uso: bash propuestas/rebar-stock/build.sh   (requiere npm install en la raíz, Chromium de Playwright, ffmpeg, python3 + numpy + pypdf + Pillow)
set -euo pipefail
cd "$(dirname "$0")"
TMP="${TMPDIR:-/tmp}/coma-rebar-build"
rm -rf "$TMP" && mkdir -p "$TMP"

node img.cjs                       # capturas del vídeo para los PDF
node pdf.cjs .                     # COMA-Rebar-Stock-Resumen.pdf y ...-Propuesta-tecnico-comercial.pdf

node render.cjs "$TMP/frames" 30 3 # fotogramas + cues.json
python3 video/sound.py "$TMP/frames/cues.json" "$TMP/sound.wav" 126
ffmpeg -y -loglevel error -framerate 30 -i "$TMP/frames/f%05d.jpg" -i "$TMP/sound.wav" \
  -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p -c:a aac -b:a 192k -shortest -movflags +faststart \
  COMA-Rebar-Stock-Demo.mp4
echo "Listo: $(ls -1 *.pdf *.mp4 | tr '\n' ' ')"
