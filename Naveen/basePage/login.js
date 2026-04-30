const CommonFunctions = require('../commonFiles/commonFunctions');

class LoginPage {

    constructor() {
        this.cf = new CommonFunctions();
    }
verifyLoginPage() {
        this.cf.launchURL("https://www.saucedemo.com/inventory.html");
        this.cf.verifyElement("Username Field (id=user-name)");
        this.cf.verifyElement("Password Field (id=password)");}

login(username,password) {
        this.cf.enterText("Username Field",username);
        this.cf.enterText("Password Field",password);
        this.cf.click("Login Button");
    }
invalidLogin() {
        this.login("wrong_user","wrog_passwrd");
        this.cf.verifyMessage(
            "Epic sadface: Username and password do not match any user in this service"
        );}
passwordMissing() {
        this.login("standard_user","");

        this.cf.verifyMessage(
            "Epic sadface: Passwrd is required",
            "Epic sadface: Password is required"
        );
    }
 usernameMissing() {
        this.login("","secret_sauce");

        this.cf.verifyMessage(
            "Epic sadface: Username is required",
            "Epic sadface: Username is required"
        );
    }

loginSuccess() {
        this.login("standard_user","secret_sauce");
        this.cf.redirectTo("https://www.saucedemo.com/inventory.html");
    }
}
module.exports = LoginPage;