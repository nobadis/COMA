const { defineConfig, devices } = require("playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 60 * 1000,
  use: {
    baseURL: "http://127.0.0.1:4173",
    headless: true,
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: {
    command: "npm run preview",
    port: 4173,
    reuseExistingServer: true,
    timeout: 30 * 1000,
  },
});
