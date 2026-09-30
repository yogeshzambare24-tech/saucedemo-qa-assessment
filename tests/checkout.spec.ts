import { test } from '@playwright/test';

import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';

test('User can complete checkout successfully', async ({ page }) => {

  // Page Objects
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // 1. Login
  await loginPage.open();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  // 2. Verify inventory page
  await inventoryPage.verifyInventoryPage();

  // 3. Add products to cart
  await inventoryPage.addBackpack();
  await inventoryPage.addBikeLight();

  // 4. Open cart
  await inventoryPage.openCart();

  // 5. Verify products in cart
  await cartPage.verifyProductsInCart();

  // 6. Proceed to checkout
  await cartPage.checkout();

  // 7. Enter customer information
  await checkoutPage.fillCustomerInformation(
    'Yogesh',
    'Patil',
    '411044'
  );

  // 8. Continue to order overview
  await checkoutPage.continueToOverview();

  // 9. Complete order
  await checkoutPage.finishOrder();

  // 10. Verify successful order completion
  await checkoutPage.verifyOrderConfirmation();
});