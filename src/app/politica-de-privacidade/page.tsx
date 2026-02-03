import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen bg-[#05070a] py-16 px-5">
      <div className="max-w-[800px] mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar à página principal
        </Link>

        <h1 className="text-[32px] font-bold text-white mb-8">
          Política de Privacidade
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-[#94a3b8]">
          <p className="text-sm text-[#64748b]">
            Última atualização: Fevereiro de 2026
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Introdução</h2>
            <p>
              A tua privacidade é importante para nós. Esta Política de Privacidade explica 
              como o Highway Hack Instrutor Ivo recolhe, utiliza e protege os teus dados 
              pessoais quando utilizas o nosso site e serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Dados que Recolhemos</h2>
            <p>Podemos recolher os seguintes tipos de dados:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong className="text-white">Dados de identificação:</strong> nome e endereço de email fornecidos no momento da compra</li>
              <li><strong className="text-white">Dados de pagamento:</strong> processados de forma segura pela Digistore24 (não armazenamos dados de cartão)</li>
              <li><strong className="text-white">Dados de navegação:</strong> informações sobre como utilizas o nosso site através de cookies e tecnologias semelhantes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Como Utilizamos os Teus Dados</h2>
            <p>Utilizamos os dados recolhidos para:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Processar a tua compra e entregar o material adquirido</li>
              <li>Enviar atualizações sobre o produto e novos conteúdos</li>
              <li>Melhorar a experiência do utilizador no nosso site</li>
              <li>Cumprir obrigações legais e fiscais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Cookies e Rastreamento</h2>
            <p>
              O nosso site utiliza cookies e tecnologias de rastreamento, incluindo o Meta Pixel, 
              para analisar o tráfego e melhorar as nossas campanhas de marketing. Podes gerir 
              as tuas preferências de cookies através das definições do teu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Partilha de Dados</h2>
            <p>
              Não vendemos nem partilhamos os teus dados pessoais com terceiros, exceto:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Processadores de pagamento (Digistore24) para completar transações</li>
              <li>Serviços de email para entrega do material</li>
              <li>Quando exigido por lei ou autoridades competentes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Segurança dos Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger 
              os teus dados contra acesso não autorizado, perda ou destruição. No entanto, 
              nenhum método de transmissão pela Internet é 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Os Teus Direitos</h2>
            <p>
              Ao abrigo do Regulamento Geral de Proteção de Dados (RGPD), tens direito a:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Aceder aos teus dados pessoais</li>
              <li>Retificar dados incorretos</li>
              <li>Solicitar a eliminação dos teus dados</li>
              <li>Opor-te ao processamento dos teus dados</li>
              <li>Solicitar a portabilidade dos dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Retenção de Dados</h2>
            <p>
              Mantemos os teus dados pessoais apenas pelo tempo necessário para cumprir 
              as finalidades descritas nesta política ou conforme exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Alterações a Esta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer 
              alterações serão publicadas nesta página com a data de atualização revista.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">10. Contacto</h2>
            <p>
              Se tiveres questões sobre esta Política de Privacidade ou sobre os teus dados 
              pessoais, podes contactar-nos através do email disponível na nossa página principal.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
