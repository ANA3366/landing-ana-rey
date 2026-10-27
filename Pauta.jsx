import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import CTAButton from "@/components/ui/CTAButton";

/*
 * Sección · Pauta y Meta Ads (marketing de resultados).
 * Cifras tomadas de los paneles de Meta y del pipeline de cada cuenta.
 * Nombres de personas y datos bancarios NO se publican (ver spec §6).
 * Lo que Ana no controla (precio, velocidad de respuesta del cliente) se aclara.
 */

function Stat({ children, label }) {
  return (
    <div>
      <div className="font-display text-stat font-black tracking-num text-accent">
        {children}
      </div>
      <p className="mt-1 text-card-body text-on-dark-soft">{label}</p>
    </div>
  );
}

const CASOS = [
  {
    titulo: "Método Korex · alto presupuesto",
    descripcion:
      "Campañas de captación con inversión alta y seguimiento de cada lead en el pipeline.",
    stats: [
      { value: 16640, prefix: "USD ", label: "invertidos en campañas" },
      { value: 2515, label: "leads generados" },
      { value: 6.62, decimals: 2, prefix: "USD ", label: "costo por lead" },
    ],
  },
  {
    titulo: "Cliente de networking · retorno",
    descripcion:
      "Campaña con inversión chica y seguimiento de leads hasta la venta, con retorno medido.",
    stats: [
      { value: 473, prefix: "USD ", label: "invertidos en campañas" },
      { value: 76, label: "leads con seguimiento" },
      { value: 7, suffix: "x", label: "retorno de la inversión" },
    ],
  },
];

export default function Pauta() {
  return (
    <Section id="pauta" tone="dark">
      <Reveal
        as="p"
        className="text-eyebrow font-bold uppercase tracking-eyebrow text-accent"
      >
        Meta Ads y pauta
      </Reveal>
      <Reveal
        as="h2"
        delay={0.06}
        className="mt-3 text-h2 font-black tracking-tight text-on-dark"
      >
        Pauta que se mide en leads y ventas.
      </Reveal>
      <Reveal
        as="p"
        delay={0.1}
        className="mt-5 max-w-[62ch] text-lead text-on-dark-soft"
      >
        Armo, optimizo y mido campañas de Meta Ads de punta a punta: segmentación,
        creatividades, embudos de mensajes y seguimiento de cada lead. Lo que
        reviso todas las semanas es el costo por lead y cuántos avanzan a una
        venta.
      </Reveal>

      <div className="mt-10 space-y-6">
        {CASOS.map((caso) => (
          <Reveal key={caso.titulo}>
            <article className="rounded-block border border-chip-border bg-chip-bg p-card-lg">
              <h3 className="font-display text-card-title font-bold text-on-dark">
                {caso.titulo}
              </h3>
              <p className="mt-2 max-w-[60ch] text-card-body text-on-dark-soft">
                {caso.descripcion}
              </p>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {caso.stats.map((s) => (
                  <Stat key={s.label} label={s.label}>
                    <Counter
                      value={s.value}
                      decimals={s.decimals ?? 0}
                      prefix={s.prefix ?? ""}
                      suffix={s.suffix ?? ""}
                    />
                  </Stat>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 max-w-[62ch] text-card-body text-on-dark-soft">
          No prometo un costo por lead fijo. Depende del rubro, de tu precio y de
          qué tan rápido responde tu equipo a cada consulta. Sí te digo con
          claridad qué puedo controlar y qué no.
        </p>
        <CTAButton section="pauta" variant="solid" className="mt-8">
          Quiero revisar mis campañas →
        </CTAButton>
      </Reveal>
    </Section>
  );
}
