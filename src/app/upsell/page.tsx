"use client";

import { useEffect, useState } from "react";
import { useMetaPixel } from "@adkit.so/meta-pixel-next";
import { 
  Play,
  CheckCircle2, 
  XCircle,
  Clock,
  Shield,
  Zap,
  Video,
  Target,
  BookOpen,
  ArrowRight,
  Star,
  Users,
  Award,
  Smartphone,
  RefreshCw,
  AlertTriangle
} from "lucide-react";
import Link from "next/link";

// Countdown Timer Component
const CountdownTimer = () => {
  const [time, setTime] = useState(15 * 60); // 15 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="flex items-center justify-center gap-2 text-[24px] md:text-[32px] font-bold text-white">
      <div className="bg-[#ef4444] px-4 py-2 rounded-lg">
        {String(minutes).padStart(2, '0')}
      </div>
      <span className="text-[#ef4444]">:</span>
      <div className="bg-[#ef4444] px-4 py-2 rounded-lg">
        {String(seconds).padStart(2, '0')}
      </div>
    </div>
  );
};

// Video Module Item
const ModuleItem = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="bg-[#0c0f16] border border-[#1e293b] rounded-xl p-5 hover:border-[#22c55e]/50 transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-[#22c55e]/10 rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-[#22c55e] font-bold text-[14px]">{number}</span>
      </div>
      <div>
        <h4 className="text-white font-bold mb-1">{title}</h4>
        <p className="text-[#a2a2b8] text-[14px]">{description}</p>
      </div>
    </div>
  </div>
);

// Testimonial Card
const TestimonialCard = ({ quote, author, location }: { quote: string; author: string; location: string }) => (
  <div className="bg-[#0c0f16] border border-[#1e293b] rounded-xl p-6 hover:border-[#22c55e]/30 transition-all duration-300">
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-[#facc15] fill-[#facc15]" />
      ))}
    </div>
    <p className="text-[#a2a2b8] italic mb-4 text-[15px]">"{quote}"</p>
    <p className="text-[#22c55e] font-bold text-[14px]">— {author}, {location}</p>
  </div>
);

