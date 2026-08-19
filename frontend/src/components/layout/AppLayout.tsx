import { Outlet, useLocation } from "react-router-dom";
import AppHeader from "./AppHeader";

export default function AppLayout() {
  const location = useLocation();
  const isGameView =
    location.pathname.includes("/games/") && location.pathname !== "/games";

  return (
    <div className={`relative min-h-screen ${isGameView ? "bg-surface" : "pitch-bg"}`}>
      {!isGameView && <AppHeader />}
      <main
        className={`relative z-10 mx-auto px-gutter ${
          isGameView ? "max-w-lg pt-gutter" : "max-w-6xl py-section"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}
