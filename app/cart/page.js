import { getAllProducts } from '@/database/products';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import DeleteButton from './DeleteButton';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Cart',
  description: 'Here you find all your products you want to buy',
};

export default async function CheckoutPage() {
  const allProducts = await getAllProducts();
  // get the cookie from the server
  const cartCookie = cookies().get('cart');

  // create a default value if cooke doesn't exist
  let cartCookieParsed = [];

  if (cartCookie) {
    cartCookieParsed = JSON.parse(cartCookie.value);
  }

  const productsWithAmount = allProducts.map((product) => {
    const productWithAmount = { ...product, amount: 0 };

    // read the cookie and find the product
    const productInCookies = cartCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );

    // if find the product i update the amount
    if (productInCookies) {
      productWithAmount.amount = productInCookies.amount;
    }

    return productWithAmount;
  });
  const cartItems = productsWithAmount.filter((obj) => obj.amount > 0);

  let total = 0;

  cartItems.forEach((item) => {
    total += item.price * item.amount;
    return total;
  });

  return (
    <div className={styles.wholepage}>
      <h1>Cart</h1>
      {cartItems.map((product) => {
        return (
          <div
            key={`product-${product.id}`}
            data-test-id={`cart-product-${product.id}`}
          >
            <div className={styles.wholeProduct}>
              <div className={styles.divImg}>
                <p>{product.name}</p>
                <Image
                  src={product.img}
                  width={200}
                  height={200}
                  alt={product.name}
                />
              </div>
              <div className={styles.textDiv}>
                <p
                  className={styles.p}
                  data-test-id={`cart-product-quantity-${product.amount}`}
                >
                  Quantity: {product.amount}
                </p>
                <p className={styles.p}>
                  Price: {((product.amount * product.price) / 100).toFixed(2)} €
                </p>
                <DeleteButton
                  parsedData={cartCookieParsed}
                  currentProduct={product}
                />
              </div>
            </div>
          </div>
        );
      })}
      <p>Total: {total}</p>
      <Link href="/checkout">
        <button className={styles.button}>Go to Checkout</button>
      </Link>
    </div>
  );
}
