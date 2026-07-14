import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

/*
 * Sección 5 — Resultados / Casos (spec §4.6, §6).
 * Estado narrativo: PRUEBA. Cifras REALES con contadores; lo no confirmado va
 * como placeholder gris `00` (inconfundible, spec §6) hasta tener el dato.
 * Cada caso es un bloque oscuro sobre la sección clara.
 */

// Stat con número real → contador en acento.
function StatReal({ children, label }) {
  return (
    <div>
      <div className="font-display text-stat font-black tracking-num text-accent">
        {children}
      </div>
      <p className="mt-1 text-card-body text-on-dark-soft">{label}</p>
    </div>
  );
}

// Stat pendiente → `00` en gris, claramente NO publicable (spec §6).
function StatPending({ value = "00", label }) {
  return (
    <div>
      <div className="font-display text-stat font-black tracking-num text-neutral">
        {value}
      </div>
      <p className="mt-1 text-card-body text-on-dark-soft">
        {label}
        <span className="ml-1 align-middle text-[11px] font-semibold uppercase tracking-eyebrow text-neutral">
          · dato pendiente
        </span>
      </p>
    </div>
  );
}

function CaseBadge({ children }) {
  return (
    <span className="inline-block rounded-pill border border-chip-border bg-chip-bg px-3 py-1.5 text-eyebrow font-bold uppercase tracking-eyebrow text-accent">
      {children}
    </span>
  );
}

function SubBlockTitle({ children }) {
  return (
    <p className="text-eyebrow font-bold uppercase tracking-eyebrow text-on-dark-soft">
      {children}
    </p>
  );
}

export default function Casos() {
  return (
    <Section id="resultados" tone="light">
      <Reveal
        as="p"
        className="text-eyebrow font-bold uppercase tracking-eyebrow text-accent"
      >
        Resultados
      </Reveal>
      <Reveal
        as="h2"
        delay={0.06}
        className="mt-3 text-h2 font-black tracking-tight text-ink"
      >
        Resultados, no promesas.
      </Reveal>

      <div className="mt-10 space-y-6">
        {/* ---- Caso · SoluRepuestos ---- */}
        <Reveal>
          <article className="rounded-block bg-ink p-card-lg text-on-dark-soft">
            <CaseBadge>Caso · SoluRepuestos</CaseBadge>
            <p className="mt-5 max-w-[60ch] text-lead">
              Un desarmadero que vende constante y cierra todo por WhatsApp.
              Montamos un sistema de un video por vehículo conectado a campañas de
              mensajes.
            </p>

            {/* Headline: 3 cifras (spec §6) — plata · prueba · técnica */}
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <StatReal label="por conversación">
                <Counter value={0.61} decimals={2} prefix="USD " />
              </StatReal>
              <StatReal label="reseñas capitalizadas">
                <Counter value={150} prefix="+" />
              </StatReal>
              <div>
                <p className="font-display text-card-title font-bold text-on-dark">
                  Embudo WhatsApp-first
                </p>
                <p className="mt-2 text-card-body text-on-dark-soft">
                  Cada anuncio con mensaje pre-cargado por vehículo.
                </p>
              </div>
            </div>

            {/* Reels del sistema — reproducciones reales */}
            <div className="mt-10 border-t border-chip-border pt-6">
              <SubBlockTitle>Reels del sistema</SubBlockTitle>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {[
                  { n: "01", v: 290 },
                  { n: "02", v: 265 },
                  { n: "03", v: 198 },
                ].map((reel) => (
                  <div key={reel.n}>
                    <div className="font-display text-[clamp(24px,5vw,34px)] font-black tracking-num text-on-dark">
                      <Counter value={reel.v} suffix="k" />
                    </div>
                    <p className="mt-1 text-card-body text-on-dark-soft">
                      Reel {reel.n} · reproducciones
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Campañas Meta — pendiente de datos reales (spec §6) */}
            <div className="mt-8 border-t border-chip-border pt-6">
              <SubBlockTitle>Campañas Meta</SubBlockTitle>
              <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <StatPending value="00+" label="conversaciones / mes" />
                <StatPending value="00x" label="retorno de la inversión" />
                <StatReal label="costo por conversación">
                  <Counter value={0.61} decimals={2} prefix="USD " />
                </StatReal>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ---- Caso · Braszka Electrónica ---- */}
        <Reveal>
          <article className="rounded-block bg-ink p-card-lg text-on-dark-soft">
            <CaseBadge>Caso · Braszka Electrónica</CaseBadge>
            <p className="mt-5 max-w-[62ch] text-lead">
              Un ecommerce de electrónica atado a una plataforma de plantillas:
              comisiones por venta, catálogo que no se podía tocar y stock que se
              contaba a mano. Le construimos una web propia desde cero + un
              sistema de stock a medida. Hoy vende online sin pagarle un peaje a
              nadie.
            </p>

            {/* Headline: 0% comisión (real) + 2 pendientes */}
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <StatReal label="comisión por venta">0%</StatReal>
              <StatPending value="+00" label="horas semanales ahorradas" />
              <StatPending value="00%" label="nuevos clientes captados" />
            </div>

            {/* Contraste antes → después (spec §6, formato preferido) */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-card border border-chip-border p-card">
                <SubBlockTitle>Plataforma de plantillas</SubBlockTitle>
                <ul className="mt-3 space-y-2 text-card-body text-on-dark-soft">
                  <li>— Comisión sobre cada venta</li>
                  <li>— Diseño clonado, igual a mil tiendas</li>
                  <li>— Stock separado del sitio</li>
                  <li>— Dependés de sus reglas</li>
                </ul>
              </div>
              <div className="rounded-card border border-accent-tint-border bg-chip-bg p-card">
                <p className="text-eyebrow font-bold uppercase tracking-eyebrow text-accent">
                  El sistema Braszka
                </p>
                <ul className="mt-3 space-y-2 text-card-body text-on-dark">
                  <li>+ Cero comisiones, la venta es tuya</li>
                  <li>+ Diseño único, hecho a tu marca</li>
                  <li>+ Stock conectado en tiempo real</li>
                  <li>+ Es tuyo. Sin peajes ni límites</li>
                </ul>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
