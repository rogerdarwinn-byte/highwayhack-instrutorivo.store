import React from 'react';

/**
 * BonusesSection Component
 * 
 * Target: "Bónus Inclusos" section with three grid-based cards.
 * Theme: Dark (#0A0A0C background, #111114 card background).
 * Accuracy: Pixel-perfect replication of borders, spacing, and typography based on computed styles.
 */

const BonusesSection: React.FC = () => {
  const bonuses = [
    {
      id: 1,
      tag: "Bónus 1",
      title: "Checklist “PASSO A PASSO IMT”",
      description: "Lista direta dos temas mais confusos e que mais reprovam. Usa‑a na semana do exame para garantir que nada ficou de fora."
    },
    {
      id: 2,
      tag: "Bónus 2",
      title: "Plano de Treino de 30 dias",
      description: "Roteiro diário para seguires e pedires o teu exame após 29 dias. Marca os dias concluídos e vê o progresso a acontecer."
    },
    {
      id: 3,
      tag: "Bónus 3",
      title: "Atualizações do PDF até 2026",
      description: "Recebes a nova version do material com já as atualizações do IMT para 2026 sem pagar nada a mais."
    }
  ];

  return (
    <section className="py-[80px] bg-[#0A0A0C] flex flex-col items-center overflow-hidden">
      <div className="container max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[36px] font-bold text-white mb-4 leading-[1.2]">
            Bónus Inclusos
          </h2>
          <p className="text-[18px] text-[#9CA3AF] max-w-[800px] mx-auto leading-[1.6]">
            Para além do Método passo a passo principal, recebes extras pensados para acelerar a revisão e organizar o teu plano até ao dia do exame.
          </p>
        </div>

        {/* Bonus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {bonuses.map((bonus) => (
            <div 
              key={bonus.id}
              className="relative p-8 rounded-[16px] bg-[#111114] border border-dashed border-[#1F2937] flex flex-col h-full min-h-[220px] transition-all duration-300 hover:border-[#22C55E]/30"
            >
              {/* Bonus Pill Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-[#FACC15] text-[#000000] text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-sm">
                  {bonus.tag}
                </span>
              </div>

              {/* Card Content */}
              <h3 className="text-[20px] font-semibold text-white mb-4 pr-16 leading-[1.3]">
                {bonus.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#9CA3AF]">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="group relative flex items-center justify-center gap-3 bg-[#22C55E] hover:bg-[#1eb054] text-[#000000] font-bold text-[16px] py-[14px] px-[32px] rounded-[12px] transition-all duration-300 cta-shadow w-full md:w-auto uppercase tracking-wide">
            GARANTIR MINHA VAGA AGORA
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .cta-shadow {
          box-shadow: 0 10px 15px -3px rgba(34, 197, 94, 0.3);
        }
      `}</style>
    </section>
  );
};

export default BonusesSection;