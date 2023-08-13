import { test, expect } from '@playwright/test';

test.describe('Basic dashboard actions', () => {
    const url = 'https://demo-bank.vercel.app/';
    const username = 'Tester01';
    const password = 'Test1234';
    test('Test przelewu', async ({ page }) => {
        await page.goto(url);
        await page.getByTestId('login-input').fill(username);
        await page.getByTestId('password-input').fill(password);
        await page.getByTestId('login-button').click();
        await page.locator('#widget_1_transfer_receiver').selectOption('2');
        await page.locator('#widget_1_transfer_amount').fill('150');
        await page.locator('#widget_1_transfer_title').fill('Zwrot');
        await page.getByRole('button', { name: 'wykonaj' }).click();
        await page.getByTestId('close-button').click();

        await expect(page.locator('#show_messages')).toHaveText(
            'Przelew wykonany! Chuck Demobankowy - 150,00PLN - Zwrot',
        );
    });
    test('Test doładowania', async ({ page }) => {
        await page.goto(url);
        await page.getByTestId('login-input').fill(username);
        await page.getByTestId('password-input').fill(password);
        await page.getByTestId('login-button').click();
        await page.locator('#widget_1_topup_receiver').selectOption('500 xxx xxx');
        await page.locator('#widget_1_topup_amount').fill('100');
        await page.locator('#uniform-widget_1_topup_agreement span').click();
        await page.getByRole('button', { name: 'doładuj telefon' }).click();
        await page.getByTestId('close-button').click();

        await expect(page.locator('#show_messages')).toHaveText(
            'Doładowanie wykonane! 100,00PLN na numer 500 xxx xxx',
        );
    });
});
