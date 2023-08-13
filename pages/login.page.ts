import { Page } from "@playwright/test";

//export sprawia że klasa jest widoczna poza modułem
export class LoginPage {
    constructor(private page: Page) { }

    loginInput = this.page.getByTestId('login-input');
    passwordInput = this.page.getByTestId('password-input');
    loginButton = this.page.getByTestId('login-button');

    // await page.getByTestId('login-input').fill('Tester01');
}