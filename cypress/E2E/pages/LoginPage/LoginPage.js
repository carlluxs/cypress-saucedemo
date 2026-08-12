// Ações e verificações da tela de login do Sauce Demo

import LoginElements from './LoginElements'

const LoginPage = {
  // A barra sozinha basta: o baseUrl do cypress.config.js completa a URL
  visitar: () => {
    cy.visit('/')
  },

  fazerLogin: (usuario, senha) => {
    LoginElements.campoUsuario().type(usuario)
    LoginElements.campoSenha().type(senha)
    LoginElements.botaoLogin().click()
  },

  deveMostrarErro: (texto) => {
    LoginElements.mensagemErro()
      .should('be.visible')
      .and('contain', texto)
  },
}

export default LoginPage
