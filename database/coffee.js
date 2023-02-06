import { cache } from 'react';
import { sql } from './connect';

// Get all animals
export const getCoffeeProducts = cache(async () => {
  const coffees = await sql`SELECT * FROM coffee;`;
  return coffees;
});

// Get single animal

export const getCoffeeProduct = cache(async (id) => {
  const coffee = await sql`SELECT * FROM coffee WHERE id = ${id}`;
  return coffee[0];
});
