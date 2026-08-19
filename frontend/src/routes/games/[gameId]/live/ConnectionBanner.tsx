type ConnectionBannerProps = {
  lastUpdated: string;
};

export default function ConnectionBanner({ lastUpdated }: ConnectionBannerProps) {
  return (
    <div
      role="alert"
      className="flex items-start gap-3 rounded-card border border-danger/40 bg-danger/10 px-4 py-3"
    >
      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-danger" />
      <div>
        <p className="text-sm font-semibold text-danger">Conexión en vivo perdida</p>
        <p className="mt-0.5 text-xs text-content-secondary">
          Los datos dejaron de actualizarse. Última sync:{" "}
          <span className="font-mono text-content-primary">{lastUpdated}</span>
        </p>
      </div>
    </div>
  );
}
