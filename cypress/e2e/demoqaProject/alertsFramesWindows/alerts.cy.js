//getting false positive result

describe("Tests alerts", () => {
  before(() => {
    cy.visit("/alerts");
  });

  it.skip("should test that alert pops up after button click", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);
    cy.get("#alertButton")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("You clicked a button");
      });
  });

  it("should test that alert pops up after 5 seconds", () => {
    cy.clock();
    cy.get("#timerAlertButton").click();
    cy.tick(5000);
    cy.on("window:alert", (text) => {
      expect(text).to.equal("This alert appeared after 5 seconds");
    });
  });

  it("should test that confirm box pops up", () => {
    const stub = cy.stub();
    cy.on("window:confirm", stub);
    cy.clock();
    cy.get("#confirmButton").click().then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Do you confirm action?");
      });;
    cy.tick(5000);
  });

  it("should write a text in a prompt field", () => {
    
      
    //   cy.get('#promtButton').click().then(() => {
    //     cy.get('#my-prompt').should('have.value', 'Hello, World!');
    //   });
      
    // const stub = cy.stub();
    // cy.on("window:confirm", stub);
    // cy.clock();
    // cy.get("#confirmButton").click().then(() => {
    //     expect(stub.getCall(0)).to.be.calledWith("Do you confirm action?");
    //   });;
    // cy.tick(5000);
  });
});
