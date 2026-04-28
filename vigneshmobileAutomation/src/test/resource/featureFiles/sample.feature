Feature: User Login

  Scenario: Successful login
    Given  user on login page
    When  user enters username and password
    Then user should redirected to  homepage