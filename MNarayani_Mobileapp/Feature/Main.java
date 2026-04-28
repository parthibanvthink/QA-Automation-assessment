@Smoke @Login
Scenario: Verify that user can login with valid credentials
  Given User is on the login page
  When User enters valid username and password
  And User clicks on the login button
  Then User should be redirected to the dashboard page

@Smoke @FormSave
Scenario: Verify that user can save form data
  Given User is on the form page
  When User fills in the required fields
  And User clicks on the save button
  Then Form data should be saved successfully