/// <reference types="cypress" />

import "../../support/commands.js";

describe("checks javascript alerts", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
  });

  it("checks the text of alerts buttons and the number of buttons", () => {
    cy.get(".example li").should("have.length", 3);

    cy.get(".example li").eq(0).should("have.text", "Click for JS Alert");
    cy.get(".example li").eq(1).should("have.text", "Click for JS Confirm");
    cy.get(".example li").eq(2).should("have.text", "Click for JS Prompt");
  });

  it("checks the first alert message and clicks OK", () => {
    cy.get(".example li").eq(0).find("button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("I am a JS Alert");
    });
    cy.on("window:confirm", () => true);
    cy.get("#result").contains("You successfully clicked an alert");
  });

  it("checks the second alert message and clicks OK", () => {
    cy.get(".example li").eq(1).find("button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("I am a JS Confirm");
    });
    cy.on("window:confirm", () => true);
    cy.get("#result").contains("You clicked: Ok");
  });

  it("checks the second alert message and clicks Cancel", () => {
    cy.get(".example li").eq(1).find("button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("I am a JS Confirm");
    });
    cy.on("window:confirm", () => false);
    cy.get("#result").contains("You clicked: Cancel");
  });

  it("checks the third alert message, types in prompt and clicks OK", () => {
    cy.get(".example li").eq(2).find("button").click();
    cy.window().then(($win) => {
      cy.stub($win, "prompt").returns("1337");
      cy.contains("Click for JS Prompt").click();
    });
    cy.get("#result").should("have.text", "You entered: 1337");
  });

  it("checks the third alert message and clicks Cancel", () => {
    cy.get(".example li").eq(2).find("button").click();
    cy.on("window:confirm", () => false);
    cy.get("#result").should("have.text", "You entered: null");
  });
});
