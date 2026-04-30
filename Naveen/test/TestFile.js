const LoginPage = require('../basePage/login');

const login = new LoginPage();
console.log("Testcase 1:verify Login Page");
login.verifyLoginPage();
console.log("Testcase 2: Valid Login");
login.login("standard_user", "secret_sauce");
console.log("Testcase 3: Invalid Login");
login.invalidLogin();
console.log("Testcase 4: Password Missing");
login.passwordMissing();
console.log("Testcase 5: Username Missing");
login.usernameMissing();
console.log("Testcase: Login Success Redirect");
login.loginSuccess();
