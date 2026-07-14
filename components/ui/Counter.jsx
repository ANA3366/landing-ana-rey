"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/*
 * Contador que cuenta hacia arriba al entrar en viewport (spec §6 / §8).
 * Duración y ease desde tokens (--count-duration 1.5s, ease-out cúbico).
 * Formato es-AR (coma decimal). Con prefix/suffix para "USD ", "+", "k", "%".
 *
 * Robustez:
 *  - SSR / sin JS → muestra el valor real (no un 0 fantasma).
 *  - prefers-reduced-motion → salta directo al valor final, sin animar.
 *  - Se ceba en 0 recién al montar en cliente (la sección está bajo el fold),
 *    así el conteo arranca limpio cuando se lo scrollea, sin saltos visibles.
 */
export default function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);

  // Cebar a 0 al montar en cliente (salvo reduced-motion).
  useEffect(() => {
    if (!reduce) setDisplay(0);
  }, [reduce]);

  // Animar 0 → value cuando entra en viewport.
  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  const formatted =
    prefix + display.toFixed(decimals).replace(".", ",") + suffix;

  return (
    <span ref={ref} className={className}>
      {formatted}
    </span>
  );
}
