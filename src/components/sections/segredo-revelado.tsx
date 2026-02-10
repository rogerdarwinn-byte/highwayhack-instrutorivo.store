"use client";

import React from 'react';
import { Check, X } from 'lucide-react';

export default function SegredoRevelado() {

  return (
    <section className="py-[80px] px-5 bg-[#05070a]">
      <div className="container max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-[2rem] font-bold leading-[1.2] text-white mb-4">
            Segredo Revelado
          </h2>
          <p className="text-[1.125rem] text-[#94a3b8] leading-[1.6]">
            A mesma <strong className="text-white font-bold">técnica</strong> que os aprovados usam para <strong className="text-white font-bold">passar no IMT</strong>.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card: Serve para ti se… */}
          <div className="bg-[#0c0f16] border border-[#1e293b] rounded-[1rem] p-6 lg:p-8 flex flex-col">
            <h3 className="text-[1.25rem] font-semibold text-white mb-6">
              Serve para ti se…
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0">
                  <Check className="w-[18px] h-[18px] text-[#22c55e]" strokeWidth={3} />
                </span>
                <span className="text-[1rem] text-[#94a3b8] leading-[1.4]">
                  Estás a começar do zero e não sabes por onde pegar no Código da Estrada.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0">
                  <Check className="w-[18px] h-[18px] text-[#22c55e]" strokeWidth={3} />
                </span>
                <span className="text-[1rem] text-[#94a3b8] leading-[1.4]">
                  Já reprovaste 1 ou mais vezes e precisas de entender onde estás a errar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0">
                  <Check className="w-[18px] h-[18px] text-[#22c55e]" strokeWidth={3} />
                </span>
                <span className="text-[1rem] text-[#94a3b8] leading-[1.4]">
                  Tens pouco tempo por dia e precisas de um plano simples de seguir.
                </span>
              </li>
            </ul>
          </div>

          {/* Card: Não é para ti se… */}
          <div className="bg-[#0c0f16] border border-[#1e293b] rounded-[1rem] p-6 lg:p-8 flex flex-col">
            <h3 className="text-[1.25rem] font-semibold text-white mb-6">
              Não é para ti se…
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0">
                  <X className="w-[18px] h-[18px] text-[#ef4444]" strokeWidth={3} />
                </span>
                  <span className="text-[1rem] text-[#94a3b8] leading-[1.4]">
                    Queres atalhos ilegais ou “truques” para enganar o exame.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0">
                    <X className="w-[18px] h-[18px] text-[#ef4444]" strokeWidth={3} />
                  </span>
                  <span className="text-[1rem] text-[#94a3b8] leading-[1.4]">
                    Não estás disposto a separar pelo menos 20–30 minutos por dia.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0">
                    <X className="w-[18px] h-[18px] text-[#ef4444]" strokeWidth={3} />
                  </span>
                  <span className="text-[1rem] text-[#94a3b8] leading-[1.4]">
                    Preferes continuar só a decorar testes sem entender as perguntas.
                  </span>
                </li>
              </ul>
            </div>
          </div>
  
          {/* CTA Button */}
          <div className="flex justify-center">
            <a 
              href="#pricing"

              className="group btn-primary bg-[#22c55e] text-[#05070a] text-[1rem] font-bold uppercase py-4 px-8 rounded-full flex items-center gap-3 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              QUERO O MEU ACESSO COM DESCONTO
            </a>
        </div>
      </div>
    </section>
  );
}
