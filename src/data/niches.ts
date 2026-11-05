import { basePlan, extras, type Extra } from "./pricing";
import type { Item } from "./services";
import type { Niche, NicheGroup } from "./niches/types";
import { hosteleria } from "./niches/hosteleria";
import { salud } from "./niches/salud";
import { servicios } from "./niches/servicios";

export type { Niche, NicheGroup };

/** Todos los sectores con página propia en /sectores/<slug>/. */
export const niches: Niche[] = [...hosteleria, ...salud, ...servicios];

export const nicheBySlug = (slug: string) => niches.find((n) => n.slug === slug);

/** Orden y nombre de los grupos en el índice /sectores/. */
export const nicheGroups: { id: NicheGroup; label: string }[] = [
  { id: "hosteleria", label: "Hostelería y restauración" },
  { id: "turismo", label: "Turismo, alojamiento y actividades" },
  { id: "eventos", label: "Bodas, eventos y fotografía" },
  { id: "salud", label: "Salud" },
  { id: "bienestar", label: "Belleza, bienestar y deporte" },
  { id: "mayores", label: "Mayores y cuidados" },
  { id: "profesionales", label: "Profesionales y despachos" },
  { id: "hogar", label: "Hogar, reformas y oficios" },
  { id: "comercio", label: "Comercio y producto local" },
  { id: "formacion", label: "Formación y asociaciones" },
];

export interface PackLine {
  name: string;
  /** Importe total de la línea (precio × cantidad). */
  amount: number;
  qty: number;
  unit?: string;
  billing: Extra["billing"];
}

export interface NichePack {
  lines: PackLine[];
  /** Pago único: Web Esencial + extras de pago único. */
  once: number;
  /** Cuota mensual de los extras mensuales (0 si no hay). */
  month: number;
  /** Cuota anual (correo). */
  year: number;
}

/** Calcula el paquete recomendado con los precios vigentes de pricing.ts. */
export function nichePack(n: Niche): NichePack {
  const lines: PackLine[] = [
    { name: basePlan.name, amount: basePlan.price, qty: 1, billing: "once" },
  ];
  for (const p of n.pack) {
    const e = extras.find((x) => x.id === p.id);
    if (!e || e.billing === "custom" || e.price === undefined) continue;
    const qty = p.qty ?? 1;
    lines.push({ name: e.name, amount: e.price * qty, qty, unit: e.unit, billing: e.billing });
  }
  const sum = (b: Extra["billing"]) =>
    lines.filter((l) => l.billing === b).reduce((acc, l) => acc + l.amount, 0);
  return { lines, once: sum("once"), month: sum("month"), year: sum("year") };
}

const eur = (n: number) => `${n.toLocaleString("es-ES")} €`;

/** Frase de precio del paquete, para la FAQ, el schema y llms.txt. */
export function packSentence(n: Niche): string {
  const pk = nichePack(n);
  const parts = pk.lines.map(
    (l) =>
      `${l.name}${l.qty > 1 ? ` (${l.qty} ${l.unit === "idioma" ? "idiomas" : l.unit === "buzón" ? "buzones" : "uds."})` : ""}: ${eur(l.amount)}${l.billing === "month" ? "/mes" : l.billing === "year" ? "/año" : ""}`
  );
  const recurring = [
    pk.month ? `${eur(pk.month)}/mes` : "",
    pk.year ? `${eur(pk.year)}/año` : "",
  ].filter(Boolean);
  return `${parts.join(" + ")}. Total: ${eur(pk.once)} + IVA de pago único${recurring.length ? ` y ${recurring.join(" y ")} + IVA` : ""}.`;
}

/** Pregunta del precio, generada con los precios reales. */
export function priceFaq(n: Niche): Item {
  const pk = nichePack(n);
  return {
    title: `¿Cuánto cuesta una página web para ${n.forWho}?`,
    text: `La Web Esencial cuesta ${eur(basePlan.price)} ${basePlan.suffix}, el mismo precio en toda España. El paquete que solemos recomendar a ${n.forWho} es: ${packSentence(n)} ${pk.lines.length > 1 ? "Puedes quitar o añadir extras en el presupuesto en directo de /precios/." : ""}`.trim(),
  };
}

export { eur };
