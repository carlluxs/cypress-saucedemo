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

    cy.evidencia('formulario de checkout')

    // Quando preencho os dados e concluo o pedido
    CheckoutPage.preencherDados('Carlos', 'Rodrigues', '88000000')
    cy.evidencia('dados preenchidos')
    CheckoutPage.continuar()
    cy.evidencia('resumo do pedido')
    CheckoutPage.finalizar()

    // Então devo ver a confirmação do pedido
    CheckoutPage.deveConfirmarPedido()
    cy.url().should('include', '/checkout-complete.html')
    cy.evidencia('pedido confirmado')
  })

  it('CT-014 - Não deve avançar sem preencher o nome', () => {
    // Dado que estou na primeira etapa do checkout
    CheckoutPage.iniciarCheckout()

    // Quando tento continuar sem o nome
    CheckoutPage.preencherDados('', 'Rodrigues', '88000000')
    CheckoutPage.continuar()

    // Então devo ver o aviso de campo obrigatório
    CheckoutPage.deveMostrarErro('Error: First Name is required')
    cy.evidencia('erro de nome obrigatorio')
  })

  it('CT-015 - Não deve avançar sem preencher o sobrenome', () => {
    // Dado que estou na primeira etapa do checkout
    CheckoutPage.iniciarCheckout()

    // Quando tento continuar sem o sobrenome
    CheckoutPage.preencherDados('Carlos', '', '88000000')
    CheckoutPage.continuar()

    // Então devo ver o aviso de campo obrigatório
    CheckoutPage.deveMostrarErro('Error: Last Name is required')
    cy.evidencia('erro de sobrenome obrigatorio')
  })

  it('CT-016 - Não deve avançar sem preencher o CEP', () => {
    // Dado que estou na primeira etapa do checkout
    CheckoutPage.iniciarCheckout()

    // Quando tento continuar sem o CEP
    CheckoutPage.preencherDados('Carlos', 'Rodrigues', '')
    CheckoutPage.continuar()

    // Então devo ver o aviso de campo obrigatório
    CheckoutPage.deveMostrarErro('Error: Postal Code is required')
    cy.evidencia('erro de cep obrigatorio')
  })

  it('CT-017 - O total deve ser o subtotal mais o imposto', () => {
    // Dado que avancei até o resumo do pedido
    CheckoutPage.iniciarCheckout()
    CheckoutPage.preencherDados('Carlos', 'Rodrigues', '88000000')

    // Quando chego na tela de resumo
    CheckoutPage.continuar()

    // Então o total deve fechar com a soma dos valores
    CheckoutPage.totalDeveSerSubtotalMaisImposto()
    cy.evidencia('subtotal imposto e total')
  })

  it('CT-018 - Deve cancelar o checkout', () => {
    // Dado que estou na primeira etapa do checkout
    CheckoutPage.iniciarCheckout()

    cy.evidencia('primeira etapa do checkout')

    // Quando cancelo
    CheckoutPage.cancelar()

    // Então devo voltar para a tela do carrinho
    cy.url().should('include', '/cart.html')
    cy.evidencia('de volta no carrinho')
  })
})
