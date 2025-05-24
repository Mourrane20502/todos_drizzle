import { boolean, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  isCompleted: boolean("is_completed").notNull().default(false),
});
