import { useEffect, useState } from "react";
import { createGameWebSocket } from "../lib/websocket-client";

type LiveGameSocketState = {
  status: string;
};

export function useLiveGameSocket(gameId: string): LiveGameSocketState {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!gameId) return;

    const socket = createGameWebSocket(gameId);
    setStatus("connecting");

    socket.onopen = () => setStatus("connected");
    socket.onclose = () => setStatus("disconnected");
    socket.onerror = () => setStatus("error");

    return () => socket.close();
  }, [gameId]);

  return { status };
}
