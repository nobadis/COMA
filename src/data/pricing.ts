/**
 * Precios del configurador. TODOS los importes son editables aquí.
 *
 * - `once`: pago único (€ + IVA).
 * - `month`: cuota mensual (€ + IVA).
 * - `custom`: se presupuesta a medida (IA, automatizaciones, medios...). No suma al total.
 * - `qty`: si existe, el cliente elige cuántas unidades (idiomas, buzones...).
 */
export const basePlan = {
  name: "Web Esencial",
  price: 99,
  suffix: "+ IVA",
  pitch:
    "Abaratamos el coste de tener una web profesional para que tú te dediques a lo importante: tu negocio. Nosotros, a que se vea.",
  includes: [
    "Diseño profesional adaptado a tu marca",
    "Web de hasta 4 páginas clásicas (Inicio, Servicios, Nosotros y Contacto), perfecta en móvil",
    "Formulario de contacto y botones de llamada a la acción",
    "SEO básico: títulos, descripciones y velocidad",
    "Publicación con certificado SSL",
  ],
};

export type Billing = "once" | "month" | "custom";
export type GroupId = "web" | "crece" | "ia";

export interface Extra {
  id: string;
  group: GroupId;
  name: string;
  text: string;
  billing: Billing;
  /** Importe unitario en € (ignorado si billing = "custom"). */
  price?: number;
  /** Unidad para mostrar junto al precio: "página", "idioma", "buzón". */
  unit?: string;
  qty?: { min: number; max: number; label: string };
}

export const extras: Extra[] = [
  {
    id: "idiomas",
    group: "web",
    name: "Multiidioma",
    text: "Español, catalán, inglés, alemán… para clientes de cualquier lugar.",
    billing: "once",
    price: 49,
    unit: "idioma",
    qty: { min: 1, max: 5, label: "idiomas" },
  },
  {
    id: "tienda",
    group: "web",
    name: "Tienda online",
    text: "Catálogo, carrito y pago online. Hasta 50 productos.",
    billing: "once",
    price: 349,
  },
  {
    id: "reservas",
    group: "web",
    name: "Reservas o citas online",
    text: "Tus clientes reservan solos, con aviso por email.",
    billing: "once",
    price: 149,
  },
  {
    id: "alojamiento",
    group: "web",
    name: "Alojamiento y mantenimiento",
    text: "Hosting rápido, copias de seguridad y actualizaciones cada mes.",
    billing: "month",
    price: 9,
  },
  {
    id: "correo",
    group: "web",
    name: "Correo corporativo",
    text: "tu@tuempresa.com configurado en el móvil y el ordenador.",
    billing: "month",
    price: 3,
    unit: "buzón",
    qty: { min: 1, max: 10, label: "buzones" },
  },
  {
    id: "contenido",
    group: "crece",
    name: "Contenido propio",
    text: "Pack de textos y fotos creados para tu marca.",
    billing: "once",
    price: 99,
  },
  {
    id: "blog",
    group: "crece",
    name: "Blog",
    text: "Blog integrado y primeros artículos que posicionan.",
    billing: "once",
    price: 79,
  },
  {
    id: "seo",
    group: "crece",
    name: "SEO local",
    text: "Google, Google Maps y reseñas: que te encuentren cerca.",
    billing: "month",
    price: 99,
  },
  {
    id: "geo",
    group: "crece",
    name: "GEO: posicionamiento en IA",
    text: "Aparece en las respuestas de ChatGPT, Gemini y Perplexity.",
    billing: "month",
    price: 99,
  },
  {
    id: "automatizaciones",
    group: "ia",
    name: "Automatizaciones",
    text: "Leads, emails y facturas que se gestionan solos.",
    billing: "custom",
  },
  {
    id: "agente",
    group: "ia",
    name: "Agente de IA",
    text: "Un asistente que atiende a tus clientes 24/7.",
    billing: "custom",
  },
  {
    id: "medios",
    group: "ia",
    name: "Radio, TV y notoriedad",
    text: "Campañas en medios para que tu marca se conozca.",
    billing: "custom",
  },
];

export const extraGroups: Record<GroupId, { title: string; note: string }> = {
  web: { title: "Tu web, completa", note: "Precio cerrado" },
  crece: { title: "Para crecer", note: "Precio cerrado" },
  ia: { title: "IA, automatización y medios", note: "A medida · sobre presupuesto" },
};

export const IVA = 0.21;
