type PlaceholderProps = {
  label: string;
};

export default function Placeholder({ label }: PlaceholderProps) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-400">
      {label}
    </div>
  );
}
