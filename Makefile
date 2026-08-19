.PHONY: up kill infra-up infra-down

COMPOSE := docker compose --env-file backend/.env
PID_DIR := .pids
PYTHON  := python3

infra-up:
	@if docker info >/dev/null 2>&1; then \
		if $(COMPOSE) up -d; then \
			echo "Infra up: postgres + redis"; \
		else \
			echo "Warning: docker compose falló (revisa puertos ocupados)."; \
			echo "  Si 6379 está en uso, cambia REDIS_PORT en backend/.env (ej. 6380)."; \
			echo "  Luego: make infra-up"; \
		fi; \
	else \
		echo "Warning: Docker no está corriendo — postgres y redis omitidos."; \
		echo "  Abre Docker Desktop y ejecuta: make infra-up"; \
	fi

infra-down:
	@if docker info >/dev/null 2>&1; then \
		$(COMPOSE) down; \
	else \
		echo "Docker no disponible — nada que detener en compose."; \
	fi

up: infra-up
	@mkdir -p $(PID_DIR) logs
	@echo "Starting backend (backend/.env)..."
	@cd backend && set -a && . ./.env && set +a && \
		$(PYTHON) -m uvicorn app.main:app --reload --host "$$API_HOST" --port "$$API_PORT" \
		> ../logs/backend.log 2>&1 & \
		echo $$! > "$(CURDIR)/$(PID_DIR)/backend.pid"
	@echo "Starting frontend (frontend/.env)..."
	@cd frontend && npm run dev > ../logs/frontend.log 2>&1 & \
		echo $$! > "$(CURDIR)/$(PID_DIR)/frontend.pid"
	@echo "Stack up."
	@echo "  API:      http://localhost:8000"
	@echo "  Frontend: http://localhost:5173"
	@echo "  Logs:     logs/backend.log, logs/frontend.log"

kill: infra-down
	@if [ -f $(PID_DIR)/backend.pid ]; then \
		kill $$(cat $(PID_DIR)/backend.pid) 2>/dev/null || true; \
		rm -f $(PID_DIR)/backend.pid; \
	fi
	@if [ -f $(PID_DIR)/frontend.pid ]; then \
		kill $$(cat $(PID_DIR)/frontend.pid) 2>/dev/null || true; \
		rm -f $(PID_DIR)/frontend.pid; \
	fi
	@pkill -f "uvicorn app.main:app" 2>/dev/null || true
	@pkill -f "vite" 2>/dev/null || true
	@echo "Stack stopped."
