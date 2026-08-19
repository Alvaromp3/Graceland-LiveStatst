"""Live worker entrypoint."""


def main() -> None:
    """Start the live processing worker."""
    # TODO: wire ingest -> detection -> tracking -> events -> publisher
    print("worker-live started")


if __name__ == "__main__":
    main()
