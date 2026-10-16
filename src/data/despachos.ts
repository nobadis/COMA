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

/** Lo que hacemos, en el orden en que viaja una factura. */
export const modules: Item[] = [
  {
    title: "Un único buzón para todo",
    text: "Email, WhatsApp, fotos o una carpeta compartida: tus clientes envían como quieran y todo llega al mismo sitio, renombrado y archivado por cliente y trimestre.",
  },
  {
    title: "Lectura con IA",
    text: "Extrae emisor, NIF, fecha, bases, tipos de IVA y retenciones. Propone la cuenta contable y marca solo lo dudoso para que lo revises.",
  },
  {
    title: "Directo a tu programa",
    text: "Exportamos al formato de a3, Sage, Holded, Contasol o Excel. No cambias de software ni de forma de trabajar.",
  },
  {
    title: "Recordatorios que persiguen por ti",
    text: "Cada cliente recibe un aviso con lo que le falta y cuándo. Amable, puntual y sin que nadie del despacho tenga que escribirlo.",
  },
  {
    title: "Conciliación asistida",
    text: "Cruza movimientos del banco con facturas y señala lo que no cuadra. Tú decides, la máquina busca.",
  },
  {
    title: "Panel del cierre",
    text: "De un vistazo: qué clientes están completos, a quién le falta documentación y qué está revisado. El trimestre deja de ser una sorpresa.",
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
      "Buzón único: email, WhatsApp y carpeta compartida",
      "Lectura con IA y archivo por cliente y trimestre",
      "Exportación a Excel o CSV",
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
      "Exportación directa a tu programa contable",
      "Cuenta contable sugerida y revisión solo de lo dudoso",
      "Recordatorios automáticos a tus clientes",
      "Panel del cierre trimestral",
      "Hasta 3.000 documentos al mes y soporte prioritario",
    ],
    cta: "Quiero Despacho",
    featured: true,
  },
];

/** Se añaden cuando hacen falta. Con `href`, enlazan al servicio de COMA que ya existe. */
export const onDemand: { name: string; note: string; href?: string }[] = [
  { name: "Conciliación bancaria asistida", note: "A medida" },
  { name: "Portal del cliente con tu marca", note: "A medida" },
  {
    name: "Agente de IA que responde dudas de tus clientes",
    note: "A medida",
    href: "/agentes-ia/",
  },
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
