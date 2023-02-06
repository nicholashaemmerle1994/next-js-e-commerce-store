import { getCoffeeProduct } from '@/database/coffee';
import Image from 'next/image';
import styles from './page.module.scss';

export default async function CoffeeProductPage({ params }) {
  const singleCoffee = await getCoffeeProduct(params.coffeeId);

  console.log(singleCoffee.id);
  return (
    <div className={styles.outterdiv}>
      <div className={styles.innerdiv}>
        <main className={styles.main}>
          <Image
            src={singleCoffee.img}
            alt={singleCoffee.name}
            width={450}
            height={500}
          />
        </main>
      </div>
      <div className={styles.innerdiv}>
        <h1>{singleCoffee.name}</h1>
        <p className={styles.longDescription}>{singleCoffee.longDescription}</p>
        <p>Price: {(singleCoffee.price / 100).toFixed(2)}</p>
        <button className={styles.button}>Add to your cart</button>
      </div>
    </div>
  );
}
