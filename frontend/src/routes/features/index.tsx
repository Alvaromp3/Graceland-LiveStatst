import { Card, SectionLabel } from "../../components/ui";
import { DETECTABLE_FEATURES, FEATURES_SCOPE_NOTE } from "../../constants/features";

export default function FeaturesPage() {
  return (
    <div className="space-y-section">
      <header className="space-y-2">
        <p className="section-index">Catálogo</p>
        <h1 className="font-brand text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-content-primary sm:text-5xl">
          Métricas
        </h1>
        <p className="max-w-2xl font-mono text-xs leading-relaxed text-content-secondary">
          {FEATURES_SCOPE_NOTE}
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {DETECTABLE_FEATURES.map((category, i) => (
          <Card key={category.id} padding="lg">
            <SectionLabel
              index={String(i + 1).padStart(2, "0")}
              label={category.title}
              className="mb-4"
            />
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-mono text-xs text-content-primary"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 bg-graceland" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
