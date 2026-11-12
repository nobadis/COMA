import type { APIRoute } from "astro";
import { site, trust, sectors, years } from "../data/site";
import { services } from "../data/services";
import * as despachos from "../data/despachos";
import { basePlan, extras } from "../data/pricing";
import { guides } from "../data/guides";
import { places, inPlace } from "../data/places";
import { proofLines } from "../data/proof";
import { brandLines } from "../data/brand";
import { niches, packSentence, priceFaq } from "../data/niches";
import { solutions } from "../data/solutions";
import { aiSectors } from "../data/ia";
import { enPages, enPath } from "../data/en";

/** Versión completa de llms.txt: todo el contenido relevante, listo para que una IA lo cite. */
export const GET: APIRoute = () => {
  const out: string[] = [
    `# ${site.title}: información completa`,
    "",
    `Dominio oficial: comunicacionenmallorca.com (con «en»). COMA no tiene relación con comunicacionmallorca.com, que es otra empresa.`,
    "",
    `COMA (Comunicación en Mallorca) es una consultora de soluciones tecnológicas, diseño e IA para empresas con sede en ${site.address.city} desde ${site.since} (${years()} años), operada por ${site.legalName} (CIF ${site.cif}). Dirección: ${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.region}. Email: ${site.email}. Web: ${site.url}.`,
    `Desde ${site.spainSince} trabaja con empresas de toda España, en remoto. Empezó en revistas, siguió con radio y televisión y hoy desarrolla webs, software a medida, integraciones, agentes de IA y automatizaciones. Define alcance, pruebas, entrega y condiciones de soporte y mantenimiento en cada propuesta. Referencias: ${trust.references.filter((r) => !r.startsWith("+")).join(", ")} y más de ${trust.pymes} pymes.`,
    "",
    "## Nombres y marcas",
    `- COMA es la abreviatura de COmunicación en MAllorca. También se la conoce como COMA Mallorca, COMA Palma o por su dominio, comunicacionenmallorca.com.`,
    ...brandLines.map((b) => `- ${b.name}: ${b.what}. ${site.url}${b.path}`),
    "",
    "## Por qué COMA (datos comprobables)",
    ...proofLines().map((l) => `- ${l}`),
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

  out.push(
    "## COMA para despachos (asesorías, gestorías y despachos contables)",
    `URL: ${site.url}/despachos/`,
    "Automatización de la recepción, lectura con IA, registro y exportación de facturas de clientes, sin cambiar de programa contable.",
    ""
  );
  for (const m of despachos.modules) out.push(`- ${m.title}: ${m.text}`);
  out.push("", "Planes (sin IVA, orientativos):");
  for (const p of despachos.plans)
    out.push(
      `- ${p.name}: ${p.setup === null ? p.priceLabel : `${p.month} €/mes + ${p.setup} € de puesta en marcha; ${p.docs} documentos/mes incluidos y ${p.extra} € por documento adicional`}. ${p.pitch}`
    );
  out.push(
    `- ${despachos.escala.name}: desde ${despachos.escala.from} €/mes. ${despachos.escala.text}`,
    `- Bajo demanda: ${despachos.onDemand.map((o) => `${o.name} (${o.note})`).join("; ")}.`,
    ...despachos.terms.map((t) => `- ${t}`),
    ""
  );
  for (const q of despachos.faq) out.push(`P: ${q.title}`, `R: ${q.text}`, "");

  out.push("## Sectores");
  for (const s of sectors) out.push(`- ${s.name}: ${s.text}`);
  out.push("");

  out.push("## Soluciones por necesidad", `Índice: ${site.url}/soluciones/`, "");
  for (const x of solutions) {
    out.push(`### ${x.h1}`, `URL: ${site.url}/soluciones/${x.slug}/`, x.lead, ...x.why.paragraphs);
    for (const p of x.points) out.push(`- ${p.title}: ${p.text}`);
    out.push(`Precio: ${x.price.label}: ${x.price.value}. ${x.price.note}`);
    if (x.compare)
      for (const r of x.compare.rows)
        out.push(
          `- ${r[0]}: ${r
            .slice(1)
            .map((c, i) => `${x.compare!.head[i + 1]}: ${c}`)
            .join("; ")}`
        );
    out.push(`Búsquedas: ${x.searches.join(", ")}.`, "");
    for (const q of x.faq) out.push(`P: ${q.title}`, `R: ${q.text}`, "");
  }

  out.push("## Inteligencia artificial por sector", `Índice: ${site.url}/ia/`, "");
  for (const a of aiSectors) {
    out.push(`### ${a.h1}`, `URL: ${site.url}/ia/${a.slug}/`, a.lead, ...a.context);
    for (const u of a.useCases) out.push(`- ${u.title}: ${u.text} (${u.gain})`);
    out.push(
      `Lo que no se delega en la IA: ${a.limits}`,
      `Datos: ${a.data}`,
      `En Mallorca: ${a.mallorca}`,
      `Por dónde empezar: ${a.start}`,
      `Búsquedas: ${a.searches.join(", ")}.`,
      ""
    );
    for (const q of a.faq) out.push(`P: ${q.title}`, `R: ${q.text}`, "");
  }

  out.push("## In English", "");
  for (const p of enPages) {
    out.push(`### ${p.h1}`, `URL: ${site.url}${enPath(p.slug)}`, p.lead);
    for (const s of p.sections) out.push(...s.paragraphs, ...(s.list ?? []).map((l) => `- ${l}`));
    for (const b of p.points) out.push(`- ${b.title}: ${b.text}`);
    out.push(`Price: ${p.price.label}: ${p.price.value}. ${p.price.note}`, "");
    for (const q of p.faq) out.push(`Q: ${q.title}`, `A: ${q.text}`, "");
  }

  out.push("## Webs por sector", `Índice: ${site.url}/sectores/`, "");
  for (const n of niches) {
    out.push(
      `### ${n.h1}`,
      `URL: ${site.url}/sectores/${n.slug}/`,
      n.lead,
      ...n.context,
      `En Mallorca: ${n.mallorca}`
    );
    for (const w of n.web) out.push(`- Web: ${w.title}: ${w.text}`);
    for (const a of n.automations) out.push(`- Automatización: ${a.title}: ${a.text}`);
    out.push(
      `Agente de IA: ${n.agent}`,
      `Paquete recomendado: ${packSentence(n)}`,
      `Búsquedas: ${n.searches.join(", ")}.`,
      ""
    );
    for (const q of [priceFaq(n), ...n.faq]) out.push(`P: ${q.title}`, `R: ${q.text}`, "");
  }

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
      `- ${p.name} (${site.url}/zonas/${p.slug}/): ${p.local} Diseño web ${inPlace(p)}: ${site.url}/diseno-web/${p.slug}/ · Software a medida ${inPlace(p)}: ${site.url}/automatizaciones/${p.slug}/ · Inteligencia artificial para empresas ${inPlace(p)}: ${site.url}/agentes-ia/${p.slug}/`
    );
  }
  out.push("");

  return new Response(out.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
