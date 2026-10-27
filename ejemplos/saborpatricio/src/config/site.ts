/**
 * Datos del negocio. Todo lo que el cliente pueda querer cambiar vive aquí.
 */

export const site = {
  name: 'Sabor Patricio',
  tagline: 'Auténtica Empanada Argentina',
  founded: 2025,
  // TODO: cambiar por el dominio definitivo antes de publicar (también en astro.config.mjs)
  url: 'https://saborpatricio.com',
  phone: '+34 649 72 07 31',
  phoneRaw: '34649720731',
  instagram: 'saborpatricio',
  address: {
    street: 'Av. Joan Miró, 336',
    area: 'Cala Major',
    city: 'Palma de Mallorca',
    postalCode: '07015',
    region: 'Illes Balears',
    country: 'ES',
  },
  /**
   * Titular de la web (aviso legal, privacidad y cookies). Sabor Patricio es la marca comercial.
   * Pendiente: datos de inscripción en el Registro Mercantil.
   */
  legal: {
    company: 'Marfer Obrador SL',
    cif: 'B10645463',
    street: 'Carrer Son Julià, 7, nave 5 (Polígono Son Noguera)',
    postalCode: '07620',
    city: 'Llucmajor',
    region: 'Illes Balears',
    email: 'info@saborpatricio.com',
  },
  geo: { lat: 39.550975, lng: 2.5996066 },
  mapsUrl: 'https://maps.app.goo.gl/Vm3WYpSRKc8JbQHV7',
  reviewsUrl: 'https://maps.app.goo.gl/Vm3WYpSRKc8JbQHV7',
  /**
   * Horarios. day: 0 = domingo … 6 = sábado. Formato 24h "HH:MM".
   * Si un día no aparece, se muestra como cerrado.
   * Si la lista está vacía, la web invita a consultar por WhatsApp.
   * Horario publicado en el perfil de Instagram @saborpatricio.
   */
  hours: [
    { day: 1, open: '10:30', close: '22:30' },
    { day: 2, open: '10:30', close: '22:30' },
    { day: 3, open: '10:30', close: '22:30' },
    { day: 4, open: '10:30', close: '22:30' },
    { day: 5, open: '10:30', close: '23:30' },
    { day: 6, open: '10:30', close: '23:30' },
    { day: 0, open: '10:30', close: '23:00' },
  ] as { day: number; open: string; close: string }[],
};

export const waLink = (text?: string) =>
  `https://wa.me/${site.phoneRaw}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const telLink = `tel:+${site.phoneRaw}`;
export const igLink = `https://www.instagram.com/${site.instagram}/`;

export type Flavor = {
  id: string;
  name: string;
  tag: string;
  ingredients: string;
  color: string;
  spicy?: boolean;
  veggie?: boolean;
};

export const flavors: Flavor[] = [
  {
    id: 'criolla',
    name: 'Carne criolla',
    tag: 'La de siempre',
    ingredients: 'Carne picada, cebolla, huevo, pimiento rojo y aceitunas.',
    color: '#264d9c',
  },
  {
    id: 'picante',
    name: 'Carne picante',
    tag: 'Pica rico',
    ingredients: 'Carne picada, cebolla, huevo, pimiento rojo, aceitunas y salsa casera de habanero.',
    color: '#c8341f',
    spicy: true,
  },
  {
    id: 'pollo',
    name: 'Pollo suave',
    tag: 'La que repetís',
    ingredients: 'Pollo, cebolla, huevo y pimiento rojo.',
    color: '#d98a1c',
  },
  {
    id: 'caprese',
    name: 'Caprese',
    tag: 'Fresca',
    ingredients: 'Tomate, mozzarella y albahaca.',
    color: '#2f7d4f',
    veggie: true,
  },
  {
    id: 'cebolla',
    name: 'Cebolla y queso',
    tag: 'Puro queso',
    ingredients: 'Cebolla y mozzarella fundida.',
    color: '#6a4bb5',
    veggie: true,
  },
];

/**
 * Reseñas reales de Google. Copiar aquí textualmente (nombre + texto + estrellas).
 * Si está vacío, la sección muestra solo el botón a las reseñas de Google.
 */
export const reviews: { author: string; text: string; rating: number }[] = [];

/**
 * Carta (sin precios). Alimenta la home, /carta y los datos estructurados.
 * `name` es la pestaña de la home; `title` el encabezado completo de /carta y de schema.org.
 */
export type MenuItem = { name: string };
export const menu: { id: string; name: string; title: string; intro: string; items: MenuItem[] }[] = [
  {
    id: 'clasicas',
    title: 'Empanadas clásicas',
    name: 'Clásicas',
    intro: 'Las de siempre, con la receta de casa. Las que piden los que saben.',
    items: [
      { name: 'Carne criolla' },
      { name: 'Carne picante' },
      { name: 'Pollo suave' },
      { name: 'Pollo picante' },
      { name: 'Jamón y queso' },
      { name: 'Queso y cebolla' },
      { name: 'Atún' },
      { name: 'Caprese' },
      { name: 'Espinaca' },
      { name: 'Humita' },
    ],
  },
  {
    id: 'gourmet',
    title: 'Empanadas gourmet',
    name: 'Gourmet',
    intro: 'Rellenos con más carácter, para cuando querés algo distinto.',
    items: [
      { name: 'Carne a cuchillo' },
      { name: 'Barbacoa' },
      { name: 'Sobrasada' },
      { name: 'Vacío y provolone' },
      { name: 'Cheeseburger' },
    ],
  },
  {
    id: 'postres',
    title: 'Postres argentinos',
    name: 'Postres',
    intro: 'El cierre dulce que no puede faltar.',
    items: [
      { name: 'Chocotorta' },
      { name: 'Alfajores Havanna' },
      { name: 'Havanna de nuez' },
      { name: 'Havanna con sal' },
      { name: 'Havanna súper dulce de leche' },
    ],
  },
  {
    id: 'bebidas',
    title: 'Para acompañar',
    name: 'Para acompañar',
    intro: 'Algo fresco para completar el plan.',
    items: [{ name: 'Vino argentino' }, { name: 'Agua' }, { name: 'Agua con gas' }, { name: 'Refrescos' }, { name: 'Té frío' }],
  },
];

/** Formato que usan /carta y schema.org: encabezado completo y lista de nombres. */
export const productGroups = menu.map((g) => ({ name: g.title, intro: g.intro, items: g.items.map((i) => i.name) }));
