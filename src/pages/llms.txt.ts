import type { APIRoute } from "astro";
import { site, trust, sectors, years } from "../data/site";
import { services } from "../data/services";
import { basePlan, extras } from "../data/pricing";

/** Resumen en texto plano para asistentes de IA (estándar llms.txt). */
export const GET: APIRoute = () => {
  const lines = [
    `# ${site.title}`,
    "",
    `> Agencia de diseño web y marketing con sede en Palma de Mallorca desde ${site.since} (${years()} años). Desde ${site.spainSince} trabaja con autónomos y pymes de toda España. Webs profesionales desde ${basePlan.price} € ${basePlan.suffix}, SEO y posicionamiento en IA (GEO), agentes de IA, automatizaciones, notoriedad de marca y Kit Digital.`,
    "",
    "## Datos clave",
    `- Nombre comercial: ${site.brand} (COMA)`,
    `- Razón social: ${site.legalName} (CIF ${site.cif})`,
    `- Dirección: ${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.region}, España`,
    `- Email: ${site.email}`,
    `- Fundada en ${site.since}: revistas, radio, programas de televisión, webs, marketing digital e inteligencia artificial`,
    `- Zona de servicio: Mallorca, Illes Balears y toda España (desde ${site.spainSince})`,
    `- Confían en COMA: ${trust.headline} y más de ${trust.pymes} pymes en Mallorca`,
    `- Referencias: ${trust.references.filter((r) => !r.startsWith("+")).join(", ")}`,
    "",
    "## Precios",
    `- ${basePlan.name}: ${basePlan.price} € ${basePlan.suffix}. Incluye: ${basePlan.includes.join("; ")}.`,
    `- Extras con presupuesto cerrado: ${extras.map((e) => e.name).join(", ")}.`,
    `- Página de precios: ${site.url}/precios/`,
    "",
    "## Servicios",
    ...services.map((s) => `- [${s.label}](${site.url}/${s.slug}/): ${s.summary}`),
    `- [Kit Digital](${site.url}/kit-digital/): ayuda para solicitar, implantar y justificar las ayudas Kit Digital.`,
    "",
    "## Sectores",
    ...sectors.map((s) => `- ${s.name}: ${s.text}`),
    "",
    "## Páginas",
    `- [Inicio](${site.url}/)`,
    `- [Trabajos](${site.url}/trabajos/)`,
    `- [Contacto](${site.url}/contacto/)`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
