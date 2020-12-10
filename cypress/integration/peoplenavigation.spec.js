let peoples;
const peopleId = 1397778; 
let reviews;

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        peoples = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/person/${peopleId}?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        console.log(response);
        reviews = response.results;
      });
  });

  describe("From the people home page", () => {
    beforeEach(() => {
      cy.visit("/people");
    });
    it("should navigate to the people details page and change browser URL", () => {
      cy.get(".card").eq(2).find("img").click();
      cy.url().should("include", `/peoples/${peoples[2].id}`);
      cy.get("h2").contains(peoples[2].name);
    });
    it("should allow navigation from site header", () => {
      cy.get("nav").find("li").eq(5).find("a").click();
      cy.url().should("include", `/favoritePeople`);
      cy.get("h2").contains("Favorite People");
      cy.get("nav").find("li").eq(3).find("a").click();
      cy.url().should("not.include", `/favoritePeople`);
      cy.get("h2").contains("No.People");
      
    });
  });
  describe("From the Favorite people page", () => {
    beforeEach(() => {
      cy.visit("/people");
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(3).find("a").click();
    });
    it("should navigate to the peoples detail page and change the browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/peoples/${peoples[2].id}`);
      cy.get("h2").contains(peoples[2].name);
    });
  });
  describe("The Go Back button", () => {
    beforeEach(() => {
      cy.visit("/people");
    });
    it("should navigate from people home page to people details and back", () => {
      cy.get(".card").eq(2).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("include", `/people`);
      cy.get("h2").contains("No.People");
    });
    it("should navigate from favorite people page to people details and back", () => {
        cy.get(".card").eq(2).find("button").click();
        cy.get("nav").find("li").eq(5).find("a").click();
        cy.get(".card").eq(0).find("img").click();
        cy.get("svg[data-icon=arrow-circle-left]").click();
        cy.url().should("include", `people/favoritePeople`);
        cy.get("h2").contains("Favorite People");
    });
  });
});


