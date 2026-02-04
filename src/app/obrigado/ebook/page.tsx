"use client";

import { 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Target, 
  Shield,
  Lightbulb,
  Brain,
  Eye,
  FileText,
  Printer,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

export default function EbookPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-[#05070a] relative overflow-hidden print:bg-white print:text-black">
      {/* Background decorations - hidden on print */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#ec4899]/5 rounded-full blur-[150px] pointer-events-none print:hidden" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#22c55e]/5 rounded-full blur-[150px] pointer-events-none print:hidden" />

      <div className="max-w-[800px] mx-auto px-4 py-8 md:py-16 relative z-10">
        
        {/* Header Actions - hidden on print */}
        <div className="flex items-center justify-between mb-8 print:hidden">
          <Link 
            href="/obrigado"
            className="inline-flex items-center gap-2 text-[#a2a2b8] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </Link>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 bg-[#1e293b] hover:bg-[#2d3a4d] text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir / Guardar PDF</span>
          </button>
        </div>

        {/* Ebook Cover */}
        <div className="bg-gradient-to-br from-[#ec4899]/20 to-[#db2777]/10 border-2 border-[#ec4899] rounded-[24px] p-8 md:p-12 mb-10 text-center print:border-gray-300 print:bg-gray-50">
          <div className="w-20 h-20 mx-auto mb-6 bg-[#ec4899]/20 rounded-full flex items-center justify-center print:bg-pink-100">
            <BookOpen className="w-10 h-10 text-[#ec4899] print:text-pink-600" />
          </div>
          
          <p className="text-[#ec4899] text-[14px] font-bold uppercase tracking-wider mb-3 print:text-pink-600">
            Bónus Exclusivo Highway Hack
          </p>
          
          <h1 className="text-[32px] md:text-[42px] font-extrabold mb-4 text-white leading-tight print:text-gray-900">
            Boas Práticas no IMT
          </h1>
          
          <p className="text-[#a2a2b8] text-[16px] md:text-[18px] max-w-[600px] mx-auto print:text-gray-600">
            O guia completo com estratégias comprovadas para passares no exame teórico de primeira
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-[#0c0f16] border border-[#1e293b] rounded-[24px] p-6 md:p-10 mb-8 print:bg-white print:border-gray-200">
          <h2 className="text-white text-[24px] font-bold mb-4 flex items-center gap-3 print:text-gray-900">
            <Target className="w-6 h-6 text-[#22c55e]" />
            Introdução
          </h2>
          <p className="text-[#a2a2b8] leading-relaxed mb-4 print:text-gray-700">
            Passar no exame teórico do IMT não é só sobre decorar sinais ou ler o código da estrada. 
            É sobre <span className="text-white font-semibold print:text-gray-900">estratégia, preparação mental e técnicas de estudo eficazes</span>.
          </p>
          <p className="text-[#a2a2b8] leading-relaxed print:text-gray-700">
            Este ebook foi criado com base na experiência de mais de 1700 alunos que passaram usando o método Highway Hack. 
            Aqui encontras as melhores práticas que vão aumentar drasticamente as tuas chances de sucesso.
          </p>
        </div>

        {/* Section 1: Antes do Exame */}
        <div className="bg-[#0c0f16] border border-[#1e293b] rounded-[24px] p-6 md:p-10 mb-8 print:bg-white print:border-gray-200">
          <h2 className="text-white text-[24px] font-bold mb-6 flex items-center gap-3 print:text-gray-900">
            <Clock className="w-6 h-6 text-[#facc15]" />
            1. Preparação nas Semanas Antes do Exame
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#22c55e] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1 print:text-gray-900">Cria uma rotina de estudo diária</h3>
                <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">Estuda 20-30 minutos por dia, todos os dias. É mais eficaz do que estudar 3 horas num só dia.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#22c55e] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1 print:text-gray-900">Foca nos temas que mais reprovam</h3>
                <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">Ultrapassagens, prioridades e sinalização são os temas com mais erros. Dedica tempo extra a estes.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#22c55e] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1 print:text-gray-900">Faz simulados completos</h3>
                <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">Na última semana, faz pelo menos 2-3 simulados por dia. Habitua-te ao formato e tempo do exame real.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#22c55e] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1 print:text-gray-900">Anota os erros que repetes</h3>
                <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">Cria uma lista dos erros que cometes mais de uma vez. Revê essa lista antes do exame.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Dia do Exame */}
        <div className="bg-[#0c0f16] border border-[#1e293b] rounded-[24px] p-6 md:p-10 mb-8 print:bg-white print:border-gray-200">
          <h2 className="text-white text-[24px] font-bold mb-6 flex items-center gap-3 print:text-gray-900">
            <Shield className="w-6 h-6 text-[#6366f1]" />
            2. No Dia do Exame
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#22c55e] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1 print:text-gray-900">Dorme bem na noite anterior</h3>
                <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">Um cérebro descansado processa informação melhor. Evita estudar até tarde na véspera.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#22c55e] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1 print:text-gray-900">Come um pequeno-almoço leve</h3>
                <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">Evita refeições pesadas que causam sonolência. Opta por algo leve mas nutritivo.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#22c55e] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1 print:text-gray-900">Chega com antecedência</h3>
                <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">Chega 15-20 minutos antes. Evita o stress de chegar em cima da hora ou atrasado.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#22c55e] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1 print:text-gray-900">Leva documento de identificação</h3>
                <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">Cartão de Cidadão ou Passaporte válido. Sem identificação, não podes fazer o exame!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Durante o Exame */}
        <div className="bg-[#0c0f16] border border-[#1e293b] rounded-[24px] p-6 md:p-10 mb-8 print:bg-white print:border-gray-200">
          <h2 className="text-white text-[24px] font-bold mb-6 flex items-center gap-3 print:text-gray-900">
            <Brain className="w-6 h-6 text-[#ec4899]" />
            3. Durante o Exame - Estratégias de Resposta
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#22c55e] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1 print:text-gray-900">Lê TODA a pergunta com atenção</h3>
                <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">Muitos erros acontecem por leitura apressada. Lê a pergunta completa antes de olhar para as opções.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#22c55e] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1 print:text-gray-900">Atenção às palavras-chave</h3>
                <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">"Sempre", "nunca", "apenas", "exceto" - estas palavras mudam completamente o sentido da pergunta.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#22c55e] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1 print:text-gray-900">Analisa bem as imagens</h3>
                <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">Olha para TODOS os detalhes: sinais, marcas na estrada, posição dos veículos, peões, etc.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#22c55e] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1 print:text-gray-900">Em dúvida? Usa a lógica de segurança</h3>
                <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">Quando não tens a certeza, escolhe sempre a opção mais segura e prudente.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#22c55e] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1 print:text-gray-900">Não mudes respostas por impulso</h3>
                <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">Estatisticamente, a primeira intuição costuma estar certa. Só mudes se encontrares um erro claro.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Armadilhas Comuns */}
        <div className="bg-[#ef4444]/5 border-2 border-[#ef4444]/30 rounded-[24px] p-6 md:p-10 mb-8 print:bg-red-50 print:border-red-200">
          <h2 className="text-white text-[24px] font-bold mb-6 flex items-center gap-3 print:text-gray-900">
            <AlertTriangle className="w-6 h-6 text-[#ef4444]" />
            4. Armadilhas Mais Comuns - EVITA!
          </h2>
          
          <div className="space-y-4">
            <div className="bg-[#0c0f16] border border-[#ef4444]/20 rounded-xl p-4 print:bg-white print:border-red-200">
              <h3 className="text-[#ef4444] font-bold mb-2">Ultrapassagens em curvas</h3>
              <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">NUNCA é permitido ultrapassar em curvas de visibilidade reduzida, mesmo que não haja linha contínua.</p>
            </div>
            
            <div className="bg-[#0c0f16] border border-[#ef4444]/20 rounded-xl p-4 print:bg-white print:border-red-200">
              <h3 className="text-[#ef4444] font-bold mb-2">Confundir paragem com estacionamento</h3>
              <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">Paragem é temporária (carga/descarga, entrada/saída). Estacionamento é deixar o veículo parado sem vigilância.</p>
            </div>
            
            <div className="bg-[#0c0f16] border border-[#ef4444]/20 rounded-xl p-4 print:bg-white print:border-red-200">
              <h3 className="text-[#ef4444] font-bold mb-2">Prioridade nas rotundas</h3>
              <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">Quem está dentro da rotunda TEM prioridade. Quem entra deve ceder passagem.</p>
            </div>
            
            <div className="bg-[#0c0f16] border border-[#ef4444]/20 rounded-xl p-4 print:bg-white print:border-red-200">
              <h3 className="text-[#ef4444] font-bold mb-2">Distância de segurança</h3>
              <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">A "regra dos 2 segundos" aplica-se em condições normais. Com chuva ou nevoeiro, duplica ou triplica.</p>
            </div>
            
            <div className="bg-[#0c0f16] border border-[#ef4444]/20 rounded-xl p-4 print:bg-white print:border-red-200">
              <h3 className="text-[#ef4444] font-bold mb-2">Taxa de álcool para novos condutores</h3>
              <p className="text-[#a2a2b8] text-[14px] print:text-gray-600">Para condutores em regime probatório: 0,0 g/l (ZERO). Não confundir com os 0,5 g/l para condutores experientes.</p>
            </div>
          </div>
        </div>

        {/* Section 5: Dicas de Ouro */}
        <div className="bg-[#22c55e]/5 border-2 border-[#22c55e] rounded-[24px] p-6 md:p-10 mb-8 print:bg-green-50 print:border-green-300">
          <h2 className="text-white text-[24px] font-bold mb-6 flex items-center gap-3 print:text-gray-900">
            <Lightbulb className="w-6 h-6 text-[#facc15]" />
            5. Dicas de Ouro - Memoriza!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0c0f16] rounded-xl p-4 print:bg-white print:border print:border-gray-200">
              <p className="text-[#22c55e] font-bold mb-1">Velocidades em localidades</p>
              <p className="text-white text-[14px] print:text-gray-800">50 km/h (regra geral dentro das localidades)</p>
            </div>
            
            <div className="bg-[#0c0f16] rounded-xl p-4 print:bg-white print:border print:border-gray-200">
              <p className="text-[#22c55e] font-bold mb-1">Velocidades fora de localidades</p>
              <p className="text-white text-[14px] print:text-gray-800">90 km/h (estradas nacionais)</p>
            </div>
            
            <div className="bg-[#0c0f16] rounded-xl p-4 print:bg-white print:border print:border-gray-200">
              <p className="text-[#22c55e] font-bold mb-1">Autoestradas</p>
              <p className="text-white text-[14px] print:text-gray-800">Mín: 50 km/h | Máx: 120 km/h</p>
            </div>
            
            <div className="bg-[#0c0f16] rounded-xl p-4 print:bg-white print:border print:border-gray-200">
              <p className="text-[#22c55e] font-bold mb-1">Triângulo de sinalização</p>
              <p className="text-white text-[14px] print:text-gray-800">Mín. 30m (100m em autoestrada)</p>
            </div>
            
            <div className="bg-[#0c0f16] rounded-xl p-4 print:bg-white print:border print:border-gray-200">
              <p className="text-[#22c55e] font-bold mb-1">Luzes de cruzamento (médios)</p>
              <p className="text-white text-[14px] print:text-gray-800">Obrigatórias de noite e em túneis</p>
            </div>
            
            <div className="bg-[#0c0f16] rounded-xl p-4 print:bg-white print:border print:border-gray-200">
              <p className="text-[#22c55e] font-bold mb-1">Estacionar em subida</p>
              <p className="text-white text-[14px] print:text-gray-800">Rodas viradas para fora do passeio</p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-br from-[#ec4899]/10 to-[#22c55e]/10 border border-[#1e293b] rounded-[24px] p-6 md:p-10 text-center print:bg-gray-50 print:border-gray-200">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#22c55e]/10 rounded-full flex items-center justify-center print:bg-green-100">
            <Target className="w-8 h-8 text-[#22c55e]" />
          </div>
          
          <h2 className="text-white text-[24px] md:text-[28px] font-bold mb-4 print:text-gray-900">
            Estás Pronto Para Passar!
          </h2>
          
          <p className="text-[#a2a2b8] max-w-[600px] mx-auto mb-6 print:text-gray-600">
            Segue estas dicas, mantém a calma e confia no teu estudo. 
            Mais de <span className="text-white font-semibold print:text-gray-900">1747 portugueses</span> já passaram usando o método Highway Hack - tu és o próximo!
          </p>
          
          <div className="bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-xl p-5 inline-block print:bg-green-100 print:border-green-300">
            <p className="text-[#22c55e] font-bold text-[16px]">
              Boa sorte no teu exame! Vais conseguir!
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center pt-12 mt-12 border-t border-[#1e293b] print:border-gray-200">
          <p className="text-[#77778a] text-[14px] mb-4 print:text-gray-500">
            © 2026 Highway Hack Instrutor Ivo · Material de estudo independente, não afiliado ao IMT.
          </p>
          
          <Link 
            href="/obrigado"
            className="inline-flex items-center gap-2 text-[#22c55e] hover:underline print:hidden"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar à página de Obrigado</span>
          </Link>
        </footer>
      </div>

      {/* Print styles */}
      <style jsx>{`
        @media print {
          @page {
            margin: 2cm;
          }
        }
      `}</style>
    </main>
  );
}
