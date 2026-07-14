import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import MetodoSteps from "@/components/sections/MetodoSteps";

/*
 * Sección 3 — El método (spec §4.3).
 * Estado narrativo: REVELACIÓN. El diferencial: no son servicios sueltos, es un
 * ecosistema conectado. El stepper con la línea que se dibuja lo demuestra.
 */
export default function Metodo() {
  return (
    <Section id="metodo" tone="light">
      <Reveal
        as="p"
        className="text-eyebrow font-bold uppercase tracking-eyebrow text-accent"
      >
        El método
      </Reveal>

      <Reveal
        as="h2"
        delay={0.06}
        className="mt-3 max-w-[18ch] text-h2 font-black tracking-tight text-ink"
      >
        Primero encuentro el problema. Después construyo el sistema.
      </Reveal>

      <div className="mt-6 max-w-[60ch] space-y-5 text-lead text-ink-soft">
        <Reveal as="p" delay={0.12}>
          No trabajo con servicios sueltos. Audito tu negocio de punta a punta,
          encuentro el cuello de botella que te está frenando y construyo el
          ecosistema que lo resuelve: identidad, contenido, procesos,
          automatización y medición.
        </Reveal>
        <Reveal as="p" delay={0.18}>
          Todo conectado y trabajando junto —con números reales, no métricas de
          vanidad—. Vos seguís haciendo lo que sabés hacer: tu negocio.
        </Reveal>
      </div>

      <MetodoSteps />
    </Section>
  );
}
