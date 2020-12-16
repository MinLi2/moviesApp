let email;
let password;
 describe("From the home page", () => {
   beforeEach(() => {
     cy.visit("/");
    });
//     // it("should navigate to the login page and change browser URL", () => {
//     //     cy.get("nav").find("li").eq(7).click();
//     //     cy.get('input').eq(0).type('892397497@qq.com');
//     //     cy.get('input').eq(1).type('111111');
//     //     cy.get('input').eq(2).type('111111');
//     //     cy.get('button').click();
//     //     cy.url().should("include", `/Dashboard`);
      
//     // });
     it("should navigate to the login page and change browser URL", () => {
         cy.get("nav").find("li").eq(7).click();
       
        cy.get('a[href*="/login"]').contains("Login").click();
        cy.url().should("include", `/login`);
      
    });
 })


describe("Signup", () => {
  beforeEach(() => {
      
      cy.visit(`/`);
      cy.get("nav").find("li").eq(7).find("a").click();
      cy.get('a[href*="/signup"]').contains("Sign Up").click()
      
  });

      it("should display Email in the container", () => {
          cy.get("label").contains("Email");
      });
      it("should display Password in the container", () => {
          cy.get("label").contains("Password");
      });
      it("should display Password Confirmation in the container", () => {
          cy.get("label").contains("Password Confirmation");
      });
      
      
  });
  describe("Error Enter", () => {
    
    
      // it("should display 'Passwords do not match'When you enter existing account email", () => {
      //     cy.wait(10000)
      //     cy.get('input').eq(0).type('892397497@qq.com');
      //     cy.get('input').eq(1).type('111111');
      //     cy.get('input').eq(2).type('111');
      //     cy.get("button").contains("sign up").click()
      //     cy.get('fade').contains("Passwords do not match")
      // });
      // it("should display 'Failed to create an account'When you enter existing account email", () => {
      //     cy.wait(10000)
      //     cy.get('input').eq(0).type('892397497@qq.com');
      //     cy.get('input').eq(1).type('111111');
      //     cy.get('input').eq(2).type('111111');
      //     cy.get("button").contains("sign up").click()
      //     cy.get('fade').contains("Failed to create an account")
      // });
    
  })
  describe("Button", () => {
      // it("should navigate to the profile page after entering correct data", () => {
      //     cy.wait(10000)
      //     cy.get('input').eq(0).type('892397497@qq.com');
      //     cy.get('input').eq(1).type('111111');
      //     cy.get('input').eq(2).type('111111');
      //     cy.get("button").contains("sign up").click()
      //     cy.get('fade').contains("Failed to create an account")
          
      // });
      it("should navigate to login page ", () => {
          
          cy.get('a[href*="/login"]').contains("Log In").click()
          cy.url().should("include", `/login`);
          cy.get("h2").contains("Log In");
      });
  });
