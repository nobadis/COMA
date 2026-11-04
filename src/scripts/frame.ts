/**
 * Un único fotograma (rAF) por scroll o cambio de tamaño para todo el JS ligado al scroll.
 *
 * Cada tarea primero LEE (medidas, posición) y devuelve una función que ESCRIBE (estilos,
 * clases). Todas las lecturas van antes que todas las escrituras: así el navegador calcula el
 * layout una sola vez por fotograma en lugar de una vez por elemento (layout thrashing).
 */
type Write = () => void;
type Task = () => Write | void;

const tasks: Task[] = [];
let queued = false;

const run = () => {
  queued = false;
  const writes: Write[] = [];
  for (const t of tasks) {
    const w = t();
    if (w) writes.push(w);
  }
  for (const w of writes) w();
};

export function requestFrame() {
  if (!queued) {
    queued = true;
    requestAnimationFrame(run);
  }
}

let listening = false;
/** Registra una tarea que se ejecuta en cada fotograma con scroll o resize (y una vez al inicio). */
export function onScrollFrame(task: Task) {
  tasks.push(task);
  if (!listening) {
    listening = true;
    window.addEventListener("scroll", requestFrame, { passive: true });
    window.addEventListener("resize", requestFrame, { passive: true });
  }
  requestFrame();
}

/** Animaciones guiadas por scroll en CSS (compositor): con ellas sobra el JS por fotograma. */
export const SDA =
  typeof CSS !== "undefined" &&
  CSS.supports("animation-timeline: view()") &&
  CSS.supports("timeline-scope: --a") &&
  CSS.supports("animation-range: exit-crossing 0% exit-crossing 100%");
