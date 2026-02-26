import type { Metadata, Viewport } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { PixelProvider } from "@/components/pixel-provider";

export const metadata: Metadata = {
  title: "Highway Hack - Aprovado no Código à Primeira",
  description: "O método passo a passo que mais de 1747 portugueses usaram para passar no IMT em até 14 dias (sem stress, sem decorar sinais nem pagar mensalidades intermináveis).",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KVQHD2SN');`,
          }}
        />
        <script type="text/javascript" src="https://www.digistore24.com/trusted-badge/44177/A7xNQekASKS2Aeh/salespage" async />
        <script src="https://www.digistore24-scripts.com/service/digistore.js" async />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.addEventListener('load', function(){ 
              if(typeof digistorePromocode === 'function'){ 
                digistorePromocode({ "product_id": 670107, "adjust_all_urls": true, "adjust_domain": true }); 
              } 
              
              const camouflageDigistore = () => {
                const selectors = '[class*="ds24"], [id*="ds24"], [class*="digistore"], [id*="digistore"], div[style*="position: fixed"]';
                const elements = document.querySelectorAll(selectors);
                elements.forEach(el => {
                  const style = window.getComputedStyle(el);
                  const isWhite = style.backgroundColor === 'rgb(255, 255, 255)' || style.backgroundColor === 'white' || style.backgroundColor === '#ffffff';
                  
                  if (isWhite) {
                    el.style.setProperty('background-color', '#05070a', 'important');
                    el.style.setProperty('background', '#05070a', 'important');
                    el.style.setProperty('color', '#ffffff', 'important');
                    el.style.setProperty('border-color', '#1e293b', 'important');
                  }
                  
                  el.querySelectorAll('img[src*="lock"], svg[class*="lock"], [class*="lock"], [id*="lock"], .ds24_lock, .ds24_badge_header, .ds24_badge_footer').forEach(node => {
                    node.style.setProperty('display', 'none', 'important');
                  });
                  
                  if (el.classList.contains('ds24_badge_inner') || el.classList.contains('ds24_trusted_badge') || el.id.includes('ds24-badge')) {
                    el.style.setProperty('display', 'flex', 'important');
                    el.style.setProperty('flex-direction', 'column', 'important');
                    el.style.setProperty('align-items', 'center', 'important');
                    el.style.setProperty('justify-content', 'center', 'important');
                    el.style.setProperty('text-align', 'center', 'important');
                    el.style.setProperty('padding-top', '5px', 'important');
                  }
                  
                  el.querySelectorAll('span, div, p').forEach(textEl => {
                    const content = (textEl.textContent || '').toLowerCase();
                    if (content.includes('encomende') || content.includes('segurança') || content.includes('seguranca') || content.includes('securely')) {
                      textEl.style.setProperty('display', 'none', 'important');
                    }
                  });
                  
                  el.querySelectorAll('img, svg').forEach(img => {
                     if (!img.classList.contains('no-invert') && !img.src?.includes('lock')) {
                       img.style.setProperty('filter', 'brightness(0) invert(1)', 'important');
                     }
                  });
                });
              };
              
              camouflageDigistore();
              setInterval(camouflageDigistore, 500);
            });`,
          }}
        />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KVQHD2SN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
        <PixelProvider>{children}</PixelProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
