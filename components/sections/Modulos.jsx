import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/*
 * Sección 4 — Los módulos (spec §4.4).
 * Presentados como BENEFICIOS, no como tareas. Grid de 6 cards con
 * micro-interacción de hover (lift + sombra, tokens --lift-card / --shadow-card-hover).
 * La entrada de cada card se escalona al scroll.
 */
const MODULES = [
  {
    title: "Identidad y redes",
    body: "Que tu marca se vea como lo que tu negocio realmente vale.",
  },
  {
    title: "Contenido y edición",
    body: "Producción y edición que muestran lo mejor de lo que ofrecés.",
  },
  {
    title: "Campañas que traen mensajes",
    body: "Meta Ads pensadas para conversaciones y ventas, no para likes.",
  },
  {
    title: "Web y tienda que convierten",
    body: "Landing page o ecommerce listos para vender, si no los tenés.",
  },
  {
    title: "Automatización con IA",
    body: "Agentes y procesos que responden, ordenan y te ahorran horas.",
  },
  {
    title: "Procesos y auditoría",
    body: "Encuentro los cuellos de botella, los ordeno y los mido con números reales.",
  },
];

export default function Modulos() {
  return (
    <Section id="modulos" tone="surface">
      <Reveal
        as="p"
        className="text-eyebrow font-bold uppercase tracking-eyebrow text-accent"
      >
        Qué incluye
      </Reveal>

      <Reveal
        as="h2"
        delay={0.06}
        className="mt-3 max-w-[16ch] text-h2 font-black tracking-tight text-ink"
      >
        Un sistema completo. No servicios sueltos.
      </Reveal>

      <ul className="mt-10 grid grid-cols-1 gap-grid sm:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((mod, i) => (
          <Reveal
            key={mod.title}
            as="li"
            delay={(i % 3) * 0.08 + (i >= 3 ? 0.06 : 0)}
            className="h-full"
          >
            <div className="group flex h-full flex-col rounded-card-lg border border-border bg-bg p-card transition duration-ui ease-reveal hover:-translate-y-[3px] hover:border-accent-tint-border hover:shadow-card-hover">
              <span className="mb-5 block h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
              <h3 className="font-display text-card-title font-bold text-ink">
                {mod.title}
              </h3>
              <p className="mt-2 text-card-body text-ink-soft">{mod.body}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
