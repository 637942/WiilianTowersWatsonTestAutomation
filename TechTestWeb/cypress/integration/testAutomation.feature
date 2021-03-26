Feature: Willistowerswatson Application Verification

    Scenario: Verify that the user is able to change the language and region 
        Given I am in the Willistowerswatson Homepage
        And I click on Agree and Proceed in the cookies popup
        When I click on Country dropdown
        When I select the Country from the list
        And I select the Language from the list
        Then I should see the selected country and language in the top left corner
        And I should see the url is updated with the country and the language
