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

// Selección de productos publicada en Uber Eats, sin precios.
export const productGroups = [
  {
    name: 'Empanadas clásicas',
    intro: 'Los sabores que siempre dan ganas de volver a pedir.',
    items: ['Carne criolla', 'Carne picante', 'Pollo suave', 'Pollo picante', 'Jamón y queso', 'Queso y cebolla', 'Atún', 'Caprese', 'Espinaca'],
  },
  {
    name: 'Empanadas gourmet',
    intro: 'Rellenos especiales para salir de lo de siempre.',
    items: ['Carne a cuchillo', 'Barbacoa', 'Sobrasada', 'Vacío y provolone'],
  },
  {
    name: 'Postres argentinos',
    intro: 'Siempre queda lugar para algo dulce.',
    items: ['Chocotorta', 'Alfajores Havanna', 'Havanna de nuez', 'Havanna con sal', 'Havanna súper dulce de leche'],
  },
  {
    name: 'Para acompañar',
    intro: 'Algo fresco para completar tu plan.',
    items: ['Agua', 'Agua con gas', 'Refrescos', 'Té frío'],
  },
];
