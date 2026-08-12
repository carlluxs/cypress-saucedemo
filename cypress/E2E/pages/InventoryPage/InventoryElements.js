// Seletores da tela de produtos do Sauce Demo

const InventoryElements = {
  // Existe um botão por produto, então o nome do produto entra no seletor:
  // add-to-cart-sauce-labs-backpack, remove-sauce-labs-backpack...
  botaoAdicionar: (produto) => cy.get(`[data-test="add-to-cart-${produto}"]`),
  botaoRemover: (produto) => cy.get(`[data-test="remove-${produto}"]`),

  iconeCarrinho: () => cy.get('[data-test="shopping-cart-link"]'),

  // Único elemento sem data-test no site, por isso vai por classe.
  // Some do DOM quando o carrinho esvazia.
  contadorCarrinho: () => cy.get('.shopping_cart_badge'),
}

export default InventoryElements
