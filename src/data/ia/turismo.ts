import type { AiSector } from "./types";

/** IA en turismo, hostelería, comercio y administración. Reglas en ./types.ts. */
export const iaTurismo: AiSector[] = [
  {
    slug: "hoteles",
    name: "Hoteles",
    forWho: "hoteles",
    niche: "hoteles",
    title: "Inteligencia artificial para hoteles independientes",
    description:
      "IA para hoteles independientes y boutique: atención al huésped en su idioma, extras antes de la llegada, respuestas a reseñas y previsión con datos de tu PMS.",
    h1: "Inteligencia artificial que quita trabajo a la recepción de tu hotel",
    lead: "Respuestas al huésped en su idioma, extras ofrecidos antes de la llegada y procedimientos a mano en recepción. Con los datos de tu PMS y una persona revisando lo importante.",
    context: [
      "En un hotel pequeño, recepción contesta emails, WhatsApp y mensajes de Booking mientras atiende el mostrador. Muchas preguntas se repiten: hora de entrada, parking, traslados, si se admiten perros. Ahí la IA quita trabajo sin tocar el trato con el huésped.",
      "Lo realista es empezar con la información que ya tienes: la ficha del hotel, tus políticas y las reservas del PMS. La IA prepara respuestas y propuestas; tarifas, cambios de reserva y quejas los sigue decidiendo tu equipo.",
    ],
    useCases: [
      {
        title: "Atención al huésped en su idioma",
        text: "Un agente responde por email, web o WhatsApp en el idioma del huésped con la información que validas: horarios, parking, traslados, mascotas. Lo que no sabe, lo pasa a recepción.",
        gain: "Menos preguntas repetidas en recepción y respuesta fuera de horario",
      },
      {
        title: "Extras antes de la llegada",
        text: "Unos días antes, cada huésped recibe en su idioma los extras que encajan con su reserva: traslado, cena, salida tardía o mejor habitación, según la disponibilidad de tu PMS.",
        gain: "Extras ofrecidos a todos los huéspedes, no solo a quien pregunta",
      },
      {
        title: "Borradores de respuesta a reseñas",
        text: "La IA lee cada reseña de Google, TripAdvisor o Booking y prepara una respuesta en el idioma del cliente, sobre lo que cuenta de verdad. Tú la revisas y la publicas.",
        gain: "Reseñas contestadas a tiempo y con el tono de tu hotel",
      },
      {
        title: "Previsión de demanda",
        text: "Con el histórico de reservas de tu PMS, si permite exportarlo o integrarse, la IA señala semanas flojas, picos y el ritmo de reservas. La tarifa la sigues fijando tú.",
        gain: "Decisiones de precio y de personal con los datos a la vista",
      },
      {
        title: "Asistente interno para recepción",
        text: "Recepción pregunta qué hacer con una llegada de madrugada o un objeto olvidado y el asistente responde con tu manual y tus procedimientos, citando el documento.",
        gain: "Personal nuevo que resuelve dudas sin interrumpir al jefe de recepción",
      },
    ],
    limits:
      "La IA no modifica ni cancela reservas, no cobra, no aplica descuentos fuera de las reglas que fijes y no gestiona quejas ni incidencias de seguridad. Tampoco decide tarifas: la previsión ayuda, pero el precio lo pone una persona. Ante una reclamación, deriva a recepción.",
    data: "Los datos de huéspedes, incluidos los del registro de viajeros y los de menores, se usan solo para su fin y en lo mínimo. La IA no ve datos de tarjeta. Usamos proveedores que no entrenan con tus datos, en la UE cuando es posible, y el huésped sabe que le atiende una IA.",
    mallorca:
      "Muchos hoteles de Mallorca cierran en invierno y cada temporada incorporan personal nuevo: un asistente con tus procedimientos acorta esa puesta al día. Los huéspedes escriben en alemán, inglés o español, y el agente debe explicar bien el impuesto de turismo sostenible.",
    start:
      "Un agente que responda las preguntas previas a la llegada en dos o tres idiomas, con la información que tú validas y paso a recepción en lo demás. Es acotado, se mide con conversaciones reales y no toca reservas ni cobros. Después, extras o el asistente interno.",
    faq: [
      {
        title: "¿Se conecta con mi PMS o mi channel manager?",
        text: "Depende del programa: si tiene API o permite exportar datos, la IA puede leer reservas y disponibilidad. Lo revisamos antes de presupuestar y, si no se puede, empezamos por tareas que no lo necesitan.",
      },
      {
        title: "¿El huésped sabrá que le responde una IA?",
        text: "Sí. El Reglamento europeo de IA exige informar a la persona de que habla con una IA, y el agente lo dice desde el primer mensaje. Si el huésped prefiere a una persona, pasa a recepción.",
      },
      {
        title: "¿La IA puede contestar sola a las reseñas?",
        text: "Podría, pero no lo recomendamos. Prepara el borrador y una persona lo aprueba, sobre todo en reseñas negativas o que mencionan datos del huésped.",
      },
      {
        title: "¿Tiene sentido en un hotel de pocas habitaciones?",
        text: "Sí, si se empieza por una tarea concreta, como contestar las preguntas previas a la llegada. No hace falta un proyecto grande para probarlo.",
      },
    ],
    searches: [
      "inteligencia artificial para hoteles",
      "ia para hoteles",
      "chatbot para hotel",
      "ia para recepción de hotel",
      "responder reseñas hotel con ia",
      "automatización hotel pequeño",
      "ia hoteles mallorca",
    ],
    related: ["alquiler-vacacional", "restaurantes", "transporte-y-traslados"],
  },
  {
    slug: "alquiler-vacacional",
    name: "Alquiler vacacional",
    forWho: "alquiler vacacional",
    niche: "alquiler-vacacional",
    title: "IA para alquiler vacacional: huéspedes, limpiezas y anuncios",
    description:
      "IA para propietarios y gestores de viviendas turísticas: mensajes al huésped en su idioma, check-in online, limpiezas coordinadas y anuncios traducidos.",
    h1: "Tus viviendas turísticas, atendidas en el idioma de cada huésped",
    lead: "Mensajes antes, durante y después de la estancia, check-in online y limpiezas avisadas solas. Para quien tiene una casa o gestiona varias.",
    context: [
      "En alquiler vacacional cada reserva trae las mismas preguntas: cómo llegar, dónde aparcar, el wifi, a qué hora se puede entrar. Si gestionas varias viviendas, llegan a la vez por Airbnb, Booking y WhatsApp, a menudo de noche.",
      "La IA puede contestar con la información de cada casa, preparar el check-in y avisar a limpieza cuando entra una reserva. Lo que tiene consecuencias, como fianzas, daños, cambios de fechas o excepciones a las normas, lo decides tú.",
    ],
    useCases: [
      {
        title: "Mensajes al huésped en su idioma",
        text: "Confirmación, instrucciones de llegada y respuestas durante la estancia en el idioma del huésped, con la información de cada vivienda. Lo que no está validado te llega a ti.",
        gain: "Menos mensajes que contestar a mano, también de noche",
      },
      {
        title: "Check-in online",
        text: "El huésped rellena sus datos y los de sus acompañantes antes de llegar, y la IA avisa si falta algo. Tú los revisas antes de enviarlos al registro de viajeros.",
        gain: "Llegadas sin papeleo en la puerta",
      },
      {
        title: "Limpiezas coordinadas",
        text: "Cada reserva, cambio o cancelación avisa a quien limpia con la salida, la siguiente entrada y el número de huéspedes. Si hay varias salidas el mismo día, la IA propone el orden.",
        gain: "Menos olvidos y cambios de última hora sin llamadas",
      },
      {
        title: "Guía del huésped que responde",
        text: "Wifi, normas de la casa, piscina, basura o restaurantes cercanos en una guía por vivienda. El huésped pregunta y la IA responde solo con ese contenido.",
        gain: "La misma información correcta para todos los huéspedes",
      },
      {
        title: "Anuncios en varios idiomas",
        text: "A partir de tu texto, la IA prepara la descripción de cada vivienda para Airbnb, Booking o tu web en inglés, alemán o francés. Tú revisas que diga solo lo que la casa tiene.",
        gain: "Anuncios coherentes en todos los canales e idiomas",
      },
    ],
    limits:
      "La IA no acepta cambios de fechas, mascotas, fiestas ni descuentos, no decide sobre fianzas o daños y no resuelve incidencias como averías, accesos o seguridad: las pasa a ti o a tu equipo. Tampoco da por buenos los datos del registro de viajeros sin revisión.",
    data: "El registro de viajeros incluye documentos de identidad, también de menores: se guarda protegido, solo para ese fin y el tiempo necesario. Los códigos de acceso no pasan por la IA. Proveedores que no entrenan con tus datos, en la UE cuando es posible, y aviso de que responde una IA.",
    mallorca:
      "En Baleares la publicidad de una vivienda turística debe mostrar su número de registro, también en los anuncios traducidos, y conviene explicar si el precio incluye el impuesto de turismo sostenible. Muchas villas y fincas están lejos de los núcleos: llegar bien explicado evita mensajes.",
    start:
      "Un agente que responda las preguntas de la estancia con la guía de una o dos viviendas, en inglés y alemán, y te pase lo demás. Cuando funciona, se suma el aviso automático a limpieza. Alcance y precio, por escrito antes de empezar.",
    faq: [
      {
        title: "¿Funciona con Airbnb y Booking?",
        text: "Depende de tu software: muchos channel managers y programas de gestión de viviendas permiten conectar mensajes y reservas. Si no, la IA puede atender por WhatsApp, email y tu web.",
      },
      {
        title: "¿Puede la IA rellenar el registro de viajeros?",
        text: "Puede ayudar a recoger los datos y avisar de los que faltan, pero la comunicación es responsabilidad tuya y la revisa una persona. Consulta con tu gestor cómo y cuándo enviarla.",
      },
      {
        title: "¿Y si un huésped pregunta algo que no está en la guía?",
        text: "El agente no se lo inventa: le dice que lo consulta y te pasa la conversación. Después puedes añadir la respuesta a la guía.",
      },
      {
        title: "¿Me sirve si solo tengo una casa?",
        text: "Sí. Con una vivienda basta un agente que conteste con tu guía y el aviso automático a limpieza. Las gestoras con muchas casas suelen necesitar más integración con su software.",
      },
    ],
    searches: [
      "inteligencia artificial alquiler vacacional",
      "ia para airbnb",
      "mensajes automáticos huéspedes airbnb",
      "chatbot apartamento turístico",
      "automatizar gestión alquiler vacacional",
      "ia alquiler vacacional mallorca",
    ],
    related: ["hoteles", "transporte-y-traslados", "nautica"],
  },
  {
    slug: "restaurantes",
    name: "Restaurantes",
    forWho: "restaurantes",
    niche: "restaurantes",
    title: "IA en restaurantes: reservas, reseñas, compras y turnos",
    description:
      "Inteligencia artificial para restaurantes: reservas por WhatsApp y web, carta en varios idiomas, reseñas, previsión de compras y turnos, sin delegar alérgenos.",
    h1: "IA para restaurantes que libera el teléfono y ordena las compras",
    lead: "Reservas por WhatsApp o web sin cortar el servicio, compras previstas con tus ventas y respuestas a reseñas listas para revisar. Los alérgenos los confirma siempre tu equipo.",
    context: [
      "En un restaurante el teléfono suena en pleno servicio y los WhatsApp de reservas se contestan a deshoras. Además, cada semana se decide qué pedir y quién trabaja con datos repartidos entre el TPV, el programa de reservas y una libreta.",
      "La IA ayuda donde hay texto y repetición: contestar reservas, preparar respuestas a reseñas, resumir ventas para pedir mejor. No sustituye al jefe de cocina ni al encargado: propone, y ellos deciden.",
    ],
    useCases: [
      {
        title: "Reservas por WhatsApp y web",
        text: "Un agente responde en el idioma del cliente, consulta la disponibilidad en tu programa de reservas si permite integrarse y deja la reserva hecha o pendiente de confirmar.",
        gain: "Reservas atendidas sin dejar la sala en pleno servicio",
      },
      {
        title: "Carta y alérgenos sin inventar",
        text: "La IA traduce la carta y responde qué lleva cada plato con la ficha que tú mantienes. Si alguien pregunta por una alergia, no confirma nada: lo pasa a tu equipo.",
        gain: "Carta en varios idiomas y las alergias siempre en manos de una persona",
      },
      {
        title: "Previsión de compras",
        text: "Con las ventas del TPV, las reservas y el calendario, la IA propone cantidades para el pedido de la semana. El jefe de cocina lo ajusta y lo envía.",
        gain: "Pedidos con datos y menos producto que se tira",
      },
      {
        title: "Respuestas a reseñas",
        text: "Cada reseña de Google o TripAdvisor llega con un borrador de respuesta en su idioma que habla de lo que cuenta el cliente. Tú lo apruebas o lo cambias.",
        gain: "Todas las reseñas con respuesta, sin escribir cada una desde cero",
      },
      {
        title: "Borrador de turnos",
        text: "Con las reservas previstas y la disponibilidad del equipo, la IA prepara un borrador de cuadrante. El encargado lo revisa con el convenio y los descansos antes de publicarlo.",
        gain: "Un cuadrante de partida, no una hoja en blanco",
      },
    ],
    limits:
      "La IA no confirma alérgenos ni intolerancias: cualquier duda va al personal, que conoce la receta del día. Tampoco cierra grupos o eventos con precio, no atiende quejas en caliente y no publica turnos sin que el encargado los revise con el convenio y el registro de jornada.",
    data: "Las reservas llevan nombre, teléfono y a veces alergias, que son datos de salud: se guardan solo si hacen falta para el servicio y no se usan para publicidad. Los datos del personal, con acceso restringido. Proveedores que no entrenan con tus datos y aviso de que responde una IA.",
    mallorca:
      "En Mallorca la carta se lee en español, inglés y alemán, y en temporada las reservas llegan desde fuera de la isla y a cualquier hora. En invierno muchos locales cambian de horario o cierran unas semanas: el agente tiene que saberlo para no ofrecer mesa en días cerrados.",
    start:
      "Un agente que conteste reservas y preguntas frecuentes por WhatsApp en dos o tres idiomas, con la carta y los horarios que validas y los alérgenos siempre derivados al equipo. Es fácil de medir y no toca la cocina. Después, reseñas o compras.",
    faq: [
      {
        title: "¿Puede la IA decir si un plato lleva gluten?",
        text: "Puede mostrar la información de alérgenos que mantienes en la ficha, pero no se lo confirma a quien tiene una alergia: eso lo hace tu equipo, que sabe si hoy ha cambiado algo. Informar de los alérgenos es obligatorio y la responsabilidad sigue siendo tuya.",
      },
      {
        title: "¿Se conecta con mi programa de reservas o mi TPV?",
        text: "Si el programa tiene API o permite exportar datos, sí. Lo comprobamos antes de presupuestar; si no se puede, empezamos por WhatsApp y la web.",
      },
      {
        title: "¿Y si el cliente quiere hablar con alguien?",
        text: "El agente avisa desde el principio de que es una IA y pasa la conversación a una persona cuando el cliente lo pide o cuando no sabe responder.",
      },
      {
        title: "¿Sirve para un restaurante pequeño?",
        text: "Sí, si se empieza por lo que más interrumpe, como las reservas por WhatsApp. La previsión de compras tiene más sentido cuando hay un histórico de ventas en el TPV.",
      },
    ],
    searches: [
      "inteligencia artificial para restaurantes",
      "ia para restaurantes",
      "reservas por whatsapp restaurante",
      "chatbot reservas restaurante",
      "responder reseñas restaurante con ia",
      "previsión de compras restaurante",
      "ia restaurantes mallorca",
    ],
    related: ["hoteles", "eventos-y-bodas", "comercio-y-ecommerce"],
  },
  {
    slug: "transporte-y-traslados",
    name: "Transporte y traslados",
    forWho: "traslados, VTC y rent a car",
    niche: "traslados-y-taxis",
    title: "IA para traslados, VTC y rent a car: reservas y vuelos",
    description:
      "IA para traslados al aeropuerto, VTC y rent a car: reservas con número de vuelo, avisos de retraso, asignación de conductores y atención en varios idiomas.",
    h1: "Traslados con el vuelo vigilado y el cliente informado en su idioma",
    lead: "La IA toma la reserva con vuelo, pasajeros y maletas, sigue el estado del vuelo y propone qué conductor o coche asignar. La central decide y atiende las incidencias.",
    context: [
      "En traslados y alquiler de coches cada reserva depende de un vuelo: si se adelanta, se retrasa o cambia de terminal, alguien tiene que avisar al conductor y al cliente. En temporada eso se hace a mano y a todas horas.",
      "La IA es útil para recoger reservas completas, cruzar los vuelos con la planificación y contestar las mismas preguntas en varios idiomas. Asignar el servicio, cambiar un precio o resolver un incidente sigue siendo trabajo de la central.",
    ],
    useCases: [
      {
        title: "Reservas con número de vuelo",
        text: "Por web, WhatsApp o email, el agente pide vuelo, pasajeros, maletas y sillas de niño, y deja la reserva completa en tu programa si permite integrarse.",
        gain: "Reservas que llegan completas, sin ir detrás de los datos",
      },
      {
        title: "Avisos de retraso",
        text: "El estado del vuelo se consulta de forma automática y, si cambia la hora de llegada, el conductor y el cliente reciben la nueva hora de recogida.",
        gain: "Menos esperas en la terminal y menos mensajes de «¿dónde está mi conductor?»",
      },
      {
        title: "Propuesta de asignación",
        text: "Con los servicios del día, las horas de llegada y los vehículos libres, la IA propone qué conductor o coche va a cada servicio. La central lo valida.",
        gain: "Planificación del día más rápida cuando cambian los vuelos",
      },
      {
        title: "Atención en varios idiomas",
        text: "El agente responde en el idioma del cliente sobre punto de encuentro, equipaje, sillas de niño, fianza del coche o seguro incluido, con la información que validas.",
        gain: "Respuesta a cualquier hora a quien reserva desde su país",
      },
      {
        title: "Documentación antes de recoger el coche",
        text: "En rent a car, el cliente sube carné y documento de identidad antes de llegar y la IA avisa si falta algo o no se lee bien. En el mostrador se validan.",
        gain: "Menos cola y menos papeleo en el mostrador de recogida",
      },
    ],
    limits:
      "La IA no cambia un servicio en curso, no fija precios fuera de tu tarifa ni promete esperas que no puedes cumplir. En rent a car no decide cargos por daños ni da por buena una licencia de conducir: lo revisa una persona. Las incidencias en carretera van siempre a la central.",
    data: "Nombres, vuelos, direcciones de recogida y, en rent a car, carné y documento de identidad: se guardan solo el tiempo necesario y con acceso limitado. La ubicación del conductor no se usa más allá del servicio. Proveedores que no entrenan con tus datos y aviso de que responde una IA.",
    mallorca:
      "Entre el aeropuerto de Palma en temporada, los cruceros que llegan al puerto y los traslados a hoteles de toda la isla, los horarios cambian cada día. Muchos clientes reservan desde su país, en inglés o alemán, y escriben cuando la oficina está cerrada.",
    start:
      "Un agente que recoja reservas con número de vuelo en inglés, alemán y español y las deje completas para la central, con avisos de retraso automáticos. Conviene probarlo antes del verano, con alcance y precio por escrito.",
    faq: [
      {
        title: "¿Puede la IA seguir el estado de los vuelos?",
        text: "Sí, consultando de forma automática un servicio de datos de vuelos. Es una ayuda: si el dato no cuadra o el vuelo se desvía, decide la central.",
      },
      {
        title: "¿Se conecta con mi programa de gestión de flota?",
        text: "Si tu programa recibe reservas por API o exporta los servicios, sí. Lo revisamos antes de presupuestar; si no, empezamos por la web, WhatsApp y el email.",
      },
      {
        title: "¿La IA puede dar precios de traslado?",
        text: "Puede dar los precios de tu tarifa por trayecto, tal como los tienes publicados. Los presupuestos de grupos, eventos o rutas especiales los prepara una persona.",
      },
      {
        title: "¿Sirve para un rent a car pequeño?",
        text: "Sí: responder dudas sobre seguro, fianza y recogida en varios idiomas y pedir la documentación antes de llegar ya quita trabajo al mostrador. Las condiciones y los cargos los decide tu equipo.",
      },
    ],
    searches: [
      "ia para empresas de traslados",
      "automatizar reservas transfer aeropuerto",
      "ia para vtc",
      "chatbot rent a car",
      "aviso retraso vuelo traslado",
      "ia rent a car mallorca",
    ],
    related: ["hoteles", "alquiler-vacacional", "eventos-y-bodas"],
  },
  {
    slug: "nautica",
    name: "Náutica",
    forWho: "empresas náuticas",
    niche: "alquiler-de-barcos",
    title: "Inteligencia artificial en náutica: chárter y marinas",
    description:
      "IA para chárter, alquiler de barcos, escuelas de vela y marinas: disponibilidad, dudas de titulación, check-in y documentos, con la seguridad en manos humanas.",
    h1: "IA para náutica: consultas resueltas antes de llegar al pantalán",
    lead: "Disponibilidad, condiciones de cada barco, documentación y previsión en el idioma del cliente. Quién puede patronear y si se sale con el parte del día lo decide una persona.",
    context: [
      "En chárter, alquiler de barcos y escuelas de vela se repiten las preguntas: qué barco está libre, qué titulación hace falta, qué cubre la fianza, qué pasa si hace viento. En una marina, lo mismo con amarres, tarifas y servicios. Todo llega en temporada y en varios idiomas.",
      "La IA puede contestar con tus condiciones, recoger la documentación y ordenar reservas. Lo que afecta a la seguridad en el mar, como si una titulación basta o si se sale con mal tiempo, no se delega: lo decide el responsable de la base.",
    ],
    useCases: [
      {
        title: "Disponibilidad y reservas",
        text: "El agente consulta el calendario de barcos, cursos o amarres si tu programa permite integrarse y propone fechas libres en el idioma del cliente. La reserva la confirmas tú o tu sistema.",
        gain: "Respuestas sobre disponibilidad sin mirar el calendario cada vez",
      },
      {
        title: "Dudas sobre titulación",
        text: "Explica qué pide cada barco según la información que validas y pide al cliente su titulación. No decide si alguien puede patronear: lo revisa una persona con el documento.",
        gain: "Menos sorpresas con la titulación el día de la salida",
      },
      {
        title: "Previsión como información",
        text: "La víspera, el cliente recibe en su idioma la previsión de viento y mar de una fuente meteorológica, con tu política de mal tiempo. Si se sale o no, lo decide el responsable.",
        gain: "Clientes avisados con tiempo y cambios de fecha más sencillos",
      },
      {
        title: "Check-in y documentación",
        text: "Antes de llegar, el cliente sube documento de identidad, titulación y datos de la tripulación, firma el contrato y la IA avisa si falta algo o no se lee bien.",
        gain: "Menos papeleo en el pantalán el día de salida",
      },
      {
        title: "Cursos de vela y amarres",
        text: "Para escuelas de vela, el agente explica niveles, edades y fechas de cursos; para marinas, servicios, tarifas publicadas y cómo pedir amarre. Plazas y precios especiales los confirma tu equipo.",
        gain: "Cursos, amarres y alquiler atendidos en varios idiomas",
      },
    ],
    limits:
      "La IA no decide si una titulación basta, si un cliente puede patronear ni si se sale con el parte del día: lo decide siempre el responsable de la base. Tampoco evalúa daños ni retiene o devuelve fianzas, y ante una emergencia en el mar no sustituye a los canales de salvamento.",
    data: "Documentos de identidad, titulaciones y datos de la tripulación, también de menores en cursos de vela: solo los necesarios, con acceso limitado y borrados cuando ya no hacen falta. Los datos de tarjeta de la fianza no pasan por la IA. Proveedores que no entrenan con tus datos y aviso de IA.",
    mallorca:
      "En Mallorca la náutica vive de la temporada y de clientes que reservan en inglés o alemán desde su país. En Baleares la posidonia está protegida y no se puede fondear sobre ella: el agente puede explicarlo antes de salir, junto con las calas y fondeos que tú recomiendes.",
    start:
      "Un agente que responda dudas sobre barcos, titulación y fianza con tus condiciones, en inglés y alemán, y te pase la reserva con los datos completos, sin tocar decisiones de seguridad. Después, check-in y documentación online.",
    faq: [
      {
        title: "¿La IA puede decir si necesito titulación para un barco?",
        text: "Puede explicar lo que has indicado para cada barco y pedir la titulación al cliente. Quién puede patronear lo revisa una persona; los requisitos vigentes, confírmalos con Capitanía Marítima o tu asociación náutica.",
      },
      {
        title: "¿Puede cancelar una salida por mal tiempo?",
        text: "No. Puede avisar al cliente de la previsión y de tu política de mal tiempo, pero la decisión de salir o no es del responsable de la base.",
      },
      {
        title: "¿Se conecta con mi programa de reservas o de gestión de la marina?",
        text: "Si el programa tiene API o permite exportar datos, sí. Lo revisamos antes de presupuestar; si no, el agente trabaja con la web, WhatsApp y el email.",
      },
      {
        title: "¿Sirve para una escuela de vela con alumnos menores?",
        text: "Sí, con cuidado: los datos de menores se piden a madres, padres o tutores y solo los necesarios. La IA informa de cursos y fechas; plazas, autorizaciones y salud del alumno las gestiona tu equipo.",
      },
    ],
    searches: [
      "ia para empresas náuticas",
      "chatbot alquiler de barcos",
      "automatizar reservas chárter",
      "ia escuela de vela",
      "check-in online alquiler de barcos",
      "ia náutica mallorca",
    ],
    related: ["hoteles", "transporte-y-traslados", "eventos-y-bodas"],
  },
  {
    slug: "eventos-y-bodas",
    name: "Eventos y bodas",
    forWho: "bodas y eventos",
    niche: "bodas-y-wedding-planners",
    title: "Inteligencia artificial para bodas, fincas y catering",
    description:
      "IA para wedding planners, fincas y catering: solicitudes con fecha, invitados y presupuesto, propuestas en el idioma de la pareja y proveedores coordinados.",
    h1: "Bodas y eventos con las solicitudes filtradas y la coordinación al día",
    lead: "La IA ordena cada solicitud, prepara propuestas en el idioma de la pareja y sigue los plazos con los proveedores. Presupuestos y fechas los cierra tu equipo.",
    context: [
      "A un wedding planner, una finca o un catering le llegan solicitudes por la web, Instagram, directorios y email, muchas sin fecha ni número de invitados. Responder a todas rápido y en su idioma cuesta cuando también estás montando la boda del sábado.",
      "La IA ayuda a pedir lo que falta, priorizar, preparar borradores de propuesta y seguir pagos y entregas de cada proveedor. El precio, la disponibilidad de la finca y lo que se promete a la pareja los decide una persona.",
    ],
    useCases: [
      {
        title: "Cualificar solicitudes",
        text: "El agente pide fecha o temporada, invitados, zona, tipo de ceremonia y presupuesto aproximado, y te pasa cada solicitud ordenada, con lo que encaja y lo que no.",
        gain: "Sabes qué bodas encajan antes de la primera videollamada",
      },
      {
        title: "Propuestas en su idioma",
        text: "Con tus servicios, fincas y precios de referencia, la IA prepara un borrador de propuesta en inglés, alemán o español. Tú lo ajustas y lo envías.",
        gain: "Primeras propuestas antes y en el idioma de la pareja",
      },
      {
        title: "Coordinación de proveedores",
        text: "La IA resume para cada proveedor lo que le toca (horarios, comensales, montaje, contacto de la finca) y avisa de lo que falta por confirmar.",
        gain: "Menos datos perdidos entre emails y WhatsApp",
      },
      {
        title: "Seguimiento de la pareja",
        text: "Recordatorios de pagos, pruebas, lista de invitados y decisiones pendientes, en el idioma de la pareja y con tu tono.",
        gain: "Plazos al día sin perseguir a nadie a mano",
      },
      {
        title: "Invitados, menús y mesas",
        text: "Para el catering o la finca, la IA cruza confirmaciones de asistencia, menús elegidos y mesas, y señala lo que no cuadra. Las alergias las revisa siempre cocina.",
        gain: "Recuentos para cocina y sala sin rehacer la hoja",
      },
    ],
    limits:
      "La IA no da presupuestos cerrados, no confirma fechas de fincas ni de proveedores y no promete nada sobre los trámites legales de la boda, que dependen de la nacionalidad de la pareja. Las alergias e intolerancias de los invitados las revisa siempre cocina, nunca la IA sola.",
    data: "Las listas de invitados pueden incluir menores y alergias, que son datos de salud: se piden solo si hacen falta, con acceso limitado y se borran tras el evento. A cada proveedor llega lo justo. Proveedores de IA que no entrenan con tus datos y aviso de que responde una IA.",
    mallorca:
      "Mallorca es destino de boda para parejas de Alemania, Reino Unido y otros países que organizan desde lejos y con mucha antelación. Escriben en su idioma y a cualquier hora, y la temporada de bodas concentra fincas, catering y proveedores en las mismas fechas.",
    start:
      "Un agente que conteste las solicitudes nuevas en inglés, alemán y español, pida fecha, invitados y presupuesto y te las pase ordenadas. Es lo más fácil de medir. Después, propuestas en borrador y seguimiento de proveedores.",
    faq: [
      {
        title: "¿La IA puede dar precios a las parejas?",
        text: "Puede dar los rangos orientativos que tú publiques, dejando claro que no son un presupuesto. El presupuesto cerrado lo prepara una persona con la fecha, la finca y los invitados.",
      },
      {
        title: "¿Escribe bien en alemán o en inglés?",
        text: "Los modelos actuales escriben con soltura en los dos idiomas. Aun así, en propuestas y contratos conviene que lo revise alguien que domine el idioma.",
      },
      {
        title: "¿Se conecta con mi programa de eventos o mi CRM?",
        text: "Si tu programa tiene API o permite importar y exportar datos, sí. Si trabajas con hojas de cálculo, también se puede empezar por ahí.",
      },
      {
        title: "¿Sirve para una finca o un catering, no solo para wedding planners?",
        text: "Sí. A una finca le ayuda a filtrar fechas y aforos; a un catering, a ordenar menús y confirmaciones. La disponibilidad y el precio los sigue confirmando tu equipo.",
      },
    ],
    searches: [
      "ia para wedding planners",
      "inteligencia artificial bodas",
      "automatizar solicitudes de boda",
      "chatbot finca para bodas",
      "ia para catering y eventos",
      "ia bodas mallorca",
    ],
    related: ["restaurantes", "hoteles", "transporte-y-traslados"],
  },
  {
    slug: "comercio-y-ecommerce",
    name: "Comercio y ecommerce",
    forWho: "tiendas y ecommerce",
    niche: "tiendas-y-comercio-local",
    title: "IA para tiendas y ecommerce: fichas, pedidos y postventa",
    description:
      "IA para tiendas físicas y online: fichas de producto y traducciones, postventa, stock y pedidos, recomendaciones y carritos recuperados, con revisión humana.",
    h1: "Tu tienda, con fichas al día, pedidos claros y postventa ordenada",
    lead: "Fichas y traducciones a partir de tus datos, respuestas sobre pedidos y devoluciones, avisos de stock y carritos recuperados. Reembolsos especiales y reclamaciones, en manos de tu equipo.",
    context: [
      "En una tienda con venta online, el tiempo se va en escribir fichas, traducirlas, contestar «¿dónde está mi pedido?» y cuadrar el stock entre el mostrador y la web. Son tareas de texto y datos que se repiten cada día.",
      "La IA puede hacer el primer borrador de cada ficha, responder con el estado real del pedido si tu plataforma permite integrarse y avisar cuando algo se agota. Lo que compromete a la tienda, como reembolsos fuera de política o reclamaciones, lo decide una persona.",
    ],
    useCases: [
      {
        title: "Fichas de producto y traducciones",
        text: "A partir de tus datos (medidas, materiales, composición, tallas), la IA redacta la ficha y la traduce. Alguien revisa que no atribuya al producto nada que no tenga.",
        gain: "Catálogo completo en varios idiomas sin escribir cada ficha desde cero",
      },
      {
        title: "Atención postventa",
        text: "El agente responde sobre envíos, cambios y devoluciones con tu política y el estado real del pedido, si tu tienda online permite integrarse. Las excepciones pasan a tu equipo.",
        gain: "Menos correos de «¿dónde está mi pedido?»",
      },
      {
        title: "Stock y pedidos",
        text: "Si tu TPV y tu tienda online exportan datos, la IA cruza las ventas de ambos, avisa de lo que se agota y propone qué reponer. El pedido al proveedor lo aprueba una persona.",
        gain: "Menos ventas perdidas por productos agotados",
      },
      {
        title: "Recomendaciones con reglas",
        text: "Sugerencias de productos relacionados según lo que el cliente mira o ha comprado, con reglas que pones tú: sin forzar ofertas ni recomendar lo que no tienes en stock.",
        gain: "Recomendaciones con sentido, no al azar",
      },
      {
        title: "Recuperación de carritos",
        text: "Quien deja un carrito a medias y ha aceptado recibir comunicaciones recibe un recordatorio con su pedido y respuestas a las dudas típicas: envío, tallas, devoluciones.",
        gain: "Ventas que no se pierden por una duda sin resolver",
      },
    ],
    limits:
      "La IA no aprueba reembolsos fuera de tu política, no resuelve garantías ni reclamaciones y no cambia precios ni inventa descuentos. Las fichas de cosmética, alimentación o productos infantiles las revisa siempre una persona: lo que se dice del producto es responsabilidad de la tienda.",
    data: "Pedidos, direcciones e historial de compra: la IA usa solo lo necesario y los datos de pago no pasan por ella. Recomendaciones y recordatorios de carrito, con consentimiento y baja sencilla. Proveedores que no entrenan con tus datos, en la UE cuando es posible, y aviso de IA.",
    mallorca:
      "Una tienda de Mallorca vende al vecino todo el año y al turista en temporada, a menudo en inglés o alemán. Si envías fuera, el agente tiene que explicar bien los plazos y costes de enviar desde una isla, y en las fichas de productos de aquí, respetar sus nombres.",
    start:
      "Un agente de postventa que conteste dónde está el pedido, cómo cambiar una talla o cómo devolver, con tu política y el estado real del pedido. Se mide fácil con los correos que ya recibes. Después, fichas y traducciones.",
    faq: [
      {
        title: "¿Las fichas escritas con IA penalizan en Google?",
        text: "Google valora que el contenido sea útil, no cómo se ha escrito. Una ficha con datos reales del producto y revisada por una persona sirve; cientos de fichas genéricas, no.",
      },
      {
        title: "¿Funciona con Shopify, WooCommerce o PrestaShop?",
        text: "Muchas plataformas de tienda online permiten integrarse por API; lo comprobamos con la tuya antes de presupuestar. Si la tienda física usa otro programa, vemos si exporta stock y ventas.",
      },
      {
        title: "¿Puede la IA aprobar una devolución?",
        text: "Puede explicar tu política y el derecho de desistimiento de las compras online, y recoger la solicitud con fotos y número de pedido. Lo que se sale de lo habitual lo aprueba una persona; las excepciones legales, consúltalas con tu asesor.",
      },
      {
        title: "¿Sirve si solo tengo tienda física?",
        text: "Sí: un agente que conteste el horario, si tienes un producto y si se puede reservar para recoger ya ayuda. Solo da como disponible lo que está en tu sistema.",
      },
    ],
    searches: [
      "inteligencia artificial para ecommerce",
      "ia para tiendas online",
      "fichas de producto con ia",
      "chatbot tienda online",
      "recuperar carritos abandonados",
      "ia para comercio local",
      "ia ecommerce mallorca",
    ],
    related: ["restaurantes", "hoteles", "asesorias"],
  },
  {
    slug: "ayuntamientos",
    name: "Ayuntamientos",
    forWho: "ayuntamientos",
    title: "IA en ayuntamientos: información al ciudadano y registros",
    description:
      "IA para la administración local, con prudencia: información sobre trámites a cualquier hora, registros clasificados, resúmenes e idiomas, con ENS y supervisión.",
    h1: "IA municipal para informar y ordenar, sin resolver expedientes",
    lead: "Información sobre trámites a cualquier hora, solicitudes clasificadas para cada área y documentos resumidos para el personal. Decide siempre una persona, con el ENS y la transparencia presentes.",
    context: [
      "En un ayuntamiento, atención ciudadana responde cada día las mismas preguntas: qué documentos lleva un trámite, cómo pedir cita, dónde se paga una tasa. Y el registro recibe solicitudes que alguien tiene que leer y enviar al área que toca.",
      "La IA puede informar con contenido municipal ya publicado, proponer a qué área va cada entrada y resumir documentos largos. Resolver, valorar o denegar no le corresponde: los expedientes los tramita el personal, y algunos usos públicos de la IA se consideran de alto riesgo.",
    ],
    useCases: [
      {
        title: "Información sobre trámites a cualquier hora",
        text: "Un asistente explica qué pide cada trámite, los plazos publicados y cómo pedir cita, con la información de la sede electrónica. No consulta ni resuelve expedientes.",
        gain: "Menos consultas repetidas en atención ciudadana y respuesta fuera de horario",
      },
      {
        title: "Clasificación del registro",
        text: "La IA lee cada solicitud que entra por registro y propone el área y el tipo de trámite. Una persona lo confirma antes de asignarla.",
        gain: "Entradas que llegan antes al área que toca",
      },
      {
        title: "Resúmenes de documentos",
        text: "Informes, pliegos o alegaciones largas resumidos para el personal, con referencia a la página de origen. El resumen ayuda a leer; no sustituye la lectura del técnico.",
        gain: "Menos tiempo buscando lo importante en documentos largos",
      },
      {
        title: "Idiomas y accesibilidad",
        text: "Información en catalán y castellano, en inglés o alemán para residentes extranjeros, y borradores en lenguaje claro que revisa una persona antes de publicarlos.",
        gain: "Información municipal al alcance de más vecinos",
      },
      {
        title: "Asistente interno para el personal",
        text: "El personal pregunta por ordenanzas, procedimientos o instrucciones internas y obtiene la respuesta con el documento de origen, respetando quién puede ver qué.",
        gain: "Menos tiempo buscando en ordenanzas e instrucciones",
      },
    ],
    limits:
      "La IA no resuelve expedientes, no decide ayudas, sanciones ni licencias y no valora a personas: según el Reglamento europeo de IA, algunos de esos usos son de alto riesgo. Informa, clasifica y resume; cada decisión la toma y la firma el personal competente.",
    data: "Datos de vecinos, a veces de menores o de salud en servicios sociales: lo mínimo y con acceso restringido. El sistema y sus proveedores deben cumplir el Esquema Nacional de Seguridad, mejor con datos en la UE, y el ciudadano sabe que habla con una IA. Revísalo con tu DPD y secretaría.",
    mallorca:
      "En Baleares la información municipal va en catalán y castellano, y en muchos municipios viven residentes extranjeros que preguntan en inglés o alemán. En temporada crecen la población y las consultas. COMA ha trabajado en comunicación con el Ajuntament de Calvià y el Ajuntament d'Andratx.",
    start:
      "Un asistente que informe sobre unos pocos trámites frecuentes con contenido ya publicado, sin datos personales y con paso a atención ciudadana. Antes, un diagnóstico con secretaría, informática y el DPD; la contratación, por el procedimiento que corresponda.",
    faq: [
      {
        title: "¿Puede un ayuntamiento usar un chatbot con IA?",
        text: "Sí, para informar, siempre que avise de que es una IA, use información validada y no resuelva trámites. Por transparencia, conviene explicar en la web qué hace y con qué información responde.",
      },
      {
        title: "¿Qué implica el Esquema Nacional de Seguridad?",
        text: "Que los sistemas que tratan información municipal, también los de proveedores externos, cumplan las medidas que fija el ENS según su categoría. Antes de elegir un servicio de IA, compruébalo con tu responsable de seguridad.",
      },
      {
        title: "¿Cómo se contrata un proyecto así?",
        text: "Por el procedimiento de contratación pública que corresponda según el importe y el objeto, que decide el ayuntamiento. Podemos empezar por un diagnóstico acotado con alcance y precio por escrito.",
      },
      {
        title: "¿La IA puede tramitar o resolver solicitudes?",
        text: "No en lo que proponemos: puede informar, clasificar y resumir, pero tramitar y resolver es del personal competente. Algunos usos públicos de la IA son de alto riesgo según el Reglamento europeo de IA.",
      },
    ],
    searches: [
      "inteligencia artificial en ayuntamientos",
      "ia administración local",
      "chatbot ayuntamiento",
      "ia atención al ciudadano",
      "asistente virtual ayuntamiento",
      "ia ayuntamientos mallorca",
    ],
    related: ["residencias", "abogados", "comercio-y-ecommerce"],
  },
];
