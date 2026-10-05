/**
 * Capa de medición y publicidad.
 *
 * - No hace nada si no hay IDs configurados (ver src/data/ads.ts).
 * - Las etiquetas se cargan SOLO después de que el visitante acepte las cookies.
 * - Todos los eventos pasan por `track()`: se envían a dataLayer (GTM) y a cada píxel directo.
 * - Captura utm_* y click IDs (gclid, fbclid, ttclid, msclkid…) para adjuntarlos al lead.
 */
import { ads, adsEnabled } from "../data/ads";

type Params = Record<string, string | number | boolean | undefined>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFn = (...args: any[]) => any;
interface TrackWindow extends Window {
  dataLayer?: unknown[];
  gtag?: AnyFn;
  fbq?: AnyFn;
  ttq?: unknown;
  lintrk?: AnyFn;
  uetq?: unknown[];
  _linkedin_partner_id?: string;
  _linkedin_data_partner_ids?: string[];
  comaTrack?: typeof track;
}
const W = window as unknown as TrackWindow;

const CONSENT_KEY = "coma_cookie_consent";
const ATTR_KEY = "coma_attr";
const ATTR_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "ttclid",
  "msclkid",
  "li_fat_id",
];

const readConsent = () => {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
};

/* ------------------------------------------------------------- atribución */
function fromUrl(): Record<string, string> {
  const q = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  for (const k of ATTR_PARAMS) {
    const v = q.get(k);
    if (v) out[k] = v.slice(0, 200);
  }
  return out;
}

/** Datos de origen del visitante: lo guardado (si aceptó cookies) y lo que trae la URL actual. */
export function attribution(): Record<string, string> {
  let stored: Record<string, string> = {};
  if (readConsent() === "accepted") {
    try {
      stored = JSON.parse(localStorage.getItem(ATTR_KEY) ?? "{}");
    } catch {
      stored = {};
    }
  }
  const now = fromUrl();
  return Object.keys(now).length ? { ...stored, ...now } : stored;
}

function persistAttribution() {
  if (readConsent() !== "accepted") return;
  const now = fromUrl();
  if (!Object.keys(now).length) return;
  try {
    localStorage.setItem(
      ATTR_KEY,
      JSON.stringify({ ...now, landing: window.location.pathname, ts: new Date().toISOString() })
    );
  } catch {
    /* sin almacenamiento: la atribución solo vive en esta página */
  }
}

/** Línea corta para pegar en el mensaje del lead (la ve ventas, no el cliente final). */
export function attributionLine(): string {
  const a = attribution();
  const keys = ["utm_source", "utm_medium", "utm_campaign", "gclid", "fbclid", "ttclid", "msclkid"];
  const parts = keys.filter((k) => a[k]).map((k) => `${k}=${a[k]}`);
  return parts.length ? `[origen] ${parts.join(" · ")}` : "";
}

/* ------------------------------------------------------------------ carga */
function inject(src: string, onload?: () => void) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  if (onload) s.onload = onload;
  document.head.appendChild(s);
}

/** Llama a un método del píxel de TikTok si está cargado. */
function tt(method: string, ...args: unknown[]) {
  (W.ttq as Record<string, AnyFn> | undefined)?.[method]?.(...args);
}

function gtag(...args: unknown[]) {
  (W.dataLayer = W.dataLayer ?? []).push(args);
}

function grantConsent() {
  gtag("consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
  });
}

let loaded = false;
function loadVendors() {
  if (loaded || !adsEnabled) return;
  loaded = true;
  W.dataLayer = W.dataLayer ?? [];
  grantConsent();

  if (ads.gtm) {
    W.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    inject(`https://www.googletagmanager.com/gtm.js?id=${ads.gtm}`);
  } else if (ads.ga4 || ads.gads) {
    gtag("js", new Date());
    inject(`https://www.googletagmanager.com/gtag/js?id=${ads.ga4 || ads.gads}`);
    if (ads.ga4) gtag("config", ads.ga4);
    if (ads.gads) gtag("config", ads.gads);
  }

  // Los píxeles directos solo si NO hay GTM (en ese caso se montan dentro del contenedor).
  if (ads.gtm) return;

  if (ads.meta) {
    if (!W.fbq) {
      const q: unknown[] = [];
      const fbq: AnyFn & { queue?: unknown[]; loaded?: boolean; version?: string } = (...a) =>
        q.push(a);
      fbq.queue = q;
      fbq.loaded = true;
      fbq.version = "2.0";
      W.fbq = fbq;
    }
    inject("https://connect.facebook.net/en_US/fbevents.js");
    W.fbq?.("init", ads.meta);
    W.fbq?.("track", "PageView");
  }

  if (ads.tiktok) {
    const methods = [
      "page",
      "track",
      "identify",
      "instances",
      "debug",
      "on",
      "off",
      "once",
      "ready",
      "alias",
      "group",
      "enableCookie",
      "disableCookie",
    ];
    const ttq = ((W.ttq as unknown) ?? []) as Record<string, AnyFn> & {
      _i?: Record<string, unknown>;
      _t?: Record<string, number>;
      _o?: Record<string, unknown>;
    };
    W.ttq = ttq;
    for (const m of methods)
      ttq[m] = (...a: unknown[]) => (ttq as unknown as unknown[][]).push([m, ...a]);
    ttq._i = { [ads.tiktok]: [] };
    ttq._t = { [ads.tiktok]: Date.now() };
    ttq._o = { [ads.tiktok]: {} };
    inject(`https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=${ads.tiktok}&lib=ttq`);
    ttq.page();
  }

  if (ads.linkedin) {
    W._linkedin_partner_id = ads.linkedin;
    W._linkedin_data_partner_ids = [...(W._linkedin_data_partner_ids ?? []), ads.linkedin];
    inject("https://snap.licdn.com/li.lms-analytics/insight.min.js");
  }

  if (ads.bing) {
    const q = (W.uetq = W.uetq ?? []);
    inject("https://bat.bing.com/bat.js", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const UET = (window as any).UET;
      if (!UET) return;
      W.uetq = new UET({ ti: ads.bing, enableAutoSpaTracking: true, q });
      (W.uetq as unknown as { push: AnyFn }).push("pageLoad");
    });
  }
}

