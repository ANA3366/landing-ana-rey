import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FlipCard from "@/components/sections/FlipCard";

/*
 * Sección de objeciones — desarma las dudas del prospecto de frente.
 * Ubicada después del bloque de promesa (Hero) y antes del Problema.
 * Grilla de 4 flip cards: frente = objeción, dorso = respuesta honesta.
 */
const OBJECIONES = [
  {
    front: "Ya me quemé con una agencia.",
    back: "Por eso empiezo por encontrar qué falló, no por venderte lo mismo de nuevo.",
  },
  {
    front: "No tengo tiempo para esto.",
    back: "Justamente por eso. Tu parte es una llamada al mes; del resto me ocupo yo. Si te pido más tiempo del que te devuelvo, algo hice mal.",
  },
  {
    front: "Seguro es carísimo.",
    back: "Depende de qué te falte, no de un paquete inflado. Por eso primero hablamos y vemos qué necesitás. Suele ser menos de lo que pensás.",
  },
  {
    front: "¿Y si a mi negocio no le sirve?",
    back: "Puede pasar, y si lo veo, te lo digo. En la primera llamada miro tu caso concreto: si no es para vos, te lo digo ahí y no perdés nada.",
  },
];

export default function Objeciones() {
  return (
    <Section id="objeciones" tone="light">
      <Reveal
        as="h2"
        className="max-w-[18ch] text-h2 font-black tracking-tight text-ink"
      >
        Ya sé lo que estás pensando.
      </Reveal>
      <Reveal
        as="p"
        delay={0.06}
        className="mt-4 max-w-[54ch] text-lead text-ink-soft"
      >
        Y probablemente tengas razón en dudar. Por eso te lo digo de frente:
      </Reveal>

      <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {OBJECIONES.map((o, i) => (
          <Reveal
            as="li"
            key={o.front}
            delay={0.08 + (i % 2) * 0.06}
            className="h-full"
          >
            <FlipCard front={o.front} back={o.back} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
