const WS_URL = import.meta.env.VITE_WS_URL ?? "ws://localhost:8000/ws";

export function createGameWebSocket(gameId: string): WebSocket {
  return new WebSocket(`${WS_URL}/games/${gameId}`);
}

// TODO: add reconnect and message parsing
