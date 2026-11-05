import { basePlan } from "../pricing";
import type { Niche } from "./types";

/** Salud, bienestar y mayores. Reglas de redacción en ./types.ts. */
export const salud: Niche[] = [
  {
    slug: "clinicas-dentales",
    name: "Clínicas dentales",
    group: "salud",
    forWho: "clínicas dentales",
    title: `Página web para clínicas dentales desde ${basePlan.price} €`,
    description: `Web para clínica dental con cita online, tratamientos explicados y SEO local, desde ${basePlan.price} € + IVA. Para el paciente que busca dentista cerca.`,
    h1: "Webs para clínicas dentales que el paciente entiende y reserva",
    lead: "Tratamientos explicados sin jerga, cita online y la información que Google y la IA necesitan para recomendarte cuando alguien busca dentista cerca.",
    context: [
      "El paciente compara clínicas antes de llamar: quiere saber qué es un implante, cuántas visitas lleva, si hay financiación y si puede pedir cita sin esperar al teléfono. Si la web solo tiene una foto del equipo y un número, llama a otra.",
      "Doctoralia y los directorios ayudan a captar, pero el paciente se queda en su ficha, no en la tuya. Una web propia con cita online y los tratamientos bien explicados trabaja para tu clínica. Es lo que hacemos con las clínicas dentales con las que trabajamos.",
    ],
    mallorca:
      "En Mallorca muchos pacientes son residentes alemanes o británicos que quieren entender el presupuesto en su idioma, y en verano el turista con dolor de muelas busca «dentist near me» desde el hotel. El resto del año cuenta aparecer en Maps en tu barrio o pueblo.",
    web: [
      {
        title: "Cita online por motivo",
        text: "El paciente elige primera visita, revisión o urgencia y un hueco libre; a recepción le llega el aviso con el motivo.",
      },
      {
        title: "Tratamientos explicados",
        text: "Implantes, ortodoncia invisible o blanqueamiento en lenguaje claro: en qué consiste, cuántas visitas y qué esperar.",
      },
      {
        title: "Financiación clara",
        text: "Cómo se puede pagar un tratamiento largo y con qué entidad, explicado sin letra pequeña escondida.",
      },
      {
        title: "Datos de centro sanitario",
        text: "Número de registro sanitario de la clínica y profesionales colegiados a la vista: transmite confianza y lo exigen muchas normas de publicidad sanitaria.",
      },
    ],
    automations: [
      {
        title: "Recordatorio de cita",
        text: "Aviso el día antes por SMS o por WhatsApp (API oficial de WhatsApp Business) con un enlace para confirmar o cambiar la cita.",
      },
      {
        title: "Aviso de revisión",
        text: "Cuando toca la limpieza o la revisión anual, el paciente recibe un mensaje para pedir cita sin que recepción tenga que llamar.",
      },
      {
        title: "Seguimiento del presupuesto",
        text: "Si un paciente recibe un presupuesto y no responde, un recordatorio amable pasados unos días para resolver sus dudas.",
      },
    ],
    agent:
      "Un agente de IA atiende en varios idiomas las dudas de siempre (horario, aparcamiento, si trabajáis con su aseguradora, cómo es la primera visita) y recoge la petición de cita. No diagnostica ni da precios cerrados de un tratamiento: eso queda para la consulta con el dentista.",
    pack: [{ id: "reservas" }, { id: "seo" }, { id: "idiomas", qty: 1 }],
    packNote:
      "Cita online, SEO local para competir en «dentista cerca» y la web en inglés para el paciente extranjero.",
    faq: [
      {
        title: "¿Qué tengo que poner en la web por ser centro sanitario?",
        text: "Es lo recomendable: muchas normas de publicidad sanitaria piden el número de registro del centro, y conviene identificar a cada dentista con su número de colegiado. Lo dejamos visible; confirma con tu colegio de dentistas qué te aplica.",
      },
      {
        title: "¿Se puede conectar con Doctoralia o con mi programa de gestión?",
        text: "Sí. Podemos enlazar tu calendario de Doctoralia o integrar la cita online con tu agenda, según lo que permita tu programa. Lo revisamos antes de empezar.",
      },
      {
        title: "¿Cómo se protegen los datos de los pacientes?",
        text: "Los datos de salud son una categoría especial del RGPD. El formulario pide solo lo imprescindible, viaja cifrado y con consentimiento, y el historial clínico nunca pasa por la web.",
      },
      {
        title: "¿Puedo anunciar la financiación de los tratamientos?",
        text: "Sí, explicando cómo funciona. Si publicas cuotas o importes, pide a la entidad financiera las condiciones completas que deben acompañarlos y confírmalo con ella antes de publicar.",
      },
    ],
    searches: [
      "página web clínica dental",
      "diseño web para dentistas",
      "web clínica dental con cita online",
      "marketing dental",
      "página web dentista precio",
      "web clínica dental Mallorca",
    ],
    related: ["medicina-estetica", "fisioterapeutas", "podologos"],
  },
  {
    slug: "fisioterapeutas",
    name: "Fisioterapeutas",
    group: "salud",
    forWho: "fisioterapeutas",
    title: `Web para fisioterapeutas con citas y bonos, desde ${basePlan.price} €`,
    description: `Página web para fisioterapeutas con cita online, bonos de sesiones y ejercicios para casa, desde ${basePlan.price} € + IVA. Menos llamadas en mitad de una sesión.`,
    h1: "Webs para fisioterapeutas: citas online, bonos y menos huecos",
    lead: "Que el paciente reserve su sesión, compre un bono y tenga a mano sus ejercicios mientras tú estás en la camilla y no al teléfono.",
    context: [
      "El fisioterapeuta trabaja con las manos ocupadas: no puede coger el teléfono en mitad de una sesión, y cada llamada perdida es un paciente que reserva en otro centro. Encima, las sesiones sueltas, los bonos y las anulaciones de última hora se apuntan a mano.",
      "Con cita online por tipo de sesión y profesional, bonos controlados y recordatorios automáticos, la agenda se ordena sin recepción a tiempo completo. Y con tus especialidades bien explicadas llega el paciente que buscas: deportivo, de suelo pélvico o neurológico.",
    ],
    mallorca:
      "En primavera y otoño Mallorca se llena de ciclistas que se cargan las piernas y buscan fisio en inglés o alemán cerca del hotel. El resto del año tu paciente es de la zona: pesa aparecer en Maps y tener reseñas recientes.",
    web: [
      {
        title: "Cita por tipo de sesión",
        text: "Primera valoración, sesión de seguimiento o punción seca, cada una con su duración y con el fisio que el paciente elija.",
      },
      {
        title: "Bonos de sesiones",
        text: "El paciente compra un bono de varias sesiones y tú dejas de llevar la cuenta en una libreta.",
      },
      {
        title: "Ejercicios para casa",
        text: "Los ejercicios que pautas, en vídeo o con fotos, en una página que el paciente abre con un enlace al salir de consulta.",
      },
      {
        title: "Colegiado y especialidades",
        text: "Tu número de colegiado y tus áreas (deportiva, suelo pélvico, neurológica) a la vista: da confianza y Google entiende qué tratas.",
      },
    ],
    automations: [
      {
        title: "Recordatorio con anulación fácil",
        text: "Mensaje el día antes con un enlace para cambiar o anular la cita; el hueco vuelve a quedar libre en la agenda.",
      },
      {
        title: "Aviso de bono a punto de acabar",
        text: "Cuando quedan pocas sesiones del bono, el paciente recibe un aviso para renovarlo antes de la siguiente cita.",
      },
      {
        title: "Seguimiento tras el alta",
        text: "Unas semanas después del alta, un mensaje para saber cómo sigue y recordarle que estás ahí si vuelve la molestia.",
      },
    ],
    agent:
      "Un agente de IA responde qué tipo de sesión pedir, cuánto dura, si atiendes a domicilio o con mutua, y ofrece los huecos libres. No valora lesiones ni recomienda ejercicios: ante cualquier dolor, deriva al fisioterapeuta.",
    pack: [{ id: "reservas" }, { id: "seo" }],
    packNote:
      "Cita online con bonos y SEO local: lo justo para que te encuentre y reserve el paciente de tu zona.",
    faq: [
      {
        title: "¿Tengo que poner mi número de colegiado en la web?",
        text: "En una profesión colegiada, lo correcto es identificar en la web tu colegio y tu número de colegiado; si tienes centro, también su número de registro sanitario. Confírmalo con tu colegio profesional.",
      },
      {
        title: "¿Puedo seguir con mi programa de citas?",
        text: "Sí. Si ya usas un programa con reserva online, lo integramos en la web; si no, te dejamos una cita online propia con bonos y recordatorios.",
      },
      {
        title: "¿Puedo subir vídeos de ejercicios con pacientes?",
        text: "Solo con su consentimiento por escrito. Lo más sencillo es grabarlos con alguien del equipo y dejarlos en una página que solo abre quien tiene el enlace.",
      },
      {
        title: "¿Y si atiendo a domicilio o en varios centros?",
        text: "La cita online muestra cada centro con su horario y, para domicilio, pide la dirección y la zona antes de confirmar.",
      },
    ],
    searches: [
      "página web para fisioterapeutas",
      "web fisioterapia con cita online",
      "diseño web clínica de fisioterapia",
      "reserva online fisioterapeuta",
      "marketing para fisioterapeutas",
      "web fisioterapeuta precio",
      "web fisioterapia Mallorca",
    ],
    related: ["podologos", "yoga-y-pilates", "gimnasios-y-entrenadores"],
  },
  {
    slug: "psicologos",
    name: "Psicólogos",
    group: "salud",
    forWho: "psicólogos",
    title: "Página web para psicólogos: consulta online y discreción",
    description: `Diseño web para psicólogos con primera cita online, terapia por videollamada y máxima privacidad, desde ${basePlan.price} € + IVA. Confianza sin promesas.`,
    h1: "Webs para psicólogos que transmiten calma y cuidan la privacidad",
    lead: "Una web que explica cómo trabajas, deja pedir la primera cita sin dar explicaciones por teléfono y trata los datos con la discreción que exige tu consulta.",
    context: [
      "Pedir ayuda psicológica cuesta. Mucha gente busca de noche, desde el móvil, y lee con calma antes de decidirse; si la web es fría, pide demasiados datos o promete resultados, cierra la pestaña. Quiere saber cómo trabajas, si te puede ver online y cómo es la primera sesión.",
      "Una web clara con tu enfoque, tus áreas y la primera cita online quita la barrera de la llamada. Y bien preparada para Google y la IA, aparece cuando alguien busca un psicólogo de ansiedad, de pareja o infantil cerca de casa.",
    ],
    mallorca:
      "En Mallorca hay muchos residentes extranjeros que solo se sienten cómodos haciendo terapia en su idioma, y la consulta online te permite atender también en Menorca, Ibiza y Formentera. Una web en inglés o alemán abre esa puerta.",
    web: [
      {
        title: "Primera cita sin llamar",
        text: "El paciente elige presencial u online y un horario libre, con un formulario mínimo: nombre, contacto y poco más.",
      },
      {
        title: "Tu enfoque, en claro",
        text: "Cómo trabajas, con quién (adultos, adolescentes, parejas) y cómo es la primera sesión, sin tecnicismos ni promesas de curación.",
      },
      {
        title: "Terapia online explicada",
        text: "Cómo funcionan las sesiones por videollamada, qué necesita el paciente y cuándo recibe el enlace.",
      },
      {
        title: "Colegiación visible",
        text: "Número de colegiado y habilitación sanitaria, si la tienes, a la vista: es lo que da confianza a quien no te conoce.",
      },
    ],
    automations: [
      {
        title: "Recordatorio discreto",
        text: "El recordatorio no dice «psicólogo» ni «terapia»: solo día, hora y tu nombre, por si otra persona ve el móvil del paciente.",
      },
      {
        title: "Enlace de videollamada automático",
        text: "Al confirmar una cita online, el paciente recibe el enlace de la sesión y unas pautas sencillas para conectarse.",
      },
      {
        title: "Cobro y factura de la sesión",
        text: "Pago por adelantado de la sesión online y factura enviada al paciente, sin hacerla a mano cada vez.",
      },
    ],
    agent:
      "Un agente de IA resuelve dudas prácticas (si atiendes online, cómo es la primera cita, formas de pago) y ofrece horarios. No hace de terapeuta ni entra en lo que le pasa a la persona: si detecta una urgencia, muestra el 024 y el 112 y te avisa.",
    pack: [{ id: "reservas" }, { id: "blog" }],
    packNote:
      "Primera cita online y un blog con artículos útiles, que es lo que lee quien todavía se está informando.",
    faq: [
      {
        title: "¿Qué datos puedo pedir en el formulario?",
        text: "Los mínimos. Los datos de salud son categoría especial en el RGPD, así que el motivo de consulta no se pide por escrito en la web: se habla en la primera sesión.",
      },
      {
        title: "¿Puedo poner testimonios de pacientes?",
        text: "Mejor no: comprometen la confidencialidad y pueden sonar a promesa de resultado. Ante la duda, consulta el código deontológico de tu colegio y explica bien tu forma de trabajar.",
      },
      {
        title: "¿Tengo que poner un número de registro sanitario?",
        text: "Si tu consulta está autorizada como centro sanitario, lo recomendable es mostrar su número de registro en la web y en la publicidad, junto a tu número de colegiado. Tu colegio te confirma qué te aplica.",
      },
      {
        title: "¿La terapia online se hace desde la web?",
        text: "La web lleva al paciente a reservar y le envía el enlace; la sesión se hace en la plataforma de videollamada que tú elijas. Te ayudamos a dejarlo configurado.",
      },
    ],
    searches: [
      "página web para psicólogos",
      "diseño web psicólogo",
      "web para psicólogos con cita online",
      "marketing para psicólogos",
      "web consulta de psicología",
      "psicólogo online página web",
      "web psicólogo Mallorca",
    ],
    related: ["nutricionistas", "fisioterapeutas", "yoga-y-pilates"],
  },
  {
    slug: "nutricionistas",
    name: "Nutricionistas",
    group: "salud",
    forWho: "dietistas-nutricionistas",
    title: "Web para nutricionistas con consulta online y citas",
    description: `Página web para dietistas-nutricionistas con consulta online, planes y seguimiento, desde ${basePlan.price} € + IVA. Sin promesas de kilos: rigor y cita fácil.`,
    h1: "Webs para nutricionistas que venden rigor, no milagros",
    lead: "Tu forma de trabajar, tus planes y la consulta online en una web que se distingue de las dietas milagro y deja reservar la primera visita sin llamar.",
    context: [
      "En nutrición compites con influencers, dietas milagro y apps gratis. Quien busca un profesional quiere ver titulación, cómo trabajas y qué incluye el seguimiento, no fotos de antes y después ni promesas de kilos.",
      "Una web que explica tus planes (deportiva, digestiva, embarazo, cambio de hábitos), deja reservar online y envía recordatorios de revisión te ahorra mensajes. Con artículos útiles, apareces cuando alguien pregunta a Google o a la IA por un nutricionista titulado.",
    ],
    mallorca:
      "Con la consulta online atiendes igual en Palma que en Menorca, Ibiza o Formentera, y a residentes extranjeros que prefieren el inglés. En consulta presencial, lo que cuenta es salir en Maps en tu zona y tener las reseñas al día.",
    web: [
      {
        title: "Consulta online o presencial",
        text: "El paciente elige modalidad y horario; si es online, recibe el enlace de la videollamada al reservar.",
      },
      {
        title: "Planes explicados",
        text: "Qué incluye cada plan, cuántas revisiones y cómo es el seguimiento, para que nadie llegue esperando una dieta en un folio.",
      },
      {
        title: "Titulación y colegiado",
        text: "Grado en Nutrición Humana y Dietética y número de colegiado visibles: lo que te separa de quien vende dietas sin formación.",
      },
      {
        title: "Recetas y artículos",
        text: "Una sección de recetas y textos útiles que tus pacientes comparten y que Google posiciona por búsquedas concretas.",
      },
    ],
    automations: [
      {
        title: "Recordatorio de revisión",
        text: "Cuando toca la siguiente revisión, el paciente recibe un mensaje para reservarla y no se descuelga del plan.",
      },
      {
        title: "Cuestionario antes de la primera visita",
        text: "Al reservar le llega un formulario seguro sobre hábitos y objetivos, y tú lo tienes leído antes de empezar.",
      },
      {
        title: "Envío del plan tras la consulta",
        text: "El plan y las pautas le llegan por email en cuanto los cierras, sin adjuntar archivos a mano.",
      },
    ],
    agent:
      "Un agente de IA explica cómo funciona la consulta online, qué incluyen los planes y qué huecos tienes libres. No da dietas, no calcula calorías ni opina sobre suplementos: eso lo deriva siempre a ti.",
    pack: [{ id: "reservas" }, { id: "blog" }],
    packNote:
      "Citas online y blog de recetas y artículos: así te encuentra quien busca un nutricionista y no una dieta.",
    faq: [
      {
        title: "¿Puedo mostrar fotos de antes y después?",
        text: "Con consentimiento por escrito se puede, pero no lo recomendamos: suenan a promesa de resultado. Funciona mejor explicar tu método; ante la duda, consulta con tu colegio.",
      },
      {
        title: "¿Puedo pedir analíticas o datos de salud por la web?",
        text: "Mejor no en un formulario abierto: son datos de categoría especial en el RGPD. Lo prudente es que el paciente los traiga a consulta o los envíe por un canal seguro con su consentimiento.",
      },
      {
        title: "¿Puedo vender planes o packs de revisiones online?",
        text: "Sí. Puedes cobrar la primera consulta o un pack de revisiones al reservar, y evitas huecos de quien reserva y no aparece.",
      },
      {
        title: "¿Tengo que escribir yo los artículos?",
        text: "No necesariamente. Puedes darnos ideas o borradores y los dejamos listos para publicar; tú revisas el contenido para que sea riguroso.",
      },
    ],
    searches: [
      "página web para nutricionistas",
      "web dietista nutricionista",
      "diseño web nutricionista",
      "web nutricionista online",
      "marketing para nutricionistas",
      "web nutricionista con citas",
      "nutricionista Mallorca página web",
    ],
    related: ["psicologos", "gimnasios-y-entrenadores", "yoga-y-pilates"],
  },
  {
    slug: "medicina-estetica",
    name: "Medicina estética",
    group: "salud",
    forWho: "clínicas de medicina estética",
    title: `Web para clínicas de medicina estética desde ${basePlan.price} €`,
    description: `Página web para medicina estética con primera valoración online y publicidad sanitaria en regla, desde ${basePlan.price} € + IVA. Confianza médica sin promesas.`,
    h1: "Webs para medicina estética: confianza médica antes que promesas",
    lead: "Tratamientos explicados con rigor, el equipo médico a la vista y una primera valoración fácil de pedir, dentro de lo que permite la publicidad sanitaria.",
    context: [
      "En medicina estética el paciente compara mucho y desconfía más: quiere saber quién le va a tratar, si es médico y qué riesgos tiene un relleno o un láser. Las webs llenas de promesas y descuentos le alejan, y además pueden chocar con la normativa de publicidad sanitaria.",
      "Una web sobria, con el equipo médico identificado, cada tratamiento explicado (en qué consiste, cuántas sesiones, cuidados después) y la primera valoración como paso natural da más confianza que una oferta. Y te protege si alguien revisa tu publicidad.",
    ],
    mallorca:
      "En Mallorca muchos pacientes son residentes extranjeros que quieren entender el tratamiento, los cuidados posteriores y el consentimiento en su idioma. El paciente local te busca en Maps por barrio y por tratamiento.",
    web: [
      {
        title: "Primera valoración médica",
        text: "El paciente reserva una valoración con el médico antes de cualquier tratamiento, que es como debe empezar.",
      },
      {
        title: "Tratamientos sin promesas",
        text: "Qué es, para quién está indicado, sesiones, cuidados y posibles efectos, con tono informativo y no de oferta.",
      },
      {
        title: "Equipo médico identificado",
        text: "Nombre, especialidad y número de colegiado de cada médico, y el número de registro sanitario de la clínica.",
      },
      {
        title: "Imágenes con prudencia",
        text: "Si usas casos reales, con consentimiento por escrito, sin retoques y sin presentarlos como resultado garantizado.",
      },
    ],
    automations: [
      {
        title: "Indicaciones antes y después",
        text: "Al reservar un tratamiento, el paciente recibe las indicaciones previas y, al terminar, los cuidados para casa.",
      },
      {
        title: "Recordatorio de sesión o revisión",
        text: "Cuando toca la siguiente sesión o la revisión, un mensaje para reservarla sin depender de que recepción llame.",
      },
      {
        title: "Consentimiento leído con calma",
        text: "El paciente recibe el consentimiento informado antes de la cita, lo comenta con el médico y lo firma en consulta.",
      },
    ],
    agent:
      "Un agente de IA explica en varios idiomas en qué consiste cada tratamiento, cómo es la primera valoración y qué huecos hay. No recomienda tratamientos ni dice si alguien es candidato: eso lo decide el médico en consulta.",
    pack: [{ id: "reservas" }, { id: "seo" }, { id: "idiomas", qty: 1 }],
    packNote:
      "Cita de valoración online, SEO local por tratamiento y un idioma más para el paciente extranjero.",
    faq: [
      {
        title: "¿Qué no puedo decir en la web?",
        text: "La publicidad sanitaria no permite garantizar resultados ni sugerirlos, y conviene que lleve el número de registro sanitario del centro. Escribimos los textos con ese criterio; para dudas concretas, consulta con tu colegio de médicos.",
      },
      {
        title: "¿Puedo poner fotos de antes y después?",
        text: "Es delicado. Si las usas, con consentimiento por escrito del paciente, sin retoques ni filtros y aclarando que cada caso es distinto. Si dudas, explica el tratamiento sin ellas y consúltalo con tu asesor.",
      },
      {
        title: "¿Puedo publicar ofertas y descuentos?",
        text: "Con cuidado. En un acto médico, los reclamos tipo «2x1» o con cuenta atrás pueden chocar con la normativa y con el código deontológico. Mejor informar con claridad y confirmar cualquier campaña con tu asesor.",
      },
      {
        title: "¿La web puede estar en varios idiomas?",
        text: "Sí. Puedes tenerla en español e inglés y añadir alemán u otro idioma si tienes ese paciente. Conviene que el equipo médico lea la versión traducida de cada tratamiento.",
      },
    ],
    searches: [
      "página web medicina estética",
      "diseño web clínica estética",
      "web clínica de medicina estética",
      "marketing medicina estética",
      "publicidad sanitaria medicina estética",
      "web clínica estética Mallorca",
    ],
    related: ["clinicas-dentales", "centros-de-estetica", "nutricionistas"],
  },
  {
    slug: "centros-de-estetica",
    name: "Centros de estética",
    group: "bienestar",
    forWho: "centros de estética",
    title: "Diseño web para centros de estética y uñas con reservas",
    description: `Web para centros de estética, uñas y depilación con reserva por servicio y profesional, bonos y tu Instagram integrado, desde ${basePlan.price} € + IVA.`,
    h1: "Webs para centros de estética con reserva por servicio y profesional",
    lead: "Tu carta de servicios con duración y precio, reservas con la profesional que prefiere cada cliente y tu Instagram integrado, para que la cita no se quede en un mensaje privado.",
    context: [
      "En un centro de estética las citas llegan por WhatsApp, por Instagram y por teléfono, a menudo mientras estás con una clienta. Cada servicio dura distinto, no todas las profesionales hacen lo mismo y un hueco mal calculado descuadra la tarde.",
      "Una web con reserva por servicio y profesional calcula la duración sola, muestra solo los huecos reales y manda el recordatorio. Instagram sigue siendo tu escaparate, pero el enlace de la bio lleva a reservar, no a un «escríbeme por privado».",
    ],
    mallorca:
      "Mallorca es destino de bodas, y hay novias e invitadas que reservan uñas, maquillaje o depilación desde fuera, en inglés o alemán, antes de llegar. El resto del año tu clienta es del barrio: mandan Maps y las reseñas.",
    web: [
      {
        title: "Reserva por servicio y profesional",
        text: "Cada servicio con su duración y cada profesional con lo que hace; la clienta solo ve los huecos que de verdad encajan.",
      },
      {
        title: "Carta de servicios clara",
        text: "Faciales, uñas, pestañas o depilación, cada uno con duración, precio y qué incluye, fácil de actualizar.",
      },
      {
        title: "Bonos de tratamientos",
        text: "Bonos de depilación o de faciales que la clienta compra online y va canjeando al reservar cada sesión.",
      },
      {
        title: "Instagram en la web",
        text: "Tus últimas publicaciones en la web y un enlace de reserva en la bio: el trabajo que enseñas lleva directo a la agenda.",
      },
    ],
    automations: [
      {
        title: "Recordatorio con preparación",
        text: "El día antes, recordatorio con lo que conviene saber: venir sin crema para la depilación o sin esmalte para la manicura.",
      },
      {
        title: "Aviso de mantenimiento",
        text: "Pasadas unas semanas, aviso para el relleno de uñas, las pestañas o la siguiente sesión de depilación.",
      },
      {
        title: "Clientas que no vuelven",
        text: "Si alguien lleva meses sin reservar, un mensaje con una novedad o un recordatorio amable para volver.",
      },
    ],
    agent:
      "Un agente de IA responde en la web o por WhatsApp (con la API oficial de WhatsApp Business) qué servicio pedir, cuánto dura y qué huecos hay, y deja la reserva hecha. No da consejos sobre la piel, alergias o reacciones: eso lo deriva siempre a una profesional.",
    pack: [{ id: "reservas" }, { id: "seo" }],
    packNote:
      "Reservas por servicio y profesional y SEO local: la clienta del barrio te encuentra en Maps y reserva sin escribirte.",
    faq: [
      {
        title: "¿Puedo seguir usando Booksy, Treatwell o Fresha?",
        text: "Sí. Podemos enlazar tu perfil o integrar su sistema de reservas. La web suma lo que esas plataformas no te dan: tu marca, tu posicionamiento y tus clientas sin intermediario.",
      },
      {
        title: "¿Puedo anunciar bótox o rellenos?",
        text: "No como centro de estética: son actos médicos que solo hace un médico en un centro sanitario. Si colaboras con una clínica, la web puede explicarlo y enlazarla.",
      },
      {
        title: "¿Puedo cambiar yo los precios y servicios?",
        text: "Podemos dejarla preparada para que cambies tú lo básico, como precios o un servicio de temporada, o nos encargamos nosotros.",
      },
      {
        title: "¿Se puede pedir señal al reservar?",
        text: "Sí, para servicios largos o para clientas nuevas puedes pedir un pago por adelantado; quien paga señal se lo piensa antes de faltar.",
      },
    ],
    searches: [
      "página web centro de estética",
      "web centro de estética con reservas",
      "diseño web salón de uñas",
      "web centro de depilación",
      "reservas online centro de estética",
      "página web estética barata",
      "web centro de estética Mallorca",
    ],
    related: ["peluquerias-y-barberias", "medicina-estetica", "yoga-y-pilates"],
  },
  {
    slug: "peluquerias-y-barberias",
    name: "Peluquerías y barberías",
    group: "bienestar",
    forWho: "peluquerías y barberías",
    title: "Web para peluquerías y barberías con cita online",
    description: `Página web para peluquerías y barberías con cita por profesional, recordatorios y tarjeta regalo, desde ${basePlan.price} € + IVA. Menos llamadas con las tijeras en la mano.`,
    h1: "Webs para peluquerías y barberías que reservan mientras cortas",
    lead: "Cita online por servicio y por profesional, recordatorios que evitan huecos y tarjetas regalo, sin soltar las tijeras para coger el teléfono.",
    context: [
      "En una peluquería el teléfono suena justo cuando tienes las manos llenas de tinte. El cliente quiere a su peluquero de siempre, a su hora, y si no te localiza, escribe a otro sitio. Y cuando alguien del equipo está de vacaciones, la agenda en papel no lo sabe.",
      "Con cita online, cada profesional tiene su horario y sus ausencias, cada servicio su duración (no es lo mismo un corte que unas mechas) y el cliente reserva con quien quiere. Los recordatorios hacen el resto.",
    ],
    mallorca:
      "En temporada, el turista busca «barber near me» o una peluquería que hable inglés cerca del hotel, y las bodas traen peinados de novia e invitadas reservados desde fuera. Fuera de temporada vives del cliente de barrio: Maps y reseñas.",
    web: [
      {
        title: "Cita con tu profesional",
        text: "El cliente elige peluquero o barbero y ve solo sus huecos; si no tiene preferencia, se le ofrece el primero libre.",
      },
      {
        title: "Duración por servicio",
        text: "Corte, color, mechas o arreglo de barba con su tiempo real, para que no se solapen dos citas largas.",
      },
      {
        title: "Vacaciones y ausencias",
        text: "Marcas los días libres de cada profesional y la web deja de ofrecer sus huecos esos días.",
      },
      {
        title: "Tarjeta regalo",
        text: "El cliente compra una tarjeta regalo desde la web y la imprime o la reenvía: un regalo fácil para Navidad o un cumpleaños.",
      },
    ],
    automations: [
      {
        title: "Recordatorio por WhatsApp",
        text: "El día anterior, mensaje con la hora y el profesional por la API oficial de WhatsApp Business, con un enlace para cambiar la cita.",
      },
      {
        title: "Te toca el corte",
        text: "Pasadas unas semanas desde la última visita, aviso para reservar el siguiente corte o el retoque de raíz.",
      },
      {
        title: "Reseñas en Google",
        text: "Tras la cita, un mensaje con el enlace a tu ficha de Google: las reseñas recientes pesan cuando alguien busca peluquería en Maps.",
      },
    ],
    agent:
      "Un agente de IA atiende en la web o por WhatsApp, ofrece huecos con el profesional que el cliente pide y deja la cita reservada. No aconseja sobre tintes, alergias o tratamientos capilares: eso lo deriva al peluquero.",
    pack: [{ id: "reservas" }],
    packNote:
      "Con la cita online basta para empezar; el SEO local o los idiomas, solo si quieres crecer o atiendes a turistas.",
    faq: [
      {
        title: "¿Y si ya uso una app de reservas?",
        text: "La enlazamos o la integramos en la web. Si prefieres dejarla, la cita online de la web cubre lo básico: profesionales, servicios, ausencias y recordatorios.",
      },
      {
        title: "¿Me sirve si soy barbero y trabajo solo?",
        text: "Sí. Con una agenda, tus servicios y tu Instagram tienes suficiente; si un día sumas otro barbero, se añade su horario.",
      },
      {
        title: "¿Puedo vender champús o ceras en la web?",
        text: "Sí, como escaparate para recoger en el salón o con tienda online si quieres enviarlos. Lo vemos según lo que vendas.",
      },
      {
        title: "¿Cómo gestiono a los que no se presentan?",
        text: "Con recordatorio la víspera, un enlace fácil para anular y, si quieres, bloqueando la reserva online a quien falla varias veces sin avisar.",
      },
    ],
    searches: [
      "página web para peluquería",
      "web barbería con cita online",
      "reservas online peluquería",
      "cita previa peluquería online",
      "diseño web barbería",
      "web peluquería precio",
      "web peluquería Mallorca",
    ],
    related: ["centros-de-estetica", "gimnasios-y-entrenadores", "tiendas-y-comercio-local"],
  },
  {
    slug: "veterinarios",
    name: "Veterinarios",
    group: "salud",
    forWho: "clínicas veterinarias",
    title: "Página web para veterinarios y clínicas veterinarias",
    description: `Web para clínicas veterinarias con cita online, el teléfono de urgencias siempre visible y recordatorio de vacunas, desde ${basePlan.price} € + IVA.`,
    h1: "Webs para clínicas veterinarias con las urgencias a un toque",
    lead: "Cita online para consultas y vacunas, el teléfono de urgencias siempre visible y recordatorios que el dueño de la mascota agradece.",
    context: [
      "Un dueño con un perro que ha comido algo raro no lee: busca el teléfono de urgencias, el horario y cómo llegar. Para lo demás (vacunas, desparasitación, peluquería canina) quiere pedir cita sin llamar y que alguien le recuerde cuándo toca.",
      "Una web con el teléfono de urgencias fijo en el móvil, cita online por tipo de consulta y recordatorios de vacunas automáticos libera el teléfono para lo importante. Y bien marcada para Google y la IA, aparece cuando alguien busca veterinario abierto ahora.",
    ],
    mallorca:
      "En Mallorca viven muchos residentes extranjeros con perro o gato, y quien viaja o se muda necesita el pasaporte europeo de su mascota, que tramita el veterinario. Una web en inglés con esa información clara les ahorra llamadas.",
    web: [
      {
        title: "Urgencias siempre visibles",
        text: "El teléfono de urgencias y el horario fijados arriba en el móvil, con llamada en un toque y aviso de si atendéis 24 horas.",
      },
      {
        title: "Cita por tipo de consulta",
        text: "Vacuna, revisión, cirugía programada o peluquería canina, cada una con su duración y su profesional.",
      },
      {
        title: "Ficha de la mascota",
        text: "Al reservar, el dueño indica nombre, especie, raza y microchip, y no hay que pedírselo cada vez.",
      },
      {
        title: "Servicios explicados",
        text: "Esterilización, dental, diagnóstico por imagen o exóticos: qué hacéis y cómo se prepara al animal antes de venir.",
      },
    ],
    automations: [
      {
        title: "Recordatorio de vacunas",
        text: "Cuando toca la vacuna anual o la desparasitación, el dueño recibe un aviso con el nombre de su mascota y un enlace para pedir cita.",
      },
      {
        title: "Indicaciones antes de una cirugía",
        text: "Al reservar una intervención, llegan las pautas de ayuno y la hora de entrega, y el día antes un recordatorio.",
      },
      {
        title: "Seguimiento tras la consulta",
        text: "Pasados unos días, un mensaje para saber cómo sigue el animal y, si hace falta, pedir revisión.",
      },
    ],
    agent:
      "Un agente de IA responde horarios, servicios y qué llevar a la primera visita, y ofrece cita. Ante cualquier síntoma no diagnostica: da el teléfono de urgencias y pasa el caso a la clínica.",
    pack: [{ id: "reservas" }, { id: "seo" }],
    packNote:
      "Cita online y SEO local: cuando alguien busca «veterinario cerca», que te encuentre y reserve.",
    faq: [
      {
        title: "¿Se conecta con mi programa de gestión veterinaria?",
        text: "Depende del programa: algunos tienen agenda online que se integra en la web y otros no. Lo revisamos al principio y, si no se puede, la cita online te llega por email.",
      },
      {
        title: "¿Puedo anunciar medicamentos o piensos en la web?",
        text: "Los medicamentos veterinarios con receta no se anuncian al público. Piensos, accesorios o productos de higiene sí, y puedes venderlos online. Consulta los detalles con tu colegio de veterinarios.",
      },
      {
        title: "¿Y si atendemos exóticos o a domicilio?",
        text: "Va en su propia sección, y la cita online pide la especie o la dirección antes de confirmar para que llegues preparado.",
      },
      {
        title: "¿Puedo poner fotos de los animales que tratamos?",
        text: "Sí, con permiso del dueño. Las fotos reales de la clínica y de vuestros pacientes transmiten más que las de un banco de imágenes.",
      },
    ],
    searches: [
      "página web para veterinarios",
      "web clínica veterinaria",
      "diseño web veterinaria",
      "cita online veterinario",
      "web veterinario con urgencias",
      "marketing para clínicas veterinarias",
      "web veterinaria Mallorca",
    ],
    related: ["farmacias", "clinicas-dentales", "tiendas-y-comercio-local"],
  },
  {
    slug: "opticas-y-audiologia",
    name: "Ópticas y audiología",
    group: "salud",
    forWho: "ópticas y centros auditivos",
    title: `Página web para ópticas y audiología desde ${basePlan.price} €`,
    description: `Web para ópticas y centros auditivos fácil de leer, con cita para revisión de vista y audición y llamada en un toque, desde ${basePlan.price} € + IVA.`,
    h1: "Webs para ópticas y centros auditivos que se leen sin forzar la vista",
    lead: "Letra grande, buen contraste y un botón para llamar: lo que necesita quien viene a revisarse la vista o el oído, y su familia cuando busca por él.",
    context: [
      "Quien se revisa la vista cansada o prueba un audífono suele ser mayor y ve u oye peor. Si la web tiene letra diminuta, gris claro sobre blanco o un formulario largo, no reserva: llama, o se va a otro sitio.",
      "Una web legible, con la revisión de vista o la prueba de audición fácil de pedir (online o llamando) y los audífonos explicados sin tecnicismos, da confianza al paciente y a los hijos, que muchas veces son quienes buscan y comparan.",
    ],
    mallorca:
      "En Mallorca viven todo el año muchos jubilados británicos y alemanes que buscan óptica o audioprotesista que les atienda en su idioma. Para el cliente local, lo que cuenta es aparecer en Maps en tu pueblo o barrio.",
    web: [
      {
        title: "Pensada para leerse bien",
        text: "Letra grande, contraste alto y nada de textos en gris claro, para que quien tiene vista cansada no tenga que hacer zoom.",
      },
      {
        title: "Cita para revisión",
        text: "Revisión de la vista o prueba de audición en pocos pasos, con la opción de llamar en vez de rellenar nada.",
      },
      {
        title: "Audífonos explicados",
        text: "Tipos de audífono, cómo es la adaptación, mantenimiento y pilas, contado en lenguaje claro para el paciente y su familia.",
      },
      {
        title: "Lentes y marcas",
        text: "Las marcas que trabajas y las lentes que adaptas (progresivas, de contacto, ocupacionales), para que te busquen por ellas.",
      },
    ],
    automations: [
      {
        title: "Aviso de revisión anual",
        text: "Al año de la última graduación, aviso por SMS o por la API oficial de WhatsApp Business para pedir la siguiente revisión.",
      },
      {
        title: "Gafas listas para recoger",
        text: "Cuando las gafas o el audífono están listos, el cliente recibe un aviso con el horario de recogida.",
      },
      {
        title: "Mantenimiento del audífono",
        text: "Cada cierto tiempo, aviso para la limpieza y revisión del audífono o para pasar a por pilas.",
      },
    ],
    agent:
      "Un agente de IA responde con frases cortas a horarios, marcas, si se puede probar un audífono y cómo pedir cita. No interpreta una graduación ni una audiometría: eso lo deriva al óptico o al audioprotesista.",
    pack: [{ id: "reservas" }, { id: "seo" }],
    packNote:
      "Cita de revisión online o por teléfono y SEO local, para que te encuentren el cliente del barrio y sus hijos.",
    faq: [
      {
        title: "¿Cómo hacéis que la web sea fácil para personas mayores?",
        text: "Tamaño de letra generoso que se puede ampliar sin que se descoloque nada, colores con buen contraste, botones amplios y el número de teléfono como enlace directo de llamada.",
      },
      {
        title: "¿Tengo que poner el número de registro sanitario?",
        text: "Las ópticas y los establecimientos de audioprótesis son establecimientos sanitarios autorizados, así que lo recomendable es mostrar su número de registro. Confirma con la Conselleria de Salud o con tu colegio qué te exige.",
      },
      {
        title: "¿Puede pedir la cita un familiar?",
        text: "Sí. El formulario permite indicar que la cita es para otra persona y dejar el teléfono de los dos, para avisar a quien haga falta.",
      },
      {
        title: "¿Necesito la web en inglés?",
        text: "Si tienes clientes extranjeros residentes, ayuda: la revisión y los audífonos se entienden mejor en su idioma. Si no, empieza en español y añádelo después.",
      },
    ],
    searches: [
      "página web para ópticas",
      "web óptica con cita previa",
      "diseño web centro auditivo",
      "web para audiología y audífonos",
      "página web óptica barata",
      "web óptica Mallorca",
    ],
    related: ["farmacias", "ortopedias", "podologos"],
    seniors: true,
  },
  {
    slug: "farmacias",
    name: "Farmacias",
    group: "salud",
    forWho: "farmacias",
    title: "Página web para farmacias con parafarmacia online",
    description: `Web para farmacias con horario y guardias, encargos, servicios y tienda de parafarmacia, desde ${basePlan.price} € + IVA. Medicamentos online, solo con autorización.`,
    h1: "Webs para farmacias que resuelven horario, guardias y encargos",
    lead: "Horario, guardias, servicios y encargos claros, y una tienda de parafarmacia si quieres vender online. Hemos hecho webs para farmacias y empezamos por lo que pregunta tu cliente.",
    context: [
      "En una farmacia se pregunta lo mismo una y otra vez: si abrís el sábado, quién está de guardia, si tenéis tal producto o si se puede encargar. Cada llamada interrumpe el mostrador, con cola delante.",
      "Una web con horario real, enlace a las guardias, encargos online y tus servicios (SPD, toma de tensión, control de glucosa, nutrición) descarga el teléfono. Y si quieres vender parafarmacia, la tienda online te abre a clientes que no pasan por delante.",
    ],
    mallorca:
      "En zonas turísticas la farmacia es el primer sitio al que va el visitante con una quemadura de sol o una picadura, y pregunta en inglés o alemán. Si cambias el horario en temporada y tu web y tu ficha de Google no lo dicen, encuentra la puerta cerrada.",
    web: [
      {
        title: "Horario y guardias al día",
        text: "Horario de invierno y de verano, festivos y enlace a las guardias de tu zona, visibles nada más entrar.",
      },
      {
        title: "Encargos online",
        text: "El cliente encarga un producto y recibe aviso cuando está listo para recoger en el mostrador.",
      },
      {
        title: "Servicios de la farmacia",
        text: "SPD, toma de tensión, control de peso o de glucosa, cada uno explicado y con cita si hace falta.",
      },
      {
        title: "Parafarmacia online",
        text: "Tienda de cosmética, higiene y nutrición con envío o recogida; los medicamentos sin receta, solo con autorización y logotipo europeo.",
      },
    ],
    automations: [
      {
        title: "Aviso de encargo listo",
        text: "Cuando el producto llega, el cliente recibe un mensaje y se ahorra la llamada para preguntar si ya está.",
      },
      {
        title: "Recordatorio del SPD",
        text: "Aviso al paciente o a la familia cuando toca recoger el siguiente blíster de medicación preparada.",
      },
      {
        title: "Stock de la tienda sincronizado",
        text: "Si tu programa de gestión lo permite, la tienda toma el stock de ahí para no vender lo que no tienes.",
      },
    ],
    agent:
      "Un agente de IA responde a horario, guardias, servicios y estado de un encargo, también en inglés o alemán. No recomienda medicamentos ni dosis ni sustituye el consejo farmacéutico: eso lo deriva siempre al mostrador.",
    pack: [{ id: "tienda" }, { id: "seo" }],
    packNote:
      "Tienda de parafarmacia y SEO local: la farmacia del barrio bien situada en Maps y vendiendo también online.",
    faq: [
      {
        title: "¿Puedo vender medicamentos sin receta online?",
        text: "Solo una farmacia autorizada, que lo comunica antes a la autoridad sanitaria de su comunidad, y con el logotipo común europeo enlazado al listado oficial. Los de receta no se venden por internet; consulta los detalles con tu colegio.",
      },
      {
        title: "¿Se conecta con Farmatic, Nixfarma u otro programa?",
        text: "Algunos programas de gestión permiten exportar stock y precios; lo revisamos con tu proveedor antes de montar la tienda para no duplicar trabajo.",
      },
      {
        title: "¿Cómo pongo las guardias en la web?",
        text: "Lo más fiable es enlazar el calendario oficial de guardias de tu colegio y marcar en tu web los días que te tocan. Así no hay dos versiones distintas.",
      },
      {
        title: "¿Habéis hecho webs para farmacias?",
        text: "Sí. Por eso empezamos por lo que más se pregunta en el mostrador (horario, guardias, encargos y servicios) y la tienda solo si te compensa.",
      },
    ],
    searches: [
      "página web para farmacias",
      "web farmacia con tienda online",
      "venta online parafarmacia",
      "diseño web farmacia",
      "tienda online farmacia",
      "web farmacia Mallorca",
    ],
    related: ["opticas-y-audiologia", "ortopedias", "clinicas-dentales"],
  },
  {
    slug: "podologos",
    name: "Podólogos",
    group: "salud",
    forWho: "podólogos",
    title: "Web para podólogos: citas online y por teléfono",
    description: `Página web para podólogos con cita online o por teléfono, pie diabético bien explicado y letra grande para pacientes mayores, desde ${basePlan.price} € + IVA.`,
    h1: "Webs para clínicas de podología pensadas para pacientes mayores",
    lead: "Cita online para quien la prefiera y el teléfono bien grande para quien no, con el pie diabético y la quiropodia explicados en palabras sencillas.",
    context: [
      "Muchos pacientes de podología son mayores o diabéticos y vienen cada pocas semanas. No van a crear una cuenta ni a rellenar un formulario largo: quieren llamar, o que un hijo les pida la cita desde el móvil.",
      "La web tiene que servir a los dos: un botón de llamada visible y una cita online sencilla para el familiar, el deportista o quien viene por unas plantillas. Con recordatorios, las revisiones periódicas no se pierden.",
    ],
    mallorca:
      "En los pueblos de Mallorca muchos pacientes mayores prefieren llamar al podólogo de siempre, y en la costa hay jubilados extranjeros que buscan consulta en inglés o alemán. Salir bien en Maps por pueblo marca la diferencia.",
    web: [
      {
        title: "Llamar en un toque",
        text: "Número grande arriba en el móvil, que marca con un solo toque, y el horario de llamada bien a la vista.",
      },
      {
        title: "Pie diabético explicado",
        text: "Por qué revisarse, cada cuánto y cuándo acudir ante una herida, en lenguaje claro para el paciente y su familia.",
      },
      {
        title: "Cita online sencilla",
        text: "Pocos pasos y sin crear cuenta: tipo de visita, día y teléfono, para que la pida el paciente o un familiar.",
      },
      {
        title: "Plantillas y estudio de la pisada",
        text: "Para deportistas y niños: en qué consiste el estudio biomecánico y cómo se hacen las plantillas a medida.",
      },
    ],
    automations: [
      {
        title: "Recordatorio de quiropodia",
        text: "Cuando toca la siguiente sesión, aviso por SMS o por WhatsApp, con la API oficial de WhatsApp Business.",
      },
      {
        title: "Revisión del pie diabético",
        text: "Aviso periódico para la revisión, que también puede llegar al familiar que se ocupa de las citas.",
      },
      {
        title: "Plantillas listas",
        text: "Cuando las plantillas están hechas, el paciente recibe aviso para recogerlas y probarlas.",
      },
    ],
    agent:
      "Un agente de IA atiende con frases cortas, ofrece cita y explica cómo prepararse para la visita. No valora heridas ni lesiones: ante una herida en un pie diabético, pide que llamen a la consulta o a su médico.",
    pack: [{ id: "reservas" }, { id: "seo" }],
    packNote:
      "Cita online para quien la quiera y SEO local por pueblo: el teléfono sigue mandando, pero la web te trae al paciente nuevo.",
    faq: [
      {
        title: "¿Mis pacientes mayores van a saber usar la web?",
        text: "La pensamos para ellos: textos cortos en letra grande, botones que no hay que afinar con el dedo y nada de menús escondidos. Si prefieren llamar, la web les lleva a llamar.",
      },
      {
        title: "¿Qué datos de la consulta deben aparecer?",
        text: "Tu número de colegiado y, si la consulta es centro sanitario, su número de registro en la web y en la publicidad. Tu colegio de podólogos te confirma los detalles.",
      },
      {
        title: "¿Puedo reflejar que atiendo a domicilio?",
        text: "Sí. Una sección explica en qué zonas vas a domicilio y la cita pide la dirección: útil para pacientes que ya no se desplazan.",
      },
      {
        title: "¿Y si el paciente no tiene email?",
        text: "La cita se pide solo con el teléfono y los recordatorios llegan por SMS o WhatsApp. Nadie se queda fuera por no tener correo.",
      },
    ],
    searches: [
      "página web para podólogos",
      "web clínica de podología",
      "diseño web podólogo",
      "cita online podólogo",
      "web podología pie diabético",
      "web podólogo Mallorca",
    ],
    related: ["fisioterapeutas", "ortopedias", "opticas-y-audiologia"],
    seniors: true,
  },
  {
    slug: "residencias-de-mayores",
    name: "Residencias de mayores",
    group: "mayores",
    forWho: "residencias de mayores",
    title: "Página web para residencias de mayores y geriátricos",
    description: `Web para residencias de mayores pensada para las familias: plazas, precios orientativos, fotos reales y visita fácil de pedir, desde ${basePlan.price} € + IVA.`,
    h1: "Webs para residencias de mayores que responden a las familias",
    lead: "Quien busca residencia suele ser un hijo o una hija con prisa y mucha preocupación. Tu web le da transparencia, fotos reales y una visita fácil de pedir.",
    context: [
      "La decisión de buscar residencia llega muchas veces de golpe, tras una caída o un empeoramiento. La familia compara desde el móvil y quiere saber si hay plaza, qué cuesta, cómo son las habitaciones, qué atención sanitaria hay y cuándo se puede visitar.",
      "Las webs con fotos de banco y un «consúltenos» generan desconfianza. Fotos reales, precios orientativos, el día a día explicado y un formulario de visita claro te ponen en la lista corta de la familia.",
    ],
    mallorca:
      "En Mallorca hay muchos mayores extranjeros cuyos hijos viven en Alemania o Reino Unido y buscan residencia desde allí: la web en su idioma y una visita por videollamada cuentan mucho. Las familias de aquí comparan por pueblo y cercanía.",
    web: [
      {
        title: "Plazas y precios orientativos",
        text: "Si hay plaza libre o lista de espera, y un rango de precio por tipo de habitación, para que la familia sepa a qué atenerse.",
      },
      {
        title: "Fotos y vídeo reales",
        text: "Habitaciones, comedor, jardín y actividades tal como son, sin imágenes de banco.",
      },
      {
        title: "Solicitar visita",
        text: "La familia pide visita presencial o por videollamada en un formulario corto, y el centro le confirma día y hora.",
      },
      {
        title: "Lectura cómoda para todos",
        text: "Letra amplia, alto contraste y textos sin jerga, que también entiende el propio mayor si mira la web con su familia.",
      },
    ],
    automations: [
      {
        title: "Respuesta al momento",
        text: "Al pedir información, la familia recibe un dosier con servicios, habitaciones y cómo es el ingreso.",
      },
      {
        title: "Lista de espera con aviso",
        text: "Las familias en lista de espera reciben aviso cuando hay plaza disponible del tipo que buscan.",
      },
      {
        title: "Novedades para familias",
        text: "Un boletín con las actividades del mes y fotos, con el consentimiento de residentes y familias.",
      },
    ],
    agent:
      "Un agente de IA responde a las familias a cualquier hora sobre servicios, horarios de visita, documentación para el ingreso y cómo pedir visita. No informa del estado de salud de ningún residente ni promete plaza: eso lo lleva siempre la dirección.",
    pack: [{ id: "contenido" }, { id: "seo" }],
    packNote:
      "Fotos y textos reales del centro y SEO local: lo que la familia mira antes de llamar.",
    faq: [
      {
        title: "¿Debo publicar precios?",
        text: "No es obligatorio, pero un precio orientativo por tipo de plaza da confianza y evita llamadas a ciegas. Puedes indicar «desde» y explicar qué incluye y qué se paga aparte.",
      },
      {
        title: "¿Cómo explico las plazas públicas o concertadas?",
        text: "Con prudencia: no se piden a la residencia, se asignan a través de los servicios sociales y la valoración de dependencia. La web debe explicarlo así y no prometer plaza.",
      },
      {
        title: "¿Puedo poner fotos de los residentes?",
        text: "Solo con su consentimiento por escrito o el de su representante legal, y con respeto a su imagen. Muchas veces bastan fotos de espacios y actividades sin caras reconocibles.",
      },
      {
        title: "¿Qué contamos de la atención sanitaria?",
        text: "Lo que de verdad ofrecéis: enfermería, médico, fisioterapia y en qué horario. Sin exagerar: la familia lo preguntará en la visita.",
      },
    ],
    searches: [
      "página web residencia de mayores",
      "web para residencias geriátricas",
      "diseño web residencia tercera edad",
      "marketing para residencias de mayores",
      "web residencia de ancianos",
      "web residencia de mayores Mallorca",
    ],
    related: ["ayuda-a-domicilio", "ortopedias", "fisioterapeutas"],
    seniors: true,
  },
  {
    slug: "ayuda-a-domicilio",
    name: "Ayuda a domicilio",
    group: "mayores",
    forWho: "empresas de ayuda a domicilio",
    title: "Web para empresas de ayuda a domicilio y cuidadores",
    description: `Página web para ayuda a domicilio: servicio por horas o internas, zonas que cubres, formulario para familias y captación de cuidadores, desde ${basePlan.price} € + IVA.`,
    h1: "Webs para ayuda a domicilio que dan confianza a las familias",
    lead: "Servicios claros, zonas que cubres y un formulario para familias que no agobia. Y una sección para captar cuidadores, que es la otra mitad del negocio.",
    context: [
      "Dejar entrar a alguien en casa de tu madre o tu padre exige mucha confianza. La familia quiere saber quién cuida, qué formación tiene, cómo se elige al cuidador, qué pasa si un día falla y si el servicio llega a su pueblo.",
      "A la vez necesitas cuidadores todo el año. Una web con los servicios bien explicados (por horas, noches, internas, acompañamiento al médico), las zonas que cubres y dos formularios separados, uno para familias y otro para cuidadores, ordena el trabajo de la oficina.",
    ],
    mallorca:
      "Mallorca es grande y los desplazamientos pesan: la web tiene que decir claro qué pueblos cubres. Hay muchos mayores extranjeros que viven solos con los hijos lejos; para ellos, una web en inglés o alemán y respuesta por email cuentan.",
    web: [
      {
        title: "Servicios por modalidad",
        text: "Por horas, noches, fines de semana o internas, con lo que incluye cada una y cómo se calcula el servicio.",
      },
      {
        title: "Zonas que cubres",
        text: "Lista o mapa de pueblos y barrios donde trabajáis, para que la familia sepa a la primera si le podéis atender.",
      },
      {
        title: "Formulario para familias",
        text: "Preguntas cortas y en lenguaje claro (quién necesita ayuda, cuántas horas, desde cuándo), con botones grandes y la opción de llamar.",
      },
      {
        title: "Trabaja con nosotros",
        text: "Formulario para cuidadores con experiencia, zonas, disponibilidad y carné de conducir, separado del de las familias.",
      },
    ],
    automations: [
      {
        title: "Primera respuesta automática",
        text: "La familia recibe al momento un email que confirma su petición y explica los siguientes pasos.",
      },
      {
        title: "Candidaturas ordenadas",
        text: "Las candidaturas de cuidadores se ordenan por zona y disponibilidad en una hoja, sin copiar datos a mano.",
      },
      {
        title: "Aviso de cambio de cuidador",
        text: "Si cambia el cuidador o el horario, la familia recibe un aviso con el nombre y la hora.",
      },
    ],
    agent:
      "Un agente de IA explica los servicios, comprueba si cubrís un pueblo y recoge los datos básicos de la familia o del cuidador. No valora el grado de dependencia ni da presupuestos cerrados: eso lo hace la coordinación tras hablar con la familia.",
    pack: [{ id: "seo" }, { id: "blog" }],
    packNote:
      "SEO local por pueblo y un blog con guías para familias: así te encuentra quien busca ayuda para un padre o una madre.",
    faq: [
      {
        title: "¿Puedo poner precios por hora?",
        text: "Puedes poner un precio orientativo por hora o por modalidad y explicar qué cambia en noches, festivos o internas. La familia llega a la primera conversación sabiendo a qué atenerse.",
      },
      {
        title: "¿Cómo separo familias y cuidadores?",
        text: "Con dos formularios y dos avisos distintos: las peticiones de familias van a coordinación y las candidaturas a selección. Nadie mezcla un currículum con una urgencia.",
      },
      {
        title: "¿La usará bien un mayor que busca ayuda para sí mismo?",
        text: "Sí: frases cortas sin palabras técnicas, botones bien separados y fáciles de pulsar, y el teléfono a la vista en cada página para quien prefiere hablar.",
      },
      {
        title: "¿Puedo explicar las ayudas de la dependencia?",
        text: "Sí, con un texto general y enlazando a los servicios sociales. La tramitación y la cuantía dependen de cada caso, así que mejor no prometer importes.",
      },
    ],
    searches: [
      "página web ayuda a domicilio",
      "web empresa de cuidadores",
      "diseño web servicio de ayuda a domicilio",
      "web cuidado de mayores a domicilio",
      "captar cuidadores internas",
      "ayuda a domicilio Mallorca",
    ],
    related: ["residencias-de-mayores", "ortopedias", "fisioterapeutas"],
    seniors: true,
  },
  {
    slug: "ortopedias",
    name: "Ortopedias",
    group: "mayores",
    forWho: "ortopedias",
    title: "Página web para ortopedias con tienda y alquiler",
    description: `Web para ortopedias con tienda online sencilla, alquiler de sillas de ruedas y camas articuladas y asesoramiento, desde ${basePlan.price} € + IVA.`,
    h1: "Webs para ortopedias que el mayor y su familia entienden a la primera",
    lead: "Productos de movilidad en una tienda fácil de usar, alquiler de sillas y camas articuladas con entrega a domicilio y el teléfono siempre a mano para pedir consejo.",
    context: [
      "En una ortopedia compra el mayor, pero muchas veces busca el hijo o la hija, con prisa tras un alta hospitalaria: necesitan una cama articulada o una silla de ruedas ya, y quieren saber si se alquila, cuánto cuesta y si se la lleváis a casa.",
      "Una tienda online sencilla para lo estándar (andadores, bastones, cojines, ayudas para el baño), el alquiler bien explicado y una vía rápida para pedir consejo resuelven muchas consultas antes de que suene el teléfono.",
    ],
    mallorca:
      "Mallorca recibe turistas mayores o con movilidad reducida que alquilan scooters o sillas para las vacaciones con entrega en el hotel, y esa búsqueda se hace en inglés y alemán. Para el cliente local cuentan la cercanía y salir en Maps.",
    web: [
      {
        title: "Tienda clara y grande",
        text: "Fotos grandes, pocos productos por pantalla, precio visible y un botón de compra amplio que no se pierde.",
      },
      {
        title: "Alquiler explicado",
        text: "Sillas de ruedas, camas articuladas, grúas o scooters por semanas o meses, con fianza, entrega y recogida explicadas.",
      },
      {
        title: "Pide consejo",
        text: "Un formulario corto o una llamada para que un técnico ortoprotésico ayude a elegir antes de comprar.",
      },
      {
        title: "Productos a medida",
        text: "Plantillas, fajas o prótesis que requieren toma de medidas se reservan con cita en el establecimiento, no se compran online.",
      },
    ],
    automations: [
      {
        title: "Fin de alquiler",
        text: "Antes de que termine el alquiler, aviso para ampliarlo o concertar la recogida.",
      },
      {
        title: "Pedido en camino",
        text: "Cuando el pedido está preparado o sale de reparto, el cliente o su familiar recibe un aviso con la hora aproximada.",
      },
      {
        title: "Revisión de la silla",
        text: "Aviso periódico para revisar frenos, ruedas y batería de la silla o el scooter vendido.",
      },
    ],
    agent:
      "Un agente de IA responde a dudas de alquiler, entrega, dimensiones de un producto y formas de pago, y pasa a una persona cuando hace falta elegir. No recomienda un producto para una patología concreta: eso lo hace el técnico ortoprotésico.",
    pack: [{ id: "tienda" }, { id: "seo" }],
    packNote:
      "Tienda online sencilla con los productos de alquiler y SEO local, para la familia que busca «alquiler cama articulada» con prisa.",
    faq: [
      {
        title: "¿Puedo vender online cualquier producto de ortopedia?",
        text: "Lo estándar, sí. Los productos sanitarios que necesitan adaptación o toma de medidas, mejor con cita en la tienda; consulta con tu asesor qué puedes vender a distancia.",
      },
      {
        title: "¿La tienda será fácil para clientes mayores?",
        text: "Sí: letra grande, contraste alto, pocos pasos para comprar y la opción de hacer el pedido por teléfono. Y si lo prefieren, lo hace un familiar desde su móvil.",
      },
      {
        title: "¿Cómo se gestionan las fianzas del alquiler?",
        text: "Se pueden cobrar con el alquiler en la tienda online y devolver al recoger el producto, o cobrarlas en mano. Lo dejamos explicado para que no haya sorpresas.",
      },
      {
        title: "¿Puedo informar de las prestaciones de la sanidad pública?",
        text: "Sí, con un texto general sobre la prestación ortoprotésica y enlazando a la información oficial, sin prometer qué cubre en cada caso.",
      },
    ],
    searches: [
      "página web ortopedia",
      "tienda online ortopedia",
      "alquiler silla de ruedas online",
      "alquiler cama articulada",
      "diseño web ortopedia",
      "alquiler scooter movilidad Mallorca",
    ],
    related: ["residencias-de-mayores", "ayuda-a-domicilio", "farmacias"],
    seniors: true,
  },
  {
    slug: "yoga-y-pilates",
    name: "Yoga y pilates",
    group: "bienestar",
    forWho: "estudios de yoga y pilates",
    title: "Web para estudios de yoga y pilates con reservas",
    description: `Página web para estudios de yoga y pilates con horario de clases, reserva de plaza, bonos y retiros en varios idiomas, desde ${basePlan.price} € + IVA.`,
    h1: "Webs para yoga y pilates: horario, plazas y bonos en un sitio",
    lead: "Horario de clases siempre al día, reserva de plaza clase a clase y bonos que se descuentan solos, para que tú enseñes y no hagas de recepción.",
    context: [
      "En un estudio de yoga o pilates las plazas son pocas, sobre todo en reformer, y el horario cambia con la temporada. Si la gente reserva por WhatsApp, acabas con clases llenas sin control, alumnos que no vienen y bonos apuntados en una libreta.",
      "Con reserva de plaza por clase, bonos y cuotas online y lista de espera, cada clase tiene su aforo controlado. Y una página para retiros y talleres te abre a gente que no vive cerca.",
    ],
    mallorca:
      "Mallorca es destino de retiros de yoga en fincas y agroturismos, y muchos alumnos son residentes extranjeros o visitantes que buscan clase en inglés o alemán. Fuera de temporada, el alumno de bono mensual es tu base.",
    web: [
      {
        title: "Horario de clases vivo",
        text: "Cada clase con nivel, profesor, idioma y plazas libres, y los cambios de horario visibles al momento.",
      },
      {
        title: "Reserva de plaza por clase",
        text: "El alumno reserva su esterilla o su máquina de reformer y puede anular hasta la hora que tú marques.",
      },
      {
        title: "Bonos y cuotas",
        text: "Bonos de clases o cuota mensual con pago online, y el alumno ve cuántas clases le quedan.",
      },
      {
        title: "Retiros y talleres",
        text: "Una página por retiro con programa, alojamiento, precio y plazas, en los idiomas de quien viene.",
      },
    ],
    automations: [
      {
        title: "Lista de espera que avanza sola",
        text: "Si alguien anula, la plaza pasa al primero de la lista de espera, que recibe un aviso.",
      },
      {
        title: "Bienvenida al alumno nuevo",
        text: "Tras la primera reserva, un email con qué traer, cómo llegar y qué nivel elegir.",
      },
      {
        title: "Retiros: señal y recordatorios",
        text: "Señal al reservar el retiro, recordatorio del resto del pago y la información práctica antes de llegar.",
      },
    ],
    agent:
      "Un agente de IA responde en varios idiomas qué clase elegir según el nivel, horarios, cómo funcionan los bonos y los retiros, y ayuda a reservar. No da pautas para lesiones, embarazo o patologías: eso lo deriva al profesor.",
    pack: [{ id: "reservas" }, { id: "idiomas", qty: 1 }],
    packNote:
      "Reserva de plaza por clase y un idioma más, para el alumno extranjero y el que viene a un retiro.",
    faq: [
      {
        title: "¿Se integra con Momence, Eversports u otro programa?",
        text: "Sí, podemos integrar en la web el horario y la reserva de tu programa. Si aún no usas ninguno, la reserva de la web cubre clases, bonos y lista de espera.",
      },
      {
        title: "¿Puedo vender retiros con alojamiento desde la web?",
        text: "Puedes presentarlos y cobrar una señal. Si el retiro incluye alojamiento y otros servicios turísticos a un precio global, consulta con tu asesor si se considera viaje combinado, porque tiene requisitos propios.",
      },
      {
        title: "¿Puedo ofrecer clases online o grabadas?",
        text: "Sí. Las clases en directo se reservan como las presenciales y llevan su enlace; las grabadas pueden ir en una zona para alumnos con bono.",
      },
      {
        title: "¿Y si doy clases en una finca o en la playa?",
        text: "Cada clase indica dónde se da, con su mapa, y los alumnos reciben aviso si cambia el lugar por el tiempo.",
      },
    ],
    searches: [
      "página web para estudio de yoga",
      "web de pilates con reservas",
      "reserva de clases de yoga online",
      "diseño web centro de pilates",
      "web para retiros de yoga",
      "web pilates reformer",
      "yoga Mallorca página web",
    ],
    related: ["gimnasios-y-entrenadores", "fisioterapeutas", "agroturismos"],
  },
  {
    slug: "gimnasios-y-entrenadores",
    name: "Gimnasios y entrenadores",
    group: "bienestar",
    forWho: "gimnasios y entrenadores personales",
    title: "Página web para gimnasios y entrenadores personales",
    description: `Web para gimnasios, boxes y entrenadores personales con alta online, horario de actividades y clase de prueba, desde ${basePlan.price} € + IVA. Socios sin colas.`,
    h1: "Webs para gimnasios y entrenadores que convierten visitas en socios",
    lead: "Cuotas claras, alta online, horario de actividades y una clase de prueba fácil de pedir: lo que mira alguien antes de apuntarse.",
    context: [
      "Quien busca gimnasio compara cuota, horario y ambiente desde el móvil, a menudo en enero o en septiembre. Si tiene que llamar para saber el precio o ir en persona a darse de alta, se apunta en el de al lado.",
      "Una web con las cuotas a la vista, alta online conectada a tu programa de gestión, reserva de plaza en clases dirigidas y una clase de prueba bien visible convierte la curiosidad en alta. Para un entrenador personal, es su carta de presentación: método, especialidades y primera sesión.",
    ],
    mallorca:
      "En Mallorca hay residentes extranjeros y trabajadores de temporada que buscan gimnasio para unos meses, y turistas que quieren entrenar unos días: un pase de día o de semana, explicado en inglés y alemán y comprado online, es venta fácil.",
    web: [
      {
        title: "Cuotas y alta online",
        text: "Cada cuota con lo que incluye y un alta que el socio completa desde el móvil, con pago y domiciliación.",
      },
      {
        title: "Horario de actividades",
        text: "Spinning, entrenamiento funcional, yoga o boxeo con sala, monitor y plazas libres, filtrable por día.",
      },
      {
        title: "Clase de prueba",
        text: "Un botón visible para reservar una clase o una sesión de prueba, y el aviso le llega a recepción con los datos del interesado.",
      },
      {
        title: "Entrenadores con perfil propio",
        text: "Especialidad, titulación y forma de trabajar de cada entrenador, con su agenda para sesiones personales.",
      },
    ],
    automations: [
      {
        title: "Seguimiento de la clase de prueba",
        text: "Tras la prueba, un mensaje con las cuotas y un enlace para apuntarse desde el móvil.",
      },
      {
        title: "Socio que deja de venir",
        text: "Si alguien lleva semanas sin entrar, un aviso amable con su clase favorita o una propuesta del entrenador.",
      },
      {
        title: "Bajas y cambios de cuota ordenados",
        text: "Las bajas o cambios de cuota llegan por formulario con fecha, y el socio recibe confirmación por email.",
      },
    ],
    agent:
      "Un agente de IA responde a cuotas, horarios, aparcamiento y cómo reservar la clase de prueba, y apunta al interesado. No diseña rutinas ni da consejos de dieta o lesiones: eso lo deriva al entrenador.",
    pack: [{ id: "reservas" }, { id: "seo" }],
    packNote:
      "Reserva de clases y de prueba con SEO local, para que quien busca «gimnasio cerca» te encuentre y se apunte.",
    faq: [
      {
        title: "¿Se conecta con mi programa de gestión de socios?",
        text: "Programas como Trainingym o Virtuagym tienen alta y reservas online que se integran o se enlazan desde la web. Lo comprobamos con el tuyo antes de empezar.",
      },
      {
        title: "Soy entrenador personal y trabajo solo, ¿me sirve?",
        text: "Sí. Con la Web Esencial tienes tu método, tus especialidades, opiniones de tus clientes y un formulario; la agenda online se añade si la necesitas.",
      },
      {
        title: "¿Puedo vender bonos o pases de día online?",
        text: "Sí, con la reserva online o con una tienda sencilla: pase de día, bono de clases o paquetes de entrenamiento personal.",
      },
      {
        title: "¿Y si cambio el horario cada temporada?",
        text: "Podemos dejarla preparada para que cambies tú lo básico, como el horario, o nos encargamos nosotros. El socio ve en la web lo mismo que al reservar.",
      },
    ],
    searches: [
      "página web para gimnasio",
      "web entrenador personal",
      "diseño web gimnasio",
      "alta online gimnasio",
      "web box de entrenamiento funcional",
      "web gimnasio precio",
      "gimnasio Mallorca web",
    ],
    related: ["yoga-y-pilates", "fisioterapeutas", "nutricionistas"],
  },
];
