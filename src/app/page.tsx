import { db } from "@/drizzle/db";
import ClearButton from "./_components/ClearButton";
import DeleteButton from "./_components/DeleteButton";
import Form from "./_components/Form";

export default async function Home() {
  const todos = await db.query.todos.findMany();

  return (
    <div className="flex relative items-center justify-center min-h-screen flex-col gap-6 p-6">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
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
