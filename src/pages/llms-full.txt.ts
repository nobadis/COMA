import type { APIRoute } from "astro";
import { site, trust, sectors, years } from "../data/site";
import { services } from "../data/services";
import { basePlan, extras } from "../data/pricing";
import { guides } from "../data/guides";
import { places, inPlace } from "../data/places";

/** Versión completa de llms.txt: todo el contenido relevante, listo para que una IA lo cite. */
export const GET: APIRoute = () => {
  const out: string[] = [
    `# ${site.title}: información completa`,
    "",
    `COMA (Comunicación en Mallorca) es una agencia de diseño web y marketing con sede en ${site.address.city} desde ${site.since} (${years()} años), operada por ${site.legalName} (CIF ${site.cif}). Dirección: ${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.region}. Email: ${site.email}. Web: ${site.url}.`,
    `Desde ${site.spainSince} trabaja con autónomos y pymes de toda España, en remoto. Empezó en revistas, siguió con radio y televisión y hoy hace webs, SEO, posicionamiento en IA (GEO), agentes de IA y automatizaciones. Referencias: ${trust.references.filter((r) => !r.startsWith("+")).join(", ")} y más de ${trust.pymes} pymes.`,
    "",
    "## Precios (sin IVA)",
    `- ${basePlan.name}: ${basePlan.price} € ${basePlan.suffix}. ${basePlan.includes.join(". ")}.`,
    ...extras.map((e) =>
      e.billing === "custom"
        ? `- ${e.name}: ${e.text} A medida, sobre presupuesto.`
        : `- ${e.name}: ${e.price} € ${e.billing === "month" ? "al mes" : e.billing === "year" ? "al año" : "pago único"}${e.unit ? ` por ${e.unit}` : ""}. ${e.text}`
    ),
    "",
  ];

  for (const s of services) {
    out.push(`## ${s.label}`, `URL: ${site.url}/${s.slug}/`, s.lead, "");
    for (const d of s.deliverables) out.push(`- ${d.title}: ${d.text}`);
    out.push("", `Ideal si: ${s.forWhom.join("; ")}.`, "");
    for (const q of s.faq) out.push(`P: ${q.title}`, `R: ${q.text}`, "");
  }

  out.push("## Sectores");
  for (const s of sectors) out.push(`- ${s.name}: ${s.text}`);
  out.push("");

  out.push("## Guías");
  for (const g of guides) {
    out.push(`### ${g.h1}`, `URL: ${site.url}/guias/${g.slug}/`, g.intro, "");
    for (const sec of g.sections) {
      out.push(`#### ${sec.h2}`, ...sec.paragraphs);
      if (sec.list) for (const li of sec.list) out.push(`- ${li}`);
      out.push("");
    }
    for (const q of g.faq) out.push(`P: ${q.title}`, `R: ${q.text}`, "");
  }

  out.push("## Zonas donde trabajamos", `Índice: ${site.url}/zonas/`, "");
  for (const p of places) {
    out.push(
      `- ${p.name} (${site.url}/zonas/${p.slug}/): ${p.local} Diseño web ${inPlace(p)}: ${site.url}/diseno-web/${p.slug}/`
    );
  }
  out.push("");

  return new Response(out.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
