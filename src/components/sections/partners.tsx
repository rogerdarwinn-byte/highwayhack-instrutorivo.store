import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Partners section displaying a sliding carousel of driving school names/logos
 * and a final persistent primary CTA button.
 */
export default function Partners() {
  const partners = [
    "Segurança Máxima",
    "Neuropa",
    "Ecodrive",
    "Parque das Nações",
    "Moscavide",
    "AGILDRIVE",
    "Ilha Amarela",
    "Pero Pinheiro",
  ];

  // Doubling the list for a seamless infinite loop animation
  const infinitePartners = [...partners, ...partners];

  return (
    <section className="py-20 md:py-[80px] bg-[#0A0A0C]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold leading-[1.2] text-white mb-4">
            Parceiros que já confiam no método
          </h2>
          <p className="text-[18px] text-[#9CA3AF] max-w-[800px] mx-auto leading-relaxed">
            Algumas das escolas que já indicam o estudo guiado da Highway Hack Instrutor Ivo aos seus alunos.
          </p>
        </div>

        {/* Schools Carousel Track */}
        <div className="relative w-full overflow-hidden py-10">
          {/* Fading Edges Mask */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0A0C] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0C] to-transparent z-10 pointer-events-none" />

          {/* Marquee Content */}
          <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap min-w-max items-center">
            {infinitePartners.map((school, index) => (
              <div
                key={index}
                className="mx-4 md:mx-6 px-6 py-3 bg-[#111114] border border-[#1F2937] rounded-full text-white text-[16px] font-semibold flex-shrink-0"
              >
                {school}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="#pricing"
            className="group flex items-center justify-center gap-2 bg-[#22C55E] text-black px-8 py-4 rounded-[12px] font-bold text-[16px] uppercase transition-all duration-300 transform hover:scale-105 cta-shadow w-full md:w-auto"
          >
            <span>QUERO GARANTIR MEU ACESSO COM DESCONTO</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .cta-shadow {
          box-shadow: 0 10px 15px -3px rgba(34, 197, 94, 0.3);
        }
      `}} />
    </section>
  );
}