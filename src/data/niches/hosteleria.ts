import { basePlan } from "../pricing";
import type { Niche } from "./types";

/** Hostelería, turismo y eventos. Reglas de redacción en ./types.ts. */
export const hosteleria: Niche[] = [
  {
    slug: "restaurantes",
    name: "Restaurantes",
    group: "hosteleria",
    forWho: "restaurantes",
    title: `Página web para restaurantes desde ${basePlan.price} €`,
    description: `Web para restaurantes con carta y alérgenos, reservas online e idiomas, desde ${basePlan.price} € + IVA. Reservas directas, sin comisiones por cubierto.`,
    h1: "Webs para restaurantes que llenan mesas sin pagar comisión",
    lead: "Carta clara, reservas directas y la información que Google y la IA necesitan para recomendarte cuando alguien pregunta dónde comer.",
    context: [
      "Un cliente decide dónde comer en un par de minutos y desde el móvil: mira fotos, carta, precio y si puede reservar. Si tu web no carga o la carta es un PDF ilegible, se va al siguiente de la lista.",
      "Las plataformas de reservas cobran por cubierto y se quedan con el contacto del cliente. Una web propia con reservas te deja el dato a ti y te permite volver a llamarle con una novedad o un menú de temporada.",
    ],
    mallorca:
      "En Mallorca la carta se lee en español, inglés y alemán, y en temporada alta la mitad de las reservas llegan de gente que aún no ha pisado la isla. Fuera de temporada, el cliente local es el que sostiene el negocio.",
    web: [
      {
        title: "Carta en HTML, no en PDF",
        text: "Platos, precios y alérgenos en texto real: se lee bien en el móvil, Google la indexa y la cambias sin rehacer un archivo.",
      },
      {
        title: "Reservas directas",
        text: "El cliente elige día, hora y comensales, y te llega aviso por email. Sin comisión por cubierto.",
      },
      {
        title: "Varios idiomas",
        text: "La carta y la información práctica en los idiomas de quien te visita, cada uno con su propia dirección para Google.",
      },
      {
        title: "Datos que la IA entiende",
        text: "Horario, tipo de cocina, rango de precio y ubicación marcados con datos estructurados de restaurante.",
      },
    ],
    automations: [
      {
        title: "Confirmación y recordatorio de reserva",
        text: "Email o WhatsApp automático el día antes: menos mesas vacías por olvidos.",
      },
      {
        title: "Petición de reseña tras la visita",
        text: "Un mensaje amable al día siguiente con el enlace a tu ficha de Google, a todos los clientes por igual.",
      },
      {
        title: "Base de clientes propia",
        text: "Cada reserva alimenta una lista para avisar de menús, eventos o la reapertura de temporada.",
      },
    ],
    agent:
      "Un agente de IA responde en el idioma del cliente a las preguntas de siempre (horario, terraza, opciones veganas, aparcamiento) y gestiona la petición de reserva. No confirma alérgenos por su cuenta: eso lo deriva siempre a tu equipo.",
    pack: [{ id: "reservas" }, { id: "idiomas", qty: 2 }],
    packNote:
      "Web con reservas y dos idiomas más: lo mínimo para captar al cliente local y al turista.",
    faq: [
      {
        title: "¿Tengo que publicar los alérgenos en la web?",
        text: "La normativa europea (Reglamento UE 1169/2011) obliga a informar de los 14 alérgenos principales al cliente. Si tu carta está en la web, lo más claro es indicarlos junto a cada plato; te lo dejamos preparado para que lo mantengas al día.",
      },
      {
        title: "¿Puedo seguir usando mi plataforma de reservas?",
        text: "Sí. Podemos enlazarla o integrarla. Muchos restaurantes combinan: la plataforma para captar y la web propia para que el cliente que ya te conoce reserve directo.",
      },
      {
        title: "¿Puedo cambiar la carta yo mismo?",
        text: "Podemos dejar la carta preparada para que cambies tú lo básico, o nos la mandas y la cambiamos nosotros. Lo decidimos al empezar.",
      },
      {
        title: "¿Sirve para un bar o una cafetería pequeña?",
        text: "Sí. Con la Web Esencial tienes carta, horario, ubicación y contacto. Las reservas y los idiomas se añaden solo si te hacen falta.",
      },
    ],
    searches: [
      "página web para restaurantes",
      "diseño web restaurante",
      "web restaurante con reservas",
      "carta online restaurante",
      "reservas online sin comisión restaurante",
      "web restaurante Mallorca",
    ],
    related: ["bares-y-cafeterias", "catering", "beach-clubs"],
  },
  {
    slug: "bares-y-cafeterias",
    name: "Bares y cafeterías",
    group: "hosteleria",
    forWho: "bares y cafeterías",
    title: `Web para bares y cafeterías desde ${basePlan.price} €`,
    description: `Web para bares, cafeterías y brunch con horario al día, carta corta, desayunos y ficha de Maps enlazada, desde ${basePlan.price} € + IVA. Que te encuentren al pasar.`,
    h1: "Tu bar o cafetería, a la vista cuando alguien busca dónde desayunar",
    lead: "Horario real, carta corta y fotos que abren el apetito: lo que mira quien busca un café o un brunch cerca antes de entrar.",
    context: [
      "Al bar no se suele reservar: se busca «cafetería cerca» en el móvil, se mira el horario y las fotos en Maps y se decide en la acera. Si el horario está mal o la ficha no lleva a ninguna web, el cliente entra en el de al lado.",
      "Una web sencilla reúne en un sitio el horario, los desayunos, el menú del día y si aceptas grupos. Google la contrasta con tu ficha de Maps y la IA puede usarla cuando alguien pregunta dónde tomar un brunch.",
    ],
    mallorca:
      "En Mallorca el bar de pueblo y la cafetería de barrio viven del cliente de cada día, y en verano se suma el turista que busca desayuno en inglés o alemán. Si cambias de horario entre temporada e invierno, la web y Maps tienen que decir lo mismo.",
    web: [
      {
        title: "Horario siempre al día",
        text: "Horario de invierno, de verano y festivos en la web y en tu ficha de Google, para que nadie encuentre la persiana bajada.",
      },
      {
        title: "Carta corta en texto",
        text: "Desayunos, bocadillos, tapas y bebidas en una sola pantalla del móvil, con precios y alérgenos.",
      },
      {
        title: "Fotos que cargan rápido",
        text: "El local, la barra y los platos en imágenes optimizadas para el móvil, sin esperas aunque vayas justo de datos.",
      },
      {
        title: "Cómo llegar y terraza",
        text: "Mapa, aparcamiento cercano, si tienes terraza o admites perros: lo que se pregunta antes de ir.",
      },
    ],
    automations: [
      {
        title: "Horario sincronizado con Google",
        text: "Un cambio de horario o un cierre por vacaciones se publica a la vez en la web y en tu ficha de Google.",
      },
      {
        title: "Menú del día publicado solo",
        text: "Rellenas el menú en una hoja o un formulario y aparece en la web y en tus redes sin tocar nada más.",
      },
      {
        title: "Encargos y grupos ordenados",
        text: "Cumpleaños, desayunos de empresa o tartas por encargo llegan con fecha, hora y número de personas.",
      },
    ],
    agent:
      "Un agente de IA contesta en la web si estás abierto, si tienes leche vegetal o desayunos para llevar y si se puede ir en grupo. No promete mesa ni confirma alérgenos: eso lo pasa a quien esté en la barra.",
    pack: [{ id: "seo" }, { id: "idiomas", qty: 1 }],
    packNote:
      "SEO local para salir en Maps cuando buscan un café cerca y un idioma más para el cliente de paso.",
    faq: [
      {
        title: "¿Me hace falta web si ya tengo Instagram y ficha en Google?",
        text: "Las redes enseñan el ambiente, pero no siempre el horario ni la carta en texto. La web es lo que enlazas desde tu ficha y donde Google y la IA encuentran esos datos ordenados.",
      },
      {
        title: "¿Puedo cambiar el menú del día cada mañana?",
        text: "Podemos dejarlo preparado para que lo cambies tú desde el móvil, o conectarlo a una hoja o un formulario para que se publique solo.",
      },
      {
        title: "¿La web me ayuda a salir en Google Maps?",
        text: "Ayuda: Google contrasta tu ficha con tu web, y si horario, dirección y teléfono coinciden, la información es más fiable. El SEO local trabaja además la ficha y las reseñas, sin garantizar puesto.",
      },
      {
        title: "¿Cómo pongo la carta en inglés sin liar los nombres?",
        text: "Con el extra de idiomas la carta va traducida, y los platos de aquí como «pa amb oli» o «ensaïmada» se dejan con su nombre y una explicación corta.",
      },
    ],
    searches: [
      "página web para bar",
      "web para cafetería",
      "diseño web cafetería brunch",
      "web bar con carta online",
      "página web barata para bar",
      "carta digital cafetería",
      "web cafetería Mallorca",
    ],
    related: ["restaurantes", "beach-clubs", "tiendas-y-comercio-local"],
  },
  {
    slug: "beach-clubs",
    name: "Beach clubs y chiringuitos",
    group: "hosteleria",
    forWho: "beach clubs y chiringuitos",
    title: `Página web para beach clubs y chiringuitos desde ${basePlan.price} €`,
    description: `Web para beach clubs y chiringuitos con reserva de hamacas, camas balinesas y mesas, agenda de eventos y varios idiomas, desde ${basePlan.price} € + IVA.`,
    h1: "Beach clubs con la cama balinesa reservada antes de pisar la arena",
    lead: "Hamacas, camas y mesas reservadas y pagadas por adelantado, el calendario de eventos al día y todo en el idioma del cliente.",
    context: [
      "En un beach club el día se vende por la mañana o la noche anterior: el cliente quiere saber si quedan camas, cuál es el consumo mínimo y si hay DJ. Si eso solo se resuelve por mensaje, alguien del equipo se pasa el día contestando lo mismo.",
      "Con reserva y pago por adelantado en la web, la cama no se queda vacía por un plantón y el cliente llega con todo cerrado. Las fiestas y sesiones de DJ se venden igual, con preventa y aforo.",
    ],
    mallorca:
      "La temporada en Mallorca es corta e intensa, y lo que no se vende de mayo a octubre no se recupera. El cliente llega de Reino Unido, Alemania o el norte de Europa, reserva desde el móvil y espera hacerlo en su idioma. En invierno, la web puede vender eventos privados.",
    web: [
      {
        title: "Reserva por zonas",
        text: "Primera línea, camas balinesas o mesa del restaurante, con precio y disponibilidad para cada día.",
      },
      {
        title: "Pago o señal al reservar",
        text: "Pago completo o depósito con tarjeta, con las condiciones de cancelación por mal tiempo a la vista.",
      },
      {
        title: "Agenda de eventos y DJ",
        text: "Sesiones, fiestas y cenas especiales con su fecha, cartel y venta anticipada de entradas.",
      },
      {
        title: "Carta y consumos mínimos",
        text: "Comida, cócteles, mínimo por cama y paquetes de botella explicados sin letra pequeña.",
      },
    ],
    automations: [
      {
        title: "Aviso por mal tiempo",
        text: "Si marcas el día como cerrado por viento o lluvia, quien tiene reserva recibe el aviso con las opciones de cambio o devolución.",
      },
      {
        title: "Confirmación con hora límite",
        text: "La reserva confirmada indica hasta qué hora se guarda la cama, cómo llegar y dónde aparcar.",
      },
      {
        title: "Preventa para la próxima temporada",
        text: "Quien reservó este verano recibe en primavera la fecha de apertura y las entradas de los primeros eventos.",
      },
    ],
    agent:
      "Un agente de IA responde en inglés, alemán o español si quedan camas, cuál es el consumo mínimo y si se puede ir con niños, y lleva al cliente a la reserva. No hace excepciones de precio ni gestiona reclamaciones: eso pasa al encargado.",
    pack: [{ id: "reservas" }, { id: "idiomas", qty: 2 }],
    packNote:
      "Reservas de hamacas y mesas con dos idiomas más: el cliente extranjero reserva y paga solo, en su idioma.",
    faq: [
      {
        title: "¿Puedo cobrar la cama balinesa por adelantado?",
        text: "Sí. La reserva puede pedir el pago completo o una señal con tarjeta, y tú decides la política de cancelación y qué pasa si el día sale de viento.",
      },
      {
        title: "¿Puedo vender entradas para una fiesta o una sesión de DJ?",
        text: "Sí, como un producto con fecha y aforo limitado. Si organizas muchos eventos, la tienda online los ordena mejor.",
      },
      {
        title: "¿Y si ya uso una app de reservas de hamacas?",
        text: "Normalmente se puede enlazar o insertar en la web. Lo importante es que el cliente reserve desde tu dominio y que su contacto quede también en tu lista.",
      },
      {
        title: "¿La web sirve fuera de temporada?",
        text: "Sí. En invierno la portada puede pasar a eventos privados, cenas de empresa o la fecha de reapertura sin rehacer la web.",
      },
    ],
    searches: [
      "página web beach club",
      "web para chiringuito",
      "reserva de hamacas online",
      "reserva camas balinesas web",
      "web beach club con reservas",
      "venta de entradas eventos beach club",
      "beach club Mallorca web",
    ],
    related: ["restaurantes", "fincas-para-eventos", "excursiones-y-actividades"],
  },
  {
    slug: "catering",
    name: "Catering",
    group: "hosteleria",
    forWho: "empresas de catering",
    title: `Diseño web para empresas de catering desde ${basePlan.price} €`,
    description: `Página web para catering de bodas, empresas y eventos privados: menús, alérgenos y presupuesto por número de invitados, desde ${basePlan.price} € + IVA.`,
    h1: "Webs para catering que reciben presupuestos con los datos completos",
    lead: "Menús, alérgenos y un formulario que pregunta fecha, lugar e invitados antes de que tengas que hacerlo tú.",
    context: [
      "En catering cada contacto es un presupuesto distinto: no es lo mismo un desayuno de trabajo en una oficina que una boda en una finca sin cocina. Si la petición llega como «¿cuánto cuesta un catering?», empieza una ronda de correos.",
      "Una web con menús de ejemplo, precios orientativos y un formulario por tipo de evento filtra desde el principio. Te llegan la fecha, el lugar, los invitados y las necesidades especiales, y contestas con un presupuesto de verdad.",
    ],
    mallorca:
      "En Mallorca muchas bodas y eventos se celebran en fincas y villas sin cocina profesional, a menudo con clientes que lo organizan desde fuera. Que la web explique en inglés qué montas tú (cocina de campaña, personal, menaje) ahorra muchas idas y vueltas.",
    web: [
      {
        title: "Menús por tipo de evento",
        text: "Boda, empresa, comunión o cena privada, cada uno con sus opciones y lo que incluye el servicio.",
      },
      {
        title: "Alérgenos en cada plato",
        text: "Los 14 alérgenos marcados en los menús de ejemplo y un campo para las intolerancias de los invitados.",
      },
      {
        title: "Formulario por invitados",
        text: "Fecha, lugar, número de invitados, tipo de servicio y presupuesto aproximado antes del primer contacto.",
      },
      {
        title: "Galería de montajes",
        text: "Mesas, estaciones de comida y servicios en exterior, con fotos optimizadas que cargan rápido.",
      },
    ],
    automations: [
      {
        title: "Borrador de presupuesto",
        text: "Con los datos del formulario se prepara un borrador con el menú elegido y el número de invitados para que lo revises.",
      },
      {
        title: "Recogida de dietas especiales",
        text: "Antes del evento, el cliente recibe un formulario para listar alergias e intolerancias de sus invitados.",
      },
      {
        title: "Seguimiento de presupuestos",
        text: "Si un presupuesto no tiene respuesta, sale un recordatorio y queda marcado en tu lista.",
      },
    ],
    agent:
      "Un agente de IA explica tus menús, qué incluye cada servicio y qué datos necesitas, y recoge la petición de presupuesto. No da precios cerrados ni asegura que un plato sea apto para una alergia: eso lo confirma tu cocina.",
    pack: [{ id: "idiomas", qty: 1 }, { id: "contenido" }],
    packNote:
      "Un idioma más para quien organiza desde fuera, y fotos y textos propios de tus montajes.",
    faq: [
      {
        title: "¿Tengo que indicar los alérgenos en los menús de la web?",
        text: "Hay que informar de los 14 alérgenos principales (Reglamento UE 1169/2011). En la web, lo práctico es marcarlos en los menús de ejemplo y pedir en el formulario las alergias de los invitados.",
      },
      {
        title: "¿Puedo publicar precios orientativos sin comprometerme?",
        text: "Sí. Puedes indicar un «desde» por persona y tipo de menú, y dejar claro que el precio final depende de la fecha, el lugar y el servicio.",
      },
      {
        title: "¿El formulario puede cambiar si es boda o empresa?",
        text: "Sí. Para empresas pide horario y datos de facturación; para bodas, finca, tipo de ceremonia e invitados adultos y niños.",
      },
      {
        title: "¿Las peticiones pueden ir a mi hoja de cálculo o CRM?",
        text: "Sí. Cada petición puede llegar a una hoja de Google, a tu CRM o a tu correo con un formato fijo, sin copiar datos a mano.",
      },
    ],
    searches: [
      "página web para catering",
      "diseño web empresa de catering",
      "web catering bodas",
      "web catering para empresas",
      "formulario presupuesto catering",
      "web catering Mallorca",
    ],
    related: ["restaurantes", "bodas-y-wedding-planners", "fincas-para-eventos"],
  },
  {
    slug: "hoteles",
    name: "Hoteles",
    group: "turismo",
    forWho: "hoteles",
    title: "Webs para hoteles pequeños con reserva directa",
    description: `Diseño web para hoteles pequeños e independientes: motor de reservas, channel manager e idiomas para depender menos de las OTA. Desde ${basePlan.price} € + IVA.`,
    h1: "Webs para hoteles independientes que quieren más reserva directa",
    lead: "Una web rápida, en los idiomas de tus huéspedes, con tu motor de reservas dentro y motivos claros para reservar contigo y no en la OTA.",
    context: [
      "Muchos hoteles pequeños reciben buena parte de sus reservas por Booking o Expedia, y cada una paga comisión. Hay huéspedes que te descubren allí y luego buscan tu nombre en Google: si tu web es lenta o no deja reservar, vuelven a la OTA.",
      "La web propia es el canal sin comisión donde el cliente es tuyo. Con el motor de reservas conectado al channel manager, la disponibilidad es la misma en todos los canales y evitas vender dos veces la misma habitación.",
    ],
    mallorca:
      "En Mallorca muchos huéspedes llegan de Alemania, Reino Unido y el resto de Europa. Un hotel con web en alemán e inglés, que explica bien la zona, la playa o la Serra de Tramuntana y si abre en invierno, tiene argumentos propios frente a las grandes cadenas.",
    web: [
      {
        title: "Motor de reservas integrado",
        text: "El de tu channel manager dentro de tu web y con tu diseño, o un sistema de reservas propio si aún no tienes.",
      },
      {
        title: "Ventajas de reservar directo",
        text: "Desayuno, parking o salida tardía solo para quien reserva en la web, explicados donde el huésped los ve.",
      },
      {
        title: "Una página por habitación",
        text: "Fotos optimizadas, metros, camas, vistas y equipamiento de cada tipo de habitación.",
      },
      {
        title: "Datos de hotel para Google y la IA",
        text: "Categoría, servicios, ubicación y horas de entrada y salida marcados con datos estructurados de hotel.",
      },
    ],
    automations: [
      {
        title: "Correo antes de la llegada",
        text: "Unos días antes, el huésped recibe cómo llegar, la hora de entrada y los servicios que puede añadir.",
      },
      {
        title: "Reseña tras la salida",
        text: "Al día siguiente, un mensaje con el enlace a Google o TripAdvisor para quien quiera dejar su opinión.",
      },
      {
        title: "Lista de huéspedes directos",
        text: "Quien reservó en tu web recibe antes que nadie las ofertas de temporada o la fecha de reapertura.",
      },
    ],
    agent:
      "Un agente de IA atiende en el idioma del huésped preguntas sobre habitaciones, parking, mascotas o traslados, y le lleva al motor de reservas. No modifica reservas ni cobra: los cambios y las peticiones especiales pasan a recepción.",
    pack: [{ id: "idiomas", qty: 2 }, { id: "reservas" }, { id: "seo" }],
    packNote:
      "Inglés y alemán, reservas en tu web y SEO local para que quien busca tu nombre acabe reservando contigo.",
    faq: [
      {
        title: "¿Puedo integrar el motor de reservas de mi channel manager?",
        text: "Sí. Muchos channel managers incluyen un motor que se inserta en la web; lo adaptamos a tu diseño para que el paso a la reserva no parezca otra página.",
      },
      {
        title: "¿Puedo ofrecer en mi web un precio mejor que en Booking?",
        text: "Revisa antes las condiciones de tu contrato con cada plataforma. Muchos hoteles prefieren dar ventajas en directo (desayuno, parking, salida tardía) en vez de bajar la tarifa.",
      },
      {
        title: "¿Tengo que explicar el impuesto turístico en el precio?",
        text: "En Baleares el huésped paga el impuesto de turismo sostenible por cada noche. Indica en la web si tus precios lo incluyen o se cobra aparte; tu asesor te confirmará cómo presentarlo.",
      },
      {
        title: "¿Puedo tener la web en alemán aunque yo no lo hable?",
        text: "Sí. Con el extra de idiomas cada página tiene su versión en alemán, y el agente de IA puede atender en ese idioma las preguntas habituales.",
      },
    ],
    searches: [
      "página web para hotel",
      "diseño web hotel boutique",
      "web hotel con motor de reservas",
      "aumentar reservas directas hotel",
      "web para hotel pequeño precio",
      "reducir comisiones booking hotel",
      "diseño web hotel Mallorca",
    ],
    related: ["agroturismos", "alquiler-vacacional", "traslados-y-taxis"],
  },
  {
    slug: "agroturismos",
    name: "Agroturismos y hoteles rurales",
    group: "turismo",
    forWho: "agroturismos y hoteles rurales",
    title: `Web para agroturismos y hoteles rurales desde ${basePlan.price} €`,
    description: `Página web para agroturismos y hoteles rurales: la finca, lo que se vive en ella y la reserva directa en inglés y alemán, desde ${basePlan.price} € + IVA.`,
    h1: "Webs para agroturismos que enseñan la finca y venden la estancia",
    lead: "Fotos de la finca, lo que se cultiva o se cocina allí y una reserva directa sin intermediarios, en el idioma de quien busca calma.",
    context: [
      "Un agroturismo no compite por precio con el hotel de playa: vende una finca, un paisaje y una cocina con producto propio. Eso no cabe en la ficha de una OTA, que iguala todos los alojamientos en una lista de fotos y puntuaciones.",
      "Tu web es el sitio para contarlo: la historia de la casa, las actividades, la distancia real a pueblos y calas, y si el desayuno sale del huerto. Quien llega desde ahí ya sabe a qué viene y reserva directo.",
    ],
    mallorca:
      "En Baleares el agroturismo es una figura turística propia, vinculada a una finca rústica con actividad agraria y distinta del hotel rural. Explicarlo en inglés y alemán ayuda al huésped extranjero a saber qué va a encontrar. La temporada se alarga con senderistas y ciclistas.",
    web: [
      {
        title: "La finca en imágenes",
        text: "Casa, habitaciones, campo y piscina en una galería optimizada que carga aunque el móvil vaya justo de cobertura.",
      },
      {
        title: "Producto y actividades propias",
        text: "Aceite, huerto, animales o rutas desde la finca: lo que te hace distinto, explicado con detalle.",
      },
      {
        title: "Reserva directa",
        text: "Disponibilidad y reserva en tu web, conectada a tu channel manager si también vendes en plataformas.",
      },
      {
        title: "Cómo llegar de verdad",
        text: "Indicaciones para el camino rural, mapa y distancia a pueblos, calas y aeropuerto, porque el GPS no siempre acierta.",
      },
    ],
    automations: [
      {
        title: "Bienvenida antes de llegar",
        text: "Indicaciones del camino, hora de entrada y opción de reservar cena o actividades con antelación.",
      },
      {
        title: "Producto de la finca después",
        text: "Tras la estancia, un correo con el aceite o las mermeladas de la casa para pedirlos desde su país.",
      },
      {
        title: "Volver en otra estación",
        text: "Petición de reseña al irse y, meses después, una propuesta para volver en otra época del año.",
      },
    ],
    agent:
      "Un agente de IA responde en inglés, alemán o español sobre habitaciones, niños, mascotas, cenas y cómo llegar, y lleva a la reserva. No confirma disponibilidad fuera del sistema ni hace descuentos: eso lo decides tú.",
    pack: [{ id: "idiomas", qty: 2 }, { id: "reservas" }, { id: "contenido" }],
    packNote:
      "Inglés y alemán, reserva directa y textos y fotos propios para que la finca se vea como es.",
    faq: [
      {
        title: "¿Puedo seguir en Booking y Airbnb y tener reserva directa?",
        text: "Sí. Con un channel manager la disponibilidad se sincroniza entre las plataformas y la web, para no vender la misma habitación dos veces.",
      },
      {
        title: "¿Puedo vender el aceite o el vino de la finca en la web?",
        text: "Sí, con una tienda online. Si vendes vino u otras bebidas alcohólicas, tienes que verificar que el comprador es mayor de edad.",
      },
      {
        title: "¿Cómo explico que es un agroturismo y no un hotel?",
        text: "Con una página sobre la finca y su actividad: qué se cultiva, qué se produce y qué puede hacer el huésped. Al cliente le ayuda a saber qué esperar, y a Google, a entender qué ofreces.",
      },
      {
        title: "¿Puedo destacar ofertas de primavera y otoño?",
        text: "Sí. Estancias largas, paquetes para senderistas o ciclistas y precios de temporada media pueden tener su propia sección.",
      },
    ],
    searches: [
      "página web agroturismo",
      "web hotel rural",
      "diseño web agroturismo",
      "reserva directa agroturismo",
      "web casa rural con reservas",
      "web agroturismo Mallorca",
    ],
    related: ["hoteles", "fincas-para-eventos", "productos-de-mallorca"],
  },
  {
    slug: "alquiler-vacacional",
    name: "Alquiler vacacional",
    group: "turismo",
    forWho: "propietarios de alquiler vacacional",
    title: "Página web para alquiler vacacional con reserva directa",
    description: `Web para tu vivienda turística con reserva directa, número de registro visible y guía del huésped en varios idiomas. Desde ${basePlan.price} € + IVA.`,
    h1: "Tu vivienda vacacional con web propia y reserva directa",
    lead: "Fotos, calendario, reserva directa y la información práctica que hoy repites en cada mensaje de Airbnb, en una web para tu casa o apartamento.",
    context: [
      "Airbnb y Booking te traen huéspedes, pero cobran comisión en cada reserva y no te dejan quedarte con el contacto. El huésped que repite cada verano vuelve a pasar por la plataforma porque no tiene otro sitio donde reservarte.",
      "Una web propia con calendario sincronizado le da a ese huésped un camino directo, y a ti un sitio donde enseñar la casa sin límites de fotos ni de texto. Las plataformas siguen sirviendo para captar; la web, para que repitan.",
    ],
    mallorca:
      "En Baleares los anuncios de alquiler turístico deben mostrar el número de registro de la vivienda, también en tu web. Muchos huéspedes llegan de fuera de España y reservan en inglés o alemán, y conviene dejar claro si el precio incluye el impuesto de turismo sostenible.",
    web: [
      {
        title: "Calendario sincronizado",
        text: "Disponibilidad conectada con Airbnb y Booking por iCal o channel manager, para evitar reservas dobles.",
      },
      {
        title: "Número de registro visible",
        text: "El número de registro turístico en todas las páginas, como pide la normativa balear para la publicidad.",
      },
      {
        title: "Guía del huésped",
        text: "Wifi, normas de la casa, basura, piscina y restaurantes cercanos en una página privada en cada idioma.",
      },
      {
        title: "La casa estancia por estancia",
        text: "Fotos optimizadas de cada habitación, el exterior y la zona, con la distribución de camas clara.",
      },
    ],
    automations: [
      {
        title: "Mensajes de la estancia",
        text: "Confirmación, instrucciones de llegada y despedida enviadas solas en el idioma del huésped.",
      },
      {
        title: "Registro de viajeros online",
        text: "El huésped rellena antes de llegar los datos que pide el registro de viajeros, y tú los tienes ordenados.",
      },
      {
        title: "Aviso a limpieza",
        text: "Cada reserva nueva avisa a quien limpia con la fecha de salida y la de la siguiente entrada.",
      },
    ],
    agent:
      "Un agente de IA contesta en el idioma del huésped sobre la casa, cómo llegar, la piscina o la playa más cercana, y lleva a la reserva. No acepta cambios de fechas, mascotas ni descuentos por su cuenta: eso lo decides tú.",
    pack: [{ id: "reservas" }, { id: "idiomas", qty: 2 }],
    packNote:
      "Reserva directa y dos idiomas más: lo mínimo para que el huésped extranjero repita sin pasar por la plataforma.",
    faq: [
      {
        title: "¿Es obligatorio poner el número de registro en mi web?",
        text: "En Baleares, la publicidad de una vivienda turística debe incluir su número de registro, y eso incluye tu web. Lo dejamos visible en todas las páginas; si dudas en tu caso, consulta con tu gestor.",
      },
      {
        title: "¿Se sincroniza con Airbnb y Booking?",
        text: "Sí. Por iCal el calendario se sincroniza con las plataformas, aunque con cierto retraso; si llevas varias viviendas, un channel manager lo hace más rápido.",
      },
      {
        title: "¿Puedo pedir una fianza en las reservas directas?",
        text: "Sí. Puedes pedir un depósito o una retención en la tarjeta y explicar en la web cuándo y cómo se devuelve.",
      },
      {
        title: "¿Puedo tener varias viviendas en la misma web?",
        text: "Sí. Cada una con su página, fotos, calendario y número de registro. Si gestionas casas de otros propietarios, te encaja más una web de gestora.",
      },
    ],
    searches: [
      "página web alquiler vacacional",
      "web para casa vacacional con reservas",
      "reserva directa alquiler vacacional",
      "web propia sin comisiones airbnb",
      "página web apartamento turístico",
      "web villa vacacional",
      "web alquiler turístico Mallorca",
    ],
    related: ["gestion-alquiler-vacacional", "hoteles", "empresas-de-limpieza"],
  },
  {
    slug: "gestion-alquiler-vacacional",
    name: "Gestión de alquiler vacacional",
    group: "turismo",
    forWho: "empresas de gestión de alquiler vacacional",
    title: `Webs para gestoras de alquiler vacacional desde ${basePlan.price} €`,
    description: `Diseño web para empresas que gestionan villas y casas vacacionales: captar propietarios, catálogo con reserva, área privada e informes. Desde ${basePlan.price} € + IVA.`,
    h1: "Webs para gestoras de villas que hablan a propietarios y a huéspedes",
    lead: "Un catálogo de villas que se reserva solo y una parte de la web pensada para que los propietarios te confíen su casa.",
    context: [
      "Una gestora tiene dos clientes: el huésped que reserva y el propietario que le deja la casa. Muchas webs solo hablan al primero, y el propietario que busca quién le gestione la villa no encuentra qué incluye el servicio ni cómo se le informa.",
      "Con el catálogo conectado a tu software de gestión, cada villa se actualiza sola. Y con una sección para propietarios, con servicios, informes y área privada, la web trabaja también para ampliar tu cartera.",
    ],
    mallorca:
      "En Mallorca muchas villas son de propietarios que viven fuera de la isla, en Alemania, Reino Unido o la Península, y buscan a alguien de confianza que se ocupe de todo. Hablarles en su idioma y explicar bien cómo cumples la normativa balear de alquiler turístico es parte de la venta.",
    web: [
      {
        title: "Catálogo de villas con filtros",
        text: "Zona, capacidad, piscina, distancia a la playa y precio, con la ficha de cada casa y su número de registro.",
      },
      {
        title: "Sección para propietarios",
        text: "Qué gestionas, cómo cobras, qué informes recibe y un formulario para valorar su casa.",
      },
      {
        title: "Área privada del propietario",
        text: "Acceso con usuario a su calendario de ocupación, sus reservas y sus informes, según lo que permita tu software.",
      },
      {
        title: "Reserva conectada a tu software",
        text: "Disponibilidad y precios leídos de tu programa de gestión (PMS), para no mantener los datos dos veces.",
      },
    ],
    automations: [
      {
        title: "Informe mensual al propietario",
        text: "Ocupación, ingresos e incidencias de cada villa enviados solos al cerrar cada mes.",
      },
      {
        title: "Captación de propietarios",
        text: "Cada solicitud de valoración entra en tu CRM con zona, tamaño y si ya tiene registro turístico, con su seguimiento programado.",
      },
      {
        title: "Limpieza y mantenimiento coordinados",
        text: "Cada entrada y salida genera la tarea para limpieza, jardín o piscina con la villa y la hora.",
      },
    ],
    agent:
      "Un agente de IA atiende a huéspedes sobre villas, disponibilidad y servicios, y a propietarios sobre qué incluye la gestión. No promete rentabilidades ni cierra condiciones con ningún propietario: eso lo hace tu equipo.",
    pack: [{ id: "idiomas", qty: 2 }, { id: "reservas" }, { id: "blog" }],
    packNote:
      "Dos idiomas más, reservas en el catálogo y un blog para atraer a propietarios que buscan quién les gestione la casa.",
    faq: [
      {
        title: "¿Se puede conectar con mi software de gestión de villas?",
        text: "Si tu software tiene API o un módulo de reservas para webs, sí: villas, precios y calendario se leen de ahí. Lo revisamos antes de presupuestar.",
      },
      {
        title: "¿Cada villa del catálogo tiene que mostrar su número de registro?",
        text: "En Baleares la publicidad de cada vivienda turística debe incluir su número de registro, también en tu catálogo. Lo dejamos como campo obligatorio de cada ficha.",
      },
      {
        title: "¿Pueden los propietarios ver sus reservas en la web?",
        text: "Sí, con un área privada con su calendario e informes. Según tu software, se integra directamente o se resuelve con informes automáticos por email.",
      },
      {
        title: "¿Cómo atraigo a más propietarios desde la web?",
        text: "Explicando con claridad qué haces, cómo cobras y cómo informas, con un formulario de valoración. El blog ayuda a que te encuentren quienes buscan gestión en tu zona.",
      },
    ],
    searches: [
      "web empresa gestión alquiler vacacional",
      "página web gestora de villas",
      "captar propietarios alquiler vacacional",
      "catálogo de villas con reservas",
      "área de propietarios alquiler vacacional",
      "diseño web gestión de villas Mallorca",
    ],
    related: ["alquiler-vacacional", "empresas-de-limpieza", "piscinas-y-jardineria"],
  },
  {
    slug: "alquiler-de-barcos",
    name: "Alquiler de barcos",
    group: "turismo",
    forWho: "empresas de alquiler de barcos",
    title: "Diseño web para alquiler de barcos y chárter",
    description: `Web para chárter y alquiler de barcos con o sin patrón y motos de agua: disponibilidad, fianza, titulación e idiomas, desde ${basePlan.price} € + IVA.`,
    h1: "Alquiler de barcos con reserva online y las condiciones claras",
    lead: "Flota con fotos y precio por día, disponibilidad real, qué titulación pide cada barco y la fianza explicada antes de que el cliente llegue al puerto.",
    context: [
      "El cliente que alquila un barco tiene siempre las mismas dudas: si necesita titulación, si puede ir con patrón, cuánto es la fianza, qué pasa con el combustible y qué ocurre si hace mal tiempo. Si la web no lo explica, todo eso llega por teléfono en plena temporada.",
      "Con la flota, las condiciones y la reserva con pago en la web, el cliente llega al puerto con todo firmado y entendido. Tú dedicas el tiempo a preparar barcos, no a repetir explicaciones.",
    ],
    mallorca:
      "En Mallorca el alquiler de barcos vive de la temporada y de clientes extranjeros que reservan en inglés o alemán. La web es buen sitio para explicar las calas cercanas y que en Baleares la posidonia está protegida: no se puede fondear sobre ella.",
    web: [
      {
        title: "Ficha de cada barco",
        text: "Eslora, plazas, motor, equipamiento, fotos y precio por día o medio día de cada embarcación.",
      },
      {
        title: "Titulación y condiciones",
        text: "Qué barcos se llevan sin titulación, cuáles piden licencia o patrón, y la fianza y el combustible de cada uno.",
      },
      {
        title: "Disponibilidad y reserva con pago",
        text: "Calendario por barco y franja, con señal o pago completo al reservar.",
      },
      {
        title: "Política de mal tiempo",
        text: "Qué pasa si se suspende la salida por viento: cambio de fecha o devolución, por escrito antes de pagar.",
      },
    ],
    automations: [
      {
        title: "Aviso por la previsión",
        text: "La víspera, si el viento previsto supera el límite que tú fijas, el cliente recibe aviso con las opciones de cambio.",
      },
      {
        title: "Papeles antes de llegar",
        text: "Titulación, documento de identidad y contrato firmados online, para no hacer papeleo en el pantalán.",
      },
      {
        title: "Fianza devuelta sin llamadas",
        text: "Al marcar el barco como devuelto sin incidencias, se libera la retención y el cliente recibe la confirmación.",
      },
    ],
    agent:
      "Un agente de IA explica en el idioma del cliente qué barco le encaja, qué titulación pide y cómo funciona la fianza, y lleva a la reserva. No decide si una salida es segura con el parte del día: eso lo decide siempre el responsable de la base.",
    pack: [{ id: "reservas" }, { id: "idiomas", qty: 2 }],
    packNote:
      "Reservas con pago y dos idiomas más: el cliente extranjero elige barco, entiende las condiciones y paga en su idioma.",
    faq: [
      {
        title: "¿Puedo explicar en la web qué barcos se llevan sin titulación?",
        text: "Sí, y conviene, porque es de las primeras dudas. Indica en cada barco qué titulación o licencia pide, y revisa los requisitos vigentes con Capitanía Marítima o tu asociación náutica.",
      },
      {
        title: "¿Se puede cobrar la fianza con tarjeta desde la web?",
        text: "Sí, como retención o depósito que se devuelve tras la salida. Lo importante es que el cliente vea el importe y las condiciones antes de pagar.",
      },
      {
        title: "¿Caben motos de agua y salidas con patrón en la misma web?",
        text: "Sí. Cada servicio tiene su ficha y su calendario: las motos de agua por turnos, los barcos por día o medio día y las salidas con patrón con sus plazas.",
      },
      {
        title: "¿Puedo seguir en las plataformas de alquiler de barcos?",
        text: "Sí. Puedes seguir en ellas y tener reserva directa en tu web; el calendario se sincroniza si la plataforma lo permite.",
      },
    ],
    searches: [
      "página web alquiler de barcos",
      "web chárter náutico",
      "reserva de barcos online",
      "web alquiler barcos sin licencia",
      "web alquiler motos de agua",
      "diseño web empresa náutica",
      "alquiler barcos Mallorca web",
    ],
    related: ["excursiones-y-actividades", "beach-clubs", "alquiler-de-coches"],
  },
  {
    slug: "excursiones-y-actividades",
    name: "Excursiones y actividades",
    group: "turismo",
    forWho: "empresas de excursiones y actividades",
    title: "Web para excursiones y actividades con reserva y pago",
    description: `Página web para tours, kayak, buceo o senderismo con reserva y pago, plazas por horario, idiomas y punto de encuentro. Desde ${basePlan.price} € + IVA.`,
    h1: "Webs para excursiones y actividades que se reservan y se pagan solas",
    lead: "Horarios con plazas, pago al reservar, el punto de encuentro en el mapa y todo en el idioma de quien está de vacaciones.",
    context: [
      "Quien busca una excursión está de vacaciones, con el móvil, y quiere reservar para mañana. Necesita ver horarios, plazas libres, precio, qué llevar y dónde quedar. Si tiene que escribir y esperar respuesta, reserva otra actividad.",
      "Las plataformas de actividades cobran comisión y se quedan con el cliente. Con reserva y pago en tu web controlas los cupos de cada salida, cobras por adelantado y cada cliente recibe solo las instrucciones de su actividad.",
    ],
    mallorca:
      "En Mallorca el cliente de actividades es muchas veces extranjero y la oferta cambia con el año: kayak y buceo en verano, senderismo por la Serra de Tramuntana en primavera y otoño. La web tiene que hablar inglés y alemán y decir qué se hace en cada época.",
    web: [
      {
        title: "Cupos por horario",
        text: "Cada salida con sus plazas, que se descuentan al reservar para que el grupo no pase de su tamaño.",
      },
      {
        title: "Pago al reservar",
        text: "Pago completo o señal con tarjeta, con la política de cancelación a la vista.",
      },
      {
        title: "Punto de encuentro claro",
        text: "Mapa, foto del sitio y cómo llegar en coche o en transporte público, en cada actividad.",
      },
      {
        title: "Requisitos de cada actividad",
        text: "Edad mínima, nivel físico, si hay que saber nadar o qué titulación de buceo hace falta, antes de pagar.",
      },
    ],
    automations: [
      {
        title: "Instrucciones la víspera",
        text: "El cliente recibe la hora, el punto de encuentro, qué llevar y cómo contactar con el guía.",
      },
      {
        title: "Salida cancelada, todos avisados",
        text: "Si el mar o la montaña no acompañan y cancelas, los inscritos reciben el aviso con las opciones de cambio o devolución.",
      },
      {
        title: "Fotos y reseña después",
        text: "Al día siguiente, el enlace a las fotos del grupo y a tu ficha de Google o TripAdvisor.",
      },
    ],
    agent:
      "Un agente de IA ayuda en varios idiomas a elegir actividad según edad, nivel y fechas, y lleva a la reserva. No valora si alguien puede bucear o caminar con una condición médica: eso lo responde el guía o el instructor.",
    pack: [{ id: "reservas" }, { id: "idiomas", qty: 2 }, { id: "geo" }],
    packNote:
      "Reservas con pago, dos idiomas más y GEO para cuando un turista pregunta a la IA qué hacer en la isla.",
    faq: [
      {
        title: "¿Puedo seguir vendiendo en plataformas de actividades?",
        text: "Sí. Lo habitual es usarlas para captar y la web para la reserva directa y el cliente que repite. Los cupos tienen que estar sincronizados para no vender plazas de más.",
      },
      {
        title: "¿Puedo abrir o cerrar horarios según los guías que tenga?",
        text: "Sí. Cada salida tiene su capacidad y puedes abrir, cerrar o ampliar horarios cuando cambie tu equipo o tu material.",
      },
      {
        title: "¿Puedo vender bonos regalo de una actividad?",
        text: "Sí. Un bono con código para una actividad o un importe, que el destinatario canjea al reservar.",
      },
      {
        title: "¿Puedo pedir datos de salud o de nivel en la reserva?",
        text: "Sí, con preguntas en el formulario. Los datos de salud son una categoría especial según el RGPD: pide solo lo necesario y con consentimiento claro.",
      },
    ],
    searches: [
      "página web empresa de actividades",
      "web excursiones con reservas",
      "reservas online tours",
      "web empresa de kayak",
      "web centro de buceo",
      "sistema de reservas actividades turísticas",
      "web excursiones Mallorca",
    ],
    related: ["alquiler-de-barcos", "alquiler-de-bicicletas", "traslados-y-taxis"],
  },
  {
    slug: "alquiler-de-bicicletas",
    name: "Alquiler de bicicletas",
    group: "turismo",
    forWho: "alquiler y tours de bicicleta",
    title: "Página web para alquiler de bicicletas y tours",
    description: `Web para alquiler de bicis de carretera y tours ciclistas: reservas por talla y fechas, rutas y textos en inglés y alemán, desde ${basePlan.price} € + IVA.`,
    h1: "Alquiler de bicis con la talla reservada antes de aterrizar",
    lead: "Reservas por modelo, talla y fechas, rutas descargables y todo en inglés y alemán para el ciclista que viene a entrenar a Mallorca.",
    context: [
      "El ciclista que alquila para una semana de entrenamiento quiere asegurarse el modelo que conoce, en su talla y con sus pedales. Si tiene que pedirlo por correo y esperar respuesta, reserva en otra tienda con sistema online.",
      "Una web con reservas por talla y fechas evita dobles reservas en las semanas punta y te deja preparar cada bici antes de que llegue el cliente. Los tours guiados se venden con plazas y nivel, como cualquier salida.",
    ],
    mallorca:
      "Mallorca es destino ciclista de primer nivel en primavera y otoño, cuando llegan grupos de Alemania, Reino Unido y el norte de Europa a subir el Puig Major o bajar a Sa Calobra. Tu web tiene que hablarles en su idioma y abrir reservas con tiempo.",
    web: [
      {
        title: "Reserva por talla y modelo",
        text: "El ciclista elige bici de carretera, gravel o eléctrica, talla y fechas, y ve qué queda libre.",
      },
      {
        title: "Extras en la misma reserva",
        text: "Pedales automáticos, GPS, casco o entrega en el hotel, añadidos con su precio antes de pagar.",
      },
      {
        title: "Rutas descargables",
        text: "Las rutas clásicas de la isla con distancia, desnivel y archivo GPX para el ciclocomputador.",
      },
      {
        title: "Tours guiados por nivel",
        text: "Salidas con guía por nivel y ritmo, con plazas limitadas y punto de salida en el mapa.",
      },
    ],
    automations: [
      {
        title: "Medidas antes de llegar",
        text: "Tras reservar, el cliente envía su altura o las medidas de su bici para tenerla ajustada a su llegada.",
      },
      {
        title: "Ruta de entregas del día",
        text: "Cada reserva con entrega en hotel se suma a la hoja de reparto de la furgoneta con hotel y hora.",
      },
      {
        title: "Apertura de la próxima temporada",
        text: "Quien alquiló en otoño recibe en invierno el aviso de que ya se puede reservar la primavera.",
      },
    ],
    agent:
      "Un agente de IA responde en inglés, alemán o español sobre modelos, tallas, rutas y entrega en hotel, y lleva a la reserva. No decide la talla sin las medidas del ciclista ni cambia las condiciones por daños: eso lo revisa tu taller.",
    pack: [{ id: "reservas" }, { id: "idiomas", qty: 2 }],
    packNote:
      "Reservas por talla y fechas en inglés y alemán: el ciclista extranjero lo deja cerrado desde casa.",
    faq: [
      {
        title: "¿El sistema controla tallas y modelos a la vez?",
        text: "Sí. Cada combinación de modelo y talla tiene su propia disponibilidad por día, para no alquilar la misma bici dos veces.",
      },
      {
        title: "¿Puedo pedir fianza u ofrecer una cobertura de daños?",
        text: "Sí. Puedes pedir un depósito con tarjeta u ofrecer una cobertura opcional, con las condiciones escritas antes de pagar.",
      },
      {
        title: "¿Y si además vendo ropa y recambios?",
        text: "Se puede añadir una tienda online para ropa, recambios o las bicis de alquiler que vendes al acabar la temporada.",
      },
      {
        title: "¿Sirve para tours de varios días con hotel incluido?",
        text: "Sí, como paquetes con fechas, nivel y lo que incluyen. Si combinas alojamiento y transporte, consulta con tu asesor si cuenta como viaje combinado y qué obligaciones tiene.",
      },
    ],
    searches: [
      "página web alquiler de bicicletas",
      "web alquiler bicis de carretera",
      "reservas online alquiler bicicletas",
      "web tours en bicicleta",
      "sistema de reservas alquiler de bicis",
      "alquiler bicicletas Mallorca web",
    ],
    related: ["excursiones-y-actividades", "hoteles", "agroturismos"],
  },
  {
    slug: "traslados-y-taxis",
    name: "Traslados y taxis",
    group: "turismo",
    forWho: "traslados, taxis y VTC",
    title: "Web para traslados al aeropuerto, taxis y VTC",
    description: `Página web para traslados al aeropuerto, VTC y minibuses: reserva con número de vuelo, precio por trayecto y confirmación al momento, desde ${basePlan.price} € + IVA.`,
    h1: "Traslados al aeropuerto con número de vuelo y precio cerrado",
    lead: "Reserva con número de vuelo, precio por trayecto antes de pagar y confirmación inmediata al cliente, en su idioma.",
    context: [
      "Quien reserva un traslado desde el aeropuerto quiere tres cosas: saber el precio antes de pagar, que alguien le espere aunque el vuelo llegue tarde y una confirmación que pueda enseñar. Si tu web no se lo da, reserva en una plataforma que sí.",
      "Con reserva online por trayecto, número de vuelo, pasajeros y maletas, el pedido llega completo. Y con las confirmaciones automáticas bajan las llamadas para preguntar si la reserva está hecha.",
    ],
    mallorca:
      "En temporada el aeropuerto de Palma recibe vuelos a todas horas y muchos clientes reservan el traslado desde su país, en inglés o alemán. En invierno, empresas, grupos de eventos y residentes son los que llenan la agenda.",
    web: [
      {
        title: "Precio por trayecto",
        text: "El cliente elige origen, destino y vehículo y ve el precio cerrado antes de reservar.",
      },
      {
        title: "Reserva con número de vuelo",
        text: "Vuelo, hora de llegada, pasajeros, maletas y sillas de niño en un solo formulario.",
      },
      {
        title: "Vehículos por tamaño",
        text: "Turismo, monovolumen o minibús, con plazas y espacio para maletas, bicis o bolsas de golf.",
      },
      {
        title: "Dónde espera el conductor",
        text: "El punto de encuentro en la terminal, con foto, en la web y en la confirmación.",
      },
    ],
    automations: [
      {
        title: "Confirmación y recordatorio",
        text: "Confirmación al reservar y, antes del servicio, el nombre y el contacto del conductor.",
      },
      {
        title: "Vuelo vigilado",
        text: "El estado del vuelo se consulta de forma automática y el conductor recibe aviso si hay retraso.",
      },
      {
        title: "Hoja de servicios del día",
        text: "Cada mañana, cada conductor recibe sus traslados ordenados por hora con los datos del cliente.",
      },
    ],
    agent:
      "Un agente de IA da precios por trayecto, toma los datos del vuelo y deja hecha la reserva en el idioma del cliente. No cambia un servicio en curso ni atiende incidencias del día: eso pasa a la central o al conductor.",
    pack: [{ id: "reservas" }, { id: "idiomas", qty: 2 }],
    packNote:
      "Reservas online con dos idiomas más: el pasajero extranjero cierra su traslado antes de subir al avión.",
    faq: [
      {
        title: "¿Puedo cobrar el traslado al reservar?",
        text: "Sí, pago completo o señal con tarjeta. También puedes dejar el pago al conductor y usar la reserva solo para confirmar el servicio.",
      },
      {
        title: "¿Sirve para un taxista autónomo?",
        text: "Sí. Una web sencilla con tus trayectos habituales y reserva previa te trae clientes directos más allá de la parada. Consulta con tu asociación o el ayuntamiento qué tarifas aplicar.",
      },
      {
        title: "¿Las reservas pueden entrar en mi programa de gestión de flota?",
        text: "Si tu programa recibe reservas por API o por correo con formato fijo, sí: cada reserva entra sin copiarla a mano. Lo revisamos antes de presupuestar.",
      },
      {
        title: "¿Puedo dar presupuesto para grupos y bodas?",
        text: "Sí. Los traslados de grupos, congresos o bodas van por un formulario de presupuesto con fechas, horarios y número de personas.",
      },
    ],
    searches: [
      "página web traslados aeropuerto",
      "web para taxista",
      "web vtc con reservas",
      "reserva traslado aeropuerto online",
      "web minibús con conductor",
      "sistema de reservas transfer",
      "traslados aeropuerto Palma web",
    ],
    related: ["alquiler-de-coches", "hoteles", "bodas-y-wedding-planners"],
  },
  {
    slug: "alquiler-de-coches",
    name: "Alquiler de coches",
    group: "turismo",
    forWho: "empresas de alquiler de coches",
    title: `Página web para rent a car local desde ${basePlan.price} €`,
    description: `Diseño web para rent a car local: reservas online, seguro y franquicia explicados sin letra pequeña y recogida en el aeropuerto. Desde ${basePlan.price} € + IVA.`,
    h1: "Rent a car local con reserva directa y condiciones sin letra pequeña",
    lead: "Reserva por fechas y categoría, seguro, franquicia y combustible explicados antes de pagar, y la recogida en el aeropuerto bien señalada.",
    context: [
      "El cliente de alquiler de coches compara en buscadores y desconfía: teme el cargo de seguro en el mostrador, la franquicia alta o la política de combustible. Un rent a car local que lo explica todo claro en su web tiene un argumento propio frente a los comparadores.",
      "Con reserva directa no pagas comisión al comparador y te quedas con el cliente para la próxima vez. Y si las condiciones están por escrito antes de pagar, hay menos discusiones al devolver el coche.",
    ],
    mallorca:
      "En Mallorca el rent a car vive de la temporada y de las llegadas al aeropuerto de Palma. Quien reserva lo hace desde su país, en inglés o alemán, y quiere saber si le esperas en la terminal o le llevas a tu oficina en lanzadera.",
    web: [
      {
        title: "Reserva por fechas y categoría",
        text: "El cliente elige fechas, hora del vuelo y tipo de coche, y ve el precio total del alquiler.",
      },
      {
        title: "Condiciones en una tabla",
        text: "Seguro incluido, franquicia, opción sin franquicia, combustible y kilometraje, comparables de un vistazo.",
      },
      {
        title: "Recogida en el aeropuerto",
        text: "Dónde está el mostrador o el punto de encuentro y si hay lanzadera, con fotos y horarios.",
      },
      {
        title: "Extras antes de pagar",
        text: "Sillas de niño, conductor adicional o GPS añadidos a la reserva con su precio.",
      },
    ],
    automations: [
      {
        title: "Documentos antes de la recogida",
        text: "El cliente sube carné y documento de identidad y firma las condiciones online antes de llegar.",
      },
      {
        title: "Recordatorio con instrucciones",
        text: "La víspera, cómo encontrar el mostrador o la lanzadera y qué documentación llevar.",
      },
      {
        title: "Fotos de entrega y devolución",
        text: "El estado del coche se fotografía al entregarlo y al recibirlo, y el cliente recibe el informe por email.",
      },
    ],
    agent:
      "Un agente de IA explica en inglés, alemán o español las categorías, el seguro y la franquicia, y lleva a la reserva. No negocia condiciones ni resuelve reclamaciones por daños: eso lo gestiona tu oficina.",
    pack: [{ id: "reservas" }, { id: "idiomas", qty: 2 }],
    packNote:
      "Reservas online con dos idiomas más: el cliente extranjero reserva directo y llega sabiendo qué paga.",
    faq: [
      {
        title: "¿Tengo que mostrar el precio final con todo incluido?",
        text: "La normativa de consumo pide informar del precio total, con impuestos y cargos obligatorios, antes de contratar. Mostrar seguro y franquicia desde el principio evita reclamaciones; tu asesor te dirá cómo aplicarlo.",
      },
      {
        title: "¿Puedo seguir en los comparadores y tener reserva directa?",
        text: "Sí. Los comparadores captan; la web es para quien busca tu nombre o repite. Lo importante es que la disponibilidad sea la misma en los dos sitios.",
      },
      {
        title: "¿Se puede pedir la edad y la antigüedad del carné al reservar?",
        text: "Sí. El formulario pide la edad y los años de carné del conductor y aplica el suplemento de conductor joven si lo tienes.",
      },
      {
        title: "¿Funciona con varias oficinas o puntos de entrega?",
        text: "Sí. Cada punto con su horario y su flota, y un suplemento si el coche se recoge en uno y se devuelve en otro.",
      },
    ],
    searches: [
      "página web rent a car",
      "web alquiler de coches",
      "reservas online alquiler coches",
      "web rent a car local",
      "diseño web empresa alquiler de vehículos",
      "rent a car aeropuerto Palma web",
    ],
    related: ["traslados-y-taxis", "alquiler-de-barcos", "talleres-mecanicos"],
  },
  {
    slug: "bodas-y-wedding-planners",
    name: "Bodas y wedding planners",
    group: "eventos",
    forWho: "wedding planners",
    title: "Webs para wedding planners y bodas de destino",
    description: `Web para wedding planners con portfolio, textos en inglés y alemán y un formulario que pregunta fecha, invitados y presupuesto, desde ${basePlan.price} € + IVA.`,
    h1: "Webs para wedding planners que reciben parejas con fecha y presupuesto",
    lead: "Un portfolio que carga rápido, la web en el idioma de la pareja y un formulario que filtra antes de la primera videollamada.",
    context: [
      "Una pareja que busca organizadora de bodas mira fotos, lee cómo trabajas y escribe a varias a la vez. Si tu primera respuesta tiene que ser «¿para qué fecha y cuántos invitados?», ya vas por detrás.",
      "Un formulario con fecha, invitados, zona y presupuesto aproximado te dice de un vistazo si la boda encaja y te deja contestar con una propuesta. El portfolio, con fotos optimizadas, convence sin que la web tarde en cargar.",
    ],
    mallorca:
      "Mallorca es destino de boda para muchas parejas de Alemania, Reino Unido y otros países que se casan lejos de casa. Te buscan en su idioma, desde su país y con mucha antelación, y quieren saber que conoces las fincas, los proveedores y los trámites.",
    web: [
      {
        title: "Portfolio por boda",
        text: "Cada boda con su finca, su estilo y fotos optimizadas, para que la pareja se imagine la suya.",
      },
      {
        title: "Formulario cualificador",
        text: "Fecha o temporada, invitados, zona, tipo de ceremonia y presupuesto antes de la primera conversación.",
      },
      {
        title: "Servicios por niveles",
        text: "Organización completa, parcial o coordinación del día, con lo que incluye cada una.",
      },
      {
        title: "Web entera en su idioma",
        text: "Inglés y alemán en todas las páginas y en el formulario, no solo una portada traducida.",
      },
    ],
    automations: [
      {
        title: "Respuesta con dossier",
        text: "Cada solicitud recibe al momento tu dossier en su idioma y un enlace para agendar una videollamada.",
      },
      {
        title: "Calendario de la planificación",
        text: "Recordatorios a la pareja de pagos a proveedores, pruebas y fecha límite de la lista de invitados.",
      },
      {
        title: "Confirmación de invitados",
        text: "Un formulario para que cada invitado confirme asistencia, alergias y traslado, que llega ordenado a tu hoja.",
      },
    ],
    agent:
      "Un agente de IA responde en inglés, alemán o español qué servicios ofreces, en qué zonas trabajas y cómo es el proceso, y propone una videollamada. No da presupuestos ni confirma fechas de fincas o proveedores: eso lo cierras tú.",
    pack: [{ id: "idiomas", qty: 2 }, { id: "blog" }],
    packNote:
      "Inglés y alemán para la pareja extranjera y un blog para contar fincas y bodas que has organizado.",
    faq: [
      {
        title: "¿Puedo publicar fotos de bodas que he organizado?",
        text: "Sí, con permiso de la pareja y del fotógrafo, que normalmente conserva los derechos sobre las imágenes, y citándolo. Lo práctico es dejarlo previsto en tus contratos.",
      },
      {
        title: "¿Qué explico sobre bodas civiles y simbólicas?",
        text: "Qué tipos de ceremonia organizas y que los trámites legales dependen de la nacionalidad de la pareja. Así evitas malentendidos y muestras que conoces el proceso.",
      },
      {
        title: "¿El formulario descarta las bodas que no encajan?",
        text: "No las descarta, pero te avisa: con fecha, invitados y presupuesto aproximado sabes enseguida si encaja y respondes con una propuesta o con un no amable.",
      },
      {
        title: "¿Me basta con estar en directorios de bodas?",
        text: "Te pueden ayudar a que te descubran. La web propia es donde la pareja ve tu portfolio entero y te escribe sin intermediarios.",
      },
    ],
    searches: [
      "página web wedding planner",
      "web organizadora de bodas",
      "diseño web wedding planner",
      "web bodas de destino",
      "formulario presupuesto boda",
      "wedding planner Mallorca web",
    ],
    related: ["fincas-para-eventos", "fotografos", "catering"],
  },
  {
    slug: "fincas-para-eventos",
    name: "Fincas para eventos",
    group: "eventos",
    forWho: "fincas y espacios para eventos",
    title: `Web para fincas de bodas y eventos desde ${basePlan.price} €`,
    description: `Diseño web para fincas y espacios de bodas y eventos: fechas libres, capacidad, visitas con cita y textos en inglés y alemán. Desde ${basePlan.price} € + IVA.`,
    h1: "Webs para fincas de eventos que enseñan fechas libres y citan visitas",
    lead: "Capacidad, espacios, fechas disponibles y visitas con cita en la web, para que cada contacto llegue con una fecha real en mente.",
    context: [
      "La primera pregunta a una finca casi siempre es «¿tenéis libre tal fecha?». Le siguen la capacidad, si hay cocina para el catering, hasta qué hora puede haber música y si hay alojamiento. Si la web no lo dice, todo llega por correo, uno a uno.",
      "Con un calendario de fechas libres, una ficha de cada espacio y un sistema para pedir visita, la pareja o la empresa llega a la finca sabiendo qué hay. Tú dedicas las visitas a quien de verdad puede celebrar allí.",
    ],
    mallorca:
      "En Mallorca muchas bodas de parejas extranjeras se celebran en fincas, y los horarios de música y los límites de ruido dependen del municipio y de la licencia de cada espacio. Explicarlo claro en inglés y alemán evita malentendidos a meses de la boda.",
    web: [
      {
        title: "Fechas disponibles",
        text: "Un calendario con fechas libres, reservadas o en opción, que actualizas sin llamar a nadie.",
      },
      {
        title: "Espacios y capacidad",
        text: "Cada zona de la finca con su aforo para ceremonia, cóctel y cena, fotos y plano.",
      },
      {
        title: "Visitas con cita",
        text: "La pareja elige día y hora para ver la finca y recibe la confirmación con la ubicación.",
      },
      {
        title: "Normas del espacio",
        text: "Hora de fin de la música, proveedores permitidos y alojamiento, explicados sin ambigüedad.",
      },
    ],
    automations: [
      {
        title: "Opción de fecha con caducidad",
        text: "Si una pareja deja una fecha en opción, recibe un recordatorio antes de que caduque y tú, un aviso.",
      },
      {
        title: "Dossier tras la visita",
        text: "Después de la visita, el cliente recibe el dossier, las tarifas y los siguientes pasos en su idioma.",
      },
      {
        title: "Proveedores al tanto",
        text: "Al confirmar un evento, catering, música y montaje reciben la fecha, los horarios y las normas de la finca.",
      },
    ],
    agent:
      "Un agente de IA responde en el idioma del cliente sobre capacidad, espacios, alojamiento y proveedores, y propone una visita. No bloquea fechas ni hace excepciones con el horario de música: eso lo decide la finca.",
    pack: [{ id: "idiomas", qty: 2 }, { id: "reservas" }],
    packNote:
      "Dos idiomas más y citas online: la pareja extranjera pide su visita en su idioma sin esperar a que contestes.",
    faq: [
      {
        title: "¿Pongo en la web hasta qué hora puede haber música?",
        text: "Es buena idea, con prudencia: los horarios y límites de ruido dependen de tu municipio y de la licencia de la finca. Indícalos tal como los tengas autorizados y consulta con el ayuntamiento si dudas.",
      },
      {
        title: "¿Puedo mostrar las fechas libres sin publicar precios?",
        text: "Sí. El calendario muestra la disponibilidad y las tarifas van en el dossier o tras la visita.",
      },
      {
        title: "¿Sirve también para eventos de empresa y rodajes?",
        text: "Sí. Cada tipo de evento puede tener su página y su formulario, con datos distintos para una boda, una cena de empresa o un rodaje.",
      },
      {
        title: "¿El calendario se conecta con mi agenda?",
        text: "Sí. El calendario de la web puede leer tu Google Calendar o tu programa de gestión, para que una fecha confirmada deje de aparecer libre.",
      },
    ],
    searches: [
      "página web finca para bodas",
      "web espacio para eventos",
      "web finca eventos con calendario",
      "diseño web salón de celebraciones",
      "reservar visita finca boda",
      "finca bodas Mallorca web",
    ],
    related: ["bodas-y-wedding-planners", "catering", "fotografos"],
  },
  {
    slug: "fotografos",
    name: "Fotógrafos y videógrafos",
    group: "eventos",
    forWho: "fotógrafos y videógrafos",
    title: `Diseño web para fotógrafos y videógrafos desde ${basePlan.price} €`,
    description: `Web para fotógrafos y videógrafos con un portfolio que carga rápido, galerías privadas para clientes y presupuesto para bodas, desde ${basePlan.price} € + IVA.`,
    h1: "Webs para fotógrafos con un portfolio nítido que carga rápido",
    lead: "Tus imágenes optimizadas para el móvil, galerías privadas para entregar y un formulario de presupuesto que pregunta lo que necesitas saber.",
    context: [
      "A un fotógrafo se le juzga por sus imágenes, y una web llena de fotos pesadas tarda en cargar en el móvil: el cliente se va antes de verlas y Google tiene en cuenta esa lentitud. El portfolio tiene que verse nítido y cargar rápido a la vez.",
      "Además de escaparate, la web puede ser tu herramienta de trabajo: galerías privadas para entregar a cada cliente, selección de fotos para el álbum y un formulario que pide fecha, lugar y tipo de sesión.",
    ],
    mallorca:
      "En Mallorca hay muchas bodas de destino y sesiones de pareja o de familia de turistas, con clientes que escriben en inglés o alemán desde su país. Tener la web en su idioma y decir en qué zonas de la isla trabajas te ayuda a entrar en su lista.",
    web: [
      {
        title: "Portfolio optimizado",
        text: "Imágenes en formatos modernos y en tamaños adaptados a cada pantalla, sin pérdida de calidad visible.",
      },
      {
        title: "Galerías privadas",
        text: "Cada cliente con su galería protegida para ver, descargar y elegir sus fotos.",
      },
      {
        title: "Presupuesto por tipo de sesión",
        text: "Boda, pareja, empresa o producto, cada uno con sus preguntas en el formulario.",
      },
      {
        title: "Vídeo sin frenar la web",
        text: "Tus vídeos alojados aparte y cargados solo cuando el cliente pulsa, para que la web siga rápida.",
      },
    ],
    automations: [
      {
        title: "Respuesta con tus servicios",
        text: "Cada consulta recibe tu dossier y la indicación de si tienes libre su fecha.",
      },
      {
        title: "Entrega de galerías",
        text: "Al subir las fotos, el cliente recibe el enlace a su galería y un aviso antes de que caduque.",
      },
      {
        title: "Contrato y señal",
        text: "Al aceptar el presupuesto, se envía el contrato para firmar online y el enlace para pagar la señal.",
      },
    ],
    agent:
      "Un agente de IA responde en varios idiomas sobre tus servicios, las zonas donde trabajas y cómo reservar, y recoge la petición de presupuesto. No reserva fechas ni promete plazos de entrega de las fotos: eso lo confirmas tú.",
    pack: [{ id: "idiomas", qty: 1 }, { id: "blog" }],
    packNote:
      "Un idioma más para las parejas extranjeras y un blog con bodas y sesiones, que da a Google y a la IA texto además de imágenes.",
    faq: [
      {
        title: "¿Necesito permiso para publicar fotos de clientes en el portfolio?",
        text: "Sí. El derecho a la propia imagen y el RGPD exigen el consentimiento de las personas que aparecen. Lo práctico es incluirlo en el contrato de cada sesión; tu asesor puede prepararte la cláusula.",
      },
      {
        title: "¿Puedo seguir usando mi servicio de galerías actual?",
        text: "Sí. Si ya usas un servicio de galerías para clientes, lo enlazamos o lo integramos con tu marca; si no, se puede montar en tu propia web.",
      },
      {
        title: "¿Me conviene la web en inglés si hago bodas de destino?",
        text: "Sí: muchas parejas que se casan en Mallorca buscan fotógrafo en su idioma. Con el extra de idiomas tienes portfolio, servicios y formulario traducidos.",
      },
      {
        title: "¿La web baja la calidad de mis fotos?",
        text: "Se optimizan para la pantalla, no para imprimir: a simple vista se ven igual y cargan mucho más rápido. Los originales siguen en tus galerías de entrega.",
      },
    ],
    searches: [
      "página web para fotógrafos",
      "web portfolio fotógrafo",
      "web fotógrafo de bodas",
      "galería privada clientes fotógrafo",
      "web para videógrafo de bodas",
      "diseño web fotógrafo barato",
      "fotógrafo bodas Mallorca web",
    ],
    related: ["bodas-y-wedding-planners", "fincas-para-eventos", "arquitectos-e-interioristas"],
  },
];
