import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import Logo from "@/components/site/Logo";

/*
 * Header sticky. Sobrio: logo + único CTA a WhatsApp.
 * Fondo semitransparente con blur para que el contenido pase por debajo sin
 * ensuciar (sticky liviano, sin JS de scroll).
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg">
      {/* Fondo sólido: el sitio alterna secciones claras y oscuras; con
          transparencia el logo se pierde sobre los fondos ink. */}
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" aria-label="Ana Rey — inicio" className="rounded-sm">
          <Logo />
        </a>
        <CTAButton section="header" variant="ghost" size="sm">
          WhatsApp
        </CTAButton>
      </Container>
    </header>
  );
}
