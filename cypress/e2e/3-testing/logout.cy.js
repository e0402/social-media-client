describe("User logout", () => {
  it("Successfully logs out a user so they can access their profile", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);

    cy.contains("Login").click();
    cy.get("#loginEmail").type(Cypress.env("email"));
    cy.get("#loginPassword").type(Cypress.env("password"));
    cy.contains("Login").click();
    cy.wait(2000);

    cy.contains("Logout").click();
    cy.wait(2000);

    cy.window().then((win) => {
      expect(win.localStorage.getItem("token")).to.be.null;
    });
  });
});
