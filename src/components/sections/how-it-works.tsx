import React from 'react';
import { MailOpen, Smartphone, CalendarCheck, Clock, ClipboardCheck, Flag, ShieldHeart } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-[#0a0a0c]">
      <div className="container px-6 mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4">
            Como funciona na prática
          </h2>
          <p className="text-[18px] text-[#9ca3af] max-w-[600px] mx-auto">
            Nada de complicar. Em poucos passos já estás a estudar com direção e foco.
          </p>
        </div>

        {/* 3-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Step 1 */}
          <div className="bg-[#111114] border border-[#1f2937] rounded-[16px] p-8 flex flex-col h-full transition-all hover:border-[#22c55e]/30">
            <h3 className="text-[20px] font-semibold text-white mb-6">
              1. Recebes o Material no email
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MailOpen className="w-5 h-5 text-[#facc15] shrink-0 mt-1" />
                <span className="text-[#9ca3af] text-[15px] leading-relaxed">
                  Pagamento confirmado, o acesso chega em segundos na tua caixa de entrada.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-[#facc15] shrink-0 mt-1" />
                <span className="text-[#9ca3af] text-[15px] leading-relaxed">
                  Lê no telemóvel, tablet ou computador, onde for mais prático.
                </span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="bg-[#111114] border border-[#1f2937] rounded-[16px] p-8 flex flex-col h-full transition-all hover:border-[#22c55e]/30">
            <h3 className="text-[20px] font-semibold text-white mb-6">
              2. Segues o plano de 30 dias
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <CalendarCheck className="w-5 h-5 text-[#facc15] shrink-0 mt-1" />
                <span className="text-[#9ca3af] text-[15px] leading-relaxed">
                  Cada dia com atividades curtas: ler, treinar, revisar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#facc15] shrink-0 mt-1" />
                <span className="text-[#9ca3af] text-[15px] leading-relaxed">
                  Pensa em blocos de 20–30 minutos, sem precisar viver na escola de condução.
                </span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="bg-[#111114] border border-[#1f2937] rounded-[16px] p-8 flex flex-col h-full transition-all hover:border-[#22c55e]/30">
            <h3 className="text-[20px] font-semibold text-white mb-6">
              3. Aplicas nos teus testes
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <ClipboardCheck className="w-5 h-5 text-[#facc15] shrink-0 mt-1" />
                <span className="text-[#9ca3af] text-[15px] leading-relaxed">
                  Usa o método junto das plataformas de testes que já fazes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Flag className="w-5 h-5 text-[#facc15] shrink-0 mt-1" />
                <span className="text-[#9ca3af] text-[15px] leading-relaxed">
                  Chegas ao exame a reconhecer padrões, não a rezar pela sorte.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="#pricing"
            className="group flex items-center justify-center gap-3 bg-[#22c55e] hover:bg-[#1eb054] text-black font-bold uppercase tracking-wide text-[16px] py-4 px-10 rounded-[12px] transition-all transform hover:scale-105 cta-shadow w-full max-w-[500px]"
          >
            <ShieldHeart className="w-5 h-5" />
            <span>QUERO TESTAR AGORA - RISCO ZERO</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;