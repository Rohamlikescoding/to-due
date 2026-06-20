import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import fakeUser from "../features/user/user";
import { Link } from "react-router-dom";
import { login } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isAuthenticated = useSelector((store) => store.user.isAuthenticated);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email == fakeUser.email && password == fakeUser.password) {
      dispatch(login(fakeUser));
    } else {
      alert("please enter a correct email and password");
    }
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate],
  );

  return (
    <div className="min-h-screen  bg-gradient-to-br from-sky-300 via-sky-200 to-sky-500">
      <header>
        <Link
          to="/"
          className="backdrop-blur-sm bg-gradient-to-br from-sky-300/70 to-sky-500/70   py-3 px-1  md:px-2 shadow-md flex max-h-full text-sky-100 text-xl font-bold"
        >
          TO DUE 🔥🧯
        </Link>
      </header>

      <main className=" px-10 py-20 ">
        <form
          className="rounded-lg bg-sky-500/30 backdrop-blur-sm  px-8 py-12 w-full flex flex-col gap-8"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email address</label>
            <input
              required
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div>
            <Button
              type="submit"
              className="rounded-full border-2 p-2 text-sky-200 font-bold border-sky-700 bg-sky-900"
            >
              Login
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
