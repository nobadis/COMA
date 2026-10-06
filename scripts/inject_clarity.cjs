#!/usr/bin/env node
/**
 * Inject Microsoft Clarity into public HTML when CLARITY_PROJECT_ID is set.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE = path.join(ROOT, "dist");
const PARTIAL = path.join(__dirname, "partials", "clarity.html");

function findHtml(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    // Las webs de ejemplo para clientes no llevan la analítica de COMA.
    if (entry.isDirectory()) return entry.name === "ejemplos-web" ? [] : findHtml(full);
    return entry.name.endsWith(".html") ? [full] : [];
  });
}

const MARKER_START = "<!-- coma-clarity-start -->";
const MARKER_END = "<!-- coma-clarity-end -->";
const BLOCK_RE = new RegExp(
  MARKER_START.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
    "[\\s\\S]*?" +
    MARKER_END.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
    "\\s*",
  "g"
);
const PROJECT_ID_RE = /^[A-Za-z0-9]+$/;

function getProjectId() {
  const raw = String(process.env.CLARITY_PROJECT_ID || "").trim();
  if (!raw) return "";
  if (!PROJECT_ID_RE.test(raw)) {
    console.error(`CLARITY_PROJECT_ID inválido (solo alfanumérico): ${JSON.stringify(raw)}`);
    process.exit(1);
  }
  return raw;
}

function clarityBlock(projectId) {
  const template = fs.readFileSync(PARTIAL, "utf8").trim();
  const body = template.split("__CLARITY_PROJECT_ID__").join(projectId);
  return `${MARKER_START}\n${body}\n${MARKER_END}\n`;
}

function applyToHtml(html, projectId) {
  let out = html.replace(BLOCK_RE, "");
  if (!projectId) return out;
  // Las redirecciones de Astro (p. ej. /trabajos/) son stubs sin <head>: no se miden.
  if (!out.includes("</head>")) return out;
  return out.replace("</head>", `${clarityBlock(projectId)}</head>`);
}

function injectAll() {
  const projectId = getProjectId();
  if (!fs.existsSync(path.join(SITE, "index.html"))) {
    console.error(`No existe ${path.relative(ROOT, SITE)}/index.html; ejecuta antes "astro build"`);
    process.exit(1);
  }
  for (const page of findHtml(SITE)) {
    const original = fs.readFileSync(page, "utf8");
    const updated = applyToHtml(original, projectId);
    if (updated !== original) {
      fs.writeFileSync(page, updated, "utf8");
      const action = projectId ? "inyectado" : "eliminado";
      console.log(`Clarity ${action}: ${path.relative(ROOT, page)}`);
    } else {
      console.log(`Clarity sin cambios: ${path.relative(ROOT, page)}`);
    }
  }
  if (projectId) {
    console.log(`Clarity ON (project=${projectId})`);
  } else {
    console.log("Clarity OFF (CLARITY_PROJECT_ID vacío o ausente)");
  }
}

injectAll();
