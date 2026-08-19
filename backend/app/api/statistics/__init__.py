"""Statistics API routes."""

from fastapi import APIRouter

router = APIRouter()


@router.get("")
async def list_statistics() -> list[dict[str, str]]:
    """List statistics."""
    # TODO: implement
    return []
