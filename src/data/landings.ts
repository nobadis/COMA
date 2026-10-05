import { basePlan, extras } from "./pricing";
import type { Item } from "./services";

/**
 * Landings para anuncios (Google, Meta, TikTok, LinkedIn, Bing) y outbound.
 * Viven en /lp/<slug>/, son noindex y no aparecen en el sitemap: el tráfico llega por campaña.
 * Convención de UTM en docs/ADS.md.
 */
export interface Landing {
  slug: string;
  /** Título interno / de pestaña. */
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  bullets: string[];
  cta: string;
  /** Demo inmersiva que se muestra bajo el titular. */
  demo: "geo" | "agent" | "brand";
  offer: { label: string; price: string; note: string };
  steps: Item[];
  faq: Item[];
  /** Interés que se adjunta al lead. */
  interest: string;
  /** Si es true, el titular admite ?e=Empresa&s=sector&c=ciudad (outbound personalizado). */
  personalize?: boolean;
}

const seo = extras.find((e) => e.id === "seo")?.price ?? 99;

const steps: Item[] = [
  {
    title: "Nos cuentas",
    text: "Tu negocio y lo que quieres conseguir, en 2 minutos y sin compromiso.",
  },
  {
    title: "Propuesta clara",
    text: "Te respondemos personalmente con objetivos, plazos y precio cerrado.",
  },
  { title: "Lo hacemos", text: "Diseñamos, publicamos y te lo dejamos funcionando." },
];

