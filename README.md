# Automação de testes — Sauce Demo

Suíte de testes automatizados em Cypress para a aplicação
[Sauce Demo](https://www.saucedemo.com). Cobre 24 casos de teste distribuídos em
autenticação, catálogo, carrinho e checkout.

## Execução

```bash
npm install
npm run cy:open   # interface gráfica
npm run test:e2e  # linha de comando
```

## Estrutura

```
cypress/
├── E2E/
│   ├── pages/          Page Objects
│   │   ├── LoginPage/
│   │   ├── InventoryPage/
│   │   └── CheckoutPage/
│   ├── specs/          Casos de teste
│   └── fixtures/       Massa de dados
└── support/
    └── commands.js     Comandos customizados
```

Cada tela é representada por dois arquivos:

| Arquivo | Conteúdo |
|---|---|
| `*Elements.js` | Seletores dos elementos |
| `*Page.js` | Ações e verificações |

Os casos de teste consomem apenas os métodos do Page Object. Alterações na
interface ficam restritas ao arquivo de elementos correspondente.

## Casos de teste

Estruturados em Dado / Quando / Então. O identificador no título corresponde ao
caso na documentação de testes.

```js
it('CT-007 - Deve adicionar um produto ao carrinho', () => {
  // Dado que o carrinho está vazio
  InventoryPage.contadorNaoDeveExistir()

  // Quando adiciono um produto
  InventoryPage.adicionarProduto(MOCHILA)

  // Então o contador deve exibir um item
  InventoryPage.contadorDeveExibir(1)
})
```

## Decisões técnicas

**Estratégia de seleção.** Os elementos são localizados pelo atributo
`data-test`, dedicado a testes. Atributos `id` e `class` são descartados por
estarem sujeitos a alterações de estilo.

O contador do carrinho constitui exceção: o atributo não está disponível na
aplicação, e a localização é feita por classe CSS. A limitação está registrada no
código.

**Seletores parametrizados.** Na listagem, o identificador do produto compõe o
atributo do botão (`add-to-cart-sauce-labs-backpack`). O produto é recebido como
parâmetro, evitando uma função por item de catálogo:

```js
botaoAdicionar: (produto) => cy.get(`[data-test="add-to-cart-${produto}"]`),
```

**Autenticação.** Em `login.cy.js` o login é o comportamento sob teste e utiliza
o Page Object. Nos demais módulos constitui pré-condição, resolvida pelo comando
customizado `cy.login()`.

**Isolamento.** A opção `testIsolation` está habilitada. Cada caso de teste inicia
com cookies e localStorage limpos, autenticando no `beforeEach`, o que elimina
dependência entre casos.

## Cobertura

| Módulo | Casos | Escopo |
|---|---|---|
| Autenticação | CT-001 a CT-006 | Credenciais válidas e inválidas, usuário bloqueado, campos obrigatórios, logout |
| Carrinho | CT-007 a CT-012 | Inclusão, acúmulo, remoção e persistência entre telas |
| Checkout | CT-013 a CT-018 | Fluxo completo, campos obrigatórios, composição do total, cancelamento |
| Catálogo | CT-019 a CT-024 | Listagem, ordenação por nome e preço, detalhe do produto |

## Tecnologias

Cypress 15 · JavaScript
