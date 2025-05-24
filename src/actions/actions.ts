"use server";

import { db } from "@/drizzle/db";
import { todos } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const addTodo = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const isCompleted = formData.get("checkbox") === "on" ? true : false;
  await db.insert(todos).values({
    title,
    isCompleted,
  });
  revalidatePath("/");
};

export const deleteTodo = async (id: string) => {
  await db.delete(todos).where(eq(todos.id, id));
  revalidatePath("/");
};

export const clearTodos = async () => {
  await db.delete(todos);
  revalidatePath("/");
};

export const updateTodo = async (
  id: string,
  data: { title?: string; isCompleted?: boolean }
) => {
  await db.update(todos).set(data).where(eq(todos.id, id));
  revalidatePath("/");
};
