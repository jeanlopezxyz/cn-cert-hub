import { test, expect } from '@playwright/test';

test.describe('Accessibility & SEO', () => {
  test('homepage should have skip to main content link', async ({ page }) => {
    await page.goto('/');

    const skipLink = page.getByRole('link', { name: /skip to main content/i });
    await expect(skipLink).toBeAttached();
  });

  test('homepage should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');

    // Should have h1
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    const h1Count = await h1.count();
    expect(h1Count).toBe(1); // Only one h1 per page
  });

  test('images should have alt text', async ({ page }) => {
    await page.goto('/');

    const images = page.locator('img:visible');
    const imageCount = await images.count();

    for (let i = 0; i < Math.min(imageCount, 10); i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      const ariaLabel = await img.getAttribute('aria-label');
      const ariaHidden = await img.getAttribute('aria-hidden');

      // Image should have alt text, aria-label, or be hidden from screen readers
      expect(alt !== null || ariaLabel !== null || ariaHidden === 'true').toBeTruthy();
    }
  });

  test('should have meta description', async ({ page }) => {
    await page.goto('/');

    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toBeAttached();
    const content = await metaDescription.getAttribute('content');
    expect(content?.length).toBeGreaterThan(50);
  });

  test('should have Open Graph tags', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('meta[property="og:title"]')).toBeAttached();
    await expect(page.locator('meta[property="og:description"]')).toBeAttached();
    await expect(page.locator('meta[property="og:image"]')).toBeAttached();
  });

  test('should have canonical URL', async ({ page }) => {
    await page.goto('/');

    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toBeAttached();
  });

  test('should have hreflang tags for i18n', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('link[hreflang="en"]')).toBeAttached();
    await expect(page.locator('link[hreflang="es"]')).toBeAttached();
    await expect(page.locator('link[hreflang="pt"]')).toBeAttached();
    await expect(page.locator('link[hreflang="x-default"]')).toBeAttached();
  });

  test('certification page should have structured data', async ({ page }) => {
    await page.goto('/certifications/cka');

    const jsonLd = page.locator('script[type="application/ld+json"]');
    const count = await jsonLd.count();
    expect(count).toBeGreaterThanOrEqual(2); // WebSite + BreadcrumbList + EducationalOccupationalCredential
  });

  test('links should be keyboard accessible', async ({ page }) => {
    await page.goto('/');

    // Tab to first focusable element (skip link)
    await page.keyboard.press('Tab');

    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });
});
