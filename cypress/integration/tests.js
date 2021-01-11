import { salesforcePage } from '../POM/sales4ce';
/// <reference types="Cypress" />

describe ("salesforce", ()=>{
    const pompage = new salesforcePage()
    beforeEach (()=>{
        pompage.navigate()
    })

    it("cart", ()=>{
        pompage.cart()
        pompage.cartValidate(1)
    })

    it("watchlist", ()=>{
        pompage.watchlist()
        pompage.watchlistValidate()
    })

    it("Contact", ()=>{
        pompage.contact()
        pompage.contactValidate()    
    })

    it("Help", ()=>{
        pompage.Help()
        pompage.HelpValidate()
    })

    it("Service", ()=>{
        pompage.Service()
        pompage.ServiceValidate()
    })
    
    it("Login", ()=>{
        pompage.Login()
        pompage.LoginValidate()
    })

    // it("Dropdown", ()=>{
    //     cy.wait('5000')
    //     cy.get('#catg', {timeout: 6000}).select('Alle').should('have.value', 'All')
               
    // })

    
})
