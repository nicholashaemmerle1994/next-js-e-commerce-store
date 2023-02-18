import { getSingleProduct } from '@/database/products';
import { notFound } from 'next/navigation';
import { rootNotFoundMetadata } from '../../not-found';
import Equipment from './Equipment';

// we add this only if we have no dynamic function as cookies or headers
export const dynamic = 'force-dynamic';

export async function generateMetadata(props) {
  const singleProduct = await getSingleProduct(props.params.equipmentId);

  if (typeof singleProduct === 'undefined') {
    return rootNotFoundMetadata;
  }

  return {
    title: singleProduct.name,
    description: `Product page for ${singleProduct.name}`,
  };
}

export default async function EquipmentPage({ params }) {
  const singleEquipment = await getSingleProduct(params.equipmentId);

  if (typeof singleEquipment === 'undefined') {
    // throw new Error('this action is not allowed with Error id: 213123123');
    notFound();
  }

  return <Equipment equipment={singleEquipment} />;
}
