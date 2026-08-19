"""Possession model."""

from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class Possession(Base):
    """Possession segment entity."""

    __tablename__ = "possessions"

    id: Mapped[int] = mapped_column(primary_key=True)

# TODO: complete model fields and relationships
