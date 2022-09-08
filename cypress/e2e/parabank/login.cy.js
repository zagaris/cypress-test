/// <reference types="cypress" />

import "../../support/commands.js";

describe("Parabank login", () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
  });

  it("Login with username and password", () => {
    cy.parabankLogin("Jonh", "123");
  });
});
