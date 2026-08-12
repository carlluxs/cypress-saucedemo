const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Com o baseUrl aqui, os testes usam cy.visit('/') e trocar de ambiente
    // vira uma mudanca em um lugar so
    baseUrl: 'https://www.saucedemo.com',

    specPattern: 'cypress/E2E/specs/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/E2E/fixtures',

    // Site publico na internet, entao os tempos padrao ficam curtos
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,

    video: false,
    screenshotOnRunFailure: true,

    // Cada teste comeca com cookies e localStorage limpos, pra nenhum teste
    // depender do resultado de outro
    testIsolation: true,

    allowCypressEnv: false,
  },
})
