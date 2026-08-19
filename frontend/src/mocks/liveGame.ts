import type { MatchPhase } from "../components/ui/LiveIndicator";

export type LiveStat = {
  label: string;
  home: number;
  away: number;
  format?: "number" | "percent";
};

export type LiveGameMock = {
  id: string;
  home: { name: string; short: string; score: number };
  away: { name: string; short: string; score: number };
  minute: number;
  phase: MatchPhase;
  possession: { home: number; away: number };
  stats: LiveStat[];
  updatedAt: string;
};

export const mockLiveGame: LiveGameMock = {
  id: "game-001",
  home: { name: "Graceland", short: "GRA", score: 2 },
  away: { name: "State Univ.", short: "STU", score: 1 },
  minute: 67,
  phase: "live",
  possession: { home: 58, away: 42 },
  stats: [
    { label: "Tiros", home: 12, away: 8 },
    { label: "A puerta", home: 5, away: 3 },
    { label: "Córners", home: 6, away: 4 },
    { label: "Entradas área", home: 9, away: 5 },
    { label: "Último tercio", home: 18, away: 11 },
    { label: "Recuperaciones", home: 24, away: 19 },
  ],
  updatedAt: "21:34:12",
};

export const mockHalftimeGame: LiveGameMock = {
  ...mockLiveGame,
  minute: 45,
  phase: "halftime",
  home: { ...mockLiveGame.home, score: 1 },
  away: { ...mockLiveGame.away, score: 1 },
};

export const mockFinishedGame: LiveGameMock = {
  ...mockLiveGame,
  minute: 90,
  phase: "finished",
  home: { ...mockLiveGame.home, score: 3 },
  away: { ...mockLiveGame.away, score: 2 },
  possession: { home: 54, away: 46 },
};
