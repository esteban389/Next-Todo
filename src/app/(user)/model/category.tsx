import {
  timestamp,
  pgEnum,
  serial,
  text,
  pgTable,
  integer,
} from "drizzle-orm/pg-core";
import { user } from "./user";
export const category = pgTable("category", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  user_id: integer("user_id")
    .references(() => user.id)
    .notNull(),
  created_at: timestamp("created_at").notNull(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
  deleted_at: timestamp("deleted_at"),
});
