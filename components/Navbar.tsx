
export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost lowercase text-lg">
            Janny Zhao
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 lowercase">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
