export type Game = {
  id: string;
  title: string;
};

export type Player = {
  id: string;
  name: string;
};

export type Team = {
  id: string;
  name: string;
};

export type GameEvent = {
  id: string;
  gameId: string;
  type: string;
};

// TODO: expand domain types
