describe("Movie People Page", () => {
  beforeEach(() => {
    cy.visit(`/`);
    cy.get("nav").find("li").eq(3).find("a").click();
  
  });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("No.People");
        cy.get(".badge").contains(20);
      });
    })
  })