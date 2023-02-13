import { getSingleProduct } from '@/database/products';
import { notFound } from 'next/navigation';
import Coffee from './Coffee';

// we add this only if we have no dynamic function as cookies or headers
export const dynamic = 'force-dynamic';

export default async function CoffeeProductPage({ params }) {
  const singleCoffee = await getSingleProduct(params.coffeeId);
  if (!singleCoffee) {
    notFound();
  }
  return <Coffee coffee={singleCoffee} />;
}
