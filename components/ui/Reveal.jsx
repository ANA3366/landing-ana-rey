"use client";

import { motion, useReducedMotion } from "framer-motion";

/*
 * Reveal al scroll: fade + translateY sutil, escalonable con `delay`.
 * Valores desde tokens (--reveal-shift 16px, --dur-reveal .7s, --ease-reveal).
 * Con prefers-reduced-motion aparece sin desplazamiento ni transición.
 * `as` permite envolver cualquier tag manteniéndolo semántico.
 */
export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
  y = 16,
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.2, 0.7, 0.2, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
