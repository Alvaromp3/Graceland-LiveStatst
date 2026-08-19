import { Link, useParams, useSearchParams } from "react-router-dom";
import { LiveIndicator } from "../../../../components/ui";
import {
  mockFinishedGame,
  mockHalftimeGame,
  mockLiveGame,
} from "../../../../mocks/liveGame";
import ConnectionBanner from "./ConnectionBanner";
import KeyStatsGrid from "./KeyStatsGrid";
import LiveEmptyState from "./LiveEmptyState";
import LiveSkeleton from "./LiveSkeleton";
import Scoreboard from "./Scoreboard";

type DemoState = "default" | "loading" | "empty" | "error" | "halftime" | "finished";

function resolveDemoState(param: string | null): DemoState {
  if (
    param === "loading" ||
    param === "empty" ||
    param === "error" ||
    param === "halftime" ||
    param === "finished"
  ) {
    return param;
  }
  return "default";
}

export default function GameLivePage() {
  const { gameId = "" } = useParams();
  const [searchParams] = useSearchParams();
  const demo = resolveDemoState(searchParams.get("demo"));

  if (demo === "loading") {
    return <LiveSkeleton />;
  }

  if (demo === "empty") {
    return (
      <div className="space-y-section">
        <LiveMatchHeader gameId={gameId} phase="live" minute={0} />
        <LiveEmptyState />
      </div>
    );
  }

  const game =
    demo === "halftime"
      ? mockHalftimeGame
      : demo === "finished"
        ? mockFinishedGame
        : mockLiveGame;

  const isStale = demo === "error";

  return (
    <div className="space-y-section pb-8">
      {isStale && <ConnectionBanner lastUpdated={game.updatedAt} />}

      <LiveMatchHeader
        gameId={gameId}
        phase={game.phase}
        minute={game.minute}
        isStale={isStale}
      />

      <Scoreboard game={game} />
      <KeyStatsGrid game={game} />

      {!isStale && (
        <p className="text-center text-[10px] uppercase tracking-widest text-content-muted">
          Actualizado {game.updatedAt}
          {game.phase === "live" && " · delay ~30s"}
        </p>
      )}

      <DemoHint />
    </div>
  );
}

type LiveMatchHeaderProps = {
  gameId: string;
  phase: "live" | "halftime" | "finished";
  minute: number;
  isStale?: boolean;
};

function LiveMatchHeader({ gameId, phase, minute, isStale }: LiveMatchHeaderProps) {
  return (
    <header className="space-y-3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-widest text-content-muted">
            Partido · {gameId}
          </p>
          <LiveIndicator phase={phase} minute={minute} className="mt-2" />
        </div>

        <nav className="flex shrink-0 gap-2 text-xs">
          <TabLink to={`/games/${gameId}/live`} active>
            Live
          </TabLink>
          <TabLink to={`/games/${gameId}/tactical`}>Táctico</TabLink>
          <TabLink to={`/games/${gameId}/review`}>Review</TabLink>
        </nav>
      </div>

      {isStale && (
        <p className="text-xs text-content-muted">
          Modo congelado — reconectando…
        </p>
      )}
    </header>
  );
}

type TabLinkProps = {
  to: string;
  active?: boolean;
  children: React.ReactNode;
};

function TabLink({ to, active, children }: TabLinkProps) {
  return (
    <Link
      to={to}
      className={`rounded-md px-2.5 py-1 font-medium transition-colors ${
        active
          ? "bg-graceland/15 text-graceland"
          : "text-content-muted hover:text-content-primary"
      }`}
    >
      {children}
    </Link>
  );
}

function DemoHint() {
  return (
    <p className="border-t border-surface-border pt-4 text-center text-[10px] text-content-muted">
      Demo UI: añade{" "}
      <code className="rounded bg-surface-overlay px-1 py-0.5">?demo=loading|empty|error|halftime|finished</code>
    </p>
  );
}
