describe("Movie People Page", () => {
    beforeEach(() => {
      cy.visit("/people");
    });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("No.People");
        cy.get(".badge").contains(20);
      });
    })
  })