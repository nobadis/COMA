export const site = {
  name: "COMA",
  brand: "Comunicación en Mallorca",
  title: "COMA - Comunicación en Mallorca",
  legalName: "Publicom Marketing 2000 SL",
  cif: "B07949647",
  since: 1999,
  email: "info@comunicacionenmallorca.com",
  address: {
    street: "Paseo Mallorca, 16",
    postalCode: "07012",
    city: "Palma",
    region: "Illes Balears",
    country: "ES",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Paseo+Mallorca+16+07012+Palma",
  url: "https://comunicacionenmallorca.com",
};

export const mailto = (subject = "Información desde la web") =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

export const nav = [
  { href: "/notoriedad-de-marca/", label: "Notoriedad" },
  { href: "/agentes-ia/", label: "Agentes de IA" },
  { href: "/automatizaciones/", label: "Automatizaciones" },
  { href: "/kit-digital/", label: "Kit Digital" },
];
