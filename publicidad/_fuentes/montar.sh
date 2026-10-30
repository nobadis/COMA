#!/usr/bin/env bash
# Renderiza los 4 vídeos (y 2 variantes del de Mallorca) en 9:16 y 4:5, les pone música y los deja en las carpetas de campaña.
# Uso (desde la raíz del repo, con npm install hecho): bash publicidad/_fuentes/montar.sh
set -euo pipefail
cd "$(dirname "$0")"
TMP="$(mktemp -d)"
declare -A SRC=([A]=video-A-99.html [B]=video-B-1500.html [C]=video-C-temporada.html [E]=video-E-facilidad.html)
declare -A DST=([A]="../3-redes-sin-pagar/M1-A_video-99" [B]="../3-redes-sin-pagar/M1-B_video-1500" [C]="../3-redes-sin-pagar/M2-A_video-temporada" [E]="../3-redes-sin-pagar/M1-E_video-facilidad")
for id in A B C E; do
  python3 musica.py "$id" "$TMP/$id.wav"
  for f in 916 45; do
    rm -rf "$TMP/fr"
    NODE_PATH=../../node_modules node render.cjs "${SRC[$id]}" "$f" "$TMP/fr" 30
    name="${DST[$id]}_$([ "$f" = 916 ] && echo 9x16 || echo 4x5)"
    ffmpeg -y -loglevel error -framerate 30 -i "$TMP/fr/f%04d.jpg" -i "$TMP/$id.wav" \
      -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p -profile:v high \
      -c:a aac -b:a 160k -shortest -movflags +faststart "$name.mp4"
    # portada (miniatura) del anuncio: el fotograma del cierre
    last=$(ls "$TMP/fr" | tail -n 20 | head -n 1)
    cp "$TMP/fr/$last" "${name}_portada.jpg"
  done
done
# variantes del vídeo de Mallorca: sin nombres de clientes y con el Pack Temporada (test de oferta)
for v in sin-marcas:sinmarcas=1:C pack:pack=1:CP; do
  IFS=: read -r suf q snd <<< "$v"
  python3 musica.py "$snd" "$TMP/$snd.wav"
for f in 916 45; do
  rm -rf "$TMP/fr"
  QUERY="$q" NODE_PATH=../../node_modules node render.cjs video-C-temporada.html "$f" "$TMP/fr" 30
  ffmpeg -y -loglevel error -framerate 30 -i "$TMP/fr/f%04d.jpg" -i "$TMP/$snd.wav" \
    -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p -profile:v high \
    -c:a aac -b:a 160k -shortest -movflags +faststart "../3-redes-sin-pagar/M2-A_video-temporada-${suf}_$([ "$f" = 916 ] && echo 9x16 || echo 4x5).mp4"
  last=$(ls "$TMP/fr" | tail -n 20 | head -n 1)
  cp "$TMP/fr/$last" "../3-redes-sin-pagar/M2-A_video-temporada-${suf}_$([ "$f" = 916 ] && echo 9x16 || echo 4x5)_portada.jpg"
done
done
rm -rf "$TMP"
echo "Vídeos listos."
