export default function Navbar() {
  return (
    <div>
      <div className="fixed navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost lowercase text-lg">Janny Zhao</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 lowercase">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
