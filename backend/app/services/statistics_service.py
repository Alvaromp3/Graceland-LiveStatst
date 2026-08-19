"""Statistics service."""

from sqlalchemy.ext.asyncio import AsyncSession


class StatisticsService:
    """Statistics business logic."""

    def __init__(self, db: AsyncSession) -> None:
        self.db = db

    async def get_game_statistics(self, game_id: str) -> dict[str, str]:
        """Return statistics for a game."""
        # TODO: implement
        _ = game_id
        return {}
