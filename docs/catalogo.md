# Catálogo e ordenação

Casos de teste da listagem de produtos do Sauce Demo.

Spec: [`cypress/E2E/specs/catalogo.cy.js`](../cypress/E2E/specs/catalogo.cy.js)

Todos os casos começam com o login já feito (`cy.login()` no `beforeEach`), na
listagem de produtos.

---

## CT-019 - Deve exibir todos os produtos na listagem

- **Dado que** estou autenticado
- **Quando** observo a listagem de produtos
- **Então** devem ser exibidos os 6 produtos do catálogo

**Evidência:**

![Catálogo com 6 produtos](../evidencias/catalogo.cy.js/CT-019%20-%201%20-%20catalogo%20com%206%20produtos.png)

---

## CT-020 - Deve ordenar os produtos de A a Z

- **Dado que** estou na listagem de produtos
- **Quando** seleciono a ordenação "Name (A to Z)"
- **Então** os produtos devem aparecer em ordem alfabética crescente

A validação compara a lista exibida com ela mesma ordenada, e não com uma lista
fixa escrita no teste.

**Evidência:**

![Produtos ordenados de A a Z](../evidencias/catalogo.cy.js/CT-020%20-%201%20-%20produtos%20ordenados%20de%20a%20a%20z.png)

---

## CT-021 - Deve ordenar os produtos de Z a A

- **Dado que** estou na listagem de produtos
- **Quando** seleciono a ordenação "Name (Z to A)"
- **Então** os produtos devem aparecer em ordem alfabética decrescente

**Evidência:**

![Produtos ordenados de Z a A](../evidencias/catalogo.cy.js/CT-021%20-%201%20-%20produtos%20ordenados%20de%20z%20a%20a.png)

---

## CT-022 - Deve ordenar os produtos pelo menor preço

- **Dado que** estou na listagem de produtos
- **Quando** seleciono a ordenação "Price (low to high)"
- **Então** os produtos devem aparecer do menor para o maior preço

**Evidência:**

![Produtos do menor para o maior preço](../evidencias/catalogo.cy.js/CT-022%20-%201%20-%20produtos%20do%20menor%20para%20o%20maior%20preco.png)

---

## CT-023 - Deve ordenar os produtos pelo maior preço

- **Dado que** estou na listagem de produtos
- **Quando** seleciono a ordenação "Price (high to low)"
- **Então** os produtos devem aparecer do maior para o menor preço

**Evidência:**

![Produtos do maior para o menor preço](../evidencias/catalogo.cy.js/CT-023%20-%201%20-%20produtos%20do%20maior%20para%20o%20menor%20preco.png)

---

## CT-024 - Deve abrir o detalhe de um produto

- **Dado que** estou na listagem de produtos
- **Quando** seleciono o nome do produto "Sauce Labs Backpack"
- **Então** devo ver a tela de detalhe do produto, com o nome e o preço visíveis

**Evidência:**

![Detalhe do produto](../evidencias/catalogo.cy.js/CT-024%20-%201%20-%20detalhe%20do%20produto.png)
