const node = {
  module: "readonly",
  require: "readonly",
  process: "readonly",
  console: "readonly",
  __dirname: "readonly",
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
      },
    },
  },
];
