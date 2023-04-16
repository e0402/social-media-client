describe("User login", () => {
  it("Successfully logs in a user so they can access their profile", () => {
    const email = "example@example.com";
    const password = "password123";

    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(2000);

    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(500);

    cy.get("#loginEmail").type(email);
    cy.get("#loginPassword").type(password, { delay: 500 });
    cy.get(".btn-success").contains("Login").click();
  });
});
