import Image from 'next/image';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Thank you for your order',
  description: 'Thank you page for oyur order. ',
};

export default function ThankYouPage() {
  return (
    <div className={styles.div}>
      <h1>Thank you for your order</h1>
      <p>Enjoy the best italian coffee!</p>

      <Image
        className={styles.image}
        src="/happyCoffee.gif"
        width={500}
        height={500}
        alt="happy coffee gif"
      />
    </div>
  );
}
