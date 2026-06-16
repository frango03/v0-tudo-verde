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
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "69703f4b43dd1f1d5337dd3a";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
        <Script
          id="utmify"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
        />
      </head>
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
