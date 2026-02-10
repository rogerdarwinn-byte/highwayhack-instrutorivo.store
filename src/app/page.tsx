"use client";

import { Suspense } from "react";
import HeroSection from "@/components/sections/hero";
// import ReviewsCarousel from "@/components/sections/reviews-carousel"; // TEMPORARIO: removido para aprovacao Digistore
import SegredoRevelado from "@/components/sections/segredo-revelado";
import BonusInclusos from "@/components/sections/bonus-inclusos";
import ProblemasSolucoes from "@/components/sections/problemas-solucoes";
import PraticaFuncional from "@/components/sections/pratica-funcional";
import GarantiaSection from "@/components/sections/garantia";
import PricingTable from "@/components/sections/pricing-table";
// import HistoriasSucesso from "@/components/sections/historias-sucesso"; // TEMPORARIO: removido para aprovacao Digistore
import FAQSection from "@/components/sections/faq";
import Partners from "@/components/sections/partners";
import Footer from "@/components/sections/footer";
import SalesNotification from "@/components/sections/sales-notification";

function HomeContent() {
  return (
    <main className="min-h-screen bg-[#05070a]">
      <HeroSection />
        {/* <ReviewsCarousel /> TEMPORARIO: removido para aprovacao Digistore */}
        <SegredoRevelado />
      <BonusInclusos />
      <ProblemasSolucoes />
      <PraticaFuncional />
      <GarantiaSection />
        <PricingTable />
        {/* <HistoriasSucesso /> TEMPORARIO: removido para aprovacao Digistore */}
        <FAQSection />
      <Partners />
      <Footer />
      <SalesNotification />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#05070a]" />}>
      <HomeContent />
    </Suspense>
  );
}