export default function UpsellPage() {
  const metaPixel = useMetaPixel();

  useEffect(() => {
    metaPixel.track("ViewContent", {
      content_name: "Upsell - Video Aulas Premium",
      content_category: "Upsell",
      value: 37,
      currency: "EUR",
    });
  }, [metaPixel]);

  const handleCTA = () => {
    metaPixel.track("InitiateCheckout", {
      content_name: "Video Aulas Premium",
      value: 37,
      currency: "EUR",
    });
  };

  return (
    <main className="min-h-screen bg-[#05070a] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#22c55e]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#ef4444]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Urgent Banner */}
      <div className="bg-gradient-to-r from-[#ef4444] to-[#dc2626] py-4 px-4 text-center animate-pulse">
        <p className="text-white font-bold text-[14px] md:text-[16px] flex items-center justify-center gap-2 flex-wrap">
          <AlertTriangle className="w-5 h-5" />
          OFERTA ESPECIAL APENAS PARA TI — EXPIRA EM 15 MINUTOS!
          <Clock className="w-5 h-5" />
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 py-8 md:py-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-[#ef4444]" />
            <span className="text-[#ef4444] text-[13px] font-bold uppercase">Oferta por tempo limitado</span>
          </div>
          
          <h1 className="text-[28px] md:text-[42px] font-extrabold mb-4 text-white leading-tight">
            ESPERA! Antes de Continuares...
          </h1>
          
          <p className="text-[#a2a2b8] text-[16px] md:text-[18px] max-w-[700px] mx-auto mb-6">
            Acabaste de garantir o teu acesso ao Highway Hack, mas há algo que quero partilhar contigo...
          </p>

          <div className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-2xl p-6 md:p-8 max-w-[600px] mx-auto shadow-[0_20px_60px_rgba(34,197,94,0.3)]">
            <p className="text-white text-[14px] uppercase tracking-wider mb-2 opacity-90">Queres aprender TUDO vendo vídeos passo a passo?</p>
            <p className="text-white text-[36px] md:text-[48px] font-black leading-tight">MAIS DE 30 AULAS</p>
            <p className="text-white/90 text-[16px] md:text-[18px]">Cada aula com <span className="font-bold">MAIS DE 1 HORA</span> de conteúdo!</p>
          </div>
        </div>

        {/* Video Preview */}
        <div className="bg-[#0c0f16] border border-[#22c55e] rounded-[24px] p-4 md:p-8 mb-10 shadow-[0_20px_60px_rgba(34,197,94,0.2)]">
          <div className="relative aspect-video rounded-xl overflow-hidden mb-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/IWUXFgDSI3c?rel=0&modestbranding=1" 
              title="Preview das Vídeo Aulas"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
          <div className="text-center">
            <h3 className="text-white text-[20px] md:text-[24px] font-bold mb-2">Vê como funciona o Método em Vídeo</h3>
            <p className="text-[#a2a2b8]">Mais de <span className="text-[#22c55e] font-bold">300 alunos</span> já conseguiram passar estudando apenas com os vídeos</p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          <div className="bg-[#0c0f16] border border-[#1e293b] rounded-xl p-6 hover:border-[#22c55e]/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#22c55e]/10 rounded-xl flex items-center justify-center mb-4">
              <Video className="w-7 h-7 text-[#22c55e]" />
            </div>
            <h3 className="text-white text-[18px] font-bold mb-2">Aprende Visualmente</h3>
            <p className="text-[#a2a2b8] text-[14px]">Mais de 30 vídeo aulas explicativas de TODOS os temas do código, cada uma com MAIS DE 1 HORA de conteúdo detalhado.</p>
          </div>

          <div className="bg-[#0c0f16] border border-[#1e293b] rounded-xl p-6 hover:border-[#22c55e]/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#facc15]/10 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-7 h-7 text-[#facc15]" />
            </div>
            <h3 className="text-white text-[18px] font-bold mb-2">Estuda Mais Rápido</h3>
            <p className="text-[#a2a2b8] text-[14px]">Aprende em metade do tempo comparado com apenas ler. Vê, ouve e memoriza automaticamente.</p>
          </div>

          <div className="bg-[#0c0f16] border border-[#1e293b] rounded-xl p-6 hover:border-[#22c55e]/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#6366f1]/10 rounded-xl flex items-center justify-center mb-4">
              <Smartphone className="w-7 h-7 text-[#6366f1]" />
            </div>
            <h3 className="text-white text-[18px] font-bold mb-2">Vê Onde Quiseres</h3>
            <p className="text-[#a2a2b8] text-[14px]">Acessa os vídeos no telemóvel, tablet ou computador. Estuda no autocarro, em casa ou na pausa do trabalho.</p>
          </div>

          <div className="bg-[#0c0f16] border border-[#1e293b] rounded-xl p-6 hover:border-[#22c55e]/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#ec4899]/10 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-[#ec4899]" />
            </div>
            <h3 className="text-white text-[18px] font-bold mb-2">Foco no Essencial</h3>
            <p className="text-[#a2a2b8] text-[14px]">Cada vídeo foca APENAS no que cai no exame, sem perder tempo com informação desnecessária.</p>
          </div>

          <div className="bg-[#0c0f16] border border-[#1e293b] rounded-xl p-6 hover:border-[#22c55e]/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#3b82f6]/10 rounded-xl flex items-center justify-center mb-4">
              <RefreshCw className="w-7 h-7 text-[#3b82f6]" />
            </div>
            <h3 className="text-white text-[18px] font-bold mb-2">Revê Quantas Vezes</h3>
            <p className="text-[#a2a2b8] text-[14px]">Tens dúvidas? Volta atrás e vê novamente. Acesso vitalício a todos os vídeos!</p>
          </div>

          <div className="bg-[#0c0f16] border border-[#1e293b] rounded-xl p-6 hover:border-[#22c55e]/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-[#22c55e]/10 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-[#22c55e]" />
            </div>
            <h3 className="text-white text-[18px] font-bold mb-2">Aprovação Garantida</h3>
            <p className="text-[#a2a2b8] text-[14px]">Se seguires o método completo em vídeo e não passares, devolvemos o teu dinheiro!</p>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="bg-[#0c0f16] border border-[#1e293b] rounded-[24px] p-6 md:p-10 mb-10">
          <h2 className="text-center text-white text-[24px] md:text-[32px] font-bold mb-8">
            Com ou Sem as <span className="text-[#22c55e]">Vídeo Aulas</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Without */}
            <div className="bg-[#ef4444]/5 border-2 border-[#ef4444]/30 rounded-xl p-6">
              <h3 className="text-[#ef4444] text-[20px] font-bold mb-6 flex items-center gap-2 justify-center">
                <XCircle className="w-6 h-6" /> Sem os Vídeos
              </h3>
              <div className="space-y-4">
                {[
                  "Tens que ler tudo sozinho e interpretar",
                  "Pode levar semanas para entender tudo",
                  "Ficas com dúvidas e não sabes a quem perguntar",
                  "Perdes tempo a procurar informações",
                  "Não tens certeza se estás a estudar o importante"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#ef4444] flex-shrink-0 mt-0.5" />
                    <span className="text-[#a2a2b8] text-[14px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* With */}
            <div className="bg-[#22c55e]/5 border-2 border-[#22c55e] rounded-xl p-6 shadow-[0_10px_40px_rgba(34,197,94,0.15)]">
              <h3 className="text-[#22c55e] text-[20px] font-bold mb-6 flex items-center gap-2 justify-center">
                <CheckCircle2 className="w-6 h-6" /> Com os Vídeos Premium
              </h3>
              <div className="space-y-4">
                {[
                  "Vês, ouves e aprendes 3x mais rápido",
                  "Dominas tudo em apenas 7-10 dias",
                  "Todas as dúvidas explicadas em detalhe",
                  "Estudo direcionado - zero desperdício",
                  "Foco total no que realmente cai no exame"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span className="text-white text-[14px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modules List */}
        <div className="bg-[#0c0f16] border border-[#1e293b] rounded-[24px] p-6 md:p-10 mb-10">
          <div className="text-center mb-8">
            <h2 className="text-white text-[24px] md:text-[32px] font-bold mb-3">
              O Que Recebes nas <span className="text-[#22c55e]">Vídeo Aulas</span>
            </h2>
            <div className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full px-4 py-2">
              <Video className="w-4 h-4 text-[#22c55e]" />
              <span className="text-[#22c55e] font-bold">Mais de 30 Horas de Vídeo Aulas Gravadas</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ModuleItem 
              number="01" 
              title="Sinalização Vertical e Horizontal" 
              description="Todos os sinais que caem no exame explicados visualmente com exemplos práticos"
            />
            <ModuleItem 
              number="02" 
              title="Regras de Prioridade e Cedência" 
              description="Como saber quem passa primeiro em QUALQUER situação (rotundas, cruzamentos, etc)"
            />
            <ModuleItem 
              number="03" 
              title="Ultrapassagens (O Tema Pesadelo!)" 
              description="Domina o tema que mais reprova - explicado passo a passo com situações reais"
            />
            <ModuleItem 
              number="04" 
              title="Velocidades e Distâncias" 
              description="Nunca mais te enganes nos limites de velocidade e distâncias de segurança"
            />
            <ModuleItem 
              number="05" 
              title="Estacionamento e Paragem" 
              description="Onde podes e não podes parar ou estacionar - sem confusões"
            />
            <ModuleItem 
              number="06" 
              title="Luzes e Visibilidade" 
              description="Quando usar médios, máximos, nevoeiro - explicado de forma simples"
            />
            <ModuleItem 
              number="07" 
              title="Álcool, Drogas e Infrações" 
              description="Tudo sobre taxas, coimas e pontos na carta"
            />
            <ModuleItem 
              number="08" 
              title="Primeiros Socorros" 
              description="O que fazer em caso de acidente - passo a passo visual"
            />
            <ModuleItem 
              number="🎁" 
              title="BÓNUS: Simulados Comentados" 
              description="10 simulados COMPLETOS com explicação de cada pergunta em vídeo"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-10">
          <h2 className="text-center text-white text-[24px] md:text-[32px] font-bold mb-8">
            O Que os <span className="text-[#22c55e]">Alunos Dizem</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <TestimonialCard 
              quote="Os vídeos são INCRÍVEIS! Passei em 12 dias a ver apenas os vídeos. Muito melhor que ler aquele livro enorme."
              author="Sofia Costa"
              location="Lisboa"
            />
            <TestimonialCard 
              quote="Reprovei 2x antes de comprar os vídeos. Com as explicações visuais finalmente entendi as ultrapassagens!"
              author="Miguel Santos"
              location="Porto"
            />
            <TestimonialCard 
              quote="Trabalho o dia todo e só tinha tempo à noite. Via 1-2 vídeos por dia no telemóvel e passei com 1 errada!"
              author="Ana Pereira"
              location="Coimbra"
            />
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-[24px] p-6 md:p-12 text-center mb-10 shadow-[0_20px_60px_rgba(34,197,94,0.4)]">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-white" />
            <span className="text-white text-[13px] font-bold uppercase">Oferta Exclusiva Para Quem Acabou de Comprar</span>
          </div>

          <h2 className="text-white text-[28px] md:text-[36px] font-bold mb-4">
            Acesso Completo às Vídeo Aulas
          </h2>

          <p className="text-white/70 text-[24px] line-through mb-2">Valor Normal: 147€</p>
          
          <div className="mb-2">
            <span className="text-white text-[18px]">HOJE APENAS:</span>
          </div>
          
          <p className="text-white text-[56px] md:text-[72px] font-black leading-none mb-2">37€</p>
          
          <p className="text-white/90 text-[16px] mb-8">Ou 3x de 12,33€ sem juros</p>

          <a 
            href="#checkout"
            onClick={handleCTA}
            className="inline-flex items-center justify-center gap-3 bg-white text-[#16a34a] font-black text-[16px] md:text-[18px] py-5 px-10 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] uppercase"
          >
            <span>SIM! QUERO AS VÍDEO AULAS AGORA</span>
            <ArrowRight className="w-6 h-6" />
          </a>

          {/* Countdown */}
          <div className="mt-8 bg-black/20 rounded-xl p-4 inline-block">
            <p className="text-white/80 text-[14px] mb-3 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" /> Esta oferta expira em:
            </p>
            <CountdownTimer />
          </div>

          {/* Guarantee */}
          <div className="mt-8 bg-white/10 rounded-xl p-5 max-w-[500px] mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white font-bold">Garantia Total de 7 Dias</span>
            </div>
            <p className="text-white/80 text-[14px]">
              Se não achares que os vídeos valem cada cêntimo, devolvemos 100% do valor. Sem perguntas, sem stress.
            </p>
          </div>
        </div>

        {/* Warning Section */}
        <div className="bg-[#ef4444]/10 border-2 border-[#ef4444] rounded-[24px] p-6 md:p-8 text-center mb-10">
          <AlertTriangle className="w-12 h-12 text-[#ef4444] mx-auto mb-4" />
          <h3 className="text-[#ef4444] text-[24px] md:text-[28px] font-bold mb-3">ATENÇÃO!</h3>
          <p className="text-[#a2a2b8] max-w-[600px] mx-auto">
            Esta oferta especial de <span className="text-white font-bold">75% de desconto</span> é EXCLUSIVA para quem acabou de comprar o Highway Hack. 
            Se fechares esta página, <span className="text-[#ef4444] font-bold">perdes o acesso a este preço para sempre</span>.
          </p>
        </div>

        {/* No Thanks Link */}
        <div className="text-center">
          <Link 
            href="/obrigado"
            className="text-[#77778a] text-[14px] hover:text-white transition-colors underline"
          >
            Não, obrigado. Quero continuar sem as vídeo aulas.
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-center pt-12 mt-12 border-t border-[#1e293b]">
          <p className="text-[#77778a] text-[14px] mb-2">
            © 2026 Highway Hack Instrutor Ivo · Material de estudo independente, não afiliado ao IMT.
          </p>
        </footer>
      </div>
    </main>
  );
}
