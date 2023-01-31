const { describe } = require("mocha")
const seats = require('../../fixtures/seats.json')
import { 
  baseUrl, header, dayToGo, mainPage 
} from '../../fixtures/selectors.json'

//Tests for user's page

describe('go to movie tests', () => {
  beforeEach (() => {
    cy.visit(baseUrl)
  })
    
  it('should open start page app', () => {
    cy.get(mainPage)
      .get(header)
      .get(dayToGo)
      .should('have.length', 7)
      .should('be.visible')
  })

  it('books a standart seat', () => {
    cy.chooseRandomDayTime()
    cy.get('[class="buying-scheme__chair buying-scheme__chair_standart"]')
      .first()
      .click()
    cy.clickBtns()
    cy.get('.ticket__info-qr')
      .should('be.visible')
    cy.get('.ticket__info-wrapper > :nth-child(7)')
      .contains('Покажите QR-код нашему контроллеру для подтверждения бронирования.')
  })

  it('books a VIP seat if it is not available books a standart seat', () => {
    cy.chooseRandomDayTime()
    cy.get('[class="buying-scheme__chair buying-scheme__chair_vip"]')
      .first()
      .click()
    cy.checkBtnBookStandartSeat()
    cy.clickBtns()
    cy.get('.ticket__info-qr')
      .should('be.visible')
    cy.get('.ticket__info-wrapper > :nth-child(7)')
      .contains('Покажите QR-код нашему контроллеру для подтверждения бронирования.')
  })

  it('should not allow to book an occupied seat', () => {
    cy.chooseRandomDayTime()
    cy.get('[class="buying-scheme__chair buying-scheme__chair_standart buying-scheme__chair_taken"]')
      .first()
      .click()
    cy.get('.acceptin-button').contains('Забронировать').should('be.disabled')
  });
});
