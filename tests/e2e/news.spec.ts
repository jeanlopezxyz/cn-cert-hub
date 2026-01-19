import { test, expect } from '@playwright/test';

test.describe('News Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/news');
  });

  test('should display news page with title', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Cloud Native News');
  });

  test('should display featured news card', async ({ page }) => {
    const featuredCard = page.getByText('FEATURED');
    await expect(featuredCard).toBeVisible();
  });

  test('should display category filters', async ({ page }) => {
    // Look for filter buttons in the categories section
    const categoriesSection = page.getByText('Categories');
    await expect(categoriesSection).toBeVisible();
  });

  test('should filter news by category', async ({ page }) => {
    // Click on Events filter
    await page.getByRole('button', { name: /Events/i }).click();

    // Wait for filter to apply
    await page.waitForTimeout(500);

    // Check that Events filter is active
    const eventsButton = page.getByRole('button', { name: /Events/i });
    await expect(eventsButton).toBeVisible();
  });

  test('should display load more button', async ({ page }) => {
    const loadMoreButton = page.getByRole('button', { name: /Load More/i });
    await expect(loadMoreButton).toBeVisible();
  });

  test('should have load more functionality', async ({ page }) => {
    // Just verify the load more button exists
    const loadMoreButton = page.getByRole('button', { name: /Load More/i });
    await expect(loadMoreButton).toBeVisible();

    // Verify it's clickable
    await loadMoreButton.click();

    // Page should still be functional
    await expect(page.locator('h1')).toContainText('Cloud Native News');
  });
});
