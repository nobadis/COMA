/**
 * Efectos ligados al scroll con un único bucle rAF.
 *
 * - [data-progress="view"]: --p de 0 (entra por abajo) a 1 (sale por arriba).
 * - [data-progress="exit"]: --p de 0 (arriba del todo) a 1 (la sección ha salido por arriba).
 * - [data-progress="pin"]:  --p de 0 a 1 mientras la sección (más alta que la pantalla) está fijada.
 * - [data-hscroll]: galería horizontal fijada; mueve [data-hscroll-track] con el scroll vertical.
 * - [data-stack]: paneles apilados; cada hijo recibe --cover (0..1) según lo tapa el siguiente.
 * - [data-velocity]: marquesina que acelera y cambia de sentido con el scroll.
 * - [data-rotate]: rota palabras dentro de un titular.
 * - [data-sticky-cta]: barra de llamada a la acción en móvil.
 */
import { onScrollFrame, requestFrame, SDA } from "./frame";

const clamp = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

export function initScrollFx(reduced: boolean) {
  initRotate(reduced);
  initStickyCta();
  if (reduced) return;
  initVelocity();

  // Con animaciones guiadas por scroll en CSS, el apilado, la salida del hero y la galería
  // horizontal los mueve el compositor: aquí solo se mide (y nada se toca por fotograma).
  const stacks = SDA
    ? []
    : Array.from(document.querySelectorAll<HTMLElement>("[data-stack]")).map((el) => ({
        panels: Array.from(el.children) as HTMLElement[],
      }));

  const items = Array.from(document.querySelectorAll<HTMLElement>("[data-progress]")).filter(
    (el) => !(SDA && el.hasAttribute("data-progress-css"))
  );
  const hscrolls = Array.from(document.querySelectorAll<HTMLElement>("[data-hscroll]")).map(
    (section) => ({
      section,
      track: section.querySelector<HTMLElement>("[data-hscroll-track]"),
      distance: 0,
    })
  );
  const desktop = window.matchMedia("(min-width: 900px)");

  const measure = () => {
    // Lecturas primero, escrituras después (un solo layout).
    const dists = hscrolls.map((h) =>
      h.track && desktop.matches ? Math.max(0, h.track.scrollWidth - window.innerWidth) : 0
    );
    const vh = window.innerHeight;
    hscrolls.forEach((h, i) => {
      if (!h.track) return;
      if (!desktop.matches) {
        if (!h.section.classList.contains("is-pinned")) {
          h.section.style.height = "";
          h.track.style.transform = "";
        }
        h.distance = 0;
        return;
      }
      h.distance = dists[i];
      h.section.style.height = `${h.distance + vh}px`;
      h.section.style.setProperty("--hd", `${h.distance}px`);
    });
  };

  const jsHscrolls = SDA ? [] : hscrolls;
  if (items.length || stacks.length || jsHscrolls.length) {
    onScrollFrame(() => {
      const vh = window.innerHeight;
      // Lectura
      const ps: [HTMLElement, number][] = [];
      for (const el of items) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) continue;
        const mode = el.dataset.progress;
        const p =
          mode === "pin"
            ? clamp(-r.top / Math.max(1, r.height - vh))
            : mode === "exit"
              ? clamp(-r.top / r.height)
              : clamp((vh - r.top) / (vh + r.height));
        ps.push([el, p]);
      }
      const covers: [HTMLElement, number][] = [];
      for (const st of stacks) {
        st.panels.forEach((panel, i) => {
          const next = st.panels[i + 1];
          if (!next) return;
          const top = next.getBoundingClientRect().top;
          if (top > vh * 1.5) return;
          covers.push([panel, clamp(1 - top / vh)]);
        });
      }
      const hs: [(typeof hscrolls)[number], number][] = [];
      for (const h of jsHscrolls) {
        if (!h.track || !h.distance) continue;
        const r = h.section.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) continue;
        hs.push([h, clamp(-r.top / Math.max(1, r.height - vh))]);
      }
      // Escritura
      return () => {
        for (const [el, p] of ps) setVar(el, "--p", p.toFixed(4));
        for (const [panel, c] of covers) setVar(panel, "--cover", c.toFixed(3));
        for (const [h, p] of hs) {
          h.track!.style.transform = `translate3d(${(-p * h.distance).toFixed(1)}px,0,0)`;
          setVar(h.section, "--p", p.toFixed(4));
        }
      };
    });
  }

  measure();
  window.addEventListener("resize", () => {
    measure();
    requestFrame();
  });
  // Las fuentes pueden cambiar el ancho de la galería: se vuelve a medir al cargarlas.
  document.fonts?.ready.then(() => {
    measure();
    requestFrame();
  });
}

