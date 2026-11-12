import type { AiSector } from "./types";

/** IA en salud, profesionales, oficios, formación y cuidados. Reglas en ./types.ts. */
export const iaServicios: AiSector[] = [
  {
    slug: "clinicas",
    name: "Clínicas y consultas",
    forWho: "clínicas y consultas",
    niche: "clinicas-dentales",
    title: "Inteligencia artificial para clínicas dentales y consultas",
    description:
      "IA para clínicas dentales, de fisioterapia y consultas: citas y recordatorios, dudas de pacientes en su idioma y notas resumidas que revisa el profesional.",
    h1: "IA en la clínica para la agenda y el papeleo, no para diagnosticar",
    lead: "Recepción menos pegada al teléfono, pacientes que entienden su presupuesto y notas listas para revisar. La IA ayuda en la gestión; la salud la lleva siempre el profesional.",
    context: [
      "En una clínica dental o de fisioterapia, recepción reparte el día entre el teléfono, la agenda y las mismas preguntas: si hay hueco, cuánto dura la sesión, si trabajáis con su aseguradora. Y al final de cada consulta queda escribir la nota.",
      "Lo realista hoy es que la IA quite trabajo alrededor de la consulta: responder lo repetido, recordar citas, ordenar notas y explicar presupuestos ya hechos. Lo que toca la salud del paciente lo sigue decidiendo el profesional, que revisa todo lo que la IA prepara.",
    ],
    useCases: [
      {
        title: "Citas y recordatorios",
        text: "El paciente pide, cambia o anula cita por WhatsApp o en la web, y la IA le propone huecos de tu agenda. Si tu software de gestión clínica permite integrarse, la cita entra directa.",
        gain: "Menos llamadas a recepción y menos huecos vacíos por olvidos",
      },
      {
        title: "Dudas de pacientes en su idioma",
        text: "Horario, primera visita, cómo prepararse para una sesión, si trabajáis con su aseguradora: responde con la información que tú validas y pasa a recepción lo que no sabe.",
        gain: "Respuesta fuera de horario y recepción libre para el paciente que está delante",
      },
      {
        title: "Notas de consulta resumidas",
        text: "A partir del dictado del profesional o de la grabación consentida de la sesión, prepara un borrador de nota con el formato de tu historia clínica. El profesional lo corrige y lo guarda.",
        gain: "Menos tiempo escribiendo al final del día, con la nota revisada por quien atendió",
      },
      {
        title: "Presupuestos explicados",
        text: "Convierte el presupuesto que ya ha hecho el dentista o el fisio en una explicación clara en el idioma del paciente: qué incluye cada fase y cuántas visitas lleva. No toca importes.",
        gain: "Pacientes que entienden lo que aceptan y menos dudas repetidas",
      },
      {
        title: "Pautas después de la cita",
        text: "Envía al paciente las indicaciones que el profesional ha dejado escritas, como los cuidados tras una extracción o los ejercicios de fisio, y le recuerda la próxima revisión.",
        gain: "El paciente tiene las pautas a mano y vuelve cuando le toca",
      },
    ],
    limits:
      "La IA no diagnostica, no recomienda tratamientos ni responde a síntomas: ante una urgencia o un dolor, deriva a la clínica. Tampoco da precios que no haya fijado el profesional. Las notas que prepara son borradores y solo entran en la historia clínica cuando él las revisa.",
    data: "Los datos de salud son categoría especial del RGPD: solo lo imprescindible, con permisos y proveedores de IA que no entrenan con tus datos, en la UE cuando es posible. Si se graba una sesión, el paciente lo sabe y lo acepta. Y sabe que habla con una IA, como pide el Reglamento europeo de IA.",
    mallorca:
      "En Mallorca muchos pacientes son residentes alemanes o británicos que quieren entender su tratamiento en su idioma, y en verano llega el turista con una urgencia dental o una lesión. Un asistente en inglés y alemán atiende lo básico y pasa el caso a recepción.",
    start:
      "Empieza por las dudas y las citas: el asistente responde con tu información validada y deja la petición en recepción, sin tocar la historia clínica. Antes, un diagnóstico de cómo trabajáis; después, un piloto acotado con alcance, plazos y precio por escrito.",
    faq: [
      {
        title: "¿La IA puede diagnosticar o recomendar tratamientos?",
        text: "No, y no la usamos para eso. El software pensado para diagnosticar se considera producto sanitario y tiene su propia regulación; lo nuestro es la gestión, la comunicación y el papeleo de la clínica. Si te planteas algo así, consúltalo con tu asesor.",
      },
      {
        title: "¿Se conecta con mi software de gestión clínica?",
        text: "Depende del programa: si permite integrarse o exportar la agenda, el asistente trabaja con ella. Si no, las peticiones llegan a recepción y se confirman a mano.",
      },
      {
        title: "¿Puedo usar la IA para escribir las notas clínicas?",
        text: "Para preparar un borrador, sí, siempre que el profesional lo revise antes de guardarlo. Si se graba la sesión, el paciente debe estar informado y de acuerdo; confírmalo con tu colegio profesional.",
      },
      {
        title: "¿Sirve para una consulta pequeña?",
        text: "Sí. Con un solo profesional, lo que más se nota es no tener que contestar mensajes entre paciente y paciente. Se empieza por ahí y se amplía si hace falta.",
      },
    ],
    searches: [
      "inteligencia artificial para clínicas",
      "chatbot para clínicas",
      "ia para clínica dental",
      "ia para fisioterapeutas",
      "recordatorio de citas por whatsapp clínica",
      "asistente virtual clínica dental",
      "chatbot clínica dental mallorca",
    ],
    related: ["residencias", "seguros", "abogados"],
  },
  {
    slug: "inmobiliarias",
    name: "Inmobiliarias",
    forWho: "inmobiliarias",
    niche: "inmobiliarias",
    title: "IA para inmobiliarias: fichas, compradores y captación",
    description:
      "Inteligencia artificial para inmobiliarias: fichas en varios idiomas, compradores cualificados, captación de propietarios y seguimiento de cada contacto.",
    h1: "IA en la inmobiliaria: menos tiempo en portales, más con compradores",
    lead: "Fichas redactadas en varios idiomas, compradores filtrados antes de la visita y propietarios con noticias sin que nadie tenga que acordarse. Precio y negociación siguen siendo tuyos.",
    context: [
      "Cada inmueble en Idealista o Fotocasa trae mensajes que piden lo mismo: si sigue disponible, si se puede visitar, si admite mascotas. Responder pronto marca quién se queda al comprador, pero el equipo está enseñando pisos o en la notaría.",
      "La IA encaja en lo que se repite y en lo que se escribe: redactar fichas, contestar con los datos del inmueble, preguntar lo que importa antes de la visita y resumir documentación. La valoración, el precio y la negociación siguen siendo del agente.",
    ],
    useCases: [
      {
        title: "Fichas en varios idiomas",
        text: "Con tus datos y fotos, redacta la descripción del inmueble en español, inglés o alemán con el tono de tu agencia. El agente la revisa antes de publicarla en tu web y en los portales.",
        gain: "Fichas completas y coherentes en todos los idiomas",
      },
      {
        title: "Compradores cualificados",
        text: "Cuando llega un contacto, el asistente responde con los datos de la ficha y pregunta presupuesto, financiación, zona y cuándo quiere comprar. Al agente le llega un resumen en tu CRM.",
        gain: "Visitas con compradores que encajan con el inmueble",
      },
      {
        title: "Captación de propietarios",
        text: "El propietario que pide valoración en tu web recibe respuesta al momento y una cita con un agente. La IA recoge los datos del inmueble; la valoración la hace tu equipo.",
        gain: "Respuesta rápida al propietario que está comparando agencias",
      },
      {
        title: "Seguimiento de leads",
        text: "Recuerda al agente a quién no ha contestado, avisa al comprador cuando entra un inmueble que encaja con lo que pidió y envía al propietario un resumen de visitas y comentarios.",
        gain: "Menos contactos olvidados y propietarios informados sin perseguir a nadie",
      },
      {
        title: "Resumen de documentación",
        text: "Lee la nota simple, el certificado energético o los estatutos de la comunidad y resume lo que conviene revisar: cargas, superficies, cuotas. El agente comprueba el original.",
        gain: "Menos tiempo leyendo documentos para preparar cada operación",
      },
    ],
    limits:
      "La IA no valora inmuebles, no fija ni negocia precios y no asesora sobre impuestos, hipotecas o la situación legal de una vivienda. Tampoco decide qué comprador es mejor: ordena la información y decide el agente. Las comprobaciones de prevención de blanqueo las hace siempre una persona.",
    data: "Compradores y propietarios comparten datos personales y, a veces, financieros: solo los necesarios, en tu CRM y con permisos. Usamos proveedores de IA que no entrenan con tus datos, en la UE cuando es posible. Y el asistente dice que es una IA, como pide el Reglamento europeo de IA.",
    mallorca:
      "En Baleares una parte importante del comprador es extranjero y busca desde su país en inglés, alemán o un idioma nórdico, en tu web o en portales como Kyero. Un asistente que le responde en su idioma y fuera de tu horario llega antes. El propietario local, en cambio, quiere trato cercano.",
    start:
      "Empieza por las fichas o por la primera respuesta a los contactos de portales: se nota pronto y no toca decisiones de precio. Primero vemos cómo te llegan hoy los contactos; después, un piloto acotado con alcance, plazos y precio por escrito.",
    faq: [
      {
        title: "¿Se conecta con mi CRM y con Idealista o Fotocasa?",
        text: "Si tu CRM inmobiliario permite integrarse, los contactos y las fichas entran y salen de él. Lo habitual es que el CRM publique en los portales, así que trabajamos sobre él.",
      },
      {
        title: "¿La IA puede valorar un inmueble?",
        text: "Puede reunir los datos que le das, como testigos de la zona, pero la valoración la decide tu equipo. Un precio mal dado a un propietario es difícil de corregir.",
      },
      {
        title: "¿Las descripciones pueden tener errores?",
        text: "Sí, por eso las revisa un agente antes de publicarlas. Se escriben solo con los datos de la ficha, sin inventar vistas, metros ni reformas.",
      },
      {
        title: "¿El comprador sabe que habla con una IA?",
        text: "Sí, el asistente lo dice al empezar. En cuanto el comprador pide visita o pregunta algo que no está en la ficha, pasa a un agente.",
      },
    ],
    searches: [
      "inteligencia artificial para inmobiliarias",
      "ia para inmobiliarias",
      "chatbot inmobiliaria",
      "automatizar leads inmobiliaria",
      "descripciones de inmuebles con ia",
      "crm inmobiliario con ia",
      "ia inmobiliaria mallorca",
    ],
    related: ["alquiler-vacacional", "construccion", "abogados"],
  },
  {
    slug: "abogados",
    name: "Abogados",
    forWho: "abogados y despachos",
    niche: "abogados",
    title: "Automatización e IA para despachos de abogados",
    description:
      "IA para abogados: consultas entrantes clasificadas, búsqueda y resúmenes de tus expedientes, borradores que revisa el abogado y plazos con recordatorio.",
    h1: "Un despacho más ordenado con IA, con el criterio siempre del abogado",
    lead: "Consultas clasificadas, expedientes que se encuentran al momento, borradores para revisar y plazos a la vista de todos. El secreto profesional y la decisión siguen en tu despacho.",
    context: [
      "En un despacho buena parte del día no es derecho: leer correos para saber de qué va cada consulta, buscar aquel escrito de un asunto parecido o preparar la primera versión de un documento que se parece a muchos anteriores.",
      "La IA ayuda en ese trabajo de clasificar, buscar y redactar borradores, siempre sobre tus propios documentos y con revisión del abogado. No asesora al cliente ni sustituye el criterio jurídico, y todo lo que produce pasa por quien firma.",
    ],
    useCases: [
      {
        title: "Consultas entrantes clasificadas",
        text: "Lee los correos y formularios que llegan, identifica el área (familia, laboral, inmobiliario, herencias), resume el asunto y lo asigna al abogado que lo lleva, con lo urgente marcado.",
        gain: "Cada consulta llega a quien la lleva sin repartirlas a mano",
      },
      {
        title: "Búsqueda en tus expedientes",
        text: "Pregunta en lenguaje normal por tus propios escritos, contratos o resoluciones y obtén la respuesta con el documento de origen. Solo busca en lo que cada abogado puede ver.",
        gain: "Encontrar un precedente propio sin abrir carpeta por carpeta",
      },
      {
        title: "Resúmenes de expediente",
        text: "Resume un expediente largo o la documentación que aporta el cliente: hechos, fechas y documentos que faltan, para preparar una reunión o pasar el asunto a un compañero.",
        gain: "Llegar a la reunión con el asunto repasado",
      },
      {
        title: "Borradores para revisar",
        text: "Prepara la primera versión de escritos y contratos habituales con tus plantillas y los datos del asunto. El abogado la revisa, la corrige y decide si se usa.",
        gain: "Menos tiempo en la parte mecánica de cada documento",
      },
      {
        title: "Plazos y recordatorios",
        text: "Propone la fecha de vencimiento a partir de la notificación o la resolución recibida y la lleva al calendario del despacho. Un abogado confirma cada plazo antes de darlo por bueno.",
        gain: "Plazos a la vista de todo el equipo, confirmados por un abogado",
      },
    ],
    limits:
      "La IA no asesora al cliente, no valora si un asunto tiene posibilidades ni presenta nada en un juzgado. Sus borradores y resúmenes pueden contener errores o citas inexistentes: el abogado comprueba cada dato y cada referencia antes de usarlos. Los plazos los confirma siempre una persona.",
    data: "Lo que te cuenta un cliente está protegido por el secreto profesional. Trabajamos con proveedores que se comprometen a no entrenar con tus datos, en la UE cuando es posible, con permisos por asunto y sin expedientes en herramientas gratuitas. Y el cliente sabe cuándo le responde una IA.",
    mallorca:
      "En Baleares muchas consultas llegan de residentes extranjeros, en inglés o alemán: compraventas, herencias con bienes en dos países, residencia o arrendamientos. La IA puede resumir y traducir lo que escriben para que el abogado lo lea en su idioma y preparar la respuesta que él revisa.",
    start:
      "Empieza por la clasificación de consultas o por la búsqueda en tus propios escritos: no tocan al cliente ni a los plazos. Primero, un diagnóstico de cómo trabaja el despacho; después, un piloto acotado con alcance, plazos y precio por escrito.",
    faq: [
      {
        title: "¿Puedo usar ChatGPT con documentos de clientes?",
        text: "No en una cuenta gratuita ni pegando expedientes sin control. Lo prudente es un servicio de empresa que no entrene con tus datos, con permisos y registro de uso; consulta con tu colegio las pautas que haya publicado.",
      },
      {
        title: "¿La IA puede redactar una demanda?",
        text: "Puede preparar un borrador con tus plantillas y los hechos del asunto. La estrategia, los fundamentos y la revisión de cada cita son trabajo del abogado.",
      },
      {
        title: "¿Se conecta con mi programa de gestión del despacho?",
        text: "Si tu programa permite integrarse o exportar, trabajamos sobre él; si no, sobre las carpetas y el correo donde ya guardas los asuntos. Lo vemos en el diagnóstico.",
      },
      {
        title: "¿Sirve para un abogado que trabaja solo?",
        text: "Sí. En un despacho pequeño lo que más se nota es no perder tiempo clasificando correos ni buscando escritos antiguos.",
      },
    ],
    searches: [
      "inteligencia artificial para abogados",
      "ia para abogados",
      "automatización despacho abogados",
      "chatbot para despacho de abogados",
      "ia para gestionar expedientes",
      "software con ia para abogados",
      "ia despacho abogados mallorca",
    ],
    related: ["asesorias", "inmobiliarias", "seguros"],
  },
  {
    slug: "asesorias",
    name: "Asesorías y gestorías",
    forWho: "asesorías y gestorías",
    niche: "asesorias-y-gestorias",
    title: "IA para asesorías y gestorías: facturas y clientes",
    description:
      "Inteligencia artificial para asesorías y gestorías: facturas de clientes recibidas y leídas con IA, documentación pedida a tiempo y dudas frecuentes resueltas.",
    h1: "Menos tiempo persiguiendo facturas y más tiempo para asesorar",
    lead: "Facturas que llegan por WhatsApp o email y que la IA lee, clientes a los que se les pide lo que falta y respuestas a las dudas de siempre. La interpretación fiscal sigue en tu equipo.",
    context: [
      "En una asesoría o gestoría el cuello de botella no suele ser la contabilidad, sino lo que viene antes: facturas en fotos, PDF y papel, clientes que se dejan documentos y las mismas preguntas sobre qué hay que enviar y cómo.",
      "La IA ya lee facturas y tickets y marca lo que no está claro, y un agente puede pedir lo que falta sin que nadie escriba el mismo mensaje a cada cliente. Lo que no conviene delegar es interpretar su situación fiscal o laboral: eso es trabajo del asesor.",
    ],
    useCases: [
      {
        title: "Recepción y lectura de facturas",
        text: "COMA para despachos recibe las facturas de tus clientes por WhatsApp y email, las lee con IA, comprueba NIF, IVA y duplicados y las exporta a a3, Sage, Contasol u Holded.",
        gain: "Menos tecleo y solo lo dudoso llega a revisión",
      },
      {
        title: "Peticiones de documentación",
        text: "Al cerrar cada periodo, el agente pide a cada cliente lo que le falta según lo recibido: facturas, extractos, contratos. Recuerda sin insistir de más y avisa al equipo de quién no responde.",
        gain: "El equipo deja de escribir el mismo recordatorio a cada cliente",
      },
      {
        title: "Dudas frecuentes de clientes",
        text: "Responde por WhatsApp o email a lo que se pregunta siempre: cómo enviar una factura, qué documentos pide un trámite, qué incluye la cuota. Lo que requiere criterio pasa al asesor.",
        gain: "Menos interrupciones y respuesta fuera de horario",
      },
      {
        title: "Calendario de obligaciones por cliente",
        text: "Con las obligaciones que tu equipo asigna a cada cliente, prepara su calendario y le avisa antes de cada vencimiento de lo que necesitas de él. Las fechas las mantiene la asesoría.",
        gain: "Cada cliente sabe qué te tiene que mandar y para cuándo",
      },
      {
        title: "Altas y bajas laborales ordenadas",
        text: "Cuando un cliente avisa de un alta, una baja o un cambio de jornada por WhatsApp o email, la IA pasa los datos a una ficha y pide lo que falta. El técnico laboral la tramita.",
        gain: "Menos idas y vueltas para completar cada alta o baja",
      },
    ],
    limits:
      "La IA no interpreta la situación fiscal o laboral de un cliente, no calcula impuestos ni decide cómo contabilizar un caso dudoso, y no presenta nada sin aprobación del despacho. Lo que lee de una factura pasa controles y, cuando hay dudas, lo revisa una persona.",
    data: "Facturas, nóminas y extractos son datos financieros y personales de tus clientes y de sus trabajadores. Se tratan con contrato de encargo de tratamiento, permisos y proveedores de IA que no entrenan con tus datos, en la UE cuando es posible. Y el cliente sabe que le contesta una IA.",
    mallorca:
      "En Baleares la asesoría laboral sigue el ritmo de la temporada: llamamientos de fijos discontinuos en primavera y bajas en otoño, muchos a la vez. Y muchos clientes son autónomos del turismo o residentes extranjeros que agradecen peticiones y respuestas en inglés.",
    start:
      "Empieza por la recepción y lectura de facturas: es donde más se repite el trabajo y no toca el criterio del asesor. Primero vemos cómo te llegan hoy las facturas y qué programa contable usas; después, alcance, plazos y precio por escrito.",
    faq: [
      {
        title: "¿Qué es COMA para despachos?",
        text: "Nuestro producto para asesorías y gestorías: recibe las facturas de tus clientes por WhatsApp y email, las lee con IA, comprueba NIF, IVA y duplicados y las exporta a tu programa contable. Tiene su propia página en esta web.",
      },
      {
        title: "¿Tengo que cambiar de programa contable?",
        text: "No. Se exporta a a3, Sage o Contasol con su fichero de importación, o por API a Holded. Si usas otro, lo vemos en el diagnóstico.",
      },
      {
        title: "¿La IA puede responder dudas fiscales a mis clientes?",
        text: "Solo las de funcionamiento, como cómo enviar una factura o qué documento falta. Las dudas fiscales o laborales de cada caso las responde el asesor.",
      },
      {
        title: "¿Qué pasa si la IA lee mal una factura?",
        text: "Se comprueban el NIF, el IVA y los duplicados, y lo que no pasa los controles o no se lee bien queda marcado para revisión. Nada se exporta sin pasar por ahí.",
      },
    ],
    searches: [
      "inteligencia artificial para asesorías",
      "ia para gestorías",
      "automatizar asesoría",
      "lectura de facturas con ia",
      "recibir facturas por whatsapp asesoría",
      "software con ia para despachos contables",
      "ia asesoría mallorca",
    ],
    related: ["abogados", "seguros", "comercio-y-ecommerce"],
  },
  {
    slug: "talleres",
    name: "Talleres mecánicos",
    forWho: "talleres mecánicos",
    niche: "talleres-mecanicos",
    title: "IA en talleres mecánicos: cita por WhatsApp y avisos",
    description:
      "IA para talleres mecánicos: cita previa por WhatsApp, presupuestos orientativos a partir de fotos que revisa el mecánico, aviso de coche listo y recordatorios.",
    h1: "Un taller que contesta el WhatsApp mientras tú estás bajo el coche",
    lead: "La IA da cita, prepara presupuestos orientativos a partir de fotos para que los revise el mecánico y avisa cuando el coche está listo o le toca la revisión.",
    context: [
      "En un taller el teléfono y el WhatsApp suenan con las manos llenas de grasa: «¿tenéis hueco el jueves?», «¿cuánto cuesta cambiar las pastillas?», «¿está ya mi coche?». Contestar interrumpe el trabajo, y no contestar manda al cliente al taller de al lado.",
      "Una IA puede llevar esa conversación repetida: dar hueco, pedir matrícula y fotos, avisar cuando el coche está listo. Lo que no hace es diagnosticar ni cerrar un precio: eso sigue siendo del mecánico, que es quien ve el coche.",
    ],
    useCases: [
      {
        title: "Cita previa por WhatsApp",
        text: "El cliente escribe al WhatsApp del taller y la IA le pregunta matrícula, modelo y qué le pasa, y le ofrece hueco según tu agenda. Con la API oficial de WhatsApp Business.",
        gain: "Citas cogidas sin soltar la herramienta",
      },
      {
        title: "Presupuesto orientativo con fotos",
        text: "Con las fotos del golpe o de la pieza y los datos del coche, prepara un presupuesto orientativo con tus precios de mano de obra y recambios. El mecánico lo revisa antes de enviarlo.",
        gain: "Respuesta más rápida al cliente que compara talleres",
      },
      {
        title: "Aviso de coche listo",
        text: "Al cerrar la orden de trabajo en tu programa de taller, si permite integrarse, el cliente recibe el aviso con el importe y el horario de recogida. Si pregunta algo, la IA responde.",
        gain: "Menos llamadas preguntando si el coche está listo",
      },
      {
        title: "Recordatorios de revisión",
        text: "Según los kilómetros y la fecha de la última visita, avisa al cliente cuando le toca revisión, cambio de aceite o pre-ITV, con un enlace para pedir cita.",
        gain: "Clientes que vuelven cuando toca, no cuando algo falla",
      },
      {
        title: "Aprobación de trabajos extra",
        text: "Si al desmontar aparece otra avería, la IA envía al cliente la explicación que ha escrito el mecánico, con fotos, y recoge su aprobación por escrito.",
        gain: "Trabajos aprobados con constancia, sin perseguir al cliente",
      },
    ],
    limits:
      "La IA no diagnostica averías ni da un precio cerrado sin que el mecánico haya visto el coche: lo que prepara con fotos es orientativo y lo revisa él. Tampoco dice si un coche es seguro para circular. El presupuesto por escrito que acepta el cliente sigue siendo el del taller.",
    data: "Matrícula, teléfono y fotos del coche son datos personales, y en las fotos pueden salir otras matrículas o caras. Se guarda lo necesario, con proveedores de IA que no entrenan con tus datos, en la UE cuando es posible. El cliente sabe que le contesta una IA, como pide el Reglamento europeo de IA.",
    mallorca:
      "En Mallorca el taller vive de la cercanía y del boca a boca, pero en temporada también entran flotas de alquiler y furgonetas de reparto que necesitan respuesta rápida. Y muchos residentes extranjeros agradecen recibir la cita y el presupuesto en inglés o alemán.",
    start:
      "Empieza por la cita previa y el aviso de coche listo por WhatsApp: es lo que más llamadas quita y no toca el diagnóstico. Vemos cómo trabajas hoy y qué programa usas, y te damos alcance, plazos y precio por escrito antes de empezar.",
    faq: [
      {
        title: "¿La IA puede decir qué le pasa al coche?",
        text: "Puede preguntar los síntomas y ayudar a elegir qué cita pedir, pero no diagnostica. El diagnóstico lo hace el mecánico con el coche en el taller.",
      },
      {
        title: "¿Un presupuesto con fotos es fiable?",
        text: "Sirve para orientar al cliente, sobre todo en chapa y pintura. El precio definitivo lo da el mecánico al ver el coche, y el cliente puede pedir presupuesto por escrito antes de la reparación; consulta los detalles con tu asociación de talleres.",
      },
      {
        title: "¿Se conecta con mi programa de taller?",
        text: "Si permite integrarse o exportar las órdenes de trabajo, el aviso de coche listo sale solo. Si no, se lanza desde un botón o una hoja sencilla.",
      },
      {
        title: "¿Sirve para un taller de chapa y pintura?",
        text: "Sí. Ahí las fotos del golpe son lo primero, y el presupuesto orientativo ayuda a saber qué trabajo viene antes de que el cliente se acerque.",
      },
    ],
    searches: [
      "inteligencia artificial para talleres",
      "ia para talleres mecánicos",
      "whatsapp para talleres mecánicos",
      "cita previa taller por whatsapp",
      "presupuesto taller con fotos",
      "chatbot taller mecánico",
      "ia taller mecánico mallorca",
    ],
    related: ["seguros", "transporte-y-traslados", "comercio-y-ecommerce"],
  },
  {
    slug: "construccion",
    name: "Reformas y construcción",
    forWho: "empresas de reformas y construcción",
    niche: "reformas-y-construccion",
    title: "IA para reformas y construcción: presupuestos y obra",
    description:
      "Inteligencia artificial para reformas y construcción: presupuestos con mediciones y fotos, partes de obra, proveedores y clientes en su idioma.",
    h1: "IA para la obra: presupuestos, partes y clientes, con tu revisión",
    lead: "Del WhatsApp con fotos y medidas a un borrador de presupuesto, partes de obra dictados desde el móvil y un cliente extranjero que sabe cómo va su reforma.",
    context: [
      "En reformas el trabajo de oficina se acumula al final del día: pasar mediciones a un presupuesto, escribir el parte, perseguir al proveedor que no confirma y contestar al cliente que pregunta cómo va la obra. Mientras, otras peticiones de presupuesto esperan.",
      "La IA puede convertir notas, fotos y audios en documentos ordenados y mantener informado al cliente. Pero medir, decidir la solución técnica y cerrar un precio sigue siendo cosa del jefe de obra, que revisa todo antes de que salga.",
    ],
    useCases: [
      {
        title: "Presupuestos con mediciones y fotos",
        text: "Con las medidas que tomas en la visita y las fotos, prepara un borrador de presupuesto por partidas con tus precios o tu banco de precios. El jefe de obra lo revisa y lo ajusta antes de enviarlo.",
        gain: "Menos tiempo pasando notas a limpio para cada presupuesto",
      },
      {
        title: "Partes de obra dictados",
        text: "El encargado graba un audio al terminar la jornada y la IA lo convierte en un parte ordenado: tareas hechas, personal, incidencias y material que falta, con las fotos del día.",
        gain: "Partes completos sin escribir en la obra",
      },
      {
        title: "Seguimiento de proveedores",
        text: "Pide a cada proveedor que confirme pedidos y fechas de entrega, lee sus respuestas y avisa al jefe de obra cuando algo se retrasa o no cuadra con lo pedido.",
        gain: "Menos sorpresas con material que no llega",
      },
      {
        title: "Cliente extranjero informado",
        text: "Envía al cliente, en inglés, alemán o su idioma, un resumen del avance con fotos a partir del parte de obra. Sus preguntas se responden con lo validado y las de decisión pasan a ti.",
        gain: "Un cliente al tanto de su obra aunque no esté en la isla",
      },
      {
        title: "Peticiones de presupuesto filtradas",
        text: "Cuando llega una petición, la IA pregunta tipo de obra, zona, metros aproximados y fotos, y te pasa una ficha completa para decidir si vas a verla.",
        gain: "Visitas solo a las obras que encajan con lo que haces",
      },
    ],
    limits:
      "La IA no mide, no decide soluciones técnicas ni opina sobre licencias, estructuras o seguridad en obra. Un presupuesto que prepara es un borrador: el precio y los plazos los cierra el jefe de obra. Y cualquier cambio sobre lo contratado lo aprueban por escrito el cliente y tu empresa.",
    data: "Clientes, trabajadores y proveedores aparecen en partes, audios y fotos de obra: se guarda lo necesario y con permisos. Usamos proveedores de IA que no entrenan con tus datos, en la UE cuando es posible. Y el cliente sabe que el asistente es una IA, como pide el Reglamento europeo de IA.",
    mallorca:
      "En Mallorca mucho cliente extranjero reforma su casa o su finca sin estar en la isla y quiere saber en su idioma cómo avanza. El material que llega por barco pide seguir de cerca a los proveedores, y algunos municipios limitan las obras en zonas turísticas en verano: consúltalo en tu ayuntamiento.",
    start:
      "Empieza por los partes de obra o por los borradores de presupuesto: son el papeleo que más se acumula y siempre pasan por tu revisión. Primero vemos cómo trabajas y con qué programa presupuestas; después, alcance, plazos y precio por escrito.",
    faq: [
      {
        title: "¿La IA puede hacer un presupuesto sin visitar la obra?",
        text: "Puede preparar uno orientativo con las fotos y medidas del cliente, pero el presupuesto que firmas sale de tu visita. Lo que no se ve en una foto, como una instalación vieja, solo lo ves tú.",
      },
      {
        title: "¿Funciona con mi programa de presupuestos?",
        text: "Si tu programa permite importar partidas o integrarse, el borrador entra en él. Si no, sale en una hoja que importas o copias.",
      },
      {
        title: "¿Y los partes en obras sin cobertura?",
        text: "El audio y las fotos se quedan en el móvil y se envían al recuperar la conexión. El parte se prepara después.",
      },
      {
        title: "¿El cliente extranjero sabe que habla con una IA?",
        text: "Sí, se lo dice al empezar y en su idioma. Las decisiones sobre la obra, como cambios o extras, las trata siempre contigo.",
      },
    ],
    searches: [
      "inteligencia artificial para construcción",
      "ia para empresas de reformas",
      "ia en la construcción",
      "presupuestos de obra con ia",
      "partes de obra automáticos",
      "software de reformas con ia",
      "empresa de reformas mallorca ia",
    ],
    related: ["inmobiliarias", "alquiler-vacacional", "hoteles"],
  },
  {
    slug: "seguros",
    name: "Corredurías de seguros",
    forWho: "corredurías de seguros",
    niche: "corredurias-de-seguros",
    title: "Inteligencia artificial para corredurías de seguros",
    description:
      "IA para corredurías de seguros: comparativas preparadas para el mediador, renovaciones avisadas, primera atención de siniestros y documentación ordenada.",
    h1: "La IA prepara, el mediador recomienda: así encaja en tu correduría",
    lead: "Comparativas listas para revisar, renovaciones avisadas con tiempo, partes de siniestro bien recogidos y la documentación de cada póliza en su sitio.",
    context: [
      "En una correduría se escribe y se compara mucho: tarificar en varias compañías, pasar las condiciones a algo que el cliente entienda, avisar de renovaciones y completar partes de siniestro a medias. Buena parte es trabajo de oficina que se repite con cada cliente.",
      "La IA puede ordenar ese trabajo y preparar borradores, pero en seguros recomendar tiene responsabilidad y es cosa del mediador. Por eso todo lo que la IA prepara lo revisa y lo valida él.",
    ],
    useCases: [
      {
        title: "Comparativas para revisar",
        text: "Lee las ofertas y condiciones de varias compañías y prepara un cuadro con coberturas, exclusiones y franquicias, para que el mediador lo revise y recomiende.",
        gain: "Menos tiempo pasando condiciones a limpio",
      },
      {
        title: "Renovaciones avisadas",
        text: "Antes de cada vencimiento, prepara para el cliente el aviso con lo que cambia en su póliza y le pregunta si hay novedades: obras en casa, coche nuevo, otro conductor.",
        gain: "Renovaciones revisadas con el cliente antes de que venzan",
      },
      {
        title: "Primera atención de siniestros",
        text: "Cuando un cliente da parte, la IA le pregunta lo necesario según el ramo, recoge fotos y documentos y pasa el siniestro al tramitador. No dice si está cubierto.",
        gain: "Partes completos desde el primer mensaje, también fuera de horario",
      },
      {
        title: "Documentación de pólizas",
        text: "Clasifica las pólizas, recibos, suplementos y documentos de identidad que mandan los clientes, los asocia a su ficha y avisa de lo que falta para emitir.",
        gain: "Cada documento en su ficha sin buscar en el correo",
      },
      {
        title: "Dudas sobre la póliza",
        text: "Responde a preguntas generales con la documentación de la póliza delante: cómo pedir asistencia en carretera, cómo conseguir un duplicado, qué papeles necesita. Las coberturas las confirma tu equipo.",
        gain: "Menos interrupciones por consultas sencillas",
      },
    ],
    limits:
      "La IA no recomienda un seguro, no dice si un siniestro está cubierto ni negocia con la compañía. Prepara comparativas y recoge datos; la recomendación al cliente y la tramitación del siniestro son del mediador, que revisa todo lo que la IA prepara.",
    data: "Pólizas y siniestros incluyen datos personales, financieros y a veces de salud, categoría especial del RGPD. Lo imprescindible, con permisos y proveedores de IA que no entrenan con tus datos, en la UE cuando es posible. El cliente sabe que habla con una IA, como pide el Reglamento europeo de IA.",
    mallorca:
      "En Baleares hay seguros con perfil propio: hogar de segunda residencia, embarcaciones, responsabilidad civil para alquiler turístico o salud privada para residentes extranjeros. Muchos de esos clientes escriben en inglés o alemán, y la IA puede atenderles en su idioma y pasar el caso al mediador.",
    start:
      "Empieza por la documentación o por los avisos de renovación: es trabajo repetido y no toca la recomendación. Primero, un diagnóstico de cómo trabaja tu correduría y con qué programa de gestión; después, alcance, plazos y precio por escrito.",
    faq: [
      {
        title: "¿La IA puede asesorar al cliente sobre qué seguro contratar?",
        text: "No. Puede explicar en qué consiste cada ramo y preparar la comparativa, pero la recomendación es del mediador, y la normativa de distribución de seguros le pide actuar en interés del cliente. Consulta con tu colegio o asociación de mediadores cómo encaja la IA en tus obligaciones.",
      },
      {
        title: "¿Qué dice el Reglamento europeo de IA sobre seguros?",
        text: "Considera de alto riesgo usar IA para evaluar riesgos y fijar precios en seguros de vida y salud de personas físicas, con obligaciones exigentes. Nuestros casos se quedan en la gestión y la comunicación; si quieres ir más allá, revísalo con tu asesor.",
      },
      {
        title: "¿Se conecta con mi programa de gestión de correduría?",
        text: "Si permite integrarse o exportar, trabajamos con sus datos de pólizas y vencimientos. Si no, partimos de exportaciones que se cargan en un paso.",
      },
      {
        title: "¿Y si un cliente da parte en domingo?",
        text: "La IA recoge lo necesario, le explica los siguientes pasos que tú has definido y deja el siniestro listo para el tramitador. Si es una urgencia, le indica cómo contactar con la asistencia de su compañía.",
      },
    ],
    searches: [
      "inteligencia artificial para corredurías de seguros",
      "ia para corredores de seguros",
      "ia en seguros",
      "automatización correduría de seguros",
      "chatbot para corredurías",
      "gestión de siniestros con ia",
      "correduría de seguros mallorca ia",
    ],
    related: ["talleres", "inmobiliarias", "nautica"],
  },
  {
    slug: "academias",
    name: "Academias y escuelas de idiomas",
    forWho: "academias y escuelas de idiomas",
    niche: "academias-y-escuelas-de-idiomas",
    title: "IA en academias y escuelas de idiomas: alumnos y matrícula",
    description:
      "IA para academias y escuelas de idiomas: matrícula y dudas atendidas, pruebas de nivel orientativas, seguimiento de alumnos y materiales que revisa el profesor.",
    h1: "Menos cola en secretaría y más tiempo de los profesores para enseñar",
    lead: "La IA atiende dudas de matrícula, orienta el nivel antes de la prueba con un profesor, avisa de faltas y ayuda a preparar materiales. Evaluar y decidir sigue siendo del equipo docente.",
    context: [
      "En una academia las preguntas se concentran al empezar el curso y antes de cada examen: qué nivel tengo, qué horario queda, cuánto cuesta, cuándo es la convocatoria. Secretaría responde lo mismo una y otra vez mientras los profesores preparan material fuera de horas.",
      "La IA puede llevar esa atención repetida y ayudar a preparar ejercicios adaptados a cada grupo. Lo que no debe hacer sola es evaluar a un alumno ni decidir su grupo: orienta, y el profesor confirma.",
    ],
    useCases: [
      {
        title: "Matrícula y dudas",
        text: "Responde por WhatsApp o en la web sobre cursos, horarios, plazas y precios publicados, y recoge los datos de matrícula para que secretaría la confirme.",
        gain: "Menos cola y menos llamadas al empezar el curso",
      },
      {
        title: "Prueba de nivel orientativa",
        text: "Un test adaptado da una primera orientación del nivel y la IA resume los errores para el profesor, que hace la prueba oral y asigna el grupo.",
        gain: "Alumnos que llegan a la prueba oral con un punto de partida",
      },
      {
        title: "Seguimiento de alumnos",
        text: "Detecta faltas seguidas o tareas sin entregar en tu programa de gestión o tu aula virtual y prepara un aviso al alumno o a la familia, que el profesor revisa antes de enviarlo.",
        gain: "Avisos a tiempo, antes de que un alumno se descuelgue",
      },
      {
        title: "Materiales por nivel",
        text: "A partir de tu programación, prepara ejercicios, lecturas graduadas y listas de vocabulario para cada grupo. El profesor los revisa y adapta antes de usarlos en clase.",
        gain: "Más tiempo del profesor para enseñar y menos para preparar",
      },
      {
        title: "Práctica entre clases",
        text: "Un asistente para practicar conversación por escrito con el vocabulario y el nivel del grupo, según las pautas del profesor. Con menores, solo con permiso de la familia.",
        gain: "Más práctica fuera del aula, con el temario de la academia",
      },
    ],
    limits:
      "La IA no evalúa ni certifica el nivel de un alumno, no decide grupos, notas ni bajas y no gestiona devoluciones: orienta y prepara, y deciden el profesor o secretaría. Los avisos a familias y los materiales los revisa siempre una persona antes de enviarlos.",
    data: "Con alumnos menores, los datos piden más cuidado: lo mínimo, con permiso de la familia y sin usarlos para nada ajeno a la clase. Proveedores de IA que no entrenan con tus datos, en la UE cuando es posible. Y el alumno o la familia sabe que habla con una IA, como pide el Reglamento europeo de IA.",
    mallorca:
      "En Mallorca conviven dos públicos: el residente que prepara inglés o alemán para trabajar en turismo y el extranjero que aprende español o catalán. La IA puede atender a cada uno en su idioma y explicarle los cursos intensivos de antes de la temporada.",
    start:
      "Empieza por la atención de matrícula y dudas al inicio de curso: es donde más se acumula y no toca la evaluación. Primero vemos cómo matriculas hoy y qué programa usas; después, alcance, plazos y precio por escrito.",
    faq: [
      {
        title: "¿La IA puede decidir el nivel de un alumno?",
        text: "Puede orientarlo con un test, pero el nivel y el grupo los confirma un profesor, sobre todo en la parte oral. El Reglamento europeo de IA es especialmente exigente con los sistemas que evalúan alumnos o deciden su acceso a la formación; consulta con tu asesor si quieres ir más allá.",
      },
      {
        title: "¿Se puede usar con alumnos menores?",
        text: "Sí, con más cuidado: datos mínimos y permiso de la familia. En España, por debajo de los 14 años el consentimiento lo dan padres o tutores; confírmalo con tu asesor de protección de datos.",
      },
      {
        title: "¿Se conecta con mi programa de gestión o mi aula virtual?",
        text: "Si permiten integrarse, como Moodle o Google Classroom, trabajamos con sus datos de alumnos, faltas y tareas. Si no, con exportaciones que se cargan en un paso.",
      },
      {
        title: "¿Los materiales que prepara la IA tienen errores?",
        text: "Pueden tenerlos, como cualquier borrador. Por eso los revisa el profesor antes de usarlos en clase.",
      },
    ],
    searches: [
      "inteligencia artificial para academias",
      "ia para academias",
      "ia para escuelas de idiomas",
      "chatbot para academias",
      "prueba de nivel con ia",
      "automatizar matrículas academia",
      "academia de idiomas mallorca ia",
    ],
    related: ["clinicas", "residencias", "ayuntamientos"],
  },
  {
    slug: "residencias",
    name: "Residencias y ayuda a domicilio",
    forWho: "residencias y ayuda a domicilio",
    niche: "residencias-de-mayores",
    title: "IA en residencias de mayores y ayuda a domicilio",
    description:
      "Inteligencia artificial para residencias y ayuda a domicilio: información a familias, visitas, registros de cuidados resumidos para el equipo y turnos.",
    h1: "IA en la residencia: menos papeleo y más tiempo para cuidar",
    lead: "La IA responde a las familias, organiza visitas, resume los registros de cuidados para el relevo y ayuda a cuadrar turnos. Las decisiones sobre cada persona las toma siempre el equipo.",
    context: [
      "En una residencia o un servicio de ayuda a domicilio el teléfono no para: familias que preguntan por horarios de visita, documentación o cómo está su madre, y un equipo que además registra cada cuidado y cubre turnos. Ese tiempo se resta a la atención.",
      "La IA puede atender las preguntas generales, ordenar visitas y convertir los registros del día en un resumen claro para el relevo. Lo que no hace es decidir sobre cuidados, medicación o el estado de un residente: eso es del equipo profesional.",
    ],
    useCases: [
      {
        title: "Información a familias",
        text: "Responde a cualquier hora sobre servicios, horarios, documentación para el ingreso y cómo pedir una visita. Del estado de un residente no informa: lo pasa al profesional de referencia.",
        gain: "Familias atendidas fuera de horario y menos llamadas repetidas",
      },
      {
        title: "Gestión de visitas",
        text: "La familia pide visita o videollamada por WhatsApp o en la web, la IA le propone huecos según el horario del centro y avisa al equipo de quién viene.",
        gain: "Visitas ordenadas sin cuadrarlas por teléfono",
      },
      {
        title: "Registros de cuidados resumidos",
        text: "Con los registros del turno en tu software de gestión, si permite integrarse, prepara un resumen para el relevo: incidencias, comidas, descanso. El equipo lo revisa y lo completa.",
        gain: "Relevos más claros sin releer todos los registros",
      },
      {
        title: "Turnos y sustituciones",
        text: "Con las reglas que marca tu equipo, prepara una propuesta de cuadrante y, cuando alguien falta, avisa a quien puede cubrir. La coordinación revisa y aprueba cada cambio.",
        gain: "Menos tiempo cuadrando turnos a última hora",
      },
      {
        title: "Partes de visita a domicilio",
        text: "La auxiliar graba un audio al salir de cada casa y la IA lo convierte en un parte para la coordinadora, con lo que la auxiliar ha señalado para revisar.",
        gain: "Partes completos sin escribir en la calle",
      },
    ],
    limits:
      "La IA no decide sobre cuidados, medicación ni dietas, no valora el estado de un residente y no informa a nadie de su salud: prepara resúmenes y propuestas que revisa el equipo. Tampoco promete plazas ni decide ingresos, que dependen de la dirección y, en plazas públicas, de servicios sociales.",
    data: "Los datos de salud de los mayores son categoría especial del RGPD: el asistente no los da a las familias y el equipo trabaja con permisos por perfil. Proveedores de IA que no entrenan con tus datos, en la UE cuando es posible, y aviso de que responde una IA, como pide el Reglamento europeo de IA.",
    mallorca:
      "En Mallorca hay muchos mayores extranjeros cuyos hijos viven en Alemania o Reino Unido y preguntan desde allí, en su idioma y a deshoras. Un asistente en inglés o alemán, con visitas por videollamada, les acerca al centro. Las familias de aquí valoran el trato cercano.",
    start:
      "Empieza por la información a familias y la gestión de visitas: quita llamadas sin tocar datos de salud. Los registros de cuidados vienen después, con el equipo. Primero, un diagnóstico; luego, alcance, plazos y precio por escrito.",
    faq: [
      {
        title: "¿La IA puede contar a la familia cómo está un residente?",
        text: "No. El estado de salud de una persona lo comunica el profesional a quien está autorizado; el asistente solo explica cómo contactar con él.",
      },
      {
        title: "¿El personal tiene que aprender un programa nuevo?",
        text: "No necesariamente. Los partes se pueden dictar por audio y los resúmenes llegan donde ya trabaja el equipo, en tu software de gestión si permite integrarse.",
      },
      {
        title: "¿Sirve para un servicio de ayuda a domicilio?",
        text: "Sí. Ahí ayuda con los partes de cada visita, los avisos a familias y los cambios de horario cuando una auxiliar no puede ir.",
      },
      {
        title: "¿La IA puede hacer los turnos?",
        text: "Propone un cuadrante con las reglas que le das, como descansos y categorías, pero lo aprueba la coordinación. Lo que marca tu convenio, confírmalo con tu asesor laboral.",
      },
    ],
    searches: [
      "inteligencia artificial para residencias de mayores",
      "ia en residencias",
      "ia para ayuda a domicilio",
      "software para residencias con ia",
      "chatbot residencia de mayores",
      "registro de cuidados con ia",
      "residencia de mayores mallorca ia",
    ],
    related: ["clinicas", "seguros", "ayuntamientos"],
  },
];
