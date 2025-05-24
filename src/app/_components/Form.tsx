import { addTodo } from "@/actions/actions";
import React from "react";
import FormButton from "./FormButton";

export default function Form() {
  return (
    <form
      action={addTodo}
      className="max-w-md border-black/25 border rounded-lg mx-auto flex flex-col gap-4 p-4"
    >
      <h1 className="text-center text-2xl font-bold">Todos Page</h1>

      <input
        type="text"
        placeholder="Enter todo title"
        name="title"
        className="block px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <label className="flex items-center gap-2">
        <input type="checkbox" className="w-5 h-5" name="checkbox" />
        <span>Complete</span>
      </label>

      <FormButton />
    </form>
  );
}
