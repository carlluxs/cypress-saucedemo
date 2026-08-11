// ============================================================================
// LoginElements — seletores da tela de login do Sauce Demo
// ============================================================================
//
// RESPONSABILIDADE UNICA: encontrar elementos na tela.
//
// Este arquivo NUNCA contem:
//   - acoes    (clicar, digitar, navegar)
//   - asercoes (should, expect)
//
// Por que essa separacao rigida?
// Quando a interface muda — um seletor e renomeado, um campo troca de lugar —
// so ESTE arquivo precisa ser alterado. Todos os metodos de LoginPage que o
// utilizam continuam corretos automaticamente. (Documento, secao 5.1)
//
// ----------------------------------------------------------------------------
// DECISAO DE ARQUITETURA: por que data-test e nao papel + rotulo?
// ----------------------------------------------------------------------------
// A estrategia preferencial (secao 10.1) e localizar elementos por papel
// semantico + rotulo acessivel. Ela NAO e aplicavel nesta tela: os campos do
// Sauce Demo nao possuem <label> associado nem aria-label — apenas placeholder,
// que nao constitui rotulo acessivel.
//
// Recorremos entao ao seletor dedicado (secao 10.2). Entre os tres atributos
// disponiveis no HTML — id, name e data-test — escolhemos data-test porque:
//
//   id e class  -> existem para estilo e comportamento da APLICACAO;
//                  mudam quando o time refatora CSS, sem aviso.
//   data-test   -> existe exclusivamente para TESTE;
//                  e um contrato explicito, ninguem altera por acidente.
//
// Nota: no projeto de referencia o atributo seria ADICIONADO ao codigo de
// producao. Aqui isso e impossivel (site de terceiro), mas o Sauce Demo ja o
// fornece por ser uma aplicacao destinada a treino de automacao.
// ============================================================================

const LoginElements = {
  // Campo de usuario
  campoUsuario: () => cy.get('[data-test="username"]'),

  // Campo de senha
  campoSenha: () => cy.get('[data-test="password"]'),

  // Botao de submissao do formulario
  botaoLogin: () => cy.get('[data-test="login-button"]'),

  // Container da mensagem de erro — so existe no DOM apos uma tentativa
  // de login malsucedida.
  mensagemErro: () => cy.get('[data-test="error"]'),
}

export default LoginElements
