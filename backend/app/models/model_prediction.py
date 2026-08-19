"""Model prediction entity."""

from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class ModelPrediction(Base):
    """ML model prediction entity."""

    __tablename__ = "model_predictions"

    id: Mapped[int] = mapped_column(primary_key=True)

# TODO: complete model fields and relationships
