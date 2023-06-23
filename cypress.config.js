const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demoqa.com/',
    downloadsFolder: 'cypress/downloads',
    trashAssetsBeforeRuns: true,
    videoUploadOnPasses: false,
    retries: 2,
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: false,
    json: true,
    charts: true,
    inlineAssets: true,
    reportPageTitle: "My Test Suite"
  },
  video: false
});

