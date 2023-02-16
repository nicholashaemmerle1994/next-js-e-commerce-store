'use client';
import { deleteCookie } from '@/utils/cookies';
import styles from './page.module.scss';

export default function Form(props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        deleteCookie('cart');
        window.location.href = '/thankyou';
      }}
    >
      <div>
        <label>
          <input
            name="firstName"
            data-test-id="checkout-first-name"
            placeholder="First Name"
            required
          />
        </label>
        <br />
        <label>
          <input
            placeholder="Last name"
            name="lastName"
            data-test-id="checkout-last-name"
            required
          />
        </label>
        <br />
        <label>
          <input
            name="email"
            placeholder="E-mail"
            data-test-id="checkout-email"
            type="email"
            required
          />
        </label>
        <br />
        <label>
          <input
            name="address"
            placeholder="Adress"
            data-test-id="checkout-address"
            required
          />
          <br />
        </label>
        <label>
          <input
            name="city"
            placeholder="City"
            data-test-id="checkout-city"
            required
          />
        </label>
        <br />
        <label>
          <input
            placeholder="Postal Code"
            name="postalCode"
            data-test-id="checkout-postal-code"
            required
          />
        </label>
        <br />
        <label>
          <input
            name="country"
            placeholder="Country"
            data-test-id="checkout-country"
            required
          />
        </label>
        <br />
        <label>
          <input
            name="creditCard"
            placeholder="Credit Card"
            data-test-id="checkout-credit-card"
            required
          />
        </label>
        <br />
        <label>
          <input
            name="expirationDate"
            placeholder="Expiration Date"
            data-test-id="checkout-expiration-date"
            required
          />
        </label>
        <br />
        <label>
          <input
            name="securityCode"
            placeholder="Security Code"
            data-test-id="checkout-security-code"
            required
          />
        </label>
        <p>{props.total}</p>
      </div>
      <button data-test-id="checkout-confirm-order" className={styles.button}>
        Confirm Order
      </button>
    </form>
  );
}
