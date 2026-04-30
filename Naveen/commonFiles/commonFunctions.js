class CommonFunctions {

launchURL(url) {
        console.log(`Launching URL: ${url}`);
    }
enterText(fieldName, value) {
        console.log(`Enter ${value} in ${fieldName}`);
    }
click(elementName) {
        console.log(`Clickingt on ${elementName}`);
    }
verifyElement(elementName) {
        console.log(`${elementName} is present`);
    }

verifyMessage(expected, actual) {
        if (expected === actual) {
        console.log("Validation Passed:" + expected);
        } else {
        console.log("Validation Failed");
        }
    }
printMessage(message) {
        console.log(message);
    }
    redirectTo(url) {
        console.log(`Redirectimg to: ${url}`);
    }
loginSuccess() {
    this.login("standard_user","secret_sauce");
    this.cf.redirectTo("https://www.saucedemo.com/inventory.html");
}
}
module.exports = CommonFunctions;