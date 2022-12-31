/// <reference types="Cypress" />

describe('Tests nested frames',()=>{
    before(()=>{
        cy.visit('/nestedframes')
    })

    it.skip('should test that the big frame exists', ()=>{
        // cy.get('#frame1').within(() => {
            cy.findByText('Parent frame').should('be.visible')
            cy.findByText('Child Iframe').should('exist')
        //   })
    })
}) 