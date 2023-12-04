"use client";
import { addTodoAction } from "@/lib/actions";
import { FormEvent, useState } from "react";
const AddTodoPage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const clearInputFields = () => {
    setTitle("");
    setDescription("");
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (title === "" || description === "") {
      alert("Both fields need to be provided");
      return;
    }
    try {
      const formData = { title, description };
      await addTodoAction(formData);
      clearInputFields();
    } catch (error) {
      console.log("Error adding todo: ", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex flex-col">
        <h1 className="underline text-xl">Title:</h1>
        <input
          type="text"
          name="title"
          id="add-title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-blue-300 dark:bg-blue-900 dark:text-white text-2xl mb-2 p-1 rounded"
        />
        <h1 className="text-xl underline">Description:</h1>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          id="add-description"
          className="bg-blue-300 dark:bg-blue-900 dark:text-white text-2xl mb-2 p-1 rounded"
        />
        <input
          type="submit"
          value="Save"
          className="bg-green-400 dark:bg-green-800 cursor-pointer p-2 mt-2 text-xl font-bold"
        />
      </form>
    </>
  );
};

export default AddTodoPage;
