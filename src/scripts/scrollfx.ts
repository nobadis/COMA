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
const clamp = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

export function initScrollFx(reduced: boolean) {
  initRotate(reduced);
  initStickyCta();
  if (reduced) return;
  initVelocity();

  const stacks = Array.from(document.querySelectorAll<HTMLElement>("[data-stack]")).map((el) => ({
    panels: Array.from(el.children) as HTMLElement[],
  }));

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
    for (const st of stacks) {
      st.panels.forEach((panel, i) => {
        const next = st.panels[i + 1];
        if (!next) return;
        const top = next.getBoundingClientRect().top;
        panel.style.setProperty("--cover", clamp(1 - top / vh).toFixed(3));
      });
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
    // Sin transición, la palabra que sale volvería a su sitio cruzando el hueco por segunda vez.
    const snap = (w: HTMLElement) => {
      w.style.transition = "none";
      w.classList.remove("is-out");
      void w.offsetWidth;
      w.style.transition = "";
    };
    window.setInterval(() => {
      if (document.hidden) return;
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

function initVelocity() {
  const rows = Array.from(document.querySelectorAll<HTMLElement>("[data-velocity]")).map((el) => ({
    el,
    x: 0,
    half: 0,
    visible: true,
    dir: el.dataset.velocity === "reverse" ? 1 : -1,
  }));
  if (!rows.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const row = rows.find((r) => r.el.parentElement === e.target || r.el === e.target);
      if (row) row.visible = e.isIntersecting;
    });
  });
  const measure = () => rows.forEach((r) => (r.half = r.el.scrollWidth / 2));
  rows.forEach((r) => io.observe(r.el.parentElement ?? r.el));
  measure();
  window.addEventListener("resize", measure);
  document.fonts?.ready.then(measure);
  let lastY = window.scrollY;
  let boost = 0;
  window.addEventListener(
    "scroll",
    () => {
      boost = Math.max(-40, Math.min(40, (window.scrollY - lastY) * 0.6));
      lastY = window.scrollY;
    },
    { passive: true }
  );
  const loop = () => {
    boost *= 0.92;
    if (!document.hidden) {
      for (const r of rows) {
        if (!r.visible || !r.half) continue;
        r.x += r.dir * (0.6 + Math.abs(boost)) * (boost < -2 ? -1 : 1);
        if (r.x <= -r.half) r.x += r.half;
        if (r.x > 0) r.x -= r.half;
        r.el.style.transform = `translate3d(${r.x.toFixed(1)}px,0,0)`;
      }
    }
    requestAnimationFrame(loop);
  };
  loop();
}
