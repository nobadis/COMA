/**
 * Efectos ligados al scroll con un único bucle rAF.
 *
 * - [data-progress="view"]: --p de 0 (entra por abajo) a 1 (sale por arriba).
 * - [data-progress="exit"]: --p de 0 (arriba del todo) a 1 (la sección ha salido por arriba).
 * - [data-progress="pin"]:  --p de 0 a 1 mientras la sección (más alta que la pantalla) está fijada.
 * - [data-hscroll]: galería horizontal fijada; mueve [data-hscroll-track] con el scroll vertical.
 * - [data-rotate]: rota palabras dentro de un titular.
 * - [data-sticky-cta]: barra de llamada a la acción en móvil.
 */
const clamp = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

export function initScrollFx(reduced: boolean) {
  initRotate(reduced);
  initStickyCta();
  if (reduced) return;

  const items = Array.from(document.querySelectorAll<HTMLElement>("[data-progress]"));
  const hscrolls = Array.from(document.querySelectorAll<HTMLElement>("[data-hscroll]")).map(
    (section) => ({
      section,
      track: section.querySelector<HTMLElement>("[data-hscroll-track]"),
      distance: 0,
    })
  );
  const desktop = window.matchMedia("(min-width: 900px)");

  const measure = () => {
    hscrolls.forEach((h) => {
      if (!h.track) return;
      if (!desktop.matches) {
        h.section.style.height = "";
        h.track.style.transform = "";
        h.distance = 0;
        return;
      }
      h.distance = Math.max(0, h.track.scrollWidth - window.innerWidth);
      h.section.style.height = `${h.distance + window.innerHeight}px`;
    });
  };

  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
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
      el.style.setProperty("--p", p.toFixed(4));
    }
    for (const h of hscrolls) {
      if (!h.track || !h.distance) continue;
      const r = h.section.getBoundingClientRect();
      const p = clamp(-r.top / Math.max(1, r.height - vh));
      h.track.style.transform = `translate3d(${(-p * h.distance).toFixed(1)}px,0,0)`;
      h.section.style.setProperty("--p", p.toFixed(4));
    }
  };
  const req = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  measure();
  update();
  window.addEventListener("scroll", req, { passive: true });
  window.addEventListener("resize", () => {
    measure();
    req();
  });
  // Las fuentes pueden cambiar el ancho de la galería: se vuelve a medir al cargarlas.
  document.fonts?.ready.then(() => {
    measure();
    req();
  });
}

function initRotate(reduced: boolean) {
  document.querySelectorAll<HTMLElement>("[data-rotate]").forEach((el) => {
    const words = Array.from(el.children) as HTMLElement[];
    if (words.length < 2) return;
    let i = 0;
    words[0].classList.add("is-on");
    if (reduced) return;
    window.setInterval(() => {
      if (document.hidden) return;
      words[i].classList.remove("is-on");
      words[i].classList.add("is-out");
      const prev = words[i];
      window.setTimeout(() => prev.classList.remove("is-out"), 700);
      i = (i + 1) % words.length;
      words[i].classList.add("is-on");
    }, 2400);
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
  window.addEventListener(
    "scroll",
    () => {
      const next = window.scrollY > window.innerHeight * 0.7;
      if (next !== past) {
        past = next;
        sync();
      }
    },
    { passive: true }
  );
}
