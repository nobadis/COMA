import Lenis from "lenis";
import { initScrollFx } from "./scrollfx";

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const CONSENT_KEY = "coma_cookie_consent";

/* ---------------------------------------------------------- smooth scroll */
let lenis: Lenis | null = null;
// El scroll suave de Lenis solo en escritorio: en móvil el desplazamiento nativo es más fluido.
if (!reduced && finePointer) {
  lenis = new Lenis({ lerp: 0.1, anchors: { offset: -90 }, autoRaf: true });
}

/* ------------------------------------------------------- intro + curtain */
const root = document.documentElement;
const introEl = document.querySelector<HTMLElement>("[data-intro]");
const curtain = document.querySelector<HTMLElement>("[data-curtain]");

const introDone = new Promise<void>((resolve) => {
  if (!introEl || !root.classList.contains("intro-on")) return resolve();
  try {
    sessionStorage.setItem("coma_intro", "1");
  } catch {
    /* sin almacenamiento: la intro se repetirá */
  }
  lenis?.stop();
  const counter = introEl.querySelector<HTMLElement>("[data-intro-count]");
  const t0 = performance.now();
  const dur = 1450;
  const tick = (t: number) => {
    const k = Math.min(1, (t - t0) / dur);
    if (counter) counter.textContent = String(Math.round(k * 100));
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  window.setTimeout(() => {
    introEl.classList.add("is-done");
    window.setTimeout(() => {
      root.classList.remove("intro-on");
      introEl.remove();
      lenis?.start();
      resolve();
    }, 850);
    // la página empieza a revelarse mientras la cortina sube
    window.setTimeout(resolve, 350);
  }, dur + 250);
});

// Las letras del titular esperan a que termine la intro para entrar (con salvaguarda).
introDone.then(() => root.classList.add("is-ready"));
window.setTimeout(() => root.classList.add("is-ready"), 5000);

// Entrada de página: la cortina que cubría la pantalla se levanta.
if (curtain && root.classList.contains("curtain-open")) {
  try {
    sessionStorage.removeItem("coma_curtain");
  } catch {
    /* nada */
  }
  const resetCurtain = () => {
    curtain.style.transition = "none";
    curtain.classList.remove("is-in", "is-out");
    root.classList.remove("curtain-open");
    void curtain.offsetWidth;
    curtain.style.transition = "";
  };
  // La cortina sube y sale por arriba; después se recoloca abajo SIN animar.
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      curtain.classList.add("is-out");
      root.classList.remove("curtain-open");
      window.setTimeout(resetCurtain, 900);
    })
  );
}
// Salida de página: la cortina cubre la pantalla y después se navega.
if (curtain) {
  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
      return;
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
    if (!a || a.target || a.hasAttribute("download")) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || !/^https?:$/.test(url.protocol)) return;
    if (url.pathname === location.pathname && url.search === location.search) return; // ancla en la misma página
    e.preventDefault();
    try {
      sessionStorage.setItem("coma_curtain", "1");
    } catch {
      /* nada */
    }
    curtain.classList.remove("is-out");
    curtain.classList.add("is-in");
    window.setTimeout(() => (location.href = url.href), 620);
  });
}
// Volver con el botón «atrás» (bfcache): quitar la cortina.
window.addEventListener("pageshow", (e) => {
  if (e.persisted) {
    if (curtain) {
      curtain.style.transition = "none";
      curtain.classList.remove("is-in", "is-out");
      root.classList.remove("curtain-open");
      void curtain.offsetWidth;
      curtain.style.transition = "";
    }
  }
});

