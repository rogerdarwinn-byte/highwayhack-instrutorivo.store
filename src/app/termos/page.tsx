import Link from "next/link";

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-[#05070a] text-[#e2e8f0]">
      <div className="max-w-[800px] mx-auto px-5 py-12 md:py-20">
        <Link href="/" className="text-[#22c55e] text-[14px] hover:underline mb-8 inline-block">&larr; Voltar</Link>

        <h1 className="text-[32px] md:text-[40px] font-extrabold text-white mb-8">Termos e Condições</h1>

        <div className="space-y-6 text-[15px] leading-relaxed text-[#94a3b8]">
          <p><strong className="text-white">Última atualização:</strong> Fevereiro 2026</p>

          <h2 className="text-[22px] font-bold text-white mt-8">1. Sobre o Produto</h2>
          <p>O Highway Hack é um material de estudo digital independente para preparação para o exame teórico de condução em Portugal. <strong className="text-white">Não somos afiliados ao IMT</strong> (Instituto da Mobilidade e dos Transportes) nem a qualquer escola de condução.</p>

          <h2 className="text-[22px] font-bold text-white mt-8">2. Acesso ao Produto</h2>
          <p>Após a compra, receberá acesso imediato ao conteúdo digital através do e-mail fornecido no momento da compra. O acesso é pessoal e intransferível.</p>

          <h2 className="text-[22px] font-bold text-white mt-8">3. Pagamento</h2>
          <p>Todos os pagamentos são processados de forma segura pela <strong className="text-white">Digistore24</strong>. A cobrança aparecerá na sua fatura como &quot;Digistore24&quot;. Aceitamos cartões de crédito/débito e outros métodos de pagamento disponíveis na plataforma.</p>

          <h2 className="text-[22px] font-bold text-white mt-8">4. Garantia e Reembolso</h2>
          <p>Oferecemos uma garantia de <strong className="text-white">60 dias</strong>. Se não estiver satisfeito com o produto, pode solicitar o reembolso total em até 60 dias após a compra, sem perguntas. Para solicitar reembolso, contacte-nos em <a href="mailto:rogerdarwinn@icloud.com" className="text-[#22c55e] hover:underline">rogerdarwinn@icloud.com</a> ou diretamente pela plataforma Digistore24.</p>

          <h2 className="text-[22px] font-bold text-white mt-8">5. Propriedade Intelectual</h2>
          <p>Todo o conteúdo do Highway Hack (textos, vídeos, imagens, materiais de estudo) é protegido por direitos de autor. É proibida a reprodução, distribuição ou partilha do conteúdo sem autorização prévia.</p>

          <h2 className="text-[22px] font-bold text-white mt-8">6. Resultados</h2>
          <p>Os resultados podem variar de pessoa para pessoa. Não garantimos aprovação no exame teórico, pois depende do esforço e dedicação individual do aluno. O nosso método é uma ferramenta de estudo complementar.</p>

          <h2 className="text-[22px] font-bold text-white mt-8">7. Alterações aos Termos</h2>
          <p>Reservamo-nos o direito de alterar estes termos a qualquer momento. As alterações entram em vigor imediatamente após publicação nesta página.</p>

          <h2 className="text-[22px] font-bold text-white mt-8">8. Contacto</h2>
          <p>Para questões relacionadas com estes termos:<br />
          E-mail: <a href="mailto:rogerdarwinn@icloud.com" className="text-[#22c55e] hover:underline">rogerdarwinn@icloud.com</a><br />
          Website: highwayhack-instrutorivo.store</p>
        </div>

        <footer className="mt-16 pt-8 border-t border-[#1e293b] text-center text-[13px] text-[#77778a]">
          © 2026 Highway Hack Instrutor Ivo · Material de estudo independente, não afiliado ao IMT.
        </footer>
      </div>
    </main>
  );
}
