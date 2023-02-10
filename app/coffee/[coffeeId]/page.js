import { getSingleProduct } from '@/database/products';
import Coffee from './Coffee';

export default async function CoffeeProductPage({ params }) {
  const singleCoffee = await getSingleProduct(params.coffeeId);

  return <Coffee coffee={singleCoffee} />;
}
