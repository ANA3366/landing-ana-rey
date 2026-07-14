/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Imágenes optimizadas por defecto (spec §2 / §8). Formatos modernos.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
