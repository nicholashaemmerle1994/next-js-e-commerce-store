import { getAllProductsCoffee } from '@/database/products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.scss';

export default async function CoffeePage() {
  const coffeeProducts = await getAllProductsCoffee();
  console.log(coffeeProducts);

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
              <Link href={`/coffee/${coffee.id}`}>
                <h3>{coffee.name}</h3>
              </Link>
              <p>{coffee.shortDescription}</p>

              <p>{(coffee.price / 100).toFixed(2)} €</p>
            </div>
          );
        })}
      </main>
    </>
  );
}
