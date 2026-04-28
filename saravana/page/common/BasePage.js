
import {  Page,  Locator } from '@playwright/test';
import { allure } from 'allure-playwright';
export class TodoPage {

 async click(locator, fieldName) {
    await allure.step(`Click on ${fieldName}`, async () => {
      try {
        await locator.waitFor({ state: 'visible', timeout: 5000 });
        await locator.click();

        const screenshot = await locator.page().screenshot();
        await allure.attachment(
          `${fieldName} - Click Success`,
          screenshot,
          'image/png'
        );

      } catch (error) {
        const screenshot = await locator.page().screenshot();
        await allure.attachment(
          `${fieldName} - Error Screenshot`,
          screenshot,
          'image/png'
        );

        await allure.attachment(
          `${fieldName} - Error Details`,
          `${error}`,
          'text/plain'
        );

        throw new Error(`Failed to click on ${fieldName}: ${error}`);
      }
    });
  }
 async type(locator, fieldName, value) {
    await allure.step(`Enter value in ${fieldName}`, async () => {
      try {
        await locator.waitFor({ state: 'visible', timeout: 5000 });

        await locator.fill(value); // clears + types

        const screenshot = await locator.screenshot();
        await allure.attachment(`${fieldName} - Input Success`, screenshot, 'image/png');

      } catch (error) {
        const screenshot = await locator.page().screenshot();
        await allure.attachment(`${fieldName} - Error Screenshot`, screenshot, 'image/png');
        await allure.attachment(`${fieldName} - Error Details`, `${error}`, 'text/plain');

        throw new Error(`Failed to enter value in ${fieldName}: ${error}`);
      }
    });
  }
}
