import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../features/task/taskSlice";

function AddForm({ onClose }) {
  const initialTask = {
    emoji: "",
    name: "",
    detail: "",
    progress: false,
    timer: 0,
    timerRunning: false,
  };
  const [task, setTask] = useState(initialTask);
  const dispatch = useDispatch();

  function handleClose(e) {
    e.preventDefault();
    onClose();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(createTask(task));

    setTask(initialTask);

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <form
        onSubmit={handleSubmit}
        className=" z-10 absolute top-32 mx-auto my-0  w-full max-w-md gap-2 rounded-xl p-3 bg-sky-900/30 backdrop-blur-sm flex flex-col"
      >
        <div className="flex  justify-end">
          <button onClick={handleClose}>✖</button>
        </div>

        <label className="font-semibold mt-1 text-sky-100">Task emoji:</label>
        <input
          required
          value={task.emoji}
          onChange={(e) => setTask({ ...task, emoji: e.target.value })}
          className="rounded-full px-1"
          type="text"
          placeholder="Enter your task Emoji ..."
        />

        <label className="font-semibold mt-1 text-sky-100">Task name:</label>
        <input
          required
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          className="rounded-full px-1"
          type="text"
          placeholder="Enter your task name ..."
        />

        <label className="font-semibold mt-1 text-sky-100">Task details:</label>
        <input
          required
          value={task.detail}
          onChange={(e) => setTask({ ...task, detail: e.target.value })}
          className="rounded-full px-1"
          type="text"
          placeholder="Enter your task detail ..."
        />

        <button
          type="submit"
          className=" rounded-full bg-sky-900 text-sky-200 mt-3 font-bold"
        >
          Add task
        </button>
      </form>
    </div>
  );
}

export default AddForm;
