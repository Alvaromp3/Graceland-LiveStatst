"""Shared pitch coordinate helpers."""

from dataclasses import dataclass


@dataclass(frozen=True)
class FieldPoint:
    """Normalized pitch coordinate (0-1)."""

    x: float
    y: float


# TODO: define pitch dimensions and zone boundaries
