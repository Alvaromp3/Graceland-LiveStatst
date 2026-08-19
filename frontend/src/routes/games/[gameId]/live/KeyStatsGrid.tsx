import { Card, StatBar } from "../../../../components/ui";
import type { LiveGameMock } from "../../../../mocks/liveGame";

type KeyStatsGridProps = {
  game: LiveGameMock;
};

export default function KeyStatsGrid({ game }: KeyStatsGridProps) {
  return (
    <div className="space-y-3">
      <Card padding="md">
        <StatBar
          label="Posesión"
          homeValue={game.possession.home}
          awayValue={game.possession.away}
          homeLabel={game.home.short}
          awayLabel={game.away.short}
          format="percent"
        />
      </Card>

      <div className="grid gap-3 sm:grid-cols-2">
        {game.stats.map((stat) => (
          <Card key={stat.label} padding="md">
            <StatBar
              label={stat.label}
              homeValue={stat.home}
              awayValue={stat.away}
              homeLabel={game.home.short}
              awayLabel={game.away.short}
              format={stat.format ?? "number"}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
