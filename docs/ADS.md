# Anuncios, medición y outbound

Nada de esto se ve en la web: sin variables no se carga ni un byte de medición y el aviso de cookies queda como siempre. Al activar una herramienta, el aviso y la tabla de `/cookies/` la nombran automáticamente (solo las que estén activas).

La web está lista para Google Ads, Meta (Facebook e Instagram), TikTok, LinkedIn y Microsoft (Bing) Ads. **Sin variables de entorno no se carga nada.** Todo se activa en Railway → Variables y se vuelve a desplegar (las `PUBLIC_*` se incrustan en el build). Lista completa en `.env.example`.

## Activar la medición

| Opción | Variables |
| --- | --- |
| **Recomendada**: un contenedor de Google Tag Manager con GA4, Google Ads, Meta, TikTok… dentro | `PUBLIC_GTM_ID` |
| Sin GTM: píxeles directos | `PUBLIC_GA4_ID`, `PUBLIC_GADS_ID` + `PUBLIC_GADS_LEAD_LABEL`, `PUBLIC_META_PIXEL_ID`, `PUBLIC_TIKTOK_PIXEL_ID`, `PUBLIC_LINKEDIN_PARTNER_ID` + `PUBLIC_LINKEDIN_LEAD_CONVERSION_ID`, `PUBLIC_BING_UET_ID` |

Con `PUBLIC_GTM_ID` solo se carga GTM (evita duplicar eventos). Las verificaciones de dominio (Meta, TikTok, Google, Bing) van en `PUBLIC_*_VERIFICATION`.

**Cookies**: todo se carga solo tras aceptar el banner. Antes, solo se emite Consent Mode v2 en "denegado". El texto de `/cookies/` ya lista las herramientas; **que lo revise tu asesor legal** antes de lanzar campañas. Si usas un endpoint de formulario, actualiza también la política de privacidad (proveedor y finalidad).

**Verifica siempre** con Tag Assistant (Google), Meta Pixel Helper, TikTok Pixel Helper y UET Tag Helper. Los fragmentos de TikTok y UET están escritos a mano y no se han podido probar contra las cuentas reales.

## Eventos que ya se envían (dataLayer y píxeles)

| Evento | Cuándo | Meta | TikTok | Google Ads / LinkedIn / Bing |
| --- | --- | --- | --- | --- |
| `generate_lead` | Formulario enviado (o `/gracias/` con endpoint). Lleva `content_name` (interés) | `Lead` | `SubmitForm` | conversión (etiqueta/ID de las variables) |
| `view_offer` | Al ver `/precios/`, un servicio o una `/lp/` | `ViewContent` | `ViewContent` | evento (audiencias de remarketing) |
| `contact_click` | Clic en mailto, tel o WhatsApp | `Contact` | `Contact` | evento |
| `cta_click` | Botones de conversión (`data-track-label`) | `CtaClick` | | |
| `scroll_depth` | 50 % y 90 % | | | |

Para medir otro botón: `data-track="cta_click" data-track-label="nombre"`.

## Leads fiables: formulario con endpoint

Con solo `mailto:` no se puede asegurar que el correo se envíe. Pon `PUBLIC_FORM_ENDPOINT` (Formspree, Web3Forms o una función propia, HTTPS) y el brief hace POST JSON, redirige a `/gracias/` y la conversión se mide allí una sola vez. Si el servicio falla, cae al correo para no perder el lead. Añade el host del servicio a `connect-src` en la CSP (`vercel.json`, `public/serve.json`, `_headers` y `.htaccess`; un test comprueba que sean idénticas). Formspree y Web3Forms ya están permitidos.

## Atribución

Se guardan `utm_*`, `gclid`, `gbraid`, `wbraid`, `fbclid`, `ttclid`, `msclkid` y `li_fat_id` (solo con cookies aceptadas) y se añade una línea `[origen] …` al mensaje del lead. Convención de UTM:

`utm_source` = google | meta | tiktok | linkedin | bing | email · `utm_medium` = cpc | paid_social | outbound · `utm_campaign` = `web99-otono26` (oferta-temporada) · `utm_content` = variante del anuncio.

## Landings (`src/data/landings.ts`)

`/lp/web-99/`, `/lp/seo-local/`, `/lp/agentes-ia/`, `/lp/mallorca/`, `/lp/tu-empresa/`. Son `noindex`, fuera del sitemap, sin menú ni pie de navegación, con formulario corto y las demos interactivas (SEO/IA en el buscador, chat del agente, selector de marca) como "publi inmersiva". Los rastreadores de Google Ads y Meta pueden leerlas. Para añadir una: nuevo objeto en `landings.ts`.

## Outbound

`/lp/tu-empresa/?e=Clínica%20Sol&s=dental&c=Valencia` personaliza el titular con la empresa, el sector y la ciudad (solo texto plano, sin HTML). Úsala en emails, LinkedIn y mensajes en frío con `utm_medium=outbound`. Antes de enviar en frío, cumple RGPD/LSSI: interés legítimo documentado, identificación clara, baja en un clic.

## Estrategia de anuncios

