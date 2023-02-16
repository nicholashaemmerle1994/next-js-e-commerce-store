import styles from './page.module.scss';

export const metadata = {
  title: 'Thank you for your order',
  description: 'Thank you page for oyur order. ',
};

export default function ThankYouPage() {
  return (
    <div className={styles.div}>
      <h1>Thank you for your order</h1>
      <p>Enjoy the best italian coffee!</p>
    </div>
  );
}
