import React from 'react';
import { AlertTriangle, Check, ArrowRight } from 'lucide-react';

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-[#0a0a0c] font-sans">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4 leading-tight">
            Cansado dos Problemas?
          </h2>
          <p className="text-[18px] text-[#9ca3af] max-w-[700px] mx-auto text-balance">
            Se alguma destas situações é tua, o problema não é inteligência. É falta de método e direção.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Problem Card */}
          <div className="bg-[#111114] border border-[#1f2937] rounded-[16px] p-8">
            <h3 className="text-[20px] font-semibold text-white mb-6 flex items-center gap-2">
              O que mais reprova
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="mt-1 shrink-0">
                  <AlertTriangle className="w-5 h-5 text-[#ef4444]" />
                </div>
                <span className="text-[16px] text-[#9ca3af] leading-relaxed">
                  Interpreta mal perguntas e perde detalhes importantes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 shrink-0">
                  <AlertTriangle className="w-5 h-5 text-[#ef4444]" />
                </div>
                <span className="text-[16px] text-[#9ca3af] leading-relaxed">
                  Confunde exceções e casos especiais que o IMT adora cobrar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 shrink-0">
                  <AlertTriangle className="w-5 h-5 text-[#ef4444]" />
                </div>
                <span className="text-[16px] text-[#9ca3af] leading-relaxed">
                  Estuda horas, mas não sabe se está a focar no que realmente cai.
                </span>
              </li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className="bg-[#111114] border border-[#1f2937] rounded-[16px] p-8">
            <h3 className="text-[20px] font-semibold text-white mb-6 flex items-center gap-2">
              Como o método corrige isso
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="mt-1 shrink-0">
                  <Check className="w-5 h-5 text-[#22c55e]" />
                </div>
                <span className="text-[16px] text-[#9ca3af] leading-relaxed">
                  Transforma o conteúdo num sistema com ordem clara de estudo.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 shrink-0">
                  <Check className="w-5 h-5 text-[#22c55e]" />
                </div>
                <span className="text-[16px] text-[#9ca3af] leading-relaxed">
                  Mostra padrões de perguntas que o IMT repete o tempo todo.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 shrink-0">
                  <Check className="w-5 h-5 text-[#22c55e]" />
                </div>
                <span className="text-[16px] text-[#9ca3af] leading-relaxed">
                  Organiza armadilhas reais para chegarem familiares no dia do exame.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="#pricing"
            className="group flex items-center justify-center gap-2 bg-[#22c55e] text-[#000000] font-bold text-[16px] md:text-[18px] py-4 px-8 rounded-[12px] w-full max-w-[500px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cta-shadow uppercase tracking-tight"
          >
            QUERO PASSAR NO EXAME AGORA
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;