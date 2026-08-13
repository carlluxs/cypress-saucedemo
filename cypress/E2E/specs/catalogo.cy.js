// Casos de teste — Catálogo e ordenação (Sauce Demo)

import InventoryPage from '../pages/InventoryPage/InventoryPage'

describe('Catálogo e ordenação', () => {
  beforeEach(() => {
    cy.login()
  })

  it('CT-019 - Deve exibir todos os produtos na listagem', () => {
    // Dado que estou autenticado
    // Quando observo a listagem de produtos
    // Então devem ser exibidos os 6 produtos do catálogo
    InventoryPage.deveExibirQuantidadeDeProdutos(6)
    cy.evidencia('catalogo com 6 produtos')
  })

  it('CT-020 - Deve ordenar os produtos de A a Z', () => {
    // Dado que estou na listagem de produtos
    // Quando seleciono a ordenação por nome crescente
    InventoryPage.ordenarPor('az')

    // Então os produtos devem aparecer em ordem alfabética crescente
    InventoryPage.nomesDevemEstarOrdenados('asc')
    cy.evidencia('produtos ordenados de a a z')
  })

  it('CT-021 - Deve ordenar os produtos de Z a A', () => {
    // Dado que estou na listagem de produtos
    // Quando seleciono a ordenação por nome decrescente
    InventoryPage.ordenarPor('za')

    // Então os produtos devem aparecer em ordem alfabética decrescente
    InventoryPage.nomesDevemEstarOrdenados('desc')
    cy.evidencia('produtos ordenados de z a a')
  })

  it('CT-022 - Deve ordenar os produtos pelo menor preço', () => {
    // Dado que estou na listagem de produtos
    // Quando seleciono a ordenação por preço crescente
    InventoryPage.ordenarPor('lohi')

    // Então os produtos devem aparecer do menor para o maior preço
    InventoryPage.precosDevemEstarOrdenados('asc')
    cy.evidencia('produtos do menor para o maior preco')
  })

  it('CT-023 - Deve ordenar os produtos pelo maior preço', () => {
    // Dado que estou na listagem de produtos
    // Quando seleciono a ordenação por preço decrescente
    InventoryPage.ordenarPor('hilo')

    // Então os produtos devem aparecer do maior para o menor preço
    InventoryPage.precosDevemEstarOrdenados('desc')
    cy.evidencia('produtos do maior para o menor preco')
  })

  it('CT-024 - Deve abrir o detalhe de um produto', () => {
    // Dado que estou na listagem de produtos
    // Quando seleciono o nome de um produto
    cy.contains('[data-test="inventory-item-name"]', 'Sauce Labs Backpack').click()

    // Então devo ver a tela de detalhe com as informações do produto
    cy.url().should('include', '/inventory-item.html')
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack')
    cy.get('[data-test="inventory-item-price"]').should('be.visible')
    cy.evidencia('detalhe do produto')
  })
})