/** Solo escribe si cambia: una variable CSS igual no debe invalidar el estilo de la sección. */
const last = new WeakMap<HTMLElement, Record<string, string>>();
function setVar(el: HTMLElement, name: string, value: string) {
  let m = last.get(el);
  if (!m) last.set(el, (m = {}));
  if (m[name] === value) return;
  m[name] = value;
  el.style.setProperty(name, value);
}

function initRotate(reduced: boolean) {
  document.querySelectorAll<HTMLElement>("[data-rotate]").forEach((el) => {
    const words = Array.from(el.children) as HTMLElement[];
    if (words.length < 2) return;
    let i = 0;
    words[0].classList.add("is-on");
    if (reduced) return;
    // Sin transición, la palabra que sale volvería a su sitio cruzando el hueco por segunda vez.
    const snap = (w: HTMLElement) => {
      w.style.transition = "none";
      w.classList.remove("is-out");
      void w.offsetWidth;
      w.style.transition = "";
    };
    let visible = true;
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(el);
    window.setInterval(() => {
      if (document.hidden || !visible) return;
      const leaving = words[i];
      i = (i + 1) % words.length;
      leaving.classList.remove("is-on");
      leaving.classList.add("is-out");
      words[i].classList.add("is-on");
      window.setTimeout(() => snap(leaving), 900);
    }, 2600);
  });
}

function initStickyCta() {
  const bar = document.querySelector<HTMLElement>("[data-sticky-cta]");
  if (!bar) return;
  const blockers = new Set<Element>();
  let past = false;
  const sync = () => bar.classList.toggle("is-on", past && blockers.size === 0);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? blockers.add(e.target) : blockers.delete(e.target)));
    sync();
  });
  document.querySelectorAll("[data-hide-sticky]").forEach((el) => io.observe(el));
  onScrollFrame(() => {
    const next = window.scrollY > window.innerHeight * 0.7;
    if (next === past) return;
    return () => {
      past = next;
      sync();
    };
  });
}

/**
 * Marquesinas que aceleran y cambian de sentido con el scroll. El movimiento base es una
 * animación del navegador (Web Animations, en el compositor): sin scroll no hay JS por
 * fotograma. Al hacer scroll solo se ajusta la velocidad (playbackRate) y se vuelve a parar.
 */
