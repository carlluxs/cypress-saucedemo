const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Com o baseUrl aqui, os testes usam cy.visit('/') e trocar de ambiente
    // vira uma mudança em um lugar só
    baseUrl: 'https://www.saucedemo.com',

    specPattern: 'cypress/E2E/specs/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/E2E/fixtures',

    // Site público na internet, então os tempos padrão ficam curtos
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,

    video: false,
    screenshotOnRunFailure: true,

    // Print vai pra evidencias/, organizado por spec
    screenshotsFolder: 'evidencias',
    trashAssetsBeforeRuns: true,

    // Cada teste começa com cookies e localStorage limpos, pra nenhum teste
    // depender do resultado de outro
    testIsolation: true,

    allowCypressEnv: false,
  },
})
