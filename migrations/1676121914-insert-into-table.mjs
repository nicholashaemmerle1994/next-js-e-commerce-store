const products = [
  {
    id: 1,
    type: 'coffee',
    site_name: 'Ameno',
    name: 'Caffe Ameno',
    price: 3000,
    img: '/productImages/CaffeAmeno.png',
    short_description: 'Chocolate, Nutty, low acidity',
    long_description:
      'Cafe Ameno originates from a small bottega in Parma. This coffee blend contains 60% Arabica and 40% Robust. The flavor can be best describe with chocolate mousse and a pistachio ice-cream in the end. This coffee is best as an espresso, but also keeps the pistachio note when you drink it as a cappuccino',
  },
  {
    id: 2,
    type: 'coffee',
    site_name: 'Diemme',
    name: 'Diemme',
    price: 2590,
    img: '/productImages/Diemme.webp',
    short_description: 'Floral notes, Hazelnut',
    long_description:
      'This beautiful coffee is 100% Arabica out of Columbia, Brasil, Tanzania and India. Due to its mild roast it is a very elegant light coffee. When you drink it as a Espresso you will see a perfect hazelnut colored crema. If combined with milk, the caramel notes gonna get even stronger and sweeter. A absolute recommendation for everyone who is looking for the perfect beginner coffee',
  },
  {
    id: 3,
    type: 'coffee',
    site_name: 'Espressoperfetto',
    name: 'Espresso Perfetto Bar Gusto',
    price: 2200,
    img: '/productImages/EspressoPerfettoBar.webp',
    short_description: 'Chocolate, Caramel, Floral',
    long_description:
      'This powerhouse is 60% Arabica and 40% Robusta. This combination makes the coffee to an absolute special taste experience. Fancier of typical north italian coffee will love this blend. Here, the mild, flowery bouquet of Arabica meets the slightly earthy, bitter Robusta, which is characterized by chocolate and caramel. Pure Italy!',
  },
  {
    id: 4,
    type: 'coffee',
    site_name: 'Kimbo',
    name: 'Kimbo Espresso Neopoletan',
    price: 3190,
    img: '/productImages/kimbo-espresso-napoletano-bohnen-1kg-front.webp',
    short_description: 'Fruity, Chocolate, Toast',
    long_description:
      'The powerful blend of the Kimbo Espresso Napoletano is made up of 80% of the finest Arabica beans and 20% of the highest quality Robusta beans. The beans are roasted according to the original Neapolitan tradition, resulting in a dark roast. You will get delicious notes of chocolate, sweet fruit and toast',
  },
  {
    id: 5,
    type: 'coffee',
    site_name: 'Passalacqua',
    name: 'Passalacqua Miscela Napoli',
    price: 4198,
    img: '/productImages/passalacqua-miscela-napoli-1kg-vorne_1.webp',
    short_description: 'Hazelnut, Caramel, Chocolate',
    long_description:
      'The  Espresso with the small American Indian in its logo is no unnderdog for italian coffee enthusiast anymore. Behind Passalacqua Miscela Napoli hides a cofee full of character. A long roasting time leads to a very low acidity and to the chocolate taste. This coffee is easy to use.',
  },
  {
    id: 6,
    type: 'equipment',
    site_name: 'imsbasket',
    name: 'Ims Basket',
    price: 1990,
    img: '/equipmentImages/imssieb.png',
    short_description: 'Stainless steel, best extraction',
    long_description:
      'The stainless steel basket for a perfect extraction and easy cleaning! We recommend the basket for 16-18g of coffee and anyone who wants a really creamy extraction.',
  },
  {
    id: 7,
    type: 'equipment',
    site_name: 'normcoretamper',
    name: 'Normcore Tamper',
    price: 2999,
    img: '/equipmentImages/normcoretamper.png',
    short_description: 'Spring loaded',
    long_description:
      'Level Tamping - The ingenious design of leveling plate ensures your tamping level every time by resting on top of the filter basket as you press down on ground coffee. Consistent Pressure - The amount of pressure you apply is simply controlled by a pre-calibrated spring inside the tamper itself. Moreover, it comes with 3 interchangeable springs to suit your preference.',
  },
  {
    id: 8,
    type: 'equipment',
    site_name: 'normcoreleveler',
    name: 'Normcore Distributer Tool',
    price: 1990,
    img: '/equipmentImages/leveler.png',
    short_description: 'Even Distribution',
    long_description:
      'Improve your tamping and extractions when coffee grounds are distributed, therefore increased yield and better-tasting espresso. This tool offers a level tamping surface which makes tamping become easier and more consistent.',
  },
  {
    id: 9,
    type: 'equipment',
    site_name: 'portafilter',
    name: 'Bottomless Portafilter',
    price: 7999,
    img: '/equipmentImages/portafiler.png',
    short_description: 'Watch the extraction process',
    long_description:
      'A bottomless portafilter is an important piece of equipment that aids in diagnosing espresso extraction issues. The spouts are removed, the basket is exposed, allowing you to watch the entire extraction process. The Bottomless Portafilter sometimes referred to as a Naked Portafilter has become an essential addition to any Barista.',
  },
];

export async function up(sql) {
  await sql`INSERT INTO products ${sql(
    products,
    'type',
    'site_name',
    'name',
    'price',
    'img',
    'short_description',
    'long_description',
  )}
`;
}

export async function down(sql) {
  for (const product of products) {
    await sql`DELETE FROM products WHERE id = ${product.id}`;
  }
}