export const landings: Landing[] = [
  {
    slug: "web-99",
    title: "Tu web profesional por 99 € + IVA",
    description: `Web a medida desde ${basePlan.price} € + IVA para autónomos y pymes: rápida, adaptada a móvil, con formulario, SEO básico y SSL. Precio cerrado.`,
    eyebrow: `Desde ${basePlan.price} € + IVA`,
    h1: "Una web a medida por 99 €. Sin plantillas ni letra pequeña",
    lead: "Diseñamos tu web con la personalidad de tu marca, rápida y perfecta en móvil. Precio cerrado desde el primer día y lista para aparecer en Google y en la IA.",
    bullets: [
      "Hasta 4 páginas: Inicio, Servicios, Nosotros y Contacto",
      "Diseño propio, nunca una plantilla",
      "SEO básico y certificado SSL incluidos",
      "Extras con precio visible: idiomas, tienda, reservas, blog",
    ],
    cta: "Quiero mi web",
    demo: "brand",
    offer: {
      label: "Web Esencial",
      price: `${basePlan.price} € + IVA`,
      note: "Pago único. Los extras se añaden solo si los necesitas.",
    },
    steps,
    faq: [
      {
        title: "¿Es de verdad por 99 €?",
        text: `Sí: la ${basePlan.name} cuesta ${basePlan.price} € ${basePlan.suffix}. Incluye hasta 4 páginas, formulario, SEO básico y SSL. Lo demás se presupuesta aparte, con precio cerrado.`,
      },
      {
        title: "¿Es una plantilla?",
        text: "No. Cada web se diseña desde cero con un proceso propio.",
      },
      {
        title: "¿Cuánto tardáis?",
        text: "Te lo decimos en la propuesta, con fechas concretas. Sin sorpresas.",
      },
    ],
    interest: "Web desde 99 €",
  },
  {
    slug: "seo-local",
    title: "Aparece en Google, Maps y ChatGPT",
    description: `SEO local y posicionamiento en IA desde ${seo} €/mes + IVA, sin permanencia. Que tus clientes te encuentren en Google, en Maps y en las respuestas de la IA.`,
    eyebrow: `SEO + GEO desde ${seo} €/mes`,
    h1: "Que te encuentren en Google, en Maps y en la respuesta de la IA",
    lead: "Tus clientes ya no solo buscan en Google: preguntan a ChatGPT, Gemini o Claude. Trabajamos tu ficha, tu web y tu contenido para que aparezcas en los dos sitios.",
    bullets: [
      "Ficha de Google Business Profile y reseñas",
      "Contenido y datos estructurados que entienden buscadores e IA",
      "Informe mensual claro: visibilidad, tráfico y contactos",
      "Sin permanencia",
    ],
    cta: "Quiero que me encuentren",
    demo: "geo",
    offer: {
      label: "SEO local + GEO",
      price: `desde ${seo} €/mes + IVA`,
      note: "Sin permanencia. Empezamos con una auditoría de cómo te ven hoy.",
    },
    steps: [
      { title: "Auditoría", text: "Medimos cómo te ven hoy Google y la IA." },
      { title: "Plan", text: "Prioridades por impacto, con precio claro." },
      { title: "Mejora continua", text: "Ficha, web, contenido y medición cada mes." },
    ],
    faq: [
      {
        title: "¿Garantizáis el primer puesto?",
        text: "No, y desconfía de quien lo haga. Garantizamos un trabajo medible, transparente y enfocado en que te encuentren más clientes.",
      },
      {
        title: "¿Cuánto tarda en notarse?",
        text: "Las mejoras técnicas y de ficha local, en semanas; un posicionamiento sólido, en meses.",
      },
      {
        title: "¿Qué es el GEO?",
        text: "Posicionar tu negocio en las respuestas de asistentes de IA como ChatGPT, Gemini o Claude.",
      },
    ],
    interest: "SEO y GEO",
  },
  {
    slug: "agentes-ia",
    title: "Un agente de IA que atiende a tus clientes 24/7",
    description:
      "Agentes de IA para pymes: atienden, cualifican y reservan por web, WhatsApp y email, en varios idiomas y con supervisión humana. Presupuesto a medida.",
    eyebrow: "Agentes de IA",
    h1: "Un agente de IA que atiende, cualifica y reserva por ti. 24/7",
    lead: "Entrenado con la información de tu negocio, responde al instante y en el idioma del cliente. Cuando hace falta una persona, avisa a tu equipo con todo el contexto.",
    bullets: [
      "Web, WhatsApp y email",
      "Español, catalán, inglés, alemán y más",
      "Conectado a tu agenda o CRM",
      "Supervisión humana y RGPD desde el diseño",
    ],
    cta: "Quiero un agente de IA",
    demo: "agent",
    offer: {
      label: "Agente de IA",
      price: "a medida",
      note: "Precio cerrado tras una llamada: depende de tareas, canales, integraciones e idiomas.",
    },
    steps: [
      { title: "Diagnóstico", text: "Qué conversaciones tiene sentido delegar." },
      { title: "Entrenamiento", text: "Con tu información validada y límites claros." },
      { title: "Integración", text: "Conectado a tus canales y herramientas." },
    ],
    faq: [
      {
        title: "¿Puede decir algo que no debe?",
        text: "Responde solo con información validada de tu negocio y deriva a una persona cuando no sabe.",
      },
      { title: "¿Sustituye a mi equipo?", text: "No: lo libera de lo repetitivo." },
      {
        title: "¿Cuánto cuesta?",
        text: "Se presupuesta a medida tras una llamada, con precio cerrado.",
      },
    ],
    interest: "Agentes de IA",
  },
  {
    slug: "mallorca",
    title: "Webs, SEO e IA para negocios de Mallorca",
    description: `Agencia de Palma de Mallorca desde 1997. Webs desde ${basePlan.price} € + IVA, SEO, posicionamiento en IA y agentes para negocios de Mallorca y Baleares.`,
    eyebrow: "Agencia en Palma desde 1997",
    h1: "Tu negocio en Mallorca, visible todo el año",
    lead: "Somos de aquí desde 1997. Webs en varios idiomas, SEO y posicionamiento en IA para llegar al cliente local y al visitante antes de que llegue la temporada.",
    bullets: [
      "Webs en español, catalán, inglés y alemán",
      "Google Maps y reservas directas",
      "Reunión en Palma o por videollamada",
      `Webs desde ${basePlan.price} € + IVA`,
    ],
    cta: "Hablemos de mi negocio",
    demo: "geo",
    offer: {
      label: "Web Esencial",
      price: `${basePlan.price} € + IVA`,
      note: "Más SEO local y GEO desde " + seo + " €/mes + IVA.",
    },
    steps,
    faq: [
      {
        title: "¿Dónde estáis?",
        text: "En el Paseo Mallorca, 16, Palma. Puedes venir a vernos o hacerlo todo por videollamada.",
      },
      {
        title: "¿Trabajáis con negocios con temporada?",
        text: "Sí: preparamos web, idiomas y ficha antes de la temporada para llegar a verano con ventaja.",
      },
      {
        title: "¿Cuánto cuesta una web?",
        text: `Desde ${basePlan.price} € + IVA, con extras a precio cerrado.`,
      },
    ],
    interest: "Web desde 99 €",
  },
  {
    slug: "tu-empresa",
    title: "Una propuesta pensada para tu empresa",
    description:
      "Propuesta de web, SEO e IA para tu empresa, preparada por COMA, agencia de Palma de Mallorca desde 1997.",
    eyebrow: "Propuesta para",
    h1: "Webs, SEO e IA para el negocio de tu sector",
    lead: "Hemos visto tu empresa y creemos que podemos ayudarte a que te encuentren más clientes. Te contamos cómo en una propuesta clara, con precio cerrado y sin compromiso.",
    bullets: [
      `Web a medida desde ${basePlan.price} € + IVA`,
      "SEO local y posicionamiento en ChatGPT, Gemini y Claude",
      "Agentes de IA y automatizaciones a medida",
      "Respuesta personal, sin compromiso",
    ],
    cta: "Quiero la propuesta",
    demo: "geo",
    offer: {
      label: "Web Esencial",
      price: `${basePlan.price} € + IVA`,
      note: "Más SEO, GEO e IA con precio claro.",
    },
    steps,
    faq: [
      {
        title: "¿Quiénes sois?",
        text: "COMA, Comunicación en Mallorca (Publicom Marketing 2000 SL): agencia en Palma desde 1997 que trabaja con pymes de toda España.",
      },
      {
        title: "¿Tiene algún coste hablar?",
        text: "No. Te respondemos con una propuesta clara y sin compromiso.",
      },
    ],
    interest: "Propuesta personalizada",
    personalize: true,
  },
];
