import { Link, useLocation } from "react-router-dom";
import { UserAvatar } from "../ui";

const navItems = [
  { to: "/", label: "Dashboard", index: "01", exact: true },
  { to: "/games", label: "Partidos", index: "02" },
  { to: "/features", label: "Métricas", index: "03" },
  { to: "/teams", label: "Equipos", index: "04" },
];

export default function AppHeader() {
  const { pathname } = useLocation();

  const isActive = (to: string, exact?: boolean) =>
    exact ? pathname === to : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-20 border-b border-surface-border bg-surface/90 backdrop-blur-md">
      <div className="border-b border-surface-border/60 px-gutter py-1.5">
        <p className="mx-auto max-w-6xl font-mono text-[9px] uppercase tracking-[0.4em] text-content-muted">
          Graceland Analytics · Solo métricas de equipo
        </p>
      </div>

      <div className="mx-auto flex max-w-6xl items-stretch gap-6 px-gutter py-4">
        <Link to="/" className="group flex shrink-0 flex-col justify-center border-r border-surface-border pr-6">
          <span className="font-brand text-xl font-extrabold leading-none tracking-tight text-content-primary">
            Graceland
          </span>
          <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.35em] text-graceland">
            Univ. Football
          </span>
        </Link>

        <nav className="hidden flex-1 items-end gap-1 sm:flex">
          {navItems.map((item) => {
            const active = isActive(item.to, item.exact);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`group flex flex-col px-4 py-1 transition-colors ${
                  active ? "bg-surface-overlay" : "hover:bg-surface-overlay/50"
                }`}
              >
                <span
                  className={`font-mono text-[9px] tracking-[0.3em] ${
                    active ? "text-graceland" : "text-content-muted"
                  }`}
                >
                  {item.index}
                </span>
                <span
                  className={`mt-1 font-brand text-sm font-semibold uppercase tracking-wide ${
                    active ? "text-content-primary" : "text-content-secondary group-hover:text-content-primary"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <nav className="flex gap-2 sm:hidden">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`font-mono text-[9px] uppercase tracking-widest ${
                  isActive(item.to, item.exact) ? "text-graceland" : "text-content-muted"
                }`}
              >
                {item.index}
              </Link>
            ))}
          </nav>
          <UserAvatar initials="AM" />
        </div>
      </div>
    </header>
  );
}
