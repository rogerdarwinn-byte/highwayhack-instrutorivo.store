"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const salesPool = [
  { name: "Pedro Costa", city: "Coimbra" },
  { name: "Beatriz Mendes", city: "Lisboa" },
  { name: "Tiago Afonso", city: "Porto" },
  { name: "Miguel Oliveira", city: "Braga" },
  { name: "Ana Silva", city: "Aveiro" },
  { name: "Ricardo Santos", city: "Faro" },
  { name: "Sofia Sousa", city: "Viseu" },
  { name: "João Pereira", city: "Setúbal" },
];

export default function SalesNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSale, setCurrentSale] = useState(salesPool[0]);

  useEffect(() => {
    const showNotification = () => {
      // Pick a random sale
      const randomIndex = Math.floor(Math.random() * salesPool.length);
      setCurrentSale(salesPool[randomIndex]);
      
      // Show
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Initial delay before first notification
    const initialDelay = setTimeout(showNotification, 3000);

    // Dynamic interval for subsequent notifications
    const interval = setInterval(() => {
      showNotification();
    }, 15000); // Repeat every 15 seconds

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

    return (
      <div
        className={cn(
          "fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[100] flex max-w-[290px] md:max-w-[320px] items-center gap-3 md:gap-4 rounded-2xl border border-[#1e293b] bg-[#0c0f16]/95 p-3 md:p-4 shadow-2xl backdrop-blur-sm transition-all duration-500 ease-in-out",
          isVisible 
            ? "translate-y-0 opacity-100" 
            : "translate-y-12 opacity-0 pointer-events-none"
        )}
        style={{
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
        }}
      >
        <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl bg-[#22c55e]/10 text-[#22c55e]">
          <ShoppingBag className="h-5 w-5 md:h-6 md:w-6" />
        </div>
        
        <div className="text-[12px] md:text-[14px] leading-snug text-[#94a3b8]">
        <span className="font-bold text-white">{currentSale.name}</span>
        {" de "}
        <span className="font-semibold text-white">{currentSale.city}</span>
        {" acabou de adquirir o "}
        <span className="font-bold text-[#facc15]">Highway Hack Instrutor Ivo</span>!
      </div>

      <button 
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border border-[#1e293b] bg-[#0c0f16] text-[#94a3b8] hover:text-white transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>
  );
}