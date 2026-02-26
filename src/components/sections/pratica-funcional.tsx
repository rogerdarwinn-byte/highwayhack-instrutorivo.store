"use client";

import React from 'react';
import { MailOpen, CalendarCheck, ClipboardCheck, ShieldAlert } from 'lucide-react';

export default function PraticaFuncional() {
  const steps = [
    {
      number: "1",
      title: "Recebes o Material no email",
      items: [
        {
          icon: <MailOpen className="w-5 h-5 text-primary" />,
          text: "Pagamento confirmado, o acesso chega em segundos na tua caixa de entrada."
        },
        {
          icon: <div className="w-5 h-5 flex items-center justify-center">📱</div>,
          text: "Lê no telemóvel, tablet ou computador, onde for mais prático."
        }
      ]
    },
    {
      number: "2",
      title: "Segues o plano de 30 dias",
      items: [
        {
          icon: <CalendarCheck className="w-5 h-5 text-primary" />,
          text: "Cada dia com atividades curtas: ler, treinar, revisar."
        },
        {
          icon: <div className="w-5 h-5 flex items-center justify-center">⏰</div>,
          text: "Pensa em blocos de 20–30 minutos, sem precisar viver na escola de condução."
        }
      ]
    },
    {
      number: "3",
      title: "Aplicas nos teus testes",
      items: [
        {
          icon: <ClipboardCheck className="w-5 h-5 text-primary" />,
          text: "Usa o método junto das plataformas de testes que já fazes."
        },
        {
          icon: <div className="w-5 h-5 flex items-center justify-center">🏁</div>,
          text: "Chegas ao exame a reconhecer padrões, não a rezar pela sorte."
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-5 bg-background overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[2rem] font-bold leading-tight mb-4 text-foreground">
            Como funciona na prática
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Nada de complicar. Em poucos passos já estás a estudar com direção e foco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-[#0c0f16] border border-[#1e293b] rounded-[1rem] p-8 flex flex-col items-start"
            >
              <h3 className="text-[1.25rem] font-semibold text-white mb-6 flex items-center gap-2">
                <span className="text-primary">{step.number}.</span> {step.title}
              </h3>
              <ul className="space-y-6">
                {step.items.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="mt-1 flex-shrink-0">
                      {item.icon}
                    </span>
                    <span className="text-[#94a3b8] text-[0.95rem] leading-relaxed">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#pricing"
            className="group relative flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#1eb054] text-[#05070a] font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
          >
            <ShieldAlert className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>QUERO TESTAR AGORA - RISCO ZERO</span>
          </a>
        </div>
      </div>
    </section>
  );
}
