const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });

      require('cypress-mochawesome-reporter/plugin')(on);
      this.screenshotOnRunFailure = true;
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
