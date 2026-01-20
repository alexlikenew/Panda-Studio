import { test, expect } from '@playwright/test';

test('Contact Form Validation', async ({ page }) => {
    await page.goto('/kontakt');

    // Find the submit button. Assuming it's a button with "Wyślij"
    const submitButton = page.getByRole('button', { name: 'Wyślij' });
    await expect(submitButton).toBeVisible();

    // Navigate/Scroll to form if needed, often Playwright auto-scrolls
    await submitButton.click();

    // Expect validation errors
    // We look for common Zod error messages or "wymagane"
    const errorMessages = page.getByText(/wymagane|błędny/i);

    // Should see at least one error message
    await expect(errorMessages.first()).toBeVisible();
});
