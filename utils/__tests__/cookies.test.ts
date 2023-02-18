import {
  deleteCookie,
  getParsedCookie,
  readStringifyCookie,
  setStringifiedCookie,
} from '../cookies';

// The goal
test('stringify cookies vale', () => {
  expect(readStringifyCookie([{ id: 1, amount: 5 }])).toBe(
    '[{"id":1,"amount":5}]',
  );
});

test('set, get and delete cookies', () => {
  // Just a cookie, so we dont have to create a new one every time
  const cookie = { key: 'cart', value: [{ id: 1, amount: 5 }] };

  // First we get the cookie and check if it is undefined
  expect(getParsedCookie(cookie.key)).toBeUndefined();

  // Then we set the cookie
  expect(() => setStringifiedCookie(cookie.key, cookie.value)).not.toThrow();

  // We use strict equal because we want to check if the value is the same as the cookie vaiable
  expect(getParsedCookie(cookie.key)).toStrictEqual(cookie.value);

  // Best practice is to delete the cookie after the test to bring the system back to the original state
  expect(deleteCookie(cookie.key)).toBeUndefined();
  expect(getParsedCookie(cookie.key)).toBeUndefined();
});
