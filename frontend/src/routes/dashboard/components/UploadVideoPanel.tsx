import { Button } from "../../../components/ui";

export default function UploadVideoPanel() {
  return (
    <div className="panel-frame shadow-upload">
      <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="space-y-2">
          <p className="section-index">Acción principal</p>
          <h2 className="font-display text-4xl leading-none tracking-wide text-content-primary sm:text-5xl">
            SUBIR VÍDEO
          </h2>
          <p className="max-w-md font-mono text-xs leading-relaxed text-content-secondary">
            MP4 · MOV · hasta 90 min · análisis post-partido automático
          </p>
        </div>

        <Button variant="primary" size="lg" type="button" className="shrink-0">
          Seleccionar archivo
        </Button>
      </div>

      <div className="border-t border-surface-border bg-surface-overlay/50 px-6 py-3 sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-content-muted">
          Sin conexión en vivo — solo upload de grabaciones
        </p>
      </div>
    </div>
  );
}
