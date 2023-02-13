import { getSingleProduct } from '@/database/products';
import { notFound } from 'next/navigation';
import Equipment from './Equipment';

export default async function EquipmentPage({ params }) {
  console.log(params);
  const singleEquipment = await getSingleProduct(params.equipmentId);

  if (!singleEquipment) {
    // throw new Error('this action is not allowed with Error id: 213123123');
    notFound();
  }

  return <Equipment equipment={singleEquipment} />;
}
