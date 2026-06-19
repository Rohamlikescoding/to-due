import { useEffect, useState } from "react";
import Button from "../../ui/Button";

function TaskList({ setTasks, tasks }) {
  // const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleDelete(id) {
    setLoading(true);
    const oldTasks = [...tasks];
    try {
      await fetch(`http://localhost:8000/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (e) {
      console.log("Error deleting tasks:", e);
      setTasks(oldTasks);
    } finally {
      setLoading(false);
    }
  }

  async function handleCompleted(id) {
    setLoading(true);
    const oldTasks = [...tasks];
    const currentTask = tasks.find((task) => task.id === id);

    try {
      const res = await fetch(`http://localhost:8000/tasks/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          progress: !currentTask.progress,
        }),
      });
      if (!res.ok) throw new Error("Failed to update task");

      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, progress: !t.progress } : t)),
      );
    } catch (e) {
      console.log("Error deleting tasks:", e);
      setTasks(oldTasks);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function taskFetch() {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:8000/tasks");
        const data = await res.json();
        console.log(data);
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    }

    taskFetch();
  }, []);

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
              {task.detail}
            </p>
          </div>
        </section>
        <div>
          <Button className=" ml-1 pl-1 leading-loose text-2xl border-sky-500/10">
            ⏰
          </Button>
          <Button
            className=" ml-1 pl-1 leading-loose text-2xl border-sky-500/10"
            onClick={() => handleCompleted(task.id)}
          >
            ✔
          </Button>
          <Button
            className=" ml-1 pl-1 leading-loose text-2xl border-sky-500/10"
            onClick={() => handleDelete(task.id)}
          >
            ❌
          </Button>
        </div>
      </div>
    );
  });
}

export default TaskList;
