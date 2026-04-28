@Regression @Login
Feature: Validate the Login functionalities

  @Login
  Scenario: Verify user cannot login with invalid username and password
    Given User launches the application
    When User enters username "testUser"
    And User enters password "password123"
    And User clicks the next button
    And User taps signIn button
    Then User should see an error message "Invalid credentials"

  @Login @smoke
  Scenario: Verify user can login with valid username and password
    Given User launches the application
    When User enters username "testUser"
    And User enters password "password12345678"
    And User clicks the next button
    And User taps signIn button
    Then User should be logged in successfully