/* ------------------------------------------------------------------ header */
const header = document.querySelector<HTMLElement>("[data-header]");
if (header) {
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-hidden", y > 160 && y > lastY + 4);
    header.classList.toggle("is-stuck", y > 40);
    lastY = y;
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  // Cambia la cabecera a modo oscuro cuando pasa por encima de una sección [data-dark].
  const darkUnder = new Set<Element>();
  const darkIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) =>
        e.isIntersecting ? darkUnder.add(e.target) : darkUnder.delete(e.target)
      );
      header.classList.toggle("on-dark", darkUnder.size > 0);
    },
    { rootMargin: "-36px 0px -92% 0px" }
  );
  document.querySelectorAll("[data-dark]").forEach((el) => darkIO.observe(el));

  // Menú móvil
  const toggle = header.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const menu = header.querySelector<HTMLElement>("[data-menu]");
  if (toggle && menu) {
    const label = toggle.querySelector(".sr-only");
    const setOpen = (open: boolean) => {
      toggle.setAttribute("aria-expanded", String(open));
      if (label) label.textContent = open ? "Cerrar menú" : "Abrir menú";
      document.documentElement.style.overflow = open ? "hidden" : "";
      if (label) label.textContent = open ? "Cerrar menú" : "Abrir menú";
      if (open) {
        menu.hidden = false;
        lenis?.stop();
        requestAnimationFrame(() => requestAnimationFrame(() => header.classList.add("is-open")));
      } else {
        header.classList.remove("is-open");
        lenis?.start();
        window.setTimeout(() => {
          if (!header.classList.contains("is-open")) menu.hidden = true;
        }, 800);
      }
    };
    toggle.addEventListener("click", () => setOpen(!header.classList.contains("is-open")));
    menu.addEventListener("click", (e) => {
      if ((e.target as HTMLElement).closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && header.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }
}

/* ----------------------------------------------------------- split titles */
document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
  // Texto accesible sin los elementos decorativos (aria-hidden), p. ej. las palabras rotativas.
  const clone = el.cloneNode(true) as HTMLElement;
  clone.querySelectorAll("[aria-hidden=true]").forEach((n) => n.remove());
  const label = (clone.textContent ?? "").replace(/\s+/g, " ").trim();
  let i = 0;
  const wrap = (node: Node): Node => {
    const w = document.createElement("span");
    w.className = "w";
    const inner = document.createElement("span");
    inner.style.setProperty("--i", String(i++));
    inner.appendChild(node);
    w.appendChild(inner);
    return w;
  };
  const frag = document.createDocumentFragment();
  Array.from(el.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const parts = (node.textContent ?? "").split(/(\s+)/);
      parts.forEach((p) => {
        if (!p) return;
        frag.appendChild(
          /^\s+$/.test(p) ? document.createTextNode(" ") : wrap(document.createTextNode(p))
        );
      });
    } else if (node instanceof HTMLBRElement) {
      frag.appendChild(node);
    } else {
      frag.appendChild(wrap(node));
    }
  });
  el.setAttribute("aria-label", label);
  el.replaceChildren(frag);
  el.querySelectorAll(".w").forEach((w) => w.setAttribute("aria-hidden", "true"));
});

/* ------------------------------------------------------------------ reveal */
const revealIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-in");
      revealIO.unobserve(e.target);
    });
  },
  { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
);
introDone.then(() =>
  document.querySelectorAll("[data-reveal], [data-split]").forEach((el) => revealIO.observe(el))
);

/* ------------------------------------------------------- scroll scrubbing */
const scrubs = Array.from(document.querySelectorAll<HTMLElement>("[data-scrub]")).map((el) => {
  const words = (el.textContent ?? "").trim().split(/\s+/);
  el.setAttribute("aria-label", words.join(" "));
  el.innerHTML = words.map((w) => `<span aria-hidden="true">${w}</span>`).join(" ");
  return { el, spans: Array.from(el.children) as HTMLElement[] };
});
if (scrubs.length) {
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    scrubs.forEach(({ el, spans }) => {
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      const lit = Math.round(p * spans.length);
      spans.forEach((s, idx) => s.classList.toggle("on", idx < lit));
    });
  };
  const req = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener("scroll", req, { passive: true });
  window.addEventListener("resize", req);
  update();
}

/* --------------------------------------------------------------- counters */
const countIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    countIO.unobserve(e.target);
    const el = e.target as HTMLElement;
    const to = Number(el.dataset.count);
    if (reduced || !Number.isFinite(to)) return;
    const t0 = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / dur);
      el.textContent = String(Math.round(to * (1 - Math.pow(1 - k, 4))));
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
});
introDone.then(() =>
  document.querySelectorAll("[data-count]").forEach((el) => countIO.observe(el))
);

/* ------------------------------------------------- pointer: spot + magnet */
if (finePointer && !reduced) {
  document.querySelectorAll<HTMLElement>("[data-spot]").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.25;
      const y = (e.clientY - r.top - r.height / 2) * 0.35;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener("pointerleave", () => (el.style.transform = ""));
  });
}

/* ----------------------------------------------------------------- cursor */
const cursor = document.querySelector<HTMLElement>("[data-cursor]");
if (cursor && finePointer && !reduced) {
  root.classList.add("has-cursor");
  let cx = 0;
  let cy = 0;
  let tx = 0;
  let ty = 0;
  window.addEventListener(
    "pointermove",
    (e) => {
      tx = e.clientX;
      ty = e.clientY;
      cursor.classList.add("is-on");
      const hot = (e.target as HTMLElement).closest("a, button, summary, label, [data-magnetic]");
      cursor.classList.toggle("is-big", !!hot);
    },
    { passive: true }
  );
  document.addEventListener("pointerleave", () => cursor.classList.remove("is-on"));
  const loop = () => {
    cx += (tx - cx) * 0.2;
    cy += (ty - cy) * 0.2;
    cursor.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
    requestAnimationFrame(loop);
  };
  loop();
}

