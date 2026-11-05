import { basePlan, extras } from "./pricing";
import { site, trust, years } from "./site";
import type { Item } from "./services";

/**
 * Páginas por necesidad (/soluciones/<slug>/): búsquedas de intención clara
 * («página web barata», «automatizar WhatsApp», «web para personas mayores»…).
 *
 * Mismas reglas que los sectores (src/data/niches/types.ts): todo verdadero y comprobable,
 * sin superlativos ni garantías, y los importes calculados desde pricing.ts.
 */
export type SolutionGroup = "web" | "automatiza" | "visibilidad";

export interface Solution {
  slug: string;
  /** Nombre corto para listados. */
  name: string;
  group: SolutionGroup;
  /** <title> sin " | COMA" (máx. 60). */
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  why: { title: string; paragraphs: [string, string] };
  points: Item[];
  price: { label: string; value: string; note: string };
  /** Tabla comparativa opcional: cabecera y filas (la primera celda es la etiqueta). */
  compare?: { caption: string; head: string[]; rows: string[][] };
  faq: Item[];
  /** Servicio principal relacionado (slug de services.ts o "precios"). */
  service: "diseno-web" | "seo-geo" | "agentes-ia" | "automatizaciones";
  /** Sectores (slugs de niches) donde más se usa. */
  niches: string[];
  /** Otras soluciones relacionadas (slugs). */
  related: string[];
  cta: string;
  /** Búsquedas con las que se llega (keywords del schema y de llms.txt). */
  searches: string[];
}

export const solutionGroups: { id: SolutionGroup; label: string }[] = [
  { id: "web", label: "Webs a buen precio" },
  { id: "automatiza", label: "Automatizaciones e IA" },
  { id: "visibilidad", label: "Que te encuentren" },
];

const price = (id: string) => extras.find((e) => e.id === id)?.price ?? 0;
const P = basePlan.price;
const shop = P + price("tienda");
const booking = P + price("reservas");
const lang = price("idiomas");
const host = price("alojamiento");
const mailYear = price("correo");
const mailSetup = price("correo-config");
const seo = price("seo");
const geo = price("geo");
/** Referencias con nombre propio (las del muro de logos). */
const refs = trust.wall.map((w) => w.name);

const custom = {
  label: "A medida",
  value: "Precio cerrado tras una llamada",
  note: "Depende de los canales, las integraciones y el volumen. Te damos alcance, plazos y precio por escrito antes de empezar.",
};

