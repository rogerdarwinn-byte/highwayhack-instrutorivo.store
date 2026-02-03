import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

/**
 * ProblemasSolucoes Component
 * Clones the "Cansado dos Problemas?" section with a side-by-side comparison
 * of pain points versus the method's solutions.
 */
export default function ProblemasSolucoes() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-10 bg-[#05070a]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[26px] md:text-[40px] font-bold text-white mb-3 md:mb-4 leading-tight">
            Cansado dos Problemas?
          </h2>
          <p className="text-[#94a3b8] text-[14px] md:text-lg max-w-2xl mx-auto px-2">
            Se alguma destas situações é tua, o problema não é inteligência. É falta de método e direção.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          {/* Pain Points Card */}
          <div className="bg-[#0c0f16] border border-[#1e293b] rounded-[16px] p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-2">
              O que mais reprova
            </h3>
            <ul className="space-y-4 md:space-y-5">
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-[#facc15] w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-[#94a3b8] text-[14px] md:text-[16px] leading-relaxed">
                  Interpreta mal perguntas e perde detalhes importantes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-[#facc15] w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-[#94a3b8] text-[14px] md:text-[16px] leading-relaxed">
                  Confunde exceções e casos especiais que o IMT adora cobrar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="text-[#facc15] w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-[#94a3b8] text-[14px] md:text-[16px] leading-relaxed">
                  Estuda horas, mas não sabe se está a focar no que realmente cai.
                </span>
              </li>
            </ul>
          </div>

          {/* Solutions Card */}
          <div className="bg-[#0c0f16] border border-[#1e293b] rounded-[16px] p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-2">
              Como o método corrige isso
            </h3>
            <ul className="space-y-4 md:space-y-5">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#22c55e] w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-[#94a3b8] text-[14px] md:text-[16px] leading-relaxed">
                  Transforma o conteúdo num sistema com ordem clara de estudo.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#22c55e] w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-[#94a3b8] text-[14px] md:text-[16px] leading-relaxed">
                  Mostra padrões de perguntas que o IMT repete o tempo todo.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#22c55e] w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-[#94a3b8] text-[14px] md:text-[16px] leading-relaxed">
                  Organiza armadilhas reais para chegarem familiares no dia do exame.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <a
            href="#pricing"
            className="group relative inline-flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#1eb054] text-[#05070a] font-bold text-[13px] md:text-base uppercase tracking-wide py-3.5 md:py-4 px-6 md:px-12 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
          >
            QUERO PASSAR NO EXAME AGORA
          </a>
        </div>
      </div>
    </section>
  );
}