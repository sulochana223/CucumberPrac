#Author: sulochana

@tag
Feature: Checks the login facebook functionality

  @tag1
  Scenario: To test login facebook
    Given user is in facebooklogin page
    When user fills username and password
   And user clicks login button
    Then user able to access facebook

  