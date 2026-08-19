"""Event service."""

from sqlalchemy.ext.asyncio import AsyncSession


class EventService:
    """Event business logic."""

    def __init__(self, db: AsyncSession) -> None:
        self.db = db

    async def list_events(self, game_id: str) -> list[dict[str, str]]:
        """Return events for a game."""
        # TODO: implement
        _ = game_id
        return []
