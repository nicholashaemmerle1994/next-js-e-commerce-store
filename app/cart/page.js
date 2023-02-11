import { getAllProducts } from '@/database/products';
import { cookies } from 'next/headers';
import Image from 'next/image';
// import styles from './page.module.scss';
import styles from './page.module.scss';

// export const metadata = {
//   title: 'Cart',
//   description: 'Here you find all your bikes',
// };

// const product = productInCookies[]

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

    // i read the cookie and find the fruit
    const productInCookies = cartCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );

    // if find the fruit i update the amount of stars
    if (productInCookies) {
      productWithAmount.amount = productInCookies.amount;
    }

    return productWithAmount;
  });
  const cartItems = productsWithAmount.filter((obj) => obj.amount > 0);

  return (
    <div className={styles.wholepage}>
      <h1>Cart</h1>
      {cartItems.map((product) => {
        return (
          <div key={product.id}>
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
                <p className={styles.p}>Quantity: {product.amount}</p>
                <p className={styles.p}>
                  Price: {((product.amount * product.price) / 100).toFixed(2)} €
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
