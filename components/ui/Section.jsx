import Container from "@/components/ui/Container";

/*
 * Envoltura de sección: ritmo vertical (--space-section) + variante de fondo.
 * tone:
 *  - light   → fondo base crema
 *  - surface → superficie clara (para diferenciar bloques contiguos)
 *  - dark    → fondo ink + texto claro (Problema, Casos, CTA final)
 * Por defecto trae su propio Container; `bare` lo omite si la sección arma
 * su propio layout.
 */
const TONES = {
  light: "bg-bg text-ink-soft",
  surface: "bg-surface text-ink-soft",
  dark: "bg-ink text-on-dark-soft",
};

export default function Section({
  children,
  id,
  tone = "light",
  narrow = false,
  bare = false,
  className = "",
}) {
  return (
    <section id={id} className={`py-section ${TONES[tone]} ${className}`}>
      {bare ? children : <Container narrow={narrow}>{children}</Container>}
    </section>
  );
}
