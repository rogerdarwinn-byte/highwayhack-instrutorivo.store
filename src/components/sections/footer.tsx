import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#05070a] border-t border-[#1e293b]">
      <div className="container mx-auto px-5 py-8 md:py-10">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="flex items-center gap-4 text-[13px] text-[#64748b]">
            <Link 
              href="/termos-de-uso" 
              className="hover:text-white transition-colors"
            >
              Termos de Uso
            </Link>
            <span className="text-[#1e293b]">|</span>
            <Link 
              href="/politica-de-privacidade" 
              className="hover:text-white transition-colors"
            >
              Política de Privacidade
            </Link>
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