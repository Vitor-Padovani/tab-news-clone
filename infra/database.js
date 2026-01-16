import { Pool } from "pg";

const globalForDb = globalThis;

const pool =
  globalForDb.pool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.pool = pool;
}

async function query(queryObject) {
  const result = await pool.query(queryObject);
  return result;
}

export default {
  query,
};
