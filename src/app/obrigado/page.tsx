"use client";

import { useEffect, useState, Suspense } from "react";
import { 
  CheckCircle2, 
  Download, 
  Smartphone, 
  PlayCircle, 
  Gift, 
  BookOpen,
  Calendar,
  AlertTriangle,
  RefreshCw,
  Target,
  ArrowRight,
  Sparkles,
  Apple,
  Star
} from "lucide-react";
import Link from "next/link";

// Confetti component
const Confetti = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: string; color: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    const colors = ['#22c55e', '#facc15', '#6366f1', '#ec4899', '#3b82f6'];
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: `${Math.random() * 3}s`,
      duration: `${Math.random() * 2 + 2}s`,
    }));
    setConfetti(newConfetti);

    const timer = setTimeout(() => setConfetti([]), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {confetti.map((c) => (
        <div
          key={c.id}
          className="fixed w-2.5 h-2.5 pointer-events-none animate-fall z-50"
          style={{
            left: c.left,
            backgroundColor: c.color,
            animationDelay: c.delay,
            animationDuration: c.duration,
            top: '-10px',
          }}
        />
      ))}
    </>
  );
};

function ObrigadoContent() {
  return (
    <main className="min-h-screen bg-[#05070a] relative overflow-hidden">
      <Confetti />
      
      {/* Background decorations */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#22c55e]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#facc15]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-4 py-8 md:py-16 relative z-10">
        
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-full flex items-center justify-center shadow-[0_20px_60px_rgba(34,197,94,0.4)] animate-bounce-slow">
            <CheckCircle2 className="w-12 h-12 md:w-14 md:h-14 text-white" />
          </div>
          
          <h1 className="text-[32px] md:text-[48px] font-extrabold mb-4 bg-gradient-to-r from-[#22c55e] via-[#4ade80] to-[#facc15] bg-clip-text text-transparent leading-tight">
            Parabéns! Estás Dentro!
          </h1>
          
            <p className="text-[#a2a2b8] text-[16px] md:text-[18px] max-w-[600px] mx-auto mb-3">
              O teu acesso ao <span className="text-white font-semibold">Highway Hack</span> foi confirmado. Vamos começar a preparação para passares no IMT de primeira!
            </p>
            <p className="text-[#77778a] text-[12px]">A cobrança aparecerá na sua fatura como &quot;Digistore24&quot;</p>
        </div>

        {/* Step 1: Download App */}
        <div className="bg-[#0c0f16] border border-[#1e293b] rounded-[24px] p-6 md:p-10 mb-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-[#22c55e]/30 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#22c55e]/10 rounded-full flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-[#22c55e]" />
            </div>
            <div>
              <span className="text-[#22c55e] text-[12px] font-bold uppercase tracking-wider">Passo 1</span>
              <h2 className="text-white text-[20px] md:text-[24px] font-bold">Descarrega a Aplicação</h2>
            </div>
          </div>
          
          <p className="text-[#a2a2b8] mb-6">
            Instala a aplicação Highway Hack no teu telemóvel e começa a estudar onde quiseres!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <a 
                href="https://apps.apple.com/br/app/testes-c%C3%B3digo-da-estrada-imtt/id1451809836" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(34,197,94,0.3)] animate-pulse-slow"
              >
                <Apple className="w-6 h-6" />
                <span>Descarregar para iPhone</span>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=tdc.testesdecodigo&hl=pt_BR&pli=1" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#6366f1] to-[#4f46e5] hover:from-[#4f46e5] hover:to-[#4338ca] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(99,102,241,0.3)] animate-pulse-slow"
              >
                <Smartphone className="w-6 h-6" />
                <span>Descarregar para Android</span>
              </a>
          </div>

          <div className="bg-[#22c55e]/5 border-l-4 border-[#22c55e] rounded-r-xl p-4">
            <h4 className="text-[#22c55e] font-bold mb-2">Como usar a app:</h4>
            <ol className="text-[#a2a2b8] text-[14px] space-y-1 list-decimal list-inside">
              <li>Descarrega e instala a aplicação no teu telemóvel</li>
              <li>Faz login com o email que usaste na compra</li>
              <li>Começa pelo Plano de 30 dias</li>
              <li>Estuda 20-30 minutos por dia</li>
            </ol>
          </div>
        </div>

        {/* Step 2: Video Lessons */}
        <div className="bg-[#0c0f16] border border-[#1e293b] rounded-[24px] p-6 md:p-10 mb-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-[#facc15]/30 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#facc15]/10 rounded-full flex items-center justify-center">
              <PlayCircle className="w-6 h-6 text-[#facc15]" />
            </div>
            <div>
              <span className="text-[#facc15] text-[12px] font-bold uppercase tracking-wider">Passo 2</span>
              <h2 className="text-white text-[20px] md:text-[24px] font-bold">Acede às Vídeo Aulas</h2>
            </div>
          </div>
          
          <p className="text-[#a2a2b8] mb-6">
            Todas as aulas em vídeo estão disponíveis no Google Drive. Podes ver online ou descarregar para estudar offline!
          </p>

            <a 
                href="https://drive.google.com/drive/folders/1yz_jfYGBVtD8wcMf4wc3j2qCqRrPznZP?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#facc15] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-[#0c0f16] font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(250,204,21,0.3)] animate-pulse-slow"
              >
              <Download className="w-6 h-6" />
              <span>Aceder às Vídeo Aulas no Google Drive</span>
            </a>
        </div>

        {/* Bonuses Grid */}
        <div className="bg-[#0c0f16] border border-[#1e293b] rounded-[24px] p-6 md:p-10 mb-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#ec4899]/10 rounded-full flex items-center justify-center">
              <Gift className="w-6 h-6 text-[#ec4899]" />
            </div>
            <h2 className="text-white text-[20px] md:text-[24px] font-bold">Os Teus Bónus</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#22c55e]/5 border border-[#22c55e]/20 rounded-xl p-5 hover:border-[#22c55e]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold mb-1">Checklist Passo a Passo</h3>
                  <p className="text-[#a2a2b8] text-[14px]">Lista direta dos temas mais confusos que mais reprovam. Usa na semana do exame!</p>
                </div>
              </div>
            </div>

            <div className="bg-[#22c55e]/5 border border-[#22c55e]/20 rounded-xl p-5 hover:border-[#22c55e]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold mb-1">Plano de Treino 30 Dias</h3>
                  <p className="text-[#a2a2b8] text-[14px]">Roteiro diário para seguires e pedires o exame após 29 dias.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#22c55e]/5 border border-[#22c55e]/20 rounded-xl p-5 hover:border-[#22c55e]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold mb-1">25 Armadilhas do IMT</h3>
                  <p className="text-[#a2a2b8] text-[14px]">As armadilhas mais comuns que fazem reprovar. Memoriza e evita!</p>
                </div>
              </div>
            </div>

            <div className="bg-[#22c55e]/5 border border-[#22c55e]/20 rounded-xl p-5 hover:border-[#22c55e]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-3">
                <RefreshCw className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold mb-1">Atualizações Grátis 2026</h3>
                  <p className="text-[#a2a2b8] text-[14px]">Recebes todas as atualizações do material até 2026 sem pagar nada extra.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ebook Bonus Section */}
        <div className="bg-gradient-to-br from-[#ec4899]/10 to-[#db2777]/10 border-2 border-[#ec4899] rounded-[24px] p-6 md:p-10 mb-6 shadow-[0_20px_60px_rgba(236,72,153,0.2)]">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-[#ec4899]" />
            <span className="text-[#ec4899] text-[14px] font-bold uppercase tracking-wider">Bónus Extra Exclusivo</span>
          </div>
          
          <h3 className="text-white text-[24px] md:text-[28px] font-bold mb-3">
            Ebook: Boas Práticas no IMT
          </h3>
          
          <p className="text-[#a2a2b8] mb-6">
            Preparámos um ebook completo com TUDO o que precisas saber para passar no exame do IMT de primeira tentativa. 
            Estratégias comprovadas, dicas práticas e segredos que as escolas de condução não contam!
          </p>

            <a 
              href="/obrigado/ebook"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ec4899] to-[#db2777] hover:from-[#db2777] hover:to-[#be185d] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(236,72,153,0.4)] animate-pulse-slow"
            >
              <BookOpen className="w-5 h-5" />
              <span>Ebook Bónus Boas Práticas no IMT</span>
              <ArrowRight className="w-5 h-5" />
            </a>
        </div>

        {/* Next Steps */}
        <div className="bg-[#0c0f16] border border-[#1e293b] rounded-[24px] p-6 md:p-10 mb-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#22c55e]/10 rounded-full flex items-center justify-center">
            <Target className="w-8 h-8 text-[#22c55e]" />
          </div>
          
          <h2 className="text-white text-[24px] md:text-[28px] font-bold mb-4">Próximos Passos</h2>
          
          <p className="text-[#a2a2b8] mb-6 max-w-[600px] mx-auto">
            Agora é contigo! Segue o plano de 30 dias, estuda com foco e vais ver os resultados. 
            Lembra-te: mais de <span className="text-white font-semibold">1747 portugueses</span> já passaram com este método. És o próximo!
          </p>

          <div className="bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-xl p-5 inline-block">
            <p className="text-[#22c55e] font-bold text-[18px] flex items-center gap-2 justify-center">
              <Target className="w-5 h-5" />
              Objetivo: Marca o teu exame do IMT para daqui a 30 dias!
            </p>
          </div>
        </div>

          {/* Footer */}
          <footer className="text-center pt-12 mt-12 border-t border-[#1e293b]">
            <p className="text-[#77778a] text-[14px] mb-2">
              © 2026 Highway Hack Instrutor Ivo · Material de estudo independente, não afiliado ao IMT.
            </p>
            <p className="text-[#77778a] text-[13px] mb-2">
              Tens dúvidas? Envia email para: <a href="mailto:suporte@highwayhack.com" className="text-[#22c55e] hover:underline">suporte@highwayhack.com</a>
            </p>
            <p className="text-[#77778a] text-[12px]">
              A cobrança aparecerá na sua fatura como &quot;Digistore24&quot;
            </p>
          </footer>
      </div>

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear forwards;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        `}</style>
    </main>
  );
}

export default function ObrigadoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#05070a]" />}>
      <ObrigadoContent />
    </Suspense>
  );
}
