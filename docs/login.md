# Autenticação

Casos de teste da tela de login do Sauce Demo.

Spec: [`cypress/E2E/specs/login.cy.js`](../cypress/E2E/specs/login.cy.js)

Os usuários usados aqui são os que o próprio Sauce Demo disponibiliza na tela
de login (`standard_user`, `locked_out_user`), com a senha `secret_sauce`.

---

## CT-001 - Deve autenticar um usuário válido e exibir a listagem de produtos

- **Dado que** estou na tela de login
- **Quando** informo o usuário `standard_user` e a senha `secret_sauce`
- **Então** devo ser direcionado para a listagem de produtos e o título "Products" deve estar visível

**Evidências:**

| Tela de login | Listagem de produtos |
| --- | --- |
| ![Tela de login](../evidencias/login.cy.js/CT-001%20-%201%20-%20tela%20de%20login.png) | ![Listagem de produtos](../evidencias/login.cy.js/CT-001%20-%202%20-%20listagem%20de%20produtos.png) |

---

## CT-002 - Não deve autenticar um usuário com senha incorreta

- **Dado que** estou na tela de login
- **Quando** informo o usuário `standard_user` e uma senha inválida
- **Então** devo ver a mensagem "Username and password do not match" e o acesso não deve acontecer

**Evidência:**

![Erro de credenciais inválidas](../evidencias/login.cy.js/CT-002%20-%201%20-%20erro%20de%20credenciais%20invalidas.png)

---

## CT-003 - Não deve autenticar um usuário bloqueado

- **Dado que** estou na tela de login
- **Quando** informo o usuário `locked_out_user` com a senha correta
- **Então** devo ver a mensagem "Sorry, this user has been locked out" e o acesso não deve acontecer

O bloqueio vale mesmo com a senha certa.

**Evidência:**

![Erro de usuário bloqueado](../evidencias/login.cy.js/CT-003%20-%201%20-%20erro%20de%20usuario%20bloqueado.png)

---

## CT-004 - Não deve autenticar sem preencher os campos

- **Dado que** estou na tela de login com os campos vazios
- **Quando** confirmo o login sem preencher usuário e senha
- **Então** devo ver a mensagem "Username is required"

**Evidência:**

![Erro de usuário obrigatório](../evidencias/login.cy.js/CT-004%20-%201%20-%20erro%20de%20usuario%20obrigatorio.png)

---

## CT-005 - Não deve autenticar sem preencher a senha

- **Dado que** estou na tela de login
  **E que** informei apenas o usuário `standard_user`
- **Quando** confirmo o login com a senha em branco
- **Então** devo ver a mensagem "Password is required"

A validação da senha só aparece depois que o usuário está preenchido — por isso
este caso é separado do CT-004.

**Evidência:**

![Erro de senha obrigatória](../evidencias/login.cy.js/CT-005%20-%201%20-%20erro%20de%20senha%20obrigatoria.png)

---

## CT-006 - Deve encerrar a sessão pelo menu lateral

- **Dado que** estou autenticado na listagem de produtos
- **Quando** abro o menu lateral e seleciono "Logout"
- **Então** devo retornar para a tela de login e o botão de login deve ficar visível novamente

**Evidências:**

| Sessão autenticada | De volta na tela de login |
| --- | --- |
| ![Sessão autenticada](../evidencias/login.cy.js/CT-006%20-%201%20-%20sessao%20autenticada.png) | ![De volta na tela de login](../evidencias/login.cy.js/CT-006%20-%202%20-%20de%20volta%20na%20tela%20de%20login.png) |
