import { config } from 'dotenv-safe';
import postgres from 'postgres';

// This loads all environment variables from a .env file
// for all code after this line
if (!process.env.FLY_IO) config();

export const sql = postgres({
  transform: { ...postgres.camel, undefined: null },
});
