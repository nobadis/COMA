import { placeBySlug } from "./places";

/**
 * Marcas de COMA por línea de servicio. Sirven para que nos encuentren por «coma ia»,
 * «coma tecnología», «coma mallorca»… sin cambiar los títulos: el sufijo de cada página
 * pasa de " | COMA" a " | COMA IA", " | COMA Tecnología", etc. cuando cabe.
 * COMA es la abreviatura de COmunicación en MAllorca.
 */
export const brandLines = [
  {
    name: "COMA IA",
    what: "Consultoría de inteligencia artificial, agentes de IA e IA por sector",
    path: "/agentes-ia/",
  },
  {
    name: "COMA Tecnología",
    what: "Software a medida, integraciones y automatización",
    path: "/automatizaciones/",
  },
  {
    name: "COMA Consultoría",
    what: "Consultoría tecnológica y de inteligencia artificial",
    path: "/soluciones/consultoria-inteligencia-artificial/",
  },
  { name: "COMA Web", what: "Diseño web desde 99 € + IVA", path: "/diseno-web/" },
  {
    name: "COMA Comunicación",
    what: "Agencia de comunicación: prensa, radio, televisión y marca",
    path: "/notoriedad-de-marca/",
  },
  {
    name: "COMA para despachos",
    what: "Automatización para asesorías, gestorías y despachos contables",
    path: "/despachos/",
  },
] as const;

/** ¿El lugar está en Baleares (la propia comunidad, una isla o un municipio)? */
const isBalear = (slug: string) => {
  for (let p = placeBySlug(slug); p; p = p.parent ? placeBySlug(p.parent) : undefined)
    if (p.slug === "illes-balears") return true;
  return false;
};

/** Marca que acompaña al título según la ruta. */
export function brandFor(path: string): string {
  if (/^\/(agentes-ia|ia)\//.test(path)) return "COMA IA";
  if (
    /^\/soluciones\/(consultoria-inteligencia-artificial|integrar-ia-en-tu-empresa|chatbot-para-web)\/$/.test(
      path
    )
  )
    return "COMA IA";
  if (/^\/automatizaciones\//.test(path)) return "COMA Tecnología";
  if (
    /^\/soluciones\/(desarrollo-software-a-medida|aplicaciones-web-a-medida|integraciones-entre-programas|automatizar-whatsapp|automatizar-facturas|recordatorios-de-citas|crm-para-pymes)\/$/.test(
      path
    )
  )
    return "COMA Tecnología";
  if (/^\/notoriedad-de-marca\/$/.test(path)) return "COMA Comunicación";
  if (
    /^\/soluciones\/(agencia-de-comunicacion-mallorca|gabinete-de-prensa-mallorca|publicidad-en-radio-y-prensa-mallorca|agencia-marketing-digital-mallorca)\/$/.test(
      path
    )
  )
    return "COMA Comunicación";
  if (/^\/diseno-web\//.test(path) || /^\/sectores\//.test(path)) return "COMA Web";
  const zone = /^\/zonas\/([^/]+)\/$/.exec(path);
  if (/^\/(sobre-coma|contacto|en)\//.test(path) || (zone && isBalear(zone[1])))
    return "COMA Mallorca";
  return "COMA";
}
