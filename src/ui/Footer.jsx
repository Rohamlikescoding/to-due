function Footer() {
  return (
    <footer className="flex justify-between text-sky-200 bg-sky-900/90 py-5 px-3 max-w-screen sticky bottom-0">
      <div className="">
        <input
          type="text"
          placeholder="search ..."
          className="rounded-l-full pl-2 bg-sky-50 w-2/3 md:w-5/6"
        ></input>
        <button className="bg-sky-200 rounded-r-full pl-1 pr-2">❓</button>
      </div>

      <p> created with ❤ - 2026</p>
    </footer>
  );
}

export default Footer;
