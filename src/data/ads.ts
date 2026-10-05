/**
 * Configuración de analítica y publicidad. TODO se activa por variables de entorno en el
 * build (Railway / Vercel / .env): sin variables no se carga ni una línea de JavaScript.
 *
 * Regla: si hay PUBLIC_GTM_ID se carga solo Google Tag Manager y el resto de etiquetas
 * (GA4, Google Ads, Meta, TikTok, LinkedIn, Bing…) se montan dentro de GTM, que ya recibe
 * los eventos por dataLayer. Sin GTM, cada píxel se carga directo con su ID.
 *
 * Todo se carga solo tras aceptar las cookies (ver CookieBanner y scripts/tracking.ts).
 */
const env = (import.meta as unknown as { env: Record<string, string | undefined> }).env;

/** Los IDs se insertan en HTML/JS: solo se aceptan caracteres seguros. */
const id = (v: string | undefined) => (v && /^[A-Za-z0-9_-]{3,60}$/.test(v.trim()) ? v.trim() : "");
const url = (v: string | undefined) =>
  v && /^https:\/\/[^\s"'<>]+$/.test(v.trim()) ? v.trim() : "";

export const ads = {
  /** Google Tag Manager: GTM-XXXXXXX */
  gtm: id(env.PUBLIC_GTM_ID),
  /** Google Analytics 4: G-XXXXXXXXXX (solo sin GTM) */
  ga4: id(env.PUBLIC_GA4_ID),
  /** Google Ads: AW-XXXXXXXXX (solo sin GTM) */
  gads: id(env.PUBLIC_GADS_ID),
  /** Etiqueta de conversión "Lead" de Google Ads (la parte después de AW-xxx/) */
  gadsLeadLabel: id(env.PUBLIC_GADS_LEAD_LABEL),
  /** Meta Pixel (Facebook e Instagram Ads) */
  meta: id(env.PUBLIC_META_PIXEL_ID),
  /** TikTok Pixel */
  tiktok: id(env.PUBLIC_TIKTOK_PIXEL_ID),
  /** LinkedIn Insight Tag (partner id) */
  linkedin: id(env.PUBLIC_LINKEDIN_PARTNER_ID),
  /** ID de conversión "Lead" de LinkedIn */
  linkedinLeadId: id(env.PUBLIC_LINKEDIN_LEAD_CONVERSION_ID),
  /** Microsoft Advertising UET (Bing Ads) */
  bing: id(env.PUBLIC_BING_UET_ID),
  /** Servicio que recibe el formulario (Formspree, Web3Forms, función propia…). Opcional. */
  formEndpoint: url(env.PUBLIC_FORM_ENDPOINT),
};

/** ¿Hay alguna etiqueta que cargar? Si no, no se emite nada en el HTML. */
export const adsEnabled = Boolean(
  ads.gtm || ads.ga4 || ads.gads || ads.meta || ads.tiktok || ads.linkedin || ads.bing
);

/** Verificación de propiedad del sitio (Search Console, Bing Webmaster, Meta, TikTok…). */
export const verification = {
  google: id(env.PUBLIC_GSC_VERIFICATION),
  bing: id(env.PUBLIC_BING_VERIFICATION),
  meta: id(env.PUBLIC_META_DOMAIN_VERIFICATION),
  tiktok: id(env.PUBLIC_TIKTOK_VERIFICATION),
  pinterest: id(env.PUBLIC_PINTEREST_VERIFICATION),
};

/**
 * Herramientas de terceros activas en este build, para el aviso y la política de cookies.
 * Solo se nombran las que de verdad se cargan: sin variables, el texto queda como siempre.
 */
export const activeTrackers: { name: string; cookies: string; purpose: string }[] = [
  ...(ads.gtm
    ? [
        {
          name: "Google Tag Manager",
          cookies: "Según las etiquetas del contenedor",
          purpose: "Gestionar las etiquetas de analítica y medición de anuncios.",
        },
      ]
    : []),
  ...(ads.ga4
    ? [
        {
          name: "Google Analytics",
          cookies: "_ga, _ga_*",
          purpose: "Medir visitas y uso de la web.",
        },
      ]
    : []),
  ...(ads.gads
    ? [
        {
          name: "Google Ads",
          cookies: "_gcl_au, _gcl_aw",
          purpose: "Medir conversiones de campañas en Google.",
        },
      ]
    : []),
  ...(ads.meta
    ? [
        {
          name: "Meta (Facebook e Instagram)",
          cookies: "_fbp, _fbc",
          purpose: "Medir conversiones de campañas en Meta.",
        },
      ]
    : []),
  ...(ads.tiktok
    ? [
        {
          name: "TikTok",
          cookies: "_ttp, ttclid",
          purpose: "Medir conversiones de campañas en TikTok.",
        },
      ]
    : []),
  ...(ads.linkedin
    ? [
        {
          name: "LinkedIn",
          cookies: "li_fat_id, bcookie, lidc",
          purpose: "Medir conversiones de campañas en LinkedIn.",
        },
      ]
    : []),
  ...(ads.bing
    ? [
        {
          name: "Microsoft Advertising",
          cookies: "_uetsid, _uetvid, MUID",
          purpose: "Medir conversiones de campañas en Bing.",
        },
      ]
    : []),
];
