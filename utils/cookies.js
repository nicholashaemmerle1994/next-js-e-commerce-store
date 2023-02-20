import Cookies from 'js-cookie';

// more robust way to get items from cookies without parsing all the time
export function getParsedCookie(key) {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue); // Type should be a string
  } catch (err) {
    return undefined;
  }
}

// more robust way to set items to set the cookie without stringify all the time
export function setStringifiedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}

export function deleteCookie(key) {
  Cookies.remove(key);
}

export function readStringifyCookie(value) {
  return JSON.stringify(value);
}

export function setOrAddToCookie(key, value) {
  const productInCookies = getParsedCookie(key);

  if (!productInCookies) {
    setStringifiedCookie(key, [{ id: value.id, amount: value.amount }]);
    return;
  }

  const foundCoffee = productInCookies.find((coffeeInCookie) => {
    return coffeeInCookie.id === value.id;
  });

  if (foundCoffee) {
    foundCoffee.amount += value.amount;
  } else {
    productInCookies.push({
      id: value.id,
      amount: value.amount,
    });
  }

  setStringifiedCookie(key, productInCookies);
}
