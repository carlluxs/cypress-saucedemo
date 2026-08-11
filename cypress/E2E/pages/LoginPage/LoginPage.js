// ============================================================================
// LoginPage — acoes e verificacoes da tela de login do Sauce Demo
// ============================================================================
//
// Enquanto LoginElements responde "ONDE esta o elemento", este arquivo
// responde "O QUE fazer com ele". (Documento, secao 5.1)
//
// Os metodos aqui usam a linguagem do negocio — "fazer login", "deve mostrar
// erro" — e nao a linguagem da ferramenta. Isso deixa o caso de teste legivel
// para qualquer pessoa da equipe, mesmo sem conhecer Cypress. (secao 5.4)
// ============================================================================

import LoginElements from './LoginElements'

const LoginPage = {
  // Navega ate a tela de login.
  // A barra sozinha basta: o baseUrl definido em cypress.config.js completa
  // a URL. Trocar de ambiente vira uma alteracao em um unico lugar.
  visitar: () => {
    cy.visit('/')
  },

  // Preenche as credenciais e submete o formulario.
  // Usuario e senha chegam como PARAMETROS — e por isso que o mesmo metodo
  // atende ao login valido, ao usuario bloqueado e a senha incorreta.
  fazerLogin: (usuario, senha) => {
    LoginElements.campoUsuario().type(usuario)
    LoginElements.campoSenha().type(senha)
    LoginElements.botaoLogin().click()
  },

  // Verifica que a mensagem de erro esta visivel e contem o texto esperado.
  deveMostrarErro: (texto) => {
    LoginElements.mensagemErro()
      .should('be.visible')
      .and('contain', texto)
  },
}

export default LoginPage
