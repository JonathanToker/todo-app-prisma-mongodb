"use client";
import { useSearchParams } from "next/navigation";
import { useState, FormEvent } from "react";
import { updateTodoAction } from "@/lib/actions";
interface titleDescriptionType {
  id: string;
  title: string;
  description: string;
}
const EditTodoPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const description = searchParams.get("description");
  const title = searchParams.get("title");
  const [newTitle, setNewTitle] = useState<string>(title || "");
  const [newDescription, setNewDescription] = useState<string>(
    description || ""
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (newTitle === "" || newDescription === "") {
      alert("Both fields need to be provided");
      return;
    }
    try {
      const todoData = { id: id, title: newTitle, description: newDescription };
      await updateTodoAction(todoData);
      window.location.href = "/";
    } catch (error) {
      console.log("Error updating todo: ", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex flex-col">
        <h1 className="underline text-xl">New Title:</h1>
        <input
          type="text"
          name="title"
          id="add-title"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="bg-blue-300 dark:bg-blue-900 dark:text-white text-2xl mb-2 p-1 rounded"
        />
        <h1 className="text-xl underline">New Description:</h1>
        <input
          type="text"
          name="description"
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          id="add-description"
          className="bg-blue-300 dark:bg-blue-900 dark:text-white text-2xl mb-2 p-1 rounded"
        />
        <input
          type="submit"
          value="Update"
          className="bg-green-400 dark:bg-green-800 cursor-pointer p-2 mt-2 text-xl font-bold"
        />
      </form>
    </>
  );
};

export default EditTodoPage;
