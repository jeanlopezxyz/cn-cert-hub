import { test, expect } from '@playwright/test';

test.describe('Search Functionality', () => {
  test('should display search bar', async ({ page }) => {
    await page.goto('/');

    // Search bar uses a textbox role
    const searchBar = page.getByRole('textbox', { name: /search/i });
    await expect(searchBar).toBeVisible();
  });

  test('should accept search input', async ({ page }) => {
    await page.goto('/');

    // Type in search bar
    const searchBar = page.getByRole('textbox', { name: /search/i });
    await searchBar.fill('CKA');

    // Verify the input was accepted
    await expect(searchBar).toHaveValue('CKA');
  });
});
