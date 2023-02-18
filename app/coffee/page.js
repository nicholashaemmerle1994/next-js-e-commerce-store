import { getAllProductsCoffee } from '@/database/products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Coffee Beans',
  description: 'This is my Coffee page',
};

export default async function CoffeePage() {
  const coffeeProducts = await getAllProductsCoffee();

  return (
    <>
      <h1 className={styles.h1}>Coffee Beans</h1>
      <main className={styles.main}>
        {coffeeProducts.map((coffee) => {
          return (
            <div key={coffee.id} className={styles.div}>
              <Link
                href={`/coffee/${coffee.id}`}
                data-test-id={`product-${coffee.id}`}
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
                data-test-id={`product-${coffee.id}`}
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
