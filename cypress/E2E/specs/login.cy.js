// Casos de teste — Autenticação (Sauce Demo)

import LoginPage from '../pages/LoginPage/LoginPage'
import LoginElements from '../pages/LoginPage/LoginElements'
import InventoryPage from '../pages/InventoryPage/InventoryPage'

describe('Autenticação', () => {
  it('CT-001 - Deve autenticar um usuário válido e exibir a listagem de produtos', () => {
    // Dado que estou na tela de login
    LoginPage.visitar()

    cy.evidencia('tela de login')

    // Quando informo credenciais válidas
    LoginPage.fazerLogin('standard_user', 'secret_sauce')

    // Então devo ser direcionado para a listagem de produtos
    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
    cy.evidencia('listagem de produtos')
  })

  it('CT-002 - Não deve autenticar um usuário com senha incorreta', () => {
    // Dado que estou na tela de login
    LoginPage.visitar()

    // Quando informo uma senha incorreta
    LoginPage.fazerLogin('standard_user', 'senha_errada')

    // Então devo ver uma mensagem de credenciais inválidas
    LoginPage.deveMostrarErro('Username and password do not match')
    cy.evidencia('erro de credenciais invalidas')
  })

  it('CT-003 - Não deve autenticar um usuário bloqueado', () => {
    // Dado que estou na tela de login
    LoginPage.visitar()

    // Quando informo as credenciais de um usuário bloqueado
    LoginPage.fazerLogin('locked_out_user', 'secret_sauce')

    // Então devo ver uma mensagem informando o bloqueio
    LoginPage.deveMostrarErro('Sorry, this user has been locked out')
    cy.evidencia('erro de usuario bloqueado')
  })

  it('CT-004 - Não deve autenticar sem preencher os campos', () => {
    // Dado que estou na tela de login com os campos vazios
    LoginPage.visitar()

    // Quando confirmo sem preencher usuário e senha
    LoginPage.confirmarSemPreencher()

    // Então devo ver o aviso de usuário obrigatório
    LoginPage.deveMostrarErro('Username is required')
    cy.evidencia('erro de usuario obrigatorio')
  })

  it('CT-005 - Não deve autenticar sem preencher a senha', () => {
    // Dado que informei apenas o usuário
    LoginPage.visitar()

    // Quando confirmo com o campo de senha vazio
    LoginPage.fazerLogin('standard_user', '')

    // Então devo ver o aviso de senha obrigatória
    LoginPage.deveMostrarErro('Password is required')
    cy.evidencia('erro de senha obrigatoria')
  })

  it('CT-006 - Deve encerrar a sessão pelo menu lateral', () => {
    // Dado que estou autenticado na listagem de produtos
    cy.login()

    cy.evidencia('sessao autenticada')

    // Quando faço logout pelo menu lateral
    InventoryPage.fazerLogout()

    // Então devo retornar à tela de login
    cy.url().should('eq', 'https://www.saucedemo.com/')
    LoginElements.botaoLogin().should('be.visible')
    cy.evidencia('de volta na tela de login')
  })
})
