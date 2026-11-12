import type { Item } from "../services";

/**
 * Páginas «Inteligencia artificial para <sector>» (/ia/<slug>/): casos de uso reales de IA,
 * automatización y software a medida en cada sector.
 *
 * Reglas (las mismas que los sectores de /sectores/):
 * - Todo específico del sector y verdadero. Si cambiando el nombre del sector sirve para otro, está mal.
 * - Sin clientes, cifras, porcentajes, ahorros numéricos, plazos ni opiniones inventadas.
 * - Sin superlativos ni garantías. Normativa solo si es segura y con prudencia.
 * - Sin precios: la IA y el software se presupuestan a medida.
 */
export interface UseCase {
  /** Qué hace, en pocas palabras: «Responder a huéspedes en su idioma». */
  title: string;
  /** Cómo funciona en ese sector (1-2 frases, ≤ 200 caracteres). */
  text: string;
  /** Qué se gana, cualitativo y sin cifras (≤ 100 caracteres). */
  gain: string;
}

export interface AiSector {
  /** kebab-case sin tildes: "hoteles". */
  slug: string;
  /** Nombre corto para listados: "Hoteles". */
  name: string;
  /** Tras «para»: "hoteles". */
  forWho: string;
  /** Slug del sector equivalente en /sectores/ (para enlazar), si existe. */
  niche?: string;
  /** <title> sin " | COMA" (máx. 60). Único. */
  title: string;
  /** Meta description (120-160). Única. */
  description: string;
  /** Titular (≤ 70, sin punto final). */
  h1: string;
  /** Entradilla (≤ 200). */
  lead: string;
  /** Dos párrafos (≤ 320 cada uno): por qué la IA importa ahora en el sector y qué es realista. */
  context: [string, string];
  /** Exactamente 5 casos de uso propios del sector. */
  useCases: [UseCase, UseCase, UseCase, UseCase, UseCase];
  /** Qué NO conviene delegar en la IA en este sector (y por qué). ≤ 300. */
  limits: string;
  /** Protección de datos y seguridad propias del sector. ≤ 300. */
  data: string;
  /** Ángulo Mallorca / Baleares, verdadero. ≤ 300. */
  mallorca: string;
  /** Primer piloto recomendado: por dónde empezar. ≤ 300. */
  start: string;
  /** Exactamente 4 preguntas reales de ese sector sobre IA. */
  faq: [Item, Item, Item, Item];
  /** 5-8 búsquedas reales («inteligencia artificial para hoteles», «chatbot hotel»…). */
  searches: string[];
  /** 3 slugs de otras páginas /ia/. */
  related: string[];
}
