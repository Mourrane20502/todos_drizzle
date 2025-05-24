"use client";
import { deleteTodo } from "@/actions/actions";
import React from "react";

export default function DeleteButton({ id }: { id: string }) {
  return (
    <button
      onClick={() => deleteTodo(id)}
      className="bg-red-500 text-white px-7 py-2 rounded-lg"
    >
      Delete
    </button>
  );
}
