import type { Item } from "../services";

/**
 * Páginas por sector (/sectores/<slug>/). Cada sector es un nicho de búsqueda propio
 * («página web para fisioterapeutas», «automatizar reservas restaurante»…).
 *
 * Reglas (Google penaliza el contenido en serie y las IA detectan el relleno):
 * - Todo el texto es específico del sector y verdadero. Nada de plantillas con el nombre cambiado.
 * - Sin clientes, cifras, opiniones ni plazos inventados. Sin «somos los mejores» ni garantías de puesto.
 * - Solo Palma es sede física: fuera de Mallorca se trabaja en remoto.
 * - Los precios salen de `pricing.ts` (paquete `pack`): no se escriben a mano en el texto.
 */
export type NicheGroup =
  | "hosteleria"
  | "turismo"
  | "eventos"
  | "salud"
  | "bienestar"
  | "mayores"
  | "profesionales"
  | "hogar"
  | "comercio"
  | "formacion";

/** Ids de extras de `pricing.ts` que pueden ir en un paquete recomendado. */
export type PackExtraId =
  | "idiomas"
  | "tienda"
  | "reservas"
  | "alojamiento"
  | "correo"
  | "correo-config"
  | "contenido"
  | "blog"
  | "seo"
  | "geo";

export interface Niche {
  /** kebab-case, sin tildes: "clinicas-dentales". */
  slug: string;
  /** Nombre corto para listados: "Clínicas dentales". */
  name: string;
  group: NicheGroup;
  /** Lo que va tras «para»: "clínicas dentales". En minúsculas salvo nombres propios. */
  forWho: string;
  /** <title> sin " | COMA" (máx. 60 caracteres). Único en toda la web. */
  title: string;
  /** Meta description (120-160 caracteres). Única. */
  description: string;
  /** Titular visible (máx. ~70 caracteres, sin punto final). */
  h1: string;
  /** Entradilla: 1-2 frases. */
  lead: string;
  /** Dos párrafos cortos: el problema real del sector y qué cambia con una buena web, IA y procesos. */
  context: [string, string];
  /** Ángulo Mallorca / Baleares, verdadero (temporada, idiomas, normativa balear…). */
  mallorca: string;
  /** Exactamente 4 funciones de la web propias del sector. */
  web: [Item, Item, Item, Item];
  /** Exactamente 3 automatizaciones concretas del sector. */
  automations: [Item, Item, Item];
  /** Qué hace (y qué no) un agente de IA en este sector. 1-2 frases. */
  agent: string;
  /** Extras recomendados sobre la Web Esencial (ids de pricing.ts). */
  pack: { id: PackExtraId; qty?: number }[];
  /** Por qué ese paquete, en una frase. */
  packNote: string;
  /** Exactamente 4 preguntas propias del sector (la del precio se genera sola). */
  faq: [Item, Item, Item, Item];
  /** 5-8 búsquedas reales con las que te encuentran (keywords del schema y de llms.txt). */
  searches: string[];
  /** 3 slugs de sectores relacionados. */
  related: string[];
  /** Sector cuyos clientes o dueños son, sobre todo, personas mayores. */
  seniors?: boolean;
  /** Página propia de COMA más específica para este sector (p. ej. /despachos/). */
  link?: { href: string; label: string };
}