/* ---------------------------------------------------------------- eventos */
export function track(name: string, params: Params = {}) {
  if (!adsEnabled) return;
  const payload = { ...params, page_path: window.location.pathname };
  (W.dataLayer = W.dataLayer ?? []).push({ event: name, ...payload });
  if (readConsent() !== "accepted" || ads.gtm) return;

  if (ads.ga4 || ads.gads) gtag("event", name, payload);

  if (name === "generate_lead") {
    if (ads.gads && ads.gadsLeadLabel)
      gtag("event", "conversion", { send_to: `${ads.gads}/${ads.gadsLeadLabel}` });
    W.fbq?.("track", "Lead");
    tt("track", "SubmitForm");
    if (ads.linkedinLeadId)
      W.lintrk?.("track", { conversion_id: Number(ads.linkedinLeadId) || ads.linkedinLeadId });
    (W.uetq as { push?: AnyFn } | undefined)?.push?.("event", "generate_lead", {});
  } else if (name === "contact_click") {
    W.fbq?.("track", "Contact");
    tt("track", "Contact");
    (W.uetq as { push?: AnyFn } | undefined)?.push?.("event", "contact_click", {});
  } else if (name === "cta_click") {
    W.fbq?.("trackCustom", "CtaClick", params);
  }
}
W.comaTrack = track;

function bindEvents() {
  document.addEventListener("click", (e) => {
    const el = (e.target as Element | null)?.closest<HTMLElement>("a, button, [data-track]");
    if (!el) return;
    const tag = el.dataset.track;
    const href = el instanceof HTMLAnchorElement ? (el.getAttribute("href") ?? "") : "";
    if (href.startsWith("mailto:"))
      return void track("contact_click", { method: "email", label: el.dataset.trackLabel });
    if (href.startsWith("tel:"))
      return void track("contact_click", { method: "phone", label: el.dataset.trackLabel });
    if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href))
      return void track("contact_click", { method: "whatsapp", label: el.dataset.trackLabel });
    if (tag) track(tag, { label: el.dataset.trackLabel, href });
  });

  // Profundidad de scroll: 50 % y 90 %, una vez por página.
  const seen = new Set<number>();
  let ticking = false;
  const check = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (max <= 0) return;
    const pct = (window.scrollY / max) * 100;
    for (const t of [50, 90]) {
      if (pct >= t && !seen.has(t)) {
        seen.add(t);
        track("scroll_depth", { percent: t });
      }
    }
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(check);
      }
    },
    { passive: true }
  );
}

/** Eventos que se disparan al cargar la página (p. ej. /gracias/ → generate_lead). */
function fireOnLoad() {
  document.querySelectorAll<HTMLElement>("[data-track-load]").forEach((el) => {
    track(el.dataset.trackLoad ?? "", { label: el.dataset.trackLabel, via: el.dataset.trackVia });
  });
}

/** Personalización de landings para outbound: ?e=Empresa&s=sector. Solo texto plano. */
function personalize() {
  const q = new URLSearchParams(window.location.search);
  const clean = (v: string | null) =>
    (v ?? "")
      .replace(/[^\p{L}\p{N}\s·&.,'-]/gu, "")
      .trim()
      .slice(0, 60);
  const fill = (attr: string, value: string) => {
    if (!value) return;
    document.querySelectorAll<HTMLElement>(`[${attr}]`).forEach((el) => (el.textContent = value));
  };
  fill("data-lp-company", clean(q.get("e")));
  fill("data-lp-sector", clean(q.get("s")));
  fill("data-lp-city", clean(q.get("c")));
}

/* -------------------------------------------------------------------- init */
personalize();
if (adsEnabled) {
  persistAttribution();
  bindEvents();
  if (readConsent() === "accepted") loadVendors();
  window.addEventListener("coma:consent", (e) => {
    if ((e as CustomEvent).detail === "accepted") {
      persistAttribution();
      loadVendors();
    }
  });
  // Los eventos de carga esperan un instante a que los píxeles estén listos.
  window.setTimeout(fireOnLoad, 600);
}
