/// <reference types="cypress" />

describe('Após acessar o site demoblaze', () => {

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/')
  })

  it('Devemos criar um usuário', () => {

    cy.get('#signin2').click()

    cy.wait(500)
    cy.get('#sign-username').type('ME_user_01')
    cy.get('#sign-password').type('ME_password')

    cy.get('button[onclick="register()"]').click()

    cy.on('window:confirm', text => {
      expect(text).to.equal('Sign up successful.')
    })
  })

  it('Para realizar login com esse usuário', () => {

    cy.get('#login2').click()

    cy.wait(500)
    cy.get('#loginusername').type('ME_user_01')
    cy.get('#loginpassword').type('ME_password')

    cy.get('button[onclick="logIn()"]').click()

    cy.wait(1000)
    cy.get('#nameofuser').should('have.text', 'Welcome ME_user_01')
  })
})