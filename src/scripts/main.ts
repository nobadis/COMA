import Lenis from "lenis";
import { initScrollFx } from "./scrollfx";

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const CONSENT_KEY = "coma_cookie_consent";

/* ---------------------------------------------------------- smooth scroll */
let lenis: Lenis | null = null;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.1, anchors: { offset: -90 }, autoRaf: true });
}

/* ------------------------------------------------------------------ header */
const header = document.querySelector<HTMLElement>("[data-header]");
if (header) {
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-hidden", y > 160 && y > lastY);
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
document.querySelectorAll("[data-reveal], [data-split]").forEach((el) => revealIO.observe(el));

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
document.querySelectorAll("[data-count]").forEach((el) => countIO.observe(el));

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
