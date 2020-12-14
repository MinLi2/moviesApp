let email;
let password;
describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    // it("should navigate to the login page and change browser URL", () => {
    //     cy.get("nav").find("li").eq(7).click();
    //     cy.get('input').eq(0).type('892397497@qq.com');
    //     cy.get('input').eq(1).type('111111');
    //     cy.get('input').eq(2).type('111111');
    //     cy.get('button').click();
    //     cy.url().should("include", `/Dashboard`);
      
    // });
    it("should navigate to the login page and change browser URL", () => {
        cy.get("nav").find("li").eq(7).click();
       
        cy.get('a[href*="/login"]').contains("Login").click();
        cy.url().should("include", `/login`);
      
    });
})