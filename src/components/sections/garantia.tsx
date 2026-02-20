import React from 'react';
import { ShieldCheck } from 'lucide-react';

const GarantiaSection: React.FC = () => {
  return (
    <section 
      id="sec-garantia" 
      className="py-[80px] px-5 bg-[#05070a] border-t border-[#1e293b]"
      style={{
        fontFamily: 'Inter, "Inter Fallback", sans-serif'
      }}
    >
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Section Header */}
        <div className="mb-10 px-4">
          <h2 className="text-[2rem] leading-[1.2] font-bold text-white mb-4">
            Testa durante 7 dias, sem risco
          </h2>
          <p className="text-[#94a3b8] text-[1rem] leading-[1.6] max-w-[600px] mx-auto">
            Se não fizer sentido para ti, se não sentires que estás a entender melhor as perguntas, 
            basta pedir reembolso dentro do prazo.
          </p>
        </div>

        {/* Guarantee Content Wrapper */}
        <div className="flex flex-col items-center">
          {/* Circular Blue Badge */}
          <div 
            className="guarantee-badge mb-8 flex items-center justify-center"
            style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              borderRadius: '50%',
              boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
              fontSize: '2.2rem',
              fontWeight: '800',
              color: 'white'
            }}
          >
            7
          </div>

          {/* Guarantee Text Block */}
          <div className="max-w-[700px] mb-10 px-4">
            <h3 className="text-[1.25rem] font-semibold text-white mb-4">
              Garantia incondicional de 7 dias
            </h3>
            <p className="text-[#94a3b8] text-[1rem] leading-[1.6]">
              Usa o método, segue o plano, testa nas tuas questões reais. Se, por qualquer motivo, 
              achares que não valeu a pena, enviamos o teu dinheiro de volta. Sem letras pequeninas, 
              sem interrogatório.
            </p>
          </div>

          {/* CTA Button */}
          <a 
            href="https://www.checkout-ds24.com/product/670107"
                suppressHydrationWarning
              className="btn-primary group relative flex items-center justify-center gap-2 px-8 py-4 bg-[#22c55e] text-[#05070a] font-bold text-sm uppercase rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            style={{
              letterSpacing: '0.05em'
            }}
          >
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <span>QUERO TESTAR AGORA - RISCO ZERO</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .guarantee-badge {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default GarantiaSection;
