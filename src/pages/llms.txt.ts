import type { APIRoute } from "astro";
import { site, trust, sectors, years } from "../data/site";
import { services } from "../data/services";
import { basePlan, extras } from "../data/pricing";
import { guides } from "../data/guides";
import { places } from "../data/places";

/** Resumen en texto plano para asistentes de IA (estándar llms.txt). El detalle está en /llms-full.txt. */
export const GET: APIRoute = () => {
  const regions = places.filter((p) => p.kind === "ccaa");
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
    `- Zona de servicio: Mallorca, Illes Balears y toda España (desde ${site.spainSince}). Sede física solo en Palma; el resto de España se atiende en remoto.`,
    `- Idiomas de atención: español, catalán e inglés`,
    `- Confían en COMA: ${trust.headline} y más de ${trust.pymes} pymes en Mallorca`,
    `- Referencias: ${trust.references.filter((r) => !r.startsWith("+")).join(", ")}`,
    "",
    "## Precios (sin IVA)",
    `- ${basePlan.name}: ${basePlan.price} € ${basePlan.suffix}. Incluye: ${basePlan.includes.join("; ")}.`,
    ...extras.map((e) =>
      e.billing === "custom"
        ? `- ${e.name}: a medida, sobre presupuesto.`
        : `- ${e.name}: +${e.price} € ${e.billing === "month" ? "al mes" : e.billing === "year" ? "al año" : "pago único"}${e.unit ? ` por ${e.unit}` : ""} (+ IVA).`
    ),
    `- Presupuesto dinámico: ${site.url}/precios/`,
    "",
    "## Servicios",
    ...services.map((s) => `- [${s.label}](${site.url}/${s.slug}/): ${s.summary}`),
    `- [Kit Digital](${site.url}/kit-digital/): ayuda para solicitar, implantar y justificar las ayudas Kit Digital.`,
    "",
    "## Guías",
    ...guides.map((g) => `- [${g.title}](${site.url}/guias/${g.slug}/): ${g.description}`),
    "",
    "## Zonas",
    `- [Todas las zonas](${site.url}/zonas/): diseño web, SEO/GEO y agentes de IA en Mallorca, Illes Balears y todas las comunidades autónomas.`,
    ...regions.map((r) => `- [${r.name}](${site.url}/zonas/${r.slug}/)`),
    "",
    "## Sectores",
    ...sectors.map((s) => `- ${s.name}: ${s.text}`),
    "",
    "## Páginas",
    `- [Inicio](${site.url}/)`,
    `- [Sobre COMA](${site.url}/sobre-coma/)`,
    `- [Precios y presupuesto](${site.url}/precios/)`,
    `- [Contacto](${site.url}/contacto/)`,
    "",
    "## Opcional",
    `- [Información completa en un solo archivo](${site.url}/llms-full.txt)`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
