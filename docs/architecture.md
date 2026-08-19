# Architecture

## Overview

- **frontend**: React dashboard for games, players, and teams.
- **backend**: FastAPI REST + WebSocket API.
- **worker-live**: RTMP ingest, CV pipeline, live event publishing.
- **worker-reconciliation**: Post-match full-pass reprocess and stats update.

## Data flow

```
RTMP -> worker-live -> backend API -> frontend (WebSocket)
                |
                v
         worker-reconciliation (post-match)
```

<!-- TODO: expand with sequence diagrams and deployment topology -->
