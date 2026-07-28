import Container from "@/components/ui/Container";
import Logo from "@/components/site/Logo";
import { waLink } from "@/lib/site";

/*
 * Footer. Cierra sobrio, sin ruido: marca + tagline + un último acceso a
 * WhatsApp. Fondo oscuro para continuar con el CTA final sin costura.
 */
export default function Footer() {
  return (
    <footer className="border-t border-chip-border bg-ink">
      <Container className="flex flex-col items-center gap-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <Logo onDark />
          <p className="mt-3 text-card-body text-on-dark-soft">
            Marketing con sistema · © 2026
          </p>
        </div>

        <a
          href={waLink("header")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-card-body font-semibold text-on-dark transition-colors duration-ui hover:text-accent"
        >
          WhatsApp →
        </a>
      </Container>
    </footer>
  );
}
