import { getAllProductsCoffee } from '@/database/products';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.scss';

export default async function CoffeePage() {
  const coffeeProducts = await getAllProductsCoffee();
  // get the cookie from the server
  const cartCookie = cookies().get('cart');

  // create a default value if cooke doesn't exist
  let cartCookieParsed = [];

  if (cartCookie) {
    cartCookieParsed = JSON.parse(cartCookie.value);
  }

  const coffeesWithAmount = coffeeProducts.map((coffee) => {
    const coffeeWithAmount = { ...coffee, amount: 0 };

    // i read the cookie and find the fruit
    const coffeeInCookies = cartCookieParsed.find(
      (coffeeObject) => coffee.id === coffeeObject.id,
    );

    // if find the fruit i update the amount of stars
    if (coffeeInCookies) {
      coffeeWithAmount.amount = coffeeInCookies.amount;
    }

    return coffeeWithAmount;
  });
  return (
    <>
      <h1 className={styles.h1}>Coffeebeans</h1>
      <main className={styles.main}>
        {coffeesWithAmount.map((coffee) => {
          return (
            <div key={coffee.id} className={styles.div}>
              <Link
                href={`/coffee/${coffee.id}`}
                data-test-id="product-<product id>"
              >
                <Image
                  src={coffee.img}
                  alt={coffee.name}
                  width={250}
                  height={300}
                />
              </Link>
              <Link
                href={`/coffee/${coffee.id}`}
                data-test-id="product-<product id>"
              >
                <h3>{coffee.name}</h3>
              </Link>
              <p>{coffee.shortDescription}</p>

              <p>{(coffee.price / 100).toFixed(2)} €</p>
              <p>{coffee.amount}</p>
            </div>
          );
        })}
      </main>
    </>
  );
}
