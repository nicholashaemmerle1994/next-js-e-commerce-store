import { getEquipment } from '@/database/equipment';
import Image from 'next/image';
import styles from './page.module.scss';

export default async function EquipmentPage({ params }) {
  const singleEquipment = await getEquipment(params.equipmentId);

  return (
    <div className={styles.outterdiv}>
      <div className={styles.innerdiv2}>
        <main className={styles.main}>
          <Image
            className={styles.img}
            src={singleEquipment.img}
            alt={singleEquipment.name}
            width={450}
            height={400}
          />
        </main>
      </div>
      <div className={styles.innerdiv}>
        <h1>{singleEquipment.name}</h1>
        <p className={styles.longDescription}>
          {singleEquipment.longDescription}
        </p>
        <p>Price: {(singleEquipment.price / 100).toFixed(2)}</p>
        <button className={styles.button}>Add to your cart</button>
      </div>
    </div>
  );
}
