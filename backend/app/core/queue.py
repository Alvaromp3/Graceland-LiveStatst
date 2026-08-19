"""Redis queue client skeleton."""

from app.config import settings


class QueueClient:
    """Minimal queue wrapper."""

    def __init__(self, redis_url: str = settings.redis_url) -> None:
        self.redis_url = redis_url

    async def publish(self, channel: str, message: str) -> None:
        """Publish a message to a channel."""
        # TODO: implement Redis publish
        _ = (channel, message)


queue_client = QueueClient()
