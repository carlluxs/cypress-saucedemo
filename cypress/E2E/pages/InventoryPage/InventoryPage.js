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

  ordenarPor: (opcao) => {
    InventoryElements.seletorOrdenacao().select(opcao)
  },

  fazerLogout: () => {
    InventoryElements.botaoMenu().click()
    InventoryElements.linkLogout().click()
  },

  deveExibirQuantidadeDeProdutos: (quantidade) => {
    InventoryElements.itens().should('have.length', quantidade)
  },

  // Pega os nomes da tela e compara com a mesma lista ordenada por código.
  // Se forem iguais, a ordenação do site está correta.
  nomesDevemEstarOrdenados: (ordem) => {
    InventoryElements.nomesDosProdutos().then(($nomes) => {
      const daTela = [...$nomes].map((el) => el.innerText)
      const esperado = [...daTela].sort()
      if (ordem === 'desc') esperado.reverse()
      expect(daTela).to.deep.equal(esperado)
    })
  },

  precosDevemEstarOrdenados: (ordem) => {
    InventoryElements.precosDosProdutos().then(($precos) => {
      const daTela = [...$precos].map((el) => Number(el.innerText.replace('$', '')))
      const esperado = [...daTela].sort((a, b) => a - b)
      if (ordem === 'desc') esperado.reverse()
      expect(daTela).to.deep.equal(esperado)
    })
  },
}

export default InventoryPage
