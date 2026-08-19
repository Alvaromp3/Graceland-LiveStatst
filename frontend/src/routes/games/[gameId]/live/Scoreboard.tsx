import { Card } from "../../../../components/ui";
import type { LiveGameMock } from "../../../../mocks/liveGame";

type ScoreboardProps = {
  game: LiveGameMock;
};

export default function Scoreboard({ game }: ScoreboardProps) {
  return (
    <Card padding="lg" className="shadow-score">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="text-right">
          <p className="truncate text-sm font-semibold uppercase tracking-wide text-graceland">
            {game.home.name}
          </p>
          <p className="text-[10px] font-medium uppercase tracking-widest text-content-muted">
            Local
          </p>
        </div>

        <div className="flex items-center gap-3 px-2">
          <span className="font-display text-score tabular-nums text-graceland">
            {game.home.score}
          </span>
          <span className="font-display text-2xl font-bold text-content-muted">:</span>
          <span className="font-display text-score tabular-nums text-content-secondary">
            {game.away.score}
          </span>
        </div>

        <div className="text-left">
          <p className="truncate text-sm font-semibold uppercase tracking-wide text-content-secondary">
            {game.away.name}
          </p>
          <p className="text-[10px] font-medium uppercase tracking-widest text-content-muted">
            Visitante
          </p>
        </div>
      </div>
    </Card>
  );
}
