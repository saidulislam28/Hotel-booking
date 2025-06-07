"use client";
import { GET_TASK } from "@/services/api/endpoints";
import { del } from "@/utils/ApiCalls";

export default function TaskButton({ task }) {
  const handleDelete = async (id: number) => {
    return await del(`${GET_TASK}/${id}`);
  };

  return (
    <div className="flex items-center gap-2 border p-5 border-red-300 justify-between my-4">
      <h1>{task?.title}</h1>
      <button
        className="p-4 border"
        onClick={() => handleDelete(Number(task?.id))}
      >
        delete
      </button>
    </div>
  );
}
