let email;
let password;
 describe("From the home page", () => {
     beforeEach(() => {
     cy.visit("/");
     cy.get("nav").find("li").eq(8).click();
    });
     it("should display the login page and change browser URL", () => {
      
     cy.get('input').eq(1).type('111111');
     cy.get('input').eq(2).type('111111');
     cy.get('button').click();
     cy.url().should("include", `/Dashboard`);
      
    });
 })
