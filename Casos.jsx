import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import Reels from "@/components/sections/Reels";

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

            {/* Reels del sistema — se reproducen en la web (autoplay silenciado
                + botón de sonido). Ver components/sections/Reels.jsx. */}
            <div className="mt-10 border-t border-chip-border pt-6">
              <SubBlockTitle>Reels del sistema</SubBlockTitle>
              <div className="mt-4">
                <Reels />
              </div>
            </div>

            {/* Feed real de SoluRepuestos (captura del perfil) */}
            <figure className="mt-8 overflow-hidden rounded-card-lg border border-chip-border">
              <div className="relative aspect-[4/3] w-full bg-surface sm:aspect-[16/9]">
                <Image
                  src="/solurepuestos-feed.png"
                  alt="Feed de Instagram de SoluRepuestos con reels de vehículos y repuestos"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="bg-chip-bg px-4 py-3 text-card-body text-on-dark-soft">
                Instagram de SoluRepuestos: 17,2 mil seguidores y 78 publicaciones.
              </figcaption>
            </figure>

            {/* Campañas Meta — pendiente de datos reales (spec §6) */}
            <div className="mt-8 border-t border-chip-border pt-6">
              <SubBlockTitle>Campañas Meta</SubBlockTitle>
              <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <StatReal label="conversaciones / mes">
                  <Counter value={200} prefix="+" />
                </StatReal>
                <StatReal label="retorno de la inversión">
                  <Counter value={5} suffix="x" />
                </StatReal>
                <StatReal label="costo por conversación">
                  <Counter value={0.61} decimals={2} prefix="USD " />
                </StatReal>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ---- Caso · Ikena Store ---- */}
        <Reveal>
          <article className="rounded-block bg-ink p-card-lg text-on-dark-soft">
            <CaseBadge>Caso · Ikena Store</CaseBadge>
            <p className="mt-5 max-w-[62ch] text-lead">
              Una tienda de indumentaria que necesitaba orden y presencia. Le
              montamos el sistema completo: contenido que muestra sus prendas, un
              stock ordenado, una web propia y un agente de IA personalizado que
              responde y ordena las consultas.
            </p>

            {/* Preview de la web que le construimos (marco tipo navegador) */}
            <figure className="mt-8 overflow-hidden rounded-card-lg border border-chip-border">
              <div className="flex items-center gap-1.5 bg-chip-bg px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral" aria-hidden="true" />
                <span className="ml-3 text-[11px] font-semibold uppercase tracking-eyebrow text-on-dark-soft">
                  ikenastore.com
                </span>
              </div>
              <div className="relative aspect-[16/11] w-full bg-surface">
                <Image
                  src="/ikena-web.png"
                  alt="Web de Ikena Store que construimos"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  className="object-cover object-top"
                />
              </div>
            </figure>

            {/* Las piezas del sistema (cualitativo, spec §6: sin cifras estimadas) */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  t: "Contenido que vende",
                  d: "Producción y edición que muestran lo mejor de cada prenda.",
                },
                {
                  t: "Stock ordenado",
                  d: "Inventario bajo control, sin contar a mano.",
                },
                {
                  t: "Web propia",
                  d: "Tienda a su marca, lista para vender.",
                },
                {
                  t: "Agente de IA personalizado",
                  d: "Responde consultas y ordena los pedidos, sin frenar la venta.",
                },
              ].map((pieza) => (
                <div
                  key={pieza.t}
                  className="rounded-card border border-chip-border bg-chip-bg p-card"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-display text-card-title font-bold text-on-dark">
                        {pieza.t}
                      </h3>
                      <p className="mt-1 text-card-body text-on-dark-soft">
                        {pieza.d}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://instagram.com/ikenastore"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-card-body font-semibold text-accent"
            >
              Ver Ikena Store en Instagram →
            </a>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
