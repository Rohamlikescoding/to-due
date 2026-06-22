import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import user from "../features/user/user";
import { logout } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { clearTasks, sortTasks } from "../features/task/taskSlice";
import { memo } from "react";

const headerClass =
  "bg-sky-200/35 rounded-md  py-3 px-1  md:px-2 shadow-md flex max-h-full ";

const Header = memo(function Header({ onAddClick }) {
  const { tasks } = useSelector((store) => store.task);
  const dispatch = useDispatch();
  async function handleDelete() {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete completed tasks?",
    );
    if (!userConfirmed) return;
    try {
      tasks.map(async (item) => {
        if (item.progress) {
          dispatch(clearTasks(item.id));
        }
      });
    } catch (e) {
      console.log("Error deleting tasks:", e);
    } finally {
      console.log("finished");
    }
  }

  return (
    <header className=" py-2 sticky bg-sky-800/65 p-1 md:p-4 flex max-w-screen justify-between border-sky-300/30 border-b-2 overflow-hidden">
      <Link to="/" className={`${headerClass} text-xl font-bold`}>
        TO DUE 🔥🧯
      </Link>

      <div className={`${headerClass} justify-between `}>
        <Button
          className="px-1 md:px-2 border-transparent"
          onClick={() => dispatch(sortTasks())}
        >
          ⬇
        </Button>
        <Button className="px-1 md:px-2 border-sky-800/10" onClick={onAddClick}>
          ➕
        </Button>
        <Button
          className="px-1 md:px-2 border-sky-800/10"
          onClick={handleDelete}
        >
          🧹
        </Button>
      </div>
      <div className="group relative">
        <img
          title="click to logout"
          className="h-12 w-12 rounded-full border-solid border-2 border-sky-900 cursor-pointer"
          src={user.avatar}
          alt="avatar"
          onClick={() => dispatch(logout())}
        ></img>
      </div>
    </header>
  );
});
export default Header;
