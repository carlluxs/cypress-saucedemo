// Comandos customizados do Cypress

import LoginElements from '../E2E/pages/LoginPage/LoginElements'

// Usado nos testes onde o login e so contexto (carrinho, checkout).
// Os testes de autenticacao nao usam isso — la o login e o que esta sob teste.
Cypress.Commands.add('login', (usuario = 'standard_user', senha = 'secret_sauce') => {
  cy.visit('/')
  LoginElements.campoUsuario().type(usuario)
  LoginElements.campoSenha().type(senha)
  LoginElements.botaoLogin().click()

  // So devolve o controle depois que a autenticacao concluiu
  cy.url().should('include', '/inventory.html')
})
