import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oferta Especial - Highway Hack",
};

export default function UpsellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Digistore24 - Página Upsell */}
      <script
        type="text/javascript"
        src="https://www.digistore24.com/trusted-badge/44177/A7xNQekASKS2Aeh/salespage"
        async
      />
      <script
        src="https://www.digistore24.com/service/digistore.js"
        async
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.addEventListener('load', function(){ if(typeof digistoreUpsell === 'function'){ digistoreUpsell(); } });`,
        }}
      />
      {children}
    </>
  );
}
