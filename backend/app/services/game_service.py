"""Game service."""

from sqlalchemy.ext.asyncio import AsyncSession


class GameService:
    """Game business logic."""

    def __init__(self, db: AsyncSession) -> None:
        self.db = db

    async def list_games(self) -> list[dict[str, str]]:
        """Return all games."""
        # TODO: implement
        return []
