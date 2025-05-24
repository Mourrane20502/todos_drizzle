import { db } from "@/drizzle/db";
import ClearButton from "./_components/ClearButton";
import DeleteButton from "./_components/DeleteButton";
import Form from "./_components/Form";

export default async function Home() {
  const todos = await db.query.todos.findMany();

  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-6 bg-gray-50 p-6">
      <Form />
      {todos.length === 0 ? (
        <div className="text-center text-gray-500">
          <h1 className="text-2xl font-bold">No Todos Found</h1>
          <p className="mt-2">Please add a todo to get started.</p>
        </div>
      ) : (
        <ul className="w-full max-w-md bg-white rounded-md shadow-md p-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between py-2 border-b last:border-b-0"
            >
              <span className="text-xl font-bold">{todo.title}</span>
              {todo.isCompleted ? (
                <span className="text-green-600 font-semibold">✔️ Done</span>
              ) : (
                <span className="text-red-600 font-semibold">❌ Pending</span>
              )}
              <DeleteButton id={todo.id} />
            </li>
          ))}
        </ul>
      )}

      {todos.length && <ClearButton />}
    </div>
  );
}
