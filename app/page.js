import Header from "@/components/site/Header";
import Hero from "@/components/sections/Hero";
import Problema from "@/components/sections/Problema";
import Metodo from "@/components/sections/Metodo";
import Modulos from "@/components/sections/Modulos";
import Casos from "@/components/sections/Casos";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problema />
        <Metodo />
        <Modulos />
        <Casos />
        {/* Próximas secciones: Para quién, Sobre mí, FAQ, CTA final, Footer. */}
      </main>
    </>
  );
}
