import { getAllProducts } from '@/database/products';
import { cookies } from 'next/headers';
import Form from './Form';
import styles from './page.module.scss';

export default async function Checkout() {
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
    <div className={styles.wholediv}>
      <h1>Checkout</h1>
      <div className={styles.div}>
        <Form total={total} />
      </div>
    </div>
  );
}
