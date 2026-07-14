import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import HeroOrbit from "@/components/sections/HeroOrbit";

/*
 * Hero (spec §4.1) — promesa de resultado en 3s + CTA a WhatsApp.
 * Estado narrativo: RECONOCIMIENTO. Se le habla al prospecto, no de Ana.
 * Mobile-first: texto y luego la órbita apilados; en lg, dos columnas.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-section-lg sm:pt-16">
      <Container className="grid items-center gap-hero lg:grid-cols-[1.05fr_0.95fr]">
        {/* Columna de texto */}
        <div>
          <Reveal as="div">
            <span className="inline-block rounded-pill border border-accent-tint-border bg-accent-tint px-3.5 py-1.5 text-eyebrow font-bold uppercase tracking-eyebrow text-accent-tint-ink">
              Un ecosistema, no una agencia de redes
            </span>
          </Reveal>

          <Reveal as="h1" delay={0.06} className="mt-6 text-h1 font-black tracking-tight text-ink">
            Encuentro lo que frena tu negocio y armo el sistema que lo resuelve.
          </Reveal>

          <Reveal
            as="p"
            delay={0.12}
            className="mt-5 font-display text-subtitle font-semibold text-accent"
          >
            De la identidad a la automatización. Un método de punta a punta.
          </Reveal>

          <Reveal as="p" delay={0.18} className="mt-5 max-w-[52ch] text-lead text-ink-soft">
            Branding, identidad, contenido, procesos, automatización y auditorías
            trabajando como un solo ecosistema —con números reales, no métricas de
            vanidad—. Para negocios de servicios y ecommerce que ya venden y
            quieren vender más.
          </Reveal>

          <Reveal delay={0.24} className="mt-8">
            <CTAButton section="hero">Quiero mi sistema →</CTAButton>
          </Reveal>
        </div>

        {/* Columna de la órbita */}
        <Reveal delay={0.15} y={0} className="mt-4 lg:mt-0">
          <HeroOrbit />
        </Reveal>
      </Container>
    </section>
  );
}
