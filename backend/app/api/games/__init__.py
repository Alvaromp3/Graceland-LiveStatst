"""Games API routes."""

from fastapi import APIRouter

router = APIRouter()


@router.get("")
async def list_games() -> list[dict[str, str]]:
    """List games."""
    # TODO: implement
    return []
