"""Player model."""

from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class Player(Base):
    """Player entity."""

    __tablename__ = "players"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column()

# TODO: complete model fields and relationships
