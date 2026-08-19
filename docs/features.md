# Features detectables

Scope: **métricas de equipo únicamente**. No hay identificación ni listado de jugadores.

## Posesión y balón

- Posesión por equipo
- Recuperaciones / pérdidas de posesión

## Finalización

- Tiros
- Tiros a puerta
- Goles
- Paradas del portero

## Reinicios

- Córners
- Saques de puerta
- Saques de banda

## Territorio

- Entradas al último tercio
- Entradas al área
- Ataques por izquierda / centro / derecha

## Táctica colectiva

- Heatmap del equipo
- Posición media del bloque
- Altura media del bloque
- Anchura del equipo
- Distancia entre líneas / compactación

## Viabilidad (referencia interna)

| Feature | Viabilidad |
| --- | --- |
| Posesión por equipo | Muy viable con tracking de balón razonable |
| Tiros | Bastante viable (trayectoria hacia portería) |
| Tiros a puerta | Viable con porterías calibradas |
| Goles | De los más fáciles de confirmar |
| Córners | Bastante fiables (posición + reinicio esquina) |
| Saques de puerta / banda | Detectables por salida + reinicio |
| Paradas del portero | Viable con tiro a puerta + cambio de trayectoria |
| Entradas último tercio / área | Muy fiable (coordenadas de campo) |
| Ataques I/C/D | Muy fácil con coordenadas |
| Heatmap / posición media | Muy fiable con tracking |
| Altura / anchura / compactación | Viable con buen tracking |
