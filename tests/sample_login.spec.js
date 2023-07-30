// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('User login to Demobank', () => {
    test('Test login with correct credentials', async ({ page }) => {
        await page.goto('https://demo-bank.vercel.app/');
        await page.getByTestId('login-input').click();
        await page.getByTestId('login-input').fill('Tester01');
        await page.getByTestId('password-input').click();
        await page.getByTestId('password-input').fill('Q1w2e3r4');
        await page.getByTestId('login-button').click();
        await page.getByTestId('user-name').click();

        await expect(page.getByTestId('user-name')).toHaveText('Jan Demobankowy');
    });

    test('Test login with incorrect credentials with incorrect username', async ({ page }) => {
        await page.goto('https://demo-bank.vercel.app/');
        await page.getByTestId('login-input').click();
        await page.getByTestId('login-input').fill('Tester1');
        await page.getByTestId('password-input').click();
        await expect(page.getByTestId('error-login-id')).toHaveText('identyfikator ma min. 8 znaków');
    });
    test('Test login with incorrect credentials with incorrect password', async ({ page }) => {
        await page.goto('https://demo-bank.vercel.app/');
        await page.getByTestId('login-input').click();
        await page.getByTestId('login-input').fill('Tester01');
        await page.getByTestId('password-input').click();
        await page.getByTestId('password-input').fill('1234');
        await page.locator('#login_form div').filter({ hasText: 'zaloguj się' }).nth(1).click()
        await await expect(page.getByTestId('error-login-password')).toHaveText('hasło ma min. 8 znaków');
    });
});