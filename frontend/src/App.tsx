import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import DashboardPage from "./routes/dashboard";
import FeaturesPage from "./routes/features";
import GamesListPage from "./routes/games/list";
import GameLivePage from "./routes/games/[gameId]/live";
import GameOverviewPage from "./routes/games/[gameId]/overview";
import GameEventsPage from "./routes/games/[gameId]/events";
import GameTacticalPage from "./routes/games/[gameId]/tactical";
import GameReviewPage from "./routes/games/[gameId]/review";
import TeamsPage from "./routes/teams";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/games" element={<GamesListPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/games/:gameId/live" element={<GameLivePage />} />
        <Route path="/games/:gameId/overview" element={<GameOverviewPage />} />
        <Route path="/games/:gameId/events" element={<GameEventsPage />} />
        <Route path="/games/:gameId/tactical" element={<GameTacticalPage />} />
        <Route path="/games/:gameId/review" element={<GameReviewPage />} />
        <Route path="/teams" element={<TeamsPage />} />
      </Route>
    </Routes>
  );
}
