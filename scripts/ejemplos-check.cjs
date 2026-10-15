#!/usr/bin/env node
/**
 * Comprueba que cada demo de ejemplos/ está al día con la rama de su repositorio:
 *   npm run ejemplos:check
 * Compara el commit guardado en ejemplos.json (lo escribe npm run ejemplo) con el último de la
 * rama en GitHub. Si alguna está desfasada, sale con error y dice cómo actualizarla.
 */
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const list = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "ejemplos", "ejemplos.json"), "utf8")
);
let stale = 0;
for (const e of list) {
  const branch = e.branch || "main";
  const remote = execFileSync("git", ["ls-remote", e.repo, `refs/heads/${branch}`], {
    encoding: "utf8",
  }).split(/\s/)[0];
  if (!e.commit || e.commit !== remote) {
    stale++;
    console.log(
      `✗ ${e.proyecto}: demo en ${(e.commit || "?").slice(0, 7)}, ${branch} en ${remote.slice(0, 7)} → npm run ejemplo -- ${e.proyecto}`
    );
  } else {
    console.log(`✓ ${e.proyecto}: al día (${remote.slice(0, 7)})`);
  }
}
process.exit(stale ? 1 : 0);
