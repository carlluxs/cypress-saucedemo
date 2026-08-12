// Casos de teste — Autenticação (Sauce Demo)

import LoginPage from '../pages/LoginPage/LoginPage'

describe('Autenticação', () => {
  it('CT-001 - Deve autenticar um usuário válido e exibir a listagem de produtos', () => {
    // Dado que estou na tela de login
    LoginPage.visitar()

    // Quando informo credenciais válidas
    LoginPage.fazerLogin('standard_user', 'secret_sauce')

    // Então devo ser direcionado para a listagem de produtos
    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
  })

  it('CT-002 - Não deve autenticar um usuário com senha incorreta', () => {
    // Dado que estou na tela de login
    LoginPage.visitar()

    // Quando informo uma senha incorreta
    LoginPage.fazerLogin('standard_user', 'senha_errada')

    // Então devo ver uma mensagem de credenciais inválidas
    LoginPage.deveMostrarErro('Username and password do not match')
  })

  it('CT-003 - Não deve autenticar um usuário bloqueado', () => {
    // Dado que estou na tela de login
    LoginPage.visitar()

    // Quando informo as credenciais de um usuário bloqueado
    LoginPage.fazerLogin('locked_out_user', 'secret_sauce')

    // Então devo ver uma mensagem informando o bloqueio
    LoginPage.deveMostrarErro('Sorry, this user has been locked out')
  })
})
