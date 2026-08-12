// Ações e verificações da tela de produtos do Sauce Demo

import InventoryElements from './InventoryElements'

const InventoryPage = {
  adicionarProduto: (produto) => {
    InventoryElements.botaoAdicionar(produto).click()
  },

  removerProduto: (produto) => {
    InventoryElements.botaoRemover(produto).click()
  },

  abrirCarrinho: () => {
    InventoryElements.iconeCarrinho().click()
  },

  contadorDeveExibir: (quantidade) => {
    InventoryElements.contadorCarrinho()
      .should('be.visible')
      .and('have.text', String(quantidade))
  },

  // 'not.exist' porque o site remove o contador do DOM quando não há itens
  contadorNaoDeveExistir: () => {
    InventoryElements.contadorCarrinho().should('not.exist')
  },

  // O botão vira "Remove" quando o produto está no carrinho
  produtoDeveEstarNoCarrinho: (produto) => {
    InventoryElements.botaoRemover(produto).should('be.visible')
  },

  produtoNaoDeveEstarNoCarrinho: (produto) => {
    InventoryElements.botaoAdicionar(produto).should('be.visible')
  },
}

export default InventoryPage
