import RandomDataGenerator from '../../../fixtures/dataFactory'

describe('Tests filling textbox',()=>{
    const text = new RandomDataGenerator()
    before(()=>{
        cy.visit('/elements')
        cy.findByText('Text Box').click()
    })
    it('should fill all textboxes', ()=>{
        const fullName = text.generateWord(5)
        cy.findByPlaceholderText('Full Name').type(fullName)
        cy.get('#userEmail').type('test@test.com')  //used element ID
        cy.findByPlaceholderText('Current Address').type(text.generateWord(10))
        cy.get('#permanentAddress').type(text.generateWord(12))
        cy.findByText('Submit').click()
        cy.get('#permanentAddress-wrapper').next().next().should('contain', fullName)
    })
    })