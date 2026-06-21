function Loader() {
  return (
    <div className="animate-pulse">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="flex w-full p-4 justify-between border-2 border-sky-500/10 rounded-md m-2 bg-sky-100/50"
        >
          {/* left side */}
          <section className="flex">
            {/* emoji circle */}
            <div className="m-1 w-10 h-10 rounded-full bg-sky-300/40 border-2 border-sky-500/10"></div>

            {/* text */}
            <div className="pl-2 space-y-2">
              <div className="h-4 w-32 bg-sky-300/40 rounded"></div>
              <div className="h-3 w-60 bg-sky-300/30 rounded"></div>
              <div className="h-3 w-44 bg-sky-300/30 rounded"></div>
            </div>
          </section>

          {/* buttons */}
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-md bg-sky-300/40"></div>
            <div className="w-10 h-10 rounded-md bg-sky-300/40"></div>
            <div className="w-10 h-10 rounded-md bg-sky-300/40"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Loader;
