import { cache } from 'react';
import { sql } from './connect';

// Get all coffee
export const getCoffeeProducts = cache(async () => {
  const coffees = await sql`SELECT * FROM coffee;`;
  return coffees;
});

// Get single coffee

export const getCoffeeProduct = cache(async (id) => {
  const coffee = await sql`SELECT * FROM coffee WHERE id = ${id}`;
  return coffee[0];
});
