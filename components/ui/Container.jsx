/*
 * Contenedor centrado con ancho máximo y padding lateral desde tokens.
 * `narrow` para texto largo / FAQ (--container-narrow).
 */
export default function Container({ children, narrow = false, className = "" }) {
  const max = narrow ? "max-w-container-narrow" : "max-w-container";
  return (
    <div className={`mx-auto w-full ${max} px-gutter ${className}`}>
      {children}
    </div>
  );
}