export const solutions: Solution[] = [
  /* ------------------------------------------------------------------ Webs */
  {
    slug: "pagina-web-barata",
    name: "Página web barata",
    group: "web",
    title: `Página web barata y profesional: ${P} € + IVA`,
    description: `Página web barata sin plantilla: ${P} € + IVA de pago único con diseño propio, móvil, formulario, SEO básico y SSL. Precio publicado, el mismo en toda España.`,
    eyebrow: `Web barata · ${P} € + IVA`,
    h1: "Una página web barata que no lo parece",
    lead: `${P} € + IVA de pago único por una web con diseño propio, rápida y lista para Google y la IA. Sin cuota obligatoria ni permanencia.`,
    why: {
      title: "Barata no tiene por qué ser mala",
      paragraphs: [
        `Una web barata suele esconder una plantilla repetida, una cuota de por vida o unos textos que nadie revisa. La nuestra cuesta poco porque el proceso es propio y está afinado tras ${years()} años haciendo comunicación, no porque recortemos lo que se ve.`,
        "El precio está publicado y es el mismo en toda España. Lo que no entra en la Web Esencial se suma en el presupuesto en directo, con importe cerrado, antes de que nos escribas.",
      ],
    },
    points: [
      {
        title: "Pago único, no suscripción",
        text: `${P} € + IVA y la web es tuya. El alojamiento (${host} €/mes) es opcional: si ya tienes uno, usamos el tuyo.`,
      },
      {
        title: "Diseño propio",
        text: "Nada de plantillas que se repiten en cientos de webs: diseño con tu marca, tus colores y tus fotos.",
      },
      {
        title: "SEO básico incluido",
        text: "Títulos, descripciones, velocidad y datos estructurados para que Google y la IA te entiendan.",
      },
      {
        title: "Crece cuando lo necesites",
        text: "Idiomas, reservas, tienda o blog con precio visible, sin rehacer la web.",
      },
    ],
    price: {
      label: basePlan.name,
      value: `${P} € + IVA`,
      note: "Pago único. Hasta 4 páginas: Inicio, Servicios, Nosotros y Contacto.",
    },
    compare: {
      caption: "Qué pagas en cada opción",
      head: ["", "COMA Web Esencial", "Constructor con plantilla", "Agencia tradicional"],
      rows: [
        ["Quién la hace", "Nosotros", "Tú", "La agencia"],
        [
          "Cómo se paga",
          `${P} € + IVA, una vez`,
          "Cuota mientras exista la web",
          "Presupuesto variable",
        ],
        ["Diseño", "Propio, con tu marca", "Plantilla que adaptas tú", "Propio"],
        ["Precio publicado", "Sí, en /precios/", "Sí", "Depende de la agencia"],
      ],
    },
    faq: [
      {
        title: "¿Por qué es tan barata?",
        text: "Porque tenemos un proceso propio de diseño y maquetación que nos ahorra horas sin recortar en diseño ni en velocidad. Preferimos muchas webs bien hechas a pocas carísimas.",
      },
      {
        title: "¿Hay letra pequeña o permanencia?",
        text: `No. ${P} € + IVA de pago único. Alojamiento, correo, SEO mensual y el resto de extras son opcionales.`,
      },
      {
        title: "¿Qué no incluye?",
        text: "Tienda online, reservas, idiomas adicionales, blog, creación de textos y fotos, y alojamiento. Todos tienen precio cerrado en /precios/.",
      },
      {
        title: "¿La web es mía?",
        text: "Sí. El dominio y los contenidos son tuyos y te lo dejamos por escrito.",
      },
    ],
    service: "diseno-web",
    niches: [
      "tiendas-y-comercio-local",
      "fontaneros-y-electricistas",
      "peluquerias-y-barberias",
      "bares-y-cafeterias",
    ],
    related: ["pagina-web-para-autonomos", "alternativa-a-wix", "agencia-diseno-web-barata"],
    cta: `¿Hacemos tu web por ${P} €?`,
    searches: [
      "página web barata",
      "web barata profesional",
      "diseño web económico",
      "página web 99 euros",
      "web barata para empresa",
      "hacer página web barata",
    ],
  },
  {
    slug: "pagina-web-para-autonomos",
    name: "Web para autónomos",
    group: "web",
    title: `Página web para autónomos desde ${P} € + IVA`,
    description: `Web profesional para autónomos por ${P} € + IVA: diseño propio, contacto a un clic, SEO básico y SSL. Tú sigues trabajando; nosotros nos ocupamos de todo.`,
    eyebrow: "Autónomos",
    h1: `Tu web de autónomo, hecha por nosotros, por ${P} €`,
    lead: "Para quien necesita una web seria sin dedicar fines de semana a montarla: oficios, salud, abogacía, formación, fotografía…",
    why: {
      title: "Sin tiempo para pelearte con una plantilla",
      paragraphs: [
        "Un autónomo no tiene departamento de marketing. Montar una web con un constructor lleva horas y el resultado suele delatarlo. Nosotros la hacemos: tú nos cuentas a qué te dedicas y para quién.",
        "Lo que necesitas casi siempre es poco y claro: qué haces, dónde, cómo contactarte y por qué fiarse de ti. Eso cabe en las 4 páginas de la Web Esencial.",
      ],
    },
    points: [
      {
        title: "Nos ocupamos nosotros",
        text: `Diseño, publicación y SSL. Si necesitas que creemos textos y fotos, se añade por ${price("contenido")} € + IVA.`,
      },
      {
        title: "Contacto a un clic",
        text: "Formulario, email y llamada visibles en cada página, también en el móvil.",
      },
      {
        title: "Que te encuentren en tu zona",
        text: `SEO básico incluido. Si quieres salir en Google Maps, el SEO local cuesta ${seo} €/mes + IVA.`,
      },
      {
        title: "Correo profesional",
        text: `tunombre@tudominio.com con 50 GB por ${mailYear} € + IVA al año por buzón.`,
      },
    ],
    price: {
      label: basePlan.name,
      value: `${P} € + IVA`,
      note: "Pago único. Los extras se añaden solo si te hacen falta.",
    },
    faq: [
      {
        title: "¿Puedo deducirme la web como autónomo?",
        text: "Normalmente es un gasto de tu actividad y el IVA también se deduce si estás en el régimen general. Confírmalo con tu asesor.",
      },
      {
        title: "¿Necesito dominio propio?",
        text: "Es lo recomendable: da confianza y te permite tener correo profesional. Si no lo tienes, te ayudamos a registrarlo a tu nombre.",
      },
      {
        title: "¿Y si no tengo fotos ni textos?",
        text: `Partimos de lo que nos cuentes. Si quieres que lo escribamos y fotografiemos nosotros, el pack de contenido propio cuesta ${price("contenido")} € + IVA.`,
      },
    ],
    service: "diseno-web",
    niches: [
      "fontaneros-y-electricistas",
      "fisioterapeutas",
      "abogados",
      "fotografos",
      "nutricionistas",
      "psicologos",
    ],
    related: ["pagina-web-barata", "correo-corporativo", "aparecer-en-google-maps"],
    cta: "¿Hacemos tu web de autónomo?",
    searches: [
      "página web para autónomos",
      "web autónomo precio",
      "diseño web autónomos",
      "web barata autónomo",
      "página web profesional autónomo",
    ],
  },
  {
    slug: "web-para-negocios-de-toda-la-vida",
    name: "Web para negocios de toda la vida",
    group: "web",
    title: "Web para negocios de toda la vida, sin tecnicismos",
    description: `Tu primera web explicada sin tecnicismos: nos lo cuentas, la hacemos y te enseñamos lo justo. Desde ${P} € + IVA, con trato personal desde Palma.`,
    eyebrow: "Negocios de toda la vida",
    h1: "Tu negocio de siempre, ahora también en internet",
    lead: "Para quien lleva años detrás del mostrador y no quiere aprender informática: nos lo cuentas como se lo contarías a un cliente y nosotros hacemos el resto.",
    why: {
      title: "Sin jerga, sin prisas y sin sorpresas",
      paragraphs: [
        "Muchos negocios con décadas de oficio no tienen web, o tienen una que nadie toca desde hace años. No es falta de ganas: es que nadie se lo ha explicado claro.",
        `Nosotros empezamos en ${site.since} con revistas y radio, y hablamos tu idioma. Te explicamos cada paso con palabras normales, te damos un precio cerrado antes de empezar y, si quieres, nos ocupamos del dominio, el correo y las copias de seguridad.`,
      ],
    },
    points: [
      {
        title: "Te atienden personas",
        text: "Escribes y te contesta alguien del equipo, con una propuesta clara de qué hacemos y cuánto cuesta.",
      },
      {
        title: "En persona, si estás en Mallorca",
        text: `Quedamos en ${site.address.street}, en Palma, o por videollamada si te viene mejor.`,
      },
      {
        title: "Lo técnico es cosa nuestra",
        text: `Alojamiento, copias y actualizaciones por ${host} €/mes + IVA, si prefieres desentenderte.`,
      },
      {
        title: "Fácil para tus clientes",
        text: "Letra legible, botones grandes, dirección y horario a la vista: lo que tu clientela de siempre necesita.",
      },
    ],
    price: {
      label: basePlan.name,
      value: `${P} € + IVA`,
      note: `Pago único. Mantenimiento opcional: ${host} €/mes + IVA.`,
    },
    faq: [
      {
        title: "¿Tengo que saber usar un ordenador?",
        text: "No. Nos mandas los datos y las fotos por email, o nos los das en mano si estás en Mallorca. Si no tienes fotos, se pueden hacer.",
      },
      {
        title: "Si todo el barrio me conoce, ¿para qué quiero web?",
        text: "El barrio te conoce; quien se acaba de mudar, el turista o el hijo que busca para sus padres, no. Hoy casi todos miran primero Google Maps o preguntan a la IA.",
      },
      {
        title: "¿Puedo hacerlo con mi hijo o mi hija delante?",
        text: "Claro. Muchas veces la decisión se toma en familia: hacemos la reunión con quien quieras.",
      },
    ],
    service: "diseno-web",
    niches: [
      "tiendas-y-comercio-local",
      "talleres-mecanicos",
      "bares-y-cafeterias",
      "ortopedias",
      "opticas-y-audiologia",
      "peluquerias-y-barberias",
    ],
    related: ["web-accesible-para-mayores", "mantenimiento-web", "aparecer-en-google-maps"],
    cta: "¿Te contamos cómo sería tu web?",
    searches: [
      "página web para negocio tradicional",
      "web para comercio de toda la vida",
      "primera página web negocio",
      "web sin conocimientos técnicos",
      "hacer web para mi tienda de barrio",
    ],
  },
  {
    slug: "web-accesible-para-mayores",
    name: "Web accesible para personas mayores",
    group: "web",
    title: "Web accesible y fácil para personas mayores",
    description: `Webs pensadas para clientes mayores: letra grande, alto contraste, botones claros y llamar en un toque, con las pautas WCAG como referencia. Desde ${P} € + IVA.`,
    eyebrow: "Accesibilidad",
    h1: "Webs que tus clientes mayores pueden usar sin ayuda",
    lead: "Residencias, ópticas, farmacias, ortopedias, podólogos o cualquier negocio con clientela mayor: letra que se lee, botones que se pulsan y el teléfono siempre a mano.",
    why: {
      title: "Quien tiene 75 años también busca en el móvil",
      paragraphs: [
        "Cada vez más personas mayores usan el móvil para buscar una farmacia de guardia, pedir cita o mirar un horario. Y cuando no lo hacen ellas, lo hacen sus hijos por ellas. Una web con letra diminuta, menús escondidos o formularios largos las deja fuera.",
        "Desde el 28 de junio de 2025, la Ley Europea de Accesibilidad obliga a muchas tiendas online y servicios digitales a ser accesibles. Aunque a tu negocio no le obligue, una web accesible es más clara para todo el mundo.",
      ],
    },
    points: [
      {
        title: "Letra grande y buen contraste",
        text: "Textos que se leen sin gafas de cerca y colores que se distinguen con poca vista.",
      },
      {
        title: "Botones grandes y pocos pasos",
        text: "Llamar, pedir cita o ver cómo llegar en un toque, sin menús escondidos.",
      },
      {
        title: "Lenguaje claro",
        text: "Frases cortas, sin tecnicismos ni siglas, y formularios con lo mínimo imprescindible.",
      },
      {
        title: "Teclado y lectores de pantalla",
        text: "Estructura, textos alternativos y foco visible para quien navega sin ratón o con lector.",
      },
    ],
    price: {
      label: basePlan.name,
      value: `${P} € + IVA`,
      note: "La accesibilidad no es un extra: va en el diseño desde el principio.",
    },
    faq: [
      {
        title: "¿Me obliga la ley a tener una web accesible?",
        text: "Depende de tu actividad y tamaño. La Ley Europea de Accesibilidad (en España, Ley 11/2023) se aplica desde junio de 2025 a servicios como el comercio electrónico, la banca o el transporte, y exime a las microempresas que prestan servicios. Si dudas, consúltalo con tu asesor.",
      },
      {
        title: "¿Podéis revisar si mi web actual es accesible?",
        text: "Sí. Revisamos contraste, tamaños, navegación con teclado y textos alternativos, y te decimos qué cambiar o te proponemos rediseñarla.",
      },
      {
        title: "¿Una web accesible es más fea?",
        text: "No. Bien diseñada, una web accesible es simplemente más clara, y eso la hace más cómoda para todos.",
      },
    ],
    service: "diseno-web",
    niches: [
      "residencias-de-mayores",
      "ayuda-a-domicilio",
      "opticas-y-audiologia",
      "ortopedias",
      "podologos",
      "farmacias",
    ],
    related: ["web-para-negocios-de-toda-la-vida", "rediseno-web", "recordatorios-de-citas"],
    cta: "¿Hacemos una web que todos puedan usar?",
    searches: [
      "web accesible personas mayores",
      "página web accesible",
      "accesibilidad web obligatoria 2025",
      "diseño web para mayores",
      "web fácil de usar para mayores",
      "ley europea de accesibilidad web",
    ],
  },
  {
    slug: "tienda-online-barata",
    name: "Tienda online barata",
    group: "web",
    title: `Tienda online barata: ${shop} € + IVA, pago único`,
    description: `Tienda online con catálogo, carrito y pago online por ${shop} € + IVA de pago único, hasta 50 productos. Diseño propio, sin plantilla y sin permanencia.`,
    eyebrow: `Tienda online · ${shop} € + IVA`,
    h1: `Tu tienda online, con diseño propio, por ${shop} €`,
    lead: "Catálogo, carrito y pago online para hasta 50 productos. Para comercio local, producto de Mallorca o una primera tienda que quiera probar sin hipotecarse.",
    why: {
      title: "Vender online sin pagar como una gran marca",
      paragraphs: [
        "Muchas tiendas pequeñas no venden online porque los presupuestos parten de miles de euros o porque las plataformas cobran una cuota cada mes, vendas o no. Para empezar no hace falta tanto.",
        "Con 50 productos se cubre el catálogo de la mayoría de comercios de barrio y productores. Si creces, la tienda crece contigo.",
      ],
    },
    points: [
      {
        title: "Catálogo y fichas",
        text: "Fotos, descripción, precio y variantes de cada producto.",
      },
      { title: "Carrito y pago online", text: "Pago integrado y aviso de cada pedido por email." },
      {
        title: "Envío o recogida en tienda",
        text: "Tú decides zonas, gastos de envío y si se puede recoger en el local.",
      },
      {
        title: "Preparada para Google",
        text: "Datos de producto estructurados para que tus artículos aparezcan en las búsquedas.",
      },
    ],
    price: {
      label: `${basePlan.name} + Tienda online`,
      value: `${shop} € + IVA`,
      note: `Pago único. Hasta 50 productos. Idiomas a ${lang} € + IVA cada uno.`,
    },
    faq: [
      {
        title: "¿Y si tengo más de 50 productos?",
        text: "Te hacemos un presupuesto a medida, con precio cerrado antes de empezar.",
      },
      {
        title: "¿Puedo gestionar yo productos y pedidos?",
        text: "Sí. Te dejamos un panel para cambiar precios, stock y fotos, y ver los pedidos.",
      },
      {
        title: "¿Qué necesito para vender online?",
        text: "Puedes vender como autónomo o empresa. Necesitas condiciones de venta, privacidad y cookies, y respetar el derecho de desistimiento de 14 días. Te dejamos la estructura preparada; revisa el contenido con tu asesor.",
      },
    ],
    service: "diseno-web",
    niches: ["tiendas-y-comercio-local", "productos-de-mallorca", "bodegas", "ortopedias"],
    related: ["pagina-web-barata", "web-multiidioma", "correo-corporativo"],
    cta: "¿Abrimos tu tienda online?",
    searches: [
      "tienda online barata",
      "crear tienda online precio",
      "tienda online pequeño comercio",
      "tienda online sin cuota mensual",
      "precio tienda online a medida",
    ],
  },
  {
    slug: "web-multiidioma",
    name: "Web en varios idiomas",
    group: "web",
    title: `Web multiidioma: inglés, alemán o catalán a ${lang} €`,
    description: `Web en varios idiomas para turistas y residentes extranjeros: ${lang} € + IVA por idioma, con una dirección por idioma y hreflang para Google. Desde Mallorca.`,
    eyebrow: `Multiidioma · ${lang} € por idioma`,
    h1: "Tu web en el idioma de quien te compra",
    lead: `Inglés y alemán para el turista, catalán para el cliente local y francés o italiano si hace falta. Cada idioma, ${lang} € + IVA.`,
    why: {
      title: "En Mallorca se vende en cuatro idiomas",
      paragraphs: [
        "Un alemán que busca fisioterapeuta en Port d'Andratx escribe en alemán, y Google y la IA le muestran resultados en alemán. Si tu web solo está en español, no existes para él.",
        "Una web multiidioma bien hecha no es un botón de traducción automática: cada idioma tiene su dirección, su título y su descripción para que Google lo muestre a quien toca.",
      ],
    },
    points: [
      {
        title: "Una dirección por idioma",
        text: "/en/, /de/, /ca/: cada versión se indexa por separado.",
      },
      {
        title: "hreflang y SEO por idioma",
        text: "Google entiende qué versión mostrar en cada país y en cada idioma.",
      },
      {
        title: "Selector visible",
        text: "El visitante cambia de idioma sin perder la página en la que está.",
      },
      {
        title: "Formularios traducidos",
        text: "Que el cliente pueda escribirte en su idioma de principio a fin.",
      },
    ],
    price: {
      label: "Por idioma",
      value: `${lang} € + IVA`,
      note: `Ejemplo: español, inglés y alemán = ${P} € + 2 × ${lang} € = ${P + 2 * lang} € + IVA, pago único.`,
    },
    faq: [
      {
        title: "¿Quién hace las traducciones?",
        text: "Podemos partir de tus traducciones o prepararlas nosotros. En textos legales o sanitarios recomendamos que las revise un traductor profesional.",
      },
      {
        title: "¿Cuántos idiomas puedo añadir?",
        text: "Hasta cinco en el presupuesto en directo. Si necesitas más, lo hablamos.",
      },
      {
        title: "¿Merece la pena el catalán en Baleares?",
        text: "Para el cliente local y la imagen de negocio de aquí, suele sumar. Y añade una versión más que Google puede mostrar.",
      },
    ],
    service: "diseno-web",
    niches: [
      "hoteles",
      "alquiler-vacacional",
      "restaurantes",
      "inmobiliarias",
      "excursiones-y-actividades",
      "bodas-y-wedding-planners",
    ],
    related: ["web-con-reservas-online", "pagina-web-barata", "aparecer-en-chatgpt"],
    cta: "¿En qué idiomas te buscan?",
    searches: [
      "web multiidioma",
      "página web en inglés y alemán",
      "web bilingüe precio",
      "traducir web a varios idiomas",
      "web multiidioma Mallorca",
    ],
  },
  {
    slug: "web-con-reservas-online",
    name: "Web con reservas y citas",
    group: "web",
    title: `Web con reservas y citas online por ${booking} € + IVA`,
    description: `Web con sistema de reservas o citas online: tus clientes reservan solos y te llega aviso por email. ${booking} € + IVA de pago único, sin comisión por reserva.`,
    eyebrow: `Reservas online · ${booking} € + IVA`,
    h1: "Que tus clientes reserven solos, a cualquier hora",
    lead: "Citas para peluquerías, clínicas y talleres; reservas para restaurantes, actividades y alojamientos. Sin pagar comisión por cada reserva.",
    why: {
      title: "Cada llamada que no coges es una cita que se va",
      paragraphs: [
        "Mientras atiendes a un cliente suena el teléfono. Fuera de horario no contesta nadie. Un sistema de reservas online recoge esas citas por ti y te avisa al momento.",
        "Las plataformas de reservas cobran por reserva o por mes y se quedan con el contacto del cliente. Con las reservas en tu web, el cliente es tuyo.",
      ],
    },
    points: [
      {
        title: "Tu disponibilidad",
        text: "Días, horas y servicios que tú decides, con huecos que se cierran solos.",
      },
      {
        title: "Aviso al momento",
        text: "Email para ti y confirmación para el cliente en cada reserva.",
      },
      {
        title: "Recordatorios",
        text: "Si quieres, avisos automáticos por email o WhatsApp el día antes (automatización a medida).",
      },
      {
        title: "Pensada para el móvil",
        text: "Reservar lleva menos de un minuto desde el teléfono.",
      },
    ],
    price: {
      label: `${basePlan.name} + Reservas`,
      value: `${booking} € + IVA`,
      note: "Pago único. Recordatorios por WhatsApp y conexión con tu agenda: a medida.",
    },
    faq: [
      {
        title: "¿Se conecta con Google Calendar u Outlook?",
        text: "Sí, lo conectamos con tu agenda como automatización a medida, para que no tengas dos calendarios.",
      },
      {
        title: "¿Puedo cobrar una señal al reservar?",
        text: "Sí, se puede combinar con pago online. Lo presupuestamos según tu caso.",
      },
      {
        title: "¿Y si ya uso un programa de citas?",
        text: "Lo enlazamos o lo integramos en tu web: no tienes que cambiar de herramienta.",
      },
    ],
    service: "diseno-web",
    niches: [
      "peluquerias-y-barberias",
      "fisioterapeutas",
      "restaurantes",
      "talleres-mecanicos",
      "excursiones-y-actividades",
      "yoga-y-pilates",
    ],
    related: ["recordatorios-de-citas", "automatizar-whatsapp", "web-multiidioma"],
    cta: "¿Abrimos tu agenda online?",
    searches: [
      "web con reservas online",
      "sistema de citas online para web",
      "reservas online sin comisión",
      "web con cita previa",
      "página web con calendario de reservas",
    ],
  },
  {
    slug: "rediseno-web",
    name: "Rediseño de web",
    group: "web",
    title: `Rediseño web: renueva tu web antigua desde ${P} €`,
    description: `Rediseño de webs antiguas, lentas o que se ven mal en el móvil: conservamos lo que ya posiciona en Google y la dejamos moderna desde ${P} € + IVA.`,
    eyebrow: "Rediseño web",
    h1: "Tu web se ha quedado vieja. La renovamos sin perder lo que posiciona",
    lead: "Si tarda en cargar, se ve mal en el móvil o ya no explica lo que haces, la rehacemos con diseño propio y cuidando las direcciones que Google ya conoce.",
    why: {
      title: "Rediseñar no es empezar de cero",
      paragraphs: [
        "El mayor riesgo de un rediseño es perder lo que ya funciona: páginas que Google tiene indexadas, enlaces de otras webs o datos que la IA ya relaciona contigo. Por eso revisamos qué posiciona antes de tocar nada.",
        "Después, cada dirección antigua que cambie redirige a la nueva con una redirección 301, para que ni las visitas ni Google se encuentren un error.",
      ],
    },
    points: [
      { title: "Revisión previa", text: "Qué páginas traen visitas y contactos, y cuáles sobran." },
      { title: "Redirecciones 301", text: "Ninguna dirección antigua acaba en un error 404." },
      {
        title: "Velocidad y móvil",
        text: "Código ligero y fotos optimizadas: carga rápido en cualquier pantalla.",
      },
      {
        title: "Textos que se entienden",
        text: "Qué haces, para quién y dónde, claro para tus clientes, Google y la IA.",
      },
    ],
    price: {
      label: "Rediseño",
      value: `desde ${P} € + IVA`,
      note: "Si tu web tiene más de 4 páginas, tienda o idiomas, te damos precio cerrado tras revisarla.",
    },
    faq: [
      {
        title: "¿Perderé posiciones en Google?",
        text: "Con redirecciones y contenidos bien trasladados no tiene por qué. Es normal alguna oscilación las primeras semanas mientras Google rastrea la web nueva.",
      },
      {
        title: "¿Mantengo mi dominio y mi correo?",
        text: "Sí. Cambiamos la web, no tu dirección ni tus buzones.",
      },
      {
        title: "Mi web está hecha con WordPress o Wix, ¿podéis rediseñarla?",
        text: "Sí. Trasladamos textos e imágenes a la web nueva, sea cual sea la plataforma de origen.",
      },
    ],
    service: "diseno-web",
    niches: ["abogados", "clinicas-dentales", "hoteles", "inmobiliarias"],
    related: ["mantenimiento-web", "web-accesible-para-mayores", "alternativa-a-wix"],
    cta: "¿Le damos una vuelta a tu web?",
    searches: [
      "rediseño web",
      "renovar página web",
      "rediseño web precio",
      "modernizar web antigua",
      "rediseño web sin perder seo",
    ],
  },
  {
    slug: "mantenimiento-web",
    name: "Mantenimiento y alojamiento",
    group: "web",
    title: `Mantenimiento web y hosting por ${host} €/mes + IVA`,
    description: `Alojamiento rápido, copias de seguridad, SSL y actualizaciones de tu web por ${host} €/mes + IVA. Personas que te contestan desde Palma cuando algo falla.`,
    eyebrow: `Mantenimiento · ${host} €/mes`,
    h1: `Tu web, siempre funcionando, por ${host} € al mes`,
    lead: "Alojamiento, copias de seguridad, certificado SSL y actualizaciones. Tú no tienes que acordarte de nada.",
    why: {
      title: "Lo que nadie ve hasta que falla",
      paragraphs: [
        "Una web sin mantener acaba lenta, desactualizada o caída justo el día que más visitas tiene. Y una web atacada puede tardar semanas en recuperar su sitio en Google.",
        "Con el mantenimiento nos ocupamos del alojamiento, las copias y las actualizaciones cada mes. Si algo falla, nos escribes y te contesta una persona.",
      ],
    },
    points: [
      {
        title: "Alojamiento rápido",
        text: "Servidor preparado para que tu web cargue al instante.",
      },
      { title: "Copias de seguridad", text: "Si algo se rompe, se vuelve a la versión buena." },
      {
        title: "Actualizaciones",
        text: "Seguridad al día cada mes, sin que tengas que hacer nada.",
      },
      {
        title: "SSL siempre activo",
        text: "El candado del navegador, renovado sin que te enteres.",
      },
    ],
    price: {
      label: "Alojamiento y mantenimiento",
      value: `${host} €/mes + IVA`,
      note: `Se suma al pago único de la web. Correo con tu dominio, aparte: ${mailYear} € + IVA al año por buzón.`,
    },
    faq: [
      {
        title: "¿Es obligatorio contratarlo?",
        text: "No. La web es tuya y puedes alojarla donde quieras. Solo te recomendamos que alguien se ocupe de las copias y las actualizaciones.",
      },
      {
        title: "¿Puedo traer mi dominio?",
        text: "Sí. Usamos tu dominio actual y te ayudamos a apuntarlo a la web nueva.",
      },
      {
        title: "¿Incluye el correo?",
        text: `No: el correo con tu dominio va aparte, con 50 GB por buzón, por ${mailYear} € + IVA al año.`,
      },
    ],
    service: "diseno-web",
    niches: ["tiendas-y-comercio-local", "restaurantes", "asociaciones-y-ong"],
    related: ["correo-corporativo", "rediseno-web", "web-para-negocios-de-toda-la-vida"],
    cta: "¿Nos ocupamos de tu web?",
    searches: [
      "mantenimiento web precio",
      "hosting y mantenimiento web",
      "mantenimiento página web mensual",
      "alojamiento web barato",
      "mantenimiento web pymes",
    ],
  },
  {
    slug: "correo-corporativo",
    name: "Correo con tu dominio",
    group: "web",
    title: "Correo corporativo con tu dominio: 5 €/mes por buzón",
    description: `Correo profesional nombre@tuempresa.com con 50 GB, antispam y datos en la UE por ${mailYear} € + IVA al año por buzón. Configuración y migración: ${mailSetup} €.`,
    eyebrow: "Correo profesional",
    h1: "Correo con tu dominio, 50 GB y sin complicaciones",
    lead: "Deja el correo gratuito y escribe desde nombre@tuempresa.com. Lo configuramos en tu móvil y tu ordenador y traemos tus correos antiguos.",
    why: {
      title: "Un correo gratuito resta confianza",
      paragraphs: [
        "Un presupuesto que llega desde una cuenta gratuita parece menos serio que uno con el nombre de tu empresa. Y si un día cambias de proveedor, tus contactos siguen escribiéndote a la misma dirección.",
        "Además configuramos SPF, DKIM y DMARC para que tus correos no acaben en la carpeta de spam de tus clientes.",
      ],
    },
    points: [
      { title: "50 GB por buzón", text: "Espacio de sobra para años de correo y adjuntos." },
      { title: "Antispam y antivirus", text: "Filtrado incluido en cada buzón." },
      {
        title: "Webmail y app móvil",
        text: "Tu correo en el navegador, en el móvil y en tu programa de siempre.",
      },
      {
        title: "Alias y reenvíos",
        text: "info@, presupuestos@ o reservas@ sin pagar buzones de más.",
      },
    ],
    price: {
      label: "Por buzón",
      value: `${mailYear} € + IVA al año`,
      note: `Equivale a 5 €/mes. Configuración y migración opcional: ${mailSetup} € + IVA, pago único.`,
    },
    faq: [
      {
        title: "¿Puedo tener info@ y también mi nombre@?",
        text: "Sí. Los alias y reenvíos están incluidos, así que info@ puede llegar a tu buzón sin pagar otro.",
      },
      {
        title: "¿Me traéis los correos antiguos?",
        text: `Sí, con la configuración y migración (${mailSetup} € + IVA) movemos tus correos y dejamos el móvil y el ordenador listos.`,
      },
      {
        title: "¿Qué son SPF, DKIM y DMARC?",
        text: "Tres registros que demuestran que tus correos los envías tú. Sin ellos, Gmail y Outlook desconfían y es más fácil acabar en spam.",
      },
    ],
    service: "diseno-web",
    niches: ["abogados", "asesorias-y-gestorias", "inmobiliarias"],
    related: ["mantenimiento-web", "pagina-web-para-autonomos", "pagina-web-barata"],
    cta: "¿Te pasamos al correo profesional?",
    searches: [
      "correo corporativo barato",
      "email con mi dominio",
      "correo profesional empresa precio",
      "cuenta de correo con dominio propio",
      "migrar correo empresa",
    ],
  },
  {
    slug: "alternativa-a-wix",
    name: "Alternativa a Wix y plantillas",
    group: "web",
    title: "Alternativa a Wix: web a medida con pago único",
    description: `¿Wix, Squarespace o WordPress con plantilla? Compara: web con diseño propio, hecha por nosotros, por ${P} € + IVA de pago único y sin depender de una plataforma.`,
    eyebrow: "Comparativa",
    h1: "¿Wix o una web a medida? Lo que de verdad cambia",
    lead: "Los constructores de webs son una buena herramienta si tienes tiempo y te gusta hacerlo tú. Si prefieres dedicarte a tu negocio, esto es lo que cambia.",
    why: {
      title: "Cuándo conviene cada opción",
      paragraphs: [
        "Un constructor con plantilla te deja empezar hoy, pero el diseño, los textos y el SEO los haces tú, y pagas una cuota mientras la web exista. Si un día te vas, normalmente no puedes llevarte el diseño tal cual.",
        `Una web a medida hecha por una agencia suele costar bastante más. La Web Esencial está en medio: diseño propio, hecha por nosotros, por ${P} € + IVA de pago único.`,
      ],
    },
    points: [
      {
        title: "Diseño propio",
        text: "Con tu marca, no una plantilla que comparten miles de webs.",
      },
      { title: "Pago único", text: `${P} € + IVA. El alojamiento es opcional (${host} €/mes).` },
      { title: "Tuya de verdad", text: "El dominio y el contenido son tuyos, por escrito." },
      {
        title: "Ligera",
        text: "Solo el código que tu web necesita: carga rápido y Google lo agradece.",
      },
    ],
    price: {
      label: basePlan.name,
      value: `${P} € + IVA`,
      note: "Pago único. Te ayudamos a trasladar tu web actual.",
    },
    compare: {
      caption: "Web a medida frente a constructores",
      head: ["", "COMA Web Esencial", "Constructor (Wix, Squarespace…)", "WordPress con plantilla"],
      rows: [
        ["Quién la hace", "Nosotros", "Tú", "Tú o un técnico"],
        ["Diseño", "Propio, con tu marca", "Plantilla compartida", "Plantilla o tema"],
        [
          "Cómo se paga",
          `${P} € + IVA, una vez`,
          "Cuota mensual o anual",
          "Hosting, plugins y mantenimiento",
        ],
        [
          "Si te vas",
          "Te llevas dominio y contenido",
          "El diseño no suele poder exportarse",
          "Te la llevas si sabes migrarla",
        ],
        [
          "Mantenimiento",
          `Opcional, ${host} €/mes`,
          "Incluido en la cuota",
          "Actualizaciones a tu cargo",
        ],
      ],
    },
    faq: [
      {
        title: "¿Puedo editar mi web yo mismo, como en Wix?",
        text: "Podemos dejarla preparada para que cambies lo básico, o encargarnos nosotros de los cambios. Lo decidimos al empezar.",
      },
      {
        title: "¿Me pasáis mi web de Wix a una web propia?",
        text: "Sí. Trasladamos textos e imágenes, conectamos tu dominio y redirigimos las direcciones antiguas.",
      },
      {
        title: "¿Sale más caro a largo plazo?",
        text: `Haz la cuenta: ${P} € una vez, más ${host} €/mes de alojamiento si lo quieres, frente a la cuota del plan que elijas multiplicada por los años que tengas la web.`,
      },
    ],
    service: "diseno-web",
    niches: ["fotografos", "tiendas-y-comercio-local", "yoga-y-pilates"],
    related: ["pagina-web-barata", "rediseno-web", "agencia-diseno-web-barata"],
    cta: "¿Te pasamos a una web propia?",
    searches: [
      "alternativa a wix",
      "wix o diseñador web",
      "wix vs web a medida",
      "pasar web de wix a otro sitio",
      "alternativa a squarespace",
    ],
  },
  {
    slug: "agencia-diseno-web-barata",
    name: "Agencia de diseño web económica",
    group: "web",
    title: `Agencia de diseño web barata con ${years()} años de oficio`,
    description: `Agencia de diseño web económica con sede en Palma desde ${site.since}: webs desde ${P} € + IVA, precios publicados, propuesta por escrito y trato personal. Toda España.`,
    eyebrow: `Agencia · desde ${site.since}`,
    h1: "Precio de plataforma, trato de agencia",
    lead: `Somos una agencia de Palma con ${years()} años haciendo comunicación. Publicamos los precios, damos propuesta cerrada por escrito y te contestan personas.`,
    why: {
      title: "Cómo comparar agencias sin fiarte de los adjetivos",
      paragraphs: [
        "Todas las agencias dicen ser las mejores. Para comparar, fíjate en lo que se puede comprobar: si publican precios, qué incluyen, si el dominio es tuyo, quién te atiende y desde cuándo existen.",
        `Empezamos en ${site.since} con revistas, radio y televisión, y hoy hacemos webs, SEO, posicionamiento en IA, automatizaciones y agentes. Trabajamos con pymes de Mallorca y, desde ${site.spainSince}, de toda España.`,
      ],
    },
    points: [
      {
        title: "Precios publicados",
        text: "Presupuesto en directo en /precios/: ves el total antes de escribirnos.",
      },
      {
        title: "Propuesta por escrito",
        text: "Alcance, plazos y precio cerrados antes de empezar.",
      },
      { title: `Desde ${site.since}`, text: `Referencias como ${refs.slice(0, 4).join(", ")}.` },
      {
        title: "Todo en un sitio",
        text: "Web, correo, SEO, IA y automatizaciones, sin ir de proveedor en proveedor.",
      },
    ],
    price: {
      label: basePlan.name,
      value: `${P} € + IVA`,
      note: "Pago único. Extras y servicios mensuales con precio visible.",
    },
    faq: [
      {
        title: `¿Cómo podéis cobrar ${P} € por una web?`,
        text: "Con un proceso propio de diseño y maquetación que ahorra horas sin recortar en diseño ni velocidad. Lo que se sale de la Web Esencial se presupuesta aparte.",
      },
      {
        title: "¿Trabajáis fuera de Mallorca?",
        text: `Sí. Desde ${site.spainSince} trabajamos con empresas de toda España en remoto, con el mismo precio.`,
      },
      {
        title: "¿Con quién habéis trabajado?",
        text: `${refs.join(", ")} y más de ${trust.pymes} pymes.`,
      },
    ],
    service: "diseno-web",
    niches: ["clinicas-dentales", "farmacias", "abogados", "hoteles"],
    related: ["pagina-web-barata", "alternativa-a-wix", "pagina-web-para-autonomos"],
    cta: "¿Hablamos de tu proyecto?",
    searches: [
      "agencia de diseño web barata",
      "agencia diseño web económica",
      "agencia web pymes",
      "mejor precio diseño web",
      "agencia diseño web Mallorca precios",
    ],
  },

  /* -------------------------------------------------------- Automatizaciones */
  {
    slug: "automatizar-whatsapp",
    name: "Automatizar WhatsApp",
    group: "automatiza",
    title: "Automatizar WhatsApp: citas, avisos y respuestas",
    description:
      "Automatiza WhatsApp en tu negocio: confirmaciones de cita, recordatorios, avisos de pedido listo y respuestas con IA, con la API oficial de WhatsApp Business.",
    eyebrow: "WhatsApp automatizado",
    h1: "WhatsApp que trabaja solo: avisos, citas y respuestas",
    lead: "Confirmaciones, recordatorios y avisos que salen solos, y un asistente con IA que responde lo de siempre y te pasa lo importante.",
    why: {
      title: "Tus clientes ya están en WhatsApp",
      paragraphs: [
        "Para muchos negocios WhatsApp es el canal principal: citas, presupuestos, dudas. El problema es que se atiende a mano, entre cliente y cliente, y los mensajes se pierden.",
        "Automatizarlo bien significa usar la API oficial de WhatsApp Business, plantillas aprobadas para los avisos y un límite claro: la IA responde lo que sabe y te pasa el resto.",
      ],
    },
    points: [
      {
        title: "Confirmaciones y recordatorios",
        text: "Cada cita confirmada y recordada el día antes, sin que nadie escriba.",
      },
      {
        title: "Avisos de estado",
        text: "Pedido listo, coche reparado, presupuesto enviado: el cliente se entera al momento.",
      },
      {
        title: "Respuestas con IA",
        text: "Horario, precios y disponibilidad respondidos en segundos y en su idioma.",
      },
      {
        title: "Conectado a tus herramientas",
        text: "Agenda, CRM u hojas de cálculo: los datos van solos donde tienen que ir.",
      },
    ],
    price: {
      ...custom,
      note: "Depende de los mensajes, las integraciones y el volumen. Los mensajes de WhatsApp tienen además el coste que fija Meta.",
    },
    faq: [
      {
        title: "¿Me pueden bloquear el número?",
        text: "Con la API oficial y plantillas aprobadas el riesgo es mínimo. Lo arriesgado son las herramientas no oficiales que automatizan la app normal.",
      },
      {
        title: "¿Cumple con el RGPD?",
        text: "Pedimos consentimiento para los avisos, informamos de que responde una IA cuando es así y guardamos solo los datos necesarios.",
      },
      {
        title: "¿Funciona con mi agenda?",
        text: "Sí, lo conectamos con Google Calendar, Outlook o tu programa de citas cuando permite integrarse.",
      },
    ],
    service: "automatizaciones",
    niches: [
      "peluquerias-y-barberias",
      "talleres-mecanicos",
      "clinicas-dentales",
      "asesorias-y-gestorias",
      "restaurantes",
      "traslados-y-taxis",
    ],
    related: ["recordatorios-de-citas", "chatbot-para-web", "crm-para-pymes"],
    cta: "¿Qué mensajes te gustaría no volver a escribir?",
    searches: [
      "automatizar whatsapp negocio",
      "whatsapp business api",
      "recordatorios whatsapp automáticos",
      "chatbot whatsapp ia",
      "automatización whatsapp pymes",
    ],
  },
  {
    slug: "chatbot-para-web",
    name: "Chatbot con IA para tu web",
    group: "automatiza",
    title: "Chatbot con IA para tu web: atiende 24/7 en varios idiomas",
    description:
      "Chatbot con inteligencia artificial entrenado con la información de tu negocio: responde dudas, recoge contactos y reservas 24/7, en tu idioma y en el del turista.",
    eyebrow: "Chatbot con IA",
    h1: "Un chatbot que sabe de tu negocio y no se inventa respuestas",
    lead: "Responde con tu información validada, en el idioma del cliente, a cualquier hora. Y cuando no sabe algo, te lo pasa.",
    why: {
      title: "Lo que separa un buen chatbot de uno molesto",
      paragraphs: [
        "Los chatbots de botones que no entienden nada han hecho mucho daño. Un agente de IA bien hecho entiende la pregunta, responde con la información de tu negocio y deja claro que es una IA.",
        "La clave son los límites: qué puede responder, qué datos puede pedir y cuándo pasa la conversación a una persona. Eso lo definimos contigo antes de ponerlo en marcha.",
      ],
    },
    points: [
      {
        title: "Entrenado con tu información",
        text: "Servicios, precios, horarios y políticas que tú validas.",
      },
      {
        title: "Varios idiomas",
        text: "Español, catalán, inglés, alemán… responde en el idioma en que le escriben.",
      },
      {
        title: "Recoge contactos y reservas",
        text: "Cualifica la consulta y te la envía con todo el contexto.",
      },
      {
        title: "Supervisión humana",
        text: "Revisamos conversaciones y deriva a tu equipo cuando hace falta.",
      },
    ],
    price: custom,
    faq: [
      {
        title: "¿Se puede equivocar?",
        text: "Cualquier IA puede hacerlo. Por eso responde solo con información validada, reconoce cuando no sabe y deriva a una persona.",
      },
      {
        title: "¿Hay que avisar de que es una IA?",
        text: "Sí: el Reglamento europeo de IA exige informar a la persona de que habla con una IA. Nuestros agentes lo dicen desde el primer mensaje.",
      },
      {
        title: "¿Puede estar también en WhatsApp?",
        text: "Sí. El mismo agente puede atender en la web, en WhatsApp y por email.",
      },
    ],
    service: "agentes-ia",
    niches: [
      "hoteles",
      "clinicas-dentales",
      "inmobiliarias",
      "alquiler-vacacional",
      "academias-y-escuelas-de-idiomas",
    ],
    related: ["automatizar-whatsapp", "aparecer-en-chatgpt", "crm-para-pymes"],
    cta: "¿Ponemos un asistente en tu web?",
    searches: [
      "chatbot para web con ia",
      "chatbot inteligencia artificial empresa",
      "asistente virtual para web",
      "chatbot multiidioma",
      "chatbot atención al cliente pymes",
    ],
  },
  {
    slug: "automatizar-facturas",
    name: "Automatizar facturas y cobros",
    group: "automatiza",
    title: "Automatizar facturas, cobros y gastos en tu pyme",
    description:
      "Facturas que se generan y se envían solas, avisos de cobro automáticos y gastos leídos con IA desde el email. Conectado al programa de facturación que ya usas.",
    eyebrow: "Administración automática",
    h1: "Facturas, cobros y gastos sin teclear datos a mano",
    lead: "Cada hora que pasas copiando importes de un PDF a un programa es una hora que no facturas. Esto se puede automatizar.",
    why: {
      title: "El papeleo que se come el viernes",
      paragraphs: [
        "En muchas pymes la administración es copiar y pegar: facturas que se rehacen a mano, cobros que se reclaman tarde y tickets de gasto que se acumulan hasta el trimestre.",
        "Con una automatización, la factura sale sola al cerrar el trabajo, el aviso de cobro se envía cuando vence y los gastos que llegan por email se leen con IA y se registran, con revisión humana donde hace falta.",
      ],
    },
    points: [
      {
        title: "Facturación automática",
        text: "La factura se genera y se envía al marcar el trabajo como hecho.",
      },
      { title: "Avisos de cobro", text: "Recordatorios amables antes y después del vencimiento." },
      {
        title: "Gastos leídos con IA",
        text: "Facturas de proveedores extraídas del email, con NIF, base e IVA comprobados.",
      },
      {
        title: "En tu programa de siempre",
        text: "Holded, Sage, a3, Contasol u otros, si permiten integración o exportación.",
      },
    ],
    price: custom,
    faq: [
      {
        title: "¿Tengo que cambiar de programa de facturación?",
        text: "No. Trabajamos con el que ya usas siempre que permita conectarse o exportar datos.",
      },
      {
        title: "¿Y si la IA lee mal una factura?",
        text: "Se comprueban automáticamente NIF, totales e IVA, y lo dudoso pasa a revisión humana antes de registrarse.",
      },
      {
        title: "¿Tenéis algo específico para asesorías?",
        text: "Sí: COMA para despachos recibe las facturas de los clientes por WhatsApp y email, las lee con IA y las exporta a tu programa contable.",
      },
    ],
    service: "automatizaciones",
    niches: [
      "asesorias-y-gestorias",
      "reformas-y-construccion",
      "empresas-de-limpieza",
      "talleres-mecanicos",
    ],
    related: ["crm-para-pymes", "automatizar-whatsapp", "recordatorios-de-citas"],
    cta: "¿Qué papeleo quieres quitarte de encima?",
    searches: [
      "automatizar facturas",
      "automatizar facturación pyme",
      "leer facturas con ia",
      "recordatorios de cobro automáticos",
      "automatizar contabilidad pequeña empresa",
    ],
  },
  {
    slug: "recordatorios-de-citas",
    name: "Recordatorios automáticos de citas",
    group: "automatiza",
    title: "Recordatorios automáticos de citas: menos ausencias",
    description:
      "Recordatorios de cita por WhatsApp o email que salen solos, con confirmar o cancelar en un clic. Para clínicas, peluquerías, talleres, academias y consultas.",
    eyebrow: "Recordatorios de cita",
    h1: "Que nadie se olvide de su cita",
    lead: "Un aviso el día antes, con un botón para confirmar o cancelar. La cita que se cancela a tiempo se puede volver a ocupar.",
    why: {
      title: "Una hora vacía no se recupera",
      paragraphs: [
        "Una cita a la que nadie viene es tiempo pagado que no se factura. La mayoría de ausencias no son mala fe: son olvidos.",
        "Un recordatorio automático con opción de cancelar convierte el olvido en un hueco que puedes volver a llenar, por ejemplo avisando a quien estaba en lista de espera.",
      ],
    },
    points: [
      { title: "Aviso el día antes", text: "Por WhatsApp o email, con día, hora y dirección." },
      { title: "Confirmar o cancelar", text: "Un clic y tu agenda se actualiza sola." },
      { title: "Lista de espera", text: "Si alguien cancela, se avisa al siguiente." },
      { title: "Conectado a tu agenda", text: "Google Calendar, Outlook o tu programa de citas." },
    ],
    price: {
      ...custom,
      note: `Si aún no tienes citas online, la web con reservas parte de ${booking} € + IVA.`,
    },
    faq: [
      {
        title: "¿Funciona con mi programa de citas?",
        text: "Si tu programa permite integrarse o exportar la agenda, sí. Lo comprobamos antes de darte precio.",
      },
      {
        title: "¿Y si mi cliente es mayor y no usa WhatsApp?",
        text: "Le llega por email, o el sistema prepara cada mañana la lista de quién prefiere que le llamen.",
      },
      {
        title: "¿Puedo cambiar el texto del mensaje?",
        text: "Sí. Escribimos el mensaje contigo, con tu tono y en los idiomas de tus clientes.",
      },
    ],
    service: "automatizaciones",
    niches: [
      "clinicas-dentales",
      "fisioterapeutas",
      "peluquerias-y-barberias",
      "podologos",
      "veterinarios",
      "talleres-mecanicos",
    ],
    related: ["web-con-reservas-online", "automatizar-whatsapp", "conseguir-resenas-google"],
    cta: "¿Llenamos tus huecos?",
    searches: [
      "recordatorios de citas automáticos",
      "recordatorio cita whatsapp",
      "reducir ausencias citas",
      "confirmación de citas automática",
      "recordatorios clínica dental",
    ],
  },
  {
    slug: "crm-para-pymes",
    name: "CRM sencillo para pymes",
    group: "automatiza",
    title: "CRM sencillo para pymes, conectado a tu web y WhatsApp",
    description:
      "Que ningún contacto se pierda: cada formulario, email o WhatsApp entra en un CRM sencillo, con seguimiento y recordatorios. Implantación a medida, sin monstruos.",
    eyebrow: "CRM",
    h1: "Que ningún cliente potencial se quede sin respuesta",
    lead: "Formularios, WhatsApp y email en un solo sitio: quién lo atiende, en qué punto está y cuándo toca volver a escribir.",
    why: {
      title: "Los clientes no se pierden: se olvidan",
      paragraphs: [
        "En una pyme los contactos llegan por cinco sitios y viven en la cabeza de alguien. Cuando esa persona se va de vacaciones, el presupuesto que estaba a punto de cerrarse se enfría.",
        "Un CRM sencillo, conectado a tu web y a tu correo, guarda cada oportunidad con su historial y avisa cuando toca hacer seguimiento. Sin implantar un programa enorme que nadie usa.",
      ],
    },
    points: [
      {
        title: "Todo entra solo",
        text: "Web, email, WhatsApp y anuncios llegan al mismo sitio, sin copiar datos.",
      },
      {
        title: "Seguimiento con avisos",
        text: "Recordatorio cuando un presupuesto lleva días sin respuesta.",
      },
      { title: "Historial completo", text: "Qué se habló, qué se envió y quién lo lleva." },
      {
        title: "Informes claros",
        text: "Cuántos contactos entran, de dónde y cuántos se convierten.",
      },
    ],
    price: {
      ...custom,
      note: "Usamos la herramienta que encaje (HubSpot, Pipedrive, Holded u otra) o una a medida. Te decimos las licencias antes de empezar.",
    },
    faq: [
      {
        title: "¿Qué CRM me recomendáis?",
        text: "El más sencillo que cubra lo que necesitas. A menudo basta con uno ligero bien conectado a tu web y tu correo.",
      },
      {
        title: "¿Tengo que pagar licencias?",
        text: "Depende de la herramienta y del número de usuarios. Algunas tienen plan gratuito; te lo detallamos en la propuesta.",
      },
      {
        title: "¿Lo puedo usar desde el móvil?",
        text: "Sí. Elegimos herramientas con app o versión móvil para que puedas consultarlo fuera de la oficina.",
      },
    ],
    service: "automatizaciones",
    niches: [
      "inmobiliarias",
      "reformas-y-construccion",
      "corredurias-de-seguros",
      "academias-y-escuelas-de-idiomas",
      "gestion-alquiler-vacacional",
    ],
    related: ["automatizar-whatsapp", "automatizar-facturas", "chatbot-para-web"],
    cta: "¿Ordenamos tus contactos?",
    searches: [
      "crm para pymes",
      "crm sencillo pequeña empresa",
      "implantar crm",
      "crm conectado a whatsapp",
      "seguimiento de presupuestos automático",
    ],
  },

  /* ------------------------------------------------------------ Visibilidad */
  {
    slug: "aparecer-en-chatgpt",
    name: "Posicionamiento en ChatGPT y la IA",
    group: "visibilidad",
    title: `Posicionamiento en ChatGPT, Gemini y Claude: ${geo} €/mes`,
    description: `Posicionamiento en IA (GEO) para que ChatGPT, Gemini, Claude y Perplexity conozcan y recomienden tu negocio. Desde ${geo} €/mes + IVA, sin permanencia.`,
    eyebrow: "GEO · posicionamiento en IA",
    h1: "Que la IA te recomiende cuando preguntan por lo que haces",
    lead: "Cada vez más clientes preguntan a ChatGPT o a Gemini antes de buscar en Google. Preparamos tu información para que te conozcan, te entiendan y te citen.",
    why: {
      title: "Qué se puede hacer, y qué no",
      paragraphs: [
        "Nadie puede garantizar que una IA te recomiende: decide el modelo. Lo que sí se puede conseguir es que encuentre datos claros, coherentes y verificables sobre ti en todos los sitios donde busca.",
        "Eso significa una web que diga sin ambigüedad qué haces, dónde y a qué precio; datos estructurados; ficha de Google y directorios coherentes; reseñas reales y menciones en medios. Lo medimos preguntando cada mes a los asistentes lo que preguntaría tu cliente.",
      ],
    },
    points: [
      {
        title: "Auditoría en asistentes",
        text: "Qué dicen hoy ChatGPT, Gemini, Claude, Copilot y Perplexity de ti y de tu competencia.",
      },
      {
        title: "Datos estructurados y llms.txt",
        text: "Tu información en el formato que las máquinas leen sin dudar.",
      },
      {
        title: "Una sola entidad",
        text: "Mismo nombre, dirección y datos en tu web, Google, redes y directorios.",
      },
      {
        title: "Informe mensual",
        text: "Las mismas preguntas cada mes: si apareces, cómo te describen y qué fuentes citan.",
      },
    ],
    price: {
      label: "GEO: posicionamiento en IA",
      value: `${geo} €/mes + IVA`,
      note: `Sin permanencia. Se combina bien con el SEO local (${seo} €/mes + IVA).`,
    },
    faq: [
      {
        title: "¿Me garantizáis salir en ChatGPT?",
        text: "No, y desconfía de quien lo haga. Trabajamos las señales que los asistentes usan y medimos cada mes si apareces.",
      },
      {
        title: "¿Cuánto tarda en notarse?",
        text: "Los asistentes que buscan en la web en tiempo real pueden reflejar cambios en semanas. Lo que el modelo sabe de memoria cambia con sus actualizaciones, que son menos frecuentes.",
      },
      {
        title: "¿Qué es llms.txt?",
        text: "Un archivo de texto que resume tu negocio para asistentes de IA. Es una propuesta reciente, no un estándar oficial, pero es sencillo de mantener y ayuda a que te lean bien.",
      },
    ],
    service: "seo-geo",
    niches: ["clinicas-dentales", "abogados", "hoteles", "inmobiliarias", "restaurantes"],
    related: ["aparecer-en-google-maps", "conseguir-resenas-google", "chatbot-para-web"],
    cta: "¿Vemos qué dice la IA de ti?",
    searches: [
      "posicionamiento en chatgpt",
      "aparecer en chatgpt empresa",
      "seo para ia",
      "geo generative engine optimization",
      "que chatgpt recomiende mi negocio",
      "posicionamiento en gemini y claude",
    ],
  },
  {
    slug: "aparecer-en-google-maps",
    name: "Posicionamiento en Google Maps",
    group: "visibilidad",
    title: `Posicionamiento en Google Maps desde ${seo} €/mes + IVA`,
    description:
      "Optimización de tu ficha de Google Business Profile para salir en Google Maps cuando buscan «cerca de mí»: categorías, fotos, reseñas y publicaciones cada mes.",
    eyebrow: "SEO local · Google Maps",
    h1: "Sal en Google Maps cuando te buscan cerca",
    lead: "La ficha de Google decide quién recibe la llamada en las búsquedas «cerca de mí». La dejamos completa, coherente y activa cada mes.",
    why: {
      title: "Lo que mira Google para ordenar el mapa",
      paragraphs: [
        "Google explica que ordena los resultados locales por relevancia, distancia y prominencia. La distancia no la puedes cambiar; la relevancia y la prominencia sí: categorías, servicios, fotos, reseñas y menciones.",
        "Una ficha a medio rellenar, sin fotos recientes ni respuestas a las reseñas, pierde frente a la de enfrente aunque tu negocio sea mejor.",
      ],
    },
    points: [
      {
        title: "Ficha completa",
        text: "Categorías, servicios, horario, fotos y atributos bien elegidos.",
      },
      {
        title: "Reseñas y respuestas",
        text: "Petición de reseñas a todos los clientes y respuesta a cada una.",
      },
      {
        title: "Publicaciones mensuales",
        text: "Novedades y ofertas que mantienen la ficha viva.",
      },
      {
        title: "Datos coherentes",
        text: "Nombre, dirección y teléfono iguales en tu web y en los directorios.",
      },
    ],
    price: {
      label: "SEO local",
      value: `${seo} €/mes + IVA`,
      note: "Sin permanencia. Informe mensual de visibilidad, llamadas y visitas.",
    },
    faq: [
      {
        title: "¿Necesito tener local abierto al público?",
        text: "No. Si atiendes a domicilio puedes tener una ficha de zona de servicio, sin mostrar tu dirección.",
      },
      {
        title: "¿Puedo poner una dirección en cada ciudad?",
        text: "Solo donde tengas un local real. Google prohíbe las direcciones ficticias y suspende las fichas que las usan.",
      },
      {
        title: "¿Cuánto tarda en notarse?",
        text: "Los cambios en la ficha se notan en semanas; subir posiciones con constancia lleva meses y depende de tu competencia.",
      },
    ],
    service: "seo-geo",
    niches: [
      "fontaneros-y-electricistas",
      "talleres-mecanicos",
      "peluquerias-y-barberias",
      "restaurantes",
      "farmacias",
      "veterinarios",
    ],
    related: ["conseguir-resenas-google", "aparecer-en-chatgpt", "pagina-web-para-autonomos"],
    cta: "¿Te ponemos en el mapa?",
    searches: [
      "posicionamiento google maps",
      "aparecer en google maps",
      "optimizar ficha google business profile",
      "seo local precio",
      "salir primero en google maps",
    ],
  },
  {
    slug: "conseguir-resenas-google",
    name: "Más reseñas en Google",
    group: "visibilidad",
    title: "Conseguir más reseñas en Google, de forma automática",
    description:
      "Pide reseña a cada cliente en el momento justo, por WhatsApp o email, sin filtros ni incentivos que Google prohíbe. Más reseñas reales y más peso en Google Maps.",
    eyebrow: "Reseñas",
    h1: "Más reseñas reales en Google, sin perseguir a nadie",
    lead: "Un mensaje amable después de cada servicio, con el enlace directo a tu ficha. A todos los clientes por igual, como pide Google.",
    why: {
      title: "Las reseñas deciden quién recibe la llamada",
      paragraphs: [
        "Cuando alguien busca «cerca de mí», compara estrellas y número de reseñas antes de llamar. Google indica que las reseñas cuentan para el posicionamiento local, y los asistentes de IA también las leen.",
        "La mayoría de clientes contentos no deja reseña porque nadie se lo pide en el momento adecuado. Automatizar la petición lo resuelve, dentro de las normas: sin regalos a cambio y sin pedírsela solo a quien sabes que está contento.",
      ],
    },
    points: [
      {
        title: "En el momento justo",
        text: "Tras la cita, la entrega o la estancia, cuando la experiencia está fresca.",
      },
      { title: "Enlace directo", text: "Un toque y el cliente está escribiendo en tu ficha." },
      {
        title: "Respuestas preparadas",
        text: "Borradores con IA para que contestes cada reseña en un minuto.",
      },
      {
        title: "Sin trampas",
        text: "A todos por igual y sin incentivos: lo que piden Google y la ley.",
      },
    ],
    price: {
      label: "SEO local",
      value: `${seo} €/mes + IVA`,
      note: "Incluye el trabajo de reseñas de tu ficha. La conexión con tu programa de citas o ventas se presupuesta aparte si hace falta.",
    },
    faq: [
      {
        title: "¿Puedo ofrecer un descuento a cambio de una reseña?",
        text: "No. Google prohíbe los incentivos y puede eliminar reseñas o sancionar la ficha.",
      },
      {
        title: "¿Y si me dejan una reseña negativa?",
        text: "Respóndela con calma y con datos. Una buena respuesta a una crítica genera más confianza que una ficha sin ninguna.",
      },
      {
        title: "¿Sirve para TripAdvisor o Booking?",
        text: "Sí: el enlace puede llevar a la plataforma que más te importe, con las mismas reglas de juego limpio.",
      },
    ],
    service: "seo-geo",
    niches: [
      "restaurantes",
      "clinicas-dentales",
      "talleres-mecanicos",
      "peluquerias-y-barberias",
      "hoteles",
      "fontaneros-y-electricistas",
    ],
    related: ["aparecer-en-google-maps", "recordatorios-de-citas", "aparecer-en-chatgpt"],
    cta: "¿Conseguimos esas reseñas?",
    searches: [
      "conseguir reseñas google",
      "más reseñas en google maps",
      "pedir reseñas automáticamente",
      "cómo conseguir reseñas negocio",
      "reseñas google whatsapp",
    ],
  },
];

export const solutionBySlug = (slug: string) => solutions.find((s) => s.slug === slug);
