import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to certification page from homepage card', async ({ page }) => {
    await page.goto('/');

    // Click on CKA certification card in main content area (has cert-card class)
    const ckaCard = page.locator('main a.cert-card[href="/certifications/cka"]');
    await ckaCard.click();

    await expect(page).toHaveURL('/certifications/cka');
    await expect(page.locator('h1')).toContainText('CKA');
  });

  test('should navigate to news page via direct URL', async ({ page }) => {
    await page.goto('/news');

    await expect(page).toHaveURL('/news');
    await expect(page.locator('h1')).toContainText('Cloud Native News');
  });

  test('should navigate to best practices page via direct URL', async ({ page }) => {
    await page.goto('/best-practices');

    await expect(page).toHaveURL('/best-practices');
  });

  test('should navigate to docs page via direct URL', async ({ page }) => {
    await page.goto('/docs');

    await expect(page).toHaveURL('/docs');
  });

  test('should return to homepage from logo', async ({ page }) => {
    await page.goto('/certifications/cka');

    // Click on logo in sidebar (visible on desktop)
    const logo = page.getByRole('link', { name: 'CN Cert Hub' });
    await logo.click();

    await expect(page).toHaveURL('/');
  });

  test('should expand sidebar section and click link', async ({ page }) => {
    await page.goto('/');

    // Expand the News & Updates section
    const newsSection = page.getByRole('button', { name: /News.*Updates/i });
    await newsSection.click();

    // Wait for section to expand
    await page.waitForTimeout(300);

    // Now click the Cloud Native News link
    const newsLink = page.getByRole('link', { name: 'Cloud Native News' });
    await newsLink.click();

    await expect(page).toHaveURL('/news');
  });
});
