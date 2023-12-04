import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";

interface CustomNodeJsGlobal {
  prisma: PrismaClient;
}
interface TodoType {
  id: string;
  title: string;
  description: string;
  time: Date;
}
declare const global: CustomNodeJsGlobal;

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export const ReadAllTodos = async () => {
  noStore();
  const allTodos = await prisma.todo.findMany();
  if (allTodos) {
    return allTodos as TodoType[];
  } else {
    return [] as TodoType[];
  }
};

export const AddTodo = async (title: string, description: string) => {
  noStore();
  await prisma.todo.create({
    data: {
      title,
      description,
      time: new Date(),
    },
  });
};

export const RemoveTodo = async (id: string) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
};

export const UpdateTodo = async function (
  id: string,
  title: string,
  description: string
) {
  noStore();
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      description,
    },
  });
};
