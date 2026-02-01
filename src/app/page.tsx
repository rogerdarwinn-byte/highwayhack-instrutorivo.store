import HeroSection from "@/components/sections/hero";
import ReviewsCarousel from "@/components/sections/reviews-carousel";
import SegredoRevelado from "@/components/sections/segredo-revelado";
import BonusInclusos from "@/components/sections/bonus-inclusos";
import ProblemasSolucoes from "@/components/sections/problemas-solucoes";
import PraticaFuncional from "@/components/sections/pratica-funcional";
import GarantiaSection from "@/components/sections/garantia";
import PricingTable from "@/components/sections/pricing-table";
import HistoriasSucesso from "@/components/sections/historias-sucesso";
import FAQSection from "@/components/sections/faq";
import Partners from "@/components/sections/partners";
import Footer from "@/components/sections/footer";
import SalesNotification from "@/components/sections/sales-notification";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070a]">
      <HeroSection />
      <ReviewsCarousel />
      <SegredoRevelado />
      <BonusInclusos />
      <ProblemasSolucoes />
      <PraticaFuncional />
      <GarantiaSection />
      <PricingTable />
      <HistoriasSucesso />
      <FAQSection />
      <Partners />
      <Footer />
      <SalesNotification />
    </main>
  );
}
