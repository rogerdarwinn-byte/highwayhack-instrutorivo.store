import React from 'react';
import { ArrowRight } from 'lucide-react';

const Partners = () => {
  const schoolLogos = [
    "Segurança Máxima",
    "Neuropa",
    "Ecodrive",
    "Parque das Nações",
    "Moscavide",
    "AGILDRIVE",
    "Ilha Amarela",
    "Pero Pinheiro"
  ];

  // We double the list to create the infinite scroll effect
  const doubleLogos = [...schoolLogos, ...schoolLogos];

  return (
    <section className="py-20 bg-[#05070a] overflow-hidden">
      <div className="container mx-auto px-5 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-[32px] font-bold text-white mb-4 leading-tight">
            Parceiros que já confiam no método
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Algumas das escolas que já indicam o estudo guiado da Highway Hack Instrutor Ivo aos seus alunos.
          </p>
        </div>

        {/* Ticker Container */}
        <div className="relative w-full overflow-hidden mb-16 py-4">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#05070a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#05070a] to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap gap-6 w-max">
            {doubleLogos.map((school, index) => (
              <div
                key={index}
                className="bg-[#0c0f16] border border-[#1e293b] rounded-full px-8 py-3 text-white font-medium text-sm flex items-center justify-center min-w-[160px] hover:border-[#22c55e] transition-colors duration-300"
              >
                {school}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
            <a
              href="#pricing"
              className="group relative flex items-center justify-center gap-2 bg-[#22c55e] text-[#05070a] text-sm md:text-base font-bold uppercase tracking-wide px-8 md:px-12 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:-translate-y-1"
            >
              <span>QUERO GARANTIR O MEU ACESSO COM DESCONTO</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}} />
    </section>
  );
};

export default Partners;