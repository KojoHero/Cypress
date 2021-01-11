export class salesforcePage {
    navigate() {
        cy.visit('https://www.exlibris.ch/de/')
    }

    cart() {
        cy.get('[data-row-type="1"] > :nth-child(2) > [data-col-type="A"] > .m-product-tile > .m-product-tile__buttons > .addtobasket-1 > .icon-1').click()
    }

    cartValidate(expvalue) {
        cy.get('#cartWidgetQuantity').should('contain', expvalue)
    }

    watchlist() {
        cy.get('div[data-row-type="8"] > :nth-child(2) > [data-col-type="A"] > .m-product-tile > .m-product-tile__buttons > .addtowishlist-1 > .icon-1').click()
    }

    watchlistValidate() {
        cy.get('#Service-Navi_Wishlist > .qty-1').should('contain', 1)
    }

    contact() {
        cy.contains('Kontakt').click()
    }

    contactValidate() {
        cy.url().should('eq', 'https://www.exlibris.ch/de/kontakt-hilfe/kontakt/anschrift-kontaktformular/')
    }

    Help() {
        cy.contains('Hilfe').click()
    }

    HelpValidate() {
        cy.url().should('include', '/hilfe/')
    }

    Service() {
        cy.contains('Service').click()
    }

    ServiceValidate() {
        cy.url().should('include', '/service-leistungen/')
    }

    Login() {
        cy.contains('Mein').click()
    }

    LoginValidate() {
        cy.url().should('include', '/login/')
    }
    
    
}
