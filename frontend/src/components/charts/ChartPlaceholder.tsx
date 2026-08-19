type ChartPlaceholderProps = {
  title: string;
};

export default function ChartPlaceholder({ title }: ChartPlaceholderProps) {
  return (
    <section className="rounded-card border border-surface-border bg-surface-raised p-6">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-content-primary">
        {title}
      </h3>
      <div className="flex h-40 items-center justify-center text-sm text-content-muted">
        Sin datos
      </div>
    </section>
  );
}
