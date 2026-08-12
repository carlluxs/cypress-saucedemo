// Casos de teste — Autenticacao (Sauce Demo)

import LoginPage from '../pages/LoginPage/LoginPage'

describe('Autenticacao', () => {
  it('Deve autenticar um usuario valido e exibir a listagem de produtos', () => {
    // Dado que estou na tela de login
    LoginPage.visitar()

    // Quando informo credenciais validas
    LoginPage.fazerLogin('standard_user', 'secret_sauce')

    // Entao devo ser direcionado para a listagem de produtos
    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
  })

  it('Nao deve autenticar um usuario com senha incorreta', () => {
    // Dado que estou na tela de login
    LoginPage.visitar()

    // Quando informo uma senha incorreta
    LoginPage.fazerLogin('standard_user', 'senha_errada')

    // Entao devo ver uma mensagem de credenciais invalidas
    LoginPage.deveMostrarErro('Username and password do not match')
  })

  it('Nao deve autenticar um usuario bloqueado', () => {
    // Dado que estou na tela de login
    LoginPage.visitar()

    // Quando informo as credenciais de um usuario bloqueado
    LoginPage.fazerLogin('locked_out_user', 'secret_sauce')

    // Entao devo ver uma mensagem informando o bloqueio
    LoginPage.deveMostrarErro('Sorry, this user has been locked out')
  })
})
