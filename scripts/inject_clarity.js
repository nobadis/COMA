#!/usr/bin/env node
/**
 * Inject Microsoft Clarity into public HTML when CLARITY_PROJECT_ID is set.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE = path.join(ROOT, "site");
const PARTIAL = path.join(__dirname, "partials", "clarity.html");

const HTML_PAGES = [
  path.join(SITE, "index.html"),
  path.join(SITE, "aviso-legal", "index.html"),
  path.join(SITE, "cookies", "index.html"),
  path.join(SITE, "privacidad", "index.html"),
];

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
  if (!out.includes("</head>")) {
    console.error("HTML sin </head>; no se puede inyectar Clarity");
    process.exit(1);
  }
  return out.replace("</head>", `${clarityBlock(projectId)}</head>`);
}

function injectAll() {
  const projectId = getProjectId();
  for (const page of HTML_PAGES) {
    if (!fs.existsSync(page)) {
      console.error(`Falta página pública: ${page}`);
      process.exit(1);
    }
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
