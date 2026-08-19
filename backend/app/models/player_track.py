"""Anonymous player blob tracking (team-level metrics only — no player identity)."""

from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class PlayerTrack(Base):
    """Anonymous tracking frame for collective tactical metrics."""

    __tablename__ = "player_tracks"

    id: Mapped[int] = mapped_column(primary_key=True)

# TODO: team_id, frame, x, y — no player identity fields
