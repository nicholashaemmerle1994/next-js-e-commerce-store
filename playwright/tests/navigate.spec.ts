import { expect, test } from '@playwright/test';

test('Add to cart, change quantity and remove from cart', async ({ page }) => {
  await page.goto('http://localhost:3000');

  //  New version to check if the element is visible
  await expect(page.getByRole('heading', { name: 'About us' })).toBeVisible();
  // New version to check if the element is visible
  await expect(page.locator('h1')).toHaveText('About us');

  // Check if the p element is visible and contains the text
  await expect(page.locator('p'))
    .toHaveText(`To provide people with the best Italian coffee was the mission that started it all.
  It was our goal to bring the amazing flavors and variety of Italian coffee to people's homes,
  so they could enjoy it as much as we do. With years of tasting different coffees, we knew
  that our passion was italian roasts, and we wanted to share the ones we loved the most.`);
  // Navigate to the products page
  await page.getByRole('link', { name: 'Products' }).click();
  // Check if the heading is visible and if i am on the right page
  await expect(
    page.getByRole('heading', { name: 'All our Products' }),
  ).toBeVisible();
  // Navigate to the specific coffee page
  await page.getByTestId('product-1').click();
  //  Checking if i am on the right page
  await expect(page).toHaveURL('http://localhost:3000/coffee/1');
  // Adding up products that i want to buy
  await page.getByRole('button', { name: '+' }).dblclick();
  // Adding the product to the cart
  await page.getByTestId('product-add-to-cart').click();
  // Checking if the cart is visible and if the number of products is correct
  await expect(page.getByRole('link', { name: 'Cart 3' })).toBeVisible();
  // Adding a higher quantity of the same product
  await page.getByRole('button', { name: '+' }).dblclick();
  // Adding the product to the cart
  await page.getByTestId('product-add-to-cart').click();
  // Checking if the cart is visible and if the number of products is correct
  await expect(page.getByRole('link', { name: 'Cart 6' })).toBeVisible();
  // Navigate to the cart page
  await page.getByRole('link', { name: 'Cart 6' }).click();
  // Checking if i am on the right page
  await expect(page.getByRole('heading', { name: 'Cart' })).toBeVisible();
  // Deleting the product from the cart
  await page.getByRole('button', { name: 'Delete Product' }).click();
  // Checking if the cart is visible and if the number of products is correct
  await expect(page.getByRole('link', { name: 'Cart 0' })).toBeVisible();
  // Navigate to the products page
  await page.getByRole('link', { name: 'Products' }).click();
  // Navigate to the specific coffee page
  await page.getByTestId('product-3').click();
  // Adding the product to the cart
  await page.getByTestId('product-add-to-cart').click();
  // Checking if the cart is visible and if the number of products is correct
  await expect(page.getByRole('link', { name: 'Cart 1' })).toBeVisible();
  // Navigate to the cart page
  await page.getByRole('link', { name: 'Cart 1' }).click();
  // Checking if i am on the right page
  await expect(page.getByRole('heading', { name: 'Cart' })).toBeVisible();
  // Navigate to the checkout page
  await page.getByRole('button', { name: 'Checkout' }).click();
  // Checking if i am on the right page
  await expect(page.getByRole('heading', { name: 'Checkout' })).toBeVisible();
  // Adding the name
  await page.getByTestId('checkout-first-name').fill('Nico');
  // Adding the last name
  await page.getByTestId('checkout-last-name').fill('Hämmerle');
  // Adding the email
  await page.getByTestId('checkout-email').fill('peter.brunner@gmx.at');
  // Adding the address
  await page.getByTestId('checkout-address').fill('Musterstrasse 1');
  // Adding the city
  await page.getByTestId('checkout-city').fill('Musterstadt');
  // Adding the zip code
  await page.getByTestId('checkout-postal-code').fill('1234');
  // Adding the country
  await page.getByTestId('checkout-country').fill('Musterland');
  //  Adding credit card number
  await page.getByTestId('checkout-credit-card').fill('1234567890123456');
  // Adding the expiration date
  await page.getByTestId('checkout-expiration-date').fill('12/24');
  // Adding the cvv
  await page.getByTestId('checkout-security-code').fill('123');
  // Confirming the order
  await page.getByRole('button', { name: 'Confirm Order' }).click();
  // Checking if i am on the right page
  await expect(
    page.getByRole('heading', { name: 'Thank you for your order' }),
  ).toBeVisible();
});
