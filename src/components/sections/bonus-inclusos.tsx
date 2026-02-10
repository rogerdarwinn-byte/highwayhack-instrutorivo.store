"use client";

import React from 'react';

/**
 * BonusInclusos component
 * 
 * This section features three cards with gold-styled "Bónus" pills, 
 * describing the Checklist, Training Plan, and PDF Updates.
 * It includes a large green primary CTA button at the bottom.
 */
const BonusInclusos: React.FC = () => {
  const bonuses = [
    {
      id: 1,
      title: 'Checklist “PASSO A PASSO IMT”',
      description: 'Lista direta dos temas mais confusos e que mais reprovam. Usa‑a na semana do exame para garantir que nada ficou de fora.',
      pill: 'Bónus 1',
    },
    {
      id: 2,
      title: 'Plano de Treino de 30 dias',
      description: 'Roteiro diário para seguires e pedires o teu exame após 29 dias. Marca os dias concluídos e vê o progresso a acontecer.',
      pill: 'Bónus 2',
    },
    {
      id: 3,
      title: 'Atualizações do PDF até 2026',
      description: 'Recebes a nova versão do material com já as atualizações do IMT para 2026 sem pagar nada a mais.',
      pill: 'Bónus 3',
    },
  ];

  return (
    <section className="py-[80px] px-5 bg-[#05070a]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold tracking-tight text-white mb-4">
            Bónus Inclusos
          </h2>
          <p className="text-[18px] text-[#94a3b8] max-w-[800px] mx-auto leading-relaxed">
            Para além do Método passo a passo principal, recebes extras pensados para acelerar a revisão e organizar o teu plano até ao dia do exame.
          </p>
        </div>

        {/* Bonus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {bonuses.map((bonus) => (
            <div 
              key={bonus.id}
              className="relative bg-[#0c0f16] border border-dashed border-[#facc15] rounded-[16px] p-6 pt-10 flex flex-col items-start transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="absolute -top-3 left-6 inline-flex items-center px-3 py-1 rounded-full bg-[#161b22] border border-[#facc15] text-[#facc15] text-[12px] font-bold">
                {bonus.pill}
              </span>
              <h3 className="text-[20px] font-semibold text-white mb-4 leading-tight">
                {bonus.title}
              </h3>
              <p className="text-[16px] text-[#94a3b8] leading-relaxed">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="flex justify-center">
          <a 
            href="#pricing"
            className="group relative flex items-center justify-center gap-2 bg-[#22c55e] text-[#05070a] text-[16px] font-bold uppercase tracking-wide py-4 px-10 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:-translate-y-0.5"
          >
            GARANTIR A MINHA VAGA AGORA
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BonusInclusos;
