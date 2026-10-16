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

/**
 * El producto, acotado a propósito: cinco piezas que se construyen una vez y se replican en cada
 * despacho. Nada que dependa de usuarios y contraseñas de terceros ni de asesorar en nombre de nadie.
 */
export const modules: Item[] = [
  {
    title: "Canales integrados",
    text: "Un WhatsApp del despacho, un email para cada cliente y una carpeta compartida. Si el cliente quiere, también recogemos las facturas que le llegan a su correo. Todo cae en el mismo sitio, por cliente y trimestre.",
  },
  {
    title: "Extracción con IA y comprobaciones",
    text: "Lee facturas, tickets y fotos. Saca emisor, NIF, bases, IVA y retenciones, propone la cuenta según el histórico del proveedor y marca solo lo que hay que revisar.",
  },
  {
    title: "Un agente que confirma y pide",
    text: "Contesta al momento por WhatsApp o email: confirma lo recibido, pide la foto que no se lee y recuerda lo que falta. No asesora: las consultas pasan a tu equipo.",
  },
  {
    title: "Directo a tu programa contable",
    text: "Fichero de importación para a3, Sage o Contasol, o directo por API a Holded. No cambias de software ni de forma de trabajar.",
  },
  {
    title: "Panel del cierre",
    text: "Qué clientes están completos, a quién le falta qué y qué está revisado. Con recordatorios automáticos para que el trimestre no sea una sorpresa.",
  },
];

/** Comprobaciones automáticas de cada documento (todas son reglas o consultas reales). */
export const checks = [
  "NIF con dígito de control válido",
  "IVA intracomunitario contra VIES",
  "Base + IVA − retención = total",
  "Factura no duplicada",
  "Fecha dentro del trimestre",
  "Retenciones al 111 o al 115",
];

/** Con qué lo construimos: piezas probadas y abiertas, sin cajas negras. */
export const stack = [
  "WhatsApp Business API",
  "Gmail y Outlook API",
  "IA de visión",
  "n8n",
  "API de Holded",
  "Importación a3 · Sage · Contasol",
  "VIES",
];

/** Lo que hace una herramienta de captura genérica y lo que hacemos. */
export const compare: { what: string; tool: string; coma: string }[] = [
  {
    what: "WhatsApp",
    tool: "App propia o integración aparte",
    coma: "Nativo: el cliente escribe al despacho como siempre",
  },
  {
    what: "Tu programa contable",
    tool: "Te adaptas a sus conectores",
    coma: "Nos adaptamos al tuyo",
  },
  {
    what: "Reglas fiscales",
    tool: "Genéricas, pensadas para muchos países",
    coma: "Españolas: 111, 115, simplificadas, VIES",
  },
  {
    what: "Perseguir documentación",
    tool: "Otra herramienta más",
    coma: "Agente y recordatorios en el mismo flujo",
  },
  {
    what: "Puesta en marcha",
    tool: "Tú configuras y formas al equipo",
    coma: "Lo montamos y lo mantenemos, con equipo contable detrás",
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
 * Precios sin IVA. La puesta en marcha paga las horas de montaje; la cuota cubre la infraestructura
 * (IA, WhatsApp, servidores) con margen; el volumen está acotado y el exceso se cobra por documento,
 * muy por encima de su coste. Ningún plan es ilimitado.
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
      "Estimación de horas recuperables al mes",
      "Propuesta con alcance, plazos y precio cerrado",
      "Piloto opcional de 30 días con 5 clientes: 290 €, descontables de la puesta en marcha",
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
      "Email para cada cliente, WhatsApp de recepción y carpeta",
      "Extracción con IA y comprobaciones automáticas",
      "Archivo por cliente y trimestre, exportación a Excel o CSV",
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
      "Exportación directa a tu programa contable",
      "Agente de WhatsApp y email con el nombre de tu despacho",
      "Panel del cierre y hasta 1.000 recordatorios al mes",
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
  text: "Más de 4.000 documentos al mes o varias oficinas.",
};

/** Las condiciones, a la vista: sin sorpresas ni para el despacho ni para COMA. */
export const terms = [
  "Cuenta como documento cada factura o ticket procesado. Los duplicados detectados no cuentan.",
  "Si un mes te pasas del volumen incluido, el exceso se cobra por documento. Te avisamos al 80 % y nunca cortamos el servicio.",
  "Pago anual por adelantado: 2 meses gratis.",
  "Sin permanencia: cuota mensual y baja con 30 días de aviso.",
  "Cambios fuera del plan: presupuesto cerrado antes de empezar.",
  "Mensajes de WhatsApp de plantilla por encima de lo incluido: coste de Meta repercutido, sin margen.",
];

/** Pocos extras y todos con precio. Con `href`, enlazan al servicio de COMA que ya existe. */
export const onDemand: { name: string; note: string; href?: string }[] = [
  { name: "Recogida desde el correo del cliente", note: "9 € cliente/mes" },
  { name: "Digitalización del archivo histórico", note: "0,08 €/doc" },
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
    title: "¿Tengo que cambiar de programa contable?",
    text: "No. Preparamos el fichero de importación de a3, Sage o Contasol, o enviamos los datos por API a Holded. Si usas otro programa, lo vemos en el diagnóstico.",
  },
  {
    title: "¿Y si la IA se equivoca?",
    text: "La IA propone y tu equipo decide. Lo que tiene dudas (un NIF que no cuadra, una factura repetida, una foto ilegible) se marca para revisarlo. Lo claro pasa solo; lo dudoso, nunca.",
  },
  {
    title: "¿El agente asesora a mis clientes?",
    text: "No. Confirma lo recibido, pide lo que falta y avisa. Cualquier consulta de asesoría pasa a tu equipo con la conversación completa.",
  },
  {
    title: "¿Podéis ir a buscar las facturas sin que el cliente las mande?",
    text: "Sí, desde su correo: con su permiso (Gmail u Outlook) detectamos las facturas que le llegan y las traemos solas. Los portales que piden usuario y contraseña no los tocamos: ahí el agente se lo pide al cliente.",
  },
  {
    title: "¿Qué pasa si un mes proceso más documentos de los incluidos?",
    text: "Te avisamos al 80 %, no cortamos nada y el exceso se cobra por documento (0,15 € en Recepción y 0,10 € en Despacho). Si te pasas a menudo, te proponemos el plan que te sale más barato.",
  },
  {
    title: "¿En qué os diferenciáis de Dext, Holded o las herramientas de captura?",
    text: "Esas herramientas son buenas, pero son un programa más que tu equipo y tus clientes tienen que adoptar. Nosotros montamos el flujo sobre lo que ya usas (WhatsApp, email y tu programa contable), con reglas fiscales españolas, y lo mantenemos.",
  },
  {
    title: "¿Es seguro? ¿Qué IA usáis?",
    text: "Firmamos contrato de encargado del tratamiento, usamos proveedores con servidores en la UE y modelos de IA en versión empresarial que no entrenan con tus datos. Nunca la versión gratuita de un chat.",
  },
  {
    title: "¿Hay permanencia?",
    text: "No. La cuota es mensual y te puedes dar de baja con 30 días de aviso. Si pagas el año por adelantado, te regalamos 2 meses. Y te entregamos la documentación de todo lo que hemos montado.",
  },
];
