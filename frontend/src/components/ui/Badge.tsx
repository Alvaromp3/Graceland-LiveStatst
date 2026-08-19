type BadgeVariant =
  | "live"
  | "halftime"
  | "finished"
  | "upcoming"
  | "confidence-high"
  | "confidence-medium"
  | "confidence-low"
  | "neutral";

type BadgeProps = {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
};

const variantClasses: Record<BadgeVariant, string> = {
  live: "bg-live/15 text-live border-live/30",
  halftime: "bg-phase-halftime/15 text-phase-halftime border-phase-halftime/30",
  finished: "bg-phase-finished/15 text-content-secondary border-surface-border",
  upcoming: "bg-surface-overlay text-content-secondary border-surface-border",
  "confidence-high": "bg-confidence-high/15 text-confidence-high border-confidence-high/30",
  "confidence-medium":
    "bg-confidence-medium/15 text-confidence-medium border-confidence-medium/30",
  "confidence-low": "bg-confidence-low/15 text-confidence-low border-confidence-low/30",
  neutral: "bg-surface-overlay text-content-secondary border-surface-border",
};

export function confidenceVariant(pct: number): BadgeVariant {
  if (pct >= 90) return "confidence-high";
  if (pct >= 70) return "confidence-medium";
  return "confidence-low";
}

export default function Badge({
  variant = "neutral",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
