import React from 'react';
import Image from 'next/image';
import { Star, CircleCheck } from 'lucide-react';

const SuccessStories = () => {
  const testimonials = [
    {
      initial: "B",
      name: "Beatriz Mendes",
      location: "Lisboa",
      tag: "Aprovada",
      review: "Gostei muito. É mais simples, mais prático, mais direto. Muito mais fácil do que ler aquele livro BEM GRANDE.",
      avatarBg: "bg-orange-500",
    },
    {
      initial: "T",
      name: "Tiago Afonso",
      location: "Porto",
      tag: "Passei no exame!",
      review: "Mano! Passei no exame. Juro mano. Usei o material do Highway Hack Instrutor Ivo. Parabéns pelo material!",
      avatarBg: "bg-yellow-500",
    },
    {
      initial: "M",
      name: "Miguel Oliveira",
      location: "Coimbra",
      tag: "Experiência positiva",
      review: "A minha experiência foi extremamente positiva. O conteúdo é claro, prático e fácil de entender, o que fez toda a diferença durante o aprendizado.",
      avatarBg: "bg-orange-600",
    },
  ];

  const galleryImages = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/93132b6c-be24-4b47-b845-8fd7f6b9bdc2-highway-hack-exame-c-digo-vercel-app/assets/images/images_5.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/93132b6c-be24-4b47-b845-8fd7f6b9bdc2-highway-hack-exame-c-digo-vercel-app/assets/images/images_6.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/93132b6c-be24-4b47-b845-8fd7f6b9bdc2-highway-hack-exame-c-digo-vercel-app/assets/images/images_7.png",
  ];

  return (
    <section id="sec-prova-social-cards" className="py-20 bg-[#0a0a0c]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold text-white mb-2 font-sans tracking-tight">
            Histórias de Sucesso
          </h2>
          <p className="text-[18px] text-[#9ca3af] font-sans">
            Pessoas comuns que passaram no IMT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#111114] border border-[#1f2937] rounded-[16px] p-6 flex flex-col items-start"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${item.avatarBg}`}>
                  {item.initial}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <strong className="text-white text-[15px]">{item.name}</strong>
                    <span className="text-[#9ca3af] text-[13px]">{item.location}</span>
                    <div className="ml-2 flex items-center gap-1 bg-[#22c55e]/10 text-[#22c55e] px-2 py-0.5 rounded-full text-[11px] font-semibold border border-[#22c55e]/20">
                      <CircleCheck size={10} fill="currentColor" className="text-[#111114]" />
                      {item.tag}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#facc15" className="text-[#facc15]" />
                ))}
              </div>

              <p className="text-[#f5f5f5] text-[15px] leading-relaxed mb-4 flex-grow italic">
                &quot;{item.review}&quot;
              </p>

              <div className="text-[#9ca3af] text-[12px]">
                Publicado recentemente
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-[3/4] rounded-[16px] overflow-hidden border border-[#1f2937]"
            >
              <Image
                src={src}
                alt={`Sucesso ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-[#22c55e] text-black font-bold py-4 px-12 rounded-[12px] text-base uppercase tracking-wider cta-shadow hover:scale-105 transition-transform duration-200">
            APROVEITAR OFERTA AGORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;