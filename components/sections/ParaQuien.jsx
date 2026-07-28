import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CTAButton from "@/components/ui/CTAButton";

/*
 * Sección 6 — Para quién es / para quién no (spec §4.8).
 * Estado narrativo: CALIFICACIÓN. Espanta curiosos y sube la confianza de los
 * que encajan. Dos columnas contrastadas: "sí" en el acento (positivo, califica)
 * y "no" en neutral (descarta sin dramatismo). Disciplina de un solo acento.
 */

const YES = [
  "Ya vendés y tenés reputación.",
  "Cerrás por mensaje, DM o turno.",
  "Te falta tiempo y hacés casi todo vos.",
  "Tu ticket permite invertir en publicidad.",
];

const NO = [
  "Buscás resultados mágicos de un día para otro.",
  "Todavía no validaste tu producto o servicio.",
  "No vas a responder los mensajes que empiecen a llegar.",
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <path
        d="M4 10.5L8 14.5L16 6"
        stroke="var(--color-accent)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <path
        d="M6 6L14 14M14 6L6 14"
        stroke="var(--color-neutral)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ParaQuien() {
  return (
    <Section id="para-quien" tone="surface">
      <Reveal
        as="p"
        className="text-eyebrow font-bold uppercase tracking-eyebrow text-accent"
      >
        Para quién
      </Reveal>

      <Reveal
        as="h2"
        delay={0.06}
        className="mt-3 max-w-[20ch] text-h2 font-black tracking-tight text-ink"
      >
        Esto funciona mejor para algunos negocios que para otros.
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-grid lg:grid-cols-2">
        {/* Es para vos si… */}
        <Reveal as="div" className="h-full">
          <div className="flex h-full flex-col rounded-card-lg border border-accent-tint-border bg-accent-tint p-card-lg">
            <p className="text-eyebrow font-bold uppercase tracking-eyebrow text-accent-tint-ink">
              Es para vos si…
            </p>
            <ul className="mt-5 space-y-4">
              {YES.map((item) => (
                <li key={item} className="flex gap-3 text-lead text-ink">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* No es para vos si… */}
        <Reveal as="div" delay={0.08} className="h-full">
          <div className="flex h-full flex-col rounded-card-lg border border-border bg-bg p-card-lg">
            <p className="text-eyebrow font-bold uppercase tracking-eyebrow text-neutral">
              No es para vos si…
            </p>
            <ul className="mt-5 space-y-4">
              {NO.map((item) => (
                <li key={item} className="flex gap-3 text-lead text-ink-soft">
                  <CrossIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.12} className="mt-10">
        <CTAButton section="paraQuien">Creo que encajo →</CTAButton>
      </Reveal>
    </Section>
  );
}
