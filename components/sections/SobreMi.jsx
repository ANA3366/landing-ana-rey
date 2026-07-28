import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/*
 * Sección 7 — Sobre mí (spec §4.9).
 * Marca personal: primera persona, con foto. Corto, humano, creíble. Es el
 * ancla anti-agencia (un solo interlocutor, todo a nombre del cliente — §1).
 * Mobile-first: foto arriba, texto debajo; en lg pasa a dos columnas.
 *
 * Foto real en `public/ana.jpg`, optimizada por next/image (spec §2).
 */

function FotoAna() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-block border border-border bg-surface">
      <Image
        src="/ana.jpg"
        alt="Ana Rey"
        fill
        sizes="(max-width: 1024px) 360px, 40vw"
        className="object-cover object-top"
        priority={false}
      />
    </div>
  );
}

export default function SobreMi() {
  return (
    <Section id="sobre-mi" tone="light">
      <div className="grid grid-cols-1 items-center gap-hero lg:grid-cols-[0.8fr_1.2fr]">
        {/* Columna de la foto */}
        <Reveal y={0} className="mx-auto w-full max-w-[360px] lg:mx-0">
          <FotoAna />
        </Reveal>

        {/* Columna de texto */}
        <div>
          <Reveal
            as="p"
            className="text-eyebrow font-bold uppercase tracking-eyebrow text-accent"
          >
            Sobre mí
          </Reveal>

          <Reveal
            as="h2"
            delay={0.06}
            className="mt-3 text-h2 font-black tracking-tight text-ink"
          >
            Ana Rey
          </Reveal>

          <Reveal
            as="p"
            delay={0.12}
            className="mt-5 max-w-[56ch] text-lead text-ink-soft"
          >
            Soy Ana. Convierto la presencia digital de negocios de servicios y
            ecommerce en un sistema que vende, sin que tengan que vivir pendientes
            del celular.
          </Reveal>

          <Reveal
            as="p"
            delay={0.18}
            className="mt-4 max-w-[56ch] text-lead text-ink-soft"
          >
            Hago que todo funcione junto —marca, web, campañas y automatizaciones—
            y que cada peso invertido se pueda medir, para que vos puedas volver a
            enfocarte en lo que sabés hacer, tu negocio.
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
