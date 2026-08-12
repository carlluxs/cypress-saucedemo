// Comandos customizados do Cypress

import LoginElements from '../E2E/pages/LoginPage/LoginElements'

// Print da tela pra evidência do caso de teste.
// O arquivo sai como "CT-007 - 1 - carrinho vazio.png", numerado na ordem
// em que foi chamado dentro do teste.
let passo = 0
beforeEach(() => {
  passo = 0
})

Cypress.Commands.add('evidencia', (descricao) => {
  passo += 1
  const caso = Cypress.currentTest.title.split(' - ')[0]
  cy.screenshot(`${caso} - ${passo} - ${descricao}`, { overwrite: true })
})

Cypress.Commands.add('login', (usuario = 'standard_user', senha = 'secret_sauce') => {
  cy.visit('/')
  LoginElements.campoUsuario().type(usuario)
  LoginElements.campoSenha().type(senha)
  LoginElements.botaoLogin().click()

  // Espera a listagem carregar antes de devolver o controle pro teste
  cy.url().should('include', '/inventory.html')
})
