import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Cloud Native Certification/);
  });

  test('should display hero section', async ({ page }) => {
    const hero = page.locator('h1');
    await expect(hero).toBeVisible();
  });

  test('should display certification grid', async ({ page }) => {
    // Check for certification links in sidebar or main content
    const certLinks = page.getByRole('link', { name: 'CKA' });
    await expect(certLinks.first()).toBeVisible();
  });

  test('should have working sidebar navigation', async ({ page }) => {
    // Check sidebar has navigation items
    const sidebar = page.getByRole('complementary').first();
    await expect(sidebar).toBeVisible();
  });

  test('should have language selector', async ({ page }) => {
    const langSelector = page.getByRole('button', { name: /select language/i });
    await expect(langSelector).toBeVisible();
  });
});
