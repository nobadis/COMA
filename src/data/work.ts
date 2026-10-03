/**
 * Ejemplos de diseño que se muestran en la galería de trabajos.
 * Son conceptos visuales por sector (maquetas en CSS, sin imágenes).
 * Para añadir un proyecto real, añade una entrada y, si quieres, una captura en `image`.
 */
export interface Work {
  id: string;
  sector: string;
  domain: string;
  brand: string;
  headline: string;
  sub: string;
  cta: string;
  links: string[];
  tags: string[];
  theme: "festival" | "dental" | "farmacia" | "legal" | "restaurante" | "hotel";
}

export const works: Work[] = [
  {
    id: "festival",
    sector: "Eventos y festivales",
    domain: "festival.es",
    brand: "SOUND/ISLA",
    headline: "Tres días. Cuarenta artistas. Una isla.",
    sub: "Line-up, entradas y horarios en una web con la energía del cartel.",
    cta: "Comprar entradas",
    links: ["Line-up", "Entradas", "Info"],
    tags: ["Venta de entradas", "Multiidioma", "Rendimiento en picos de tráfico"],
    theme: "festival",
  },
  {
    id: "dental",
    sector: "Clínica dental",
    domain: "clinicadental.es",
    brand: "Sonría",
    headline: "Tu sonrisa, en las mejores manos.",
    sub: "Tratamientos explicados con claridad y cita online en dos clics.",
    cta: "Pedir cita",
    links: ["Tratamientos", "Equipo", "Contacto"],
    tags: ["Cita online", "SEO local", "Reseñas de Google"],
    theme: "dental",
  },
  {
    id: "farmacia",
    sector: "Farmacia",
    domain: "farmacia.es",
    brand: "Farmacia Centro",
    headline: "Tu farmacia de confianza, también online.",
    sub: "Servicios, horarios de guardia y encargos por WhatsApp.",
    cta: "Hacer un encargo",
    links: ["Servicios", "Guardias", "Encargos"],
    tags: ["Encargos online", "Google Maps", "Agente de IA"],
    theme: "farmacia",
  },
  {
    id: "legal",
    sector: "Despacho profesional",
    domain: "despacho.es",
    brand: "Ferrer & Vidal",
    headline: "Defendemos lo que más te importa.",
    sub: "Áreas de práctica, equipo y primera consulta sin compromiso.",
    cta: "Primera consulta",
    links: ["Áreas", "Despacho", "Blog"],
    tags: ["Captación de leads", "Blog SEO", "Automatizaciones"],
    theme: "legal",
  },
  {
    id: "restaurante",
    sector: "Restauración",
    domain: "restaurante.es",
    brand: "Cal Mar",
    headline: "Cocina mallorquina de temporada.",
    sub: "Carta, reservas y mensajes en cuatro idiomas.",
    cta: "Reservar mesa",
    links: ["Carta", "Reservas", "Eventos"],
    tags: ["Reservas online", "4 idiomas", "Agente de IA"],
    theme: "restaurante",
  },
  {
    id: "hotel",
    sector: "Hotel boutique",
    domain: "hotel.es",
    brand: "Casa Llevant",
    headline: "Despierta frente al Mediterráneo.",
    sub: "Reserva directa al mejor precio, sin intermediarios.",
    cta: "Ver disponibilidad",
    links: ["Habitaciones", "Experiencias", "Reservar"],
    tags: ["Reserva directa", "SEO internacional", "Email automático"],
    theme: "hotel",
  },
];
