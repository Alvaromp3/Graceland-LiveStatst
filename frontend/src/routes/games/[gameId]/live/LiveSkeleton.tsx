import { Card, Skeleton } from "../../../../components/ui";

export default function LiveSkeleton() {
  return (
    <div className="space-y-section">
      <Skeleton className="h-8 w-40" />
      <Card padding="lg" className="space-y-6">
        <div className="flex justify-between">
          <Skeleton className="h-16 w-20" />
          <Skeleton className="h-20 w-24" />
          <Skeleton className="h-16 w-20" />
        </div>
        <Skeleton className="h-12 w-full" />
      </Card>
      <div className="grid gap-3 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} padding="md">
            <Skeleton className="mb-3 h-3 w-24" />
            <Skeleton className="h-8 w-full" />
          </Card>
        ))}
      </div>
    </div>
  );
}
