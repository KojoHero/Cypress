import RandomDataGenerator from '../../../fixtures/dataFactory'

describe('Tests filling web tables',()=>{
    const text = new RandomDataGenerator()
    const number = new RandomDataGenerator()
    before(()=>{
        cy.visit('/elements')
        cy.findByText('Web Tables').click()
    })
    it('should fill all web tables', ()=>{
        cy.get('#addNewRecordButton').click()
        const firstName  = text.generateWord(5)
        cy.findByPlaceholderText('First Name').type(firstName)
        cy.findByPlaceholderText('Last Name').type(text.generateWord(5))
        cy.get('#userEmail').type('text@test.com')  //used element ID
        cy.findByPlaceholderText('Age').type(number.generateNumbers())
        cy.findByPlaceholderText('Salary').type(number.generateNumbers())
        cy.findByPlaceholderText('Department').type(text.generateWord(12))
        cy.findByText('Submit').click()
        cy.get('.rt-tbody').children().eq(3).should('contain', firstName)
        
    })
    })