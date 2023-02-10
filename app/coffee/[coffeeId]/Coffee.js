'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';
import styles from './page.module.scss';

export default function CoffeePage(props) {
  // const [isUpdating, setIsUpdating] = useState(true);
  const [count, setCount] = useState(1);
  const [isUpdated, setIsUpdated] = useState(true);
  return (
    // HAUPTSEITE

    <div className={styles.outterdiv}>
      <Image
        data-test-id="product-image"
        src={props.coffee.img}
        alt={props.coffee.name}
        width={450}
        height={500}
      />

      <div className={styles.innerdiv}>
        <h1>{props.coffee.name}</h1>
        <p className={styles.longDescription}>{props.coffee.longDescription}</p>
        <p>Price: {(props.coffee.price / 100).toFixed(2)} €</p>
        <div className={styles.buttonDiv}>
          <div>
            <input readOnly value={count} />
            {/* Minus Button */}
            <button
              onClick={() => {
                // get the cookie
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
          className={styles.button}
          onClick={() => {
            // get the cookie
            const productInCookies = getParsedCookie('cart');

            console.log(productInCookies);

            // if there is no cookie we initialize the value with a count
            if (!productInCookies) {
              // create the cookie with a new object for the coffee
              setStringifiedCookie('cart', [
                {
                  id: props.coffee.id,
                  amount: count,
                },
              ]);
              // if there is no cookie function stop here
              setCount(1);
              return;
            }

            const foundCoffee = productInCookies.find((coffeeInCookie) => {
              console.log('props', typeof props.coffee.id);
              console.log('coffee', typeof coffeeInCookie.id);
              return coffeeInCookie.id === props.coffee.id;
            });
            console.log(foundCoffee);
            // my coffee is inside of the cookie
            if (foundCoffee) {
              // update the amount of the foundcoffee
              foundCoffee.amount += count;
              // my coffee is not inside of the cookie
            } else {
              // Add a  coffee to the array of coffees in cookies
              productInCookies.push({
                id: props.coffee.id,
                amount: count,
              });
            }

            // Update the cookie after transformation
            setStringifiedCookie('cart', productInCookies);
            setCount(1);
            setIsUpdated(!isUpdated);
          }}
        >
          Add to your cart
        </button>
      </div>
    </div>
  );
}
