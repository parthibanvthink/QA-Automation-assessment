package tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import base.BaseTest;
import pages.LoginPage;

public class AddToCartTest extends BaseTest {

    @Test
    public void verifyAddToCart() {

        LoginPage loginPage = new LoginPage(driver);

        loginPage.login("standard_user", "secret_sauce");
        Assert.assertTrue(loginPage.isLoginSuccessful(), "Login Failed");
        loginPage.addFirstProductToCart();
        int cartCount = loginPage.getCartCount();
        Assert.assertEquals(cartCount, 1, "Product not added to cart");
        System.out.println("Add to Cart Test Passed");
    }
}