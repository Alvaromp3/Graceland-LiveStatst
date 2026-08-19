import { useParams } from "react-router-dom";

export default function GameTacticalPage() {
  const { gameId = "" } = useParams();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Tactical — {gameId}</h1>
      <p className="text-zinc-400">TODO: tactical view</p>
    </div>
  );
}
