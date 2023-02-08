import { getSingleProduct } from '@/database/products';
import Equipment from './Equipment';

export default async function EquipmentPage({ params }) {
  console.log(params);
  const singleEquipment = await getSingleProduct(params.equipmentId);

  return <Equipment equipment={singleEquipment} />;
}
