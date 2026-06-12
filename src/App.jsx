import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const headerClass = "bg-sky-200/35 rounded-md p-1 shadow-md flex";
  const headerButtonClass = "px-2 border-l-2 border-sky-800/10 text-lg ";
  const taskButtonClass = "text-2xl leading-loose border-l-2 border-sky-500/10";
  return (
    <>
      <header className="bg-sky-800/65  p-4 flex w-screen justify-between border-sky-300/30 border-b-2">
        <div className={headerClass}>TO DUE 🔥🧯</div>

        <div className={`${headerClass} justify-between `}>
          <span className="px-2">remaining: %%</span>
          <button className={headerButtonClass}>➕</button>
          <button className={headerButtonClass}>🧹</button>
        </div>

        <div className={headerClass}>user img</div>
      </header>
      <main className=" max-h-max">
        <div
          className="flex w-1vw p-4 justify-between border-2 border-sky-500/10 rounded-md  m-2 bg-sky-100"
          // this will be task
        >
          <section className="flex">
            <span
              //Emoji
              className="m-1 text-3xl border-2 bg-sky-300/30 border-sky-500/10 rounded-full"
            >
              💟
            </span>
            <div className="pl-2">
              <p className="font-semibold">Task Name</p>
              <p className="font-light hover:font-normal duration-200 ease-in-out text-wrap">
                Task describe
              </p>
            </div>
          </section>
          <div>
            <button className={taskButtonClass}>⏰</button>
            <button className={taskButtonClass}>✔</button>
            <button className={taskButtonClass}>❌</button>
          </div>
        </div>
      </main>
      <footer className="flex justify-between text-sky-200 bg-sky-900/90 py-5 px-3 w-screen fixed bottom-0">
        <div className="">
          <input
            type="text"
            placeholder="search ..."
            className="rounded-l-full pl-2 bg-sky-50 "
          ></input>
          <button className="bg-sky-200 rounded-r-full pl-1 pr-2">❓</button>
        </div>

        <p> created with ❤ - 2026</p>
      </footer>
    </>
  );
}

export default App;
