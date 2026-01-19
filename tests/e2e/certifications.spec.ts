import { test, expect } from '@playwright/test';

test.describe('Certification Pages', () => {
  test('CKA page should display exam details', async ({ page }) => {
    await page.goto('/certifications/cka');

    await expect(page.locator('h1')).toContainText('CKA');

    // Check main content is visible
    await expect(page.locator('main')).toBeVisible();
  });

  test('CKAD page should display exam details', async ({ page }) => {
    await page.goto('/certifications/ckad');

    await expect(page.locator('h1')).toContainText('CKAD');
  });

  test('CKS page should display exam details', async ({ page }) => {
    await page.goto('/certifications/cks');

    await expect(page.locator('h1')).toContainText('CKS');
  });

  test('should display study resources section', async ({ page }) => {
    await page.goto('/certifications/cka');

    // Check for resources section - just verify content loads
    await expect(page.locator('main')).toBeVisible();
    const pageContent = await page.content();
    expect(pageContent.includes('resource') || pageContent.includes('Resource')).toBeTruthy();
  });

  test('should display exam domains', async ({ page }) => {
    await page.goto('/certifications/cka');

    // Check that page has domain-related content
    const pageContent = await page.content();
    expect(pageContent.includes('domain') || pageContent.includes('Domain')).toBeTruthy();
  });
});
