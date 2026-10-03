# Build de Astro + servidor estático (serve) en una imagen Node.
FROM node:22-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY astro.config.mjs tsconfig.json ./
COPY public ./public
COPY src ./src
COPY scripts ./scripts

RUN npx astro build && npm prune --omit=dev && chmod +x scripts/railway-start.sh

# Project ID de Clarity (sobreescribible en Variables de Railway).
ENV CLARITY_PROJECT_ID=ylu80felfk
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["bash", "scripts/railway-start.sh"]
