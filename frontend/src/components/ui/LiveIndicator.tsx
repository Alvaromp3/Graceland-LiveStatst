import Badge from "./Badge";

export type MatchPhase = "live" | "halftime" | "finished";

type LiveIndicatorProps = {
  phase: MatchPhase;
  minute?: number;
  className?: string;
};

const phaseConfig: Record<
  MatchPhase,
  { label: string; badge: "live" | "halftime" | "finished"; pulse: boolean }
> = {
  live: { label: "En vivo", badge: "live", pulse: true },
  halftime: { label: "Descanso", badge: "halftime", pulse: false },
  finished: { label: "Finalizado", badge: "finished", pulse: false },
};

export default function LiveIndicator({
  phase,
  minute,
  className = "",
}: LiveIndicatorProps) {
  const config = phaseConfig[phase];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Badge variant={config.badge}>
        {config.pulse && (
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
            <span className="relative inline-flex h-2 w-2 animate-pulse-live rounded-full bg-live shadow-[0_0_8px_theme(colors.live.glow)]" />
          </span>
        )}
        {!config.pulse && phase === "halftime" && (
          <span className="h-2 w-2 rounded-full bg-phase-halftime" />
        )}
        {!config.pulse && phase === "finished" && (
          <span className="h-2 w-2 rounded-full bg-phase-finished" />
        )}
        {config.label}
      </Badge>

      {phase === "live" && minute !== undefined && (
        <span className="font-display text-2xl font-bold tabular-nums tracking-tight text-content-primary">
          {minute}
          <span className="ml-0.5 text-lg text-content-muted">'</span>
        </span>
      )}

      {phase === "halftime" && (
        <span className="text-sm font-medium text-phase-halftime">HT</span>
      )}

      {phase === "finished" && (
        <span className="text-sm font-medium text-content-muted">FT</span>
      )}
    </div>
  );
}
