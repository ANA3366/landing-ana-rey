"use client";

import { useState } from "react";

/*
 * Flip card de objeciones.
 * - Es un <button> nativo → foco + Enter/Espacio giran la carta (accesible).
 * - Desktop: gira en hover (rotación 3D en Y). Mobile: gira al tocar (estado).
 * - prefers-reduced-motion resuelto por CSS (motion-safe / motion-reduce), no
 *   por JS: así no hay mismatch de hidratación. Con reduced-motion NO hay giro;
 *   se muestran frente y dorso apilados (ambos visibles).
 * - El texto del dorso está SIEMPRE en el DOM (legible por lectores de pantalla).
 */

function FlipHint() {
  return (
    <span className="mt-6 inline-flex items-center gap-1.5 text-eyebrow font-bold uppercase tracking-eyebrow text-accent motion-reduce:hidden">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <path
          d="M20.9 4.2v4h-4"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Dar vuelta
    </span>
  );
}

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      className="group block h-full w-full text-left [perspective:1200px]"
    >
      <div
        className={[
          "relative h-full w-full rounded-card-lg",
          "motion-safe:min-h-[260px] motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-reveal motion-safe:[transform-style:preserve-3d]",
          "motion-safe:group-hover:[transform:rotateY(180deg)]",
          flipped ? "motion-safe:[transform:rotateY(180deg)]" : "",
        ].join(" ")}
      >
        {/* Frente — la objeción, en tinta */}
        <div className="flex h-full flex-col justify-between rounded-card-lg border border-border bg-surface p-card-lg [backface-visibility:hidden] motion-safe:absolute motion-safe:inset-0">
          <p className="font-display text-card-title font-bold leading-snug text-ink">
            “{front}”
          </p>
          <FlipHint />
        </div>

        {/* Dorso — la respuesta, sobre el acento */}
        <div className="flex h-full flex-col justify-center rounded-card-lg bg-accent p-card-lg text-on-dark [backface-visibility:hidden] motion-safe:absolute motion-safe:inset-0 motion-safe:[transform:rotateY(180deg)] motion-reduce:mt-4">
          <p className="text-eyebrow font-bold uppercase tracking-eyebrow text-on-dark-soft">
            Mi respuesta
          </p>
          <p className="mt-2 text-card-body leading-body text-on-dark">{back}</p>
        </div>
      </div>
    </button>
  );
}
