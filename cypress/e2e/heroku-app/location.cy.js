/// <reference types="cypress" />

context("Homepage Location", () => {
  beforeEach(() => {
    cy.visit("the-internet.herokuapp.com");
  });

  it("cy.hash() - get the current URL hash", () => {
    cy.hash().should("be.empty");
  });

  it("cy.url() - get the current URL", () => {
    cy.url().should("eq", "http://the-internet.herokuapp.com/");
  });

  it("cy.location() - get window.location", () => {
    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.host).to.eq("the-internet.herokuapp.com");
      expect(location.hostname).to.eq("the-internet.herokuapp.com");
      expect(location.origin).to.eq("http://the-internet.herokuapp.com");
      expect(location.port).to.eq("");
      expect(location.protocol).to.eq("http:");
      expect(location.search).to.be.empty;
    });
  });
});
