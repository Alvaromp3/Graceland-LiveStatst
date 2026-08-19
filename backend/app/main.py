"""Graceland Analytics API."""

from fastapi import FastAPI

from app.api import games, events, players, teams, statistics, websocket

app = FastAPI(title="Graceland Analytics", version="0.1.0")

app.include_router(games.router, prefix="/games", tags=["games"])
app.include_router(events.router, prefix="/events", tags=["events"])
app.include_router(players.router, prefix="/players", tags=["players"])
app.include_router(teams.router, prefix="/teams", tags=["teams"])
app.include_router(statistics.router, prefix="/statistics", tags=["statistics"])
app.include_router(websocket.router, tags=["websocket"])


@app.get("/health")
async def health() -> dict[str, str]:
    """Health check endpoint."""
    return {"status": "ok"}
