const { describe } = require("mocha");

describe('go to movie tests', () => {

    beforeEach (() => {
        cy.visit('/');
        });
    
    it('should open start page app', () => {
        cy.get('.page-header__title').should('be.visible');
        cy.get('.page-nav').should('be.visible');
        cy.get('main').should('be.visible');
    });

    it.skip('should book a standart seat', () => {
        cy.get('.page-nav__day').eq(3).click();
        cy.get('.movie').contains('14:00').last().click();
        cy.get(':nth-child(6) > :nth-child(5)')
        cy.fixture('seats.json').then((seats) => {
            seats.forEach((seat) => {
                cy.get(`.buying-scheme__wrapper > div:nth-child(${seat.row}) > span:nth-child(${seat.seat})`).click();
            })
        });
    });

    
});
