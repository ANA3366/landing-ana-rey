import Header from "@/components/site/Header";
import Hero from "@/components/sections/Hero";
import Objeciones from "@/components/sections/Objeciones";
import Problema from "@/components/sections/Problema";
import Metodo from "@/components/sections/Metodo";
import Modulos from "@/components/sections/Modulos";
import Casos from "@/components/sections/Casos";
import Pauta from "@/components/sections/Pauta";
import ParaQuien from "@/components/sections/ParaQuien";
import SobreMi from "@/components/sections/SobreMi";
import Faq from "@/components/sections/Faq";
import CtaFinal from "@/components/sections/CtaFinal";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Objeciones />
        <Problema />
        <Metodo />
        <Modulos />
        <Casos />
        <Pauta />
        <ParaQuien />
        <SobreMi />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
