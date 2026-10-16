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
    text: "Un WhatsApp del despacho, un email para cada cliente y una carpeta compartida. Tus clientes envían como siempre y todo cae en el mismo sitio, archivado por cliente y trimestre.",
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
    text: "Retenciones al 111 o al 115, operaciones intracomunitarias al 349, inversión del sujeto pasivo, facturas simplificadas. Lo marca solo porque lo hemos diseñado con un contable.",
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
    coma: "Un equipo en Palma y un contable detrás",
  },
];

export interface DeskPlan {
  id: string;
  name: string;
  /** Pago único de puesta en marcha (null = gratis o a medida). */
  setup: number | null;
  /** Cuota mensual (null = sin cuota o a medida). */
  month: number | null;
  /** Texto que sustituye al precio cuando no hay importe. */
  priceLabel?: string;
  pitch: string;
  includes: string[];
  cta: string;
  featured?: boolean;
}

export const plans: DeskPlan[] = [
  {
    id: "diagnostico",
    name: "Diagnóstico",
    setup: null,
    month: null,
    priceLabel: "Gratis",
    pitch:
      "30 minutos con nosotros y un contable. Salimos con tu mapa de procesos y las horas que puedes recuperar.",
    includes: [
      "Revisión de cómo entra y se registra hoy la documentación",
      "Estimación de horas recuperables al mes",
      "Propuesta con alcance, plazos y precio cerrado",
    ],
    cta: "Pedir diagnóstico",
  },
  {
    id: "recepcion",
    name: "Recepción",
    setup: 490,
    month: 59,
    pitch: "Para dejar de buscar facturas. Todo llega, se lee y se ordena solo.",
    includes: [
      "WhatsApp del despacho, email por cliente y carpeta compartida",
      "Extracción con IA y 8 comprobaciones automáticas",
      "Archivo por cliente y trimestre, exportación a Excel o CSV",
      "Hasta 1.000 documentos al mes",
    ],
    cta: "Quiero Recepción",
  },
  {
    id: "despacho",
    name: "Despacho",
    setup: 990,
    month: 149,
    pitch: "Para dejar de teclear y de perseguir. El trimestre, bajo control.",
    includes: [
      "Todo lo de Recepción",
      "Integración con tu programa contable (API o importación)",
      "Agente de WhatsApp y email que atiende y persigue por ti",
      "Cuenta aprendida por proveedor y revisión solo de lo dudoso",
      "Panel del cierre y copiloto del despacho",
      "Hasta 3.000 documentos al mes y soporte prioritario",
    ],
    cta: "Quiero Despacho",
    featured: true,
  },
];

/** Se añaden cuando hacen falta. Con `href`, enlazan al servicio de COMA que ya existe. */
export const onDemand: { name: string; note: string; href?: string }[] = [
  { name: "Conciliación con el banco (Norma 43 o conexión PSD2)", note: "A medida" },
  { name: "Portal del cliente con tu marca", note: "A medida" },
  {
    name: "Agente de IA para consultas fiscales de clientes",
    note: "A medida",
    href: "/agentes-ia/",
  },
  { name: "Resumen trimestral automático para cada cliente", note: "A medida" },
  { name: "Integraciones a medida con tu CRM o ERP", note: "A medida", href: "/automatizaciones/" },
  { name: "Firma electrónica de documentos", note: "A medida" },
  { name: "Digitalización del archivo histórico", note: "Por volumen" },
  { name: "Preparación para Verifactu y factura electrónica", note: "A medida" },
  { name: "Formación para tu equipo", note: "Por sesión" },
  { name: "Web para el despacho", note: "Desde 99 €", href: "/diseno-web/" },
];

export const steps: Item[] = [
  {
    title: "Diagnóstico",
    text: "30 minutos gratis. Vemos cómo entra hoy la documentación y dónde se van las horas.",
  },
  {
    title: "Piloto con 5 clientes",
    text: "Lo montamos con unos pocos clientes reales para que veas el ahorro antes de ampliarlo.",
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
    text: "No. La cuota es mensual y puedes darte de baja cuando quieras. Te entregamos la documentación de todo lo que hemos montado.",
  },
];
