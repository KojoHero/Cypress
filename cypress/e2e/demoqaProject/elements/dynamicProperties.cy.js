describe('Tests dynamic properties',()=>{
    before(()=>{
        cy.visit('/dynamic-properties')
    })

    it('should test that the buttons - becomes enabled and changes colour after 5 minutes', ()=>{
        cy.get('#enableAfter').should('be.disabled')
        cy.get('#colorChange').should('have.css','-webkit-text-fill-color','rgb(255, 255, 255)');
        cy.clock().then((clock) => {
            clock.tick(5000)
          })
        cy.get('#enableAfter').should('be.enabled')
        cy.get('#colorChange').should('have.css','-webkit-text-fill-color','rgb(220, 53, 69)');
        cy.get('#visibleAfter').should('be.visible')
    })
}) 