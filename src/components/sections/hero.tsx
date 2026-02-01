import React from 'react';
import { ArrowRight, Bolt, ShieldCheck, Zap, History } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-start min-h-[1435px] w-full bg-[#0a0a0c] px-10 py-14 text-[#f5f5f5] font-sans">
      {/* Top Badge */}
      <div className="flex items-center gap-2 mb-4 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
        <span className="text-[12.48px] text-[#ffde7a] font-medium leading-tight">
          🎁 Estuda uma vez, passa com regras válidas por anos.
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="max-w-[1240px] text-center text-[54.4px] font-extrabold leading-[1.1] mb-3 tracking-tight">
        Aprovado no Código à Primeira — Ou <span className="text-[#fdba74]">Seu Dinheiro de Volta</span>
      </h1>

      {/* Subtitle */}
      <p className="max-w-[680px] text-center text-[16px] text-[#a2a2b8] mb-6 leading-[1.5]">
        O método <span className="text-white font-semibold">passo a passo</span> que mais de <span className="text-white font-semibold">1747 portugueses</span> usaram para passar no <span className="text-white font-semibold">IMT em até 14 dias</span> (sem stress, sem decorar sinais e nem pagar mensalidades intermináveis)
      </p>

      {/* YouTube Video Container */}
      <div className="relative w-full max-w-[400px] aspect-[9/16] mb-10 overflow-hidden rounded-[18px] shadow-[0_20px_60px_0_rgba(0,0,0,0.7)] bg-black border border-white/5">
        <iframe
          id="youtube-player"
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/KR-Vg_cTtk0?autoplay=1&mute=0&loop=1&playlist=KR-Vg_cTtk0&playsinline=1&modestbranding=1&rel=0&controls=1&enablejsapi=1"
          title="Highway Hack Instrutor Ivo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Pricing Card */}
      <div className="w-full max-w-[463.5px] p-[32px_25.6px] bg-[#111114] rounded-[24px] shadow-[0_20px_60px_0_rgba(0,0,0,0.7)] border border-white/5 text-center">
        {/* Discount Badge */}
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
          <Bolt className="w-[11px] h-[12.5px] text-[#a2a2b8]" />
          <span className="text-[12.48px] text-[#ffde7a] font-medium uppercase">
            OFERTA LIMITADA -89,12% OFF.
          </span>
        </div>

        {/* Pricing Content */}
        <p className="text-[13.6px] text-[#a2a2b8] mb-1">
          De <del className="text-[#77778a]">275,00€</del> por apenas 3x de
        </p>
        <p className="text-[33.6px] font-extrabold text-[#ffde7a] mb-1">
          9,96€
        </p>
        <p className="text-[13.76px] text-[#22c55e] font-semibold mb-4 flex items-center justify-center gap-1">
          💰 Economize 245,10€
        </p>

        {/* Primary CTA Button */}
        <button className="w-full py-4 px-6 bg-[#22c55e] hover:bg-[#1eb054] transition-all duration-300 rounded-[12px] flex items-center justify-center gap-2 group mb-6 shadow-[0_10px_15px_-3px_rgba(34,197,94,0.3)]">
          <span className="text-[14px] font-extrabold text-[#000000] tracking-tight">
            QUERO COMEÇAR HOJE - ÚLTIMAS VAGAS
          </span>
          <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Trust Badges */}
        <ul className="flex items-center justify-center gap-6 text-[12px] text-[#a2a2b8] font-medium">
          <li className="flex items-center gap-1.5 leading-none">
            <span className="text-[14px]">🛡️</span> Seguro
          </li>
          <li className="flex items-center gap-1.5 leading-none">
            <span className="text-[14px]">⚡</span> Imediato
          </li>
          <li className="flex items-center gap-1.5 leading-none">
            <span className="text-[14px]">⏱️</span> Garantia
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;