Ningún plan de medios es seguro al céntimo. Este es el que mejor encaja con la oferta: el gancho es la web a 99 € (se entiende en un segundo) y el margen está en lo que se suma después (tienda, SEO a 99 €/mes, GEO, alojamiento). Un anuncio que solo cierra webs de 99 € pierde dinero en cuanto el lead cuesta más de lo que queda tras hacerla. Por eso el anuncio habla de 99 € y la landing (`/lp/web-99/`) lleva al presupuesto, donde se ven los extras, antes del formulario.

**No enciendas campañas hasta tener esto:** `PUBLIC_FORM_ENDPOINT` activo (con `mailto:` no se puede fiar la conversión), la conversión "Lead" creada en cada plataforma y comprobada con un envío real, y cookies aceptadas en esa prueba. Sin eso, el algoritmo optimiza a ciegas.

### Qué vender, y en qué orden

1. **Ahora: solo la web.** Una oferta, una landing, dos canales. El resto apagado.
2. **Cuando el gancho sea rentable:** remarketing a quien vio la oferta y no escribió, y un segundo anuncio de SEO local.
3. **Aparte, con otro presupuesto:** despachos (ticket alto, poca gente) por LinkedIn y mensajes, no mezclado con la web de 99 €. TikTok solo si el vídeo de Meta ya convierte: se reutiliza el mismo archivo.

Regla para subir dinero: `coste del lead cualificado ÷ tasa de cierre < ingreso del primer encargo`. Un lead es cualificado si nombra un negocio y no marca «solo estoy explorando». Ejemplo: lead a 25 €, cierras 1 de cada 4 (100 € por cliente) y el primer encargo medio es 250 € (web + un extra, o el primer mes de SEO) → cabe. Si el encargo se queda en 99 €, para.

### Mes 1 — 900 €, solo el gancho

| Canal | Al día | Al mes | Destino | Formato |
| --- | --- | --- | --- | --- |
| Google Search | 20 € | 600 € | `/lp/web-99/` | Anuncios de búsqueda (RSA). Sin Display ni Performance Max |
| Meta (Facebook e Instagram) | 10 € | 300 € | la misma URL | 1 vídeo vertical de 15 s. Objetivo: visitas a la landing, no formulario instantáneo |

URLs listas (la web guarda los `utm_*` en el lead):

- Google: `https://comunicacionenmallorca.com/lp/web-99/?utm_source=google&utm_medium=cpc&utm_campaign=web99-busqueda&utm_content=rsa-precio`
- Meta: `https://comunicacionenmallorca.com/lp/web-99/?utm_source=meta&utm_medium=paid_social&utm_campaign=web99-video&utm_content=scroll-99`

**Google, cuatro grupos** (concordancia de frase y exacta; España; idioma español):

1. Precio: diseño web barato, página web autónomos, web para pyme, cuánto cuesta una página web.
2. Servicio: diseño web profesional, hacer página web empresa, agencia de diseño web.
3. Mallorca: diseño web Mallorca, diseño web Palma, página web Palma. Destino alternativo `/lp/mallorca/` si quieres separar el coste.
4. Marca, en exacta: Comunicación en Mallorca, COMA Mallorca. Presupuesto mínimo, para no pagar de más por quien ya te busca.

Palabras negativas desde el día uno: gratis, curso, empleo, trabajo, prácticas, plantilla, descargar, tutorial, wordpress, wix, shopify.

**Meta:** España, 25-54 años, audiencia amplia (el vídeo filtra mejor que los intereses). Un conjunto aparte, 40 km alrededor de Palma, solo si quieres densidad local: sácale un 30 % del presupuesto de España, no lo sumes. Excluye a quien busca empleo.

**El vídeo (15 s):** 0-2 s el texto «Tu web. 99 €.» · 2-10 s un scroll de esta misma web (es la prueba) · 10-15 s «Sin plantillas. Precio cerrado.» y el botón. Una imagen estática del 99 € se guarda para el remarketing; no se pone en frío.

### Mes 2 — solo si los números salen

Sube un 30 % el canal cuyo lead cualificado esté por debajo de 35 € en Google o de 25 € en Meta. El otro se queda o se apaga. Añade 5 €/día de remarketing a quien disparó `view_offer` en `/precios/`, `/lp/web-99/` o `/diseno-web/` y no envió el formulario (solo con consentimiento).

### Mes 3 — el segundo producto

SEO local en Google Search, 10 €/día, hacia `/lp/seo-local/`, con búsquedas del tipo «seo local», «aparecer en google maps», «posicionamiento google mi negocio». TikTok, 8 €/día como máximo, con el mismo vídeo de Meta y destino `/lp/web-99/?utm_source=tiktok&utm_medium=paid_social&utm_campaign=web99-video&utm_content=scroll-99`. Si a los 7 días el lead cuesta más que en Meta, se apaga.

**Despachos, presupuesto separado (no sale de los 900 €):** LinkedIn, cargos de asesor, gestor y economista, empresas de 2 a 50 personas en España, 15 €/día hacia `/despachos/`. El anuncio es «tus clientes envían facturas y el despacho deja de teclearlas», nunca el precio de 99 €. Es un ticket alto y pocos leads; no compite con el gancho de webs.

Cuando haya 30 ventas reales, importa el ingreso cerrado (no los 99 € del anuncio) como conversión offline. Ahí el algoritmo puede optimizar por valor. Hasta entonces, optimiza por el lead del formulario.
