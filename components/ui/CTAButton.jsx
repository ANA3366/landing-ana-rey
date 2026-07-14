import { waLink } from "@/lib/site";

/*
 * Botón CTA a WhatsApp. Abre wa.me con el mensaje de la `section` de origen.
 * Variantes:
 *  - solid  (default): pill naranja, para el CTA principal.
 *  - outline: para fondos oscuros / CTA secundario.
 *  - ghost  : compacto, para el header.
 * Micro-interacción de hover (lift + sombra) via tokens; respeta reduced-motion
 * por la regla global de globals.css.
 */
const VARIANTS = {
  solid:
    "bg-accent text-on-dark hover:bg-accent-deep hover:-translate-y-[2px] hover:shadow-card-hover",
  outline:
    "border border-chip-border text-on-dark hover:bg-chip-bg hover:-translate-y-[2px]",
  ghost:
    "bg-accent text-on-dark hover:bg-accent-deep",
};

export default function CTAButton({
  section,
  children,
  variant = "solid",
  className = "",
  size = "md",
}) {
  const pad = size === "sm" ? "px-5 py-2.5" : "px-7 py-3.5";
  return (
    <a
      href={waLink(section)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-pill font-display text-button font-bold tracking-tight transition duration-ui ease-reveal ${pad} ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
