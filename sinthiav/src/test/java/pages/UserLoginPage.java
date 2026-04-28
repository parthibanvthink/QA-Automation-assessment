package pages;

import base.BasePage;
import io.appium.java_client.AppiumBy;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class UserLoginPage extends BasePage {
    private By username = AppiumBy.accessibilityId("loginID");
    private By nextBtn = AppiumBy.accessibilityId("login");
    private By userPassword = AppiumBy.accessibilityId("password");
    private By signInBtn = AppiumBy.accessibilityId("login");

    public void enterUsername(String user) {
        click(username);
        type(username, user);
    }

    public void enterPassword(String password) {
        type(userPassword, password);
    }

    public void clickNextBtn() {
        click(nextBtn);
    }

    public void clickSignInBtn() {
        click(signInBtn);
    }

    public boolean isPageDisplayed() {
        return isDisplayed(homePage);
    }
}
