describe('Tests links',()=>{
    before(()=>{
        cy.visit('/elements')
        cy.findByText('Links').click()
    })
    it('should click a link', ()=>{
        cy.get('#created').click()
        cy.get('#linkResponse').should('contain', 'Created')   
    })
    it('should tests opening new tab', ()=>{
        cy.get('#simpleLink')
            .invoke("removeAttr", "target")
            .click() 
        cy.get("h5").first().should("have.text", "Elements");
          
    })
    })