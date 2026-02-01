"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * SocialProofCarousel Component
 * 
 * Clones the "Avaliações dos Alunos" section including its header, 
 * subtitle, and the horizontal carousel containing four WhatsApp chat 
 * screenshot reviews, ending with a green call-to-action button.
 */

const reviews = [
  {
    id: 1,
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/93132b6c-be24-4b47-b845-8fd7f6b9bdc2-highway-hack-exame-c-digo-vercel-app/assets/images/images_1.png",
    alt: "Review 1 - WhatsApp chat showing positive feedback about the ebook being simple and practical",
  },
  {
    id: 2,
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/93132b6c-be24-4b47-b845-8fd7f6b9bdc2-highway-hack-exame-c-digo-vercel-app/assets/images/images_2.png",
    alt: "Review 2 - WhatsApp chat from João Pinhas celebrating passing the exam using Highway Hack",
  },
  {
    id: 3,
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/93132b6c-be24-4b47-b845-8fd7f6b9bdc2-highway-hack-exame-c-digo-vercel-app/assets/images/images_3.png",
    alt: "Review 3 - WhatsApp chat from Fernando expressing gratitude for the technical clarity of the material",
  },
  {
    id: 4,
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/93132b6c-be24-4b47-b845-8fd7f6b9bdc2-highway-hack-exame-c-digo-vercel-app/assets/images/images_4.png",
    alt: "Review 4 - WhatsApp chat from Pedrada confirming the ebook is very explicit and helped pass",
  },
];

export default function SocialProofCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      // Initial check
      checkScroll();
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (container) container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="sec-prova-social-prints" className="py-20 bg-[#0a0a0c]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold text-white mb-4 leading-tight">
            Avaliações dos Alunos
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto font-normal">
            Deixa de imaginar o resultado e vê o que quem já usou o método diz depois de passar no exame.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group mb-16">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white transition-all hover:bg-black/80 hover:scale-110 active:scale-95 disabled:opacity-0 disabled:cursor-default ${
              !canScrollLeft ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white transition-all hover:bg-black/80 hover:scale-110 active:scale-95 disabled:opacity-0 disabled:cursor-default ${
              !canScrollRight ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 md:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="flex-shrink-0 w-[280px] md:w-[320px] snap-center"
              >
                <div className="bg-[#111114] rounded-[18px] overflow-hidden border border-[#1f2937] shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-transform hover:scale-[1.02] duration-300">
                  <Image
                    src={review.url}
                    alt={review.alt}
                    width={320}
                    height={560}
                    priority={review.id <= 2}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-12">
          <button 
            className="bg-[#22c55e] text-black font-bold text-base md:text-lg px-8 py-4 rounded-[12px] uppercase tracking-wide flex items-center gap-3 transition-all hover:bg-[#1eb054] hover:scale-105 active:scale-95 cta-shadow"
          >
            APROVEITAR OFERTA AGORA
          </button>
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