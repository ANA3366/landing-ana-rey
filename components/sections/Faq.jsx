"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/*
 * Sección 8 — Preguntas frecuentes (spec §4.10, §5).
 * Desarma objeciones reales. Acordeón accesible (un solo panel abierto),
 * teclado + aria-expanded/aria-controls. La pregunta de la garantía dice
 * explícitamente dónde termina la responsabilidad de Ana (spec §5): no se
 * suaviza. Con prefers-reduced-motion el panel abre/cierra sin animar altura.
 */

const FAQS = [
  {
    q: "Ya tengo web / Instagram / campañas. ¿Sirve igual?",
    a: "Sí, y suele ser el mejor escenario. No siempre hay que empezar de cero: primero audito lo que tenés, te digo qué funciona, qué está roto y qué falta. A veces el problema no es que falten piezas, es que las piezas no están conectadas entre sí.",
  },
  {
    q: "¿Cuánto de mi tiempo me va a llevar?",
    a: "Ese es justamente el punto del sistema. Después del setup inicial, tu participación se reduce a una llamada corta al mes y aprobar lo que te presento. Si te estoy pidiendo más tiempo del que te devuelvo, algo hice mal.",
  },
  {
    q: "¿En cuánto tiempo veo resultados?",
    a: "Las campañas empiezan a generar conversaciones desde las primeras semanas. La infraestructura (web, tienda, automatizaciones) es una inversión que rinde desde el día que se enciende y sigue rindiendo sola. Lo que no te voy a decir es que vas a triplicar tus ventas en 30 días.",
  },
  {
    q: "¿Necesito salir en cámara?",
    a: "No. El contenido puede mostrar tu producto, tu trabajo, tu proceso o tu equipo. Tu cara es opcional, no obligatoria.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Depende de qué módulos necesite tu negocio: no es lo mismo montar una tienda desde cero que optimizar campañas existentes. Por eso el primer paso siempre es una llamada corta donde vemos qué te falta realmente. Sin vueltas y sin propuestas eternas.",
  },
  {
    q: "¿Y si no funciona?",
    a: "Soy transparente desde el día uno sobre qué controlo y qué no. Yo controlo la infraestructura, el contenido y las campañas. El cierre de la venta también depende de tu velocidad de respuesta y de tus precios. Por eso mi garantía es sobre lo que sí depende de mí: si un mes no entrego lo comprometido, ese mes no lo pagás.",
  },
  {
    q: "¿Con qué tipo de negocios trabajás?",
    a: "Con negocios de servicios y ecommerce que ya venden y quieren escalar. No trabajo con proyectos que todavía no validaron su producto: ahí el problema no es el marketing.",
  },
];

function PlusIcon({ open }) {
  return (
    <span
      aria-hidden="true"
      className="relative ml-4 mt-1 flex h-5 w-5 shrink-0 items-center justify-center"
    >
      <span className="absolute h-0.5 w-4 rounded-full bg-accent" />
      <span
        className={`absolute h-0.5 w-4 rounded-full bg-accent transition-transform duration-ui ease-reveal ${
          open ? "rotate-0" : "rotate-90"
        }`}
      />
    </span>
  );
}

function FaqItem({ item, index, open, onToggle }) {
  const reduce = useReducedMotion();
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-border">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-start justify-between gap-2 py-5 text-left"
        >
          <span className="font-display text-card-title font-bold text-ink">
            {item.q}
          </span>
          <PlusIcon open={open} />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-[64ch] pb-6 pr-6 text-lead text-ink-soft">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" tone="surface" narrow>
      <Reveal
        as="p"
        className="text-eyebrow font-bold uppercase tracking-eyebrow text-accent"
      >
        Preguntas frecuentes
      </Reveal>

      <Reveal
        as="h2"
        delay={0.06}
        className="mt-3 text-h2 font-black tracking-tight text-ink"
      >
        Lo que más me preguntan.
      </Reveal>

      <Reveal delay={0.12} className="mt-8">
        <div className="rounded-card-lg border border-border bg-bg px-card">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
