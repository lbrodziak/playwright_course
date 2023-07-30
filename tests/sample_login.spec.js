// @ts-check
const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//     await page.goto('https://demo.applitools.com')
//     await page.pause()

//     await page.getByPlaceholder('Enter your username').fill('Test')
//     await page.getByPlaceholder('Enter your password').fill('Test1234')
//     await page.getByRole('link', { name: 'Sign in' })

// });

test('test', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');
    await page.pause()
    await page.getByTestId('login-input').click();
    await page.getByTestId('login-input').fill('Tester01');
    await page.getByTestId('password-input').click();
    await page.getByTestId('password-input').fill('Q1w2e3r4');
    await page.getByTestId('login-button').click();
    await page.getByTestId('user-name').click();

    await expect(page.getByTestId('user-name')).toHaveText('Jan Demobankowy');
});