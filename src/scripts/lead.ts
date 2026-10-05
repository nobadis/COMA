/**
 * Envío de leads. Con PUBLIC_FORM_ENDPOINT se hace un POST JSON y se redirige a /gracias/
 * (la conversión se mide allí, una sola vez). Sin endpoint se abre el correo del visitante y
 * la conversión se mide al enviar.
 */
import { ads } from "../data/ads";
import { site } from "../data/site";
import { attribution, attributionLine, track } from "./tracking";

export interface Lead {
  nombre: string;
  empresa?: string;
  contacto?: string;
  mensaje: string;
  intereses: string[];
  plazo?: string;
  /** Dónde se rellenó: "contacto", "lp-web-99"… */
  source: string;
}

export function leadSubject(l: Lead) {
  return `Nuevo proyecto${l.empresa ? ` · ${l.empresa}` : ""}`;
}

export function leadBody(l: Lead) {
  return [
    `Hola, soy ${l.nombre}${l.empresa ? ` de ${l.empresa}` : ""}.`,
    "",
    l.mensaje,
    "",
    l.contacto ? `Contacto: ${l.contacto}` : "",
    l.intereses.length ? `Me interesa: ${l.intereses.join(", ")}` : "",
    l.plazo ? `Plazo: ${l.plazo}` : "",
    "",
    attributionLine(),
  ]
    .filter((line, i, arr) => line !== "" || (arr[i - 1] !== "" && i !== arr.length - 1))
    .join("\n");
}

export async function submitLead(l: Lead): Promise<void> {
  if (ads.formEndpoint) {
    try {
      const res = await fetch(ads.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...l,
          _subject: leadSubject(l),
          page: window.location.href,
          attribution: attribution(),
        }),
      });
      if (res.ok) {
        window.location.href = "/gracias/";
        return;
      }
    } catch {
      /* si falla el servicio, no se pierde el lead: se cae al correo */
    }
  }
  track("generate_lead", { form: l.source, via: "mailto", interest: l.intereses.join("|") });
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(leadSubject(l))}&body=${encodeURIComponent(leadBody(l))}`;
}

/** Formularios cortos de las landings: <form data-lead data-source="lp-web-99">. */
document.querySelectorAll<HTMLFormElement>("form[data-lead]").forEach((form) => {
  const error = form.querySelector<HTMLElement>("[data-lead-error]");
  const button = form.querySelector<HTMLButtonElement>("button[type=submit]");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nombre = String(data.get("nombre") ?? "").trim();
    const contacto = String(data.get("contacto") ?? "").trim();
    // Cebo para bots: si el campo oculto viene relleno, se descarta en silencio.
    if (String(data.get("web") ?? "")) return;
    if (!nombre || !contacto) {
      if (error) error.hidden = false;
      form
        .querySelector<HTMLElement>(nombre ? "input[name=contacto]" : "input[name=nombre]")
        ?.focus();
      return;
    }
    if (error) error.hidden = true;
    if (button) button.disabled = true;
    await submitLead({
      nombre,
      contacto,
      empresa: String(data.get("empresa") ?? "").trim(),
      mensaje: String(data.get("mensaje") ?? "").trim() || "Me gustaría recibir una propuesta.",
      intereses: [form.dataset.interest ?? ""].filter(Boolean),
      source: form.dataset.source ?? "landing",
    });
    if (button) button.disabled = false;
  });
});
