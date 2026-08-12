// Seletores da tela de produtos do Sauce Demo

const InventoryElements = {
  // Existe um botão por produto, então o nome do produto entra no seletor:
  // add-to-cart-sauce-labs-backpack, remove-sauce-labs-backpack...
  botaoAdicionar: (produto) => cy.get(`[data-test="add-to-cart-${produto}"]`),
  botaoRemover: (produto) => cy.get(`[data-test="remove-${produto}"]`),

  iconeCarrinho: () => cy.get('[data-test="shopping-cart-link"]'),

  // Listagem de produtos
  seletorOrdenacao: () => cy.get('[data-test="product-sort-container"]'),
  itens: () => cy.get('[data-test="inventory-item"]'),
  nomesDosProdutos: () => cy.get('[data-test="inventory-item-name"]'),
  precosDosProdutos: () => cy.get('[data-test="inventory-item-price"]'),

  // Menu lateral
  botaoMenu: () => cy.get('#react-burger-menu-btn'),
  linkLogout: () => cy.get('[data-test="logout-sidebar-link"]'),

  // Único elemento sem data-test no site, por isso vai por classe.
  // Some do DOM quando o carrinho esvazia.
  contadorCarrinho: () => cy.get('.shopping_cart_badge'),
}

export default InventoryElements
