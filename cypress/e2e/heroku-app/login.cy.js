/// <reference types="cypress" />

import "../../support/commands.js";

describe("check login page", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  it("checks successful log in", () => {
    cy.login("tomsmith", "SuperSecretPassword!");
    cy.get("#flash").contains("You logged into a secure area!");
  });

  it("checks successful log in and log out", () => {
    cy.login("tomsmith", "SuperSecretPassword!");
    cy.get("#flash").contains("You logged into a secure area!");
    cy.logout();
    cy.get("#flash").contains("You logged out of the secure area!");
  });

  it("checks unsuccessful log in for both invalid username and password", () => {
    cy.login("wrong_username", "wrong_password");
    cy.get("#flash").contains("Your username is invalid!");
  });

  it("checks unsuccessful log in for invalid username", () => {
    cy.login("wrong_username", "SuperSecretPassword!");
    cy.get("#flash").contains("Your username is invalid!");
  });

  it("checks unsuccessful log in for invalid password", () => {
    cy.login("tomsmith", "wrong_password");
    cy.get("#flash").contains("Your password is invalid!");
  });
});
