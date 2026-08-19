type ChartPlaceholderProps = {
  title: string;
};

export default function ChartPlaceholder({ title }: ChartPlaceholderProps) {
  return (
    <section className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="mb-4 text-sm font-medium text-zinc-300">{title}</h3>
      <div className="flex h-40 items-center justify-center text-zinc-500">
        {/* TODO: chart */}
        Chart placeholder
      </div>
    </section>
  );
}
