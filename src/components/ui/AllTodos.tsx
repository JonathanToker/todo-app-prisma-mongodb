import React from "react";
import { ReadAllTodos } from "@/lib/prisma";
import RemoveBtn from "@/components/ui/RemoveBtn";
import EditBtn from "./EditBtn";
const AllTodos = async () => {
  const allTodos = await ReadAllTodos();

  return (
    <>
      <ul className="w-full mb-10">
        {allTodos.map((item, index) => (
          <li
            key={index}
            className="w-full flex flex-col my-4 border-2 border-slate-500 p-1"
          >
            <div className="w-full flex justify-between">
              <div className="flex flex-col flex-1">
                <h1 className="text-2xl font-semibold inline tracking-wide leading-none mb-3">
                  {item.title}
                </h1>
                <p className="text-xl leading-none mb-4">{item.description}</p>
                <p>
                  Created on {item.time.toLocaleDateString()} at{" "}
                  {item.time.toLocaleTimeString()}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <EditBtn
                  id={item.id}
                  title={item.title}
                  description={item.description}
                />
                <RemoveBtn id={item.id} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllTodos;
