import styles from './page.module.scss';

export default function CheckoutPage() {
  return (
    <div className={styles.wholediv}>
      <h1>Checkout</h1>
      <div className={styles.div}>
        <form>
          <div>
            <label>
              <input
                name="firstName"
                data-test-id="checkout-first-name"
                placeholder="First Name"
              />
            </label>
            <br />
            <label>
              <input
                placeholder="Last name"
                name="lastName"
                data-test-id="checkout-last-name"
              />
            </label>
            <br />
            <label>
              <input
                name="email"
                placeholder="E-mail"
                data-test-id="checkout-email"
                type="email"
              />
            </label>
            <br />
            <label>
              <input
                name="address"
                placeholder="Adress"
                data-test-id="checkout-address"
              />
              <br />
            </label>
            <label>
              <input
                name="city"
                placeholder="City"
                data-test-id="checkout-city"
              />
            </label>
            <br />
            <label>
              <input
                placeholder="Postal Code"
                name="postalCode"
                data-test-id="checkout-postal-code"
              />
            </label>
            <br />
            <label>
              <input
                name="country"
                placeholder="Country"
                data-test-id="checkout-country"
              />
            </label>
            <br />
            <label>
              <input
                name="creditCard"
                placeholder="Credit Card"
                data-test-id="checkout-credit-card"
              />
            </label>
            <br />
            <label>
              <input
                name="expirationDate"
                placeholder="Expiration Date"
                data-test-id="checkout-expiration-date"
              />
            </label>
            <br />
            <label>
              <input
                name="securityCode"
                placeholder="Security Code"
                data-test-id="checkout-security-code"
              />
            </label>

            <button
              data-test-id="checkout-confirm-order"
              className={styles.button}
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
