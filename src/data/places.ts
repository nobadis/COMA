/**
 * Zonas donde trabajamos. Cada lugar genera sus páginas locales
 * (/zonas/<slug>/ y /<servicio>/<slug>/) con contenido propio.
 *
 * Reglas para editar (Google penaliza las páginas "puerta" copiadas):
 * - `local` y `angle` deben ser específicos del lugar y verdaderos.
 * - Solo Palma es sede física. En el resto trabajamos en remoto: nunca se
 *   presenta una oficina que no existe.
 */
export type PlaceKind = "isla" | "municipio" | "ccaa" | "ciudad";

export interface Place {
  slug: string;
  name: string;
  kind: PlaceKind;
  /** Slug de la comunidad (o isla) a la que pertenece. Las comunidades no lo llevan. */
  parent?: string;
  /** Sectores con más peso económico y búsquedas locales. */
  sectors: string[];
  /** Contexto local, en una o dos frases. */
  local: string;
  /** Qué cambia en el posicionamiento de este lugar frente a otros. */
  angle: string;
  /** Idiomas que conviene cuidar en la web. */
  languages?: string[];
  /** Lugares cercanos o relacionados (slugs). */
  near?: string[];
  /** Solo la sede: Palma. */
  hq?: boolean;
}

export const places: Place[] = [
  /* ------------------------------------------------------------- Mallorca */
  {
    slug: "mallorca",
    name: "Mallorca",
    kind: "isla",
    parent: "illes-balears",
    sectors: [
      "Turismo y hoteles",
      "Restauración",
      "Inmobiliario y reformas",
      "Náutica",
      "Comercio local",
    ],
    local:
      "Es nuestra isla y nuestro punto de partida desde 1997: conocemos el ritmo de la temporada alta, el turista que reserva con meses de antelación y el cliente local que busca por cercanía.",
    angle:
      "En Mallorca se compite en varios idiomas a la vez: español, catalán, inglés y alemán. Una web monolingüe pierde reservas antes de empezar.",
    languages: ["Español", "Catalán", "Inglés", "Alemán"],
    near: ["palma", "calvia", "alcudia", "soller", "menorca", "ibiza"],
  },
  {
    slug: "palma",
    name: "Palma",
    kind: "municipio",
    parent: "mallorca",
    hq: true,
    sectors: [
      "Servicios profesionales",
      "Salud y clínicas",
      "Comercio y restauración",
      "Inmobiliario",
      "Eventos y cultura",
    ],
    local:
      "Es nuestra ciudad: trabajamos cada día con negocios del centro, de Son Armadans, del Passeig Marítim y de los polígonos de Palma.",
    angle:
      "En Palma hay mucha competencia directa: el que aparece primero en Google Maps con buenas reseñas se lleva la llamada. Ahí se gana o se pierde el cliente de barrio.",
    languages: ["Español", "Catalán", "Inglés"],
    near: ["marratxi", "calvia", "llucmajor", "mallorca"],
  },
  {
    slug: "calvia",
    name: "Calvià",
    kind: "municipio",
    parent: "mallorca",
    sectors: [
      "Hoteles y alojamiento",
      "Golf y ocio",
      "Restauración",
      "Inmobiliario de lujo",
      "Náutica",
    ],
    local:
      "Con Santa Ponça, Palmanova, Magaluf o Portals Nous, Calvià vive del visitante internacional y de residentes de alto poder adquisitivo.",
    angle:
      "Aquí el posicionamiento se decide en inglés y alemán y en las respuestas de la IA a preguntas del tipo «mejor restaurante cerca de Portals Nous».",
    languages: ["Español", "Inglés", "Alemán"],
    near: ["palma", "andratx", "llucmajor"],
  },
  {
    slug: "manacor",
    name: "Manacor",
    kind: "municipio",
    parent: "mallorca",
    sectors: [
      "Industria y mueble",
      "Comercio",
      "Turismo de Porto Cristo",
      "Servicios profesionales",
      "Agroalimentario",
    ],
    local:
      "Capital del Llevant mallorquín, Manacor combina un comercio local fuerte, industria con tradición y el turismo de la costa de Porto Cristo.",
    angle:
      "Es una comarca donde mucha empresa familiar aún no tiene web ni ficha de Google cuidada: quien lo hace primero se queda con la búsqueda local.",
    languages: ["Español", "Catalán", "Alemán", "Inglés"],
    near: ["felanitx", "arta", "santanyi", "capdepera"],
  },
  {
    slug: "inca",
    name: "Inca",
    kind: "municipio",
    parent: "mallorca",
    sectors: ["Calzado y piel", "Comercio", "Servicios profesionales", "Industria", "Restauración"],
    local:
      "Inca es el corazón del Raiguer, con tradición del calzado y la piel, mercado semanal y un comercio de proximidad muy activo.",
    angle:
      "Las búsquedas son sobre todo de cercanía («cerca de mí»): optimizar Maps, horarios y reseñas pesa más que cualquier otra acción.",
    languages: ["Español", "Catalán"],
    near: ["alcudia", "pollenca", "marratxi", "soller"],
  },
  {
    slug: "alcudia",
    name: "Alcúdia",
    kind: "municipio",
    parent: "mallorca",
    sectors: [
      "Hoteles y apartamentos",
      "Restauración",
      "Alquiler vacacional",
      "Actividades y ocio",
      "Comercio turístico",
    ],
    local:
      "Alcúdia y su bahía reciben visitantes durante buena parte del año, con casco antiguo, playa y mucho turismo familiar europeo.",
    angle:
      "La reserva directa es la gran oportunidad: web propia en varios idiomas para depender menos de plataformas y sus comisiones.",
    languages: ["Español", "Inglés", "Alemán", "Catalán"],
    near: ["pollenca", "inca", "arta"],
  },
  {
    slug: "pollenca",
    name: "Pollença",
    kind: "municipio",
    parent: "mallorca",
    sectors: [
      "Hoteles boutique",
      "Gastronomía",
      "Arte y cultura",
      "Náutica",
      "Alquiler vacacional",
    ],
    local:
      "Pollença y Port de Pollença atraen a un viajero que valora el entorno, la gastronomía y las propuestas con carácter.",
    angle:
      "Un visitante que busca experiencias premium compara mucho antes de reservar: la web y las reseñas tienen que transmitir confianza desde el primer scroll.",
    languages: ["Español", "Inglés", "Alemán", "Catalán"],
    near: ["alcudia", "inca", "soller"],
  },
  {
    slug: "soller",
    name: "Sóller",
    kind: "municipio",
    parent: "mallorca",
    sectors: [
      "Turismo rural y hoteles",
      "Gastronomía",
      "Producto local (naranja, aceite)",
      "Excursiones",
      "Comercio",
    ],
    local:
      "Sóller y su valle, con el puerto, el tren histórico y la Serra de Tramuntana, atraen a un viajero que organiza su visita con antelación.",
    angle:
      "Es un destino de búsqueda por experiencias: contenido útil (rutas, dónde comer, cómo llegar) bien estructurado se cita mucho en buscadores y en respuestas de IA.",
    languages: ["Español", "Inglés", "Alemán", "Francés", "Catalán"],
    near: ["pollenca", "andratx", "inca"],
  },
  {
    slug: "llucmajor",
    name: "Llucmajor",
    kind: "municipio",
    parent: "mallorca",
    sectors: [
      "Calzado",
      "Agricultura",
      "Turismo de S'Arenal y Cala Blava",
      "Comercio",
      "Servicios",
    ],
    local:
      "Llucmajor tiene un término enorme: del interior agrícola a S'Arenal, con mucho tejido pyme y comercio de pueblo.",
    angle:
      "Al abarcar zonas muy distintas, conviene una web con páginas por zona o servicio para aparecer en cada búsqueda concreta.",
    languages: ["Español", "Catalán", "Alemán", "Inglés"],
    near: ["palma", "campos", "santanyi"],
  },
  {
    slug: "marratxi",
    name: "Marratxí",
    kind: "municipio",
    parent: "mallorca",
    sectors: [
      "Logística y comercio",
      "Cerámica y artesanía",
      "Servicios profesionales",
      "Construcción",
      "Hostelería",
    ],
    local:
      "Pegado a Palma y con polígonos muy activos, Marratxí concentra empresas de servicios, distribución y artesanía de barro.",
    angle:
      "Muchos clientes de la zona buscan «en Palma» y no «en Marratxí»: la web debe cubrir ambas búsquedas sin confundir a Google.",
    languages: ["Español", "Catalán"],
    near: ["palma", "inca"],
  },
  {
    slug: "andratx",
    name: "Andratx",
    kind: "municipio",
    parent: "mallorca",
    sectors: ["Náutica y puertos", "Hoteles y villas", "Gastronomía", "Inmobiliario", "Comercio"],
    local:
      "Andratx, Port d'Andratx y Sant Elm reúnen náutica, villas y restauración de alto nivel, con residentes internacionales.",
    angle:
      "El cliente internacional busca en inglés y alemán y pregunta a asistentes de IA: hay que dejarles datos claros, precios y reseñas fáciles de citar.",
    languages: ["Español", "Inglés", "Alemán", "Catalán"],
    near: ["calvia", "palma", "soller"],
  },
  {
    slug: "santanyi",
    name: "Santanyí",
    kind: "municipio",
    parent: "mallorca",
    sectors: [
      "Turismo y alojamiento",
      "Gastronomía",
      "Mercado y artesanía",
      "Alquiler vacacional",
      "Comercio",
    ],
    local:
      "Santanyí, Cala d'Or o Cala Figuera suman playas, casco histórico y un turismo que repite año tras año.",
    angle:
      "El turista repetidor busca la marca directa: cuidar el posicionamiento de tu nombre y la ficha de Google convierte recuerdos en reservas.",
    languages: ["Español", "Inglés", "Alemán", "Catalán"],
    near: ["felanitx", "campos", "manacor"],
  },
  {
    slug: "felanitx",
    name: "Felanitx",
    kind: "municipio",
    parent: "mallorca",
    sectors: ["Vino y agroalimentario", "Cerámica", "Turismo rural", "Comercio", "Servicios"],
    local:
      "Felanitx tiene tradición vitivinícola y alfarera, y una costa con Portocolom que atrae turismo tranquilo.",
    angle:
      "Bodegas y producto local ganan mucho con contenido propio y fichas bien trabajadas: la IA recomienda lo que está bien explicado.",
    languages: ["Español", "Catalán", "Inglés", "Alemán"],
    near: ["manacor", "santanyi", "campos"],
  },
  {
    slug: "capdepera",
    name: "Capdepera",
    kind: "municipio",
    parent: "mallorca",
    sectors: [
      "Hoteles",
      "Restauración",
      "Ocio y excursiones",
      "Alquiler vacacional",
      "Comercio turístico",
    ],
    local:
      "Cala Rajada y Capdepera concentran un turismo muy europeo, con fuerte presencia alemana y británica.",
    angle:
      "Aquí la competencia se juega en alemán e inglés: una web bien traducida (no en automático) marca la diferencia.",
    languages: ["Español", "Alemán", "Inglés", "Catalán"],
    near: ["arta", "manacor"],
  },
  {
    slug: "arta",
    name: "Artà",
    kind: "municipio",
    parent: "mallorca",
    sectors: [
      "Turismo rural y activo",
      "Gastronomía",
      "Cultura y patrimonio",
      "Agroalimentario",
      "Alojamiento",
    ],
    local:
      "Artà, con su casco antiguo y la naturaleza de la zona, atrae a un viajero de turismo tranquilo y de experiencias.",
    angle:
      "El turismo de naturaleza se decide por contenido y reseñas: guías, rutas y respuestas claras te posicionan frente a portales grandes.",
    languages: ["Español", "Catalán", "Alemán", "Inglés"],
    near: ["capdepera", "manacor", "alcudia"],
  },
  {
    slug: "campos",
    name: "Campos",
    kind: "municipio",
    parent: "mallorca",
    sectors: [
      "Agricultura y producto local",
      "Turismo rural",
      "Comercio",
      "Alojamiento",
      "Servicios",
    ],
    local: "Campos y Es Trenc reúnen campo, sal y playa, con un turismo que busca autenticidad.",
    angle:
      "Producto de proximidad y agroturismo funcionan muy bien con una web simple, rápida y contenido que cuente el origen.",
    languages: ["Español", "Catalán", "Alemán", "Inglés"],
    near: ["santanyi", "llucmajor", "felanitx"],
  },
  /* --------------------------------------------------- Menorca / Ibiza / Form. */
  {
    slug: "menorca",
    name: "Menorca",
    kind: "isla",
    parent: "illes-balears",
    sectors: [
      "Turismo y hoteles",
      "Calzado y bisutería",
      "Quesos y producto local",
      "Náutica",
      "Alquiler vacacional",
    ],
    local:
      "Menorca, Reserva de la Biosfera, apuesta por un turismo más pausado y por el producto propio, como el queso o el calzado.",
    angle:
      "Con un visitante que planifica y compara, la web debe contar con claridad qué te hace distinto y facilitar la reserva directa.",
    languages: ["Español", "Catalán", "Inglés", "Alemán"],
    near: ["mahon", "ciutadella", "mallorca"],
  },
  {
    slug: "mahon",
    name: "Maó",
    kind: "municipio",
    parent: "menorca",
    sectors: ["Puerto y náutica", "Servicios", "Comercio", "Gastronomía", "Administración"],
    local:
      "Maó es la capital de Menorca, con uno de los puertos naturales más grandes del Mediterráneo y la actividad administrativa de la isla.",
    angle:
      "Al ser la capital, aquí compiten servicios profesionales y comercio de todo tipo: conviene diferenciarse con ficha de Google y reseñas.",
    languages: ["Español", "Catalán", "Inglés"],
    near: ["ciutadella", "menorca"],
  },
  {
    slug: "ciutadella",
    name: "Ciutadella",
    kind: "municipio",
    parent: "menorca",
    sectors: ["Turismo y hoteles", "Gastronomía", "Náutica", "Comercio", "Eventos y fiestas"],
    local:
      "Ciutadella, con su casco histórico y su puerto, combina turismo de calidad y una vida local con mucha tradición.",
    angle:
      "Las búsquedas de restaurantes, alojamiento y experiencias son muy estacionales: preparar el posicionamiento antes de la temporada es clave.",
    languages: ["Español", "Catalán", "Inglés", "Alemán"],
    near: ["mahon", "menorca"],
  },
  {
    slug: "ibiza",
    name: "Ibiza",
    kind: "isla",
    parent: "illes-balears",
    sectors: ["Ocio y música", "Hoteles y villas", "Restauración", "Inmobiliario", "Náutica"],
    local:
      "Ibiza es marca global: ocio, música, lujo y también una población residente que vive todo el año de servicios y comercio.",
    angle:
      "En Ibiza se compite en inglés y con estética cuidada: una web a medida, rápida y visualmente fuerte es el primer filtro del cliente.",
    languages: ["Español", "Inglés", "Catalán", "Italiano", "Alemán"],
    near: ["formentera", "mallorca"],
  },
  {
    slug: "formentera",
    name: "Formentera",
    kind: "isla",
    parent: "illes-balears",
    sectors: [
      "Alojamiento",
      "Gastronomía",
      "Alquiler de vehículos y náutica",
      "Turismo activo",
      "Comercio",
    ],
    local:
      "Formentera es un destino muy concentrado en pocos meses, con un visitante que reserva por internet casi todo.",
    angle:
      "Con una ventana de temporada corta, cada visita a tu web cuenta: velocidad, claridad y reserva en pocos pasos.",
    languages: ["Español", "Inglés", "Italiano", "Francés"],
    near: ["ibiza"],
  },

  /* ----------------------------------------------------------- Comunidades */
  {
    slug: "illes-balears",
    name: "Illes Balears",
    kind: "ccaa",
    sectors: ["Turismo", "Servicios", "Náutica", "Inmobiliario", "Comercio y hostelería"],
    local:
      "Somos de aquí: llevamos desde 1997 comunicando empresas de las Illes Balears en revistas, radio, televisión y ahora en internet y en la IA.",
    angle:
      "En Baleares hay que trabajar la web en varios idiomas y entender la estacionalidad: se prepara el posicionamiento en invierno para cobrar en verano.",
    languages: ["Español", "Catalán", "Inglés", "Alemán"],
    near: ["mallorca", "menorca", "ibiza"],
  },
  {
    slug: "andalucia",
    name: "Andalucía",
    kind: "ccaa",
    sectors: [
      "Turismo",
      "Agroalimentario (aceite, vino)",
      "Comercio",
      "Servicios profesionales",
      "Eventos y cultura",
    ],
    local:
      "Andalucía suma ocho provincias con economías muy distintas: de la Costa del Sol al olivar, del turismo cultural a la agroindustria.",
    angle:
      "Cada provincia busca distinto: no es lo mismo posicionar un hotel en Málaga que una almazara en Jaén. Planteamos el SEO por zona y por sector.",
    near: ["sevilla", "malaga", "granada", "cordoba", "cadiz", "almeria", "huelva", "jaen"],
  },
  {
    slug: "aragon",
    name: "Aragón",
    kind: "ccaa",
    sectors: ["Logística", "Agroalimentario", "Industria", "Turismo de montaña", "Servicios"],
    local:
      "Aragón combina el polo logístico de Zaragoza con el turismo de montaña del Pirineo y un fuerte tejido agroalimentario.",
    angle:
      "Hay empresa industrial y logística que vende B2B: la web debe explicar capacidades, certificaciones y facilitar el contacto comercial.",
    near: ["zaragoza"],
  },
  {
    slug: "asturias",
    name: "Asturias",
    kind: "ccaa",
    sectors: [
      "Turismo rural y de costa",
      "Gastronomía",
      "Industria",
      "Sidra y lácteos",
      "Servicios",
    ],
    local:
      "Asturias tiene turismo de naturaleza y gastronomía, junto a una base industrial histórica en la que se mezclan pyme familiar y empresa técnica.",
    angle:
      "El turismo rural y de naturaleza se decide por reseñas y contenido útil: rutas, qué hacer y dónde comer posicionan mejor que cualquier anuncio.",
    near: ["oviedo", "gijon"],
  },
  {
    slug: "canarias",
    name: "Canarias",
    kind: "ccaa",
    sectors: [
      "Turismo",
      "Alquiler vacacional",
      "Comercio",
      "Agricultura",
      "Servicios y nómadas digitales",
    ],
    local:
      "Canarias vive del turismo durante todo el año, con un perfil de visitante y de residente internacional muy marcado.",
    angle:
      "Al no tener la estacionalidad de otras zonas, el posicionamiento rinde todo el año: la web bien trabajada es un activo continuo.",
    languages: ["Español", "Inglés", "Alemán"],
    near: ["las-palmas-de-gran-canaria", "santa-cruz-de-tenerife"],
  },
  {
    slug: "cantabria",
    name: "Cantabria",
    kind: "ccaa",
    sectors: ["Turismo", "Industria alimentaria", "Hostelería", "Servicios", "Náutica"],
    local:
      "Cantabria mezcla turismo de costa y montaña con una industria alimentaria muy reconocida y una fuerte hostelería.",
    angle:
      "El turismo nacional pesa mucho: las búsquedas son en español y por experiencia concreta, así que el contenido local es la clave.",
    near: ["santander"],
  },
  {
    slug: "castilla-y-leon",
    name: "Castilla y León",
    kind: "ccaa",
    sectors: ["Agroalimentario y vino", "Turismo cultural", "Industria", "Servicios", "Educación"],
    local:
      "La comunidad más extensa de España reúne patrimonio histórico, vino, agroindustria y universidades.",
    angle:
      "Con núcleos separados por muchos kilómetros, la presencia online sustituye al paso de gente: una buena web y ficha amplían el radio de clientes.",
    near: ["valladolid", "burgos", "salamanca", "leon"],
  },
  {
    slug: "castilla-la-mancha",
    name: "Castilla-La Mancha",
    kind: "ccaa",
    sectors: ["Agroalimentario y vino", "Industria", "Turismo cultural", "Servicios", "Comercio"],
    local:
      "Castilla-La Mancha es tierra de vino, queso y cultivo, con ciudades históricas y una cercanía enorme a Madrid.",
    angle:
      "Muchas empresas venden a toda España desde pueblos pequeños: una web rápida con tienda online o catálogo B2B ensancha su mercado.",
    near: ["toledo", "albacete", "ciudad-real"],
  },
  {
    slug: "cataluna",
    name: "Cataluña",
    kind: "ccaa",
    sectors: ["Industria", "Turismo", "Servicios y tecnología", "Comercio", "Agroalimentario"],
    local:
      "Cataluña es un mercado grande, competitivo y bilingüe, con mucha pyme exportadora y un ecosistema tecnológico potente.",
    angle:
      "Las búsquedas se reparten entre catalán y castellano: tener la web en ambos idiomas, bien enlazados con hreflang, duplica las oportunidades.",
    languages: ["Catalán", "Español", "Inglés"],
    near: ["barcelona", "tarragona", "girona", "lleida"],
  },
  {
    slug: "comunidad-valenciana",
    name: "Comunidad Valenciana",
    kind: "ccaa",
    sectors: [
      "Industria (cerámica, textil, juguete)",
      "Naranja y agroalimentario",
      "Turismo",
      "Logística y puerto",
      "Comercio",
    ],
    local:
      "La Comunidad Valenciana mezcla industria exportadora, agroalimentario, turismo de costa y un puerto de peso internacional.",
    angle:
      "Hay mucho comercio y turismo con residente extranjero: webs en valenciano, castellano e inglés atienden a toda la demanda.",
    languages: ["Español", "Valenciano", "Inglés"],
    near: ["valencia", "alicante", "elche", "castellon"],
  },
  {
    slug: "extremadura",
    name: "Extremadura",
    kind: "ccaa",
    sectors: [
      "Agroalimentario (ibérico, aceite)",
      "Turismo cultural y rural",
      "Servicios",
      "Comercio",
      "Energía",
    ],
    local:
      "Extremadura produce algunos de los alimentos más apreciados de España y conserva un patrimonio histórico muy vistoso.",
    angle:
      "El producto de calidad necesita web con historia y tienda online: llegar al comprador final sin intermediarios mejora márgenes.",
    near: ["badajoz", "caceres"],
  },
  {
    slug: "galicia",
    name: "Galicia",
    kind: "ccaa",
    sectors: [
      "Pesca y conservas",
      "Agroalimentario y vino",
      "Industria y automoción",
      "Turismo",
      "Servicios",
    ],
    local:
      "Galicia reúne una potente industria del mar, vino de calidad, automoción y un turismo ligado al Camino de Santiago.",
    angle:
      "Hay búsquedas en gallego y en castellano, además de mucho público internacional por el Camino: la web debe pensarse para varios públicos.",
    languages: ["Español", "Gallego", "Inglés"],
    near: ["vigo", "a-coruna"],
  },
  {
    slug: "la-rioja",
    name: "La Rioja",
    kind: "ccaa",
    sectors: ["Vino y enoturismo", "Agroalimentario", "Calzado", "Servicios", "Hostelería"],
    local:
      "La Rioja es una de las grandes regiones del vino, con bodegas, enoturismo y una gastronomía muy reconocible.",
    angle:
      "El enoturismo vive de reservas online y de contenido: visitas, catas y alojamiento bien explicados se posicionan por encima de portales genéricos.",
    near: ["logrono"],
  },
  {
    slug: "comunidad-de-madrid",
    name: "Comunidad de Madrid",
    kind: "ccaa",
    sectors: ["Servicios profesionales", "Tecnología", "Comercio", "Salud", "Educación"],
    local:
      "La Comunidad de Madrid es el mercado más grande y competitivo del país, con servicios profesionales, tecnología y comercio de todos los tamaños.",
    angle:
      "En un mercado tan saturado el SEO tiene que ser muy específico: barrio, especialidad y propuesta de valor, no solo «empresa de X en Madrid».",
    near: ["madrid"],
  },
  {
    slug: "region-de-murcia",
    name: "Región de Murcia",
    kind: "ccaa",
    sectors: [
      "Agroalimentario (huerta, conserva)",
      "Turismo (Mar Menor, Costa Cálida)",
      "Industria",
      "Servicios",
      "Comercio",
    ],
    local:
      "La Región de Murcia es una potencia hortofrutícola y conservera, con una costa y el Mar Menor como grandes atractivos.",
    angle:
      "Empresas agroalimentarias que venden a distribuidor y a cliente final ganan con web B2B y B2C bien separadas.",
    near: ["murcia", "cartagena"],
  },
  {
    slug: "navarra",
    name: "Navarra",
    kind: "ccaa",
    sectors: [
      "Industria y automoción",
      "Agroalimentario",
      "Energías renovables",
      "Turismo",
      "Servicios",
    ],
    local:
      "Navarra tiene un tejido industrial y tecnológico fuerte, vino, productos de huerta y un turismo ligado a Pamplona y al Camino.",
    angle:
      "Con mucha empresa B2B, la web comercial importa más que el volumen de visitas: casos, certificaciones y formularios de contacto efectivos.",
    languages: ["Español", "Euskera"],
    near: ["pamplona"],
  },
  {
    slug: "pais-vasco",
    name: "País Vasco",
    kind: "ccaa",
    sectors: [
      "Industria avanzada",
      "Gastronomía",
      "Servicios y consultoría",
      "Turismo",
      "Tecnología",
    ],
    local:
      "El País Vasco aúna industria avanzada, gastronomía de fama mundial y un tejido de consultoría y servicios muy profesionalizado.",
    angle:
      "Las búsquedas se reparten entre euskera y castellano; la web bilingüe bien estructurada mejora la visibilidad y la confianza local.",
    languages: ["Español", "Euskera", "Inglés"],
    near: ["bilbao", "san-sebastian", "vitoria-gasteiz"],
  },
  {
    slug: "ceuta",
    name: "Ceuta",
    kind: "ccaa",
    sectors: [
      "Comercio",
      "Servicios portuarios",
      "Administración",
      "Hostelería",
      "Servicios profesionales",
    ],
    local:
      "Ceuta es una ciudad autónoma con puerto y un comercio muy dinámico por su situación geográfica.",
    angle:
      "En un mercado local pequeño, aparecer en Google Maps y tener una ficha cuidada decide quién recibe las llamadas.",
    languages: ["Español", "Árabe"],
  },
  {
    slug: "melilla",
    name: "Melilla",
    kind: "ccaa",
    sectors: [
      "Comercio",
      "Servicios portuarios",
      "Administración",
      "Hostelería",
      "Servicios profesionales",
    ],
    local:
      "Melilla es una ciudad autónoma con comercio activo y un mercado pequeño donde la reputación local lo es todo.",
    angle:
      "Con pocos competidores directos en Google, una web bien hecha y una ficha completa te colocan arriba rápido.",
    languages: ["Español", "Árabe", "Tamazight"],
  },

  /* --------------------------------------------------------------- Ciudades */
  {
    slug: "madrid",
    name: "Madrid",
    kind: "ciudad",
    parent: "comunidad-de-madrid",
    sectors: [
      "Servicios profesionales",
      "Tecnología y startups",
      "Salud privada",
      "Comercio y moda",
      "Educación",
    ],
    local:
      "Madrid concentra sedes de empresas, startups y despachos; cada barrio funciona como un mercado propio.",
    angle:
      "El SEO de Madrid se gana por nicho y por zona (Salamanca, Chamberí, Chamartín…), no por la palabra genérica.",
    near: ["toledo", "valladolid"],
  },
  {
    slug: "barcelona",
    name: "Barcelona",
    kind: "ciudad",
    parent: "cataluna",
    sectors: [
      "Turismo y hostelería",
      "Tecnología y startups",
      "Moda y diseño",
      "Servicios profesionales",
      "Salud",
    ],
    local:
      "Barcelona es una ciudad global con turismo, ferias, startups y un comercio de barrio muy vivo.",
    angle:
      "Hay dos mercados: el de residentes (catalán y castellano) y el internacional (inglés y otros). La web debe atender a los dos.",
    languages: ["Catalán", "Español", "Inglés"],
    near: ["girona", "tarragona"],
  },
  {
    slug: "valencia",
    name: "Valencia",
    kind: "ciudad",
    parent: "comunidad-valenciana",
    sectors: [
      "Turismo",
      "Logística y puerto",
      "Servicios profesionales",
      "Tecnología",
      "Hostelería",
    ],
    local:
      "Valencia crece como destino turístico y como ciudad para trabajar en remoto, con puerto, ferias y comercio.",
    angle:
      "El residente extranjero y el nómada digital buscan en inglés: aparecer ante ellos exige web bilingüe y reseñas recientes.",
    languages: ["Español", "Valenciano", "Inglés"],
    near: ["castellon", "alicante"],
  },
  {
    slug: "sevilla",
    name: "Sevilla",
    kind: "ciudad",
    parent: "andalucia",
    sectors: [
      "Turismo y eventos",
      "Servicios profesionales",
      "Aeronáutica",
      "Comercio",
      "Hostelería",
    ],
    local:
      "Sevilla vive de turismo, eventos y servicios, con una industria aeronáutica relevante y un comercio con mucha tradición.",
    angle:
      "Muchas búsquedas dependen de temporada y eventos: conviene tener contenido preparado antes de cada pico de demanda.",
    near: ["cordoba", "cadiz", "huelva"],
  },
  {
    slug: "zaragoza",
    name: "Zaragoza",
    kind: "ciudad",
    parent: "aragon",
    sectors: ["Logística", "Industria", "Servicios profesionales", "Comercio", "Automoción"],
    local:
      "Zaragoza es un nudo logístico entre Madrid, Barcelona, Valencia y Bilbao, con industria y servicios consolidados.",
    angle:
      "El cliente B2B busca proveedores por capacidad y servicio: páginas de servicio específicas atraen a quien decide compras.",
    near: ["pamplona", "logrono"],
  },
  {
    slug: "malaga",
    name: "Málaga",
    kind: "ciudad",
    parent: "andalucia",
    sectors: [
      "Turismo",
      "Tecnología y startups",
      "Inmobiliario",
      "Hostelería",
      "Servicios para extranjeros",
    ],
    local:
      "Málaga ha pasado de la Costa del Sol clásica a un polo de tecnología y cultura, con una comunidad internacional enorme.",
    angle:
      "La clientela extranjera y el nómada digital preguntan a la IA: te interesa que ChatGPT y Gemini hablen bien de tu negocio en inglés.",
    languages: ["Español", "Inglés", "Alemán", "Francés"],
    near: ["granada", "sevilla", "cadiz"],
  },
  {
    slug: "murcia",
    name: "Murcia",
    kind: "ciudad",
    parent: "region-de-murcia",
    sectors: ["Agroalimentario", "Servicios", "Comercio", "Salud y universidad", "Hostelería"],
    local:
      "Murcia es capital regional con universidad, hospitales y un comercio muy ligado al sector agroalimentario.",
    angle:
      "Empresas de servicios a empresas agrícolas y particulares comparten ciudad: separar bien los mensajes mejora los resultados.",
    near: ["cartagena", "alicante", "albacete"],
  },
  {
    slug: "bilbao",
    name: "Bilbao",
    kind: "ciudad",
    parent: "pais-vasco",
    sectors: [
      "Industria y servicios avanzados",
      "Turismo y cultura",
      "Finanzas",
      "Gastronomía",
      "Salud",
    ],
    local:
      "Bilbao tiene un tejido de servicios avanzados, finanzas e industria, y una oferta cultural y gastronómica de primer nivel.",
    angle:
      "El cliente es exigente y compara: la web debe transmitir profesionalidad y dar respuestas concretas antes de la primera llamada.",
    languages: ["Español", "Euskera", "Inglés"],
    near: ["san-sebastian", "vitoria-gasteiz", "santander"],
  },
  {
    slug: "alicante",
    name: "Alicante",
    kind: "ciudad",
    parent: "comunidad-valenciana",
    sectors: [
      "Turismo",
      "Inmobiliario",
      "Comercio",
      "Hostelería",
      "Servicios para residentes extranjeros",
    ],
    local: "Alicante y su costa tienen una gran población extranjera residente y turismo continuo.",
    angle:
      "Servicios en inglés, alemán, francés y neerlandés atraen a un cliente con alto poder de compra y poca oferta bien posicionada.",
    languages: ["Español", "Valenciano", "Inglés", "Alemán", "Francés"],
    near: ["elche", "murcia", "valencia"],
  },
  {
    slug: "cordoba",
    name: "Córdoba",
    kind: "ciudad",
    parent: "andalucia",
    sectors: [
      "Turismo cultural",
      "Agroalimentario (aceite, vino)",
      "Comercio",
      "Hostelería",
      "Servicios profesionales",
    ],
    local:
      "Córdoba combina un turismo patrimonial muy fuerte con una base agroalimentaria de aceite y vinos de Montilla-Moriles.",
    angle:
      "Hostelería, patios y experiencias se buscan en español e inglés: contenido útil y fotografía propia marcan la diferencia en resultados e IA.",
    near: ["sevilla", "granada", "jaen"],
  },
  {
    slug: "valladolid",
    name: "Valladolid",
    kind: "ciudad",
    parent: "castilla-y-leon",
    sectors: [
      "Automoción e industria",
      "Agroalimentario",
      "Servicios profesionales",
      "Educación",
      "Comercio",
    ],
    local:
      "Valladolid es capital de Castilla y León, con industria de automoción, universidad y servicios.",
    angle:
      "La proximidad con Madrid hace que la competencia llegue de fuera: una web sólida y reseñas locales dan ventaja de cercanía.",
    near: ["burgos", "leon", "salamanca"],
  },
  {
    slug: "vigo",
    name: "Vigo",
    kind: "ciudad",
    parent: "galicia",
    sectors: ["Pesca y conservas", "Automoción", "Puerto y logística", "Comercio", "Servicios"],
    local:
      "Vigo es la ciudad más poblada de Galicia, con un puerto potente, automoción y una industria del mar de primer nivel.",
    angle:
      "El cliente profesional busca proveedores y servicios por ficha y por web: ser visible en Google y en la IA acorta ciclos de venta.",
    languages: ["Español", "Gallego"],
    near: ["a-coruna"],
  },
  {
    slug: "gijon",
    name: "Gijón",
    kind: "ciudad",
    parent: "asturias",
    sectors: ["Industria y puerto", "Turismo y hostelería", "Comercio", "Servicios", "Tecnología"],
    local:
      "Gijón combina puerto, industria, playa urbana y una vida de comercio y hostelería muy activa.",
    angle:
      "Las búsquedas de ocio y gastronomía se hacen desde móvil y en el momento: ficha de Google, horarios y fotos actualizadas son decisivos.",
    near: ["oviedo", "santander"],
  },
  {
    slug: "a-coruna",
    name: "A Coruña",
    kind: "ciudad",
    parent: "galicia",
    sectors: ["Comercio y moda", "Servicios profesionales", "Tecnología", "Puerto", "Hostelería"],
    local:
      "A Coruña es sede de grandes empresas de moda y retail y cuenta con servicios profesionales muy desarrollados.",
    angle:
      "El comercio local compite con grandes marcas: web y SEO local ayudan a captar al cliente de barrio que busca cerca.",
    languages: ["Español", "Gallego"],
    near: ["vigo"],
  },
  {
    slug: "granada",
    name: "Granada",
    kind: "ciudad",
    parent: "andalucia",
    sectors: ["Turismo", "Universidad y educación", "Hostelería", "Comercio", "Servicios"],
    local:
      "Granada tiene un turismo patrimonial constante y una población estudiantil grande que busca servicios cada curso.",
    angle:
      "El público estudiante y el turista usan el móvil para todo: webs rápidas, claras y con reseñas recientes captan su atención.",
    near: ["malaga", "jaen", "almeria"],
  },
  {
    slug: "vitoria-gasteiz",
    name: "Vitoria-Gasteiz",
    kind: "ciudad",
    parent: "pais-vasco",
    sectors: ["Industria", "Automoción", "Servicios", "Administración", "Comercio"],
    local:
      "Vitoria-Gasteiz es capital del País Vasco, con industria, administración y un comercio de proximidad.",
    angle:
      "El B2B industrial vende por confianza: casos, certificaciones y respuestas claras en la web acortan decisiones.",
    languages: ["Español", "Euskera"],
    near: ["bilbao", "pamplona", "logrono"],
  },
  {
    slug: "elche",
    name: "Elche",
    kind: "ciudad",
    parent: "comunidad-valenciana",
    sectors: ["Calzado", "Industria", "Comercio", "Servicios", "Turismo"],
    local:
      "Elche destaca por su industria del calzado, sus palmerales declaradas patrimonio y un comercio muy dinámico.",
    angle:
      "El calzado exporta: una tienda online y web multi-idioma abre mercados sin depender de intermediarios.",
    languages: ["Español", "Valenciano", "Inglés"],
    near: ["alicante", "murcia"],
  },
  {
    slug: "oviedo",
    name: "Oviedo",
    kind: "ciudad",
    parent: "asturias",
    sectors: ["Administración y servicios", "Comercio", "Gastronomía", "Salud", "Turismo cultural"],
    local:
      "Oviedo es la capital de Asturias, con servicios, administración y una oferta gastronómica reconocida.",
    angle:
      "Los despachos y consultorías compiten por confianza: casos reales, equipo y respuestas concretas posicionan mejor que textos genéricos.",
    near: ["gijon", "santander", "leon"],
  },
  {
    slug: "santa-cruz-de-tenerife",
    name: "Santa Cruz de Tenerife",
    kind: "ciudad",
    parent: "canarias",
    sectors: ["Comercio", "Servicios", "Turismo en la isla", "Puerto", "Alquiler vacacional"],
    local:
      "Santa Cruz es la capital administrativa de Tenerife, isla con un turismo estable durante todo el año.",
    angle:
      "El visitante internacional compara en inglés y alemán antes de llegar: la web debe estar lista para esos mercados.",
    languages: ["Español", "Inglés", "Alemán"],
    near: ["las-palmas-de-gran-canaria"],
  },
  {
    slug: "las-palmas-de-gran-canaria",
    name: "Las Palmas de Gran Canaria",
    kind: "ciudad",
    parent: "canarias",
    sectors: [
      "Puerto y logística",
      "Turismo",
      "Servicios",
      "Comercio",
      "Tecnología y nómadas digitales",
    ],
    local:
      "Las Palmas es la ciudad más poblada de Canarias, con un puerto clave y una comunidad creciente de profesionales remotos.",
    angle:
      "Servicios para residentes e internacionales se buscan en español e inglés: contenido propio y reseñas recientes ganan clientela.",
    languages: ["Español", "Inglés"],
    near: ["santa-cruz-de-tenerife"],
  },
  {
    slug: "pamplona",
    name: "Pamplona",
    kind: "ciudad",
    parent: "navarra",
    sectors: ["Industria", "Servicios", "Turismo y fiestas", "Salud", "Comercio"],
    local:
      "Pamplona combina empresa industrial, universidades y un turismo muy marcado por San Fermín.",
    angle:
      "Hostelería y comercio concentran buena parte de su demanda en fechas muy concretas: planificar el posicionamiento antes es lo que da resultado.",
    languages: ["Español", "Euskera"],
    near: ["vitoria-gasteiz", "logrono", "zaragoza"],
  },
  {
    slug: "santander",
    name: "Santander",
    kind: "ciudad",
    parent: "cantabria",
    sectors: ["Servicios", "Turismo", "Hostelería", "Comercio", "Sector financiero"],
    local:
      "Santander es la capital cántabra, con turismo de verano, servicios financieros y un comercio de centro muy activo.",
    angle:
      "En verano llega mucho visitante nacional que busca desde el móvil: ficha de Maps y web veloz son lo primero que ve.",
    near: ["bilbao", "oviedo", "gijon"],
  },
  {
    slug: "san-sebastian",
    name: "San Sebastián",
    kind: "ciudad",
    parent: "pais-vasco",
    sectors: ["Gastronomía y hostelería", "Turismo", "Servicios", "Congresos", "Comercio"],
    local:
      "San Sebastián es sinónimo de gastronomía y turismo de calidad, con un calendario cultural intenso.",
    angle:
      "El público es internacional y exigente: una web a medida, fotografía cuidada y reseñas coherentes con el nivel del lugar.",
    languages: ["Español", "Euskera", "Inglés", "Francés"],
    near: ["bilbao", "pamplona"],
  },
  {
    slug: "logrono",
    name: "Logroño",
    kind: "ciudad",
    parent: "la-rioja",
    sectors: ["Vino y bodegas", "Gastronomía", "Servicios", "Comercio", "Turismo"],
    local:
      "Logroño es la capital riojana, con la calle del Laurel, bodegas en el entorno y un comercio local sólido.",
    angle:
      "Bodegas y restaurantes ganan con reservas online y fichas con fotos y carta actualizadas, que es lo que recomienda la IA.",
    near: ["pamplona", "vitoria-gasteiz", "burgos"],
  },
  {
    slug: "toledo",
    name: "Toledo",
    kind: "ciudad",
    parent: "castilla-la-mancha",
    sectors: ["Turismo cultural", "Artesanía", "Hostelería", "Comercio", "Servicios"],
    local:
      "Toledo vive del turismo patrimonial, con visitantes que llegan en tren o en excursión desde Madrid.",
    angle:
      "Un visitante de un día decide en minutos: web rápida, horarios claros y reservas simples convierten más que cualquier campaña.",
    near: ["madrid", "ciudad-real"],
  },
  {
    slug: "badajoz",
    name: "Badajoz",
    kind: "ciudad",
    parent: "extremadura",
    sectors: ["Agroalimentario", "Comercio", "Servicios", "Logística", "Hostelería"],
    local:
      "Badajoz, junto a la frontera con Portugal, une comercio, agroindustria y servicios con clientela de ambos lados.",
    angle:
      "La clientela portuguesa abre la opción de una web en portugués para captar un mercado que casi nadie atiende bien.",
    languages: ["Español", "Portugués"],
    near: ["caceres"],
  },
  {
    slug: "caceres",
    name: "Cáceres",
    kind: "ciudad",
    parent: "extremadura",
    sectors: ["Turismo cultural", "Hostelería", "Agroalimentario", "Comercio", "Servicios"],
    local:
      "Cáceres tiene una ciudad monumental declarada Patrimonio Mundial y un turismo cultural muy estable.",
    angle:
      "El visitante cultural busca información detallada: contenido práctico bien estructurado posiciona mejor que portales genéricos.",
    near: ["badajoz", "salamanca"],
  },
  {
    slug: "burgos",
    name: "Burgos",
    kind: "ciudad",
    parent: "castilla-y-leon",
    sectors: [
      "Industria y agroalimentario",
      "Turismo cultural",
      "Hostelería",
      "Comercio",
      "Servicios",
    ],
    local:
      "Burgos mezcla industria, agroalimentario y un turismo vinculado a la catedral y al Camino de Santiago.",
    angle:
      "El peregrino y el turista planifican con móvil: contenido útil sobre alojamiento y comida atrae sin necesidad de publicidad.",
    near: ["valladolid", "leon", "logrono"],
  },
  {
    slug: "salamanca",
    name: "Salamanca",
    kind: "ciudad",
    parent: "castilla-y-leon",
    sectors: ["Educación y universidad", "Turismo cultural", "Hostelería", "Comercio", "Servicios"],
    local:
      "Salamanca gira en torno a su universidad y a un turismo cultural constante, con mucha demanda de estudiantes y familias.",
    angle:
      "Academias, alojamiento y servicios para estudiantes dependen de la visibilidad en septiembre: el SEO se prepara meses antes.",
    near: ["valladolid", "caceres"],
  },
  {
    slug: "leon",
    name: "León",
    kind: "ciudad",
    parent: "castilla-y-leon",
    sectors: [
      "Turismo y Camino de Santiago",
      "Hostelería",
      "Agroalimentario",
      "Servicios",
      "Comercio",
    ],
    local: "León es parada clave del Camino de Santiago, con una gastronomía de tapeo reconocida.",
    angle:
      "El peregrino internacional busca en inglés y alemán: una página bien traducida con alojamiento y servicios útiles capta reservas fuera de España.",
    languages: ["Español", "Inglés", "Alemán"],
    near: ["burgos", "valladolid", "oviedo"],
  },
  {
    slug: "tarragona",
    name: "Tarragona",
    kind: "ciudad",
    parent: "cataluna",
    sectors: ["Industria química y puerto", "Turismo", "Hostelería", "Comercio", "Servicios"],
    local:
      "Tarragona une un puerto e industria química importantes con un turismo de costa y un patrimonio romano único.",
    angle:
      "El turismo de costa y el B2B industrial conviven: separar los mensajes en la web mejora conversión de cada audiencia.",
    languages: ["Catalán", "Español", "Inglés"],
    near: ["barcelona", "lleida", "castellon"],
  },
  {
    slug: "girona",
    name: "Girona",
    kind: "ciudad",
    parent: "cataluna",
    sectors: ["Turismo (Costa Brava)", "Gastronomía", "Industria", "Servicios", "Comercio"],
    local:
      "Girona y la Costa Brava reciben mucho turismo europeo, con una gastronomía de referencia en la zona.",
    angle:
      "Con visitante francés, británico y alemán, la web en varios idiomas es una necesidad, no un extra.",
    languages: ["Catalán", "Español", "Francés", "Inglés"],
    near: ["barcelona"],
  },
  {
    slug: "lleida",
    name: "Lleida",
    kind: "ciudad",
    parent: "cataluna",
    sectors: [
      "Agroalimentario (fruta, cereal)",
      "Servicios agrícolas",
      "Comercio",
      "Educación",
      "Logística",
    ],
    local: "Lleida es capital agrícola de Cataluña, con fruta, cereal e industria asociada.",
    angle:
      "Las empresas de servicios al campo buscan clientes de toda la comarca: páginas de servicio por localidad les traen llamadas directas.",
    languages: ["Catalán", "Español"],
    near: ["tarragona", "zaragoza"],
  },
  {
    slug: "castellon",
    name: "Castellón de la Plana",
    kind: "ciudad",
    parent: "comunidad-valenciana",
    sectors: ["Cerámica y azulejo", "Puerto", "Turismo de costa", "Comercio", "Servicios"],
    local:
      "Castellón es uno de los mayores polos cerámicos de Europa, con un puerto activo y costa de turismo familiar.",
    angle:
      "Industria cerámica y proveedores venden en B2B internacional: web en inglés con catálogo claro y formulario de presupuesto.",
    languages: ["Español", "Valenciano", "Inglés"],
    near: ["valencia", "tarragona"],
  },
  {
    slug: "almeria",
    name: "Almería",
    kind: "ciudad",
    parent: "andalucia",
    sectors: ["Agricultura intensiva", "Servicios agrícolas", "Turismo", "Comercio", "Logística"],
    local:
      "Almería es sinónimo de agricultura bajo plástico y exportación hortofrutícola, con costa y desierto como reclamo turístico.",
    angle:
      "Las empresas de insumos, maquinaria y servicios agrícolas venden por referencias: ser visibles en Google y en la IA acorta el ciclo comercial.",
    near: ["granada", "malaga", "murcia"],
  },
  {
    slug: "cadiz",
    name: "Cádiz",
    kind: "ciudad",
    parent: "andalucia",
    sectors: ["Turismo", "Náutica y puerto", "Vino de Jerez", "Hostelería", "Comercio"],
    local:
      "Cádiz y su provincia combinan costa, puerto, vino de Jerez y turismo cultural y gastronómico.",
    angle:
      "Las bodegas y restaurantes de la zona se descubren por reseñas y por cómo los describe la IA: fichas completas y contenido propio pesan mucho.",
    near: ["sevilla", "malaga", "huelva"],
  },
  {
    slug: "marbella",
    name: "Marbella",
    kind: "ciudad",
    parent: "andalucia",
    sectors: [
      "Turismo de lujo",
      "Inmobiliario",
      "Golf y ocio",
      "Hostelería",
      "Servicios para residentes extranjeros",
    ],
    local:
      "Marbella es referencia de turismo de lujo y residencial internacional, con servicios muy especializados.",
    angle:
      "El cliente premium internacional mira primero la web y las reseñas: diseño a medida y varios idiomas elevan la percepción de marca.",
    languages: ["Español", "Inglés", "Alemán", "Francés", "Árabe"],
    near: ["malaga"],
  },
  {
    slug: "huelva",
    name: "Huelva",
    kind: "ciudad",
    parent: "andalucia",
    sectors: [
      "Agricultura (fresa, cítricos)",
      "Puerto e industria",
      "Turismo de costa",
      "Comercio",
      "Servicios",
    ],
    local:
      "Huelva destaca por la fresa y los frutos rojos, además de un puerto industrial y una costa tranquila.",
    angle:
      "Agroexportadoras necesitan webs en inglés y alemán para que sus clientes las encuentren directamente.",
    near: ["sevilla", "cadiz"],
  },
  {
    slug: "jaen",
    name: "Jaén",
    kind: "ciudad",
    parent: "andalucia",
    sectors: [
      "Aceite de oliva",
      "Agroalimentario",
      "Turismo de interior",
      "Servicios agrícolas",
      "Comercio",
    ],
    local:
      "Jaén es la capital mundial del aceite de oliva, con almazaras que cada vez abren al turismo y a la venta directa.",
    angle:
      "El aceite premium vende mejor con una tienda online y una historia contada con buen contenido; ahí la IA también recomienda.",
    near: ["granada", "cordoba"],
  },
  {
    slug: "albacete",
    name: "Albacete",
    kind: "ciudad",
    parent: "castilla-la-mancha",
    sectors: ["Cuchillería y metal", "Agroalimentario", "Comercio", "Logística", "Servicios"],
    local:
      "Albacete es un nudo logístico con industria del metal y la cuchillería y un comercio muy activo.",
    angle:
      "Los productos artesanos se venden mejor con web propia y tienda, sin depender solo de ferias o intermediarios.",
    near: ["murcia", "ciudad-real", "valencia"],
  },
  {
    slug: "ciudad-real",
    name: "Ciudad Real",
    kind: "ciudad",
    parent: "castilla-la-mancha",
    sectors: ["Vino y agroalimentario", "Servicios", "Energía", "Comercio", "Industria"],
    local:
      "Ciudad Real está en pleno corazón vinícola de La Mancha, con comercio y servicios en torno a su capital.",
    angle:
      "Las bodegas pequeñas pueden competir si cuentan bien su historia y facilitan comprar online o reservar visitas.",
    near: ["toledo", "albacete"],
  },
  {
    slug: "cartagena",
    name: "Cartagena",
    kind: "ciudad",
    parent: "region-de-murcia",
    sectors: ["Puerto y naval", "Industria", "Turismo", "Hostelería", "Comercio"],
    local:
      "Cartagena tiene un puerto estratégico, industria naval y energética y un patrimonio romano e histórico muy visitable.",
    angle:
      "El turismo de cruceros y de ciudad histórica busca experiencias y restaurantes con poco margen: la ficha de Google es el primer escaparate.",
    near: ["murcia", "alicante"],
  },
];

export const placeBySlug = (slug: string) => places.find((p) => p.slug === slug);

export const kindLabel: Record<PlaceKind, string> = {
  isla: "isla",
  municipio: "municipio",
  ccaa: "comunidad",
  ciudad: "ciudad",
};

/** Lugares que dependen de otro (municipios de una isla, ciudades de una comunidad). */
export const childrenOf = (slug: string) => places.filter((p) => p.parent === slug);

/** Preposición correcta: «en Mallorca», «en la Comunidad de Madrid», «en el País Vasco»… */
export const inPlace = (p: Place) => {
  const withArticle: Record<string, string> = {
    "comunidad-valenciana": "en la Comunidad Valenciana",
    "comunidad-de-madrid": "en la Comunidad de Madrid",
    "region-de-murcia": "en la Región de Murcia",
    "pais-vasco": "en el País Vasco",
    "la-rioja": "en La Rioja",
    "illes-balears": "en las Illes Balears",
    canarias: "en Canarias",
    "a-coruna": "en A Coruña",
  };
  return withArticle[p.slug] ?? `en ${p.name}`;
};
