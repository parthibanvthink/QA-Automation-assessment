import { defineConfig, devices } from '@playwright/test'; 

export default defineConfig({ 
  testDir: './spec', 
  timeout: 30 * 1000, 
  expect: { timeout: 5000 }, 
 
  retries: 1, // optional, helps capture artifacts on retry 
  reporter: [ 
    ['list'], 
    // Enable Allure 
    ['allure-playwright'] // defaults to creating ./allure-results 
  ], 
 
  use: { 
    baseURL: 'https://www.saucedemo.com/', // change as needed 
    headless: false, 
 
    // Artifacts: 
    screenshot: 'only-on-failure',     // capture screenshots when a test fails 
    video: 'retain-on-failure',        // keep videos for failed tests 
    trace: 'on-first-retry',           // super useful for debugging 
  }, 
 
  // Useful for parallel cross-browser runs out of the box: 
  projects: [ 
    { name: 'Chromium', use: { ...devices['Desktop Chrome'] } } 
  ], 
}); 
 