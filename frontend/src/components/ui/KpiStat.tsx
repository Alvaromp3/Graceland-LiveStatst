import type { ReactNode } from "react";

type KpiStatProps = {
  label: string;
  value: string | number;
  suffix?: string;
  accent?: boolean;
  trend?: string;
};

export default function KpiStat({ label, value, suffix, accent, trend }: KpiStatProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline gap-1">
        <span
          className={`font-display text-3xl font-bold tabular-nums tracking-tight ${
            accent ? "text-graceland" : "text-content-primary"
          }`}
        >
          {value}
        </span>
        {suffix && (
          <span className="font-display text-lg font-semibold text-content-muted">{suffix}</span>
        )}
      </div>
      <span className="text-[11px] font-medium uppercase tracking-wider text-content-muted">
        {label}
      </span>
      {trend && <span className="text-xs text-content-secondary">{trend}</span>}
    </div>
  );
}

type KpiCardProps = {
  children: ReactNode;
  className?: string;
};

export function KpiCard({ children, className = "" }: KpiCardProps) {
  return (
    <div
      className={`rounded-card border border-surface-border bg-surface-raised p-4 ${className}`}
    >
      {children}
    </div>
  );
}
