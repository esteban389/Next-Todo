import { serial, text, pgTable, timestamp } from "drizzle-orm/pg-core";
export const user = pgTable("user", {
  id: serial("user_id").primaryKey(),
  name: text("user_name").notNull(),
  email: text("user_email").notNull().unique(),
  password: text("user_password").notNull(),
  created_at: timestamp("user_created_at").notNull(),
  deleted_at: timestamp("user_deleted_at").notNull().defaultNow(),
  updated_at: timestamp("user_updated_at"),
});
