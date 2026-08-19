"""Shared event type definitions."""

from enum import StrEnum


class EventType(StrEnum):
    """Canonical game event types."""

    POSSESSION = "possession"
    SHOT = "shot"
    SET_PIECE = "set_piece"
    ZONE_ENTRY = "zone_entry"


# TODO: define event payload shapes
