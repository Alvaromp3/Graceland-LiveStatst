"""Events API routes."""

from fastapi import APIRouter

router = APIRouter()


@router.get("")
async def list_events() -> list[dict[str, str]]:
    """List events."""
    # TODO: implement
    return []
