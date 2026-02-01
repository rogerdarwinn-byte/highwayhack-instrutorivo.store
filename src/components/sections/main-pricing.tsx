import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Clock, ShieldInfo } from 'lucide-react';

const MainPricing = () => {
  const products = [
    { name: 'Material de Estudo Completo', price: '97,00€', icon: <Check className="w-4 h-4 text-[#22c55e]" /> },
    { name: 'Plano de Treino de 30 dias', price: '67,00€', icon: <Check className="w-4 h-4 text-[#22c55e]" /> },
    { name: 'Armadilhas do IMT (25 pegadinhas)', price: '47,00€', icon: <Check className="w-4 h-4 text-[#22c55e]" /> },
    { name: 'Checklist "PASSO A PASSO IMT"', price: '27,00€', icon: <Check className="w-4 h-4 text-[#22c55e]" /> },
    { name: 'Atualizações gratuitas 2026', price: '37,00€', icon: <Check className="w-4 h-4 text-[#22c55e]" /> },
    { name: 'Garantia incondicional de 7 dias', price: '💰 Grátis', icon: <ShieldInfo className="w-4 h-4 text-[#22c55e]" /> },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#0a0a0c]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#facc15] text-[12.48px] font-medium">🎁 OFERTA ESPECIAL -89,12%</span>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4">Oportunidade Única</h2>
          <p className="text-[#9ca3af] text-lg max-w-2xl">
            Reprovar custa taxas, tempo e novas aulas. Ter um método claro custa menos e continua contigo mesmo depois de passares.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mx-auto max-w-[480px] bg-[#111114] border border-[#1f2937] rounded-[24px] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]">
          <div className="text-center mb-8">
            <p className="text-[#9ca3af] text-[13.6px] mb-1">
              De <span className="line-through">275,00€</span> por apenas 3x de
            </p>
            <p className="text-[#facc15] text-[54px] font-extrabold leading-tight">9,96€</p>
            <p className="text-[#22c55e] text-[14px] font-semibold mt-1">
              💰 Economize 245,10€
            </p>
          </div>

          <ul className="space-y-4 mb-10">
            {products.map((item, index) => (
              <li 
                key={index} 
                className="flex items-center justify-between py-1 border-b border-white/[0.05] last:border-0"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-white text-[14px] md:text-[15px]">{item.name}</span>
                </div>
                <div className="text-right">
                  {item.price.includes('💰') ? (
                    <span className="text-[#facc15] font-bold text-[14px]">{item.price}</span>
                  ) : (
                    <span className="text-[#6b7280] line-through text-[13px]">{item.price}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <button className="w-full bg-[#22c55e] hover:bg-[#1db053] text-black font-bold py-5 rounded-[12px] flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] cta-shadow group">
            <span className="text-[14px] md:text-[16px]">GARANTIR MEU ACESSO COM DESCONTO AGORA</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-1.5 text-[12px] text-[#9ca3af]">
              <ShieldCheck className="w-4 h-4 text-[#9ca3af]" />
              <span>Seguro</span>
            </div>
            <div className="flex items-center gap-1.5 text-[12px] text-[#9ca3af]">
              <Zap className="w-4 h-4 text-[#9ca3af]" />
              <span>Imediato</span>
            </div>
            <div className="flex items-center gap-1.5 text-[12px] text-[#9ca3af]">
              <Clock className="w-4 h-4 text-[#9ca3af]" />
              <span>Garantia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPricing;