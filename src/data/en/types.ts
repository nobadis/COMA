import type { Item } from "../services";

/**
 * Páginas en inglés (/en/…): búsquedas de clientes internacionales y residentes extranjeros
 * en Mallorca («AI consultancy Mallorca», «web design Mallorca»…) y preguntas en inglés a
 * ChatGPT, Claude o Gemini. Cada página declara su equivalente en español para el hreflang.
 *
 * Reglas: las mismas que el resto del sitio (todo verdadero, sin superlativos, sin clientes ni
 * cifras inventadas, precios sacados de pricing.ts). Atendemos en inglés; no en alemán.
 */
export interface EnSection {
  h2: string;
  paragraphs: string[];
  list?: string[];
}

export interface EnPage {
  /** "" para /en/; si no, kebab-case: "ai-consultancy-mallorca". */
  slug: string;
  /** Ruta de la página equivalente en español (hreflang), p. ej. "/diseno-web/mallorca/". */
  es: string;
  /** Nombre corto para listados y migas. */
  name: string;
  /** <title> sin " | COMA" (máx. 60). */
  title: string;
  /** Meta description (120-160). */
  description: string;
  eyebrow: string;
  /** ≤ 70, sin punto final. */
  h1: string;
  /** ≤ 200. */
  lead: string;
  /** 2 secciones cortas. */
  sections: [EnSection, EnSection];
  /** Exactamente 4 puntos de lo que incluye. */
  points: [Item, Item, Item, Item];
  price: { label: string; value: string; note: string };
  /** 3-4 preguntas. */
  faq: Item[];
  /** 5-8 búsquedas en inglés. */
  searches: string[];
  /** Titular de la llamada final. */
  cta: string;
}
