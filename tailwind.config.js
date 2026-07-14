/**
 * Tailwind configurado desde el sistema de tokens (spec §2, §9.5).
 *
 * Doble fuente de verdad, coherente:
 *  - COLOR y TIPOGRAFÍA (familias) → apuntan a las variables de `tokens.css`
 *    (var(--color-*) / var(--font-*)). Así `tokens.css` manda en runtime:
 *    cambiar un hex ahí re-tinta toda la web sin recompilar.
 *  - ESCALAS, ESPACIADO, RADIOS, MOVIMIENTO → se leen literalmente de
 *    `tokens.json`, que queda como la config estructural de Tailwind.
 *
 * Regla del proyecto: nunca hardcodear un color o una fuente en el markup.
 * Siempre clases derivadas de acá.
 */
const tokens = require("./tokens.json");

const t = tokens.typography;

// "0.7s" -> "700ms" (duraciones de tokens.json a la unidad de Tailwind).
const ms = (s) => `${Math.round(parseFloat(s) * 1000)}ms`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    // Colores mapeados a las CSS vars de tokens.css (fuente de verdad runtime).
    colors: {
      transparent: "transparent",
      current: "currentColor",
      bg: "var(--color-bg)",
      surface: "var(--color-surface)",
      ink: {
        DEFAULT: "var(--color-ink)",
        soft: "var(--color-ink-soft)",
      },
      neutral: "var(--color-neutral)",
      border: "var(--color-border)",
      accent: {
        DEFAULT: "var(--color-accent)",
        deep: "var(--color-accent-deep)",
        tint: "var(--color-accent-tint)",
        "tint-border": "var(--color-accent-tint-border)",
        "tint-ink": "var(--color-accent-tint-ink)",
      },
      success: "var(--color-success)",
      "on-dark": {
        DEFAULT: "var(--color-on-dark)",
        soft: "var(--color-on-dark-soft)",
      },
      chip: {
        bg: "var(--color-chip-bg)",
        border: "var(--color-chip-border)",
      },
    },

    // Radios desde tokens.json.
    borderRadius: {
      none: "0",
      sm: tokens.radius.sm,
      card: tokens.radius.card,
      "card-lg": tokens.radius.cardLg,
      block: tokens.radius.block,
      pill: tokens.radius.pill,
      full: "9999px",
    },

    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },

      // Escala fluida desde tokens.json (clamp min→max).
      fontSize: {
        h1: [t.scale.h1.size, { lineHeight: String(t.leading.tight), letterSpacing: t.tracking.tight }],
        h2: [t.scale.h2.size, { lineHeight: String(t.scale.h2.leading), letterSpacing: t.tracking.tight }],
        subtitle: [t.scale.subtitle.size, { lineHeight: String(t.leading.snug) }],
        lead: [t.scale.lead.size, { lineHeight: String(t.leading.body) }],
        "card-title": [t.scale.cardTitle.size, { lineHeight: String(t.leading.snug) }],
        "card-body": [t.scale.cardBody.size, { lineHeight: String(t.scale.cardBody.leading) }],
        button: [t.scale.button.size, { lineHeight: "1" }],
        eyebrow: [t.scale.eyebrow.size, { lineHeight: "1.2", letterSpacing: t.tracking.eyebrow }],
        stat: [t.scale.stat.size, { lineHeight: "1", letterSpacing: t.tracking.num }],
      },

      fontWeight: {
        regular: String(t.weight.regular),
        medium: String(t.weight.medium),
        semibold: String(t.weight.semibold),
        bold: String(t.weight.bold),
        black: String(t.weight.black),
      },

      letterSpacing: {
        tight: t.tracking.tight,
        num: t.tracking.num,
        eyebrow: t.tracking.eyebrow,
      },

      lineHeight: {
        tight: String(t.leading.tight),
        snug: String(t.leading.snug),
        body: String(t.leading.body),
      },

      // Espaciado desde tokens.json.
      spacing: {
        section: tokens.spacing.section,
        "section-lg": tokens.spacing.sectionLg,
        gutter: tokens.spacing.gutter,
        card: tokens.spacing.card,
        "card-lg": tokens.spacing.cardLg,
      },

      gap: {
        grid: tokens.spacing.gapGrid,
        hero: tokens.spacing.gapHero,
      },

      maxWidth: {
        container: tokens.spacing.container,
        "container-narrow": tokens.spacing.containerNarrow,
      },

      boxShadow: {
        "card-hover": tokens.shadow.cardHover,
      },

      transitionTimingFunction: {
        reveal: tokens.motion.easeReveal,
      },

      transitionDuration: {
        reveal: ms(tokens.motion.durReveal),
        ui: ms(tokens.motion.durUi),
      },
    },
  },
  plugins: [],
};
