import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "700", "800"]
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "900"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: '🐶🐾 Mega Coleção Pets Amigurumi por Raça + 5 BÔNUS 🎁',
  description: 'Transforme seu pet em um amigurumi identico. Mais de 60 padroes organizados por raca projetados para capturar seus tracos unicos e expressao real. Download imediato em PDF. Inclui 5 bonus exclusivos.',
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" style={{ all: "unset" }}>
      <head>
        <Script id="utmify-tracking" strategy="afterInteractive">
          {`
            (function() {
              // CONFIG
              const PIXEL_ID = "69703f4b43dd1f1d5337dd3a";

              // LOAD UTMIFY
              var utmScript = document.createElement("script");
              utmScript.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
              utmScript.setAttribute("data-utmify-prevent-xcod-sck", "");
              utmScript.setAttribute("data-utmify-prevent-subids", "");
              utmScript.async = true;
              utmScript.defer = true;
              document.head.appendChild(utmScript);

              // LOAD PIXEL
              window.pixelId = PIXEL_ID;

              var pixelScript = document.createElement("script");
              pixelScript.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
              pixelScript.async = true;
              pixelScript.defer = true;
              document.head.appendChild(pixelScript);

              // IC (INITIATE CHECKOUT)
              window.iniciarCheckout = function() {
                try {
                  if (typeof utmify !== "undefined") {
                    utmify.track('InitiateCheckout');
                    console.log("IC disparado");
                  }
                } catch(e) {
                  console.log("Erro IC:", e);
                }
              };

              // PEGAR VALOR DINÂMICO
              function getValor() {
                const params = new URLSearchParams(window.location.search);
                let valor = params.get("value");
                if (valor) return parseFloat(valor);

                let precoEl = document.querySelector('[data-price], .price, #price');
                if (precoEl) {
                  let texto = precoEl.innerText.replace(",", ".").replace(/[^\\d.]/g, "");
                  if (texto) return parseFloat(texto);
                }
                return null;
              }

              // PURCHASE
              function dispararPurchase() {
                try {
                  if (typeof utmify !== "undefined") {
                    const valor = getValor();
                    if (valor) {
                      utmify.track('Purchase', { value: valor, currency: 'BRL' });
                      console.log("Purchase com valor:", valor);
                    } else {
                      utmify.track('Purchase');
                      console.log("Purchase sem valor");
                    }
                  }
                } catch(e) {
                  console.log("Erro Purchase:", e);
                }
              }

              // DETECTAR THANK YOU PAGE
              function isThankYouPage() {
                const url = window.location.href.toLowerCase();
                return url.includes("obrigado") ||
                       url.includes("thank-you") ||
                       url.includes("success") ||
                       url.includes("pedido-confirmado") ||
                       url.includes("compra-aprovada");
              }

              // EXECUÇÃO SEGURA
              function init() {
                if (isThankYouPage()) {
                  setTimeout(dispararPurchase, 1500);
                }
              }

              window.addEventListener("load", function() {
                setTimeout(init, 1000);
              });
            })();
          `}
        </Script>
      </head>
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
