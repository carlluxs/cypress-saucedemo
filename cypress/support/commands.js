// Comandos customizados do Cypress

import LoginElements from '../E2E/pages/LoginPage/LoginElements'

Cypress.Commands.add('login', (usuario = 'standard_user', senha = 'secret_sauce') => {
  cy.visit('/')
  LoginElements.campoUsuario().type(usuario)
  LoginElements.campoSenha().type(senha)
  LoginElements.botaoLogin().click()

  // Espera a listagem carregar antes de devolver o controle pro teste
  cy.url().should('include', '/inventory.html')
})
