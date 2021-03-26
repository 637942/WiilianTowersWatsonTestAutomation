import data from "../../fixtures/data";
import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pageObjects/HomePage";

Given("I am in the Willistowerswatson Homepage", () => {
  cy.homePage();
});

When("I click on Agree and Proceed in the cookies popup", () => {
  HomePage.popupAgreeBtn().click();
});

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
