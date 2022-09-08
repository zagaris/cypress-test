/// <reference types="cypress" />

describe("check checkboxes", () => {
  beforeEach(() => {
    cy.visit("the-internet.herokuapp.com/checkboxes");
  });

  it("displays the default heading", () => {
    cy.get("#content").get(".example").contains("Checkboxes");
  });

  it("check the default state of the checkboxes", () => {
    cy.get('input[type="checkbox"]').first().should("not.be.checked");
    cy.get('input[type="checkbox"]').last().should("be.checked");
  });

  it("check both of the checkboxes", () => {
    cy.get('input[type="checkbox"]').check();
    cy.get('input[type="checkbox"]').first().should("be.checked");
    cy.get('input[type="checkbox"]').last().should("be.checked");
  });

  it("uncheck both of the checkboxes", () => {
    cy.get('input[type="checkbox"]').uncheck();
    cy.get('input[type="checkbox"]').first().should("not.be.checked");
    cy.get('input[type="checkbox"]').last().should("not.be.checked");
  });
});
