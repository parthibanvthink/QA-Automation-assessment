Feature: Login Functionality for Swag Labs

  Scenario: Successful login with valid credentials
    Given user is on the login page
    When user enters username "standard_user" and password "secret_sauce"
    And user clicks on login button
    Then user should be navigated to the inventory page

  Scenario: Login with locked user
    Given user is on the login page
    When user enters username "locked_out_user" and password "secret_sauce"
    And user clicks on login button
    Then error message "Sorry, this user has been locked out." should be displayed

  Scenario: Login with invalid credentials
    Given user is on the login page
    When user enters username "invalid_user" and password "wrong_password"
    And user clicks on login button
    Then error message "Username and password do not match" should be displayed