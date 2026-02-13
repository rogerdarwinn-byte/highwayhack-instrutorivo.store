import Link from "next/link";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#05070a] text-[#e2e8f0]">
      <div className="max-w-[800px] mx-auto px-5 py-12 md:py-20">
        <Link href="/" className="text-[#22c55e] text-[14px] hover:underline mb-8 inline-block">&larr; Voltar</Link>

        <h1 className="text-[32px] md:text-[40px] font-extrabold text-white mb-8">Fale Conosco</h1>

        <div className="space-y-6 text-[15px] leading-relaxed text-[#94a3b8]">
          <p>Tem alguma dúvida, sugestão ou precisa de ajuda? Estamos aqui para ajudar!</p>

          <div className="bg-[#0c0f16] border border-[#1e293b] rounded-xl p-6 md:p-8 space-y-6">
            <div>
              <h2 className="text-[18px] font-bold text-white mb-2">E-mail</h2>
              <a href="mailto:rogerdarwinn@icloud.com" className="text-[#22c55e] hover:underline text-[16px]">rogerdarwinn@icloud.com</a>
              <p className="text-[13px] mt-1">Respondemos em até 24-48 horas úteis.</p>
            </div>

            <div>
              <h2 className="text-[18px] font-bold text-white mb-2">Assuntos Comuns</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Dúvidas sobre o produto</li>
                <li>Problemas de acesso ao conteúdo</li>
                <li>Solicitação de reembolso</li>
                <li>Cancelamento de inscrição de e-mails</li>
                <li>Sugestões e feedback</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[18px] font-bold text-white mb-2">Reembolso</h2>
              <p>Para solicitar reembolso dentro da garantia de 60 dias, envie um e-mail para <a href="mailto:rogerdarwinn@icloud.com" className="text-[#22c55e] hover:underline">rogerdarwinn@icloud.com</a> com o assunto &quot;Reembolso&quot; e incluindo o e-mail usado na compra. Também pode solicitar diretamente pela plataforma Digistore24.</p>
            </div>

            <div>
              <h2 className="text-[18px] font-bold text-white mb-2">Cancelar Inscrição de E-mails</h2>
              <p>Para deixar de receber os nossos e-mails, clique no link &quot;Cancelar inscrição&quot; presente no rodapé de cada e-mail, ou envie-nos um e-mail com o assunto &quot;Cancelar inscrição&quot;.</p>
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-[#1e293b] text-center text-[13px] text-[#77778a]">
          © 2026 Highway Hack Instrutor Ivo · Material de estudo independente, não afiliado ao IMT.
        </footer>
      </div>
    </main>
  );
}
