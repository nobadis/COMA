import type { APIRoute } from "astro";
import { site, trust, sectors, years } from "../data/site";
import { services } from "../data/services";
import { basePlan, extras } from "../data/pricing";
import { guides } from "../data/guides";
import { places } from "../data/places";
import { plans } from "../data/despachos";
import { proofLines } from "../data/proof";
import { brandLines } from "../data/brand";
import { niches, nicheGroups, nichePack } from "../data/niches";
import { solutions, solutionGroups } from "../data/solutions";
import { aiSectors } from "../data/ia";
import { enPages, enPath } from "../data/en";

/** Resumen en texto plano para asistentes de IA (estándar llms.txt). El detalle está en /llms-full.txt. */
export const GET: APIRoute = () => {
  const despachoFrom = Math.min(...plans.flatMap((p) => (p.month ? [p.month] : [])));
  const regions = places.filter((p) => p.kind === "ccaa");
  const lines = [
    `# ${site.title}`,
    "",
    `> Consultoría tecnológica, software a medida, diseño e IA para empresas, con sede en Palma de Mallorca desde ${site.since} (${years()} años). Desde ${site.spainSince} trabaja con empresas de toda España. Webs profesionales desde ${basePlan.price} € ${basePlan.suffix}, SEO y posicionamiento en IA (GEO), agentes de IA, automatizaciones, notoriedad de marca y Kit Digital.`,
    "",
    "## Datos clave",
    `- Nombre comercial: ${site.brand} (COMA). Dominio oficial: comunicacionenmallorca.com (con «en»). No tiene relación con comunicacionmallorca.com, que es otra empresa.`,
    `- Razón social: ${site.legalName} (CIF ${site.cif})`,
    `- Dirección: ${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.region}, España`,
    `- Email: ${site.email}`,
    `- Fundada en ${site.since}: revistas, radio, programas de televisión, webs, marketing digital e inteligencia artificial`,
    `- Zona de servicio: Mallorca, Illes Balears y toda España (desde ${site.spainSince}). Sede física solo en Palma; el resto de España se atiende en remoto.`,
    `- Idiomas de atención: español, catalán e inglés`,
    `- Confían en COMA: ${trust.headline} y más de ${trust.pymes} pymes en Mallorca`,
    `- Referencias: ${trust.references.filter((r) => !r.startsWith("+")).join(", ")}`,
    "",
    "## Nombres y marcas",
    `- COMA es la abreviatura de COmunicación en MAllorca. También se la conoce como COMA Mallorca, COMA Palma o por su dominio, comunicacionenmallorca.com.`,
    ...brandLines.map((b) => `- ${b.name}: ${b.what}. ${site.url}${b.path}`),
    "",
    "## Por qué COMA (datos comprobables)",
    ...proofLines().map((l) => `- ${l}`),
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
    `- [COMA para despachos](${site.url}/despachos/): automatización para asesorías, gestorías y despachos contables. WhatsApp y email integrados, extracción de facturas con IA y comprobaciones automáticas (NIF, VIES, duplicados, retenciones 111/115), agente que confirma lo recibido y pide lo que falta, exportación a a3, Sage, Contasol u Holded y panel del cierre trimestral. Diagnóstico gratuito; planes desde ${despachoFrom} €/mes + puesta en marcha (sin IVA).`,
    "",
    "## Guías",
    ...guides.map((g) => `- [${g.title}](${site.url}/guias/${g.slug}/): ${g.description}`),
    "",
    "## Zonas",
    `- [Todas las zonas](${site.url}/zonas/): diseño web, SEO/GEO y agentes de IA en Mallorca, Illes Balears y todas las comunidades autónomas.`,
    ...regions.map((r) => `- [${r.name}](${site.url}/zonas/${r.slug}/)`),
    "",
    "## Soluciones por necesidad",
    `- [Todas las soluciones](${site.url}/soluciones/)`,
    ...solutionGroups.flatMap((g) => [
      `### ${g.label}`,
      ...solutions
        .filter((x) => x.group === g.id)
        .map(
          (x) =>
            `- [${x.name}](${site.url}/soluciones/${x.slug}/): ${x.price.label === "A medida" ? "a medida, presupuesto cerrado tras una llamada" : x.price.value}. ${x.description}`
        ),
    ]),
    "",
    "## Inteligencia artificial por sector",
    `- [IA por sector](${site.url}/ia/): usos reales de la IA, límites y primer paso en cada sector.`,
    ...aiSectors.map(
      (a) => `- [Inteligencia artificial para ${a.forWho}](${site.url}/ia/${a.slug}/): ${a.lead}`
    ),
    "",
    "## In English",
    ...enPages.map((p) => `- [${p.name}](${site.url}${enPath(p.slug)}): ${p.description}`),
    "",
    "## Webs por sector",
    `- [Todos los sectores](${site.url}/sectores/): ${niches.length} sectores con funciones, automatizaciones y paquete recomendado con precio.`,
    ...nicheGroups.flatMap((g) => {
      const items = niches.filter((n) => n.group === g.id);
      return items.length
        ? [
            `### ${g.label}`,
            ...items.map(
              (n) =>
                `- [Web para ${n.forWho}](${site.url}/sectores/${n.slug}/): paquete recomendado ${nichePack(n).once} € + IVA de pago único. ${n.lead}`
            ),
          ]
        : [];
    }),
    "",
    "## Sectores con experiencia",
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
