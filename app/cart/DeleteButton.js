'use client';
import { setStringifiedCookie } from '/utils/cookies';
import { useRouter } from 'next/navigation';
// import { deleteSingleProduct } from '@/database/products';
import styles from './button.module.scss';

export default function DeleteButton(props) {
  const router = useRouter();
  function handleClick() {
    const cookieArray = props.parsedData;
    const currentProduct = cookieArray.filter(
      (product) => product.id !== props.currentProduct.id,
    );
    setStringifiedCookie('cart', currentProduct);
    router.refresh();
  }
  return (
    <button className={styles.deleteButton} onClick={handleClick}>
      Delete Product
    </button>
  );
}
