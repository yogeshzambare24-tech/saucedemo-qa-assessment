import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.checkoutButton = page.locator(
      '[data-test="checkout"]'
    );
  }

  async verifyProductsInCart() {
    await expect(
      this.page.locator('[data-test="inventory-item"]')
        .filter({ hasText: 'Sauce Labs Backpack' })
    ).toBeVisible();

    await expect(
      this.page.locator('[data-test="inventory-item"]')
        .filter({ hasText: 'Sauce Labs Bike Light' })
    ).toBeVisible();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}