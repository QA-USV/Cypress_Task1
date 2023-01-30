const { describe } = require("mocha")
const seats = require('../fixtures/seats.json')
import { 
  urlAdm, admin, fakeAdmin 
} from '../fixtures/selectors.json'

//Tests for admin page 

describe('admin tests', () => {
    beforeEach (() => {
      cy.visit(urlAdm)
    })
        
    it('should logins as admin', () => {
      cy.loginAdmin(admin)
      cy.get('.page-header__subtitle')
        .contains('Администраторррская')
    })
  
    it('should not logins if fakeAdmin', () => {
      cy.loginAdmin(fakeAdmin)
      cy.get('body')
        .contains('Ошибка авторизации!')
    })
  })           