import { Card } from "../../../../components/ui";

export default function LiveEmptyState() {
  return (
    <Card padding="lg" className="flex flex-col items-center justify-center py-16 text-center">
      <p className="font-display text-3xl font-bold text-content-muted">0</p>
      <h2 className="mt-2 text-lg font-semibold text-content-primary">
        Sin datos todavía
      </h2>
      <p className="mt-1 max-w-xs text-sm text-content-secondary">
        El partido aún no ha generado estadísticas. Los datos aparecerán aquí en cuanto
        empiece el tracking en vivo.
      </p>
    </Card>
  );
}
