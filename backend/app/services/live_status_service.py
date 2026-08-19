"""Live status service."""

from sqlalchemy.ext.asyncio import AsyncSession


class LiveStatusService:
    """Live game status business logic."""

    def __init__(self, db: AsyncSession) -> None:
        self.db = db

    async def get_status(self, game_id: str) -> dict[str, str]:
        """Return live status for a game."""
        # TODO: implement
        _ = game_id
        return {"status": "idle"}
