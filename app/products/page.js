import { getAllProducts } from '@/database/products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Coffee Beans',
  description: 'This is my Animals page',
};

export default async function ProductPage() {
  const allProducts = await getAllProducts();

  return (
    <>
      <h1 className={styles.h1}>All our Products</h1>
      <main className={styles.main}>
        {allProducts.map((product) => {
          return (
            <div key={product.id} className={styles.div}>
              <Link
                className={styles.img}
                href={`/coffee/${product.id}`}
                data-test-id={`product-${product.id}`}
              >
                <Image
                  src={product.img}
                  alt={product.name}
                  width={250}
                  height={300}
                />
              </Link>
              <Link
                href={`/coffee/${product.id}`}
                data-test-id="product-<product id>"
              >
                <h3>{product.name}</h3>
              </Link>
              <p>{product.shortDescription}</p>

              <p>{(product.price / 100).toFixed(2)} €</p>
            </div>
          );
        })}
      </main>
    </>
  );
}
