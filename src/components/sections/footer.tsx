import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-white/5 bg-[#0a0a0c]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <p className="text-[14px] leading-relaxed text-[#9ca3af] font-sans">
            © 2026 Highway Hack Instrutor Ivo · Material de estudo independente, não afiliado ao IMT.
          </p>
          
          {/* Subtle secondary disclaimer for legal compliance often found in these VSL footers */}
          <div className="max-w-3xl pt-2">
            <p className="text-[11px] text-[#4b5563] leading-tight">
              Este site não faz parte do Facebook ou Google. Além disso, este site não é endossado pelo Facebook ou Google de qualquer forma. FACEBOOK é uma marca comercial da FACEBOOK, Inc. GOOGLE é uma marca comercial da GOOGLE, Inc. Os resultados podem variar de pessoa para pessoa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;