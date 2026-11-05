import { basePlan, extras } from "./pricing";
import { site, years } from "./site";
import type { Item } from "./services";

export interface GuideSection {
  h2: string;
  paragraphs: string[];
  list?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  h1: string;
  description: string;
  published: string;
  modified: string;
  readMin: number;
  intro: string;
  sections: GuideSection[];
  faq: Item[];
  cta: { label: string; href: string };
  related: string[];
}

const price = (id: string) => extras.find((e) => e.id === id)?.price ?? 0;

export const guides: Guide[] = [
  {
    slug: "cuanto-cuesta-una-pagina-web",
    title: "Cuánto cuesta una página web para una pyme en 2026",
    h1: "Cuánto cuesta una página web en 2026 (y qué estás pagando)",
    description: `Guía clara de lo que cuesta una web para autónomos y pymes: qué incluye el precio, qué extras suman y cómo comparar presupuestos. Desde ${basePlan.price} € + IVA.`,
    published: "2026-10-05",
    modified: "2026-10-05",
    readMin: 6,
    intro: `La pregunta «¿cuánto cuesta una web?» suele recibir respuestas que no sirven: «depende». Aquí te explicamos de qué depende realmente, con nuestros precios a la vista, para que puedas comparar cualquier presupuesto con criterio. Llevamos ${years()} años comunicando empresas y hemos visto de todo.`,
    sections: [
      {
        h2: "El precio de una web se compone de cinco cosas",
        paragraphs: [
          "Casi todo presupuesto se reduce a estas piezas. Si un presupuesto no las separa, es difícil saber qué estás comprando.",
        ],
        list: [
          "Diseño: cómo se ve y cómo se organiza. Un diseño propio cuesta más que adaptar una plantilla, pero es lo que te diferencia.",
          "Desarrollo: que cargue rápido, funcione en móvil y se pueda mantener.",
          "Contenido: textos, fotos y vídeo. Si no los aportas tú, hay que crearlos.",
          "Funciones: formulario, reservas, tienda online, idiomas, blog.",
          "Servicios continuos: alojamiento, correo, copias de seguridad, actualizaciones y SEO.",
        ],
      },
      {
        h2: `Cuánto cuesta con nosotros: desde ${basePlan.price} € + IVA`,
        paragraphs: [
          `Nuestra ${basePlan.name} cuesta ${basePlan.price} € ${basePlan.suffix}. Incluye: ${basePlan.includes.join("; ")}.`,
          "Es el mismo precio en toda España y no hay letra pequeña: lo que no está incluido se presupuesta aparte, con precio cerrado y a la vista en nuestro presupuesto en directo.",
        ],
      },
      {
        h2: "Qué extras suelen hacer falta",
        paragraphs: [
          "Una web de presentación (Inicio, Servicios, Nosotros y Contacto) cubre a muchos autónomos. Estos son los extras más habituales y su precio actual:",
        ],
        list: [
          `Multiidioma: ${price("idiomas")} € por idioma (pago único).`,
          `Tienda online (hasta 50 productos): ${price("tienda")} €.`,
          `Reservas o citas online: ${price("reservas")} €.`,
          `Blog con primeros artículos: ${price("blog")} €.`,
          `Contenido propio (textos y fotos): ${price("contenido")} €.`,
          `Alojamiento y mantenimiento: ${price("alojamiento")} €/mes.`,
          `Correo con tu dominio, 50 GB por buzón: ${price("correo")} €/año por buzón.`,
          `SEO local: ${price("seo")} €/mes; posicionamiento en IA (GEO): ${price("geo")} €/mes.`,
        ],
      },
      {
        h2: "Cómo comparar presupuestos sin que te líen",
        paragraphs: ["Pide siempre lo mismo a todos los proveedores y mira cinco cosas:"],
        list: [
          "¿El diseño es propio o una plantilla? Pregunta cuántas webs idénticas existen.",
          "¿Qué pasa con el dominio y el contenido? Deben ser tuyos si te vas.",
          "¿Hay cuotas mensuales y qué incluyen exactamente?",
          "¿Está incluido el SEO básico (títulos, descripciones, velocidad, datos estructurados)?",
          "¿Quién te atiende cuando algo falla y en cuánto tiempo?",
        ],
      },
      {
        h2: "Por qué podemos cobrar tan poco",
        paragraphs: [
          "No usamos plantillas ni intermediarios: tenemos un proceso propio que abarata costes sin recortar en lo que importa. Preferimos que autónomos y pymes dejen de ver la web como un gasto y se dediquen a lo suyo.",
        ],
      },
    ],
    faq: [
      {
        title: "¿El precio incluye IVA?",
        text: `No: los precios que publicamos son ${basePlan.suffix}. La Web Esencial son ${basePlan.price} € más IVA.`,
      },
      {
        title: "¿Puedo empezar con una web sencilla y ampliarla después?",
        text: "Sí. Es la forma más inteligente: empiezas con lo esencial y añades tienda, reservas, idiomas o SEO cuando tu negocio lo pida.",
      },
      {
        title: "¿La web es mía?",
        text: "Sí. El dominio y los contenidos son tuyos; te lo dejamos por escrito.",
      },
    ],
    cta: { label: "Monta tu presupuesto en directo", href: "/precios/" },
    related: ["web-a-medida-o-plantilla", "checklist-web-que-google-y-la-ia-entienden"],
  },
  {
    slug: "que-es-geo-aparecer-en-chatgpt-gemini-claude",
    title: "Qué es el GEO y cómo aparecer en ChatGPT, Gemini y Claude",
    h1: "GEO: cómo conseguir que ChatGPT, Gemini y Claude recomienden tu negocio",
    description:
      "Qué es el GEO (Generative Engine Optimization), en qué se diferencia del SEO y qué puedes hacer hoy para que los asistentes de IA citen tu empresa. Guía práctica para pymes.",
    published: "2026-10-05",
    modified: "2026-10-05",
    readMin: 7,
    intro:
      "Cada vez más personas preguntan a un asistente de IA «¿cuál es el mejor dentista de Palma?» o «¿qué agencia me hace una web barata?» antes de abrir Google. Si el asistente no sabe que existes, no te recomienda. Eso es lo que se trabaja con el GEO.",
    sections: [
      {
        h2: "GEO en una frase",
        paragraphs: [
          "GEO (Generative Engine Optimization) es preparar tu presencia en internet para que los motores de IA generativa —ChatGPT, Gemini, Claude, Copilot, Perplexity— entiendan quién eres, qué haces, dónde y para quién, y te mencionen en sus respuestas.",
          "No sustituye al SEO: lo complementa. De hecho, muchos asistentes consultan buscadores y páginas web para responder, así que lo que mejora tu SEO suele ayudar también a tu GEO.",
        ],
      },
      {
        h2: "Qué miran los asistentes de IA",
        paragraphs: [
          "Nadie fuera de las plataformas conoce la fórmula exacta y cambia con frecuencia, pero la experiencia y la lógica apuntan a estas señales:",
        ],
        list: [
          "Claridad: una web que diga con palabras sencillas qué haces, para quién, dónde y a qué precio.",
          "Estructura: títulos, preguntas frecuentes y datos estructurados (schema.org) que una máquina lee sin ambigüedad.",
          "Consistencia: tu nombre, dirección y datos iguales en tu web, tu ficha de Google y los directorios.",
          "Reputación: reseñas reales y menciones en otros sitios fiables.",
          "Actualidad: información al día, con precios, horarios y servicios correctos.",
        ],
      },
      {
        h2: "Qué puedes hacer esta semana",
        paragraphs: ["Sin gastar nada, ya puedes avanzar:"],
        list: [
          "Escribe en tu web una página por servicio, con precio orientativo y preguntas frecuentes reales.",
          "Completa tu ficha de Google Business Profile y pide reseñas a tus clientes satisfechos.",
          "Revisa que robots.txt no bloquee a los rastreadores de IA que quieras permitir.",
          "Añade datos estructurados de organización, servicios y preguntas frecuentes.",
          "Publica un archivo /llms.txt con un resumen de tu empresa para modelos de lenguaje.",
        ],
      },
      {
        h2: "Sobre llms.txt: útil, pero sin milagros",
        paragraphs: [
          "El archivo llms.txt es una propuesta abierta para dar a los modelos un resumen limpio de tu web. Nosotros lo publicamos porque cuesta poco y no hace daño, pero no conviene venderlo como garantía: ninguna plataforma ha prometido usarlo. Lo que más pesa sigue siendo tener contenido claro, fuentes externas fiables y buenas reseñas.",
        ],
      },
      {
        h2: "Cómo medir si funciona",
        paragraphs: [
          "Pregunta a diferentes asistentes lo que preguntaría tu cliente, por ejemplo «mejor [tu sector] en [tu ciudad]», y anota si apareces, cómo te describen y qué fuentes citan. Repítelo cada mes. Es lo que hacemos en nuestro servicio de SEO y GEO: medimos y ajustamos.",
        ],
      },
    ],
    faq: [
      {
        title: "¿El GEO sustituye al SEO?",
        text: "No. Son complementarios: el SEO sigue trayendo mucho tráfico y las buenas prácticas de SEO también ayudan a que la IA te entienda.",
      },
      {
        title: "¿Puedo garantizar que ChatGPT me recomiende?",
        text: "No, y desconfía de quien lo prometa. Se puede mejorar la probabilidad con información clara, consistente y bien respaldada, y medir cómo evoluciona.",
      },
      {
        title: "¿Cuánto cuesta trabajar el GEO?",
        text: `En COMA, el posicionamiento en IA (GEO) cuesta ${price("geo")} €/mes + IVA, sin permanencia.`,
      },
    ],
    cta: { label: "Ver servicio de SEO y GEO", href: "/seo-geo/" },
    related: ["checklist-web-que-google-y-la-ia-entienden", "seo-local-google-maps-checklist"],
  },
  {
    slug: "seo-local-google-maps-checklist",
    title: "SEO local y Google Maps: checklist para aparecer cerca de ti",
    h1: "SEO local y Google Maps: la checklist que usamos con pymes",
    description:
      "Checklist paso a paso para mejorar tu ficha de Google Business Profile, tus reseñas y tu web local y aparecer en Google Maps cuando tus clientes buscan «cerca de mí».",
    published: "2026-10-05",
    modified: "2026-10-05",
    readMin: 6,
    intro:
      "Cuando alguien busca «clínica dental cerca de mí» o «restaurante abierto ahora», Google Maps decide quién recibe la llamada. Aquí tienes los pasos que seguimos con farmacias, clínicas, restaurantes y despachos.",
    sections: [
      {
        h2: "1. Tu ficha de Google Business Profile",
        paragraphs: [
          "Es la base. Una ficha incompleta pierde contra una completa, aunque tu negocio sea mejor.",
        ],
        list: [
          "Nombre real del negocio, sin añadir palabras clave artificiales (Google puede sancionarlo).",
          "Categoría principal exacta y categorías secundarias relevantes.",
          "Dirección, teléfono, web y horarios correctos, incluidos festivos.",
          "Servicios y productos con descripción y, si procede, precio.",
          "Fotos propias y recientes: fachada, interior, equipo, trabajos.",
        ],
      },
      {
        h2: "2. Reseñas: cantidad, calidad y respuesta",
        paragraphs: [
          "Pide reseñas a clientes satisfechos en el momento justo (al entregar el servicio) y con un enlace directo. Responde a todas, también a las malas, con calma y datos. Nunca compres ni inventes reseñas: es contrario a las normas de Google y daña tu reputación.",
        ],
      },
      {
        h2: "3. Coherencia de datos (NAP)",
        paragraphs: [
          "Nombre, dirección y teléfono deben ser idénticos en tu web, en tu ficha, en redes y en directorios. Las diferencias pequeñas («Pº» frente a «Paseo») confunden a buscadores e IA.",
        ],
      },
      {
        h2: "4. Una web que apoye a la ficha",
        paragraphs: [
          "Tu web debe decir lo mismo que tu ficha y tener páginas por servicio y por zona, con textos útiles. Añade datos estructurados de LocalBusiness y un mapa. Una web rápida en móvil pesa mucho: la mayoría de las búsquedas locales se hacen desde el teléfono.",
        ],
      },
      {
        h2: "5. Mantenimiento mensual",
        paragraphs: ["El SEO local no se «termina»:"],
        list: [
          "Publica novedades u ofertas en la ficha cada mes.",
          "Actualiza fotos y horarios en cuanto cambien.",
          "Responde preguntas y reseñas nuevas.",
          "Revisa en qué búsquedas apareces y cuántas llamadas recibes.",
        ],
      },
    ],
    faq: [
      {
        title: "¿Cuánto tarda en notarse el SEO local?",
        text: "Los cambios en la ficha se suelen notar en semanas; subir posiciones con constancia lleva meses y depende de tu competencia.",
      },
      {
        title: "¿Necesito web si ya tengo ficha de Google?",
        text: "Sí: la web da credibilidad, recoge contactos y alimenta tanto el SEO como los asistentes de IA.",
      },
    ],
    cta: { label: "Ver servicio de SEO local", href: "/seo-geo/" },
    related: [
      "que-es-geo-aparecer-en-chatgpt-gemini-claude",
      "marketing-digital-mallorca-negocios-con-temporada",
    ],
  },
  {
    slug: "web-a-medida-o-plantilla",
    title: "Web a medida o plantilla: qué te conviene de verdad",
    h1: "Web a medida o plantilla: qué te conviene (sin humo)",
    description:
      "Diferencias reales entre una web a medida y una plantilla: velocidad, SEO, diferenciación y coste. Cuándo vale la pena cada una y cómo hacemos webs a medida desde 99 €.",
    published: "2026-10-05",
    modified: "2026-10-05",
    readMin: 5,
    intro:
      "«A medida» y «plantilla» se usan como etiquetas de marketing. Esto es lo que cambia en la práctica, con ventajas y desventajas de cada una.",
    sections: [
      {
        h2: "Qué es una plantilla",
        paragraphs: [
          "Un diseño prefabricado que se rellena con tus textos y fotos. Es rápido de montar y barato. Su problema: lo usan miles de webs más, suele cargar más código del que necesita y cuesta personalizarlo sin romperlo.",
        ],
      },
      {
        h2: "Qué es una web a medida",
        paragraphs: [
          "Un diseño y un código pensados para tu negocio. Solo lleva lo necesario, así que carga más rápido, y la estructura se decide para tu cliente y para el SEO, no al revés.",
        ],
      },
      {
        h2: "Comparativa honesta",
        paragraphs: [],
        list: [
          "Velocidad: a medida gana casi siempre, porque no arrastra funciones que no usas.",
          "Diferenciación: a medida; con plantilla, tu competencia puede parecerse mucho a ti.",
          "Coste inicial: la plantilla suele ser más barata… salvo que el proveedor trabaje con un proceso propio y eficiente.",
          "Control del SEO: a medida; la estructura y los datos estructurados se ajustan a lo que necesitas.",
          "Plazo de salida: la plantilla puede ser más rápida si no hay que diseñar nada.",
        ],
      },
      {
        h2: "Cuándo una plantilla es suficiente",
        paragraphs: [
          "Si necesitas validar una idea rápido, no tienes marca todavía y el presupuesto es mínimo, una plantilla puede servir como paso inicial. Cuando tu negocio despegue, conviene pasar a una web propia.",
        ],
      },
      {
        h2: "Cómo hacemos webs a medida desde 99 €",
        paragraphs: [
          `Con un proceso propio y un alcance claro: una web de hasta 4 páginas, perfecta en móvil, con formulario, SEO básico y SSL por ${basePlan.price} € ${basePlan.suffix}. Lo demás (tienda, reservas, idiomas) lo añades solo si lo necesitas.`,
        ],
      },
    ],
    faq: [
      {
        title: "¿Una web a medida es más cara de mantener?",
        text: "No necesariamente. Al ser más ligera y simple suele dar menos problemas. Nosotros ofrecemos alojamiento y mantenimiento desde 9 €/mes.",
      },
      {
        title: "¿Puedo editar los textos yo mismo?",
        text: "Podemos dejarte la web preparada para que modifiques lo básico, o encargarnos nosotros de los cambios. Lo hablamos al empezar.",
      },
    ],
    cta: { label: "Calcula tu web", href: "/precios/" },
    related: ["cuanto-cuesta-una-pagina-web", "checklist-web-que-google-y-la-ia-entienden"],
  },
  {
    slug: "agentes-ia-para-pymes",
    title: "Agentes de IA para pymes: qué hacen, qué no y cuánto cuestan",
    h1: "Agentes de IA para pymes: casos reales, límites y presupuesto",
    description:
      "Qué es un agente de IA, en qué tareas ayuda a una pyme (atención, reservas, captación), qué límites debe tener y de qué depende su precio. Guía práctica y sin humo.",
    published: "2026-10-05",
    modified: "2026-10-05",
    readMin: 6,
    intro:
      "Un agente de IA es un asistente que atiende a tus clientes por web, WhatsApp o email usando la información de tu negocio. Bien diseñado, libera horas a tu equipo; mal diseñado, da respuestas inventadas. Así lo planteamos.",
    sections: [
      {
        h2: "En qué tareas ayuda",
        paragraphs: [],
        list: [
          "Atención al cliente: horarios, precios, disponibilidad, cómo llegar, políticas.",
          "Reservas y citas: recoge datos, propone horas y avisa a tu equipo.",
          "Captación: cualifica contactos y los envía a tu CRM con contexto.",
          "Multidioma: responde en el idioma del cliente (español, catalán, inglés, alemán…).",
          "Asistente interno: responde dudas del equipo sobre procedimientos y catálogo.",
        ],
      },
      {
        h2: "Qué límites debe tener",
        paragraphs: [
          "Un agente fiable responde solo con información que tú has validado y deriva a una persona cuando no sabe o cuando el cliente lo pide. Debe informar de que el cliente habla con una IA y recoger solo los datos estrictamente necesarios, en línea con el RGPD y con la normativa europea de IA.",
        ],
      },
      {
        h2: "De qué depende el precio",
        paragraphs: ["No hay tarifa única porque cada negocio es distinto. Depende de:"],
        list: [
          "Las tareas que atiende (dudas, citas, ventas, soporte).",
          "Los canales: web, WhatsApp, teléfono, email.",
          "Las integraciones con agenda, CRM o tienda.",
          "Los idiomas y el volumen de conversaciones.",
        ],
      },
      {
        h2: "Cómo empezar sin riesgo",
        paragraphs: [
          "Empieza por una tarea concreta y repetitiva (por ejemplo, las 10 preguntas más frecuentes), mide cuántas resuelve el agente y cuántas deriva, y amplía a partir de ahí. Es lo que hacemos en la fase de diagnóstico.",
        ],
      },
    ],
    faq: [
      {
        title: "¿Sustituye a mi equipo?",
        text: "No: lo libera de lo repetitivo para que se dedique a lo que necesita criterio y cercanía.",
      },
      {
        title: "¿Cuánto cuesta?",
        text: "Se presupuesta a medida tras una llamada. Te damos un precio cerrado según tareas, canales, integraciones e idiomas.",
      },
    ],
    cta: { label: "Ver agentes de IA", href: "/agentes-ia/" },
    related: [
      "checklist-web-que-google-y-la-ia-entienden",
      "que-es-geo-aparecer-en-chatgpt-gemini-claude",
    ],
  },
  {
    slug: "checklist-web-que-google-y-la-ia-entienden",
    title: "Checklist técnico: una web que Google y la IA entienden",
    h1: "Checklist: cómo debe ser una web para que Google y la IA la entiendan",
    description:
      "Lista de comprobación técnica y de contenido para una web que posiciona: velocidad (Core Web Vitals), móvil, datos estructurados, sitemap, robots, canonical y llms.txt.",
    published: "2026-10-05",
    modified: "2026-10-05",
    readMin: 7,
    intro:
      "Esta es la checklist que aplicamos a cada web que hacemos. Puedes usarla para revisar la tuya o para pedir cuentas a quien te la haga.",
    sections: [
      {
        h2: "Velocidad y experiencia",
        paragraphs: [
          "Google mide la experiencia real de las páginas con las Core Web Vitals. Los umbrales para considerarlas «buenas» son:",
        ],
        list: [
          "LCP (carga del contenido principal): 2,5 segundos o menos.",
          "INP (respuesta a la interacción): 200 milisegundos o menos.",
          "CLS (estabilidad visual): 0,1 o menos.",
          "Imágenes en formatos modernos y con tamaños definidos; tipografías propias y precargadas.",
        ],
      },
      {
        h2: "Rastreo e indexación",
        paragraphs: [],
        list: [
          "HTTPS en todo el sitio, con una única versión (con o sin www) y redirecciones 301.",
          "sitemap.xml actualizado y enviado a Search Console y Bing Webmaster Tools.",
          "robots.txt que no bloquee lo importante, ni a los rastreadores de IA que quieras permitir.",
          "Etiqueta canonical en todas las páginas y sin contenido duplicado.",
          "Páginas de error 404 útiles, sin enlaces rotos.",
        ],
      },
      {
        h2: "Contenido que se entiende",
        paragraphs: [],
        list: [
          "Un único h1 por página con la idea principal.",
          "Títulos y meta descripciones únicos, que digan qué ofreces y dónde.",
          "Una página por servicio y, si trabajas en varias zonas, contenido real por zona (no copias).",
          "Preguntas frecuentes reales, escritas como las diría tu cliente.",
          "Precios o rangos orientativos y datos de contacto visibles.",
        ],
      },
      {
        h2: "Datos estructurados (schema.org)",
        paragraphs: [
          "Es la forma en que un buscador o una IA lee tu web sin ambigüedad. Como mínimo:",
        ],
        list: [
          "Organization / LocalBusiness con nombre, dirección, contacto y zona de servicio.",
          "Service y Offer para tus servicios y precios.",
          "FAQPage para las preguntas frecuentes visibles en la página.",
          "BreadcrumbList para las migas de pan.",
          "Article en guías y blog.",
        ],
      },
      {
        h2: "Señales para la IA",
        paragraphs: [
          "Además de lo anterior: lenguaje claro, datos coherentes en todas partes, reseñas y menciones externas, y un archivo /llms.txt con un resumen limpio de tu negocio. Ninguna plataforma garantiza usarlo, pero es barato y no perjudica.",
        ],
      },
    ],
    faq: [
      {
        title: "¿Cómo compruebo mis Core Web Vitals?",
        text: "Con PageSpeed Insights de Google y con el informe de Experiencia en la página de Search Console.",
      },
      {
        title: "¿Revisáis mi web actual?",
        text: "Sí. Escríbenos y te contamos qué mejorar para aparecer en Google y en la IA.",
      },
    ],
    cta: { label: "Pide una revisión de tu web", href: "/contacto/" },
    related: ["web-a-medida-o-plantilla", "que-es-geo-aparecer-en-chatgpt-gemini-claude"],
  },
  {
    slug: "marketing-digital-mallorca-negocios-con-temporada",
    title: "Marketing digital en Mallorca para negocios con temporada",
    h1: "Marketing digital en Mallorca: cómo preparar la temporada todo el año",
    description:
      "Calendario práctico para negocios de Mallorca y Baleares con temporada alta: cuándo trabajar web, SEO, reseñas e idiomas para llegar a verano con la agenda llena.",
    published: "2026-10-05",
    modified: "2026-10-05",
    readMin: 6,
    intro: `Trabajamos desde Mallorca desde ${site.since} y conocemos bien el ritmo de la isla: el que empieza en mayo llega tarde. Este es el calendario que recomendamos a hoteles, restaurantes, comercios y servicios.`,
    sections: [
      {
        h2: "Octubre-enero: construir la base",
        paragraphs: [
          "Es el momento de la web, los idiomas y los datos. Con menos trabajo en el negocio hay tiempo para decidir bien.",
        ],
        list: [
          "Web nueva o renovada, en los idiomas que realmente atienden tus clientes (español, catalán, inglés, alemán…).",
          "Ficha de Google completa y fotos nuevas.",
          "Páginas de servicio y preguntas frecuentes.",
        ],
      },
      {
        h2: "Febrero-abril: ganar posiciones antes del pico",
        paragraphs: [
          "El SEO y el posicionamiento en IA necesitan semanas para notarse. Lo que se trabaja ahora se cobra en verano.",
        ],
        list: [
          "Contenido sobre lo que buscará el visitante: qué hacer, cómo llegar, dónde comer, precios.",
          "Primeras campañas de pago, si las hay, para probar mensajes.",
          "Pedir reseñas a los clientes del año anterior.",
        ],
      },
      {
        h2: "Mayo-septiembre: atender y medir",
        paragraphs: ["Con la demanda alta, el objetivo es no perder ningún contacto."],
        list: [
          "Respuesta rápida: formulario, WhatsApp y, si procede, un agente de IA que atienda fuera de horario y en varios idiomas.",
          "Reservas directas para depender menos de plataformas con comisión.",
          "Medición semanal: de dónde llegan los contactos y cuáles se convierten.",
        ],
      },
      {
        h2: "Radio, prensa y televisión: la notoriedad local",
        paragraphs: [
          "Empezamos en revistas, radio y televisión en Mallorca y seguimos haciendo campañas de notoriedad. Un medio local bien elegido aporta confianza y marca; la web y el SEO convierten esa atención en contactos.",
        ],
      },
    ],
    faq: [
      {
        title: "¿Cuándo debería empezar a preparar la temporada?",
        text: "Cuanto antes: lo ideal es entre octubre y febrero, para que web, ficha e idiomas estén listos antes de los primeros meses de demanda.",
      },
      {
        title: "¿Tiene sentido una web en alemán o inglés?",
        text: "Si recibes visitantes de esos mercados, sí: una web bien traducida (no automática) se nota en reservas y en las respuestas que dan los asistentes de IA.",
      },
    ],
    cta: { label: "Hablemos de tu temporada", href: "/contacto/" },
    related: ["seo-local-google-maps-checklist", "cuanto-cuesta-una-pagina-web"],
  },
  {
    slug: "accesibilidad-web-ley-2025-pymes",
    title: "Accesibilidad web: qué exige la ley desde 2025 a las pymes",
    h1: "Accesibilidad web en 2025: a quién obliga la ley y qué hacer",
    description:
      "La Ley 11/2023 aplica desde el 28 de junio de 2025: qué negocios deben tener una web accesible, la exención de las microempresas y una lista práctica para cumplir.",
    published: "2026-11-05",
    modified: "2026-11-05",
    readMin: 6,
    intro:
      "Desde el 28 de junio de 2025, muchas tiendas online y servicios digitales tienen que ser accesibles para personas con discapacidad. Aquí explicamos a quién afecta, a quién no y qué conviene hacer aunque la ley no te obligue, porque una web accesible también es más fácil de usar para tus clientes mayores.",
    sections: [
      {
        h2: "Qué ley es y desde cuándo aplica",
        paragraphs: [
          "La Directiva Europea de Accesibilidad (European Accessibility Act) se incorporó en España con la Ley 11/2023, de 8 de mayo. Sus obligaciones para productos y servicios se aplican desde el 28 de junio de 2025.",
          "Para los servicios que ya se prestaban antes de esa fecha hay periodos de transición. Si tu caso es límite, confírmalo con tu asesor con el texto del BOE delante.",
        ],
      },
      {
        h2: "A quién afecta",
        paragraphs: ["La ley se centra en productos y servicios concretos. Entre los servicios:"],
        list: [
          "Comercio electrónico: tiendas online que venden a consumidores.",
          "Servicios bancarios para consumidores.",
          "Transporte de viajeros: webs, apps, billetes e información.",
          "Libros electrónicos y comunicaciones electrónicas.",
        ],
      },
      {
        h2: "Las microempresas de servicios están exentas",
        paragraphs: [
          "Las microempresas que prestan servicios —menos de 10 personas y un volumen de negocio o balance que no supera los 2 millones de euros— quedan fuera de las obligaciones de servicios. La exención no alcanza a los productos.",
          "Que no te obligue no significa que no te convenga: una parte creciente de tus clientes son personas mayores o con alguna dificultad visual, motora o cognitiva, y una web que no pueden usar es una venta que se va a otro.",
        ],
      },
      {
        h2: "Lista práctica para una web accesible",
        paragraphs: [
          "La referencia técnica son las pautas WCAG (y la norma europea EN 301 549 que las recoge). Lo esencial:",
        ],
        list: [
          "Contraste suficiente entre texto y fondo, y tamaño de letra legible sin zoom.",
          "Todo se puede usar con teclado, con el foco visible.",
          "Imágenes con texto alternativo y vídeos con subtítulos.",
          "Títulos y estructura que un lector de pantalla entienda.",
          "Formularios con etiquetas claras y mensajes de error que expliquen qué corregir.",
          "Botones grandes y separados, y un lenguaje claro, sin siglas.",
          "Una declaración de accesibilidad y un canal para avisar de problemas.",
        ],
      },
      {
        h2: "Cómo lo hacemos en COMA",
        paragraphs: [
          `Diseñamos cada web con estas pautas desde el principio, también la ${basePlan.name} de ${basePlan.price} € ${basePlan.suffix}. Si ya tienes web, la revisamos y te decimos qué cambiar o te proponemos rediseñarla.`,
        ],
      },
    ],
    faq: [
      {
        title: "¿Mi web corporativa está obligada a ser accesible?",
        text: "Depende de lo que hagas en ella. Si vendes a consumidores online o prestas alguno de los servicios incluidos y no eres microempresa, probablemente sí. Una web solo informativa de una pyme suele quedar fuera, pero conviene revisarlo con tu asesor.",
      },
      {
        title: "¿Basta con instalar un plugin de accesibilidad?",
        text: "No. Las barras y plugins que se superponen a la web no corrigen el código ni el contenido de fondo. La accesibilidad se resuelve en el diseño, el código y los textos.",
      },
      {
        title: "¿Cuánto cuesta hacer accesible mi web?",
        text: `En una web nueva no tiene coste aparte: va en el diseño. En una web existente depende de cuánto haya que corregir; tras revisarla te damos precio cerrado.`,
      },
    ],
    cta: { label: "Webs accesibles para mayores", href: "/soluciones/web-accesible-para-mayores/" },
    related: ["checklist-web-que-google-y-la-ia-entienden", "web-a-medida-o-plantilla"],
  },
  {
    slug: "cuanto-cuesta-automatizar-whatsapp-chatbot",
    title: "Cuánto cuesta automatizar WhatsApp, un chatbot o tus procesos",
    h1: "Cuánto cuesta automatizar tu negocio y cómo saber si compensa",
    description:
      "De qué se compone el precio de una automatización o un chatbot con IA: puesta en marcha, licencias, mensajes de WhatsApp, uso de IA y mantenimiento. Y cómo calcular si compensa.",
    published: "2026-11-05",
    modified: "2026-11-05",
    readMin: 7,
    intro:
      "Automatizar no tiene un precio de catálogo como una web, porque cada negocio conecta herramientas distintas. Pero el coste sí se puede desmontar en piezas, y con ellas cualquiera puede comparar presupuestos y calcular si le compensa antes de firmar.",
    sections: [
      {
        h2: "Las cinco piezas del precio",
        paragraphs: ["Casi cualquier automatización o agente de IA se reduce a esto:"],
        list: [
          "Puesta en marcha: entender el proceso, diseñar el flujo, conectarlo y probarlo con casos reales. Es un pago único.",
          "Licencias de herramientas: la plataforma de automatización (Make, n8n, Zapier…), el CRM o la agenda, si tienen cuota.",
          "Mensajes de WhatsApp: con la API oficial, Meta cobra por las plantillas que envías (avisos, recordatorios), según el tipo de mensaje y el país.",
          "Uso de IA: el modelo que entiende y redacta cobra por volumen de texto procesado. En una pyme suele ser un coste pequeño y variable.",
          "Mantenimiento: vigilar que todo siga funcionando, ajustar respuestas y adaptar el flujo cuando cambian tus herramientas.",
        ],
      },
      {
        h2: "Qué hace que suba o baje",
        paragraphs: [
          "Sube con el número de herramientas que hay que conectar, si alguna no tiene API, el volumen de mensajes, los idiomas y lo delicado de los datos (salud, menores, pagos). Baja cuando el proceso está claro y se empieza por una sola tarea.",
        ],
      },
      {
        h2: "Cómo calcular si compensa",
        paragraphs: [
          "Haz la cuenta antes de pedir presupuesto: horas al mes que dedica tu equipo a la tarea × coste por hora × 12. Súmale lo que pierdes hoy (citas olvidadas, presupuestos sin seguimiento, mensajes sin responder fuera de horario).",
          "Si el ahorro anual supera con holgura la puesta en marcha más las cuotas del año, compensa. Si no, empieza por una tarea más pequeña o espera.",
        ],
      },
      {
        h2: "Por dónde empezar",
        paragraphs: ["Las automatizaciones que antes se pagan en una pyme suelen ser:"],
        list: [
          "Recordatorios de cita con confirmación o cancelación.",
          "Que cada contacto de la web, el email o WhatsApp entre en un mismo sitio y reciba respuesta.",
          "Facturas que se generan y se envían solas, y avisos de cobro.",
          "Petición de reseña después del servicio.",
        ],
      },
      {
        h2: "Cómo lo presupuestamos en COMA",
        paragraphs: [
          "Tras una llamada te damos alcance, plazos y precio cerrado por escrito, separando el pago único de las cuotas de terceros, para que sepas qué pagas a quién. Documentamos cada flujo para que no dependas de una caja negra.",
        ],
      },
    ],
    faq: [
      {
        title: "¿Puedo automatizar WhatsApp sin la API oficial?",
        text: "Hay herramientas no oficiales que automatizan la app normal, pero se arriesga el bloqueo del número. Para un negocio, la API oficial de WhatsApp Business es lo prudente.",
      },
      {
        title: "¿Un chatbot con IA es caro de mantener?",
        text: "El uso de IA suele ser un coste pequeño en una pyme. Lo que más pesa es revisarlo de vez en cuando y mantener su información al día.",
      },
      {
        title: "¿Necesito cambiar mis programas?",
        text: "Normalmente no. Se conectan los que ya usas, siempre que permitan integrarse o exportar datos.",
      },
    ],
    cta: { label: "Cuéntanos qué quieres automatizar", href: "/automatizaciones/" },
    related: ["agentes-ia-para-pymes", "cuanto-cuesta-una-pagina-web"],
  },
  {
    slug: "como-elegir-agencia-diseno-web",
    title: "Cómo elegir agencia de diseño web: 12 preguntas antes de firmar",
    h1: "Cómo elegir una agencia de diseño web: 12 preguntas antes de firmar",
    description:
      "Las preguntas que separan una buena agencia de diseño web de una mala: propiedad del dominio, precio cerrado, SEO, accesibilidad, soporte y qué pasa si te vas.",
    published: "2026-11-05",
    modified: "2026-11-05",
    readMin: 6,
    intro: `Todas las agencias dicen ser las mejores, así que los adjetivos no sirven para elegir. Estas son las preguntas que nosotros haríamos, después de ${years()} años en comunicación, y lo que debería responder una agencia seria.`,
    sections: [
      {
        h2: "Sobre lo que compras",
        paragraphs: [],
        list: [
          "¿El dominio estará a mi nombre? Debe estarlo, siempre.",
          "¿El diseño es propio o una plantilla? Pide ver otras webs suyas y busca si se repiten.",
          "¿Qué incluye exactamente el precio y qué es un extra? Por escrito, con importes.",
          "¿Hay cuotas mensuales obligatorias? ¿Qué incluyen y qué pasa si dejo de pagarlas?",
        ],
      },
      {
        h2: "Sobre la calidad",
        paragraphs: [],
        list: [
          "¿Cómo de rápida carga en el móvil? Pide que te enseñen una web suya en PageSpeed Insights.",
          "¿Incluye SEO básico y datos estructurados? Títulos, descripciones y schema.org deberían ir de serie.",
          "¿Es accesible? Contraste, teclado y textos alternativos, y más si vendes online.",
          "¿Cumple con el RGPD y las cookies? La analítica no debería cargarse antes de que el usuario acepte.",
        ],
      },
      {
        h2: "Sobre el después",
        paragraphs: [],
        list: [
          "¿Quién me atiende si algo falla, por qué canal y en cuánto tiempo?",
          "¿Podré cambiar los textos yo, o cuánto cuesta cada cambio?",
          "Si me voy, ¿me llevo la web, el contenido y los accesos?",
          "¿Desde cuándo existís y con quién habéis trabajado? Pide referencias que puedas comprobar.",
        ],
      },
      {
        h2: "Nuestras respuestas",
        paragraphs: [
          `Para que puedas compararnos: dominio y contenido a tu nombre, diseño propio, ${basePlan.name} por ${basePlan.price} € ${basePlan.suffix} de pago único con los extras publicados en /precios/, SEO básico y datos estructurados incluidos, analítica solo con consentimiento, y en marcha desde ${site.since} en Palma.`,
        ],
      },
    ],
    faq: [
      {
        title: "¿Es mejor una agencia local o una de fuera?",
        text: "Lo importante es que responda bien a estas preguntas. Una agencia local suma si tu negocio depende del cliente de la zona y quieres reunirte en persona.",
      },
      {
        title: "¿Una web barata es siempre peor?",
        text: "No necesariamente. Mira qué incluye, si el diseño es propio y quién es el dueño del dominio. Una web cara con letra pequeña puede salir peor.",
      },
    ],
    cta: { label: "Mira nuestros precios", href: "/precios/" },
    related: ["cuanto-cuesta-una-pagina-web", "web-a-medida-o-plantilla"],
  },
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
