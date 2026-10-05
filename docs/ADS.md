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
| `generate_lead` | Formulario enviado (o `/gracias/` con endpoint) | `Lead` | `SubmitForm` | conversión (etiqueta/ID de las variables) |
| `contact_click` | Clic en mailto, tel o WhatsApp | `Contact` | `Contact` | evento |
| `cta_click` | Botones con `data-track="cta_click"` (`data-track-label`) | `CtaClick` | | |
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

## Estructura de campañas sugerida

- **Google Search**: grupos por servicio × zona usando las URLs `/diseno-web/<lugar>/` y `/seo-geo/<lugar>/` como destino (o las `/lp/`). Marca la propia como exacta.
- **Meta / TikTok**: vídeo corto con la demo (web a 99 €, "pregúntale a la IA") → `/lp/web-99/`.
- **LinkedIn**: agentes de IA y SEO/GEO a pymes y directivos → `/lp/agentes-ia/` y `/lp/seo-local/`.
- **Remarketing**: audiencias de visitantes de `/precios/` y `/lp/*` que no convirtieron (solo con consentimiento).
- Crea la conversión "Lead" en cada plataforma antes de gastar un euro y verifica que dispara.
