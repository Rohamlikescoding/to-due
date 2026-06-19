import TaskList from "../features/task/TaskList";

function MainContent({ setTasks, tasks }) {
  return (
    <main className=" max-h-max overflow-y-auto">
      <TaskList setTasks={setTasks} tasks={tasks} />
    </main>
  );
}

export default MainContent;
