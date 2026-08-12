// Casos de teste — Checkout (Sauce Demo)

import InventoryPage from '../pages/InventoryPage/InventoryPage'
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage'

const MOCHILA = 'sauce-labs-backpack'

describe('Checkout', () => {
  // Todo cenário de checkout começa com um produto no carrinho
  beforeEach(() => {
    cy.login()
    InventoryPage.adicionarProduto(MOCHILA)
    InventoryPage.abrirCarrinho()
  })

  it('CT-013 - Deve concluir a compra com dados válidos', () => {
    // Dado que há um produto no carrinho
    CheckoutPage.iniciarCheckout()

    // Quando preencho os dados e concluo o pedido
    CheckoutPage.preencherDados('Carlos', 'Rodrigues', '88000000')
    CheckoutPage.continuar()
    CheckoutPage.finalizar()

    // Então devo ver a confirmação do pedido
    CheckoutPage.deveConfirmarPedido()
    cy.url().should('include', '/checkout-complete.html')
  })

  it('CT-014 - Não deve avançar sem preencher o nome', () => {
    // Dado que estou na primeira etapa do checkout
    CheckoutPage.iniciarCheckout()

    // Quando tento continuar sem o nome
    CheckoutPage.preencherDados('', 'Rodrigues', '88000000')
    CheckoutPage.continuar()

    // Então devo ver o aviso de campo obrigatório
    CheckoutPage.deveMostrarErro('Error: First Name is required')
  })

  it('CT-015 - Não deve avançar sem preencher o sobrenome', () => {
    // Dado que estou na primeira etapa do checkout
    CheckoutPage.iniciarCheckout()

    // Quando tento continuar sem o sobrenome
    CheckoutPage.preencherDados('Carlos', '', '88000000')
    CheckoutPage.continuar()

    // Então devo ver o aviso de campo obrigatório
    CheckoutPage.deveMostrarErro('Error: Last Name is required')
  })

  it('CT-016 - Não deve avançar sem preencher o CEP', () => {
    // Dado que estou na primeira etapa do checkout
    CheckoutPage.iniciarCheckout()

    // Quando tento continuar sem o CEP
    CheckoutPage.preencherDados('Carlos', 'Rodrigues', '')
    CheckoutPage.continuar()

    // Então devo ver o aviso de campo obrigatório
    CheckoutPage.deveMostrarErro('Error: Postal Code is required')
  })

  it('CT-017 - O total deve ser o subtotal mais o imposto', () => {
    // Dado que avancei até o resumo do pedido
    CheckoutPage.iniciarCheckout()
    CheckoutPage.preencherDados('Carlos', 'Rodrigues', '88000000')

    // Quando chego na tela de resumo
    CheckoutPage.continuar()

    // Então o total deve fechar com a soma dos valores
    CheckoutPage.totalDeveSerSubtotalMaisImposto()
  })

  it('CT-018 - Deve cancelar o checkout', () => {
    // Dado que estou na primeira etapa do checkout
    CheckoutPage.iniciarCheckout()

    // Quando cancelo
    CheckoutPage.cancelar()

    // Então devo voltar para a tela do carrinho
    cy.url().should('include', '/cart.html')
  })
})
