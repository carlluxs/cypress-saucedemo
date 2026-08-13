// Casos de teste — Carrinho de compras (Sauce Demo)

import InventoryPage from '../pages/InventoryPage/InventoryPage'
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage'

const MOCHILA = 'sauce-labs-backpack'
const CAMISETA = 'sauce-labs-bolt-t-shirt'

describe('Carrinho de compras', () => {
  beforeEach(() => {
    cy.login()
  })

  it('CT-007 - Deve adicionar um produto ao carrinho', () => {
    // Dado que o carrinho está vazio
    InventoryPage.contadorNaoDeveExistir()
    cy.evidencia('carrinho vazio')

    // Quando adiciono um produto
    InventoryPage.adicionarProduto(MOCHILA)

    // Então o contador deve exibir um item e o produto deve constar no carrinho
    InventoryPage.contadorDeveExibir(1)
    InventoryPage.produtoDeveEstarNoCarrinho(MOCHILA)
    cy.evidencia('produto adicionado')
  })

  it('CT-008 - Deve acumular a quantidade ao adicionar vários produtos', () => {
    // Dado que o carrinho está vazio
    InventoryPage.contadorNaoDeveExistir()

    // Quando adiciono dois produtos diferentes
    InventoryPage.adicionarProduto(MOCHILA)
    InventoryPage.adicionarProduto(CAMISETA)

    // Então o contador deve refletir os dois itens
    InventoryPage.contadorDeveExibir(2)
    cy.evidencia('dois produtos no carrinho')
  })

  it('CT-009 - Deve remover um produto do carrinho', () => {
    // Dado que há um produto no carrinho
    InventoryPage.adicionarProduto(MOCHILA)
    InventoryPage.contadorDeveExibir(1)
    cy.evidencia('produto no carrinho')

    // Quando removo esse produto
    InventoryPage.removerProduto(MOCHILA)

    // Então o carrinho deve voltar a ficar vazio
    InventoryPage.contadorNaoDeveExistir()
    InventoryPage.produtoNaoDeveEstarNoCarrinho(MOCHILA)
    cy.evidencia('carrinho vazio apos remover')
  })

  it('CT-010 - Deve manter o item no carrinho ao navegar até a tela do carrinho', () => {
    // Dado que adicionei um produto
    InventoryPage.adicionarProduto(MOCHILA)

    // Quando abro a tela do carrinho
    InventoryPage.abrirCarrinho()

    // Então devo estar na tela do carrinho, com o produto listado
    cy.url().should('include', '/cart.html')
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.evidencia('produto listado na tela do carrinho')
  })

  it('CT-011 - Deve voltar para a listagem sem esvaziar o carrinho', () => {
    // Dado que estou na tela do carrinho com um produto
    InventoryPage.adicionarProduto(MOCHILA)
    InventoryPage.abrirCarrinho()

    cy.evidencia('carrinho antes de continuar comprando')

    // Quando seleciono "Continue Shopping"
    CheckoutPage.continuarComprando()

    // Então devo voltar à listagem com o contador preservado
    cy.url().should('include', '/inventory.html')
    InventoryPage.contadorDeveExibir(1)
    cy.evidencia('listagem com contador preservado')
  })

  it('CT-012 - Deve remover um produto pela tela do carrinho', () => {
    // Dado que estou na tela do carrinho com um produto
    InventoryPage.adicionarProduto(MOCHILA)
    InventoryPage.abrirCarrinho()

    cy.evidencia('produto na tela do carrinho')

    // Quando removo o produto por essa tela
    InventoryPage.removerProduto(MOCHILA)

    // Então o carrinho deve ficar vazio
    InventoryPage.contadorNaoDeveExistir()
    cy.evidencia('carrinho vazio')
  })
})
