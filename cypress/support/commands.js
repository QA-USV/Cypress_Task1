// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import { urlAdmin } from ('./Cypress_7.7/cypress.config.js'),

Cypress.Commands.add('loginAdmin', (admin) => {
    cy.get('[for="email"] > .login__input').type(admin.email)
    cy.get('[for="pwd"] > .login__input').type(admin.password)
    cy.get('.login__button').click()
})

Cypress.Commands.add('chooseRandomDayTime', () => {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      }
    const min = 2
    const max = 7
    cy.get(`body > nav > a:nth-child(${getRandomInt(min, max)})`)
      .click()
    cy.get('.movie')
      .contains('14:00')
      .last()
      .click()
})

Cypress.Commands.add('checkBtnBookStandartSeat', () => {
    cy.get('.acceptin-button').then($button => {
        if ($button.is('[disabled]')) {
          cy.get('[class="buying-scheme__chair buying-scheme__chair_standart"]')
            .first()
            .click() 
        }
    })
})

Cypress.Commands.add('clickBtns', () => {
    cy.get('.acceptin-button')
      .contains('Забронировать')
      .click()
    cy.get('.acceptin-button')
      .contains('Получить код бронирования')
      .click()
})