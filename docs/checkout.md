# Checkout

Casos de teste do fluxo de compra do Sauce Demo.

Spec: [`cypress/E2E/specs/checkout.cy.js`](../cypress/E2E/specs/checkout.cy.js)

Todos os casos começam autenticados, com a "Sauce Labs Backpack" no carrinho e
a tela do carrinho aberta (`beforeEach`).

O checkout tem três etapas: dados do comprador (`checkout-step-one`), resumo do
pedido (`checkout-step-two`) e confirmação (`checkout-complete`).

---

## CT-013 - Deve concluir a compra com dados válidos

- **Dado que** estou na tela do carrinho com um produto
- **Quando** inicio o checkout
  **E** preencho nome, sobrenome e CEP
  **E** continuo para o resumo do pedido
  **E** finalizo o pedido
- **Então** devo ver a confirmação do pedido

**Evidências:**

| Formulário de checkout | Dados preenchidos |
| --- | --- |
| ![Formulário de checkout](../evidencias/checkout.cy.js/CT-013%20-%201%20-%20formulario%20de%20checkout.png) | ![Dados preenchidos](../evidencias/checkout.cy.js/CT-013%20-%202%20-%20dados%20preenchidos.png) |

| Resumo do pedido | Pedido confirmado |
| --- | --- |
| ![Resumo do pedido](../evidencias/checkout.cy.js/CT-013%20-%203%20-%20resumo%20do%20pedido.png) | ![Pedido confirmado](../evidencias/checkout.cy.js/CT-013%20-%204%20-%20pedido%20confirmado.png) |

---

## CT-014 - Não deve avançar sem preencher o nome

- **Dado que** estou na primeira etapa do checkout
- **Quando** preencho apenas sobrenome e CEP, deixando o nome em branco
  **E** tento continuar
- **Então** devo ver a mensagem "Error: First Name is required" e o fluxo não deve avançar

**Evidência:**

![Erro de nome obrigatório](../evidencias/checkout.cy.js/CT-014%20-%201%20-%20erro%20de%20nome%20obrigatorio.png)

---

## CT-015 - Não deve avançar sem preencher o sobrenome

- **Dado que** estou na primeira etapa do checkout
- **Quando** preencho apenas nome e CEP, deixando o sobrenome em branco
  **E** tento continuar
- **Então** devo ver a mensagem "Error: Last Name is required" e o fluxo não deve avançar

**Evidência:**

![Erro de sobrenome obrigatório](../evidencias/checkout.cy.js/CT-015%20-%201%20-%20erro%20de%20sobrenome%20obrigatorio.png)

---

## CT-016 - Não deve avançar sem preencher o CEP

- **Dado que** estou na primeira etapa do checkout
- **Quando** preencho apenas nome e sobrenome, deixando o CEP em branco
  **E** tento continuar
- **Então** devo ver a mensagem "Error: Postal Code is required" e o fluxo não deve avançar

**Evidência:**

![Erro de CEP obrigatório](../evidencias/checkout.cy.js/CT-016%20-%201%20-%20erro%20de%20cep%20obrigatorio.png)

---

## CT-017 - O total deve ser o subtotal mais o imposto

- **Dado que** estou na primeira etapa do checkout com os dados preenchidos
- **Quando** continuo para o resumo do pedido
- **Então** o total exibido deve ser igual ao subtotal somado ao imposto

Diferente dos outros casos, aqui a validação é sobre o cálculo, não sobre a
navegação.

**Evidência:**

![Subtotal, imposto e total](../evidencias/checkout.cy.js/CT-017%20-%201%20-%20subtotal%20imposto%20e%20total.png)

---

## CT-018 - Deve cancelar o checkout

- **Dado que** estou na primeira etapa do checkout
- **Quando** seleciono "Cancel"
- **Então** devo voltar para a tela do carrinho

**Evidências:**

| Primeira etapa do checkout | De volta no carrinho |
| --- | --- |
| ![Primeira etapa do checkout](../evidencias/checkout.cy.js/CT-018%20-%201%20-%20primeira%20etapa%20do%20checkout.png) | ![De volta no carrinho](../evidencias/checkout.cy.js/CT-018%20-%202%20-%20de%20volta%20no%20carrinho.png) |
