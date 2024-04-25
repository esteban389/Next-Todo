import type { Config } from "drizzle-kit";
export default {
  schema: "./src/app/**/model/*.tsx",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: "127.0.0.1",
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME || "tudu",
  }
} satisfies Config;