describe('Tests uploads and downloads',()=>{
    before(()=>{
        cy.visit('/elements')
        cy.findByText('Upload and Download').click()
    })
    it('should download file', ()=>{
        cy.get('#downloadButton').click()
        cy.readFile('./cypress/downloads/sampleFile.jpeg').should('exist')
    })

    it('should upload a file', ()=>{
        cy.get('#uploadFile').attachFile('uploadFile.jpeg');
        cy.get('#uploadedFilePath').should('contain','C:\\fakepath\\uploadFile.jpeg');
    })
    }) 