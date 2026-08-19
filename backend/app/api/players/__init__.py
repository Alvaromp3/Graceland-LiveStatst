"""Players API routes."""

from fastapi import APIRouter

router = APIRouter()


@router.get("")
async def list_players() -> list[dict[str, str]]:
    """List players."""
    # TODO: implement
    return []
