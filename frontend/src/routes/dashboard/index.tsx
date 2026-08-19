import { Card, SectionLabel } from "../../components/ui";
import DashboardEmptyState from "./components/DashboardEmptyState";
import UploadVideoPanel from "./components/UploadVideoPanel";

export default function DashboardPage() {
  return (
    <div className="grid gap-section lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-10">
      <div className="space-y-section">
        <header className="space-y-2">
          <p className="section-index">Centro de control</p>
          <h1 className="font-brand text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-content-primary sm:text-5xl">
            Dashboard
          </h1>
        </header>

        <UploadVideoPanel />
        <DashboardEmptyState />

        <Card padding="lg">
          <SectionLabel index="02" label="Overview" className="mb-5" />
          <div className="flex min-h-[9rem] items-center justify-center border border-dashed border-surface-border bg-surface-overlay/30">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-content-muted">
              Sin datos — sube un vídeo
            </p>
          </div>
        </Card>
      </div>

      <aside className="hidden lg:flex lg:flex-col lg:justify-between lg:pb-2">
        <div className="sticky top-28 space-y-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.45em] text-content-muted [writing-mode:vertical-rl] rotate-180">
            Graceland · Data Terminal
          </p>
          <div className="space-y-1 border-l border-surface-border pl-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-content-muted">
              Módulo
            </p>
            <p className="font-brand text-sm font-bold uppercase text-graceland">
              Post-match
            </p>
            <p className="font-mono text-[10px] text-content-secondary">
              Upload → Process → Review
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
