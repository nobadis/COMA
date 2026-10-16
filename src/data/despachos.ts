import { mailto } from "./site";
import type { Item } from "./services";

/**
 * COMA para despachos: automatización para asesorías, gestorías y despachos contables (/despachos/).
 * Todo el contenido editable de la página vive aquí: módulos, precios, extras bajo demanda y FAQ.
 * Los precios son orientativos (sin IVA): el precio final se cierra por escrito tras el diagnóstico.
 */

export const despachosSubject = "Diagnóstico gratuito para mi despacho";

/** Email con las preguntas del diagnóstico ya escritas: el despacho solo rellena. */
export const diagnosticoMail = (extra = "") =>
  mailto(
    despachosSubject,
    [
      "Hola, COMA:",
      "",
      "Me interesa automatizar mi despacho. Os dejo los datos para el diagnóstico gratuito:",
      "",
      "- Despacho y ciudad: ",
      "- Personas en el equipo: ",
      "- Número de clientes: ",
      "- Programa contable (a3, Sage, Holded, Contasol…): ",
      "- Cómo nos llegan hoy las facturas: ",
      "- Lo que más tiempo nos quita: ",
      ...(extra ? ["", extra] : []),
      "",
      "Gracias.",
    ].join("\n")
  );

export const channels = ["Email", "WhatsApp", "Foto", "PDF", "Papel", "Drive"];

/** Lo que hacemos, en el orden en que viaja una factura. Todo con tecnología que existe hoy. */
export const modules: Item[] = [
  {
    title: "Canales integrados",
    text: "Un WhatsApp del despacho, un email para cada cliente y una carpeta compartida. Y, si quieres, vamos a buscarlas: del buzón de correo del cliente y de los portales de sus proveedores. Todo cae en el mismo sitio, archivado por cliente y trimestre.",
  },
  {
    title: "Extracción con IA y comprobaciones",
    text: "Lee facturas, tickets y fotos torcidas. Saca emisor, NIF, bases, IVA y retenciones, y comprueba que el NIF es válido, que cuadra y que no está repetida.",
  },
  {
    title: "Un agente que atiende a tus clientes",
    text: "Contesta al momento por WhatsApp o email: confirma lo recibido, pide la foto que se ve mal y recuerda lo que falta. Si hace falta una persona, te pasa la conversación.",
  },
  {
    title: "Integrado con tu programa y tu banco",
    text: "Por API cuando existe (Holded) y por importación cuando no (a3, Sage, Contasol). Extractos del banco en Norma 43 para cruzar cobros y pagos con facturas.",
  },
  {
    title: "Reglas fiscales de aquí",
    text: "Retenciones al 111 o al 115, operaciones intracomunitarias al 349, inversión del sujeto pasivo, facturas simplificadas. Lo marca solo porque lo hemos diseñado con un equipo contable.",
  },
  {
    title: "Copiloto del despacho",
    text: "Pregunta en lenguaje normal y obtén la respuesta con tus datos: qué falta, quién va tarde o cuánto IVA soportado lleva un cliente. Y un resumen trimestral claro para cada cliente.",
  },
];

/** Comprobaciones automáticas de cada documento (todas son reglas o consultas reales). */
export const checks = [
  "NIF con dígito de control válido",
  "IVA intracomunitario contra VIES",
  "Base + IVA − retención = total",
  "Factura no duplicada",
  "Tipo de IVA coherente con el concepto",
  "Fecha dentro del trimestre",
  "Cuenta aprendida del proveedor",
  "Retenciones al 111 o al 115",
];

/** Con qué lo construimos: piezas probadas y abiertas, sin cajas negras. */
export const stack = [
  "WhatsApp Business API",
  "Gmail y Outlook API",
  "Email por cliente",
  "IA de visión",
  "n8n",
  "API de Holded",
  "Importación a3 · Sage · Contasol",
  "Norma 43",
  "VIES",
];

/** Por qué se nos compara con nosotros mismos: lo que hace una herramienta de captura genérica y lo que hacemos. */
export const compare: { what: string; tool: string; coma: string }[] = [
  {
    what: "WhatsApp",
    tool: "App propia o integración aparte",
    coma: "Nativo: el cliente escribe al despacho como siempre",
  },
  {
    what: "Tu programa contable",
    tool: "Te adaptas a sus conectores",
    coma: "Nos adaptamos al tuyo, por API o importación",
  },
  {
    what: "Reglas fiscales",
    tool: "Genéricas, pensadas para muchos países",
    coma: "Españolas: 111, 115, 349, simplificadas, ISP",
  },
  {
    what: "Perseguir documentación",
    tool: "Otra herramienta más",
    coma: "Agente y recordatorios en el mismo flujo",
  },
  {
    what: "Puesta en marcha",
    tool: "Tú configuras, tú formas al equipo",
    coma: "Lo montamos, lo mantenemos y lo mejoramos",
  },
  {
    what: "Interlocutor",
    tool: "Soporte por tickets",
    coma: "Equipo técnico en Palma y equipo contable detrás",
  },
];

