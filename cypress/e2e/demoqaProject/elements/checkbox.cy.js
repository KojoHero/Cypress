import RandomDataGenerator from '../../../fixtures/dataFactory'

describe('Tests filling checkbox',()=>{
    before(()=>{
        cy.visit('/elements')
        cy.findByText('Check Box').click()
    })
    it('should check all checkboxes', ()=>{
        cy.findByTitle('Expand all').click()
        cy.get('.rct-checkbox').first().click()
        cy.get('#result').should('contain', 'home')
        
        //store text in a value and assert
        // cy.get('.rct-title').first().invoke('text').then((text) => {
        //     cy.get('#result').should('contain', text)
        //   });
    })
    })