import { basePlan, extras } from "./pricing";
import { services, type Item } from "./services";
import { site, years } from "./site";
import { inPlace, kindLabel, placeBySlug, type Place } from "./places";

/** Servicios con página local. Notoriedad vive solo a nivel nacional (es de Mallorca). */
export const localServiceSlugs = [
  "diseno-web",
  "seo-geo",
  "agentes-ia",
  "automatizaciones",
] as const;
export type LocalServiceSlug = (typeof localServiceSlugs)[number];

const seoPrice = extras.find((e) => e.id === "seo")?.price ?? 99;

const lc = (t: string) => t.charAt(0).toLowerCase() + t.slice(1);
const list = (items: string[]) => {
  const l = items.map(lc);
  return l.length <= 1 ? (l[0] ?? "") : `${l.slice(0, -1).join(", ")} y ${l[l.length - 1]}`;
};

/** Primera variante que cabe en `max` caracteres (los títulos llevan además " | COMA"). */
const fit = (max: number, ...options: string[]) =>
  options.find((o) => o.length <= max) ?? options[options.length - 1];
/** Une frases mientras la descripción no pase de ~160 caracteres. */
const desc = (...parts: string[]) =>
  parts.reduce(
    (acc, part) => (acc && (acc + " " + part).length > 160 ? acc : acc ? acc + " " + part : part),
    ""
  );

/** Cómo atendemos en este lugar, sin inventar oficinas. */
export const presence = (p: Place) =>
  p.hq
    ? `Nuestra sede está en ${site.address.street}, ${site.address.postalCode} ${site.address.city}: puedes venir a vernos, quedar para un café o hacerlo todo por videollamada.`
    : p.parent === "mallorca" || p.slug === "mallorca" || p.slug === "illes-balears"
      ? `Estamos en Palma y conocemos el territorio. Nos reunimos contigo en persona si lo prefieres, o por videollamada si te viene mejor.`
      : `Trabajamos en remoto desde nuestra sede de Palma, con reuniones por videollamada y seguimiento claro. Es el mismo equipo y el mismo precio que en Mallorca, sin desplazamientos que encarezcan el proyecto.`;

export interface LocalCopy {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  why: { title: string; paragraphs: string[] };
  bullets: Item[];
  priceLine: string;
  faq: Item[];
  ctaTitle: string;
  subject: string;
}

