import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Highway Hack - Aprovado no Código à Primeira",
  description: "O método passo a passo que mais de 1747 portugueses usaram para passar no IMT em até 14 dias (sem stress, sem decorar sinais nem pagar mensalidades intermináveis).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://gtm.highwayhack-instrutorivo.store/7czsumvizcb.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','8=CwdHLiIgWCMkO0w%2BOzUmVRReSEdHSxEdXwsTDh4aFAoKAhkCWwQbABYRDx0ZHxwFDU0JHRkfEA%3D%3D');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Preconnect to YouTube for faster video loading when user clicks play */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        {/* DNS prefetch as fallback for older browsers */}
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="93132b6c-be24-4b47-b845-8fd7f6b9bdc2"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
