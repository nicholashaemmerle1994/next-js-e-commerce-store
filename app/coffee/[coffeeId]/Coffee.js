'use client';
import Image from 'next/image';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';
import styles from './page.module.scss';

// coffeeIsCookie = [ {id: number, quantity: number  },  ]

export default function CoffeePage(props) {
  const [count, setCount] = useState(1);
  return (
    // HAUPTSEITE

    <>
      <div className={styles.outterdiv}>
        {/* <div className={styles.innerdiv}> */}
        {/* <main className={styles.main}> */}
        <Image
          src={props.coffee.img}
          alt={props.coffee.name}
          width={450}
          height={500}
        />
        {/* </main> */}
        {/* </div> */}
        <div className={styles.innerdiv}>
          <h1>{props.coffee.name}</h1>
          <p className={styles.longDescription}>
            {props.coffee.longDescription}
          </p>
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
              const coffeeInCookies = getParsedCookie('coffeeCookie');

              // if there is no cookie we initialize the value with a count
              if (!coffeeInCookies) {
                // create the cookie with a new object for the coffee
                setStringifiedCookie('coffeeCookie', [
                  { id: props.coffee.id, amount: count },
                ]);
                // if there is no cookie function stop here
                return;
              }

              const foundCoffee = coffeeInCookies.find((coffeeInCookie) => {
                return coffeeInCookie.id === props.coffee.id;
              });

              // my coffee is inside of the cookie
              if (foundCoffee) {
                // Add a start to the foundcoffee
                foundCoffee.amount = count;
                // my coffee is not inside of the cookie
              } else {
                // Add a the coffee to the array of coffees in cookies
                coffeeInCookies.push({ id: props.coffee.id, amount: count });
              }

              // Update the cookie after transformation
              setStringifiedCookie('coffeeCookie', [
                { id: props.coffee.id, amount: count },
              ]);
            }}
          >
            Add to your cart
          </button>
        </div>
      </div>

      {/* Button */}
    </>
  );
}
