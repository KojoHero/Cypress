describe('Tests frames',()=>{
    before(()=>{
        cy.visit('/frames')
    })

    it('should test that big and small frames exist', ()=>{
        cy.get('#frame1').invoke('attr', 'width').should('contain', '500px')
        cy.get('#frame2').invoke('attr', 'width').should('contain', '100px')
    })
}) 