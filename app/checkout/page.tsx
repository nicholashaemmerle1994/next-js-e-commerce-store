export default function CheckoutPage() {
  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          data-test-id="checkout-first-name"
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          id="lastName"
          data-test-id="checkout-last-name"
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          data-test-id="checkout-email"
          type="email"
        />
        <br />
        <label htmlFor="address">Address</label>
        <input name="address" id="address" data-test-id="checkout-address" />
        <br />
        <label htmlFor="city">City</label>
        <input name="city" id="city" data-test-id="checkout-city" />
        <br />
        <label htmlFor="postalCode">Postal Code</label>
        <input
          name="postalCode"
          id="postalCode"
          data-test-id="checkout-postal-code"
        />
        <br />
        <label htmlFor="country">Country</label>
        <input name="country" id="country" data-test-id="checkout-country" />
        <br />
        <label htmlFor="creditCard">Credit Card</label>
        <input
          name="creditCard"
          id="creditCard"
          data-test-id="checkout-credit-card"
        />
        <br />
        <label htmlFor="expirationDate">Expiration Date</label>
        <input
          name="expirationDate"
          id="expirationDate"
          data-test-id="checkout-expiration-date"
        />
        <br />
        <label htmlFor="securityCode">Security Code</label>
        <input name="securityCode" id="securityCode" />
      </div>
      <button data-test-id="checkout-confirm-order">Confirm Order</button>
    </form>
  );
}
