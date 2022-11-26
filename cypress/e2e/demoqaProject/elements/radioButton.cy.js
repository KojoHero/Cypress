describe('Tests filling radio button',()=>{
    before(()=>{
        cy.visit('/elements')
        cy.findByText('Radio Button').click()
    })
    it('should check all radio buttons', ()=>{
        cy.get('#yesRadio').click({force: true})
        cy.get('.text-success').should('contain', 'Yes')   
    })
    })