"""Game model."""

from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class Game(Base):
    """Game entity."""

    __tablename__ = "games"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column()

# TODO: complete model fields and relationships
