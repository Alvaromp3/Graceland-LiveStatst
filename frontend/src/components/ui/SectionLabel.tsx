type SectionLabelProps = {
  index: string;
  label: string;
  className?: string;
};

export default function SectionLabel({ index, label, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="section-index">{index}</span>
      <span className="h-px flex-1 bg-surface-border" aria-hidden />
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-content-muted">
        {label}
      </span>
    </div>
  );
}
