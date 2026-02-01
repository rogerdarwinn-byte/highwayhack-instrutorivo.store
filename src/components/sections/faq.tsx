"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-[#1F2937] last:border-b last:border-[#1F2937]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 px-4 text-left hover:bg-white/[0.02] transition-colors duration-200 group"
      >
        <span className="text-[16px] md:text-[18px] font-medium text-white leading-tight">
          {question}
        </span>
        <Plus
          className={cn(
            "w-5 h-5 text-[#9CA3AF] transition-transform duration-300 flex-shrink-0 ml-4",
            isOpen && "rotate-45"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-height-auto opacity-100" : "max-height-0 opacity-0"
        )}
        style={{
          maxHeight: isOpen ? "500px" : "0px",
        }}
      >
        <div className="px-4 pb-6 pt-1 text-[#9CA3AF] text-[16px] leading-[1.6]">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqs = [
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

  return (
    <section id="faq" className="bg-[#0A0A0C] py-20 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4 tracking-tight">
            Ainda com dúvidas?
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#9CA3AF] max-w-[600px] mx-auto">
            Respostas diretas para as perguntas que mais aparecem antes de
            entrares.
          </p>
        </div>

        <div className="w-full">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}