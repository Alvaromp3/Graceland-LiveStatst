import { SectionLabel } from "../../../components/ui";

export default function DashboardEmptyState() {
  return (
    <section className="panel-frame p-6 pl-7 sm:p-8 sm:pl-9">
      <SectionLabel index="01" label="Archivo" className="mb-6" />

      <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
        <p className="font-display text-7xl leading-none text-content-muted/40 sm:text-8xl">
          —
        </p>

        <div>
          <h2 className="font-brand text-2xl font-bold uppercase tracking-tight text-content-primary">
            Sin partidos
          </h2>
          <p className="mt-3 max-w-lg font-mono text-xs leading-relaxed text-content-secondary">
            El archivo de vídeo se procesa en segundo plano. Cuando termine, verás
            estadísticas, eventos y vista táctica aquí.
          </p>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-content-muted">
            Estado: esperando primer upload
          </p>
        </div>
      </div>
    </section>
  );
}
