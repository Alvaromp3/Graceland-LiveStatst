"""Player track model."""

from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class PlayerTrack(Base):
    """Player tracking frame entity."""

    __tablename__ = "player_tracks"

    id: Mapped[int] = mapped_column(primary_key=True)

# TODO: complete model fields and relationships
