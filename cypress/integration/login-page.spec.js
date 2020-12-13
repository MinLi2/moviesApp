let email;
let password;
describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("nav").find("li").eq(6).click();
    });
    it("should display the login page and change browser URL", () => {
      
        cy.get('input').eq(0).type('892397497@qq.com');
        cy.get('input').eq(1).type('111111');
        cy.get('button').click();
        cy.url().should("include", `/Dashboard`);
      
    });
    it("should navigate to the forgot password page and change browser URL", () => {
       
       
       // cy.get('a[href*="/login"]').contains("Login").click();
        cy.get('a').contains("Sign Up").click();
        cy.url().should("include", `/signup`);
      
    });
})