export function localCopy(service: LocalServiceSlug, p: Place): LocalCopy {
  const where = inPlace(p);
  const sectors = list(p.sectors);
  const langs = p.languages?.length ? list(p.languages) : "";
  const common: Item[] = [
    {
      title: `¿Trabajáis con empresas ${where}?`,
      text: p.hq ? `Sí, somos de aquí. ${presence(p)}` : `Sí. ${presence(p)}`,
    },
  ];

  if (service === "diseno-web") {
    return {
      title: fit(54, `Diseño web ${where} desde ${basePlan.price} €`, `Diseño web ${where}`),
      description: desc(
        `Diseño de páginas web ${where} desde ${basePlan.price} € + IVA: a medida, rápidas y preparadas para Google y la IA.`,
        `${years()} años de experiencia desde Mallorca.`
      ),
      eyebrow: `Diseño web ${where}`,
      h1: `Diseño web ${where}, desde ${basePlan.price} €`,
      lead: `Webs a medida para negocios ${where}, desde ${basePlan.price} € + IVA. Diseño propio, rápidas y listas para Google y la IA.`,
      why: {
        title: `Una web que se entienda ${where}`,
        paragraphs: [
          p.local,
          p.angle,
          `Diseñamos para ${sectors}, entre otros sectores, con textos, estructura y datos pensados para quien te busca ${where}.${langs ? ` Cuidamos los idiomas que de verdad se usan: ${langs}.` : ""}`,
        ],
      },
      bullets: [
        {
          title: "Diseño propio, no plantilla",
          text: "Cada web se diseña desde cero con la personalidad de tu marca. Se nota en la primera pantalla.",
        },
        {
          title: "Rápida y perfecta en móvil",
          text: "La mayoría de las visitas llegan desde el teléfono. Carga al instante y se ve impecable.",
        },
        {
          title: `Preparada para búsquedas ${where}`,
          text: `Títulos, datos estructurados y contenido local para que Google y la IA te asocien con ${p.name}.`,
        },
        {
          title: "Contacto a un clic",
          text: "Formulario, email y llamada visibles en cada página para que ningún cliente se pierda por el camino.",
        },
      ],
      priceLine: `Web Esencial: ${basePlan.price} € ${basePlan.suffix}. Hasta 4 páginas clásicas, adaptada a móvil, con formulario, SEO básico y SSL. Extras a la carta (idiomas, tienda, reservas, blog) con precio cerrado.`,
      faq: [
        ...common,
        {
          title: `¿Cuánto cuesta una página web ${where}?`,
          text: `Nuestra Web Esencial cuesta ${basePlan.price} € ${basePlan.suffix} y es el mismo precio ${where} que en cualquier otro sitio. Si necesitas tienda online, reservas o varios idiomas, lo ves sumando en el presupuesto en directo de /precios/ antes de pedirnos nada.`,
        },
        {
          title: "¿Es una plantilla?",
          text: "No. Diseñamos y maquetamos cada web a medida con un proceso propio, y por eso podemos darte precio cerrado desde el primer día.",
        },
        {
          title: `¿Me ayudáis a aparecer en Google ${where}?`,
          text: `Sí. La web incluye SEO básico (títulos, descripciones, velocidad). Si quieres competir por búsquedas concretas ${where}, añadimos SEO local y posicionamiento en IA como servicio mensual.`,
        },
      ],
      ctaTitle: `¿Hacemos tu web ${where}?`,
      subject: `Diseño web ${where}`,
    };
  }

  if (service === "seo-geo") {
    return {
      title: fit(54, `SEO y posicionamiento en IA ${where}`, `SEO y GEO ${where}`),
      description: desc(
        `SEO local y GEO ${where}: aparece en Google, Maps y en las respuestas de ChatGPT, Gemini y Claude.`,
        `Desde ${seoPrice} €/mes + IVA, sin permanencia.`
      ),
      eyebrow: `SEO local + GEO ${where}`,
      h1: `Que te encuentren ${where}: en Google y en la IA`,
      lead: `Tus clientes ${where} buscan en Google y preguntan a la IA. Preparamos tu ficha, tu web y tu contenido para salir en los dos.`,
      why: {
        title: `Cómo se compite ${where}`,
        paragraphs: [
          p.local,
          p.angle,
          `Los sectores con más búsquedas ${where} incluyen ${sectors}. En cada uno trabajamos las preguntas reales de tus clientes y la información que la IA necesita para recomendarte con confianza.`,
        ],
      },
      bullets: [
        {
          title: "Auditoría SEO y GEO",
          text: `Medimos cómo te ven hoy Google y los asistentes de IA ${where}, y qué te falta para aparecer.`,
        },
        {
          title: "Google Business Profile y Maps",
          text: "Ficha completa, categorías, fotos, reseñas y publicaciones: lo que decide quién recibe la llamada.",
        },
        {
          title: "Posicionamiento en IA (GEO)",
          text: "Estructuramos tu información, tus datos y tus páginas para que ChatGPT, Gemini o Claude te citen.",
        },
        {
          title: "Medición clara",
          text: "Informe mensual con visibilidad, tráfico y contactos. Sabes qué funciona y qué no.",
        },
      ],
      priceLine: `SEO local desde ${seoPrice} €/mes + IVA y GEO desde ${seoPrice} €/mes + IVA. Sin permanencia: te quedas porque funciona.`,
      faq: [
        ...common,
        {
          title: `¿Cuánto tarda el SEO ${where} en dar resultados?`,
          text: "Las mejoras técnicas y de ficha local se notan en semanas; un posicionamiento sólido se construye en meses. Desde el primer informe ves la evolución.",
        },
        {
          title: "¿Garantizáis el primer puesto?",
          text: "No, y desconfía de quien lo haga: Google y la IA deciden. Lo que sí garantizamos es un trabajo medible, transparente y enfocado en que te encuentren más clientes.",
        },
        {
          title: "¿Qué es el GEO?",
          text: "Generative Engine Optimization: preparar tu presencia para que ChatGPT, Gemini, Claude, Copilot o Perplexity entiendan tu negocio y lo mencionen en sus respuestas. Cada vez más clientes preguntan primero a la IA.",
        },
      ],
      ctaTitle: `¿Hacemos que te encuentren ${where}?`,
      subject: `SEO y GEO ${where}`,
    };
  }

  if (service === "automatizaciones") {
    return {
      title: fit(
        54,
        `Software a medida ${where}: integraciones e IA`,
        `Software a medida ${where}`
      ),
      description: desc(
        `Software a medida ${where}: aplicaciones, integraciones entre programas y automatización con IA para empresas.`,
        `Alcance, plazos y precio cerrado por escrito.`
      ),
      eyebrow: `Software a medida ${where}`,
      h1: `Software a medida ${where}: que tus programas trabajen juntos`,
      lead: `Aplicaciones internas, integraciones y automatizaciones con IA para empresas ${where}. Alcance, pruebas y mantenimiento definidos antes de empezar.`,
      why: {
        title: `Qué resuelve el software a medida ${where}`,
        paragraphs: [
          p.local,
          `En empresas de ${sectors} hay trabajo que se repite cada día: pasar datos de un programa a otro, preparar presupuestos, perseguir cobros o responder lo mismo. Ahí es donde una integración o una herramienta propia ahorra horas.`,
          `Elegimos entre desarrollo propio y herramientas existentes (Make, n8n, Zapier o las API de tus programas) según el alcance y lo que cuesta mantenerlo. Si conviene, empezamos por un piloto acotado.`,
        ],
      },
      bullets: [
        {
          title: "Integraciones entre programas",
          text: "CRM, ERP, facturación, tienda y email conectados por API: cada dato se escribe una sola vez.",
        },
        {
          title: "Aplicaciones y paneles a medida",
          text: "Portales de cliente, herramientas internas y cuadros de mando con los datos de todas tus herramientas.",
        },
        {
          title: "Automatización con IA",
          text: "Lectura de documentos y facturas, clasificación de emails y respuestas sugeridas, con revisión humana.",
        },
        {
          title: "Entrega y mantenimiento",
          text: "Pruebas, documentación y soporte acordados por escrito, para que nada dependa de una caja negra.",
        },
      ],
      priceLine:
        "A medida: alcance, plazos y precio cerrado por escrito tras una llamada. Separamos la puesta en marcha, las cuotas de terceros y el mantenimiento.",
      faq: [
        ...common,
        {
          title: `¿Cuánto cuesta un software a medida ${where}?`,
          text: "Depende del alcance y de las herramientas que haya que conectar. Empezamos por un diagnóstico y, cuando conviene, un piloto con precio cerrado antes de ampliar.",
        },
        {
          title: "¿Desarrollo propio o herramientas como Make o n8n?",
          text: "Lo que tenga más sentido para tu caso. Las herramientas de automatización son rápidas de poner en marcha; el desarrollo propio compensa cuando el proceso es central o el volumen es alto.",
        },
        {
          title: "¿Quién es dueño del desarrollo y de los datos?",
          text: "La propiedad, los accesos y la documentación se acuerdan por escrito en la propuesta, antes de empezar.",
        },
      ],
      ctaTitle: `¿Qué proceso quieres que funcione solo ${where}?`,
      subject: `Software a medida ${where}`,
    };
  }

  return {
    title: fit(
      54,
      `Inteligencia artificial para empresas ${where}`,
      `IA para empresas ${where}: agentes 24/7`,
      `Agentes de IA ${where}: atención 24/7`,
      `Agentes de IA ${where}`
    ),
    description: desc(
      `Inteligencia artificial para empresas ${where}: consultoría de IA y agentes que atienden, cualifican y reservan 24/7 en web, WhatsApp y email.`,
      `Presupuesto a medida.`
    ),
    eyebrow: `Agentes de IA ${where}`,
    h1: `Agentes de IA que atienden y reservan ${where}, 24/7`,
    lead: `Un asistente con la información de tu negocio atiende ${where} por web, WhatsApp o email, y avisa a tu equipo cuando hace falta una persona.`,
    why: {
      title: `Dónde ayuda un agente ${where}`,
      paragraphs: [
        p.local,
        `Un agente no sustituye a tu equipo: se ocupa de lo repetitivo para que tu gente atienda lo que necesita criterio. ${p.angle}`,
        `Ejemplos ${where}: responder en ${langs ? langs : "el idioma del cliente"} fuera de horario, resolver dudas frecuentes y pasar al equipo solo las oportunidades reales en ${sectors}.`,
      ],
    },
    bullets: [
      {
        title: "Atención al cliente 24/7",
        text: "Resuelve dudas de horarios, precios y disponibilidad en segundos y en el idioma del cliente.",
      },
      {
        title: "Captación y reservas",
        text: "Cualifica cada contacto, propone una cita y envía la oportunidad a tu CRM con el contexto.",
      },
      {
        title: "Supervisión humana",
        text: "El agente responde solo con información validada y deriva a una persona cuando no sabe.",
      },
      {
        title: "RGPD desde el diseño",
        text: "Informa de que habla con una IA, recoge solo los datos necesarios y usa proveedores con garantías.",
      },
    ],
    priceLine:
      "Presupuesto a medida: depende de canales, integraciones, idiomas y volumen. Tras una llamada te damos un precio cerrado.",
    faq: [
      ...common,
      {
        title: `¿Hacéis consultoría de inteligencia artificial ${where}?`,
        text: "Sí. Empezamos por un diagnóstico de qué tareas tiene sentido llevar a la IA, lo probamos con un piloto medible y lo implantamos con supervisión humana: agentes, automatizaciones o software a medida.",
      },
      {
        title: "¿La IA puede decir algo que no debe?",
        text: "Definimos límites claros: el agente responde solo con información validada de tu negocio y deriva a una persona cuando no sabe la respuesta o cuando el cliente lo pide.",
      },
      {
        title: "¿Cuánto cuesta un agente de IA?",
        text: "Se presupuesta a medida porque depende de las tareas, los canales y las herramientas a integrar. Lo hablamos en una llamada y te damos un precio cerrado.",
      },
      {
        title: "¿Necesito conocimientos técnicos?",
        text: "No. Nosotros lo diseñamos, lo conectamos y lo mantenemos. Tú nos das la información de tu negocio y validas cómo responde.",
      },
    ],
    ctaTitle: `¿Ponemos un agente de IA a trabajar para ti ${where}?`,
    subject: `Agente de IA ${where}`,
  };
}

/** Todas las combinaciones servicio × lugar para getStaticPaths. */
export const localPaths = (places: Place[]) =>
  localServiceSlugs.flatMap((service) => places.map((place) => ({ service, place })));

/** Nombre del servicio en las páginas locales («Software a medida en Valencia»). */
const localLabels: Record<string, string> = { automatizaciones: "Software a medida" };
export const serviceLabel = (slug: string) =>
  localLabels[slug] ?? services.find((s) => s.slug === slug)?.label ?? slug;

/** Texto de ruta para migas: Zonas > (comunidad / isla) > lugar. */
export function placeTrail(p: Place): Place[] {
  const trail: Place[] = [];
  let cur: Place | undefined = p;
  while (cur) {
    trail.unshift(cur);
    cur = cur.parent ? placeBySlug(cur.parent) : undefined;
  }
  return trail;
}

export { kindLabel };
