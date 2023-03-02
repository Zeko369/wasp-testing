import { useState } from "react";
import getTasks from "@wasp/queries/getTasks";
import logout from "@wasp/auth/logout";
import createTask from "@wasp/actions/createTask";
import updateTask from "@wasp/actions/updateTask";

import { useQuery } from "@wasp/queries";

const Form = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await createTask(Object.fromEntries(formData.entries()));

    // @ts-ignore
    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="description" required />
      <button type="submit">Add task</button>
    </form>
  );
};

const Task = ({ task }: any) => {
  const [isFetching, setIsFetching] = useState(false);
  const onCheck = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setIsFetching(true);
      await updateTask({ id: task.id, isDone: e.target.checked });
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <li>
      <input
        type="checkbox"
        id={`task-${task.id}`}
        defaultChecked={task.isDone}
        onChange={onCheck}
        disabled={isFetching}
      />

      {task.description}
    </li>
  );
};

const MainPage = () => {
  const {
    data: tasks,
    isLoading,
    error,
  } = useQuery<unknown, { id: number; description: string; isDone: boolean }[]>(getTasks);

  if (isLoading) return <div>Loading...</div>;
  if (error || !tasks) return <div>Error: {(error as any)?.message || String(error)}</div>;

  console.log(tasks);

  return (
    <div>
      <button onClick={logout}> Logout </button>

      <h1>Tasks</h1>
      <Form />

      <ul>
        {tasks.length === 0 && <li>No tasks yet.</li>}

        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
