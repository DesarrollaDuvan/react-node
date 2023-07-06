import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-zinc-700 flex justify-between px-10 py-4">
      <Link to="/" className="text-white font-bold text-lg">
        <h1>React MySQL</h1>
      </Link>
      <ul className="flex gap-x-1">
        <li>
          <Link to="/" className="bg-slate-200 px-2 py-1 rounded">Home</Link>
        </li>
        <li>
          <Link to="/new" className="bg-slate-200 px-2 py-1 rounded">Create Task</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
