// Seletores das telas de checkout do Sauce Demo

const CheckoutElements = {
  // Tela do carrinho
  botaoCheckout: () => cy.get('[data-test="checkout"]'),
  botaoContinuarComprando: () => cy.get('[data-test="continue-shopping"]'),

  // Dados do comprador
  campoNome: () => cy.get('[data-test="firstName"]'),
  campoSobrenome: () => cy.get('[data-test="lastName"]'),
  campoCep: () => cy.get('[data-test="postalCode"]'),
  botaoContinuar: () => cy.get('[data-test="continue"]'),
  botaoCancelar: () => cy.get('[data-test="cancel"]'),
  mensagemErro: () => cy.get('[data-test="error"]'),

  // Resumo do pedido
  subtotal: () => cy.get('[data-test="subtotal-label"]'),
  imposto: () => cy.get('[data-test="tax-label"]'),
  total: () => cy.get('[data-test="total-label"]'),
  botaoFinalizar: () => cy.get('[data-test="finish"]'),

  // Confirmação
  tituloConfirmacao: () => cy.get('[data-test="complete-header"]'),
  botaoVoltarProdutos: () => cy.get('[data-test="back-to-products"]'),
}

export default CheckoutElements
