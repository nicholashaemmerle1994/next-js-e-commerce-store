'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';
import styles from './page.module.scss';

export default function EquipmentPage(props) {
  const [count, setCount] = useState(1);
  const router = useRouter();
  return (
    // HAUPTSEITE
    <div className={styles.outterdiv}>
      <Image
        data-test-id="product-image"
        src={props.equipment.img}
        alt={props.equipment.name}
        width={450}
        height={500}
      />
      <div className={styles.innerdiv}>
        <h1>{props.equipment.name}</h1>
        <p className={styles.longDescription}>
          {props.equipment.longDescription}
        </p>
        <p data-test-id="product-price">
          Price: {(props.equipment.price / 100).toFixed(2)}
        </p>
        <div className={styles.buttonDiv}>
          <div>
            <input readOnly value={count} data-test-id="product-quantity" />
            {/* Minus Button */}
            <button
              onClick={() => {
                if (count <= 1) {
                  setCount(1);
                } else {
                  setCount(count - 1);
                }
              }}
            >
              -
            </button>
            {/* Plus button */}
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        {/* Submit BUtton */}
        <button
          data-test-id="product-add-to-cart"
          className={styles.button}
          onClick={() => {
            // get the cookie
            const productInCookies = getParsedCookie('cart');

            // if there is no cookie we initialize the value with a count
            if (!productInCookies) {
              // create the cookie with a new object for the coffee
              setStringifiedCookie('cart', [
                { id: props.equipment.id, amount: count },
              ]);
              // if there is no cookie function stop here
              setCount(1);
              return;
            }

            const foundCoffee = productInCookies.find((equipmentInCookie) => {
              return equipmentInCookie.id === props.equipment.id;
            });

            // my coffee is inside of the cookie
            if (foundCoffee) {
              // update the amount of the foundcoffee
              foundCoffee.amount += count;
              // my coffee is not inside of the cookie
            } else {
              // Add a  coffee to the array of coffees in cookies
              productInCookies.push({
                id: props.equipment.id,
                amount: count,
              });
            }

            // Update the cookie after transformation
            setStringifiedCookie('cart', productInCookies);
            setCount(1);
            router.refresh();
          }}
        >
          Add to your cart
        </button>
      </div>
    </div>
  );
}
