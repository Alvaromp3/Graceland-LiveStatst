import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#070809",
          raised: "#0e1014",
          overlay: "#141820",
          border: "#1f2430",
        },
        content: {
          primary: "#ece8df",
          secondary: "#8a919e",
          muted: "#505868",
        },
        graceland: {
          DEFAULT: "#d4920a",
          dim: "#a67108",
          glow: "rgba(212, 146, 10, 0.22)",
        },
        rival: {
          DEFAULT: "#6b7280",
          dim: "#4b5563",
        },
        live: {
          DEFAULT: "#22c55e",
          dim: "#16a34a",
          glow: "rgba(34, 197, 94, 0.35)",
        },
        phase: {
          halftime: "#f59e0b",
          finished: "#64748b",
        },
        confidence: {
          high: "#22c55e",
          medium: "#f59e0b",
          low: "#ef4444",
        },
        danger: {
          DEFAULT: "#ef4444",
          dim: "#991b1b",
        },
        pitch: {
          line: "rgba(236, 232, 223, 0.04)",
        },
      },
      fontFamily: {
        brand: ["Syne", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
        display: ["Bebas Neue", "Syne", "sans-serif"],
        sans: ["Syne", "system-ui", "sans-serif"],
      },
      fontSize: {
        score: ["4.5rem", { lineHeight: "0.85", letterSpacing: "0.02em" }],
        stat: ["1.75rem", { lineHeight: "1", letterSpacing: "0.04em" }],
        "section-index": ["0.65rem", { lineHeight: "1", letterSpacing: "0.35em" }],
      },
      spacing: {
        gutter: "1.25rem",
        section: "2rem",
      },
      borderRadius: {
        card: "2px",
        btn: "2px",
      },
      animation: {
        "pulse-live": "pulse-live 2s ease-in-out infinite",
        shimmer: "shimmer 1.5s ease-in-out infinite",
      },
      keyframes: {
        "pulse-live": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        score: "0 8px 32px rgba(0, 0, 0, 0.55)",
        upload: "inset 0 0 0 1px rgba(212, 146, 10, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
