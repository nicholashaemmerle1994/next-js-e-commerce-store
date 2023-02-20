import {
  deleteCookie,
  getParsedCookie,
  setOrAddToCookie,
  setStringifiedCookie,
} from '../cookies';

test('adding and deleting info to cookie', () => {
  const cookie = {
    key: 'cart',
    value: [{ id: 1, amount: 2 }],
  };
  const newProduct = { id: 3, amount: 2 };

  expect(getParsedCookie(cookie.key)).toBe(undefined);
  expect(() => setStringifiedCookie(cookie.key, newProduct)).not.toThrow();
  expect(getParsedCookie(cookie.key)).toStrictEqual(newProduct);
  expect(deleteCookie(cookie.key)).toBe(undefined);
  expect(getParsedCookie(cookie.key)).toBe(undefined);
  expect(() => setStringifiedCookie(cookie.key, newProduct)).not.toThrow();
  expect(deleteCookie(cookie.key)).toBe(undefined);
});

test('update item quantity in cart', () => {
  const existingProduct = { id: 1, amount: 2 };
  const updatedProduct = { id: 1, amount: 3 };

  // Set up cookie with existing product using setOrAddToCookie
  setOrAddToCookie('cart', existingProduct);

  // Call function to update product quantity in cookie
  setOrAddToCookie('cart', updatedProduct);

  // Check that product was updated correctly in cookie
  expect(getParsedCookie('cart')).toEqual([{ id: 1, amount: 5 }]);
});
