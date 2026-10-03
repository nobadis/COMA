/**
 * Precios. El plan base tiene precio público; los extras se presupuestan a medida.
 * Si quieres mostrar el precio de un extra, rellena `price` (p. ej. "desde 9 €/mes").
 */
export const basePlan = {
  name: "Web Esencial",
  price: 99,
  suffix: "+ IVA",
  pitch:
    "Tu web profesional, lista para captar clientes. Tú te dedicas a tu negocio; nosotros, a que se vea.",
  includes: [
    "Diseño profesional adaptado a tu marca",
    "Web de una página, perfecta en móvil",
    "Formulario de contacto y botones de llamada a la acción",
    "SEO básico: títulos, descripciones y velocidad",
    "Publicación con certificado SSL",
  ],
};

export interface Extra {
  id: string;
  name: string;
  text: string;
  price?: string;
  group: "web" | "crece" | "ia";
}

export const extras: Extra[] = [
  {
    id: "paginas",
    group: "web",
    name: "Más páginas",
    text: "Servicios, equipo, galería, contacto… las secciones que necesites.",
  },
  {
    id: "idiomas",
    group: "web",
    name: "Multiidioma",
    text: "Español, catalán, inglés, alemán… para clientes de cualquier lugar.",
  },
  {
    id: "alojamiento",
    group: "web",
    name: "Alojamiento y mantenimiento",
    text: "Hosting rápido, copias de seguridad y actualizaciones cada mes.",
  },
  {
    id: "correo",
    group: "web",
    name: "Correo corporativo",
    text: "tu@tuempresa.com configurado en el móvil y el ordenador.",
  },
  {
    id: "tienda",
    group: "web",
    name: "Tienda online o reservas",
    text: "Vende o recibe reservas con pago online.",
  },
  {
    id: "contenido",
    group: "crece",
    name: "Contenido propio",
    text: "Textos, fotos y vídeo creados para tu marca.",
  },
  {
    id: "blog",
    group: "crece",
    name: "Blog",
    text: "Artículos que posicionan y responden a tus clientes.",
  },
  {
    id: "seo",
    group: "crece",
    name: "SEO local y GEO",
    text: "Aparece en Google, Google Maps y en las respuestas de la IA.",
  },
  {
    id: "automatizaciones",
    group: "ia",
    name: "Automatizaciones",
    text: "Leads, emails y facturas que se gestionan solos.",
  },
  {
    id: "agente",
    group: "ia",
    name: "Agente de IA",
    text: "Un asistente que atiende a tus clientes 24/7.",
  },
];

export const extraGroups = {
  web: "Tu web, completa",
  crece: "Para crecer",
  ia: "IA y automatización",
} as const;
