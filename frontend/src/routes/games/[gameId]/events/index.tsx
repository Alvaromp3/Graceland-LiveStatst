import { useParams } from "react-router-dom";

export default function GameEventsPage() {
  const { gameId = "" } = useParams();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Events — {gameId}</h1>
      <p className="text-zinc-400">TODO: game events</p>
    </div>
  );
}
