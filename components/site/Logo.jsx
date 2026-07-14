/*
 * Marca "ana rey." con el ícono de órbita (eco del sistema: un núcleo + algo
 * que orbita). El punto final es el acento — mismo gesto que la marca en las
 * capturas de referencia.
 */
export default function Logo({ onDark = false, className = "" }) {
  const ink = onDark ? "text-on-dark" : "text-ink";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle
          cx="13"
          cy="13"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
          className={ink}
          opacity="0.35"
        />
        <circle cx="13" cy="13" r="4.5" fill="currentColor" className={ink} />
        <circle cx="23" cy="9" r="2.5" fill="var(--color-accent)" />
      </svg>
      <span
        className={`font-display text-[19px] font-bold tracking-tight ${ink}`}
      >
        ana rey<span className="text-accent">.</span>
      </span>
    </span>
  );
}
