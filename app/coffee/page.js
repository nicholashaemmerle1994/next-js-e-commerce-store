import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getCoffeeProducts } from '../../database/coffee';
import styles from './page.module.scss';

export default async function CoffeePage() {
  const coffeeProducts = await getCoffeeProducts();

  return (
    <>
      <h1 className={styles.h1}>Coffeebeans</h1>
      <main className={styles.main}>
        {coffeeProducts.map((coffee) => {
          return (
            <div key={coffee.id} className={styles.div}>
              <Link href={`/coffee/${coffee.id}`}>
                <Image
                  src={coffee.img}
                  alt={coffee.name}
                  width={250}
                  height={300}
                />
              </Link>
              <Link href={`/coffee/${coffee.siteName.id}`}>
                <h3>{coffee.name}</h3>
              </Link>
              <p>{coffee.shortDiscription}</p>

              <p>{coffee.price}</p>
            </div>
          );
        })}
      </main>
    </>
  );
}
