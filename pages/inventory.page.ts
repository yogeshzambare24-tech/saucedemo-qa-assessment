import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryContainer: Locator;
  readonly backpackAddButton: Locator;
  readonly bikeLightAddButton: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.inventoryContainer = page.locator(
      '[data-test="inventory-container"]'
    );

    this.backpackAddButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

    this.bikeLightAddButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-bike-light"]'
    );

    this.cartLink = page.locator(
      '[data-test="shopping-cart-link"]'
    );
  }

  async verifyInventoryPage() {
    await expect(this.inventoryContainer).toBeVisible();
  }

  async addBackpack() {
    await this.backpackAddButton.click();
  }

  async addBikeLight() {
    await this.bikeLightAddButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}