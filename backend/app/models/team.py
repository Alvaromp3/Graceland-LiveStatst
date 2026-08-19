"""Team model."""

from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class Team(Base):
    """Team entity."""

    __tablename__ = "teams"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column()

# TODO: complete model fields and relationships