export interface DeskPlan {
  id: string;
  name: string;
  /** Pago único de puesta en marcha (null = gratis). */
  setup: number | null;
  /** Cuota mensual (null = sin cuota). */
  month: number | null;
  /** Texto que sustituye al precio cuando no hay importe. */
  priceLabel?: string;
  /** Documentos al mes incluidos en la cuota. */
  docs?: number;
  /** Precio por documento por encima de lo incluido (€). */
  extra?: number;
  pitch: string;
  includes: string[];
  cta: string;
  featured?: boolean;
}

/**
 * Precios sin IVA. Lógica: la puesta en marcha paga las horas de montaje; la cuota cubre la
 * infraestructura (IA, WhatsApp, servidores) con margen; el volumen está acotado y el exceso se
 * cobra por documento, muy por encima de su coste. Así ningún plan es ilimitado.
 */
export const plans: DeskPlan[] = [
  {
    id: "diagnostico",
    name: "Diagnóstico",
    setup: null,
    month: null,
    priceLabel: "Gratis",
    pitch:
      "30 minutos con nuestro equipo técnico y contable. Salimos con tu mapa de procesos y las horas que puedes recuperar.",
    includes: [
      "Revisión de cómo entra y se registra hoy la documentación",
      "Estimación de horas y euros recuperables al mes",
      "Propuesta con alcance, plazos y precio cerrado",
      "Piloto opcional de 30 días con 5 clientes: 290 €, que se descuentan de la puesta en marcha",
    ],
    cta: "Pedir diagnóstico",
  },
  {
    id: "recepcion",
    name: "Recepción",
    setup: 690,
    month: 99,
    docs: 500,
    extra: 0.15,
    pitch: "Para dejar de buscar facturas. Todo llega, se lee y se ordena solo.",
    includes: [
      "Email para cada cliente, WhatsApp de recepción y carpeta compartida",
      "Extracción con IA y 8 comprobaciones automáticas",
      "Archivo por cliente y trimestre, exportación a Excel o CSV",
      "Panel con lo recibido y lo pendiente",
    ],
    cta: "Quiero Recepción",
  },
  {
    id: "despacho",
    name: "Despacho",
    setup: 1490,
    month: 249,
    docs: 1500,
    extra: 0.1,
    pitch: "Para dejar de teclear y de perseguir. El trimestre, bajo control.",
    includes: [
      "Todo lo de Recepción",
      "Integración con tu programa contable (API o importación)",
      "Agente de WhatsApp y email con el nombre de tu despacho",
      "Recordatorios automáticos a clientes (hasta 1.000 al mes)",
      "Cuenta aprendida por proveedor, panel del cierre y copiloto",
      "1 hora al mes de ajustes y soporte prioritario",
    ],
    cta: "Quiero Despacho",
    featured: true,
  },
];

/** Para volúmenes grandes: siempre a medida, con un suelo que protege el margen. */
export const escala = {
  name: "Escala",
  from: 490,
  docs: 4000,
  text: "Más de 4.000 documentos al mes, varias oficinas o integraciones propias.",
};

/** Las condiciones, a la vista: sin sorpresas ni para el despacho ni para COMA. */
export const terms = [
  "Cuenta como documento cada factura o ticket procesado. Los duplicados detectados no cuentan.",
  "Si un mes te pasas del volumen incluido, el exceso se cobra por documento. Te avisamos al llegar al 80 % y nunca cortamos el servicio.",
  "Pago anual por adelantado: 2 meses gratis.",
  "Sin permanencia: cuota mensual y baja con 30 días de aviso.",
  "Flujos o integraciones nuevas fuera del plan: presupuesto cerrado antes de empezar.",
  "Mensajes de WhatsApp de plantilla por encima de lo incluido: coste de Meta repercutido, sin margen.",
];

/** Se añaden cuando hacen falta. Con `href`, enlazan al servicio de COMA que ya existe. */
export const onDemand: { name: string; note: string; href?: string }[] = [
  { name: "Recogida automática de facturas (email y portales)", note: "9 € cliente/mes" },
  { name: "Conciliación con el banco (Norma 43 o PSD2)", note: "Desde 79 €/mes" },
  { name: "Resumen trimestral automático para cada cliente", note: "Desde 49 €/mes" },
  {
    name: "Agente de IA para consultas fiscales de clientes",
    note: "A medida",
    href: "/agentes-ia/",
  },
  { name: "Portal del cliente con tu marca", note: "Desde 990 €" },
  { name: "Integraciones con tu CRM o ERP", note: "A medida", href: "/automatizaciones/" },
  { name: "Firma electrónica de documentos", note: "Desde 29 €/mes" },
  { name: "Digitalización del archivo histórico", note: "0,08 €/doc" },
  { name: "Preparación para Verifactu y factura electrónica", note: "A medida" },
  { name: "Formación para tu equipo", note: "120 €/sesión" },
  { name: "Web para el despacho", note: "Desde 99 €", href: "/diseno-web/" },
];

