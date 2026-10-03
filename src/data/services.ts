export interface Item {
  title: string;
  text: string;
}

export interface Service {
  slug: string;
  short: string;
  label: string;
  tagline: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  tags: string[];
  deliverablesTitle: string;
  deliverables: Item[];
  forWhomTitle: string;
  forWhom: string[];
  steps: Item[];
  faq: Item[];
  ctaTitle: string;
}

export const services: Service[] = [
  {
    slug: "diseno-web",
    short: "Webs",
    label: "Diseño web",
    tagline: "Tu web profesional desde 99 €.",
    summary:
      "Webs rápidas, bonitas y pensadas para vender. Desde 99 € + IVA para autónomos y pymes, con extras a la carta.",
    seoTitle: "Diseño web desde 99 € para pymes y autónomos",
    seoDescription:
      "Diseño de páginas web profesionales desde 99 € + IVA para autónomos y pymes en Mallorca y toda España. Webs rápidas, adaptadas a móvil y preparadas para Google y la IA.",
    eyebrow: "Diseño web · Desde 99 € + IVA",
    h1: "Webs que enamoran a tus clientes. Desde 99 €",
    lead: "Diseñamos webs rápidas, bonitas y pensadas para convertir visitas en clientes. Precio cerrado y muy competitivo para que tú te dediques a tu negocio y nosotros a que se vea.",
    tags: [
      "Webs corporativas",
      "Landing pages",
      "Tiendas online",
      "Multiidioma",
      "Blog",
      "Mantenimiento",
    ],
    deliverablesTitle: "Todo lo que necesita una web que vende",
    deliverables: [
      {
        title: "Diseño a medida",
        text: "Nada de plantillas genéricas: una web con la personalidad de tu marca, pensada para tu cliente.",
      },
      {
        title: "Rápida y perfecta en móvil",
        text: "Carga al instante y se ve impecable en cualquier pantalla. Tus clientes y Google lo notan.",
      },
      {
        title: "Preparada para Google y la IA",
        text: "Estructura, textos y datos listos para aparecer en buscadores y en asistentes como ChatGPT.",
      },
      {
        title: "Pensada para convertir",
        text: "Llamadas a la acción claras, formularios sencillos y contacto a un clic desde cualquier página.",
      },
      {
        title: "Tienda online y reservas",
        text: "Vende o recibe reservas online con pago integrado y una gestión sencilla.",
      },
      {
        title: "Alojamiento, correo y mantenimiento",
        text: "Nos ocupamos del hosting, el correo corporativo, las copias de seguridad y las actualizaciones.",
      },
    ],
    forWhomTitle: "Ideal si…",
    forWhom: [
      "Aún no tienes web o la tuya ya no te representa",
      "Tu web no aparece en Google ni te trae clientes",
      "Necesitas algo profesional, rápido y a buen precio",
      "Quieres una web que crezca contigo: idiomas, blog, tienda, IA…",
    ],
    steps: [
      {
        title: "Nos cuentas",
        text: "Tu negocio, tus clientes y lo que quieres conseguir. Sin tecnicismos.",
      },
      {
        title: "Diseñamos",
        text: "Te enseñamos la propuesta y la ajustamos contigo hasta que te encante.",
      },
      {
        title: "Publicamos",
        text: "Tu web online, con certificado SSL y lista para recibir contactos.",
      },
      {
        title: "Creces",
        text: "Añade extras cuando los necesites: idiomas, blog, tienda, agentes de IA…",
      },
    ],
    faq: [
      {
        title: "¿Qué incluye la web de 99 €?",
        text: "Una web profesional de una página con diseño adaptado a tu marca, versión móvil, formulario de contacto, SEO básico y publicación con SSL. Si necesitas más páginas, idiomas, blog o tienda, los añades como extras con presupuesto cerrado.",
      },
      {
        title: "¿El dominio, el alojamiento y el correo están incluidos?",
        text: "Son extras opcionales. Si ya los tienes, usamos los tuyos; si no, te lo dejamos todo funcionando con alojamiento mensual y correo corporativo.",
      },
      {
        title: "¿Podéis rediseñar mi web actual?",
        text: "Sí. Analizamos tu web, mantenemos lo que funciona y la convertimos en una web moderna, rápida y preparada para captar clientes.",
      },
      {
        title: "¿Trabajáis fuera de Mallorca?",
        text: "Sí. Nacimos en Mallorca y desde 2025 trabajamos con empresas de toda España, en remoto y con la misma cercanía.",
      },
    ],
    ctaTitle: "¿Empezamos tu web por 99 €?",
  },
  {
    slug: "seo-geo",
    short: "SEO y GEO",
    label: "SEO y posicionamiento en IA",
    tagline: "Que te encuentren. En Google y en ChatGPT.",
    summary:
      "Posicionamos tu pyme en Google, Google Maps y en motores de IA como ChatGPT, Gemini o Perplexity.",
    seoTitle: "SEO y GEO: posiciona tu pyme en Google y en la IA",
    seoDescription:
      "Posicionamiento SEO local y GEO (Generative Engine Optimization) para pymes: aparece en Google, Google Maps y en las respuestas de ChatGPT, Gemini y Perplexity.",
    eyebrow: "SEO local + GEO (posicionamiento en IA)",
    h1: "Que te encuentren en Google… y en la respuesta de la IA",
    lead: "Tus clientes ya no solo buscan en Google: preguntan a ChatGPT, Gemini o Perplexity. Optimizamos tu web, tu ficha y tu contenido para que tu empresa aparezca en los dos sitios.",
    tags: ["SEO local", "Google Maps", "GEO", "ChatGPT", "Contenido", "Datos estructurados"],
    deliverablesTitle: "Visibilidad donde tus clientes preguntan",
    deliverables: [
      {
        title: "Auditoría SEO y GEO",
        text: "Analizamos cómo te ven hoy Google y los asistentes de IA, y qué te falta para aparecer.",
      },
      {
        title: "SEO local y Google Maps",
        text: "Optimizamos tu ficha de Google Business Profile, tus reseñas y tu presencia en tu zona.",
      },
      {
        title: "Posicionamiento en IA (GEO)",
        text: "Estructuramos tu información para que ChatGPT, Gemini o Perplexity entiendan tu negocio y lo citen.",
      },
      {
        title: "Datos estructurados",
        text: "Schema.org, preguntas frecuentes y señales técnicas que buscadores e IA leen al instante.",
      },
      {
        title: "Contenido que posiciona",
        text: "Páginas de servicio, artículos y FAQs escritos para responder lo que tus clientes preguntan.",
      },
      {
        title: "Medición clara",
        text: "Informes sencillos de visibilidad, tráfico y contactos. Sabes qué funciona y qué no.",
      },
    ],
    forWhomTitle: "Ideal si…",
    forWhom: [
      "Tu competencia aparece en Google y tú no",
      "Quieres que la IA recomiende tu negocio",
      "Dependes del boca a boca y necesitas clientes nuevos",
      "Tienes web, pero no te trae contactos",
    ],
    steps: [
      {
        title: "Auditoría",
        text: "Medimos tu visibilidad actual en Google, Maps y asistentes de IA.",
      },
      {
        title: "Estrategia",
        text: "Palabras clave, preguntas de tus clientes y prioridades por impacto.",
      },
      {
        title: "Optimización",
        text: "Web, ficha, contenido y datos estructurados, de forma continua.",
      },
      { title: "Seguimiento", text: "Informes mensuales claros y ajustes según resultados." },
    ],
    faq: [
      {
        title: "¿Qué es el GEO?",
        text: "Generative Engine Optimization: optimizar tu presencia para que los motores de IA generativa (ChatGPT, Gemini, Perplexity, Copilot…) entiendan tu negocio y lo mencionen en sus respuestas.",
      },
      {
        title: "¿Cuánto tarda el SEO en dar resultados?",
        text: "Las mejoras técnicas y locales se notan en semanas; el posicionamiento sólido se construye en meses. Te mostramos la evolución desde el primer informe.",
      },
      {
        title: "¿Me garantizáis el primer puesto?",
        text: "Nadie serio puede garantizarlo: Google y la IA deciden. Lo que sí te damos es un trabajo medible, transparente y enfocado a que te encuentren más clientes.",
      },
    ],
    ctaTitle: "¿Hacemos que te encuentren?",
  },
  {
    slug: "agentes-ia",
    short: "Agentes de IA",
    label: "Agentes de IA",
    tagline: "Tu mejor empleado no duerme.",
    summary:
      "Asistentes inteligentes entrenados con tu negocio que atienden clientes, cualifican oportunidades y reservan, 24/7 y en varios idiomas.",
    seoTitle: "Agentes de IA para empresas en Mallorca",
    seoDescription:
      "Diseñamos agentes de inteligencia artificial para atención al cliente, ventas y reservas en web, WhatsApp y email. Multidioma, integrados con tus herramientas y con supervisión humana.",
    eyebrow: "Agentes de inteligencia artificial",
    h1: "Agentes de IA que atienden, venden y reservan 24/7",
    lead: "Diseñamos asistentes inteligentes entrenados con la información de tu negocio. Responden a tus clientes en la web, WhatsApp o email, cualifican oportunidades y pasan el testigo a tu equipo cuando hace falta.",
    tags: ["Atención al cliente", "Ventas", "Reservas", "WhatsApp", "Multidioma", "Integraciones"],
    deliverablesTitle: "Un agente para cada parte de tu negocio",
    deliverables: [
      {
        title: "Atención al cliente",
        text: "Resuelve dudas frecuentes, horarios, precios o disponibilidad en segundos y en el idioma del cliente: español, catalán, inglés, alemán…",
      },
      {
        title: "Captación y ventas",
        text: "Cualifica a cada contacto, propone una cita y envía la oportunidad a tu CRM con todo el contexto de la conversación.",
      },
      {
        title: "Reservas y citas",
        text: "Gestiona solicitudes de reserva y consultas para hoteles, restaurantes, clínicas, academias o servicios profesionales.",
      },
      {
        title: "Asistente interno",
        text: "Un agente para tu equipo que conoce tus procedimientos, catálogos y documentación. Menos preguntas repetidas, más autonomía.",
      },
      {
        title: "Integraciones",
        text: "Web, WhatsApp, email, Google Workspace, Microsoft 365, CRM y las herramientas que ya usas cada día.",
      },
      {
        title: "Supervisión y mejora continua",
        text: "Revisamos conversaciones, ajustamos respuestas y medimos qué resuelve el agente y qué deriva a tu equipo.",
      },
    ],
    forWhomTitle: "Ideal si…",
    forWhom: [
      "Respondes las mismas preguntas decenas de veces al día",
      "Pierdes clientes fuera de horario o en temporada alta",
      "Atiendes a clientes internacionales en varios idiomas",
      "Tu equipo dedica horas a tareas que no aportan valor",
    ],
    steps: [
      {
        title: "Diagnóstico",
        text: "Detectamos qué conversaciones y tareas tiene sentido delegar en un agente.",
      },
      {
        title: "Entrenamiento",
        text: "Lo alimentamos con tu información validada y definimos sus límites.",
      },
      {
        title: "Integración",
        text: "Lo conectamos a tus canales y herramientas, y lo probamos con casos reales.",
      },
      { title: "Supervisión", text: "Medimos, revisamos y mejoramos el agente de forma continua." },
    ],
    faq: [
      {
        title: "¿La IA puede decir algo que no debe?",
        text: "Definimos límites claros: el agente responde solo con información validada de tu negocio y deriva a una persona cuando no sabe la respuesta o cuando el cliente lo pide.",
      },
      {
        title: "¿Qué pasa con la protección de datos?",
        text: "Diseñamos cada agente pensando en el RGPD: recogemos solo los datos necesarios, informamos al usuario de que habla con una IA y trabajamos con proveedores con garantías adecuadas.",
      },
      {
        title: "¿Necesito conocimientos técnicos?",
        text: "No. Nosotros lo diseñamos, lo conectamos y lo mantenemos. Tú nos das la información de tu negocio y validas cómo responde.",
      },
      {
        title: "¿Sustituye a mi equipo?",
        text: "No: lo libera. El agente se ocupa de lo repetitivo y tu equipo de lo que necesita criterio, cercanía y experiencia.",
      },
    ],
    ctaTitle: "¿Ponemos un agente de IA a trabajar para ti?",
  },
  {
    slug: "automatizaciones",
    short: "Automatizaciones",
    label: "Automatizaciones",
    tagline: "Lo repetitivo, que lo haga otro.",
    summary:
      "Conectamos tus herramientas para que leads, facturas, emails e informes fluyan solos. Menos tareas manuales, cero olvidos.",
    seoTitle: "Automatización de procesos para pymes en Mallorca",
    seoDescription:
      "Automatizamos captación, CRM, email, facturación e informes conectando tus herramientas con Make, n8n, Zapier o APIs. Procesos más rápidos y sin errores para pymes.",
    eyebrow: "Automatización de procesos",
    h1: "Automatiza lo repetitivo. Dedica tu tiempo a lo que importa",
    lead: "Conectamos tus herramientas para que los datos fluyan solos: formularios, CRM, facturas, emails, informes. Menos tareas manuales, menos errores y procesos que crecen contigo.",
    tags: [
      "CRM",
      "Email marketing",
      "Facturación",
      "Informes",
      "IA aplicada",
      "Make · n8n · Zapier",
    ],
    deliverablesTitle: "Procesos que trabajan mientras tú no miras",
    deliverables: [
      {
        title: "Captación y CRM",
        text: "Cada contacto que llega desde la web, redes o anuncios entra en tu CRM, se clasifica y recibe respuesta al momento.",
      },
      {
        title: "Email y seguimiento",
        text: "Secuencias automáticas de bienvenida, recordatorios, presupuestos pendientes y reactivación de clientes.",
      },
      {
        title: "Administración y facturas",
        text: "Generación y envío de facturas, avisos de cobro y registro de gastos sin pasar datos a mano.",
      },
      {
        title: "Informes y cuadros de mando",
        text: "Ventas, marketing y operaciones en un panel que se actualiza solo. Decisiones con datos, no con intuición.",
      },
      {
        title: "Flujos con IA",
        text: "Clasificación de emails, resúmenes de documentos, extracción de datos de PDFs y respuestas sugeridas.",
      },
      {
        title: "Integraciones a medida",
        text: "Make, n8n, Zapier o APIs propias: elegimos la herramienta adecuada para tu caso, no la de moda.",
      },
    ],
    forWhomTitle: "Ideal si…",
    forWhom: [
      "Copias y pegas datos entre programas cada semana",
      "Se te escapan leads o presupuestos sin seguimiento",
      "Preparar informes te roba horas cada mes",
      "Quieres crecer sin multiplicar el trabajo administrativo",
    ],
    steps: [
      {
        title: "Mapa de procesos",
        text: "Identificamos las tareas que más tiempo consumen y su coste real.",
      },
      {
        title: "Diseño",
        text: "Proponemos el flujo, las herramientas y el ahorro estimado antes de empezar.",
      },
      {
        title: "Implantación",
        text: "Construimos, probamos con datos reales y formamos a tu equipo.",
      },
      {
        title: "Monitorización",
        text: "Alertas si algo falla y mejoras a medida que tu negocio cambia.",
      },
    ],
    faq: [
      {
        title: "¿Qué herramientas usáis?",
        text: "Trabajamos con plataformas como Make, n8n o Zapier y con las APIs de tus programas (CRM, facturación, email, Google Workspace, Microsoft 365…). Elegimos según tu caso, tu presupuesto y lo que ya tienes.",
      },
      {
        title: "¿Cuánto tiempo puedo ahorrar?",
        text: "Depende del proceso. En el mapa inicial identificamos las tareas que más horas consumen y estimamos el ahorro antes de empezar, para que decidas con números.",
      },
      {
        title: "¿Y si algo deja de funcionar?",
        text: "Monitorizamos los flujos y recibimos alertas ante cualquier error. Además, documentamos cada automatización para que nunca dependa de una caja negra.",
      },
    ],
    ctaTitle: "¿Qué tarea te gustaría no volver a hacer nunca?",
  },
  {
    slug: "notoriedad-de-marca",
    short: "Notoriedad",
    label: "Notoriedad y medios",
    tagline: "Que piensen en ti primero.",
    summary:
      "Branding, prensa, radio, redes y publicidad para que tu empresa sea la referencia de su sector en Mallorca.",
    seoTitle: "Notoriedad de marca y comunicación en Mallorca",
    seoDescription:
      "Branding, gabinete de prensa, campañas en radio y prensa, redes sociales y publicidad digital para empresas de Mallorca. Comunicación desde 1997: revistas, radio, televisión y digital.",
    eyebrow: "Notoriedad de empresa",
    h1: "Que tu empresa sea la primera que les venga a la cabeza",
    lead: "Desde 1997 hemos hecho revistas, radio, programas de televisión, campañas y, hoy, todo lo digital. Construimos marcas reconocibles y conseguimos que se hable de ellas.",
    tags: ["Branding", "Prensa", "Radio", "Redes sociales", "Publicidad digital", "Contenido"],
    deliverablesTitle: "Todo lo que hace que una marca se recuerde",
    deliverables: [
      {
        title: "Estrategia y posicionamiento",
        text: "Definimos qué te hace distinto, a quién le hablas y con qué tono. La base sobre la que se apoya todo lo demás.",
      },
      {
        title: "Identidad visual y branding",
        text: "Logotipo, sistema visual, tipografías y aplicaciones. Una marca coherente en cada punto de contacto.",
      },
      {
        title: "Gabinete de prensa",
        text: "Notas de prensa, entrevistas y relación con medios locales y sectoriales de Baleares para que tu historia se publique.",
      },
      {
        title: "Revistas, radio y televisión",
        text: "Hemos editado revistas y producido programas de radio y televisión. Planificamos y creamos campañas en medios con el foco en resultados.",
      },
      {
        title: "Redes sociales y contenido",
        text: "Calendario editorial, diseño, vídeo corto y community management con criterio de marca, no de relleno.",
      },
      {
        title: "Publicidad digital",
        text: "Campañas en Google y Meta con segmentación local, medición real y optimización continua de la inversión.",
      },
    ],
    forWhomTitle: "Ideal si…",
    forWhom: [
      "Tu empresa hace un gran trabajo, pero poca gente lo sabe",
      "Vas a lanzar un producto, abrir local o relanzar tu marca",
      "Compites por visibilidad en temporada alta",
      "Quieres que los medios y tu sector te vean como referente",
    ],
    steps: [
      {
        title: "Auditoría",
        text: "Analizamos tu marca, tu competencia y cómo te percibe hoy tu público.",
      },
      {
        title: "Plan",
        text: "Mensajes, canales, calendario y presupuesto. Todo por escrito y medible.",
      },
      {
        title: "Producción",
        text: "Creatividad, piezas, notas de prensa y campañas listas para salir.",
      },
      { title: "Difusión y medición", text: "Lanzamos, medimos impacto y ajustamos cada mes." },
    ],
    faq: [
      {
        title: "¿Trabajáis con medios tradicionales además de digitales?",
        text: "Sí. Nuestro origen está en la publicidad, la radio y la prensa. Combinamos medios tradicionales y digitales según dónde esté de verdad tu público.",
      },
      {
        title: "¿Cuánto tarda en notarse una estrategia de notoriedad?",
        text: "Las primeras acciones (prensa, campañas, contenido) generan impacto en semanas. La notoriedad sólida se construye con constancia durante meses, y te mostramos el avance con métricas desde el primer mes.",
      },
      {
        title: "¿Tengo que cambiar mi logotipo?",
        text: "No necesariamente. Primero auditamos tu marca: si funciona, la reforzamos. Solo proponemos un rediseño cuando de verdad suma.",
      },
    ],
    ctaTitle: "¿Hacemos que se hable de tu empresa?",
  },
];

export const getService = (slug: string) => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Servicio desconocido: ${slug}`);
  return s;
};
