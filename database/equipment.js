import { cache } from 'react';
import { sql } from './connect';

// Get all animals
export const getEquipments = cache(async () => {
  const equipments = await sql`SELECT * FROM equipment;`;
  return equipments;
});

// Get single animal

export const getEquipment = cache(async (id) => {
  const equipment = await sql`SELECT * FROM equipment WHERE id = ${id}`;
  return equipment[0];
});

// export const equipment = [
//   {
//     id: 1,
//     siteName: 'imsbasket',
//     name: 'Ims Basket',
//     price: 1990,
//     img: '/equipmentImages/imssieb.png',
//     shortDescription: 'Stainless steel, best extraction ',
//     longDescription:
//       'The stainless steel basket for a perfect extraction and easy cleaning! We recommend the basket for 16-18g of coffee and anyone who wants a really creamy extraction.',
//   },
//   {
//     id: 2,
//     siteName: 'normcoretamper',
//     name: 'Normcore Tamper',
//     price: 2999,
//     img: '/equipmentImages/normcoretamper.png',
//     shortDescription: 'Spring loaded',
//     longDescription:
//       'Level Tamping - The ingenious design of leveling plate ensures your tamping level every time by resting on top of the filter basket as you press down on ground coffee. Consistent Pressure - The amount of pressure you apply is simply controlled by a pre-calibrated spring inside the tamper itself. Moreover, it comes with 3 interchangeable springs to suit your preference.',
//   },
//   {
//     id: 3,
//     siteName: 'normcoreleveler',
//     name: 'Normcore Distributer Tool',
//     price: 1990,
//     img: '/equipmentImages/leveler.png',
//     shortDescription: 'Even Distribution',
//     longDescription:
//       'Improve your tamping and extractions when coffee grounds are distributed, therefore increased yield and better-tasting espresso. This tool offers a level tamping surface which makes tamping become easier and more consistent.',
//   },
//   {
//     id: 4,
//     siteName: 'portafilter',
//     name: 'Bottomless Portafilter',
//     price: 7999,
//     img: '/equipmentImages/portafiler.png',
//     shortDescription: 'Watch the extraction process',
//     longDescription:
//       'A bottomless portafilter is an important piece of equipment that aids in diagnosing espresso extraction issues. The spouts are removed, the basket is exposed, allowing you to watch the entire extraction process. The Bottomless Portafilter sometimes referred to as a Naked Portafilter has become an essential addition to any Barista',
//   },
// ];
