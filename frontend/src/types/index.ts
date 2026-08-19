export type Team = {
  id: string;
  name: string;
  short: string;
};

export type Game = {
  id: string;
  title: string;
  homeTeamId: string;
  awayTeamId: string;
};

export type GameEvent = {
  id: string;
  gameId: string;
  type: string;
  teamId: string;
};

export type TeamFeatureKey =
  | "possession"
  | "shots"
  | "shots_on_target"
  | "goals"
  | "corners"
  | "goal_kicks"
  | "throw_ins"
  | "saves"
  | "final_third_entries"
  | "box_entries"
  | "attacks_left"
  | "attacks_center"
  | "attacks_right"
  | "heatmap"
  | "avg_block_position"
  | "avg_block_height"
  | "team_width"
  | "line_compactness"
  | "possession_won"
  | "possession_lost";
