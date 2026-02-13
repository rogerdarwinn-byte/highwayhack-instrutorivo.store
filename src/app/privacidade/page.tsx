import Link from "next/link";

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-[#05070a] text-[#e2e8f0]">
      <div className="max-w-[800px] mx-auto px-5 py-12 md:py-20">
        <Link href="/" className="text-[#22c55e] text-[14px] hover:underline mb-8 inline-block">&larr; Voltar</Link>

        <h1 className="text-[32px] md:text-[40px] font-extrabold text-white mb-8">Política de Privacidade</h1>

        <div className="space-y-6 text-[15px] leading-relaxed text-[#94a3b8]">
          <p><strong className="text-white">Última atualização:</strong> Fevereiro 2026</p>

          <p>A Highway Hack Instrutor Ivo (&quot;nós&quot;, &quot;nosso&quot;) respeita a sua privacidade e está empenhada em proteger os seus dados pessoais. Esta política explica como recolhemos, usamos e protegemos as suas informações.</p>

          <h2 className="text-[22px] font-bold text-white mt-8">1. Dados que Recolhemos</h2>
          <p>Quando compra os nossos produtos ou interage com o nosso site, podemos recolher:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nome e endereço de e-mail</li>
            <li>Informações de pagamento (processadas pela Digistore24)</li>
            <li>Dados de navegação e cookies</li>
          </ul>

          <h2 className="text-[22px] font-bold text-white mt-8">2. Como Usamos os Dados</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Para processar e entregar a sua compra</li>
            <li>Para enviar atualizações sobre o produto</li>
            <li>Para enviar comunicações de marketing (com o seu consentimento)</li>
            <li>Para melhorar o nosso site e serviços</li>
          </ul>

          <h2 className="text-[22px] font-bold text-white mt-8">3. Cancelamento de Inscrição (E-mails)</h2>
          <p>Pode cancelar a inscrição de qualquer e-mail que enviemos a qualquer momento:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Clicando no link &quot;Cancelar inscrição&quot; presente no rodapé de cada e-mail</li>
            <li>Enviando um e-mail para <a href="mailto:rogerdarwinn@icloud.com" className="text-[#22c55e] hover:underline">rogerdarwinn@icloud.com</a> com o assunto &quot;Cancelar inscrição&quot;</li>
          </ul>
          <p>O pedido será processado em até 48 horas.</p>

          <h2 className="text-[22px] font-bold text-white mt-8">4. Cookies</h2>
          <p>Usamos cookies e tecnologias semelhantes para analisar o tráfego e melhorar a experiência do utilizador. Pode gerir as preferências de cookies nas definições do seu navegador.</p>

          <h2 className="text-[22px] font-bold text-white mt-8">5. Partilha de Dados</h2>
          <p>Não vendemos os seus dados. Partilhamos apenas com a Digistore24 (processamento de pagamentos) e ferramentas de análise necessárias ao funcionamento do site.</p>

          <h2 className="text-[22px] font-bold text-white mt-8">6. Os Seus Direitos</h2>
          <p>Ao abrigo do RGPD, tem direito a aceder, corrigir ou eliminar os seus dados pessoais. Para exercer esses direitos, contacte-nos em <a href="mailto:rogerdarwinn@icloud.com" className="text-[#22c55e] hover:underline">rogerdarwinn@icloud.com</a>.</p>

          <h2 className="text-[22px] font-bold text-white mt-8">7. Contacto</h2>
          <p>Para questões relacionadas com privacidade:<br />
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
