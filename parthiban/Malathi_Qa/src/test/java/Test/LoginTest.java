public class LoginTest extends BaseTest {

    @Test
    public void verifyLogin() {

        
        LoginPage loginPage = new LoginPage(driver);

        loginPage.login("standard_user", "secret_sauce");
         System.out.println("Launching login test");

        String currentUrl = driver.getCurrentUrl();

        Assert.assertTrue(currentUrl.contains("products"),
                "Login Test Passed ");
                else {
                    System.out.println("Login Test Failed");
                }

       // System.out.println("Login Test Passed");
         public boolean isLoginSuccessful() {
        return productsText.isDisplayed();
    }
    List<String> products = loginPage.getAllProductNames();

        
        System.out.println("Product List:");
        for (String product : products) {
            System.out.println(product);
        }
         Assert.assertTrue(products.size() > 0, "No products displayed");
         System.out.println("Total Products: " + products.size());

    }
    
}