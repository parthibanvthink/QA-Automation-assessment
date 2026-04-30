
import java.util.List;

@FindBy(className = "inventory_item")
List<WebElement> products;

@FindBy(className = "shopping_cart_badge")
WebElement cartBadge;
public void addFirstProductToCart() {
    driver.findElement(By.xpath("(//button[text()='Add to cart'])[1]")).click();
}
public void addProductByName(String productName) {

    String xpath = "//div[text()='" + productName + "']/ancestor::div[@class='inventory_item']//button";

    driver.findElement(By.xpath(xpath)).click();
}
public int getCartCount() {
    return Integer.parseInt(cartBadge.getText());
}