export const site = {
  name: "COMA",
  brand: "Comunicación en Mallorca",
  title: "COMA - Comunicación en Mallorca",
  legalName: "Publicom Marketing 2000 SL",
  cif: "B07949647",
  since: 1997,
  spainSince: 2025,
  email: "info@comunicacionenmallorca.com",
  address: {
    street: "Paseo Mallorca, 16",
    postalCode: "07012",
    city: "Palma",
    region: "Illes Balears",
    country: "ES",
  },
  geo: { lat: 39.5718, lng: 2.6447 },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Paseo+Mallorca+16+07012+Palma",
  url: "https://comunicacionenmallorca.com",
  /**
   * Perfiles oficiales (LinkedIn, Instagram, Facebook, YouTube, TikTok, Google Business Profile,
   * Wikidata…). Se publican en `sameAs` del schema: es la señal que usan Google y la IA para
   * unir todas las menciones de COMA en una sola entidad. Añade aquí las URLs reales.
   */
  social: [] as string[],
  /** Idiomas en los que atendemos a clientes. */
  languages: ["es", "ca", "en"],
};

/**
 * Personas del equipo. Se muestran en /sobre-coma/ y se publican como Person en el schema.
 * Se deja vacío a propósito: añade solo personas reales y con su permiso.
 */
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  /** Ruta de la foto en /public (opcional). */
  photo?: string;
  /** Perfil público (LinkedIn u otro). */
  url?: string;
}
export const team: TeamMember[] = [];

/**
 * Opiniones reales de clientes con permiso de publicación. Con datos, se muestran y se
 * publican como Review en el schema. Sin datos no se muestra ni se inventa nada.
 */
export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  /** Texto corto de contexto, p. ej. "Web + SEO local". */
  work?: string;
}
export const testimonials: Testimonial[] = [];

export const years = () => new Date().getFullYear() - site.since;

export const mailto = (subject = "Información desde la web", body = "") =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/precios/", label: "Precios" },
  { href: "/kit-digital/", label: "Kit Digital" },
  { href: "/contacto/", label: "Contacto" },
];

/** Todas las páginas de servicio (menú móvil y pie). */
export const navServices = [
  { href: "/diseno-web/", label: "Diseño web" },
  { href: "/seo-geo/", label: "SEO y GEO" },
  { href: "/agentes-ia/", label: "Agentes de IA" },
  { href: "/automatizaciones/", label: "Automatizaciones" },
  { href: "/notoriedad-de-marca/", label: "Notoriedad y medios" },
];

/** Clientes y referencias que se muestran como prueba social. */
export const trust = {
  headline: "Mallorca Live Festival",
  pymes: 100,
  references: [
    "Mallorca Live Festival",
    "Berkeley",
    "Silicon Valley",
    "Universitat Politècnica de València",
    "Consultorías",
    "Farmacias",
    "Clínicas dentales",
    "Despachos profesionales",
    "+100 pymes",
  ],
};

export const sectors = [
  {
    name: "Clínicas dentales",
    text: "Citas online, tratamientos claros y reseñas que dan confianza.",
  },
  { name: "Farmacias", text: "Servicios, horarios, encargos y consejo de salud a un clic." },
  {
    name: "Profesionales y despachos",
    text: "Abogados, asesorías y arquitectos que transmiten solvencia.",
  },
  { name: "Consultorías", text: "Webs que explican lo complejo y convierten en reuniones." },
  {
    name: "Restauración",
    text: "Carta, reservas y multiidioma para el cliente local y el turista.",
  },
  {
    name: "Turismo y hoteles",
    text: "Reserva directa, idiomas y SEO para no depender de terceros.",
  },
  { name: "Comercio local", text: "Tienda online, catálogo y Google Maps para vender más." },
  { name: "Eventos y cultura", text: "Festivales, salas y promotoras con energía de cartel." },
];
