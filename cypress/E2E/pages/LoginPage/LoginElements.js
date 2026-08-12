// Seletores da tela de login do Sauce Demo

const LoginElements = {
  campoUsuario: () => cy.get('[data-test="username"]'),
  campoSenha: () => cy.get('[data-test="password"]'),
  botaoLogin: () => cy.get('[data-test="login-button"]'),

  // Só existe no DOM depois de uma tentativa de login malsucedida
  mensagemErro: () => cy.get('[data-test="error"]'),
}

export default LoginElements
