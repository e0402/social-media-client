describe("Invalid user login due to wrong credentials will fail and show the user a message", () => {
  it("shows a message when the form has invalid credentials", () => {
    cy.visit("/");
    cy.wait(500);

    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(500);

    cy.get("#loginEmail").type(Cypress.env("email"));
    cy.get("#loginPassword").type("wrongpassword");

    cy.get(".btn-success").contains("Login").click();
    cy.wait(500);

    cy.on("window:alert", (Text) => {
      expect(Text).to.eq(
        "Either your username was not found or your password is incorrect"
      );
    });
  });
});
