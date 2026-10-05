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
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
