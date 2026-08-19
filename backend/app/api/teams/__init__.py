"""Teams API routes."""

from fastapi import APIRouter

router = APIRouter()


@router.get("")
async def list_teams() -> list[dict[str, str]]:
    """List teams."""
    # TODO: implement
    return []
