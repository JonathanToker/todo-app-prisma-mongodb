"use server";
import { unstable_noStore as noStore } from "next/cache";
import { revalidatePath } from "next/cache";
import { AddTodo, RemoveTodo, UpdateTodo } from "@/lib/prisma";

export const addTodoAction = async (formData: {
  title: string;
  description: string;
}) => {
  const { title, description } = formData;
  if (description !== "" && title !== "") {
    await AddTodo(title, description);
    revalidatePath("/AddTodo");
  }
};

export const removeTodoAction = async (id: string) => {
  if (id) {
    await RemoveTodo(id);
    revalidatePath("/");
  }
};

export const updateTodoAction = async (formData: {
  id: string;
  title: string;
  description: string;
}) => {
  const { id, title, description } = formData;
  if (id !== "" && title !== "" && description !== "") {
    await UpdateTodo(id, title, description);
    revalidatePath("/EditTodo");
  }
};
