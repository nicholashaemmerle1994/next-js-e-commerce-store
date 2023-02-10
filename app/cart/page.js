import { getAllProducts } from '@/database/products';
import { cookies } from 'next/headers';
import Image from 'next/image';

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
  console.log(cartItems);

  return (
    <>
      <div>Cart</div>
      <div>
        {cartItems.map((product) => {
          return (
            <div key={product.id}>
              <div>
                <Image src={product.img} width={200} height={200} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
