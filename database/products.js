import { cache } from 'react';
import { sql } from './connect';

// Get all coffee
export const getAllProductsCoffee = cache(async () => {
  const coffees = await sql`SELECT * FROM products WHERE type = 'coffee'`;
  return coffees;
});

export const getAllProductsEquipment = cache(async () => {
  const coffees = await sql`SELECT * FROM products WHERE type = 'equipment'`;
  return coffees;
});

// Get single coffee

export const getSingleProduct = cache(async (id) => {
  const coffee = await sql`SELECT * FROM products WHERE id = ${id}`;
  return coffee[0];
});
