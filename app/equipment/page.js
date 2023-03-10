import { getAllProductsEquipment } from '@/database/products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Equipment',
  description: 'This is the best Equipment you will find',
};

export default async function EquipmentPage() {
  const equipments = await getAllProductsEquipment();

  return (
    <>
      <h1 className={styles.h1}>Equipment</h1>
      <main className={styles.main}>
        {equipments.map((equipment) => {
          return (
            <div key={`equipment-${equipment.id}`} className={styles.div}>
              <Link href={`/equipment/${equipment.id}`}>
                <Image
                  className={styles.img}
                  src={equipment.img}
                  alt={equipment.name}
                  width={250}
                  height={250}
                />
              </Link>
              <Link href={`/coffee/${equipment.id}`}>
                <h3>{equipment.name}</h3>
              </Link>
              <p>{equipment.shortDescription}</p>

              <p>{equipment.price}</p>
            </div>
          );
        })}
      </main>
    </>
  );
}
