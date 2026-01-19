import { test, expect } from '@playwright/test';

test.describe('Mobile Responsiveness', () => {
  test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE viewport

  test('should show mobile menu button', async ({ page }) => {
    await page.goto('/');

    const menuButton = page.locator('#mobile-menu-btn');
    await expect(menuButton).toBeVisible();
  });

  test('should toggle mobile sidebar', async ({ page }) => {
    await page.goto('/');

    // Click mobile menu button
    const menuButton = page.locator('#mobile-menu-btn');
    await menuButton.click();

    // Sidebar should be visible
    await expect(page.locator('body')).toHaveClass(/mobile-sidebar-open/);
  });

  test('should close sidebar when clicking backdrop', async ({ page }) => {
    await page.goto('/');

    // Open sidebar
    await page.locator('#mobile-menu-btn').click();

    // Click backdrop to close
    await page.locator('[data-mobile-backdrop]').click();

    // Sidebar should be closed
    await expect(page.locator('body')).not.toHaveClass(/mobile-sidebar-open/);
  });

  test('should close sidebar after navigation via direct URL', async ({ page }) => {
    await page.goto('/');

    // Open sidebar
    await page.locator('#mobile-menu-btn').click();

    // Verify sidebar opens
    await expect(page.locator('body')).toHaveClass(/mobile-sidebar-open/);

    // Navigate directly (simulating close on navigation)
    await page.goto('/news');

    // Sidebar should be closed on new page
    await expect(page.locator('body')).not.toHaveClass(/mobile-sidebar-open/);
  });

  test('homepage should be responsive', async ({ page }) => {
    await page.goto('/');

    // Hero should be visible
    await expect(page.locator('h1')).toBeVisible();

    // Content should not overflow horizontally
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1); // +1 for rounding
  });

  test('certification page should be responsive', async ({ page }) => {
    await page.goto('/certifications/cka');

    // Title should be visible
    await expect(page.locator('h1')).toBeVisible();

    // Content should not overflow
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
  });
});
