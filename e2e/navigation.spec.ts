import { test, expect } from '@playwright/test';

test('Navigation Flow', async ({ page }) => {
    await page.goto('/');

    // Find and click the Blog link in navigation
    // Assumptions: Navigation uses standard checks, might need adjustments based on real DOM
    const blogLink = page.getByRole('link', { name: 'Blog' }).first();
    await expect(blogLink).toBeVisible();
    await blogLink.click();

    // Verify URL
    await expect(page).toHaveURL(/\/blog/);

    // Verify header content on the new page
    const header = page.locator('h1, h2').filter({ hasText: 'Blog' }).first();
    await expect(header).toBeVisible();
});
