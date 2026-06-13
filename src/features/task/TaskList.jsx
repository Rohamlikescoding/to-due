import { useState } from "react";
import Button from "../../ui/Button";

const exampleTask = [
  {
    emoji: "💟",
    name: "Task Name",
    dits: "Task describe",
    id: crypto.randomUUID(),
    progress: undefined,
  },
  {
    emoji: "💌",
    name: "Task Name",
    dits: "Task describe",
    id: crypto.randomUUID(),
    progress: undefined,
  },
  {
    emoji: "",
    name: "Task Name",
    dits: "Task describe",
    id: crypto.randomUUID(),
    progress: undefined,
  },
];

function TaskList() {
  const [tasks, setTasks] = useState(exampleTask);

  if (!tasks.length)
    return (
      <div className="my-20 mx-auto text-3xl">Create your first task!</div>
    );

  return tasks.map((task) => {
    return (
      <div
        className={`flex w-1vw p-4 justify-between border-2 border-sky-500/10 rounded-md  m-2  ${task.progress ? "bg-sky-900/40 opacity-50 line-through" : "bg-sky-100"}`}
        key={task.id}
      >
        <section className="flex">
          <span
            //Emoji
            className="m-1 text-3xl border-2 bg-sky-300/30 border-sky-500/10 rounded-full"
          >
            {task.emoji ? task.emoji : "🌐"}
          </span>
          <div className="pl-2">
            <p className="font-semibold">{task.name}</p>
            <p className="font-light hover:font-normal duration-200 ease-in-out text-wrap">
              {task.dits}
            </p>
          </div>
        </section>
        <div>
          <Button className=" ml-1 pl-1 leading-loose text-2xl border-sky-500/10">
            ⏰
          </Button>
          <Button
            className=" ml-1 pl-1 leading-loose text-2xl border-sky-500/10"
            onClick={() =>
              setTasks((prev) =>
                prev.map((t) =>
                  t.id === task.id ? { ...t, progress: true } : t,
                ),
              )
            }
          >
            ✔
          </Button>
          <Button
            className=" ml-1 pl-1 leading-loose text-2xl border-sky-500/10"
            onClick={() =>
              setTasks((prev) => prev.filter((t) => t.id !== task.id))
            }
          >
            ❌
          </Button>
        </div>
      </div>
    );
  });
}

export default TaskList;
