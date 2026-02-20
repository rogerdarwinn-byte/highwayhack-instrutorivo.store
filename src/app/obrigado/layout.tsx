import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obrigado! - Highway Hack",
};

export default function ObrigadoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Digistore24 - Página Obrigado */}
      <script
        type="text/javascript"
        src="https://www.digistore24.com/trusted-badge/44178/aGkuWV0CfTWXwJp/thankyoupage"
        async
      />
      {children}
    </>
  );
}
