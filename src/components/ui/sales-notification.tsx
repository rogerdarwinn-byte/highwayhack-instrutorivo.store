"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * SalesNotification Client Component
 * 
 * A floating popup that appears in the bottom left, mimicking recent sales social proof.
 * Design specifics from high_level_design and computed_styles:
 * - Position: Fixed bottom-left
 * - Theme: Dark (Surface #111114)
 * - Typography: Inter font-family
 * - Effects: Glass card style, subtle border
 */

const students = [
  { name: "André Lopes", location: "Sintra" },
  { name: "Beatriz Mendes", location: "Lisboa" },
  { name: "Tiago Afonso", location: "Porto" },
  { name: "Miguel Oliveira", location: "Coimbra" },
  { name: "Sofia Silva", location: "Braga" },
  { name: "João Pinhas", location: "Cascais" },
  { name: "Margarida Costa", location: "Almada" },
  { name: "Ricardo Santos", location: "Setúbal" },
];

export default function SalesNotification() {
  const [currentStudent, setCurrentStudent] = useState(students[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay before first appearance
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    const interval = setInterval(() => {
      // Hide current
      setIsVisible(false);
      
      // Select new student and show after a brief hidden period
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * students.length);
        setCurrentStudent(students[randomIndex]);
        setIsVisible(true);
      }, 1000);

    }, 10000); // Cycle every 10 seconds

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 left-6 z-[100] transition-all duration-700 ease-in-out transform",
        isVisible 
          ? "translate-y-0 opacity-100 scale-100" 
          : "translate-y-12 opacity-0 scale-95 pointer-events-none"
      )}
    >
      <div 
        className="glass-card flex items-center gap-4 px-4 py-3 rounded-[16px] shadow-2xl max-w-[320px] sm:max-w-md bg-[#111114]/90 border border-[#1f2937]/50 backdrop-blur-md"
      >
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#22c55e]/10 flex items-center justify-center border border-[#22c55e]/20">
          <ShoppingBag className="w-5 h-5 text-[#22c55e]" />
        </div>
        
        <div className="text-[13px] leading-[1.5] text-[#f5f5f5] font-sans">
          <span className="font-bold text-white">
            {currentStudent.name}
          </span>
          {" de "}
          <span className="font-medium">{currentStudent.location}</span>
          {" acabou de adquirir o "}
          <span className="text-[#facc15] font-semibold italic">
            Highway Hack Instrutor Ivo
          </span>
          !
        </div>
      </div>
    </div>
  );
}