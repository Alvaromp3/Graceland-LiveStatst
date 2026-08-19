"""Game statistics model."""

from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class GameStatistics(Base):
    """Aggregated game statistics entity."""

    __tablename__ = "game_statistics"

    id: Mapped[int] = mapped_column(primary_key=True)

# TODO: complete model fields and relationships
