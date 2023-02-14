import { getSingleProduct } from '@/database/products';
import { notFound } from 'next/navigation';
import { rootNotFoundMetadata } from '../../not-found';
import Coffee from './Coffee';

export async function generateMetadata(props) {
  const singleProduct = await getSingleProduct(props.params.coffeeId);
  if (typeof singleProduct === 'undefined') {
    return rootNotFoundMetadata;
  }

  return {
    title: singleProduct.name,
    description: `Product page for ${singleProduct.name}`,
  };
}

// we add this only if we have no dynamic function as cookies or headers
export const dynamic = 'force-dynamic';

export default async function CoffeeProductPage({ params }) {
  const singleCoffee = await getSingleProduct(params.coffeeId);

  if (typeof singleCoffee === 'undefined') {
    notFound();
  }
  return <Coffee coffee={singleCoffee} />;
}
