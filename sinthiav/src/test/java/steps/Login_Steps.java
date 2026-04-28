package steps;

import io.cucumber.java.en.*;
import pages.UserLoginPage;

public class Login_Steps {

    private UserLoginPage loginPage;

    @Given("User launches the application")
    public void user_launches_the_application() {
        loginPage = new UserLoginPage();
    }

    @When("User enters username {string}")
    public void user_enters_username(String username) {
        loginPage.enterUsername(username);
}

    @When("User enters password {string}")
    public void user_enters_password(String password) {
        loginPage.enterPassword(password);
    }

    @And("User click the next button")
    public void userClickTheNextButton() {
        loginPage.clickNextBtn();
    }

    @And("User taps signIn button")
    public void userTapsSignInButton() {
        loginPage.clickSignInBtn();
    }

    @Then("User should be logged in successfully")
    public void userShouldBeLoggedInSuccessfully() {
        loginPage.isPageDisplayed();
    }

}
