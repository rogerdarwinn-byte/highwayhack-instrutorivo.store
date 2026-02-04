"use client";

import React from 'react';
import { ArrowRight, Bolt, ShieldCheck, Zap, Clock } from 'lucide-react';
import { useMetaPixel } from "@adkit.so/meta-pixel-next";

const HeroSection = () => {
  const metaPixel = useMetaPixel();

  const handleCTA = () => {
    metaPixel.track("InitiateCheckout", {
      content_name: "Highway Hack Method",
      value: 29.88, // 3x 9.96
      currency: "EUR",
    });
  };

  return (
    <section className="relative flex flex-col items-center pt-[56px] pb-[56px] px-[20px] md:px-[40px] bg-[#05070a] overflow-hidden">
      {/* Top Promotional Badge */}
      <div className="flex items-center gap-2 mb-[16px] px-[12px] py-[4px] bg-[rgba(255,255,255,0.03)] rounded-full border border-[rgba(255,255,255,0.05)]">
        <span className="text-[12.48px] text-[#ffde7a] font-medium leading-[1.5]">
          🎁 Estuda uma vez, passa com regras válidas por anos.
        </span>
      </div>

      {/* Main Headline */}
        <h1 className="max-w-[800px] text-center text-[#f5f5f5] text-[32px] md:text-[54.4px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-[12px] text-balance">
          Aprovado no Código à Primeira — Ou <span className="text-[#ffde7a]">o Teu Dinheiro de Volta</span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-[480px] text-center text-[#a2a2b8] text-[16px] leading-[1.5] mb-[24px]">
          O método <span className="text-[#f5f5f5] font-semibold">passo a passo</span> que mais de <span className="text-[#f5f5f5] font-semibold">1747 portugueses</span> usaram para passar no <span className="text-[#f5f5f5] font-semibold">IMT em até 14 dias</span> (sem stress, sem decorar sinais nem pagar mensalidades intermináveis)
        </p>

      {/* YouTube Shorts Video Embed */}
      <div className="relative w-full max-w-[400px] aspect-[9/16] mt-[24px] mb-[40px] bg-black rounded-[18px] shadow-[rgba(0,0,0,0.7)_0px_20px_60px_0px] overflow-hidden border border-[#1e293b]">
        <iframe
          id="youtube-player"
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/KR-Vg_cTtk0?autoplay=1&mute=0&loop=1&playlist=KR-Vg_cTtk0&playsinline=1&modestbranding=1&rel=0&controls=1&enablejsapi=1"
          title="Highway Hack Preview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Pricing Block */}
      <div className="w-full max-w-[463.5px] p-[32px] md:pt-[32px] md:pb-[32px] md:px-[25.6px] bg-[#0c0f16] border border-[#1e293b] rounded-[24px] shadow-[rgba(0,0,0,0.7)_0px_20px_60px_0px] text-center">
        <div className="inline-flex items-center gap-2 mb-[16px] px-[12px] py-[4px] bg-[rgba(255,255,255,0.03)] rounded-full border border-[#1e293b]">
          <Bolt className="w-[12px] h-[12px] text-[#a2a2b8]" />
            <span className="text-[12.48px] text-[#ffde7a] font-semibold">OFERTA LIMITADA -89,12% DE DESCONTO.</span>
        </div>

        <p className="text-[#a2a2b8] text-[13.6px] mb-[4.8px]">
          De <del className="text-[#77778a]">275,00€</del> por apenas 3x de
        </p>

        <p className="text-[#ffde7a] text-[33.6px] md:text-[42px] font-extrabold mb-[3.2px]">
          9,96€
        </p>

          <p className="text-[#22c55e] text-[14px] font-bold mb-[24px]">
            💰 Poupe 245,10€
          </p>

            <a 
              href="#checkout"
              onClick={handleCTA}
              className="w-full h-[56px] inline-flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#1eb354] text-[#0507a] text-[15px] font-extrabold uppercase rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-1 mb-[20px] px-4 animate-pulse-slow"
            >
            <span>QUERO COMEÇAR HOJE — ÚLTIMAS VAGAS</span>
            <ArrowRight className="w-5 h-5" />
          </a>

        <ul className="flex items-center justify-center gap-[24px] text-[12px] text-[#a2a2b8]">
          <li className="flex items-center gap-1.5">
            <ShieldCheck className="w-[14px] h-[14px] text-[#22c55e]" />
            <span>Seguro</span>
          </li>
          <li className="flex items-center gap-1.5">
            <Zap className="w-[14px] h-[14px] text-[#22c55e]" />
            <span>Imediato</span>
          </li>
          <li className="flex items-center gap-1.5">
            <Clock className="w-[14px] h-[14px] text-[#22c55e]" />
            <span>Garantia</span>
          </li>
        </ul>
      </div>
      
      {/* Background radial gradient decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#22c55e]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#facc15]/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default HeroSection;