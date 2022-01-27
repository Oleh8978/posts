/// <reference types="cypress" />

describe('check if list of elements is rendered', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/posts/')
    })
  
    it('Check if all elements are rendered', () => {
        cy.wait(1000)
        cy.get('.posts-list').find('div').should('have.length.at.least', 2)
    })
   
  })
  