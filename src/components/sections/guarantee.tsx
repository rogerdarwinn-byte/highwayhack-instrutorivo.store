import React from 'react';
import { ShieldHeart } from 'lucide-react';

/**
 * GuaranteeSection Component
 * 
 * Clones the "Testa durante 7 dias, sem risco" section with the 
 * characteristic circular "7" badge and unconditional refund policy text.
 */
const GuaranteeSection: React.FC = () => {
  return (
    <section 
      id="sec-garantia" 
      className="py-[80px] bg-[#0a0a0c] text-white flex flex-col items-center overflow-hidden"
    >
      <div className="container max-w-[1200px] px-6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[36px] font-bold leading-tight mb-4">
            Testa durante 7 dias, sem risco
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#9ca3af] max-w-[700px] mx-auto text-balance">
            Se não fizer sentido para ti, se não sentires que estás a entender melhor as perguntas, 
            basta pedir reembolso dentro do prazo.
          </p>
        </div>

        {/* Guarantee Content Wrapper */}
        <div className="flex flex-col items-center text-center">
          
          {/* Circular Guarantee Badge */}
          <div className="relative mb-8">
            <div 
              className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full flex items-center justify-center relative z-10"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2)'
              }}
            >
              <span className="text-[64px] md:text-[80px] font-extrabold text-white leading-none drop-shadow-lg">
                7
              </span>
            </div>
            {/* Outer Decorative Rings / Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full border border-blue-500/20 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[240px] md:h-[240px] rounded-full border border-blue-500/10"></div>
          </div>

          {/* Guarantee Text Block */}
          <div className="max-w-[650px] mb-10">
            <h3 className="text-[20px] md:text-[22px] font-semibold mb-4 text-white">
              Garantia incondicional de 7 dias
            </h3>
            <p className="text-[15px] md:text-[16px] leading-[1.6] text-[#9ca3af]">
              Usa o método, segue o plano, testa nas tuas questões reais. Se, por qualquer motivo, 
              achares que não valeu a pena, enviamos o teu dinheiro de volta. Sem letras pequeninas, 
              sem interrogatório.
            </p>
          </div>

          {/* Call to Action Button */}
          <button 
            className="group relative flex items-center justify-center gap-3 bg-[#22c55e] text-black font-bold py-4 px-8 md:px-12 rounded-[12px] text-[16px] md:text-[18px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cta-shadow whitespace-nowrap"
          >
            <ShieldHeart className="w-5 h-5 fill-current" />
            <span className="uppercase tracking-tight">QUERO TESTAR AGORA - RISCO ZERO</span>
          </button>
          
        </div>
      </div>

      <style jsx global>{`
        .cta-shadow {
          box-shadow: 0 10px 15px -3px rgba(34, 197, 94, 0.3);
        }
      `}</style>
    </section>
  );
};

export default GuaranteeSection;