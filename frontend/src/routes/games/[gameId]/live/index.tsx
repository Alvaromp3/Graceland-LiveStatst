import { useParams } from "react-router-dom";
import { useLiveGameSocket } from "../../../../hooks/useLiveGameSocket";

export default function GameLivePage() {
  const { gameId = "" } = useParams();
  const { status } = useLiveGameSocket(gameId);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Live — {gameId}</h1>
      <p className="text-zinc-400">Status: {status}</p>
    </div>
  );
}
