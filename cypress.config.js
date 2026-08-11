const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Endereco base da aplicacao sob teste.
    // Com isso, nos testes usamos cy.visit('/') em vez da URL inteira —
    // trocar de ambiente vira uma alteracao em um unico lugar.
    baseUrl: 'https://www.saucedemo.com',

    // Onde ficam os casos de teste. Segue a arquitetura de pastas adotada
    // (secao 4): a camada E2E é auto-contida em cypress/E2E.
    specPattern: 'cypress/E2E/specs/**/*.cy.js',

    // Arquivo carregado antes de cada caso de teste — onde registramos
    // comandos customizados e bibliotecas auxiliares.
    supportFile: 'cypress/support/e2e.js',

    // Pasta de massa de dados da camada E2E.
    fixturesFolder: 'cypress/E2E/fixtures',

    // Testes conversam com uma rede real (site publico na internet),
    // entao os tempos-limite padrao do Cypress ficam curtos demais.
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,

    // Vídeo desligado: pesa, demora e este projeto nao roda em CI ainda.
    // Print de falha fica ligado — é o que ajuda a diagnosticar.
    video: false,
    screenshotOnRunFailure: true,

    // Cada teste comeca com cookies e localStorage limpos.
    // Garante independencia entre casos de teste (secao 8.1).
    testIsolation: true,

    // Desliga o acesso a Cypress.env() pelo codigo do navegador — recurso
    // que esta suite nao utiliza e que o Cypress 15 sinaliza como inseguro.
    allowCypressEnv: false,
  },
})
