/// <reference types="cypress" />

describe("test homepage", () => {
  beforeEach(() => {
    cy.visit("the-internet.herokuapp.com");
  });

  it("displays the default heading", () => {
    cy.get(".heading").contains("Welcome to the-internet");
  });

  it("checks first and second list item and items list size", () => {
    cy.get("#content li").should("have.length", 44);
    cy.get("#content li").first().should("have.text", "A/B Testing");
    cy.get("#content li").last().should("have.text", "WYSIWYG Editor");
  });

  it("checks footer text", () => {
    cy.get("#page-footer").contains("Powered by Elemental Selenium");
  });
});
