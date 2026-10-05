const node = {
  module: "readonly",
  require: "readonly",
  process: "readonly",
  console: "readonly",
  __dirname: "readonly",
  fetch: "readonly",
  URL: "readonly",
};

module.exports = [
  {
    files: ["**/*.cjs"],
    languageOptions: { ecmaVersion: 2023, sourceType: "commonjs", globals: node },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
    },
  },
  {
    files: ["tests/**/*.cjs", "scripts/og-image.cjs"],
    languageOptions: {
      globals: {
        localStorage: "readonly",
        sessionStorage: "readonly",
        window: "readonly",
        document: "readonly",
        // Globales del navegador usados dentro de page.evaluate().
        scrollY: "readonly",
        innerHeight: "readonly",
        getComputedStyle: "readonly",
        DOMMatrixReadOnly: "readonly",
      },
    },
  },
];
