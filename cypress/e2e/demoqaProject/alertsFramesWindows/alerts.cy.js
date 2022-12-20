describe('Tests alerts',()=>{
    before(()=>{
        cy.visit('/alerts')
    })

    // it('should test that alert pops up after button click', ()=>{
    //     cy.get('#alertButton').click()
    //     cy.on ('window:alert', (text) => {
    //         expect(text).to.eq('You clicked a button')
    //         done()                               
    //     })
    // })

    // it('should test that alert pops up after 5 seconds', ()=>{
    //     cy.get('#timerAlertButton').click()
    //     cy.wait(10000)
    //     cy.on ('window:alert', (text) => {
    //         expect(text).to.eq('You clicked a button')                            
    //     })
    // })

    it('should test that confirm box pops up', ()=>{
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (t) => {
            //assertions
            expect(t).to.contains('You have unsaved changes, are you sure you want to leave?');
            return false;
          })
    })
}) 