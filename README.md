# graceland-analytics

Monorepo skeleton for live football analytics: frontend, API, live worker, and reconciliation worker.

## Structure

```
frontend/                 React + Vite + TypeScript + Tailwind
backend/                  FastAPI + SQLAlchemy + Alembic
worker-live/              Real-time ingest, detection, tracking, events
worker-reconciliation/    Post-match reprocess and stats reconciliation
shared/                   Cross-service Python types and constants
infra/                    MediaMTX and Render deployment config
docs/                     Architecture and integration notes
```

## Quick start

```bash
cp .env.example .env
docker compose up -d
```

See each package README/TODO markers for next implementation steps.
