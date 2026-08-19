/** Métricas detectables a nivel equipo — sin identificación de jugadores. */

export type FeatureCategory = {
  id: string;
  title: string;
  items: string[];
};

export const DETECTABLE_FEATURES: FeatureCategory[] = [
  {
    id: "possession",
    title: "Posesión y balón",
    items: [
      "Posesión por equipo",
      "Recuperaciones / pérdidas de posesión",
    ],
  },
  {
    id: "shots",
    title: "Finalización",
    items: [
      "Tiros",
      "Tiros a puerta",
      "Goles",
      "Paradas del portero",
    ],
  },
  {
    id: "set-pieces",
    title: "Reinicios",
    items: [
      "Córners",
      "Saques de puerta",
      "Saques de banda",
    ],
  },
  {
    id: "territory",
    title: "Territorio",
    items: [
      "Entradas al último tercio",
      "Entradas al área",
      "Ataques por izquierda / centro / derecha",
    ],
  },
  {
    id: "tactical",
    title: "Táctica colectiva",
    items: [
      "Heatmap del equipo",
      "Posición media del bloque",
      "Altura media del bloque",
      "Anchura del equipo",
      "Distancia entre líneas / compactación",
    ],
  },
];

export const FEATURES_SCOPE_NOTE =
  "Análisis a nivel equipo. No hay detección ni listado de jugadores individuales.";
