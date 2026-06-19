import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import user from "../features/user/user";
import { Link } from "react-router-dom";

// import PageNav from "../components/PageNav";
// import { useAuth } from "../contexts/FakeAuthContext";
// import styles from "./Login.module.css";

import { useEffect, useState } from "react";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  console.log(user);
  //   const { login, isAuthenticated } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    if (email == user.email && password == user.password) {
      setIsAuthenticated(true);
    } else {
      alert("please enter a correct email and password");
    }
    // if (email && password) login(email, password);
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
