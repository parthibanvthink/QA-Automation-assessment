import { Page, Locator } from '@playwright/test';
import { TodoPage } from '../common/BasePage';

export class LoginPage {

  constructor(page) {
    this.page = page;
    this.baseModel = new TodoPage();

    // Initialize locators
    this.usernameInput = this.page.locator("//input[@id='user-name']");
    this.passwordInput = this.page.locator("//input[@id='password']");
    this.loginButton = this.page.locator("//input[@id='login-button']");
  }

  async login(username, password) {
    await this.baseModel.type(this.usernameInput, 'Username Field', username);
    await this.baseModel.type(this.passwordInput, 'Password Field', password);
    await this.baseModel.click(this.loginButton, 'Login Button');
  }
}