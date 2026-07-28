import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";

/*
 * Sección 9 — CTA final (spec §4.11).
 * Estado narrativo: ACCIÓN. WhatsApp + escasez REAL (pocos clientes a la vez,
 * nunca inventada). Cierra el sitio: fondo oscuro, la tarjeta de agenda es el
 * foco visual con el acento. Dos caminos: agendar la llamada o ir directo.
 */

const STEPS = [
  { n: "1", label: "Elegí el día" },
  { n: "2", label: "Elegí el horario" },
  { n: "3", label: "Tu llamada queda agendada" },
];

export default function CtaFinal() {
  return (
    <Section id="contacto" tone="dark" className="py-section-lg">
      <div className="mx-auto max-w-[42ch] text-center">
        <Reveal
          as="h2"
          className="text-h2 font-black tracking-tight text-on-dark"
        >
          Tu competencia ya está apareciendo. Aparezcamos mejor.
        </Reveal>

        <Reveal
          as="p"
          delay={0.08}
          className="mx-auto mt-5 max-w-[46ch] text-lead text-on-dark-soft"
        >
          Trabajo con pocos negocios a la vez para darle atención real a cada
          uno. Si el tuyo encaja, hablemos.
        </Reveal>
      </div>

      {/* Tarjeta de agenda — el foco de la sección */}
      <Reveal delay={0.14} className="mx-auto mt-12 max-w-[640px]">
        <div className="rounded-block border border-chip-border bg-chip-bg p-card-lg">
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-pill bg-chip-bg px-3.5 py-1.5 text-eyebrow font-bold uppercase tracking-eyebrow text-on-dark-soft">
              <span
                className="h-2 w-2 rounded-full bg-success"
                aria-hidden="true"
              />
              Agenda abierta · todos los días
            </span>
          </div>

          <h3 className="mt-5 text-center font-display text-card-title font-bold text-on-dark">
            Agendá tu llamada de reconocimiento
          </h3>
          <p className="mx-auto mt-2 max-w-[42ch] text-center text-card-body text-on-dark-soft">
            20 minutos, sin costo. Vemos si tu negocio encaja con el sistema.
          </p>

          {/* Los 3 pasos */}
          <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STEPS.map((step) => (
              <li
                key={step.n}
                className="flex items-center gap-3 rounded-card border border-chip-border p-card sm:flex-col sm:items-start sm:gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-display text-[15px] font-bold text-on-dark">
                  {step.n}
                </span>
                <span className="text-card-body font-medium text-on-dark">
                  {step.label}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex justify-center">
            <CTAButton section="ctaAgenda">Confirmar por WhatsApp →</CTAButton>
          </div>
        </div>
      </Reveal>

      {/* Camino directo */}
      <Reveal delay={0.2} className="mt-8 text-center">
        <p className="text-card-body text-on-dark-soft">
          ¿Preferís ir directo al grano?
        </p>
        <div className="mt-3 flex justify-center">
          <CTAButton section="ctaDirecto" variant="outline">
            Escribime por WhatsApp →
          </CTAButton>
        </div>
      </Reveal>
    </Section>
  );
}
