import "../tokens.css";
import "./globals.css";

/*
 * Fuentes: se cargan desde Google Fonts con preconnect + display=swap
 * (mismo import declarado en tokens.json → fonts.googleFontsImport).
 * tokens.css ya define --font-display / --font-body con los nombres literales
 * de estas familias, así que resuelven sin ningún cableado extra.
 * (next/font no tiene "Hanken Grotesque" en su lista embebida.)
 */
const GOOGLE_FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Hanken+Grotesque:wght@400;500;600;700&display=swap";

export const metadata = {
  metadataBase: new URL("https://anarey.com"),
  title: "Ana Rey — Un ecosistema, no una agencia de redes",
  description:
    "Encuentro lo que frena tu negocio y armo el sistema que lo resuelve. De la identidad a la automatización, un método de punta a punta con números reales.",
  openGraph: {
    title: "Ana Rey — Un ecosistema, no una agencia de redes",
    description:
      "Encuentro lo que frena tu negocio y armo el sistema que lo resuelve. Un método de punta a punta con números reales.",
    type: "website",
    locale: "es_AR",
    siteName: "Ana Rey",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#FAFAF7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={GOOGLE_FONTS_HREF} />
      </head>
      <body>{children}</body>
    </html>
  );
}
