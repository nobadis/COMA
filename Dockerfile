# Imagen Node-only: build reproducible en Railway (evita fallos de Nixpacks/Railpack).
FROM node:22-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY scripts ./scripts
COPY site ./site

RUN chmod +x scripts/railway-start.sh

# Project ID de Clarity (sobreescribible en Variables de Railway).
ENV CLARITY_PROJECT_ID=yltviknta6
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["bash", "scripts/railway-start.sh"]
