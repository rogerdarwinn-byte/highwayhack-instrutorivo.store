'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <footer className="w-full bg-[#05070a] border-t border-[#1e293b]">
      <div className="container mx-auto px-5 py-8 md:py-10">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {mounted ? (
              <>
                <Link href="/privacidade" className="text-[13px] text-[#94a3b8] hover:text-[#22c55e] transition-colors">
                  Privacidade
                </Link>
                <span className="text-[#1e293b]">·</span>
                <Link href="/termos" className="text-[13px] text-[#94a3b8] hover:text-[#22c55e] transition-colors">
                  Termos e Condições
                </Link>
                <span className="text-[#1e293b]">·</span>
                <Link href="/contacto" className="text-[13px] text-[#94a3b8] hover:text-[#22c55e] transition-colors">
                  Fale Conosco
                </Link>
              </>
            ) : (
              <>
                <span className="text-[13px] text-[#94a3b8]">Privacidade</span>
                <span className="text-[#1e293b]">·</span>
                <span className="text-[13px] text-[#94a3b8]">Termos e Condições</span>
                <span className="text-[#1e293b]">·</span>
                <span className="text-[13px] text-[#94a3b8]">Fale Conosco</span>
              </>
            )}
          </div>
          <p className="text-[13px] md:text-[14px] leading-relaxed text-[#94a3b8] font-sans">
            © 2026 Highway Hack Instrutor Ivo · Material de estudo independente, não afiliado ao IMT.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
