# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> homepage loads and has title
- Location: spec\example.spec.js:3:5

# Error details

```
ReferenceError: allure is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | 
  2  | import {  Page,  Locator } from '@playwright/test';
  3  | 
  4  | export class TodoPage {
  5  | 
  6  |  async click(locator, fieldName) {
  7  |     await allure.step(`Click on ${fieldName}`, async () => {
  8  |       try {
  9  |         await locator.waitFor({ state: 'visible', timeout: 5000 });
  10 |         await locator.click();
  11 | 
  12 |         const screenshot = await locator.page().screenshot();
  13 |         await allure.attachment(
  14 |           `${fieldName} - Click Success`,
  15 |           screenshot,
  16 |           'image/png'
  17 |         );
  18 | 
  19 |       } catch (error) {
  20 |         const screenshot = await locator.page().screenshot();
  21 |         await allure.attachment(
  22 |           `${fieldName} - Error Screenshot`,
  23 |           screenshot,
  24 |           'image/png'
  25 |         );
  26 | 
  27 |         await allure.attachment(
  28 |           `${fieldName} - Error Details`,
  29 |           `${error}`,
  30 |           'text/plain'
  31 |         );
  32 | 
  33 |         throw new Error(`Failed to click on ${fieldName}: ${error}`);
  34 |       }
  35 |     });
  36 |   }
  37 |  async type(locator, fieldName, value) {
> 38 |     await allure.step(`Enter value in ${fieldName}`, async () => {
     |     ^ ReferenceError: allure is not defined
  39 |       try {
  40 |         await locator.waitFor({ state: 'visible', timeout: 5000 });
  41 | 
  42 |         await locator.fill(value); // clears + types
  43 | 
  44 |         const screenshot = await locator.screenshot();
  45 |         await allure.attachment(`${fieldName} - Input Success`, screenshot, 'image/png');
  46 | 
  47 |       } catch (error) {
  48 |         const screenshot = await locator.page().screenshot();
  49 |         await allure.attachment(`${fieldName} - Error Screenshot`, screenshot, 'image/png');
  50 |         await allure.attachment(`${fieldName} - Error Details`, `${error}`, 'text/plain');
  51 | 
  52 |         throw new Error(`Failed to enter value in ${fieldName}: ${error}`);
  53 |       }
  54 |     });
  55 |   }
  56 | }
  57 | 
```