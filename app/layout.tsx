import type React from "react"
import type { Metadata } from "next"
import { Nunito, Quicksand } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const nunito = Nunito({ subsets: ["latin"], display: "swap", variable: "--font-nunito" })
const quicksand = Quicksand({ subsets: ["latin"], display: "swap", variable: "--font-quicksand" })

export const metadata: Metadata = {
  title: "Universo Amigurumi - Curso de Crochet",
  description:
    "Aprende a crear plantitas hermosas y rentables en amigurumi. Transforma tu pasion por el crochet en un negocio verde y rentable!",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CL">
      <head>
        <link
          rel="preload"
          href="/_next/static/media/geist.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <Script src="https://fast.wistia.com/player.js" async />
        <Script src="https://fast.wistia.com/embed/yqyai63o6o.js" async type="module" />

        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          strategy="lazyOnload"
        />
        <Script id="utmify-pixel" strategy="lazyOnload">
          {`
            window.pixelId = "69703f4b43dd1f1d5337dd3a";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>

        <Script id="clarity-analytics" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "urqowljmhg");
          `}
        </Script>

        {/* Meta Pixel + CAPI */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;
              n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];
              t=b.createElement(e);t.async=!0;
              t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1119818613129898');
            fbq('track', 'PageView');
            fbq('track', 'ViewContent');

            document.addEventListener("DOMContentLoaded", function () {
              var btn = document.querySelector("#btn-comprar");
              if (btn) {
                btn.addEventListener("click", function () {
                  fbq('track', 'AddToCart');
                });
              }
            });

            window.sendCAPI = function(eventName, value) {
              fetch("https://graph.facebook.com/v19.0/1119818613129898/events", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  access_token: "EAA6nnUo7mjwBQjE5jWv6y79jYmsJh7uMTIFvovGFO0lZB349STQerzbYXcxp447GCIT4ia5RgGLeeCEuvAbzIBRRVupjKmvRr02H4Uhe6bf7iccEXyYF6a0ShpkY2QuJY8X1yBjC1KPBdFn5bmgVyR62eDnYORRN02J3NZCFvZBXCvDAm1uH6CqISyUs7gqRgZDZD",
                  data: [{
                    event_name: eventName,
                    event_time: Math.floor(Date.now() / 1000),
                    action_source: "website",
                    event_source_url: window.location.href,
                    user_data: {
                      client_user_agent: navigator.userAgent
                    },
                    custom_data: {
                      value: value,
                      currency: "CLP"
                    }
                  }]
                })
              });
            };
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1119818613129898&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${nunito.variable} ${quicksand.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
