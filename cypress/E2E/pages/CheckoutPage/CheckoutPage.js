// Ações e verificações do checkout do Sauce Demo

import CheckoutElements from './CheckoutElements'

// Os valores vêm como "Item total: $29.99" — pega só o número
const valorDe = (texto) => Number(texto.replace(/[^0-9.]/g, ''))

const CheckoutPage = {
  iniciarCheckout: () => {
    CheckoutElements.botaoCheckout().click()
  },

  continuarComprando: () => {
    CheckoutElements.botaoContinuarComprando().click()
  },

  preencherDados: (nome, sobrenome, cep) => {
    if (nome) CheckoutElements.campoNome().type(nome)
    if (sobrenome) CheckoutElements.campoSobrenome().type(sobrenome)
    if (cep) CheckoutElements.campoCep().type(cep)
  },

  continuar: () => {
    CheckoutElements.botaoContinuar().click()
  },

  cancelar: () => {
    CheckoutElements.botaoCancelar().click()
  },

  finalizar: () => {
    CheckoutElements.botaoFinalizar().click()
  },

  deveMostrarErro: (texto) => {
    CheckoutElements.mensagemErro()
      .should('be.visible')
      .and('contain', texto)
  },

  deveConfirmarPedido: () => {
    CheckoutElements.tituloConfirmacao()
      .should('be.visible')
      .and('have.text', 'Thank you for your order!')
  },

  // O total exibido tem que bater com o subtotal mais o imposto.
  // toFixed(2) deixa o número com 2 casas, que é como o site mostra o preço.
  totalDeveSerSubtotalMaisImposto: () => {
    CheckoutElements.subtotal().invoke('text').then((textoSubtotal) => {
      CheckoutElements.imposto().invoke('text').then((textoImposto) => {
        const esperado = (valorDe(textoSubtotal) + valorDe(textoImposto)).toFixed(2)
        CheckoutElements.total().should('contain', esperado)
      })
    })
  },
}

export default CheckoutPage
