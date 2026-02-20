"use client";

import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Clock } from 'lucide-react';

const PricingTable = () => {
  const includes = [
    { name: 'Material de Estudo Completo', price: '97,00€' },
    { name: 'Plano de Treino de 30 dias', price: '67,00€' },
    { name: 'Armadilhas do IMT (25 armadilhas)', price: '47,00€' },
    { name: 'Checklist "PASSO A PASSO IMT"', price: '27,00€' },
    { name: 'Atualizações gratuitas 2026', price: '37,00€' },
      { name: 'Garantia incondicional de 7 dias', price: '💰 Grátis', isFree: true },
  ];

  return (
    <section id="pricing" className="py-20 px-5 bg-[#05070a]">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-white text-[32px] font-bold leading-tight mb-4">
            Oportunidade Única
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-base leading-relaxed">
            Reprovar custa taxas, tempo e novas aulas. Ter um método claro custa menos e continua contigo mesmo depois de passares.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-[500px] mx-auto bg-[#0c0f16] border border-[#1e293b] rounded-[24px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          {/* Price Header */}
          <div className="mb-8">
            <p className="text-[#94a3b8] text-[14px] mb-1">De <del>275,00€</del> por apenas</p>
            <p className="text-[#facc15] text-[42px] font-extrabold leading-none mb-2">
              29,70€
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="bg-[#22c55e]/10 text-[#22c55e] text-[11px] font-bold px-2 py-0.5 rounded-full border border-[#22c55e]/30">-89,12%</span>
              <span className="text-[#94a3b8] text-[12px]">Poupe 245,10€</span>
            </div>
          </div>

          {/* Feature List */}
          <ul className="text-left space-y-4 mb-8">
            {includes.map((item, index) => (
              <li key={index} className="flex items-center justify-between border-b border-[#1e293b] pb-3 last:border-0">
                <div className="flex items-center gap-3">
                  {item.isFree ? (
                    <ShieldCheck className="w-4 h-4 text-[#22c55e]" />
                  ) : (
                    <Check className="w-4 h-4 text-[#22c55e]" />
                  )}
                  <span className="text-white text-sm font-medium">{item.name}</span>
                </div>
                <div className="text-right">
                  {item.isFree ? (
                    <span className="text-[#22c55e] text-sm font-bold">{item.price}</span>
                  ) : (
                    <del className="text-[#77778a] text-xs">{item.price}</del>
                  )}
                </div>
              </li>
            ))}
          </ul>

            {/* CTA Button */}
            <a 
              href="https://www.checkout-ds24.com/product/670107"
                suppressHydrationWarning
              className="w-full bg-[#22c55e] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-200 text-[#05070a] font-bold py-4 px-6 rounded-full flex items-center justify-center gap-2 text-sm uppercase mb-3 transform hover:-translate-y-0.5 animate-pulse-slow"
            >
              GARANTIR O MEU ACESSO COM DESCONTO AGORA
              <ArrowRight className="w-4 h-4" />
            </a>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-6 text-[11px] text-[#94a3b8] uppercase font-bold tracking-wider">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-white/40" />
              Seguro
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-white/40" />
              Imediato
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-white/40" />
              Garantia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
