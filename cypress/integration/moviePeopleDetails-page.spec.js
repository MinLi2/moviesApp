let peopleId = null
let people;
let reviews;
describe("People Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[2].id;
      })
      .then((arbitraryPeopleIdignored) => {
        peopleId = arbitraryPeopleIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/person/${peopleId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((peopleDetails) => {
        people = peopleDetails;
        return peopleDetails.id;
      })
  });
  beforeEach(() => {
    cy.visit(`/`);
    cy.get("nav").find("li").eq(3).find("a").click();
    cy.get(".card").eq(2).find("img").click();
  });

  it("should display people title in the page header", () => {
    cy.get("h2").contains(people.name);
  });
  it("should display the people's details", () => {
    cy.get("h4").contains("popularity");
    cy.get("h4").next().contains(people.popularity);
    cy.get("ul")
      .eq(2)
      .within(() => {
       
        cy.get("li").eq(0).contains("place_of_birth");
        cy.get("li").eq(1).contains(people.place_of_birth);
      });
      cy.get("ul")
      .eq(3)
      .within(() => {
        cy.get("li").eq(0).contains("profile_path");
        cy.get("li").eq(1).contains(people.profile_path);
      });

      cy.get("ul")
      .eq(4)
      .within(() => {
        cy.get("li").eq(0).contains("known_for_department");
        cy.get("li").eq(1).contains(people.known_for_department);
      });
      
 
  });
 
  it("should display the image tag with the appropriate src attribute", () => {
    cy.get("img")
    .should("have.attr", "src")
      
  });
});
