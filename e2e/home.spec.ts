import { test, expect } from '@playwright/test';

test('Home Page Smoke Test', async ({ page }) => {
    await page.goto('/');

    // Check title
    await expect(page).toHaveTitle(/Panda Studio/);

    // Check main heading is visible
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();

    // Check CTA button (searching by text "Umów wizytę")
    // Using a more lenient selector to find the button or link
    const cta = page.getByText('Umów wizytę', { exact: false }).first();
    await expect(cta).toBeVisible();
});
