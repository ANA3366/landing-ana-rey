import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/*
 * Sección 2 — El problema (spec §4.2).
 * Estado narrativo: TENSIÓN. Espejo del cliente: que se sienta leído antes de
 * que le vendan nada. Fondo oscuro, reveals escalonados, y el remate lleva a la
 * revelación del sistema ("Te falta un sistema").
 */
export default function Problema() {
  return (
    <Section id="problema" tone="dark">
      <Reveal as="h2" className="max-w-[16ch] text-h2 font-black tracking-tight text-on-dark">
        Le ponés todo. Y a fin de mes, las ventas no aparecen.
      </Reveal>

      <div className="mt-8 max-w-[62ch] space-y-6 text-lead">
        <Reveal as="p" delay={0.06}>
          No es falta de esfuerzo. Grabás, editás, posteás, respondés mensajes… y
          el negocio no crece al ritmo que trabajás.
        </Reveal>

        <Reveal as="p" delay={0.12}>
          Tu feed no muestra ni la mitad de lo bueno que es lo que ofrecés. Las
          campañas —si las tenés— no terminan de traer ventas. Te llegan
          consultas, te ilusionás, y se apagan sin comprar. Y todo eso te come
          horas que deberías estar usando para atender tu negocio.
        </Reveal>

        <Reveal as="p" delay={0.18}>
          Si vendés servicios, tu tiempo no alcanza para todo. Si tenés un
          ecommerce, te entran visitas pero no compras. En los dos casos el
          problema es el mismo:{" "}
          <strong className="font-semibold text-on-dark">
            estás haciendo marketing suelto. Y lo suelto no rinde.
          </strong>
        </Reveal>
      </div>

      {/* Remate: pivote hacia la revelación del sistema */}
      <Reveal delay={0.24} className="mt-12">
        <p className="text-subtitle font-semibold text-on-dark-soft">
          No es tu producto. No sos vos.
        </p>
        <p className="mt-1 font-display text-h2 font-black tracking-tight text-accent">
          Te falta un sistema.
        </p>
      </Reveal>
    </Section>
  );
}
