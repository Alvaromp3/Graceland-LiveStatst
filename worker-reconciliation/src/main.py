"""Reconciliation worker entrypoint."""


def main() -> None:
    """Start the reconciliation worker."""
    # TODO: wire fetch -> reprocess -> statistics -> cleanup
    print("worker-reconciliation started")


if __name__ == "__main__":
    main()
