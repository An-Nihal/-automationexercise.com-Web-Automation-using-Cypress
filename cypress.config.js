const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.specPattern = [
        'cypress/e2e/signup.cy.js',
        'cypress/e2e/login.cy.js',
        'cypress/e2e/products.cy.js',
        'cypress/e2e/cartandOrder.cy.js',
        'cypress/e2e/contactUs.cy.js',
        'cypress/e2e/deleteAccount.cy.js'
      ]
      return config;
    },
  },
});
