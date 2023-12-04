"use client";
import Link from "next/link";
import { BsTrash } from "react-icons/bs";
import { removeTodoAction } from "@/lib/actions";
interface idType {
  id: string;
}
const RemoveBtn = ({ id }: idType) => {
  return (
    <>
      <button className="cursor-pointer" onClick={() => removeTodoAction(id)}>
        <BsTrash size="2rem" color="red" />
      </button>
    </>
  );
};

export default RemoveBtn;
