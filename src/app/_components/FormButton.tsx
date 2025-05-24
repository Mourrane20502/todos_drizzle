"use client";
import React from "react";
import { useFormStatus } from "react-dom";

export default function FormButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition"
    >
      {pending ? "Adding..." : "Add Todo"}
    </button>
  );
}
