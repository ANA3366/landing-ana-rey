"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HERO_ORBIT_MODULES } from "@/lib/site";

/*
 * Órbita del Hero — la animación estrella (spec §4.1, §8: demuestra oficio + explica el sistema).
 *
 * Un núcleo ("tu negocio") con 6 módulos orbitando, TODOS conectados al centro
 * por líneas: el mensaje es "un ecosistema, no piezas sueltas".
 * El anillo gira 1 vuelta cada 22s (--orbit-period); cada etiqueta
 * contra-rota a la misma velocidad para quedar siempre legible.
 * Con prefers-reduced-motion, queda quieto (constelación estática).
 */

const N = HERO_ORBIT_MODULES.length;
// Radio de los nodos (viewBox 100×100). 35 mantiene la etiqueta más ancha
// ("Automatización") dentro del ancho aun en teléfonos de ~320px.
const R = 35;
const START = -90; // primer módulo arriba

const NODES = HERO_ORBIT_MODULES.map((label, i) => {
  const theta = ((START + (360 / N) * i) * Math.PI) / 180;
  return {
    label,
    x: 50 + R * Math.cos(theta),
    y: 50 + R * Math.sin(theta),
  };
});

const PERIOD = 22; // segundos (--orbit-period)

export default function HeroOrbit() {
  const reduce = useReducedMotion();

  const spin = reduce
    ? {}
    : { animate: { rotate: 360 }, transition: { duration: PERIOD, ease: "linear", repeat: Infinity } };
  const counterSpin = reduce
    ? {}
    : { animate: { rotate: -360 }, transition: { duration: PERIOD, ease: "linear", repeat: Infinity } };

  return (
    <div className="mx-auto w-full max-w-[440px]">
      <div className="relative aspect-square w-full">
        {/* Anillo punteado de fondo */}
        <div className="absolute inset-[8%] rounded-full border border-dashed border-border" />
        <div className="absolute inset-[26%] rounded-full border border-border" />

        {/* Grupo que rota: líneas de conexión + nodos + etiquetas */}
        <motion.div className="absolute inset-0" {...spin}>
          {/* Conexiones núcleo → módulos (el "todo conectado") */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {NODES.map((n) => (
              <line
                key={n.label}
                x1="50"
                y1="50"
                x2={n.x}
                y2={n.y}
                stroke="var(--color-accent)"
                strokeWidth="0.5"
                strokeOpacity="0.35"
              />
            ))}
            {NODES.map((n) => (
              <circle
                key={n.label}
                cx={n.x}
                cy={n.y}
                r="1.4"
                fill="var(--color-accent)"
              />
            ))}
          </svg>

          {/* Etiquetas de módulo, contra-rotadas para quedar horizontales */}
          {NODES.map((n) => (
            <div
              key={n.label}
              className="absolute"
              style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%, -50%)" }}
            >
              <motion.span
                {...counterSpin}
                className="block whitespace-nowrap rounded-pill border border-border bg-bg px-2.5 py-1 text-[11px] font-semibold tracking-tight text-ink-soft shadow-sm"
              >
                {n.label}
              </motion.span>
            </div>
          ))}
        </motion.div>

        {/* Núcleo — quieto en el centro, por encima del grupo que rota */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-[26%] min-h-[84px] w-[26%] min-w-[84px] flex-col items-center justify-center rounded-full bg-ink px-2 text-center aspect-square">
            <span className="text-[10px] font-bold uppercase tracking-eyebrow text-on-dark-soft">
              tu
            </span>
            <span className="font-display text-[15px] font-bold leading-tight text-on-dark">
              negocio
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-eyebrow font-bold uppercase tracking-eyebrow text-neutral">
        Un ecosistema, no piezas sueltas
      </p>
    </div>
  );
}
