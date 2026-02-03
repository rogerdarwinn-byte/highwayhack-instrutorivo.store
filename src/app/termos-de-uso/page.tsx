import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermosDeUso() {
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
          Termos de Uso
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-[#94a3b8]">
          <p className="text-sm text-[#64748b]">
            Última atualização: Fevereiro de 2026
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acederes e utilizares o site Highway Hack Instrutor Ivo e os seus materiais, 
              concordas em cumprir estes Termos de Uso. Se não concordares com alguma parte 
              destes termos, não deves utilizar os nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Descrição do Serviço</h2>
            <p>
              O Highway Hack Instrutor Ivo é um material de estudo independente para preparação 
              do exame teórico de código de estrada em Portugal. Este material é complementar 
              e não substitui a formação obrigatória nas escolas de condução certificadas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Uso do Material</h2>
            <p>
              O acesso ao material é pessoal e intransmissível. Não é permitido:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Partilhar, distribuir ou revender o material adquirido</li>
              <li>Reproduzir o conteúdo para fins comerciais</li>
              <li>Modificar ou criar obras derivadas sem autorização</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Pagamentos e Reembolsos</h2>
            <p>
              Todos os pagamentos são processados de forma segura através da plataforma Digistore24. 
              Oferecemos uma garantia de reembolso de 7 dias a partir da data de compra, 
              sem necessidade de justificação.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Limitação de Responsabilidade</h2>
            <p>
              O Highway Hack Instrutor Ivo é um material de apoio ao estudo. Não garantimos 
              a aprovação no exame do IMT, uma vez que o resultado depende do empenho individual 
              de cada utilizador. Não nos responsabilizamos por eventuais reprovações.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo disponibilizado, incluindo textos, gráficos, logotipos e metodologias, 
              é propriedade do Highway Hack Instrutor Ivo e está protegido pelas leis de direitos 
              de autor aplicáveis em Portugal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Alterações aos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. 
              As alterações entram em vigor imediatamente após a sua publicação nesta página.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Contacto</h2>
            <p>
              Para questões relacionadas com estes Termos de Uso, podes contactar-nos 
              através do email disponível na nossa página principal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Lei Aplicável</h2>
            <p>
              Estes Termos de Uso são regidos pela legislação portuguesa. Qualquer litígio 
              será submetido aos tribunais competentes em Portugal.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
