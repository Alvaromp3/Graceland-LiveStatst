import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/games", label: "Games" },
  { to: "/players", label: "Players" },
  { to: "/teams", label: "Teams" },
];

export default function NavBar() {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-900/80">
      <div className="mx-auto flex max-w-6xl gap-6 px-6 py-4 text-sm">
        <span className="font-semibold tracking-wide">Graceland Analytics</span>
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="text-zinc-400 hover:text-zinc-100">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
