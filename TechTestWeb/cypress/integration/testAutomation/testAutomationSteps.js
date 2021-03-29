import data from "../../fixtures/data";
import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pageObjects/HomePage";

Given(
  "I am in the Willistowerswatson Insurance consulting and technology page",
  () => {
    cy.visit("/ICT");
    cy.url().should(
      "include",
      "/solutions/insurance-consulting-and-technology"
    );
  }
);

/*When("I click on Agree and Proceed in the cookies popup", () => {
  HomePage.popupAgreeBtn().click();
});*/

When("I click on Country dropdown", () => {
  HomePage.countryDropdown().click();
});

When("I select the Country from the list", () => {
  HomePage.countrySelection().click();
});

And("I select the Language from the list", () => {
  HomePage.languageSelection().click();
});

Then(
  "I should see the selected country and language in the top left corner",
  () => {
    cy.contains("US | EN").should("be.visible");
  }
);

And("I should see the url is updated with the country and the language", () => {
  cy.location("pathname").should("eq", "/en-US");
});

When("I click on search button", () => {
  HomePage.searchBtn().click();
});

When("I enter the input as {string} in the search input field", (input) => {
  HomePage.searchInput().type(input);
});

And("I click on Search", () => {
  cy.intercept("POST", "/coveo/rest/v2").as("postSearch");
  HomePage.search().click();
  cy.wait('@postSearch',{timeout:30000});
  console.log('@postSearch');
});

Then("I should see the relevant results for the search", () => {
  cy.url().should("include", "IFRS");
  cy.wait(7500);
  HomePage.resultsHeading().then(($title) => {
    const title = $title.text();
    console.log(title);
  });
});
