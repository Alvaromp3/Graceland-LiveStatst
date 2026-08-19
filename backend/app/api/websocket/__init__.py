"""WebSocket routes."""

from fastapi import APIRouter, WebSocket

router = APIRouter()


@router.websocket("/ws/games/{game_id}")
async def game_ws(websocket: WebSocket, game_id: str) -> None:
    """Live game WebSocket endpoint."""
    await websocket.accept()
    # TODO: implement live updates
    await websocket.send_json({"game_id": game_id, "status": "connected"})
    await websocket.close()
