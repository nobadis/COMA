#!/usr/bin/env node
/**
 * Añade o actualiza una web de ejemplo desde una rama de su repositorio de GitHub (main por defecto):
 *   npm run ejemplo -- <proyecto> [url-del-repo] [rama]
 * Copia el código en ejemplos/<proyecto>/ (sin .git) y, si es nuevo, le asigna un id aleatorio
 * en ejemplos/ejemplos.json. Al actualizar se conserva el id, así el enlace del cliente no cambia.
 */
const fs = require("fs");
const os = require("os");
const path = require("path");
const crypto = require("crypto");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const REGISTRY = path.join(ROOT, "ejemplos", "ejemplos.json");
const [proyecto, repoArg, branchArg] = process.argv.slice(2);

if (!proyecto || !/^[a-z0-9-]+$/.test(proyecto)) {
  console.error(
    "Uso: npm run ejemplo -- <proyecto> [url-del-repo] [rama]  (proyecto: a-z, 0-9, -)"
  );
  process.exit(1);
}

const list = JSON.parse(fs.readFileSync(REGISTRY, "utf8"));
let entry = list.find((e) => e.proyecto === proyecto);
const repo = repoArg || entry?.repo;
if (!repo) {
  console.error(`Falta la URL del repositorio para ${proyecto}`);
  process.exit(1);
}
if (!entry) {
  const abc = "abcdefghijkmnopqrstuvwxyz23456789";
  const id = Array.from(crypto.randomBytes(24), (b) => abc[b % abc.length]).join("");
  entry = { proyecto, id, repo };
  list.push(entry);
}
entry.repo = repo;
// Siempre una rama concreta: la rama por defecto del repo en GitHub puede ser otra más antigua.
const branch = branchArg || entry.branch || "main";
if (branch !== "main") entry.branch = branch;

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "ejemplo-"));
execFileSync("git", ["clone", "--depth", "1", "--branch", branch, repo, tmp], {
  stdio: "inherit",
});
const commit = execFileSync("git", ["-C", tmp, "log", "--oneline", "-1"], { encoding: "utf8" });
fs.rmSync(path.join(tmp, ".git"), { recursive: true, force: true });
const dest = path.join(ROOT, "ejemplos", proyecto);
fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(tmp, dest, { recursive: true });
fs.rmSync(tmp, { recursive: true, force: true });

fs.writeFileSync(REGISTRY, JSON.stringify(list, null, 2) + "\n", "utf8");
console.log(`\n${proyecto} @ ${branch}: ${commit.trim()}`);
console.log(`✓ https://comunicacionenmallorca.com/ejemplos-web/${entry.id}/${proyecto}/`);
