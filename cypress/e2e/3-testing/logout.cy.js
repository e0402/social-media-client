describe("User logout", () => {
  it("Successfully logs out a user so they can access their profile", () => {
    const email = "example@example.com";
    const password = "password123";

    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);

    cy.contains("Login").click();
    cy.get("#loginEmail").type(email);
    cy.get("#loginPassword").type(password);
    cy.contains("Login").click();
    cy.wait(2000);

    cy.contains("Logout").click();
    cy.wait(2000);

    cy.window().then((win) => {
      expect(win.localStorage.getItem("token")).to.be.null;
    });
  });
});
