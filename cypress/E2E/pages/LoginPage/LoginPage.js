// Acoes e verificacoes da tela de login do Sauce Demo

import LoginElements from './LoginElements'

const LoginPage = {
  // A barra sozinha basta: o baseUrl do cypress.config.js completa a URL
  visitar: () => {
    cy.visit('/')
  },

  // Usuario e senha como parametro: o mesmo metodo serve pro login valido,
  // pro usuario bloqueado e pra senha errada
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
