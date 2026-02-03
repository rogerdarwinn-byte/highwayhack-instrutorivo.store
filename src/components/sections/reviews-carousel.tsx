"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * ReviewsCarousel Component
 * 
 * A pixel-perfect clone of the "Avaliações dos Alunos" section.
 * Includes a responsive carousel of WhatsApp screenshot reviews, 
 * navigation controls, and a prominent CTA button.
 */
export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      id: 1,
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/93132b6c-be24-4b47-b845-8fd7f6b9bdc2-highway-hack-exame-c-digo-vercel-app/assets/images/images_1.png",
      alt: "Review 1",
    },
    {
      id: 2,
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/93132b6c-be24-4b47-b845-8fd7f6b9bdc2-highway-hack-exame-c-digo-vercel-app/assets/images/images_2.png",
      alt: "Review 2",
    },
    {
      id: 3,
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/93132b6c-be24-4b47-b845-8fd7f6b9bdc2-highway-hack-exame-c-digo-vercel-app/assets/images/images_3.png",
      alt: "Review 3",
    },
    {
      id: 4,
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/93132b6c-be24-4b47-b845-8fd7f6b9bdc2-highway-hack-exame-c-digo-vercel-app/assets/images/images_4.png",
      alt: "Review 4",
    },
  ];

  const scrollPrev = () => {
    if (trackRef.current) {
      const itemWidth = trackRef.current.firstElementChild?.clientWidth || 0;
      trackRef.current.scrollBy({ left: -(itemWidth + 16), behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (trackRef.current) {
      const itemWidth = trackRef.current.firstElementChild?.clientWidth || 0;
      trackRef.current.scrollBy({ left: itemWidth + 16, behavior: "smooth" });
    }
  };

  return (
    <section id="sec-prova-social-prints" className="py-20 md:py-[80px] bg-[#05070a]">
      <div className="container overflow-hidden">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-[32px] font-bold leading-[1.2] text-white tracking-tight mb-4">
            Avaliações dos Alunos
          </h2>
          <p className="max-w-[600px] mx-auto text-[16px] text-[#94a3b8] leading-relaxed">
            Deixa de imaginar o resultado e vê o que quem já usou o método diz depois de passar no exame.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group max-w-[1200px] mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#161b22]/80 border border-[#1e293b] flex items-center justify-center text-white transition-all hover:bg-[#1e293b] active:scale-95 hidden md:flex"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#161b22]/80 border border-[#1e293b] flex items-center justify-center text-white transition-all hover:bg-[#1e293b] active:scale-95 hidden md:flex"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Track */}
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-none w-[280px] md:w-[320px] snap-center aspect-[9/16] relative rounded-[20px] overflow-hidden border border-[#1e293b] bg-[#0c0f16]"
              >
                <Image
                  src={review.src}
                  alt={review.alt}
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-cover"
                  priority={review.id === 1}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#22c55e] text-[#05070a] text-[16px] font-bold rounded-full uppercase tracking-wide transition-all duration-200 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:-translate-y-1 active:scale-95"
          >
            APROVEITAR OFERTA AGORA
          </a>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}