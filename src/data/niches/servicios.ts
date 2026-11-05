import { basePlan } from "../pricing";
import type { Niche } from "./types";

/** Profesionales, hogar, comercio y formación. Reglas de redacción en ./types.ts. */
export const servicios: Niche[] = [
  {
    slug: "abogados",
    name: "Abogados",
    group: "profesionales",
    forWho: "abogados y despachos de abogados",
    title: `Web para abogados y despachos desde ${basePlan.price} €`,
    description: `Página web para despachos de abogados con áreas de práctica, primera consulta y blog de dudas legales, desde ${basePlan.price} € + IVA. Seria y discreta.`,
    h1: "Webs para abogados: que te encuentren por el problema que resuelves",
    lead: "Áreas de práctica explicadas sin jerga, una vía discreta para pedir primera consulta y respuestas a las dudas que la gente busca antes de llamar a un abogado.",
    context: [
      "Quien necesita un abogado no busca un nombre: busca «despido improcedente», «herencia con un hermano que no firma» o «me han denegado la residencia». Si tu web solo dice «civil, penal y mercantil», no apareces en esas búsquedas ni en la respuesta de la IA.",
      "Una web por áreas de práctica, con artículos que responden dudas reales, filtra las consultas: llegan clientes que ya saben qué haces y cómo trabajas. En COMA hemos trabajado con despachos profesionales y aquí la discreción pesa tanto como el diseño.",
    ],
    mallorca:
      "En Baleares muchas consultas llegan de residentes extranjeros: compraventas, herencias con bienes en dos países, residencia o arrendamientos. Si los atiendes, tus áreas clave en inglés o alemán te hacen visible para ellos. Para el cliente local pesan Google Maps y la cercanía.",
    web: [
      {
        title: "Una página por área de práctica",
        text: "Familia, laboral, extranjería, herencias: qué casos llevas, cómo trabajas y qué documentos conviene traer a la primera reunión.",
      },
      {
        title: "Primera consulta sin fricción",
        text: "Formulario breve para describir el caso y elegir presencial, teléfono o videollamada, con el aviso de privacidad bien visible.",
      },
      {
        title: "Equipo y colegiación",
        text: "Cada abogado con su formación, idiomas y número de colegiado, que es lo primero que comprueba un cliente prudente.",
      },
      {
        title: "Blog de dudas legales",
        text: "Artículos que responden lo que la gente pregunta («¿puedo desheredar a un hijo?») sin dar asesoramiento de un caso concreto en abierto.",
      },
    ],
    automations: [
      {
        title: "Consultas clasificadas por área",
        text: "Cada consulta entrante se etiqueta por área y urgencia y llega al abogado que la lleva, sin reenviar correos.",
      },
      {
        title: "Documentación del cliente, ordenada",
        text: "Enlace privado para que el cliente suba DNI, contratos o escrituras, que quedan guardados en la carpeta de su asunto.",
      },
      {
        title: "Recordatorio de reuniones",
        text: "Aviso automático al cliente el día antes de la cita, con dirección del despacho o enlace a la videollamada.",
      },
    ],
    agent:
      "Un agente de IA atiende fuera de horario, explica qué áreas lleva el despacho, recoge los datos básicos del caso y propone hueco para la primera consulta. No da asesoramiento jurídico ni valora si un asunto tiene posibilidades: eso lo hace siempre un abogado.",
    pack: [{ id: "blog" }, { id: "seo" }],
    packNote:
      "Blog para responder dudas legales y SEO local para que te encuentre quien busca abogado en tu ciudad.",
    faq: [
      {
        title: "¿Qué puedo publicar sin saltarme las normas de publicidad?",
        text: "La publicidad está permitida, pero el Código Deontológico de la Abogacía pone límites: no prometer resultados, no citar clientes ni asuntos sin su consentimiento y respetar el secreto profesional. Redactamos con esa prudencia; si dudas, consulta a tu colegio.",
      },
      {
        title: "¿Los datos del formulario están protegidos?",
        text: "La web va con certificado SSL, el formulario pide solo lo imprescindible e incluye el aviso de privacidad. Las consultas llegan a tu correo o a tu programa de gestión del despacho.",
      },
      {
        title: "¿Puedo escribir yo los artículos del blog?",
        text: "Sí. Los publicas desde un panel sencillo. El extra de blog incluye los primeros artículos, que revisas y firmas antes de que salgan.",
      },
      {
        title: "¿Me conviene una web distinta para cada área?",
        text: "Normalmente no: una sola web con una página bien trabajada por área es más fácil de mantener y concentra la autoridad. Si llevas una especialidad muy distinta del resto, lo valoramos contigo.",
      },
    ],
    searches: [
      "página web para abogados",
      "diseño web despacho de abogados",
      "web abogado precio",
      "marketing jurídico para abogados",
      "captar clientes abogado",
      "web para abogados en Mallorca",
    ],
    related: ["asesorias-y-gestorias", "inmobiliarias", "corredurias-de-seguros"],
  },
  {
    slug: "asesorias-y-gestorias",
    name: "Asesorías y gestorías",
    group: "profesionales",
    forWho: "asesorías y gestorías",
    title: `Diseño web para asesorías y gestorías desde ${basePlan.price} €`,
    description: `Web para asesorías fiscales, laborales y gestorías con área de documentos y calendario fiscal, desde ${basePlan.price} € + IVA. Más clientes, menos papeles.`,
    h1: "Webs para asesorías y gestorías que captan clientes y ordenan papeles",
    lead: "Servicios claros para autónomos y empresas, un área para que el cliente te mande la documentación y avisos antes de cada cierre trimestral.",
    context: [
      "El autónomo que cambia de asesoría compara tres o cuatro en una tarde: qué incluye la cuota, si lleváis laboral, si trabajáis en remoto. Si tu web no lo explica, te escribe solo para preguntar o directamente no te escribe.",
      "Dentro de casa, el cuello de botella es el papel: facturas que llegan por email, por WhatsApp o en una foto torcida cuando el trimestre ya vence. Una web con área de documentos y algo de automatización te quita esa carrera.",
    ],
    mallorca:
      "En Baleares la asesoría laboral vive al ritmo de la temporada: llamamientos de fijos discontinuos en primavera y bajas en otoño. Y muchos clientes son autónomos del turismo o residentes extranjeros que agradecen la información en inglés.",
    web: [
      {
        title: "Servicios por tipo de cliente",
        text: "Autónomos, sociedades, comunidades de bienes o particulares con su renta: cada uno ve qué incluye la cuota y qué va aparte.",
      },
      {
        title: "Área de documentos del cliente",
        text: "Cada cliente sube facturas, contratos o notificaciones a su carpeta, en vez de mandarlas sueltas por correo.",
      },
      {
        title: "Calendario fiscal explicado",
        text: "Qué modelos toca presentar cada trimestre y cada año (303, 130, 111…), en una página que el cliente consulta y Google indexa.",
      },
      {
        title: "Presupuesto según tu caso",
        text: "Formulario que pregunta actividad, régimen y volumen de facturas para que respondas con una cuota cerrada.",
      },
    ],
    automations: [
      {
        title: "Facturas de clientes leídas con IA",
        text: "Las facturas llegan por email o por WhatsApp (API oficial de WhatsApp Business), la IA extrae NIF, base e IVA y tu equipo solo revisa lo dudoso.",
      },
      {
        title: "Recordatorio de documentación",
        text: "Antes de cada cierre trimestral, aviso automático a los clientes que aún no han mandado sus facturas.",
      },
      {
        title: "Alta de cliente nuevo",
        text: "Al aceptar el presupuesto se crea su ficha, se le pide la documentación inicial y recibe la hoja de encargo para firmarla online.",
      },
    ],
    agent:
      "Un agente de IA responde a clientes y potenciales: qué documentación falta, qué incluye cada cuota, cómo enviar las facturas. No interpreta la situación fiscal de nadie ni calcula impuestos: eso lo deriva al asesor.",
    pack: [{ id: "seo" }, { id: "blog" }],
    packNote:
      "SEO local para que te elija quien busca asesoría cerca y blog para explicar las novedades fiscales y laborales de cada año.",
    faq: [
      {
        title: "¿Se conecta con mi programa de contabilidad?",
        text: "La web no sustituye a a3, Sage, Holded o Contasol: les pasa la documentación ordenada. Si es por exportación o por integración depende del programa, y lo vemos contigo antes de prometer nada.",
      },
      {
        title: "¿Es seguro que los clientes suban documentos?",
        text: "Cada cliente entra solo a su carpeta, con conexión cifrada y proveedores con servidores en la UE. Firmamos contrato de encargado del tratamiento.",
      },
      {
        title: "¿Podéis automatizar la lectura de facturas?",
        text: "Sí. Tenemos un servicio específico para despachos: las facturas llegan por WhatsApp o email, la IA las lee y tu equipo revisa lo dudoso. Lo tienes en la página para despachos.",
      },
      {
        title: "¿Pongo la cuota mensual en la web?",
        text: "Puedes poner precios orientativos por tipo de cliente, un «desde» o nada. Un precio orientativo filtra consultas que no encajan; el nivel de detalle lo decides tú.",
      },
    ],
    searches: [
      "página web para asesorías",
      "diseño web gestoría",
      "web asesoría fiscal y laboral",
      "área de clientes asesoría",
      "captar clientes asesoría",
      "web gestoría precio",
      "web asesoría Mallorca",
    ],
    related: ["abogados", "administradores-de-fincas", "corredurias-de-seguros"],
    link: {
      href: "/despachos/",
      label: "COMA para despachos: facturas por WhatsApp y email, leídas con IA",
    },
  },
  {
    slug: "arquitectos-e-interioristas",
    name: "Arquitectos e interioristas",
    group: "profesionales",
    forWho: "arquitectos e interioristas",
    title: `Webs para arquitectos e interioristas desde ${basePlan.price} €`,
    description:
      "Portfolio web para estudios de arquitectura e interiorismo: proyectos con fotos grandes que cargan rápido, tu proceso de trabajo y versión en inglés y alemán.",
    h1: "Webs para arquitectos e interioristas: tu obra, a pantalla completa",
    lead: "Proyectos con fotos grandes y optimizadas, tu proceso explicado paso a paso y una vía clara para que el cliente te cuente su casa o su local.",
    context: [
      "A un estudio se le elige por lo que ha hecho. El problema es que las fotos de obra pesan mucho: si la web tarda en cargar o las imágenes se ven pequeñas en el móvil, el cliente cierra antes de llegar a tu mejor proyecto.",
      "Además del portfolio, el cliente quiere entender cómo trabajas: fases, cómo se calculan los honorarios, quién tramita la licencia. Contarlo bien filtra consultas y te ahorra reuniones con quien buscaba otra cosa.",
    ],
    mallorca:
      "En Mallorca una parte del encargo llega de clientes extranjeros que compran y reforman una finca o un piso en Palma, a menudo desde su país. Para ellos la web en inglés o alemán, el proceso bien explicado y la videollamada son el primer filtro, antes de viajar a la isla.",
    web: [
      {
        title: "Fotos grandes que cargan rápido",
        text: "Imágenes en formatos modernos y en varios tamaños: nítidas en una pantalla grande y ligeras en el móvil.",
      },
      {
        title: "Ficha de cada proyecto",
        text: "Ubicación, tipo de obra, superficie y qué se resolvió, en texto que Google y la IA pueden leer.",
      },
      {
        title: "Tu proceso, paso a paso",
        text: "Del primer encuentro al final de obra: qué incluye cada fase y qué necesita el cliente en cada momento.",
      },
      {
        title: "Proyectos por tipo",
        text: "Vivienda, reforma, interiorismo comercial u hostelería: cada visitante va directo a lo que le interesa.",
      },
    ],
    automations: [
      {
        title: "Consulta con datos del proyecto",
        text: "El formulario pide ubicación, metros, fase del proyecto y presupuesto aproximado, y llega ordenado a tu correo o CRM.",
      },
      {
        title: "Seguimiento de propuestas",
        text: "Si envías una propuesta y no hay respuesta, sale un recordatorio amable a los días que tú fijes.",
      },
      {
        title: "Proyecto publicado, proyecto difundido",
        text: "Cada obra nueva que subes a la web genera un resumen listo para tu lista de contactos y tus redes.",
      },
    ],
    agent:
      "Un agente de IA atiende en inglés, alemán o español, explica tu forma de trabajar y recoge los datos de la obra para la primera reunión. No da presupuestos ni opina sobre si una reforma es legal o tendrá licencia: eso lo valora siempre el arquitecto.",
    pack: [{ id: "idiomas", qty: 2 }],
    packNote:
      "Inglés y alemán sobre la Web Esencial: el portfolio lo pones tú, el idioma te abre al cliente extranjero.",
    faq: [
      {
        title: "¿Las fotos grandes no harán lenta la web?",
        text: "No si se preparan bien: cada imagen se genera en varios tamaños y formatos modernos, y el móvil descarga solo la que necesita.",
      },
      {
        title: "¿Puedo añadir proyectos yo mismo?",
        text: "Sí. Podemos dejarla preparada para que crees tú cada ficha con fotos y texto, o nos mandas el material y nos encargamos nosotros.",
      },
      {
        title: "¿Puedo enseñar renders además de obra terminada?",
        text: "Sí, siempre que se indique qué es render y qué es obra real. Al cliente le ayuda ver los dos y evita malentendidos.",
      },
      {
        title: "¿Me sirve si soy interiorista sin estudio a pie de calle?",
        text: "Sí. La web te da un sitio profesional y la ficha de Google se puede configurar como negocio de área de servicio, sin mostrar una dirección.",
      },
    ],
    searches: [
      "página web para arquitectos",
      "portfolio web arquitecto",
      "diseño web estudio de arquitectura",
      "web para interioristas",
      "portfolio interiorismo online",
      "diseño web arquitectos Mallorca",
    ],
    related: ["reformas-y-construccion", "inmobiliarias", "fotografos"],
  },
  {
    slug: "inmobiliarias",
    name: "Inmobiliarias",
    group: "profesionales",
    forWho: "inmobiliarias y agencias inmobiliarias",
    title: `Web inmobiliaria con fichas e idiomas desde ${basePlan.price} €`,
    description: `Página web para inmobiliarias con fichas de inmuebles, valoración para captar propietarios y varios idiomas, desde ${basePlan.price} € + IVA.`,
    h1: "Webs para inmobiliarias que captan propietarios, no solo compradores",
    lead: "Fichas de inmuebles claras, alimentadas por el mismo inventario que publicas en los portales, y un formulario de valoración que trae al propietario que quiere vender.",
    context: [
      "Los portales traen compradores, pero tu anuncio está al lado del de la competencia. Lo que da negocio a una agencia es el propietario que le confía su inmueble, y ese suele buscar agencia en Google, en Maps o preguntando a la IA.",
      "Una web con fichas propias, búsqueda por zona y precio y una valoración bien planteada te da contactos de los dos lados. Y si tu CRM ya publica en los portales, la web puede leer de él para no cargar cada inmueble dos veces.",
    ],
    mallorca:
      "En Baleares una parte importante del comprador es extranjero: alemanes, británicos o escandinavos que buscan desde su país y en su idioma. Las fichas en inglés y alemán, con zona, metros y distancia al mar, son lo mínimo. El vendedor local, en cambio, busca agencia de su zona en Maps.",
    web: [
      {
        title: "Fichas de inmueble completas",
        text: "Fotos, plano, metros, zona, precio y calificación energética, con datos estructurados que Google entiende.",
      },
      {
        title: "Buscador por zona y precio",
        text: "Filtros sencillos por municipio, tipo de inmueble y presupuesto, pensados para usarse en el móvil.",
      },
      {
        title: "Valoración para propietarios",
        text: "Formulario que pide lo justo (dirección, metros, estado) y te deja el contacto para ir a ver el inmueble.",
      },
      {
        title: "Cada ficha en su idioma",
        text: "Cada inmueble en español, inglés y alemán, con su propia dirección web por idioma para que lo encuentren desde fuera.",
      },
    ],
    automations: [
      {
        title: "Sincronización con tu CRM",
        text: "Si tu CRM inmobiliario (Inmovilla, Witei u otro) exporta un feed, la web recoge altas, bajas y cambios de precio sin tocarla a mano.",
      },
      {
        title: "Alerta al comprador",
        text: "Quien deja guardada su búsqueda recibe aviso cuando entra un inmueble que encaja con su zona y su presupuesto.",
      },
      {
        title: "Seguimiento del propietario",
        text: "Cada valoración crea una tarea de seguimiento y, si consigues el encargo, el propietario recibe un informe periódico de visitas.",
      },
    ],
    agent:
      "Un agente de IA responde en el idioma del comprador sobre los inmuebles publicados, filtra por zona y presupuesto y propone visita. No negocia precio, no valora inmuebles ni asesora sobre impuestos o hipotecas: eso pasa a un agente de tu equipo.",
    pack: [{ id: "idiomas", qty: 2 }, { id: "seo" }],
    packNote:
      "Inglés y alemán para el comprador extranjero y SEO local para que el propietario de tu zona te encuentre.",
    faq: [
      {
        title: "¿La web se conecta con Idealista y Fotocasa?",
        text: "Los portales no se alimentan desde la web, sino desde tu CRM inmobiliario. Lo habitual es que la web lea del mismo CRM; si tu programa no exporta un feed, buscamos otra vía o se cargan a mano.",
      },
      {
        title: "¿Tengo que poner la calificación energética en los anuncios?",
        text: "Sí: la normativa obliga a incluir la etiqueta de eficiencia energética en la publicidad de venta y alquiler de viviendas. La ficha tiene su campo; los casos exentos, confírmalos con tu asesor.",
      },
      {
        title: "¿Una valoración online no da precios irreales?",
        text: "Por eso no damos una cifra automática: el formulario recoge los datos y la valoración la haces tú tras ver el inmueble. Captas al propietario sin comprometerte con un número.",
      },
      {
        title: "¿Puedo subir los inmuebles yo?",
        text: "Sí. Si no usas CRM, los das de alta desde un panel sencillo; si lo usas, se cargan solos desde él.",
      },
    ],
    searches: [
      "página web inmobiliaria",
      "diseño web para inmobiliarias",
      "web inmobiliaria conectada a crm",
      "captar propietarios inmobiliaria",
      "web inmobiliaria en inglés y alemán",
      "web agencia inmobiliaria precio",
      "web inmobiliaria Mallorca",
    ],
    related: ["arquitectos-e-interioristas", "gestion-alquiler-vacacional", "abogados"],
  },
  {
    slug: "administradores-de-fincas",
    name: "Administradores de fincas",
    group: "profesionales",
    forWho: "administradores de fincas",
    title: "Web para administradores de fincas con área de vecinos",
    description: `Página web para administradores de fincas con área privada de vecinos, incidencias, actas y avisos, desde ${basePlan.price} € + IVA. Capta comunidades nuevas.`,
    h1: "Webs para administradores de fincas: menos llamadas, vecinos al día",
    lead: "Un área privada por comunidad con actas, cuentas y avisos, incidencias con seguimiento y una web que convence a la comunidad que quiere cambiar de administrador.",
    context: [
      "Buena parte del día se va en lo mismo: «¿ya han avisado al fontanero?», «¿me reenvías el acta?», «¿cuándo es la junta?». Cada pregunta es una llamada o un WhatsApp que interrumpe, y la respuesta suele estar ya en un papel o en un correo.",
      "Un área de vecinos con documentos, avisos y estado de las incidencias responde sola a muchas de esas preguntas. Y una web clara, con tus servicios y tu forma de trabajar, es lo que mira el presidente que propone en junta cambiar de administrador.",
    ],
    mallorca:
      "En Mallorca muchas comunidades tienen propietarios que viven fuera: segundas residencias o pisos de inversión en la costa. Necesitan actas, cuentas y avisos accesibles desde su país y, a menudo, en inglés o alemán. Las demás comunidades te buscan por cercanía, en Maps.",
    web: [
      {
        title: "Área privada por comunidad",
        text: "Cada propietario entra con su acceso y ve actas, presupuesto, cuentas y convocatorias de su comunidad, no de las demás.",
      },
      {
        title: "Incidencias con seguimiento",
        text: "El vecino comunica una avería con foto y ve en qué estado está, sin llamar para preguntar.",
      },
      {
        title: "Tablón de avisos",
        text: "Cortes de agua, obras, revisión del ascensor o desinsectación, publicados una vez y visibles para toda la comunidad.",
      },
      {
        title: "Servicios y forma de trabajar",
        text: "Qué incluye la administración, cómo rindes cuentas y cómo pedir presupuesto: lo que compara una comunidad antes de cambiar.",
      },
    ],
    automations: [
      {
        title: "Incidencia directa al gremio",
        text: "La avería llega al proveedor que toca (fontanero, ascensorista, limpieza) con fotos y dirección, y el vecino recibe aviso al resolverse.",
      },
      {
        title: "Aviso de documentos nuevos",
        text: "Cuando subes una convocatoria, un acta o las cuentas, los propietarios de esa comunidad reciben un aviso por email.",
      },
      {
        title: "Recordatorio de recibos pendientes",
        text: "Aviso amable y privado al propietario con un recibo pendiente, sin exponerlo ante el resto de vecinos.",
      },
    ],
    agent:
      "Un agente de IA responde a los vecinos sobre lo que ya está publicado (fecha de la junta, horarios, estado de una incidencia) y registra averías nuevas. No interpreta estatutos ni la Ley de Propiedad Horizontal ni decide nada por la comunidad: eso pasa al administrador.",
    pack: [{ id: "seo" }, { id: "idiomas", qty: 1 }],
    packNote:
      "SEO local para captar comunidades cercanas e inglés para los propietarios que viven fuera de la isla.",
    faq: [
      {
        title: "¿El área de vecinos cumple con la protección de datos?",
        text: "Cada propietario ve solo su comunidad, el acceso es privado y los datos se alojan en la UE. Documentos sensibles, como la relación de deudores, requieren cuidado: consulta con tu asesor qué publicar y cómo.",
      },
      {
        title: "¿Sustituye a la convocatoria formal de la junta?",
        text: "No. La web y el email son un canal más; la forma de convocar y notificar sigue lo que marca la Ley de Propiedad Horizontal. Si dudas, tu colegio profesional te orienta.",
      },
      {
        title: "¿Se integra con mi programa de administración?",
        text: "Depende del programa: algunos tienen su propio portal de vecinos y se enlaza; otros permiten exportar datos. Lo revisamos antes de proponer nada.",
      },
      {
        title: "¿Los vecinos mayores sabrán usarla?",
        text: "El acceso es sencillo y funciona en el móvil. Quien prefiera el papel o el teléfono puede seguir así: el área es un canal más, no el único.",
      },
    ],
    searches: [
      "página web administrador de fincas",
      "portal de vecinos administrador de fincas",
      "web para administración de fincas",
      "área privada comunidad de propietarios",
      "app incidencias comunidad de vecinos",
      "administrador de fincas Mallorca web",
    ],
    related: ["empresas-de-limpieza", "piscinas-y-jardineria", "asesorias-y-gestorias"],
  },
  {
    slug: "corredurias-de-seguros",
    name: "Corredurías de seguros",
    group: "profesionales",
    forWho: "corredurías y corredores de seguros",
    title: `Webs para corredurías de seguros desde ${basePlan.price} €`,
    description:
      "Web para corredurías de seguros: presupuesto por ramo, aviso de renovación y parte de siniestro online, también en inglés. Confianza desde la primera visita.",
    h1: "Webs para corredurías: presupuesto por ramo y parte de siniestro fácil",
    lead: "Una página por ramo con lo que cubre cada póliza, formularios de presupuesto que piden lo justo y un canal para dar parte sin buscar el teléfono.",
    context: [
      "El cliente compara en comparadores y aseguradoras con mucha publicidad. Lo tuyo es otra cosa: consejo independiente de una aseguradora concreta y alguien que da la cara en un siniestro. Si la web no lo explica, pareces un intermediario más.",
      "Con presupuestos por ramo (hogar, auto, salud, comunidades, responsabilidad civil) llegan solicitudes con los datos necesarios para cotizar. Y los avisos de renovación y el parte online hacen visible el servicio que ya das.",
    ],
    mallorca:
      "En Baleares hay seguros con perfil propio: hogar de segunda residencia, embarcaciones, responsabilidad civil para alquiler turístico y salud privada para residentes extranjeros, que a menudo la necesitan para tramitar su residencia. Para ese cliente, la web en inglés es la puerta de entrada.",
    web: [
      {
        title: "Una página por ramo",
        text: "Hogar, auto, salud, vida, comunidades o empresa: qué cubre, qué no y qué conviene preguntar antes de contratar.",
      },
      {
        title: "Presupuesto que pide lo justo",
        text: "Un formulario distinto por ramo (vehículo y conductor, metros y contenido, edad y coberturas) para cotizar sin llamar tres veces.",
      },
      {
        title: "Parte de siniestro online",
        text: "El cliente da parte con fotos y descripción desde el móvil, y te llega todo junto para tramitarlo con la aseguradora.",
      },
      {
        title: "Quién eres y con quién trabajas",
        text: "Datos de la correduría, inscripción como mediador y aseguradoras con las que trabajas, que es lo que da confianza.",
      },
    ],
    automations: [
      {
        title: "Aviso de renovación",
        text: "Antes del vencimiento de cada póliza, mensaje al cliente para revisar coberturas o pedir nuevas ofertas a tiempo.",
      },
      {
        title: "Siniestro al tramitador",
        text: "El parte online entra en tu programa o en el correo del tramitador, con número de póliza y documentación adjunta.",
      },
      {
        title: "Documentación pendiente",
        text: "Si a una solicitud le falta el carné, la ficha técnica o una foto, el cliente recibe un aviso con lo que falta.",
      },
    ],
    agent:
      "Un agente de IA explica en qué consiste cada ramo, recoge los datos para un presupuesto y guía al cliente al dar parte. No confirma coberturas de una póliza concreta ni dice si un siniestro está cubierto: eso lo resuelve tu equipo con la aseguradora.",
    pack: [{ id: "seo" }, { id: "idiomas", qty: 1 }],
    packNote:
      "SEO local para quien busca correduría cerca e inglés para el residente extranjero que necesita hogar o salud.",
    faq: [
      {
        title: "¿Qué datos tengo que mostrar como correduría?",
        text: "Como mediador de seguros debes identificarte e indicar tu inscripción en el registro de la Dirección General de Seguros y Fondos de Pensiones. Lo dejamos visible en el pie y en el aviso legal; confirma el texto con tu asesor.",
      },
      {
        title: "¿Se conecta con mi programa de gestión de correduría?",
        text: "Depende del programa: si admite importar solicitudes o tiene API, lo conectamos; si no, las solicitudes te llegan al correo ordenadas por ramo.",
      },
      {
        title: "¿Puedo poner un comparador de precios en la web?",
        text: "Un comparador en tiempo real exige acuerdos y conexión con cada aseguradora. Lo práctico es recoger los datos en la web y que tú presentes las opciones que encajan: ese es tu valor como corredor.",
      },
      {
        title: "¿El cliente puede descargar sus pólizas?",
        text: "Si tu programa tiene área de cliente, la enlazamos desde la web. Si no, se puede montar un área sencilla con la documentación de cada uno.",
      },
    ],
    searches: [
      "página web correduría de seguros",
      "diseño web corredor de seguros",
      "web para corredurías",
      "captar clientes correduría de seguros",
      "formulario presupuesto seguro web",
      "correduría de seguros Mallorca web",
    ],
    related: ["asesorias-y-gestorias", "talleres-mecanicos", "inmobiliarias"],
  },
  {
    slug: "reformas-y-construccion",
    name: "Reformas y construcción",
    group: "hogar",
    forWho: "empresas de reformas y construcción",
    title: `Página web para empresas de reformas desde ${basePlan.price} €`,
    description: `Web para empresas de reformas y construcción con antes y después, presupuesto con fotos y metros y las zonas que cubres, desde ${basePlan.price} € + IVA.`,
    h1: "Webs para empresas de reformas que enseñan obra y filtran presupuestos",
    lead: "Fotos de antes y después, un presupuesto que pide metros y fotos de la estancia y las zonas en las que trabajas, para que te escriban los clientes que encajan.",
    context: [
      "Quien va a reformar una cocina pide tres presupuestos y elige por confianza: quiere ver obras parecidas, saber si trabajas en su zona y que alguien le conteste. Si tu web es una foto de una grúa y un teléfono, compites solo por precio.",
      "Muchas visitas para presupuestar no acaban en nada. Pedir fotos, metros y tipo de reforma antes de ir te deja descartar lo que no es para ti y llegar a la visita con una idea clara.",
    ],
    mallorca:
      "En Mallorca hay mucho cliente extranjero que reforma su casa o su finca sin estar en la isla: necesita la web en inglés o alemán, fotos de obra terminada y saber cómo avanza. Además, algunos municipios limitan las obras en zonas turísticas en verano, y conviene explicarlo.",
    web: [
      {
        title: "Antes y después",
        text: "Cada obra con fotos del estado inicial y del resultado, con tipo de reforma, metros y zona.",
      },
      {
        title: "Presupuesto con fotos y metros",
        text: "El cliente indica la estancia y los metros aproximados y sube fotos desde el móvil antes de que vayas a verlo.",
      },
      {
        title: "Zonas en las que trabajas",
        text: "Municipios y barrios que cubres, en la web y en tu ficha de Google, para salir cuando buscan reformas cerca.",
      },
      {
        title: "Qué haces y qué no",
        text: "Reforma integral, cocinas, baños, fachadas o gestión de licencias: cada servicio con su página y lo que incluye.",
      },
    ],
    automations: [
      {
        title: "Solicitudes en una ficha",
        text: "Cada petición llega con fotos, metros y zona en una ficha, lista para decidir si vas a verla o no.",
      },
      {
        title: "Fotos de avance al cliente",
        text: "El propietario que no está en la isla recibe por email las fotos que haces en obra, sin que tengas que redactar cada mensaje.",
      },
      {
        title: "Reseña al terminar",
        text: "Al cerrar la obra, un mensaje con el enlace a tu ficha de Google para que el cliente deje su opinión.",
      },
    ],
    agent:
      "Un agente de IA responde en el idioma del cliente qué obras haces y en qué zonas, y recoge fotos y medidas para el presupuesto. No da precios ni plazos de obra ni opina sobre licencias: eso lo valora tu jefe de obra.",
    pack: [{ id: "seo" }, { id: "idiomas", qty: 2 }],
    packNote:
      "SEO local para que te encuentren en tu zona e inglés y alemán para el propietario extranjero que reforma.",
    faq: [
      {
        title: "¿Puedo subir las fotos de obra yo mismo?",
        text: "Sí. Podemos dejarla preparada para que añadas tú cada obra con sus fotos desde el móvil, o nos encargamos nosotros.",
      },
      {
        title: "¿Y si no tengo buenas fotos de obras anteriores?",
        text: "Empieza con las que tengas y fotografía bien las siguientes al terminar. Si hace falta, el extra de contenido propio incluye fotos hechas para tu marca.",
      },
      {
        title: "¿Pongo precios orientativos por metro cuadrado?",
        text: "Puedes, con cuidado: cada obra es distinta y un precio por metro mal explicado genera discusiones. Lo habitual es un «desde» por tipo de reforma y el presupuesto tras la visita.",
      },
      {
        title: "¿Me sirve si solo trabajo con particulares de mi zona?",
        text: "Sí. En ese caso pesan más Google Maps, las reseñas y las páginas por zona que los idiomas, y el paquete se ajusta.",
      },
    ],
    searches: [
      "página web empresa de reformas",
      "diseño web para reformas",
      "web para constructoras",
      "presupuesto reformas online",
      "web reformas antes y después",
      "web reformas precio",
      "empresa de reformas Mallorca web",
    ],
    related: ["arquitectos-e-interioristas", "fontaneros-y-electricistas", "inmobiliarias"],
  },
  {
    slug: "fontaneros-y-electricistas",
    name: "Fontaneros y electricistas",
    group: "hogar",
    forWho: "fontaneros, electricistas e instaladores",
    title: "Web para fontaneros y electricistas: urgencias y Maps",
    description: `Página web para fontaneros y electricistas con llamada en un toque, zonas que cubres y presupuesto por WhatsApp, desde ${basePlan.price} € + IVA. Lista para Maps.`,
    h1: "Webs para fontaneros y electricistas: que te llamen en un toque",
    lead: "Botón de llamada siempre a mano, las zonas que cubres y una ficha de Google cuidada: lo que mira quien tiene una fuga o se ha quedado sin luz.",
    context: [
      "Quien tiene una fuga no navega: busca «fontanero cerca» en el móvil, mira el mapa y las reseñas y llama al primero que parece fiable. Si tu teléfono no se pulsa o tu ficha de Google está a medias, la llamada se la lleva otro.",
      "Para trabajos sin prisa (cambiar un termo, un cuadro eléctrico, una instalación nueva) el cliente sí compara. Ahí ayuda que pueda mandarte una foto por WhatsApp y recibir una idea de precio sin que tengas que desplazarte.",
    ],
    mallorca:
      "En Mallorca el radio de trabajo importa: no es lo mismo cubrir Palma que el Pla o la costa norte, y el cliente quiere saberlo antes de llamar. En verano se suman avisos de casas de vacaciones, donde llama un gestor o un propietario que no está en la isla.",
    web: [
      {
        title: "Llamada y WhatsApp en un toque",
        text: "Botones fijos en el móvil para llamar o escribir, visibles desde la primera pantalla.",
      },
      {
        title: "Zonas que cubres",
        text: "Municipios y barrios en texto, coherentes con tu ficha de Google, para salir en las búsquedas de cada zona.",
      },
      {
        title: "Un servicio, una página",
        text: "Desatascos, termos, boletines, cuadros eléctricos o aire acondicionado: lo que quieres vender, cada cosa con su página.",
      },
      {
        title: "Horario de urgencias claro",
        text: "Si atiendes urgencias, cuándo y en qué condiciones; si no, dilo, y te ahorras llamadas a deshoras.",
      },
    ],
    automations: [
      {
        title: "Presupuesto con foto por WhatsApp",
        text: "Con la API oficial de WhatsApp Business, la foto y la dirección del cliente se guardan como solicitud y respondes cuando puedes.",
      },
      {
        title: "Avisos ordenados por zona",
        text: "Cada solicitud entra en una lista por urgencia y municipio, para que montes la ruta del día de un vistazo.",
      },
      {
        title: "Reseña tras el trabajo",
        text: "Al cerrar el trabajo, un mensaje con el enlace a tu ficha de Google, porque en el mapa las reseñas pesan mucho.",
      },
    ],
    agent:
      "Un agente de IA atiende tu WhatsApp Business, con la API oficial, mientras estás en un trabajo: pregunta qué pasa, dónde y si es urgente, y te pasa el aviso resumido. No diagnostica ni da precios cerrados, y nunca indica cómo manipular una instalación eléctrica o de gas: eso lo haces tú.",
    pack: [{ id: "seo" }],
    packNote:
      "SEO local y nada más: en un oficio de urgencias, la ficha de Google Maps y las reseñas son la puerta de entrada.",
    faq: [
      {
        title: "¿Necesito web si ya tengo ficha en Google?",
        text: "La ficha es lo primero, pero la web la refuerza: explica servicios y zonas con detalle y Google la usa para entender qué haces. Y da confianza cuando el cliente duda entre dos.",
      },
      {
        title: "¿Pongo que soy empresa instaladora habilitada?",
        text: "Sí, y conviene: si lo eres, indícalo con tus datos de registro. Es algo que comprueban un administrador de fincas o una empresa antes de encargarte un trabajo.",
      },
      {
        title: "¿Qué pasa con los mensajes fuera de horario?",
        text: "La web dice claramente tu horario y si haces urgencias. Lo que llega fuera de horario recibe una respuesta automática y te espera a primera hora.",
      },
      {
        title: "¿Me sirve si trabajo solo?",
        text: "Sí. Con la Web Esencial y la ficha de Google bien llevada tienes lo necesario; lo demás se añade si un día tienes equipo.",
      },
    ],
    searches: [
      "página web para fontaneros",
      "web para electricistas",
      "fontanero urgente web",
      "diseño web instaladores",
      "más clientes fontanero google maps",
      "web fontanero barata",
      "electricista Mallorca web",
    ],
    related: ["reformas-y-construccion", "piscinas-y-jardineria", "administradores-de-fincas"],
  },
  {
    slug: "piscinas-y-jardineria",
    name: "Piscinas y jardinería",
    group: "hogar",
    forWho: "empresas de mantenimiento de piscinas y jardines",
    title: "Web para mantenimiento de piscinas y jardines en inglés",
    description: `Página web para empresas de piscinas y jardinería con planes de mantenimiento e informes con fotos, en inglés y alemán. Desde ${basePlan.price} € + IVA.`,
    h1: "Webs para piscinas y jardines que cuidas mientras el dueño no está",
    lead: "Planes de mantenimiento explicados, informes con fotos tras cada visita y la web en inglés y alemán para el propietario que vive fuera.",
    context: [
      "Muchos de tus clientes no están aquí: son propietarios de una villa o una casa de vacaciones que pagan por un servicio que no ven. Lo que les preocupa es saber que alguien ha pasado, que el agua está bien y que el jardín no se ha secado.",
      "Una web que explique los planes de mantenimiento, con frecuencia de visitas y qué incluye cada uno, te trae clientes de contrato y no solo avisos sueltos. Y un informe con fotos tras cada visita hace visible un trabajo que el propietario nunca ve.",
    ],
    mallorca:
      "En Mallorca el trabajo sigue el calendario del propietario extranjero: puesta a punto antes de su llegada o de la temporada de alquiler, mantenimiento en verano e invernaje cuando se va. Buena parte se habla en inglés o alemán, y a menudo con un gestor de por medio.",
    web: [
      {
        title: "Planes de mantenimiento",
        text: "Semanal, quincenal o de temporada, con lo que incluye cada plan: limpieza, tratamiento del agua, poda y riego.",
      },
      {
        title: "Zonas y tipo de propiedad",
        text: "Municipios que cubres y si trabajas con villas, comunidades o alquileres vacacionales.",
      },
      {
        title: "Solicitud con datos de la finca",
        text: "Tamaño de la piscina, metros de jardín, tipo de riego y fotos: lo que necesitas para presupuestar sin desplazarte.",
      },
      {
        title: "En inglés y alemán",
        text: "Los planes y las condiciones en el idioma del propietario, con el mismo tono profesional que en español.",
      },
    ],
    automations: [
      {
        title: "Informe de visita con fotos",
        text: "Tras cada visita, el técnico hace fotos con el móvil y el propietario recibe un resumen por email en su idioma.",
      },
      {
        title: "Renovación de contratos",
        text: "Antes de cada temporada, aviso automático al propietario para renovar o ajustar su plan de mantenimiento.",
      },
      {
        title: "Averías con aprobación",
        text: "Si el técnico marca una avería (bomba, fuga, plaga), el propietario o su gestor recibe fotos y presupuesto para aprobar la reparación.",
      },
    ],
    agent:
      "Un agente de IA responde en inglés o alemán qué planes ofreces, en qué zonas trabajas y cómo se contrata, y recoge los datos de la finca. No aprueba reparaciones ni da indicaciones sobre productos químicos para el agua: eso lo decide tu equipo.",
    pack: [{ id: "idiomas", qty: 2 }],
    packNote:
      "Inglés y alemán sobre la Web Esencial: el propietario extranjero contrata en su idioma.",
    faq: [
      {
        title: "¿Enviar informes con fotos no me quitará tiempo?",
        text: "No debería: el técnico hace las fotos con el móvil, marca lo que ha hecho y el informe se monta y se envía solo, con frases ya preparadas en el idioma del propietario.",
      },
      {
        title: "¿Puedo cobrar los contratos por domiciliación?",
        text: "Sí, con domiciliación SEPA o pago recurrente con tarjeta, que resulta cómodo para propietarios con cuenta bancaria en otro país europeo.",
      },
      {
        title: "¿Sirve si también trabajo para gestoras de alquiler vacacional?",
        text: "Sí. Puedes tener una página para gestoras y empresas, con servicios de cambio de temporada y avisos al gestor en lugar de al propietario.",
      },
      {
        title: "¿Hace falta alemán si mis clientes son británicos?",
        text: "No. Ponemos los idiomas que hablan tus clientes: si son sobre todo británicos, con inglés basta y el paquete baja.",
      },
    ],
    searches: [
      "página web mantenimiento de piscinas",
      "web empresa de jardinería",
      "web para jardineros",
      "mantenimiento piscinas villas web",
      "pool maintenance mallorca",
      "web piscinas y jardines Mallorca",
    ],
    related: ["gestion-alquiler-vacacional", "empresas-de-limpieza", "alquiler-vacacional"],
  },
  {
    slug: "empresas-de-limpieza",
    name: "Empresas de limpieza",
    group: "hogar",
    forWho: "empresas de limpieza",
    title: `Diseño web para empresas de limpieza desde ${basePlan.price} €`,
    description:
      "Web para empresas de limpieza de oficinas, comunidades y alquiler vacacional: presupuestos online, rutas y partes de trabajo. Más contratos y menos llamadas.",
    h1: "Webs para empresas de limpieza que venden contratos, no horas sueltas",
    lead: "Oficinas, comunidades y alquiler vacacional bien separados, un presupuesto online que pide metros y frecuencia, y partes de trabajo que el cliente puede ver.",
    context: [
      "Limpiar una oficina, una escalera o un piso turístico entre dos huéspedes son trabajos distintos, con clientes distintos. Si tu web los mezcla en una lista, el administrador de fincas no ve lo suyo y la gestora de alquiler tampoco.",
      "El otro dolor es organizar: rutas, cambios de última hora y demostrar que el trabajo se hizo. Un parte con hora y fotos desde el móvil del equipo te ahorra discusiones y da al cliente la tranquilidad que pide.",
    ],
    mallorca:
      "En Mallorca la limpieza de alquiler vacacional manda en temporada: salidas concentradas en fin de semana, ropa de cama, llaves y propietarios o gestoras que no están en la isla. En invierno pesan más oficinas y comunidades. Una web que hable a los dos te ayuda a llenar todo el año.",
    web: [
      {
        title: "Un servicio, un cliente",
        text: "Oficinas, comunidades, fin de obra y alquiler vacacional, cada uno con su página, lo que incluye y cómo se contrata.",
      },
      {
        title: "Presupuesto por metros y frecuencia",
        text: "El cliente indica tipo de espacio, metros, frecuencia y horario, y recibes una solicitud con la que puedes cotizar.",
      },
      {
        title: "Servicio de cambio de huéspedes",
        text: "Para gestoras y propietarios: limpieza tras el check-out, ropa de cama, reposición y revisión, con aviso cuando la casa está lista.",
      },
      {
        title: "Zonas y franjas horarias",
        text: "Dónde trabajas y en qué horarios, para no recibir peticiones que no puedes atender.",
      },
    ],
    automations: [
      {
        title: "Salidas convertidas en limpiezas",
        text: "Las salidas del calendario de Airbnb, Booking o el channel manager de la gestora se convierten en servicios programados.",
      },
      {
        title: "Parte de trabajo con fotos",
        text: "El equipo marca inicio, fin y fotos desde el móvil, y el cliente recibe el parte sin tener que pedirlo.",
      },
      {
        title: "Ruta del día para cada equipo",
        text: "Cada mañana, cada equipo recibe sus servicios ordenados por zona, con dirección, llaves e indicaciones.",
      },
    ],
    agent:
      "Un agente de IA responde qué servicios haces, en qué zonas y con qué frecuencia, y recoge los datos para el presupuesto. No confirma limpiezas urgentes para el mismo día ni cambia el cuadrante: eso lo decide quien coordina los equipos.",
    pack: [{ id: "seo" }, { id: "idiomas", qty: 1 }],
    packNote:
      "SEO local para oficinas y comunidades de tu zona e inglés para propietarios y gestoras de alquiler vacacional.",
    faq: [
      {
        title: "¿Se puede conectar con el calendario de Airbnb o Booking?",
        text: "Sí, a través del calendario que exportan estas plataformas o del channel manager de la gestora: cada salida se convierte en una limpieza programada.",
      },
      {
        title: "¿Puedo dar precio cerrado online?",
        text: "Para servicios estándar, como el cambio de huéspedes de un piso de dos habitaciones, sí. Para oficinas o comunidades es mejor pedir datos y presupuestar, porque cambia mucho de un sitio a otro.",
      },
      {
        title: "¿Necesito una app para los partes de trabajo?",
        text: "No hace falta una app propia: un formulario en el móvil del equipo, con hora y fotos, suele bastar y se conecta con lo demás.",
      },
      {
        title: "¿Sirve para captar comunidades de vecinos?",
        text: "Sí. Una página para comunidades que hable de frecuencias, escaleras, garajes y cristales es lo que busca un administrador de fincas cuando cambia de empresa.",
      },
    ],
    searches: [
      "página web empresa de limpieza",
      "diseño web limpieza",
      "web limpieza de oficinas",
      "limpieza alquiler vacacional mallorca",
      "presupuesto limpieza online",
      "web empresa de limpieza precio",
    ],
    related: ["gestion-alquiler-vacacional", "administradores-de-fincas", "alquiler-vacacional"],
  },
  {
    slug: "talleres-mecanicos",
    name: "Talleres mecánicos",
    group: "hogar",
    forWho: "talleres mecánicos",
    title: `Web para talleres mecánicos con cita previa desde ${basePlan.price} €`,
    description: `Página web para talleres mecánicos con cita previa online, presupuesto y aviso de coche listo, desde ${basePlan.price} € + IVA. Recordatorios de revisión e ITV.`,
    h1: "Webs para talleres: cita previa online y aviso de coche listo",
    lead: "El cliente pide cita desde el móvil, recibe aviso cuando su coche está listo y un recordatorio cuando le toca la revisión o la ITV.",
    context: [
      "En un taller el teléfono no para mientras tienes las manos en un motor: citas, «¿está ya mi coche?», presupuestos. Cada llamada interrumpe un trabajo, y la que no coges puede ser un cliente nuevo que acaba en el taller de al lado.",
      "Con cita previa online, aviso automático de coche listo y recordatorios de mantenimiento, el teléfono suena menos y el cliente vuelve cuando le toca, en vez de olvidarse hasta que algo falla.",
    ],
    mallorca:
      "En Mallorca el taller vive de la cercanía: el cliente busca «taller cerca» en Maps y vuelve si le tratan bien. Hay residentes extranjeros que agradecen el presupuesto en inglés, y empresas con flota (alquiler, reparto, servicios) que buscan un taller de confianza.",
    web: [
      {
        title: "Cita previa online",
        text: "El cliente elige servicio (revisión, neumáticos, frenos, pre-ITV) y hueco, y te llega la cita con matrícula y modelo.",
      },
      {
        title: "Servicios y vehículos",
        text: "Qué haces y con qué vehículos trabajas: eléctricos, híbridos, furgonetas o una marca concreta.",
      },
      {
        title: "Petición de presupuesto",
        text: "Matrícula, kilómetros y qué le pasa al coche, con foto si hace falta, para responder con una estimación.",
      },
      {
        title: "Ficha de Google cuidada",
        text: "Horario, servicios, fotos del taller y reseñas coherentes con la web, que es lo que mira quien busca taller cerca.",
      },
    ],
    automations: [
      {
        title: "Aviso de coche listo",
        text: "Al cerrar la orden de trabajo, el cliente recibe un SMS o un WhatsApp (API oficial de WhatsApp Business) con el horario de recogida.",
      },
      {
        title: "Recordatorio de revisión e ITV",
        text: "Según la fecha de matrícula y la última revisión, aviso automático cuando le toca, con enlace para pedir cita.",
      },
      {
        title: "Aprobación de presupuesto",
        text: "Si al desmontar aparece una avería nueva, el cliente recibe el presupuesto con fotos y lo aprueba con un clic.",
      },
    ],
    agent:
      "Un agente de IA responde a las preguntas de siempre (horario, si cambiáis neumáticos, si hacéis pre-ITV) y da cita. No diagnostica averías ni da precios de reparación sin ver el coche: eso pasa al mecánico.",
    pack: [{ id: "reservas" }, { id: "seo" }],
    packNote:
      "Cita previa online para quitarte llamadas y SEO local para salir cuando buscan taller en tu zona.",
    faq: [
      {
        title: "¿Se conecta con mi programa de taller?",
        text: "Depende del programa: si permite importar citas o enviar avisos, lo conectamos; si no, las citas te llegan al correo y al calendario del taller.",
      },
      {
        title: "¿Puedo dar presupuestos desde la web?",
        text: "Puedes recoger la petición y dar una estimación. El cliente tiene derecho a pedir presupuesto por escrito antes de la reparación, y ese sigue siendo el tuyo; los detalles, consúltalos con tu asociación de talleres.",
      },
      {
        title: "¿Cómo pido reseñas sin parecer pesado?",
        text: "Un único mensaje tras la recogida, igual para todos los clientes, con el enlace directo a tu ficha. Sin regalos a cambio: Google no lo permite.",
      },
      {
        title: "¿Sirve para un taller de motos o de chapa y pintura?",
        text: "Sí. Cambian los servicios y el formulario (en chapa, las fotos del golpe son lo primero), pero la base es la misma.",
      },
    ],
    searches: [
      "página web taller mecánico",
      "web para talleres",
      "cita previa taller online",
      "diseño web taller de coches",
      "recordatorio itv clientes taller",
      "taller mecánico Mallorca web",
    ],
    related: ["alquiler-de-coches", "corredurias-de-seguros", "autoescuelas"],
  },
  {
    slug: "tiendas-y-comercio-local",
    name: "Tiendas y comercio local",
    group: "comercio",
    forWho: "tiendas y comercio de barrio",
    title: `Página web para tiendas de barrio desde ${basePlan.price} €`,
    description: `Web para tiendas y comercio local con catálogo, recogida en tienda, horario y Google Maps al día, desde ${basePlan.price} € + IVA. Venta online solo si te compensa.`,
    h1: "Webs para comercio local: que te encuentren, te visiten y te compren",
    lead: "Horario, ubicación y catálogo al día en Google y en tu web, recogida en tienda y, si te compensa, una tienda online pequeña.",
    context: [
      "Muchas compras de barrio empiezan en el móvil: «ferretería abierta cerca», «tienda de regalos en Palma». Si tu ficha de Google tiene el horario mal o no hay fotos de lo que vendes, el cliente va a la tienda que sí lo enseña.",
      "No necesitas competir con los grandes: te basta con enseñar lo que tienes, decir si está disponible y dejar que lo reserven para recoger. En COMA hemos trabajado con comercio local y sabemos que la web tiene que ser fácil de mantener al día.",
    ],
    mallorca:
      "En Mallorca el comercio de barrio convive con el turista en temporada y con el vecino todo el año. Un horario de verano e invierno bien puesto en Maps, la web en inglés si tienes clientela de fuera y la opción de reservar para recoger sirven a los dos.",
    web: [
      {
        title: "Catálogo sin carrito",
        text: "Tus productos o marcas con foto y precio orientativo, aunque no vendas online: el cliente sabe a qué va.",
      },
      {
        title: "Reservar y recoger en tienda",
        text: "El cliente aparta un producto desde la web y pasa a buscarlo, sin pagar online si tú no quieres.",
      },
      {
        title: "Horario y ubicación al día",
        text: "Horario, festivos y cómo llegar, coherentes con tu ficha de Google para no mandar a nadie a una persiana bajada.",
      },
      {
        title: "Tienda online pequeña",
        text: "Si te compensa, carrito y pago para una selección de productos, con envío o recogida en tienda.",
      },
    ],
    automations: [
      {
        title: "Stock de la tienda en la web",
        text: "Si tu TPV o programa de caja exporta el stock, la web muestra la disponibilidad sin cargar los productos dos veces.",
      },
      {
        title: "Aviso de pedido listo",
        text: "Cuando el pedido o la reserva está preparada, el cliente recibe un mensaje para pasar a recogerla.",
      },
      {
        title: "Novedades a tus clientes",
        text: "Una lista propia de clientes para avisar de rebajas, nuevas colecciones o el horario de Navidad.",
      },
    ],
    agent:
      "Un agente de IA responde a las preguntas de siempre (horario, si tienes un producto, si hacéis envíos) y apunta reservas para recoger. No confirma stock que no esté en el sistema ni negocia precios: eso lo resuelves tú en la tienda.",
    pack: [{ id: "seo" }, { id: "tienda" }],
    packNote:
      "SEO local para salir en Maps y una tienda online pequeña para reservas y ventas; si no vas a vender online, se quita.",
    faq: [
      {
        title: "¿Necesito vender online para tener web?",
        text: "No. Muchas tiendas solo quieren que las encuentren y se sepa qué venden. La tienda online se añade cuando te compense.",
      },
      {
        title: "¿Se conecta con mi TPV o programa de caja?",
        text: "Depende del programa: si exporta productos y stock, se puede sincronizar; si no, mantienes a mano un catálogo corto con lo principal.",
      },
      {
        title: "¿Puedo actualizar yo los productos y el horario?",
        text: "Sí. Podemos dejarla preparada para que cambies tú lo básico desde el móvil, o nos encargamos nosotros. El horario de Google se cambia en tu ficha.",
      },
      {
        title: "¿Cómo cobro si alguien compra online?",
        text: "Con tarjeta o Bizum a través de la pasarela de tu banco o de un proveedor de pagos, y si lo prefieres, también pago al recoger.",
      },
    ],
    searches: [
      "página web para tiendas",
      "web para comercio local",
      "tienda online pequeña",
      "web tienda de barrio",
      "reservar y recoger en tienda web",
      "web comercio local precio",
      "web para tiendas en Mallorca",
    ],
    related: ["productos-de-mallorca", "farmacias", "peluquerias-y-barberias"],
  },
  {
    slug: "productos-de-mallorca",
    name: "Productos de Mallorca",
    group: "comercio",
    forWho: "productores y tiendas de producto de Mallorca",
    title: "Tienda online para productos de Mallorca y productores",
    description:
      "Tienda online para productores de Mallorca: aceite, sobrasada, ensaïmadas o sal con envíos a la península y Europa, la historia de tu producto y varios idiomas.",
    h1: "Webs para productos de Mallorca que viajan más allá de la isla",
    lead: "Una tienda online con envíos a la península y a Europa, la historia de tu producto bien contada y la información que exige la venta de alimentos a distancia.",
    context: [
      "El turista prueba tu aceite o tu sobrasada en verano y en noviembre quiere volver a comprarla desde Düsseldorf o desde Madrid. Si no tienes tienda online, o la tienes solo en español, esa venta se pierde.",
      "Para vender fuera, el producto necesita contexto: quién lo hace, dónde y cómo. Una web con la historia, fotos del origen y fichas claras explica el precio frente al supermercado y te abre los regalos de empresa en Navidad.",
    ],
    mallorca:
      "Lo mallorquín vende, pero hay que contarlo como es: si tu producto está amparado por una indicación geográfica (Oli de Mallorca, Sobrasada de Mallorca, Ensaïmada de Mallorca…), la web lo explica y muestra el sello; si no, no se insinúa. Y el turista compra en inglés y alemán.",
    web: [
      {
        title: "Envíos por zonas",
        text: "Tarifas distintas para Baleares, península y Europa, y aviso claro si un producto no viaja a algún destino.",
      },
      {
        title: "Fichas con el etiquetado completo",
        text: "Ingredientes, alérgenos, cantidad neta y conservación visibles antes de comprar, como pide la venta de alimentos a distancia.",
      },
      {
        title: "Historia y origen",
        text: "Quién lo hace, la finca o el obrador y el proceso, con fotos reales que explican el precio.",
      },
      {
        title: "Lotes y regalos de empresa",
        text: "Packs para Navidad o eventos, con pedido por cantidad y tarjeta personalizada.",
      },
    ],
    automations: [
      {
        title: "Pedido directo a la agencia de transporte",
        text: "Cada pedido pagado genera la etiqueta de envío y el cliente recibe el número de seguimiento sin que lo copies a mano.",
      },
      {
        title: "Recompra después del viaje",
        text: "Quien compró en tu tienda o en tu web recibe en su idioma el aviso de temporada (aceite nuevo, Navidad) con el enlace para pedir.",
      },
      {
        title: "Pedidos de empresa ordenados",
        text: "Las solicitudes de lotes corporativos llegan con cantidad, fecha y direcciones de entrega en una hoja lista para preparar.",
      },
    ],
    agent:
      "Un agente de IA responde en inglés, alemán o español sobre productos, envíos y conservación, y ayuda a montar un lote. No hace afirmaciones de salud sobre los productos ni promete fechas de entrega: eso lo pasa a ti.",
    pack: [{ id: "tienda" }, { id: "idiomas", qty: 2 }],
    packNote:
      "Tienda online, inglés y alemán: lo mínimo para seguir vendiendo al cliente que te conoció en la isla.",
    faq: [
      {
        title: "¿Qué información tengo que poner en cada producto?",
        text: "En la venta a distancia de alimentos, la información obligatoria del etiquetado (ingredientes, alérgenos, cantidad, conservación…) debe estar disponible antes de comprar, según el Reglamento UE 1169/2011. Las fichas traen esos campos.",
      },
      {
        title: "¿Puedo enviar a Canarias o fuera de la UE?",
        text: "Se puede, pero Canarias y los países de fuera de la UE tienen trámites de aduana e impuestos propios. Lo habitual es empezar por Baleares, península y la UE, y añadir destinos cuando lo tengas resuelto con tu transportista.",
      },
      {
        title: "¿Puedo usar el sello de la indicación geográfica?",
        text: "Solo si tu producto está certificado por su consejo regulador. Si lo está, lo explicamos y mostramos el sello; si no, contamos su origen sin usar nombres protegidos.",
      },
      {
        title: "¿Y si ya vendo en marketplaces o tiendas gourmet?",
        text: "Puedes seguir haciéndolo. La web propia es donde cuentas tu historia y te quedas el contacto del cliente que repite.",
      },
    ],
    searches: [
      "tienda online productos de mallorca",
      "vender aceite online",
      "web para productores locales",
      "tienda online sobrasada",
      "vender productos mallorquines online",
      "web productos gourmet",
      "tienda online alimentación precio",
    ],
    related: ["bodegas", "tiendas-y-comercio-local", "catering"],
  },
  {
    slug: "bodegas",
    name: "Bodegas",
    group: "comercio",
    forWho: "bodegas y proyectos de enoturismo",
    title: "Web para bodegas con visitas, catas y tienda online",
    description:
      "Página web para bodegas con reserva de visitas y catas, tienda de vino con control de edad y versión en inglés y alemán. Enoturismo en Mallorca todo el año.",
    h1: "Webs para bodegas: catas reservadas y vino vendido todo el año",
    lead: "Visitas y catas con reserva online, una tienda de vino que verifica la mayoría de edad y la historia de tu viña en los idiomas de quien te visita.",
    context: [
      "El enoturista decide qué bodega visitar desde el hotel o desde el coche: mira horarios, precio de la cata y si puede reservar. Si tiene que llamar o escribir un email, reserva en la bodega de al lado.",
      "Después de la visita viene lo importante: que siga comprando tu vino desde casa. Una tienda online propia, con lotes y club de vino, convierte una tarde de verano en un cliente de todo el año.",
    ],
    mallorca:
      "Mallorca tiene dos denominaciones de origen, Binissalem y Pla i Llevant, y bodegas por toda la isla. Si la tuya está amparada, la web lo cuenta junto a tus variedades (manto negro, callet, prensal blanc…). El visitante llega sobre todo en temporada y a menudo habla inglés o alemán.",
    web: [
      {
        title: "Reserva de visitas y catas",
        text: "Tipos de visita, idioma, plazas y horario, con pago o señal al reservar para evitar ausencias.",
      },
      {
        title: "Tienda con verificación de edad",
        text: "Confirmación de mayoría de edad antes de comprar y entrega con comprobación de edad si tu transportista la ofrece.",
      },
      {
        title: "Fichas de vino completas",
        text: "Variedades, añada, crianza, notas de cata y maridaje, en texto que Google y la IA pueden leer.",
      },
      {
        title: "La bodega y su viña",
        text: "La finca, la familia o el enólogo y la zona, con fotos reales: lo que no tiene un vino de lineal de supermercado.",
      },
    ],
    automations: [
      {
        title: "Confirmación y recordatorio de visita",
        text: "Email el día antes, en el idioma del visitante, con la hora, cómo llegar y dónde aparcar.",
      },
      {
        title: "Club de vino",
        text: "Suscriptores que reciben un lote cada temporada, con cobro automático y aviso antes de cada envío.",
      },
      {
        title: "Seguimiento tras la cata",
        text: "Quien hizo la visita recibe un email con los vinos que probó y el enlace para pedirlos desde casa.",
      },
    ],
    agent:
      "Un agente de IA responde en el idioma del visitante sobre horarios, tipos de cata, accesibilidad y envíos, y gestiona la reserva. No confirma grupos grandes, eventos privados ni ventas a empresas: eso lo pasa a tu equipo.",
    pack: [{ id: "reservas" }, { id: "tienda" }, { id: "idiomas", qty: 2 }],
    packNote:
      "Reservas para las catas, tienda de vino e inglés y alemán: las tres patas del enoturismo en Mallorca.",
    faq: [
      {
        title: "¿Qué tengo que cumplir para vender vino online?",
        text: "Como mínimo, verificar que el comprador es mayor de edad antes de venderle alcohol. Si quieres enviar a particulares de otros países de la UE, hay impuestos especiales en destino: consúltalo con tu asesor antes de abrir esos envíos.",
      },
      {
        title: "¿Puedo poner el sello de la D.O.?",
        text: "Si tus vinos están certificados por la D.O. Binissalem o la D.O. Pla i Llevant, sí, en los vinos amparados y según las normas de su consejo regulador. Si no, se cuenta el origen sin usar el nombre protegido.",
      },
      {
        title: "¿Se conecta con mi programa de gestión o mi TPV?",
        text: "Si tu programa exporta stock y pedidos, sincronizamos la tienda; si no, la tienda lleva su propio stock y te avisa de cada venta.",
      },
      {
        title: "¿Las catas se pueden pagar por adelantado?",
        text: "Sí, con pago completo o señal al reservar, y una política de cancelación clara en cada idioma.",
      },
    ],
    searches: [
      "página web para bodegas",
      "web bodega con tienda online",
      "reserva de catas online",
      "enoturismo mallorca web",
      "tienda online de vino",
      "diseño web bodega",
      "web bodega precio",
    ],
    related: ["productos-de-mallorca", "fincas-para-eventos", "excursiones-y-actividades"],
  },
  {
    slug: "academias-y-escuelas-de-idiomas",
    name: "Academias y escuelas de idiomas",
    group: "formacion",
    forWho: "academias y escuelas de idiomas",
    title: "Páginas web para academias y escuelas de idiomas",
    description: `Web para academias y escuelas de idiomas con cursos y horarios, prueba de nivel, matrícula y pago online, desde ${basePlan.price} € + IVA. Menos cola en secretaría.`,
    h1: "Webs para academias: matrícula online, prueba de nivel y cuotas al día",
    lead: "Cursos y horarios claros, prueba de nivel online, matrícula con pago y recordatorios de cuota, para que septiembre no sea una cola en secretaría.",
    context: [
      "En septiembre y en enero todos preguntan lo mismo: qué nivel tengo, qué horario queda libre, cuánto cuesta. Si eso no está en la web, se convierte en llamadas, emails y cola en recepción justo en los días de más trabajo.",
      "Con los cursos bien explicados, una prueba de nivel online y la matrícula con pago, el alumno llega ya colocado en su grupo. Y los recordatorios de cuota y las listas de espera dejan de vivir en una libreta.",
    ],
    mallorca:
      "En Mallorca hay dos públicos muy distintos: el residente que prepara inglés o alemán para trabajar en turismo y el extranjero que aprende español o catalán. Una web con cursos intensivos de temporada y exámenes oficiales bien explicados sirve a los dos.",
    web: [
      {
        title: "Cursos con horarios y plazas",
        text: "Cada curso con nivel, días, horario, plazas libres y precio, actualizado sin rehacer un PDF.",
      },
      {
        title: "Prueba de nivel online",
        text: "Un test corto o una cita para la prueba oral, con el resultado en secretaría para asignar grupo.",
      },
      {
        title: "Matrícula y pago",
        text: "El alumno rellena sus datos, acepta las condiciones y paga la matrícula online, sin pasar por recepción.",
      },
      {
        title: "Exámenes oficiales",
        text: "Qué certificados preparas (Cambridge, Goethe, DELE, EOI…), cuándo hay convocatoria y cómo inscribirse.",
      },
    ],
    automations: [
      {
        title: "Recordatorio de cuotas",
        text: "Aviso antes de cada cobro y otro si un recibo vuelve, sin que secretaría tenga que perseguir a nadie.",
      },
      {
        title: "Lista de espera automática",
        text: "Si se libera una plaza en un grupo lleno, el primero de la lista recibe aviso para confirmarla.",
      },
      {
        title: "Avisos a alumnos y familias",
        text: "Festivos, cambios de aula o clases de recuperación, enviados a cada grupo por email o por WhatsApp con la API oficial.",
      },
    ],
    agent:
      "Un agente de IA responde sobre cursos, horarios, precios publicados y exámenes, y propone hueco para la prueba de nivel. No asigna nivel ni grupo por su cuenta ni gestiona bajas o devoluciones: eso pasa a secretaría.",
    pack: [{ id: "reservas" }, { id: "seo" }],
    packNote:
      "Reservas para pruebas de nivel y clases de prueba, y SEO local porque el alumno busca academia cerca de casa.",
    faq: [
      {
        title: "¿Se conecta con mi programa de gestión de la academia?",
        text: "Depende del programa: si permite importar alumnos o tiene API, la matrícula entra directa; si no, llega en un formato que se importa en un paso.",
      },
      {
        title: "¿Puedo cobrar las cuotas por domiciliación?",
        text: "Sí. La matrícula se paga con tarjeta online y las cuotas por domiciliación SEPA, con el mandato firmado en la propia matrícula.",
      },
      {
        title: "¿La prueba de nivel la corrige la web?",
        text: "Una prueba tipo test puede corregirse sola y orientar el nivel, pero conviene que lo confirme un profesor, sobre todo en la parte oral.",
      },
      {
        title: "¿Necesito la web en inglés?",
        text: "Si enseñas español a extranjeros, sí: es el idioma en el que te buscan. Si das refuerzo o inglés a residentes, con español basta y el idioma se añade más adelante.",
      },
    ],
    searches: [
      "página web para academias",
      "web escuela de idiomas",
      "matrícula online academia",
      "prueba de nivel online academia",
      "diseño web academia de inglés",
      "web academia precio",
      "academia de idiomas Mallorca web",
    ],
    related: ["autoescuelas", "asociaciones-y-ong", "gimnasios-y-entrenadores"],
  },
  {
    slug: "autoescuelas",
    name: "Autoescuelas",
    group: "formacion",
    forWho: "autoescuelas",
    title: `Webs para autoescuelas con matrícula online desde ${basePlan.price} €`,
    description:
      "Página web para autoescuelas con permisos y packs explicados, matrícula online, reserva de prácticas y recordatorios. El alumno se apunta sin ir a la oficina.",
    h1: "Webs para autoescuelas que matriculan sin colas en la oficina",
    lead: "Permisos y packs explicados con claridad, matrícula online, horarios de prácticas visibles y recordatorios para que nadie falte a clase ni al examen.",
    context: [
      "Quien se va a sacar el carné compara autoescuelas por lo que incluye el pack, por la ubicación y por lo que cuentan los amigos. Si tu web no explica qué entra en cada pack ni cuánto cuesta una práctica extra, la comparación la gana quien sí lo dice.",
      "Dentro, el lío es de agenda: prácticas que se cambian, alumnos que no aparecen, tasas de la DGT que hay que recordar. Matrícula online, reserva de prácticas y avisos automáticos ordenan el día de profesores y oficina.",
    ],
    mallorca:
      "En Mallorca hay alumnos con un perfil muy concreto: residentes extranjeros que necesitan el permiso español y conductores que buscan el C o el D para trabajar en transporte y turismo. Explicar bien cada caso, y en inglés si das clases en inglés, te diferencia.",
    web: [
      {
        title: "Cada permiso con su página",
        text: "B, A2, A, AM, C, D o CAP: requisitos, edad mínima, pasos y qué incluye cada pack.",
      },
      {
        title: "Packs sin letra pequeña",
        text: "Matrícula, teórica, prácticas incluidas y tasas de examen por separado, para comparar sin llamar.",
      },
      {
        title: "Matrícula online",
        text: "El alumno rellena sus datos, sube DNI o NIE y foto, y paga la matrícula desde el móvil.",
      },
      {
        title: "Test y teoría a mano",
        text: "Acceso a tu plataforma de test o a tu material de teoría desde la web, con el enlace siempre visible.",
      },
    ],
    automations: [
      {
        title: "Recordatorio de prácticas",
        text: "Aviso por WhatsApp (API oficial de WhatsApp Business) el día antes de cada práctica, con hora y punto de recogida.",
      },
      {
        title: "Huecos libres a la lista de espera",
        text: "Si un alumno cancela, el hueco se ofrece a quien lo había pedido, sin llamar uno por uno.",
      },
      {
        title: "Seguimiento hasta el examen",
        text: "Avisos al alumno con las prácticas que lleva, la fecha de su examen y los documentos que le faltan.",
      },
    ],
    agent:
      "Un agente de IA responde sobre permisos, packs, horarios y documentación, y deja la matrícula a medio rellenar para que la oficina la cierre. No decide si un alumno está listo para examen ni da fechas de la DGT: eso lo confirman tus profesores.",
    pack: [{ id: "seo" }, { id: "reservas" }],
    packNote:
      "SEO local porque la autoescuela se elige cerca de casa o del instituto, y reservas para las prácticas.",
    faq: [
      {
        title: "¿Pongo los precios de los packs en la web?",
        text: "Puedes, y ayuda a que te comparen bien. Lo importante es que quede claro qué incluye cada pack y qué se paga aparte, como las tasas de la DGT o las prácticas extra.",
      },
      {
        title: "¿Se conecta con mi programa de gestión de autoescuela?",
        text: "Si tu programa permite importar alumnos y prácticas, lo conectamos; si no, la matrícula llega ordenada para darla de alta en un paso.",
      },
      {
        title: "¿Los alumnos pueden reservar prácticas solos?",
        text: "Sí, dentro de los huecos que tú abras para cada profesor y vehículo, con reglas para cancelar con antelación.",
      },
      {
        title: "¿Me sirve para el CAP o los permisos profesionales?",
        text: "Sí. Los cursos con fecha fija (CAP, mercancías peligrosas) se publican con plazas y matrícula online, igual que un curso de academia.",
      },
    ],
    searches: [
      "página web para autoescuelas",
      "web autoescuela con matrícula online",
      "diseño web autoescuela",
      "reserva de prácticas autoescuela",
      "captar alumnos autoescuela",
      "autoescuela Mallorca web",
    ],
    related: ["academias-y-escuelas-de-idiomas", "talleres-mecanicos", "corredurias-de-seguros"],
  },
  {
    slug: "asociaciones-y-ong",
    name: "Asociaciones y ONG",
    group: "formacion",
    forWho: "asociaciones, fundaciones y ONG",
    title: `Página web para asociaciones y ONG desde ${basePlan.price} €`,
    description: `Web para asociaciones y ONG con altas de socios, donaciones online, voluntariado y transparencia, desde ${basePlan.price} € + IVA. Para presupuestos ajustados.`,
    h1: "Webs para asociaciones y ONG: más socios, donaciones y voluntarios",
    lead: "Hacerse socio y donar en pocos pasos, apuntarse como voluntario y consultar las cuentas: lo que tu entidad necesita, sin gastar en lo que no.",
    context: [
      "En una asociación nadie tiene tiempo para la web: la lleva un voluntario hasta que se va, y se queda con la última noticia de hace años. Mientras, las altas de socios siguen en papel y las donaciones dependen de un número de cuenta en el pie.",
      "Una web sencilla de mantener, con alta de socio y donación online, recibos domiciliados y una sección de transparencia, da confianza a quien aporta y quita papeleo a la junta directiva.",
    ],
    mallorca:
      "En Mallorca el tejido asociativo es de barrio y de pueblo: entidades culturales, deportivas, vecinales o de ayuda social que viven de cuotas y de subvenciones del Consell o del ayuntamiento. Si atiendes a residentes extranjeros, una versión en inglés suma socios y voluntarios.",
    web: [
      {
        title: "Hazte socio online",
        text: "Formulario de alta con la cuota elegida y el mandato SEPA para domiciliarla, sin imprimir nada.",
      },
      {
        title: "Donaciones sencillas",
        text: "Donación puntual o periódica con tarjeta, domiciliación o Bizum si tu banco lo ofrece a entidades.",
      },
      {
        title: "Voluntariado",
        text: "Qué tareas hay, cuándo y dónde, con un formulario para apuntarse que llega a quien coordina.",
      },
      {
        title: "Transparencia",
        text: "Estatutos, junta directiva, memoria de actividades y cuentas, publicados donde el donante los encuentra.",
      },
    ],
    automations: [
      {
        title: "Certificados de donación",
        text: "Si tu entidad puede emitir certificados con deducción, se generan cada año con los datos de cada donante.",
      },
      {
        title: "Recibos y cuotas",
        text: "Remesa de recibos de socios lista para el banco y aviso amable a quien tiene una cuota devuelta.",
      },
      {
        title: "Agradecimiento al donante",
        text: "Cada donación recibe un email de agradecimiento al momento y, de vez en cuando, noticias de en qué se ha usado.",
      },
    ],
    agent:
      "Un agente de IA responde sobre actividades, cómo hacerse socio, cómo donar y cómo ser voluntario, y recoge los datos. No atiende casos personales de personas en situación vulnerable: esos los deriva siempre a alguien de la entidad.",
    pack: [{ id: "blog" }],
    packNote:
      "Solo el blog sobre la Web Esencial: noticias, actividades y memoria, que es lo que mantiene viva la web de una entidad.",
    faq: [
      {
        title: "¿Las donaciones online desgravan?",
        text: "Depende de tu entidad: solo las acogidas al régimen fiscal de la Ley de mecenazgo pueden emitir certificados con deducción, y entonces hay que pedir el NIF del donante para informarlo a Hacienda. Consúltalo con tu asesor antes de anunciarlo.",
      },
      {
        title: "¿Puede mantenerla un voluntario sin conocimientos?",
        text: "Sí. Podemos dejarla preparada para que publiquéis vosotros noticias y actividades desde el móvil, o nos encargamos nosotros.",
      },
      {
        title: "¿Cómo cobro las cuotas de socio?",
        text: "Con domiciliación SEPA: el socio firma el mandato al darse de alta y la remesa se prepara para tu banco. También puedes ofrecer pago con tarjeta.",
      },
      {
        title: "¿Tengo que publicar las cuentas?",
        text: "Si recibes subvenciones o ayudas públicas, la normativa de transparencia puede obligarte a publicar cierta información; tu asesor te dirá qué. Aunque no sea obligatorio, publicarlas da confianza al donante.",
      },
    ],
    searches: [
      "página web para asociaciones",
      "web para ong",
      "donaciones online ong",
      "web asociación barata",
      "alta de socios online",
      "web para fundaciones",
      "web asociación Mallorca",
    ],
    related: ["ayuda-a-domicilio", "academias-y-escuelas-de-idiomas", "residencias-de-mayores"],
  },
];
