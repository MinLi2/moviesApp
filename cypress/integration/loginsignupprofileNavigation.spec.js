let email;
let password;
describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
     
    });
  
    it("should navigate to the sign up page and change browser URL", () => {
       
        cy.get("nav").find("li").eq(6).click();
       // cy.get('a[href*="/login"]').contains("Login").click();
        cy.get('a').contains("Sign Up").click();
        cy.url().should("include", `/signup`);
      
    });
    
       
        it("should navigate to the login page and change browser URL", () => {
            cy.get("nav").find("li").eq(7).click();
           
            cy.get('a[href*="/login"]').contains("Login").click();
            cy.url().should("include", `/login`);
          
        });
  
      
   
})