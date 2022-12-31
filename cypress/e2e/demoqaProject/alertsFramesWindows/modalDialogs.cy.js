describe('Tests modal dialogs',()=>{
    before(()=>{
        cy.visit('/modal-dialogs')
    })

    it('should test that small modal dialog exists', ()=>{
        cy.get('#showSmallModal').click()
        cy.get('.modal-content').within(() => {
            cy.get('.modal-header').should('contain','Small Modal')
            cy.get('.modal-body').should('contain','This is a small modal. It has very less content')
            cy.get('#closeSmallModal').click()
            cy.wait(2000)
        })
    })

    it('should test that big modal dialog exists', ()=>{
        cy.get('#showLargeModal').click()
        cy.get('.modal-content').within(() => {
            cy.get('.modal-header').should('contain','Large Modal')
            cy.get('.modal-body').should('contain','Lorem Ipsum')
            cy.get('#closeLargeModal').click()
        })
    })
}) 