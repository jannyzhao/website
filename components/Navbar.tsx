import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost lowercase text-lg">
            Janny Zhao
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 lowercase">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