function initVelocity() {
  const BASE = 36; // px/s (0,6 px por fotograma a 60 Hz)
  const rows = Array.from(document.querySelectorAll<HTMLElement>("[data-velocity]")).map((el) => ({
    el,
    dir: el.dataset.velocity === "reverse" ? 1 : -1,
    anim: null as Animation | null,
    half: 0,
    visible: false,
  }));
  if (!rows.length || typeof Element.prototype.animate !== "function") return;
  let rate = 1;

  const build = () => {
    for (const r of rows) {
      const half = r.el.scrollWidth / 2;
      if (!half || Math.abs(half - r.half) < 1) continue;
      const dur = (half / BASE) * 1000;
      const old = r.anim;
      const frac =
        old && r.half
          ? (Number(old.currentTime ?? 0) % ((r.half / BASE) * 1000)) / ((r.half / BASE) * 1000)
          : 0;
      old?.cancel();
      r.half = half;
      const [from, to] = r.dir < 0 ? [0, -half] : [-half, 0];
      r.anim = r.el.animate(
        [{ transform: `translate3d(${from}px,0,0)` }, { transform: `translate3d(${to}px,0,0)` }],
        { duration: dur, iterations: Infinity }
      );
      r.anim.currentTime = frac * dur;
      r.anim.playbackRate = rate;
      if (!r.visible) r.anim.pause();
    }
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const row = rows.find((r) => (r.el.parentElement ?? r.el) === e.target);
      if (!row) return;
      row.visible = e.isIntersecting;
      if (row.visible) row.anim?.play();
      else row.anim?.pause();
    });
  });
  rows.forEach((r) => io.observe(r.el.parentElement ?? r.el));
  build();
  window.addEventListener("resize", build, { passive: true });
  document.fonts?.ready.then(build);

  let lastY = window.scrollY;
  let boost = 0;
  let running = false;
  const setRate = (next: number) => {
    // Cambiar la velocidad reinicia la animación en el compositor: solo si cambia de verdad.
    if (Math.abs(next - rate) < 0.02 * Math.max(1, Math.abs(rate))) return;
    rate = next;
    for (const r of rows) if (r.visible && r.anim) r.anim.playbackRate = rate;
  };
  const loop = () => {
    boost *= 0.92;
    if (Math.abs(boost) < 0.05) {
      boost = 0;
      running = false;
      rate = 1;
      for (const r of rows) if (r.anim) r.anim.playbackRate = 1;
      return;
    }
    setRate(((0.6 + Math.abs(boost)) / 0.6) * (boost < -2 ? -1 : 1));
    requestAnimationFrame(loop);
  };
  // La posición se lee en el fotograma compartido (leer scrollY en el evento fuerza layout).
  onScrollFrame(() => {
    const y = window.scrollY;
    const delta = y - lastY;
    lastY = y;
    if (!delta) return;
    boost = Math.max(-40, Math.min(40, delta * 0.6));
    if (!running && rows.some((r) => r.visible)) {
      running = true;
      requestAnimationFrame(loop);
    }
  });
}

/**
 * Móvil: secciones ancladas ([data-pin]) cuyas tarjetas se desplazan de lado MIENTRAS se hace
 * scroll vertical. El movimiento lo hace el navegador (animation-timeline: view(), compositor);
 * aquí solo se mide la distancia y la altura. Sin soporte o con "reducir movimiento" se queda el
 * carrusel de deslizar con el dedo.
 */
export function initPinned() {
  const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-pin]"));
  if (!sections.length) return;
  const supported = typeof CSS !== "undefined" && CSS.supports("animation-timeline: view()");
  const mq = window.matchMedia("(max-width: 899px) and (prefers-reduced-motion: no-preference)");
  const desktop = window.matchMedia("(min-width: 900px)");
  let raf = 0;

  const apply = () => {
    raf = 0;
    const on = supported && mq.matches && window.innerHeight >= 560;
    for (const section of sections) {
      const track = section.querySelector<HTMLElement>("[data-pin-track]");
      const stick = section.firstElementChild as HTMLElement | null;
      if (!track || !stick) continue;
      if (!on) {
        // En escritorio la altura de una galería [data-hscroll] la pone initScrollFx: no se toca.
        if (
          section.classList.contains("is-pinned") &&
          !(section.hasAttribute("data-hscroll") && desktop.matches)
        )
          section.style.removeProperty("height");
        section.classList.remove("is-pinned");
        section.style.removeProperty("--pin-d");
        continue;
      }
      section.classList.add("is-pinned");
      const cs = getComputedStyle(stick);
      const inner = stick.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const dist = Math.max(0, Math.round(track.scrollWidth - inner));
      section.style.setProperty("--pin-d", `${dist}px`);
      section.style.height = `calc(${dist}px + 100svh)`;
    }
  };
  const schedule = () => {
    if (!raf) raf = requestAnimationFrame(apply);
  };
  apply();
  window.addEventListener("resize", schedule);
  mq.addEventListener("change", schedule);
  document.fonts?.ready.then(schedule);
}
