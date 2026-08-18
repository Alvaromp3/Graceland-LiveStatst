# Graceland LiveStats

Monorepo para estadísticas en vivo: frontend, backend y paquetes compartidos.

## Estructura

```
frontend/         UI: dashboard, auth, live y settings
backend/          API REST + WebSocket, jobs y tests
packages/shared   Tipos, constantes y validadores
packages/ui       Design system
packages/config   ESLint, TypeScript y Prettier
docs/             Arquitectura, API, producto y runbooks
infra/            Docker, Nginx y Kubernetes
scripts/          Scripts de db, deploy y desarrollo
e2e/              Pruebas end-to-end
tests/            Integración y carga
.github/          CI y plantillas de PR/issues
```

## Apps

| Ruta | Rol |
| --- | --- |
| `frontend` | Dashboard, auth, live y settings |
| `backend` | Auth, users, events, stats, live, health y worker |

Copia `.env.example` a `.env` antes de arrancar servicios.
