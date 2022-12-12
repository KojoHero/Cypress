describe('Tests button',()=>{
    before(()=>{
        cy.visit('/elements')
        cy.findByText('Buttons').click()
    })
    it('should double click a button', ()=>{
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('contain', 'You have done a double click')   
    })
    it('should right click a button', ()=>{
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('contain', 'You have done a right click')   
    })
    it('should click a button', ()=>{
        cy.findByText('Click Me').click()
        cy.get('#dynamicClickMessage').should('contain', 'You have done a dynamic click')   
    })
    })