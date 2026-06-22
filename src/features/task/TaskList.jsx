import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  completeTask,
  fetchTasks,
  deleteTask,
  timerOpenTask,
  timerCounter,
  setTimer,
} from "../task/taskSlice";
import Loader from "../../ui/Loader";

function TaskList() {
  const { tasks, loading, error, searchQuery } = useSelector(
    (store) => store.task,
  );
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  function timeHandeler(e, taskId) {
    dispatch(
      setTimer({
        id: taskId,
        timer: Number(e.target.value) * 60,
      }),
    );
  }

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);

    const sec = seconds % 60;

    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      tasks.forEach((task) => {
        if (task.timer > 0) dispatch(timerCounter(task.id));
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, tasks]);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  if (loading) return <Loader />; // you already import this but never use it

  if (!tasks.length)
    return (
      <div className="my-20 mx-auto text-3xl">Create your first task!</div>
    );

  if (!filteredTasks.length)
    return <div className="my-20 mx-auto text-3xl">No tasks found!</div>;

  return filteredTasks.map((task) => {
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
          {task.timerOpen && !task.progress ? (
            <input
              type="number"
              onChange={(e) => timeHandeler(e, task.id)}
            ></input>
          ) : null}

          <Button
            disabled={task.progress}
            className=" ml-1 pl-1 leading-loose text-2xl border-sky-500/10"
            onClick={() => dispatch(timerOpenTask(task.id))}
          >
            {task.timer > 0 ? (
              <p>⏰ {formatTime(task.timer)}</p>
            ) : (
              <span>⏰</span>
            )}
          </Button>
          <Button
            className=" ml-1 pl-1 leading-loose text-2xl border-sky-500/10"
            disabled={loading}
            onClick={() =>
              dispatch(completeTask({ id: task.id, progress: task.progress }))
            }
          >
            ✔
          </Button>
          <Button
            className=" ml-1 pl-1 leading-loose text-2xl border-sky-500/10"
            onClick={() => dispatch(deleteTask(task.id))}
          >
            ❌
          </Button>
        </div>
      </div>
    );
  });
}

export default TaskList;
