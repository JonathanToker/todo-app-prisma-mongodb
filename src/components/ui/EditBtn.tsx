"use client";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
interface TodoProps {
  id: string;
  title: string;
  description: string;
}
const EditBtn = ({ id, title, description }: TodoProps) => {
  return (
    <Link
      href={{
        pathname: "/EditTodo",
        query: {
          id: id,
          title: title,
          description: description,
        },
      }}
      className="cursor-pointer"
    >
      <FaEdit size="2rem" />
    </Link>
  );
};

export default EditBtn;
