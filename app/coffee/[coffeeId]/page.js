import { getCoffeeProduct } from '@/database/coffee';
import Coffee from './Coffee';

export default async function CoffeeProductPage({ params }) {
  const singleCoffee = await getCoffeeProduct(params.coffeeId);

  console.log(singleCoffee.id);
  return <Coffee coffee={singleCoffee} />;
}
