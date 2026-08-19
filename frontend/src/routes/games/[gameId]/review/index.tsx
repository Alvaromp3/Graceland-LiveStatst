import { useParams } from "react-router-dom";

export default function GameReviewPage() {
  const { gameId = "" } = useParams();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Review — {gameId}</h1>
      <p className="text-zinc-400">TODO: match review</p>
    </div>
  );
}