/* ------------------------------------------------------------ kinetic type */
// Se divide en letras (entrada escalonada con transform). En escritorio, además, cada letra
// reacciona al puntero con ancho y grosor de la tipografía variable.
const kinetics = Array.from(document.querySelectorAll<HTMLElement>("[data-kinetic]")).map((el) => {
  const label = (el.textContent ?? "").replace(/\s+/g, " ").trim();
  if (!el.closest("[aria-hidden=true]")) el.setAttribute("aria-label", label);
  const letters: HTMLElement[] = [];
  let n = 0;
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((c) => {
      if (c.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        Array.from(c.textContent ?? "").forEach((ch) => {
          const sp = document.createElement("span");
          sp.className = ch === " " ? "k k--sp" : "k";
          sp.setAttribute("aria-hidden", "true");
          sp.style.setProperty("--ci", String(n++));
          sp.textContent = ch === " " ? "\u00a0" : ch;
          if (ch !== " ") letters.push(sp);
          frag.appendChild(sp);
        });
        node.replaceChild(frag, c);
      } else if (
        c.nodeType === Node.ELEMENT_NODE &&
        !(c as HTMLElement).hasAttribute("data-nokin") &&
        c.nodeName !== "svg"
      ) {
        walk(c);
      }
    });
  };
  walk(el);
  return { el, letters };
});
if (kinetics.length && finePointer && !reduced) {
  let mx = -9999;
  let my = -9999;
  let running = false;
  const level = new WeakMap<HTMLElement, number>();
  const frame = () => {
    let active = false;
    for (const { el, letters } of kinetics) {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) continue;
      for (const l of letters) {
        const b = l.getBoundingClientRect();
        const d = Math.hypot(b.left + b.width / 2 - mx, b.top + b.height / 2 - my);
        let target = Math.max(0, 1 - d / 260);
        target = target * target * (3 - 2 * target);
        const cur = level.get(l) ?? 0;
        const next = cur + (target - cur) * 0.2;
        if (Math.abs(next - cur) < 0.004) continue;
        active = true;
        level.set(l, next);
        l.style.setProperty("--kw", String(Math.round(108 + next * 17)));
        l.style.setProperty("--kg", String(Math.round(600 + next * 300)));
      }
    }
    running = active;
    if (active) requestAnimationFrame(frame);
  };
  const kick = () => {
    if (!running) {
      running = true;
      requestAnimationFrame(frame);
    }
  };
  window.addEventListener(
    "pointermove",
    (e) => {
      mx = e.clientX;
      my = e.clientY;
      kick();
    },
    { passive: true }
  );
  document.addEventListener("pointerleave", () => {
    mx = my = -9999;
    kick();
  });
}

/* ------------------------------------------------------------ scroll progress */
const sp = document.querySelector<HTMLElement>("[data-sp]");
if (sp) {
  let pending = false;
  const paint = () => {
    pending = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    sp.style.setProperty("--sp", (max > 0 ? Math.min(1, window.scrollY / max) : 0).toFixed(4));
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!pending) {
        pending = true;
        requestAnimationFrame(paint);
      }
    },
    { passive: true }
  );
  paint();
}

/* --------------------------------------------------------- scroll effects */
initScrollFx(reduced);

/* ------------------------------------------------------------------- year */
const year = String(new Date().getFullYear());
document.querySelectorAll(".coma-year").forEach((el) => (el.textContent = year));

/* ----------------------------------------------------------------- cookies */
const banner = document.getElementById("cookie-banner");
const readConsent = () => {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return "unavailable";
  }
};
if (banner) {
  if (!readConsent()) banner.hidden = false;
  banner.querySelectorAll<HTMLButtonElement>("[data-consent]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const value = btn.dataset.consent ?? "rejected";
      try {
        localStorage.setItem(CONSENT_KEY, value);
      } catch {
        /* almacenamiento no disponible: solo se oculta el banner */
      }
      window.dispatchEvent(new CustomEvent("coma:consent", { detail: value }));
      banner.hidden = true;
    })
  );
  document.querySelectorAll("[data-cookie-open]").forEach((btn) =>
    btn.addEventListener("click", () => {
      banner.hidden = false;
    })
  );
}
