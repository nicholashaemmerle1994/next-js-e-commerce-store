export default function totalSum(array) {
  let total = 0;
  array.forEach((item) => {
    total += item.price * item.amount;
  });
  return total;
}
