import { test, expect } from '@playwright/test';

test.describe('Internationalization', () => {
  test('should load Spanish version', async ({ page }) => {
    await page.goto('/es/');

    // Check for Spanish content
    await expect(page).toHaveURL('/es/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  });

  test('should load Portuguese version', async ({ page }) => {
    await page.goto('/pt/');

    // Check for Portuguese content
    await expect(page).toHaveURL('/pt/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'pt');
  });

  test('should have language selector', async ({ page }) => {
    await page.goto('/');

    // Verify language selector button exists
    const langSelector = page.getByRole('button', { name: /select language/i });
    await expect(langSelector).toBeVisible();

    // Click to open dropdown
    await langSelector.click();

    // Dropdown should show language options
    await expect(page.getByText('Español')).toBeVisible();
  });

  test('Spanish certification page should load', async ({ page }) => {
    await page.goto('/es/certifications/cka');

    await expect(page).toHaveURL('/es/certifications/cka');
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  });

  test('Portuguese news page should load', async ({ page }) => {
    await page.goto('/pt/news');

    await expect(page).toHaveURL('/pt/news');
    await expect(page.locator('html')).toHaveAttribute('lang', 'pt');
  });
});
