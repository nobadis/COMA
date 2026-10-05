# SEO y GEO: qué hay hecho y qué falta fuera del código

## Ya está en el código

- **~350 URLs indexables**: servicios, `/zonas/` (82 lugares: Mallorca y sus municipios, Menorca, Ibiza, Formentera, 19 comunidades/ciudades autónomas y ciudades clave), `/diseno-web|seo-geo|agentes-ia/<lugar>/` (246 páginas), `/guias/` (7 guías), `/sobre-coma/`.
- **Contenido local propio** en `src/data/places.ts` (`local`, `angle`, sectores, idiomas). Un test falla si dos páginas comparten título o descripción.
- **Honestidad local**: solo Palma figura como sede. El resto se declara "en remoto". Nunca añadas una oficina que no exista (Google lo sanciona y las IA lo detectan).
- **Schema.org**: MarketingAgency/ProfessionalService (con `areaServed` de todas las comunidades), WebSite, WebPage, BreadcrumbList, Service/Offer, FAQPage, Article, AboutPage, Person y Review (solo si hay datos reales en `site.ts`).
- **Rastreo**: `sitemap` con `lastmod`; `robots.txt` con los rastreadores de IA (GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Bingbot…) y de anuncios; `/llms.txt` y `/llms-full.txt`.
- **Bing / Copilot / ChatGPT**: IndexNow (`npm run seo:indexnow` tras cada despliegue).
- **Rendimiento**: HTML estático, fuente propia precargada, sin JS de terceros hasta que se acepten las cookies.

## Lo que depende de ti (esto decide el 70 % del resultado)

1. **Search Console y Bing Webmaster Tools**: da de alta el dominio y envía `sitemap-index.xml`. Pon los códigos en `PUBLIC_GSC_VERIFICATION` y `PUBLIC_BING_VERIFICATION`.
2. **Google Business Profile** (Palma): ficha completa, categoría "Agencia de marketing", fotos reales, servicios, horario, publicaciones mensuales. Pide reseñas reales a clientes y respóndelas todas.
3. **Bing Places, Apple Business Connect** y directorios (Páginas Amarillas, Cylex, Cámara de Comercio de Mallorca, asociaciones). Nombre, dirección y teléfono idénticos a la web.
4. **Perfiles de entidad**: LinkedIn de empresa, Instagram, YouTube, TikTok. Añade las URLs a `site.social` en `src/data/site.ts`: salen en `sameAs` y unen todo en una sola entidad para Google y las IA. Crea también la entrada de **Wikidata** si cumplís los criterios de notoriedad (prensa independiente).
5. **Personas detrás**: rellena `team` en `site.ts` (nombre, cargo, bio, foto, LinkedIn) **solo con personas reales y con su permiso**. Aparecen en `/sobre-coma/` y en el schema. Hoy está vacío a propósito.
6. **Opiniones**: rellena `testimonials` con clientes reales que hayan autorizado su publicación. Nunca inventes reseñas ni puntuaciones.
7. **Casos de éxito**: con permiso del cliente, una página por caso con antes/después y datos reales (mejor señal de experiencia que cualquier texto).
8. **Menciones externas**: notas de prensa locales (Diario de Mallorca, Última Hora, Cadena SER Mallorca…), colaboraciones, ponencias. Es lo que más pesa para que ChatGPT, Gemini y Claude te citen.
9. **Dominio**: elige con o sin `www` (el canonical es sin `www`) y redirige la otra con 301 en el hosting.
10. **Revisión de claims**: "mejor precio" y "más de 100 pymes" deben poder demostrarse. Evita superlativos sin prueba.

## Medir la visibilidad en IA

Cada mes, pregunta a ChatGPT, Gemini, Claude, Copilot y Perplexity lo que preguntaría tu cliente ("mejor agencia de diseño web en Palma", "diseño web barato en Valencia") y anota si apareces, cómo te describen y qué fuentes citan.

## Mantenimiento

- Añadir una zona: añade el objeto en `places.ts` con `local` y `angle` propios y verdaderos. No copies el texto de otra.
- Al cambiar precios (`pricing.ts`) se actualizan guías, schema, `llms*.txt` y páginas locales.
- Fecha de las guías: `published`/`modified` en `guides.ts`; actualiza `modified` al revisarlas.
