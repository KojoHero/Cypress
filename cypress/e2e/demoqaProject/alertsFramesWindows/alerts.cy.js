//getting false positive result

describe("Tests alerts", () => {
  before(() => {
    cy.visit("/alerts");
  });

  it("should test that alert pops up after button click", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);
    cy.get("#alertButton")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("You clicked a button");
      });
  });

  it.skip("should test that alert pops up after 5 seconds", () => {
    cy.clock();
    cy.get("#timerAlertButton").click();
    cy.tick(5000);
    cy.on("window:alert", (text) => {
      expect(text).to.equal("This alert appeared after 5 seconds");
    });
  });

  it.skip("should test that confirm box pops up", () => {
    cy.clock();
    cy.get("#confirmButton").click();
    cy.tick(5000);
    // cy.on('window:confirm', () => false)
    cy.on("window:confirm", (text) => {
      const expectedText =
        "You have unsaved changes, are you sure you want to leave?";
      // return false
      expect(text).to.equal(expectedText);
      done();
    });
  });
});
