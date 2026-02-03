"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Serve para quem nunca estudou para o código?",
    answer:
      "Sim. O método foi pensado tanto para iniciantes como para quem já está há meses a estudar sem sair do lugar.",
  },
  {
    question: "Funciona se eu já reprovei?",
    answer:
      "Sim. Vais entender justamente onde normalmente as pessoas erram e como corrigir a forma de pensar nas questões.",
  },
  {
    question: "Quanto tempo preciso por dia?",
    answer:
      "O plano de 30 dias foi criado para caber em rotina corrida, com blocos curtos de 20–30 minutos que podes adaptar.",
  },
  {
    question: "Substitui a escola de condução?",
    answer:
      "Não. A escola continua obrigatória para aulas e processo oficial. A Highway Hack Instrutor Ivo é um atalho inteligente no estudo teórico.",
  },
  {
    question: "Como recebo acesso ao material?",
    answer:
      "Depois de pagar, recebes um email com o PDF e bónus. É só clicar e começar a estudar pelo telemóvel ou computador.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#05070a] py-[80px] px-[20px]">
      <div className="container max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold leading-[1.2] text-[#ffffff] mb-4 font-display">
            Ainda com dúvidas?
          </h2>
          <p className="text-[16px] leading-[1.6] text-[#94a3b8] max-w-[600px] mx-auto">
            Respostas diretas para as perguntas que mais aparecem antes de entrares.
          </p>
        </div>

        <div className="max-w-[800px] mx-auto space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-[#1e293b] rounded-[12px] bg-[#0c0f16] overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-[#161b22]"
                aria-expanded={openIndex === index}
              >
                <span className="text-[16px] font-medium text-white pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#22c55e]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#94a3b8]" />
                  )}
                </div>
              </button>

              <div
                className={cn(
                  "grid transition-all duration-200 ease-in-out",
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="p-5 pt-0 text-[15px] leading-[1.6] text-[#94a3b8] border-t border-[#1e293b]/50 mx-5 mt-0 pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;