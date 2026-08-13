# Carrinho de compras

Casos de teste do carrinho do Sauce Demo.

Spec: [`cypress/E2E/specs/carrinho.cy.js`](../cypress/E2E/specs/carrinho.cy.js)

Todos os casos começam com o login já feito (`cy.login()` no `beforeEach`). O
produto usado como referência é a "Sauce Labs Backpack".

---

## CT-007 - Deve adicionar um produto ao carrinho

- **Dado que** estou autenticado com o carrinho vazio
- **Quando** adiciono a "Sauce Labs Backpack" pela listagem
- **Então** o contador deve exibir 1 item e o produto deve constar no carrinho

**Evidências:**

| Carrinho vazio | Produto adicionado |
| --- | --- |
| ![Carrinho vazio](../evidencias/carrinho.cy.js/CT-007%20-%201%20-%20carrinho%20vazio.png) | ![Produto adicionado](../evidencias/carrinho.cy.js/CT-007%20-%202%20-%20produto%20adicionado.png) |

---

## CT-008 - Deve acumular a quantidade ao adicionar vários produtos

- **Dado que** estou autenticado com o carrinho vazio
- **Quando** adiciono a "Sauce Labs Backpack"
  **E** adiciono a "Sauce Labs Bolt T-Shirt"
- **Então** o contador deve exibir 2 itens

**Evidência:**

![Dois produtos no carrinho](../evidencias/carrinho.cy.js/CT-008%20-%201%20-%20dois%20produtos%20no%20carrinho.png)

---

## CT-009 - Deve remover um produto do carrinho

- **Dado que** estou autenticado com a "Sauce Labs Backpack" no carrinho
- **Quando** removo o produto pela listagem
- **Então** o contador deve desaparecer e o produto não deve mais constar no carrinho

**Evidências:**

| Produto no carrinho | Carrinho vazio após remover |
| --- | --- |
| ![Produto no carrinho](../evidencias/carrinho.cy.js/CT-009%20-%201%20-%20produto%20no%20carrinho.png) | ![Carrinho vazio após remover](../evidencias/carrinho.cy.js/CT-009%20-%202%20-%20carrinho%20vazio%20apos%20remover.png) |

---

## CT-010 - Deve manter o item no carrinho ao navegar até a tela do carrinho

- **Dado que** estou autenticado com o carrinho vazio
  **E que** adicionei a "Sauce Labs Backpack"
- **Quando** abro a tela do carrinho pelo ícone
- **Então** devo estar na tela do carrinho e a "Sauce Labs Backpack" deve aparecer listada

**Evidência:**

![Produto listado na tela do carrinho](../evidencias/carrinho.cy.js/CT-010%20-%201%20-%20produto%20listado%20na%20tela%20do%20carrinho.png)

---

## CT-011 - Deve voltar para a listagem sem esvaziar o carrinho

- **Dado que** estou na tela do carrinho com a "Sauce Labs Backpack"
- **Quando** seleciono "Continue Shopping"
- **Então** devo voltar para a listagem de produtos e o contador deve continuar exibindo 1 item

Sair do carrinho não descarta o que já foi adicionado.

**Evidências:**

| Carrinho antes de continuar comprando | Listagem com contador preservado |
| --- | --- |
| ![Carrinho antes de continuar comprando](../evidencias/carrinho.cy.js/CT-011%20-%201%20-%20carrinho%20antes%20de%20continuar%20comprando.png) | ![Listagem com contador preservado](../evidencias/carrinho.cy.js/CT-011%20-%202%20-%20listagem%20com%20contador%20preservado.png) |

---

## CT-012 - Deve remover um produto pela tela do carrinho

- **Dado que** estou na tela do carrinho com a "Sauce Labs Backpack"
- **Quando** removo o produto por essa tela
- **Então** o contador deve desaparecer

A remoção funciona tanto pela listagem (CT-009) quanto pela tela do carrinho.

**Evidências:**

| Produto na tela do carrinho | Carrinho vazio |
| --- | --- |
| ![Produto na tela do carrinho](../evidencias/carrinho.cy.js/CT-012%20-%201%20-%20produto%20na%20tela%20do%20carrinho.png) | ![Carrinho vazio](../evidencias/carrinho.cy.js/CT-012%20-%202%20-%20carrinho%20vazio.png) |
