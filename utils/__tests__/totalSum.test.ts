import totalSum from '../totalSum';

type CartItem = {
  price: number;
  amount: number;
}[];

test('totalSum', () => {
  const cartItem: CartItem = [
    { price: 10, amount: 2 },
    { price: 20, amount: 3 },
    { price: 30, amount: 4 },
  ];
  expect(totalSum(cartItem)).toBe(200);
});
