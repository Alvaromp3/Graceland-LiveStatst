"""Event model."""

from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class Event(Base):
    """Game event entity."""

    __tablename__ = "events"

    id: Mapped[int] = mapped_column(primary_key=True)
    event_type: Mapped[str] = mapped_column()

# TODO: complete model fields and relationships
