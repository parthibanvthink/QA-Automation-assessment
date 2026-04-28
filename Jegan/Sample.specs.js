import { test, expect } from '@playwright/test';
 
test('Login flow test', async ({ page }) => {
  
  
  await page.goto('https://www.saucedemo.com/');
 

  await page.fill('#username', 'standard_user');
 
  
  await page.fill('#password', 'secret_sauce');
 
  
  await page.click('//*[@id="login-button"]');
 
  
  await page.waitForURL('**/dashboard');
 
  
  await expect(page.locator('text=Welcome')).toBeVisible();

  await page.click('//*[@id="add-to-cart-sauce-labs-backpack"]');

await page.click('//*[@id="item_4_img_link"]/img');
 
});
 