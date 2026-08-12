// Casos de teste — Carrinho de compras (Sauce Demo)

import InventoryPage from '../pages/InventoryPage/InventoryPage'

const MOCHILA = 'sauce-labs-backpack'
const CAMISETA = 'sauce-labs-bolt-t-shirt'

describe('Carrinho de compras', () => {
  beforeEach(() => {
    cy.login()
  })

  it('CT-007 - Deve adicionar um produto ao carrinho', () => {
    // Dado que o carrinho está vazio
    InventoryPage.contadorNaoDeveExistir()

    // Quando adiciono um produto
    InventoryPage.adicionarProduto(MOCHILA)

    // Então o contador deve exibir um item e o produto deve constar no carrinho
    InventoryPage.contadorDeveExibir(1)
    InventoryPage.produtoDeveEstarNoCarrinho(MOCHILA)
  })

  it('CT-008 - Deve acumular a quantidade ao adicionar vários produtos', () => {
    // Dado que o carrinho está vazio
    InventoryPage.contadorNaoDeveExistir()

    // Quando adiciono dois produtos diferentes
    InventoryPage.adicionarProduto(MOCHILA)
    InventoryPage.adicionarProduto(CAMISETA)

    // Então o contador deve refletir os dois itens
    InventoryPage.contadorDeveExibir(2)
  })

  it('CT-009 - Deve remover um produto do carrinho', () => {
    // Dado que há um produto no carrinho
    InventoryPage.adicionarProduto(MOCHILA)
    InventoryPage.contadorDeveExibir(1)

    // Quando removo esse produto
    InventoryPage.removerProduto(MOCHILA)

    // Então o carrinho deve voltar a ficar vazio
    InventoryPage.contadorNaoDeveExistir()
    InventoryPage.produtoNaoDeveEstarNoCarrinho(MOCHILA)
  })

  it('CT-010 - Deve manter o item no carrinho ao navegar até a tela do carrinho', () => {
    // Dado que adicionei um produto
    InventoryPage.adicionarProduto(MOCHILA)

    // Quando abro a tela do carrinho
    InventoryPage.abrirCarrinho()

    // Então devo estar na tela do carrinho, com o produto listado
    cy.url().should('include', '/cart.html')
    cy.contains('Sauce Labs Backpack').should('be.visible')
  })
})
