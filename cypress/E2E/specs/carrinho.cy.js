// Casos de teste — Carrinho de compras (Sauce Demo)

import InventoryPage from '../pages/InventoryPage/InventoryPage'

const MOCHILA = 'sauce-labs-backpack'
const CAMISETA = 'sauce-labs-bolt-t-shirt'

describe('Carrinho de compras', () => {
  // Aqui o login e contexto, nao o que esta sob teste — por isso cy.login()
  // em vez do POM de autenticacao.
  beforeEach(() => {
    cy.login()
  })

  it('Deve adicionar um produto ao carrinho', () => {
    // Dado que o carrinho esta vazio
    InventoryPage.contadorNaoDeveExistir()

    // Quando adiciono um produto
    InventoryPage.adicionarProduto(MOCHILA)

    // Entao o contador deve exibir um item e o produto deve constar no carrinho
    InventoryPage.contadorDeveExibir(1)
    InventoryPage.produtoDeveEstarNoCarrinho(MOCHILA)
  })

  it('Deve acumular a quantidade ao adicionar varios produtos', () => {
    // Dado que o carrinho esta vazio
    InventoryPage.contadorNaoDeveExistir()

    // Quando adiciono dois produtos diferentes
    InventoryPage.adicionarProduto(MOCHILA)
    InventoryPage.adicionarProduto(CAMISETA)

    // Entao o contador deve refletir os dois itens
    InventoryPage.contadorDeveExibir(2)
  })

  it('Deve remover um produto do carrinho', () => {
    // Dado que ha um produto no carrinho
    InventoryPage.adicionarProduto(MOCHILA)
    InventoryPage.contadorDeveExibir(1)

    // Quando removo esse produto
    InventoryPage.removerProduto(MOCHILA)

    // Entao o carrinho deve voltar a ficar vazio
    InventoryPage.contadorNaoDeveExistir()
    InventoryPage.produtoNaoDeveEstarNoCarrinho(MOCHILA)
  })

  it('Deve manter o item no carrinho ao navegar ate a tela do carrinho', () => {
    // Dado que adicionei um produto
    InventoryPage.adicionarProduto(MOCHILA)

    // Quando abro a tela do carrinho
    InventoryPage.abrirCarrinho()

    // Entao devo estar na tela do carrinho, com o produto listado
    cy.url().should('include', '/cart.html')
    cy.contains('Sauce Labs Backpack').should('be.visible')
  })
})
