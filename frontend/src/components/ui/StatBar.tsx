type StatBarProps = {
  label: string;
  homeValue: number;
  awayValue: number;
  homeLabel?: string;
  awayLabel?: string;
  format?: "number" | "percent";
  accentSide?: "home" | "away";
};

function formatValue(value: number, format: "number" | "percent"): string {
  return format === "percent" ? `${value}%` : String(value);
}

export default function StatBar({
  label,
  homeValue,
  awayValue,
  homeLabel = "GRA",
  awayLabel = "RIV",
  format = "number",
  accentSide = "home",
}: StatBarProps) {
  const total = homeValue + awayValue || 1;
  const homePct = Math.round((homeValue / total) * 100);
  const awayPct = 100 - homePct;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-content-muted">
        <span>{homeLabel}</span>
        <span>{label}</span>
        <span>{awayLabel}</span>
      </div>

      <div className="flex items-center justify-between gap-3">
        <span className="font-display text-stat tabular-nums text-graceland">
          {formatValue(homeValue, format)}
        </span>
        <span className="font-display text-stat tabular-nums text-content-secondary">
          {formatValue(awayValue, format)}
        </span>
      </div>

      <div className="flex h-2 overflow-hidden rounded-full bg-surface-overlay">
        <div
          className={`h-full transition-all ${accentSide === "home" ? "bg-graceland" : "bg-rival"}`}
          style={{ width: `${homePct}%` }}
        />
        <div
          className={`h-full transition-all ${accentSide === "away" ? "bg-graceland" : "bg-rival-dim"}`}
          style={{ width: `${awayPct}%` }}
        />
      </div>
    </div>
  );
}
