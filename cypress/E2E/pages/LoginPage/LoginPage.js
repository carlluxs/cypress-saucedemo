// Ações e verificações da tela de login do Sauce Demo

import LoginElements from './LoginElements'

const LoginPage = {
  // A barra sozinha basta: o baseUrl do cypress.config.js completa a URL
  visitar: () => {
    cy.visit('/')
  },

  // O type() do Cypress reclama de texto vazio, então só preenche o que veio.
  // É o que permite testar o campo obrigatório passando '' no lugar do valor.
  fazerLogin: (usuario, senha) => {
    if (usuario) LoginElements.campoUsuario().type(usuario)
    if (senha) LoginElements.campoSenha().type(senha)
    LoginElements.botaoLogin().click()
  },

  confirmarSemPreencher: () => {
    LoginElements.botaoLogin().click()
  },

  deveMostrarErro: (texto) => {
    LoginElements.mensagemErro()
      .should('be.visible')
      .and('contain', texto)
  },
}

export default LoginPage
