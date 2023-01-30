const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "gamjr9",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: {
      runMode: 1,
      openMode: 1,
    },
  },
});
