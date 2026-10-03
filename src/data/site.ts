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
};

export const years = () => new Date().getFullYear() - site.since;

export const mailto = (subject = "Información desde la web", body = "") =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;

export const nav = [
  { href: "/diseno-web/", label: "Webs" },
  { href: "/seo-geo/", label: "SEO y GEO" },
  { href: "/agentes-ia/", label: "Agentes de IA" },
  { href: "/automatizaciones/", label: "Automatizaciones" },
  { href: "/precios/", label: "Precios" },
];

export const navMore = [
  { href: "/trabajos/", label: "Trabajos" },
  { href: "/notoriedad-de-marca/", label: "Notoriedad y medios" },
  { href: "/kit-digital/", label: "Kit Digital" },
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
