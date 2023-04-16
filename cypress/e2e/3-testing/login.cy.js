import { password } from "../../../cypress.env";
import { email } from "../../../cypress.env";

describe("User login", () => {
  it("Successfully logs in a user so they can access their profile", () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(2000);

    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(500);

    cy.get("#loginEmail").type(Cypress.env("email"));
    cy.get("#loginPassword").type(Cypress.env("password"), { delay: 500 });
    cy.get(".btn-success").contains("Login").click();
  });
});
