import React from 'react';
import Image from 'next/image';
import { CircleCheck, Star } from 'lucide-react';

const HistoriasSucesso = () => {
  const reviews = [
    {
      initial: 'B',
      name: 'Beatriz Mendes',
      location: 'Lisboa',
      tag: 'Aprovada',
      text: '"Gostei muito. É mais simples, mais prático, mais direto. Muito mais fácil do que ler aquele livro BEM GRANDE."',
      status: 'Publicado recentemente',
      avatarBg: 'bg-[#f59e0b]'
    },
    {
      initial: 'T',
      name: 'Tiago Afonso',
      location: 'Porto',
      tag: 'Passei no exame!',
      text: '"Mano! Passei no exame. Juro mano. Usei o material do Highway Hack Instrutor Ivo. Parabéns pelo material!"',
      status: 'Publicado recentemente',
      avatarBg: 'bg-[#ea580c]'
    },
    {
      initial: 'M',
      name: 'Miguel Oliveira',
      location: 'Coimbra',
      tag: 'Experiência positiva',
      text: '"A minha experiência foi extremamente positiva. O conteúdo é claro, prático e fácil de entender, o que fez toda a diferença durante o aprendizado."',
      status: 'Publicado recentemente',
      avatarBg: 'bg-[#d97706]'
    }
  ];

  const successPhotos = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/93132b6c-be24-4b47-b845-8fd7f6b9bdc2-highway-hack-exame-c-digo-vercel-app/assets/images/images_5.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/93132b6c-be24-4b47-b845-8fd7f6b9bdc2-highway-hack-exame-c-digo-vercel-app/assets/images/images_6.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/93132b6c-be24-4b47-b845-8fd7f6b9bdc2-highway-hack-exame-c-digo-vercel-app/assets/images/images_7.png"
  ];

  return (
    <section id="sec-prova-social-cards" className="py-20 px-5 bg-[#05070a]">
      <div className="container max-width-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold text-white mb-4">Histórias de Sucesso</h2>
          <p className="text-[#94a3b8] text-base">Pessoas comuns que passaram no IMT.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-[#0c0f16] border border-[#1e293b] rounded-2xl p-6 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${review.avatarBg}`}>
                  {review.initial}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <strong className="text-white text-[15px]">{review.name}</strong>
                    <span className="text-[#94a3b8] text-xs">{review.location}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5 px-2 py-0.5 bg-[#161b22] rounded-full w-fit">
                    <CircleCheck className="w-3 h-3 text-[#22c55e]" />
                    <span className="text-[#22c55e] text-[10px] font-semibold uppercase">{review.tag}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#facc15] text-[#facc15]" />
                ))}
              </div>

              <p className="text-[#e2e8f0] text-sm leading-relaxed mb-6 italic">
                {review.text}
              </p>

              <div className="mt-auto pt-4 border-t border-[#1e293b]/50 text-[#64748b] text-[11px] uppercase tracking-wider">
                Publicado recentemente
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {successPhotos.map((photo, index) => (
            <div 
              key={index} 
              className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#1e293b]"
            >
              <Image
                src={photo}
                alt={`Sucesso ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="btn-primary w-full max-w-[400px]">
            APROVEITAR OFERTA AGORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default HistoriasSucesso;