export const steps: Item[] = [
  {
    title: "Diagnóstico",
    text: "30 minutos gratis. Vemos cómo entra hoy la documentación y dónde se van las horas.",
  },
  {
    title: "Piloto con 5 clientes",
    text: "30 días con clientes reales por 290 €, que se descuentan de la puesta en marcha si seguimos.",
  },
  {
    title: "Puesta en marcha",
    text: "Extendemos a todo el despacho, formamos al equipo y avisamos a tus clientes por ti.",
  },
  {
    title: "Mejora continua",
    text: "Medimos las horas ahorradas cada trimestre y ajustamos lo que haga falta.",
  },
];

export const faq: Item[] = [
  {
    title: "¿Podéis ir a buscar las facturas sin que el cliente las mande?",
    text: "En buena parte, sí. Con permiso del cliente leemos su buzón de correo (Gmail u Outlook) y descargamos las facturas que le llegan, también las de enlace. De plataformas con API o exportación (Amazon, Google, Meta, Stripe, Shopify…) las traemos directamente, y para portales de suministros y telefonía usamos conectores especializados. Todo con acceso autorizado y revocable. Lo que no se pueda recoger solo, lo pide el agente.",
  },
  {
    title: "¿Qué pasa si un mes proceso más documentos de los incluidos?",
    text: "Nada grave: te avisamos al 80 %, no cortamos nada y el exceso se cobra por documento (0,15 € en Recepción y 0,10 € en Despacho). Si te pasas a menudo, te proponemos el plan que te sale más barato.",
  },
  {
    title: "¿Tengo que cambiar de programa contable?",
    text: "No. Nos adaptamos al que ya usas (a3, Sage, Holded, Contasol u otros) y preparamos los datos en el formato que importa. Si tu programa no permite importar, lo vemos en el diagnóstico.",
  },
  {
    title: "¿Y si la IA se equivoca?",
    text: "La IA propone y tu equipo decide. Todo lo que tiene dudas (un NIF ilegible, un tipo de IVA raro, una factura duplicada) se marca para revisarlo. Lo que está claro pasa solo; lo dudoso, nunca.",
  },
  {
    title: "¿En qué os diferenciáis de Dext, Holded o las herramientas de captura?",
    text: "Esas herramientas son buenas, pero te venden un programa más que tu equipo y tus clientes tienen que adoptar. Nosotros montamos el flujo completo sobre lo que ya usas: WhatsApp, email, tu programa contable y tu banco, con reglas fiscales españolas, y lo mantenemos. Si ya usas una de ellas, la integramos.",
  },
  {
    title: "¿Qué IA usáis? ¿Mis datos entrenan a nadie?",
    text: "Usamos modelos de primer nivel en versión empresarial, con acuerdo de tratamiento de datos y sin uso de tu información para entrenar. Nunca la versión gratuita de un chat. Y el agente solo hace lo que le permitimos: confirmar, pedir y avisar.",
  },
  {
    title: "¿Mis clientes tienen que instalar algo?",
    text: "No. Siguen enviando las facturas por email, WhatsApp o foto, como hasta ahora. Les damos una dirección o un número y listo.",
  },
  {
    title: "¿Es seguro? ¿Qué pasa con la protección de datos?",
    text: "Trabajamos como encargados del tratamiento con contrato firmado, elegimos proveedores con servidores en la Unión Europea y damos acceso solo a quien lo necesita. Todo queda documentado.",
  },
  {
    title: "¿Cuánto se tarda en ponerlo en marcha?",
    text: "El piloto suele estar funcionando en un par de semanas. El despliegue completo depende del número de clientes y de lo que queramos conectar; te damos fechas concretas en la propuesta.",
  },
  {
    title: "¿Sirve para un despacho pequeño?",
    text: "Sobre todo para un despacho pequeño. Cuando sois dos o tres personas, cada hora que no se teclea es una hora para asesorar o para captar clientes.",
  },
  {
    title: "¿Y Verifactu y la factura electrónica?",
    text: "Los calendarios han cambiado varias veces. Montamos los procesos para que, cuando lleguen las obligaciones, tu despacho y tus clientes ya trabajen con datos digitales y ordenados.",
  },
  {
    title: "¿Hay permanencia?",
    text: "No. La cuota es mensual y te puedes dar de baja con 30 días de aviso. Si pagas el año por adelantado, te regalamos 2 meses. Y te entregamos la documentación de todo lo que hemos montado.",
  },
];
