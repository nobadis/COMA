# SEO y GEO: qué hay hecho y qué falta fuera del código

## Principio: el SEO no rellena la página

El posicionamiento no consiste en alargar lo que ve el visitante. Títulos, descripciones, datos estructurados, `robots.txt`, sitemap y `llms*.txt` viven en el `<head>` y en el rastreo. Las páginas de zona, servicio local y guías existen para quien llega desde Google o una IA. El texto visible se mantiene corto: cada bloque dice una cosa que el anterior no ha dicho. El pie enlaza a `/sobre-coma/`, `/guias/` y `/zonas/`; el menú no.

## Ya está en el código

- **Servidor (Railway)**: `scripts/server.cjs` sirve `dist/` como `serve` y además redirige `www` → sin `www` (301). Las URLs de la web antigua de WordPress redirigen con 301 (`public/serve.json`, `.htaccess` y `vercel.json`, mismas reglas).
- **Precio, experiencia y notoriedad en los resultados**: las meta descriptions ponen delante el precio (web desde 99 €, SEO desde 99 €/mes) y `withProof()` (`src/data/site.ts`) añade «Desde 1997 en Palma; clientes como Meliá y RCD Mallorca» (o la versión corta) cuando cabe. El schema de la organización publica todas las ofertas con precio (`makesOffer`) y `llms.txt` abre con «Por qué COMA (datos comprobables)» (`src/data/proof.ts`). Sin superlativos: solo hechos que se pueden comprobar.
- **Marca COMA por línea** (`src/data/brand.ts`): el sufijo del título cambia según la sección (`| COMA IA`, `| COMA Tecnología`, `| COMA Web`, `| COMA Comunicación`, `| COMA Mallorca`; si no cabe en 72 caracteres, `| COMA`). Las mismas marcas van en los eyebrows, en `brand` del schema y en `llms.txt` («COMA es la abreviatura de COmunicación en MAllorca»).
- **Marca**: la portada lleva «Comunicación en Mallorca (COMA)» en el título; el `WebSite` del schema se llama «Comunicación en Mallorca» (Google lo usa como nombre del sitio). `llms.txt` aclara el dominio oficial frente a `comunicacionmallorca.com`.
- **~510 URLs indexables**: servicios, `/zonas/` (82 lugares: Mallorca y sus municipios, Menorca, Ibiza, Formentera, 19 comunidades/ciudades autónomas y ciudades clave), `/diseno-web|seo-geo|agentes-ia|automatizaciones/<lugar>/` (328 páginas: diseño web, SEO, inteligencia artificial para empresas y software a medida), `/sectores/` (~50 nichos), `/soluciones/` (20 necesidades), `/guias/` (10 guías), `/sobre-coma/`.
- **Nichos por sector** (`/sectores/<slug>/`, datos en `src/data/niches/*.ts`): restaurantes, alquiler vacacional, clínicas, residencias de mayores, abogados, fontaneros, inmobiliarias… Cada uno con funciones de web, automatizaciones, agente de IA, ángulo Mallorca, FAQ propias y un **paquete recomendado cuyo precio se calcula con `pricing.ts`** (sale en la página, en el schema `Offer` y en `llms*.txt`). El botón «Ver mi presupuesto» abre `/precios/?pack=…` con esos extras ya marcados.
- **Necesidades** (`/soluciones/<slug>/`, datos en `src/data/solutions.ts`): página web barata, web para autónomos, negocios de toda la vida, web accesible para mayores, tienda online barata, multiidioma, reservas, rediseño, mantenimiento, correo, alternativa a Wix, agencia económica, WhatsApp, chatbot, facturas, recordatorios, CRM, ChatGPT, Google Maps y reseñas.
- **Claims**: estas páginas no dicen «el mejor» ni «el más barato». Responden a esas búsquedas con datos comprobables (precio publicado, pago único, qué incluye, desde cuándo existimos). Un test vigila los superlativos.
- **Contenido local propio** en `src/data/places.ts` (`local`, `angle`, sectores, idiomas). Un test falla si dos páginas comparten título o descripción.
- **Honestidad local**: solo Palma figura como sede. El resto se declara "en remoto". Nunca añadas una oficina que no exista (Google lo sanciona y las IA lo detectan).
- **Schema.org**: MarketingAgency/ProfessionalService (con `areaServed` de todas las comunidades), WebSite, WebPage, BreadcrumbList, Service/Offer, FAQPage, Article, AboutPage, Person y Review (solo si hay datos reales en `site.ts`).
- **Rastreo**: `sitemap` con `lastmod`; `robots.txt` con los rastreadores de IA (GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Bingbot…) y de anuncios; `/llms.txt` y `/llms-full.txt`.
- **Bing / Copilot / ChatGPT**: IndexNow (`npm run seo:indexnow` tras cada despliegue).
- **Rendimiento**: HTML estático, fuente propia precargada, sin JS de terceros hasta que se acepten las cookies.

## Lo que depende de ti (esto decide el 70 % del resultado)

Todo lo de esta lista, con textos listos para copiar (ficha de Google, directorios, reseñas, LinkedIn, nota de prensa y preguntas para medir la IA), está en [KIT-VISIBILIDAD.md](KIT-VISIBILIDAD.md).

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

## Enlazado interno

El menú sigue igual (Inicio, Servicios, Precios, Kit Digital, Contacto). En el pie hay enlaces discretos a `/sobre-coma/`, `/guias/`, `/zonas/`, `/sectores/` y `/soluciones/` para que Google y las IA lleguen a esas páginas desde la home, además del sitemap, IndexNow y `llms.txt`. Las páginas de zona, servicio local y guías se enlazan entre sí.

## Mantenimiento

- Añadir un sector: un objeto más en `src/data/niches/<grupo>.ts` siguiendo las reglas de `types.ts` (texto propio del sector, sin cifras ni clientes inventados, 3 `related` válidos). Una solución: un objeto en `solutions.ts`.

- Añadir una zona: añade el objeto en `places.ts` con `local` y `angle` propios y verdaderos. No copies el texto de otra.
- Al cambiar precios (`pricing.ts`) se actualizan guías, schema, `llms*.txt` y páginas locales.
- Fecha de las guías: `published`/`modified` en `guides.ts`; actualiza `modified` al revisarlas.
