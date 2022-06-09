/* eslint-disable jest/no-standalone-expect */
import { test, expect } from '@playwright/test';

test.describe('<App />', () => {
  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('should be at home page', async ({ page }) => {
    await page.goto('http://localhost:3000');

    await expect(page).toHaveURL('http://localhost:3000');

    await expect(page.locator('[data-testid="spinner"]')).toHaveText('Submitted');

    await expect(page.locator('text=Friends')).toHaveText('Friends');

    await expect(page.locator('#page-title')).toHaveText(/List of Friends/i);
  });

  test('should go to friend page', async ({ page }) => {
    await page.goto('http://localhost:3000');

    await Promise.all([
      page.waitForNavigation({ url: 'http://localhost:3000/friend/1' }),
      page.locator('text=Jeremy DavisAt work...Details >> button').click(),
    ]);

    await expect(page).toHaveURL('http://localhost:3000/friend/1');

    await page.locator('text=info').click();

    await expect(page.locator('text=Bio:')).toHaveText(/Bio:/i);
  });

  test('should go back home page', async ({ page }) => {
    await page.goto('http://localhost:3000/friend/1');

    await expect(page.locator('#page-title')).toHaveText(/Friend's Details/i);

    await page.locator('a div[role="figure"]').click();

    await expect(page).toHaveURL('http://localhost:3000/');
  });

  test('should opend and close the gallery modal at friend page', async ({ page }) => {
    await page.goto('http://localhost:3000/friend/1');

    await page.locator('text=photos').click();

    await page.locator('img[alt="photo"]').first().click();

    await expect(page.locator('.GalleryModal_modal_cont__IaJ8k')).toBeVisible();

    await page.locator('button').click();

    await expect(page.locator('.GalleryModal_modal_cont__IaJ8k')).toBeHidden();
  });
});
