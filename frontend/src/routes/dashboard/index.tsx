import ChartPlaceholder from "../../components/charts/ChartPlaceholder";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <ChartPlaceholder title="Overview" />
    </div>
  );
}
