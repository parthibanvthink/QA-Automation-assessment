import { test, expect } from '@playwright/test'; 
 import { LoginPage } from '../page/pom/login'
test('homepage loads and has title', async ({ page }, testInfo) => { 
     const login = new LoginPage(page); 

  await test.step('Navigate to Playwright site', async () => { 
    await page.goto('https://www.saucedemo.com/'); 
   await login.login('standard_user', 'secret_sauce');
  }); 
 
 
 
  // (Optional) Attach your own screenshot to Allure explicitly: 
  const image = await page.screenshot(); 
  await testInfo.attach('homepage-screenshot', { 
    body: image, 
    contentType: 'image/png' 
  }); 
}); 
 