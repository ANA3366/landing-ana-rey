"use client";

import { motion, useReducedMotion } from "framer-motion";

/*
 * Stepper del método (spec §4.3 / §8: la mejor animación explicativa).
 * 3 pasos numerados unidos por una línea que se DIBUJA al entrar en viewport:
 * el gesto visual dice "todo conectado, una sola máquina", no piezas sueltas.
 * Con prefers-reduced-motion la línea aparece completa, sin trazo.
 */

const STEPS = [
  {
    n: "1",
    title: "Diagnóstico y auditoría",
    body: "Miro tu negocio de punta a punta y encuentro qué te está frenando.",
  },
  {
    n: "2",
    title: "Construyo el ecosistema",
    body: "Todas las piezas conectadas, trabajando juntas.",
    chips: [
      "Branding",
      "Identidad visual",
      "Contenido y edición",
      "Procesos",
      "Automatización",
      "Auditoría",
    ],
  },
  {
    n: "3",
    title: "Resultados medibles",
    body: "Números reales: menos fricción, más ventas y tiempo que recuperás.",
  },
];

export default function MetodoSteps() {
  const reduce = useReducedMotion();

  return (
    <ol className="relative mt-12 max-w-[64ch]">
      {STEPS.map((step, i) => {
        const isLast = i === STEPS.length - 1;
        return (
          <li key={step.n} className="relative flex gap-5 pb-10 last:pb-0">
            {/* Conector hacia el siguiente paso: se dibuja de arriba a abajo */}
            {!isLast && (
              <motion.span
                aria-hidden="true"
                className="absolute left-[23px] top-12 bottom-0 w-0.5 origin-top bg-accent-tint-border"
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={reduce ? undefined : { scaleY: 1 }}
                viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
              />
            )}

            {/* Badge numerado */}
            <motion.div
              className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent font-display text-[19px] font-bold text-on-dark"
              initial={reduce ? false : { opacity: 0, scale: 0.6 }}
              whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
            >
              {step.n}
            </motion.div>

            {/* Contenido */}
            <motion.div
              className="pt-1.5"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.12 + 0.08, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <h3 className="font-display text-card-title font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-1.5 text-lead text-ink-soft">{step.body}</p>

              {step.chips && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {step.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-pill border border-border bg-surface px-3 py-1 text-card-body font-medium text-ink-soft"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </li>
        );
      })}
    </ol>
  );
}
