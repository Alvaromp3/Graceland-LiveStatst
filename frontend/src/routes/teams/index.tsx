import { Card, SectionLabel } from "../../components/ui";

export default function TeamsPage() {
  return (
    <div className="space-y-section">
      <header className="space-y-2">
        <p className="section-index">Equipos</p>
        <h1 className="font-brand text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-content-primary">
          Equipos
        </h1>
        <p className="font-mono text-xs text-content-secondary">
          Rival y local para comparar métricas — sin plantillas ni jugadores.
        </p>
      </header>

      <Card padding="lg">
        <SectionLabel index="01" label="Configuración" className="mb-4" />
        <p className="font-mono text-xs text-content-muted">
          Sin equipos configurados. Se asignan al subir un vídeo de partido.
        </p>
      </Card>
    </div>
  );
}
