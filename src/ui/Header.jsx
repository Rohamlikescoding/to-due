import Button from "./Button";

const headerClass = "bg-sky-200/35 rounded-md p-1 shadow-md flex";

function Header() {
  return (
    <header className="bg-sky-800/65  p-4 flex w-screen justify-between border-sky-300/30 border-b-2 overflow-hidden">
      <div className={headerClass}>TO DUE 🔥🧯</div>

      <div className={`${headerClass} justify-between `}>
        <span className="px-2">Remaining: %%</span>
        <Button className="px-2 border-sky-800/10">➕</Button>
        <Button className="px-2 border-sky-800/10">🧹</Button>
      </div>

      <div className={headerClass}>user img</div>
    </header>
  );
}

export default Header;
