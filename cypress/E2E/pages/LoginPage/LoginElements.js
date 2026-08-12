// Seletores da tela de login do Sauce Demo

// Os campos nao tem label nem aria-label, so placeholder — por isso data-test
// em vez de papel + rotulo. data-test existe pra teste, entao nao muda quando
// o time mexe no CSS.
const LoginElements = {
  campoUsuario: () => cy.get('[data-test="username"]'),
  campoSenha: () => cy.get('[data-test="password"]'),
  botaoLogin: () => cy.get('[data-test="login-button"]'),

  // So existe no DOM depois de uma tentativa de login malsucedida
  mensagemErro: () => cy.get('[data-test="error"]'),
}

export default LoginElements
