import {
  timestamp,
  serial,
  text,
  pgTable,
  integer,
  boolean,
} from "drizzle-orm/pg-core";
import { category } from "../../(user)/model/category";
export const task = pgTable("task", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  status: boolean("status").notNull().default(false),
  due_date: timestamp("due_date").notNull(),
  category_id: integer("category_id").references(() => category.id),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at"),
});
