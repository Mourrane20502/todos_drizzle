import { clearTodos } from "@/actions/actions";
import React from "react";

export default function ClearButton() {
  return (
    <button
      onClick={clearTodos}
      className="bg-black px-7 py-3 text-white rounded-md"
    >
      Clear Todos
    </button>
  );
}
