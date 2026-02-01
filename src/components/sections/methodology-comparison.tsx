import React from 'react';
import { Check, X } from 'lucide-react';

/**
 * MethodologyComparison Component
 * 
 * Clones the "Segredo Revelado" section with deep dark theme styling.
 * Featuring a two-column grid comparison between "Serve para ti se..." and "Não é para ti se...".
 */
export default function MethodologyComparison() {
  return (
    <section className="py-[80px] bg-[#0A0A0C] flex flex-col items-center overflow-hidden">
      <div className="container px-6 max-w-[1200px] w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[36px] font-bold text-white mb-3">
            Segredo Revelado
          </h2>
          <p className="text-[18px] text-[#9CA3AF] max-w-[600px] mx-auto leading-relaxed">
            A mesma <span className="font-bold text-white">técnica</span> que os aprovados usam para <strong className="font-bold text-white">passar no IMT</strong>.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card: Serve para ti se... */}
          <div className="bg-[#111114] border border-[#1F2937] p-8 md:p-10 rounded-[16px] transition-all hover:border-[#22C55E]/30">
            <h3 className="text-[20px] font-semibold text-white mb-6">
              Serve para ti se…
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-[#22C55E]" strokeWidth={3} />
                </div>
                <span className="text-[16px] text-[#F5F5F5] leading-snug">
                  Estás a começar do zero e não sabes por onde pegar no Código da Estrada.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-[#22C55E]" strokeWidth={3} />
                </div>
                <span className="text-[16px] text-[#F5F5F5] leading-snug">
                  Já reprovaste 1 ou mais vezes e precisas de entender onde estás a errar.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-[#22C55E]" strokeWidth={3} />
                </div>
                <span className="text-[16px] text-[#F5F5F5] leading-snug">
                  Tens pouco tempo por dia e precisas de um plano simples de seguir.
                </span>
              </li>
            </ul>
          </div>

          {/* Card: Não é para ti se... */}
          <div className="bg-[#111114] border border-[#1F2937] p-8 md:p-10 rounded-[16px] transition-all hover:border-[#EF4444]/30">
            <h3 className="text-[20px] font-semibold text-white mb-6">
              Não é para ti se…
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <X className="w-5 h-5 text-[#EF4444]" strokeWidth={3} />
                </div>
                <span className="text-[16px] text-[#F5F5F5] leading-snug">
                  Queres atalhos ilegais ou &ldquo;macetes&rdquo; para enganar o exame.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <X className="w-5 h-5 text-[#EF4444]" strokeWidth={3} />
                </div>
                <span className="text-[16px] text-[#F5F5F5] leading-snug">
                  Não estás disposto a separar pelo menos 20–30 minutos por dia.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <X className="w-5 h-5 text-[#EF4444]" strokeWidth={3} />
                </div>
                <span className="text-[16px] text-[#F5F5F5] leading-snug">
                  Preferes continuar só a decorar testes sem entender as perguntas.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-4">
          <a 
            href="#pricing" 
            className="bg-[#22C55E] text-[#000000] font-bold text-[16px] py-4 px-8 rounded-[12px] uppercase tracking-wide hover:bg-[#1eb054] transition-all transform hover:scale-105 active:scale-95 cta-shadow flex items-center gap-2"
          >
            QUERO MEU ACESSO COM DESCONTO
          </a>
        </div>
      </div>
    </section>
  );
}