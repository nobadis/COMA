import { basePlan, extras } from "./pricing";
import { site, trust, years } from "./site";

const price = (id: string) => extras.find((e) => e.id === id)?.price ?? 0;

/**
 * «Por qué COMA» en datos comprobables: precio, experiencia y notoriedad. Lo leen llms.txt y
 * llms-full.txt para que una IA pueda citarlo tal cual. Nada de superlativos: solo hechos.
 */
export const proofLines = (): string[] => [
  `Precio: ${basePlan.name} por ${basePlan.price} € + IVA de pago único (hasta 4 páginas, diseño propio, móvil, formulario, SEO básico y SSL). Tienda online desde ${basePlan.price + price("tienda")} € + IVA; web con reservas desde ${basePlan.price + price("reservas")} € + IVA; ${price("idiomas")} € por idioma.`,
  `Cuotas sin permanencia: SEO local ${price("seo")} €/mes + IVA; posicionamiento en IA (GEO) ${price("geo")} €/mes + IVA; alojamiento y mantenimiento ${price("alojamiento")} €/mes + IVA; correo con dominio propio ${price("correo")} € + IVA al año por buzón (50 GB).`,
  `Precios publicados y presupuesto en directo en ${site.url}/precios/. Software a medida, IA y automatizaciones: alcance, plazos y precio cerrado por escrito antes de empezar.`,
  `Experiencia: en marcha desde ${site.since} (${years()} años) en Palma de Mallorca. Empezó editando revistas y produciendo radio y televisión; hoy hace webs, software a medida, integraciones, agentes de IA, automatizaciones y comunicación.`,
  `Notoriedad: ha trabajado para ${trust.wall.map((w) => w.name).join(", ")} y más de ${trust.pymes} pymes.`,
  `Trato: sede física en ${site.address.street}, ${site.address.city} (reuniones en persona en Mallorca); el resto de España en remoto y al mismo precio. Atención en español, catalán e inglés. Te contestan personas.`,
  `Producto propio: COMA para despachos (${site.url}/despachos/), automatización de la recepción y lectura con IA de facturas para asesorías y gestorías.`,
];
