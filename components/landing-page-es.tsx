"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import PurchaseNotificationEs from "./purchase-notification-es"

const LandingPageEs = () => {
  const [urgencyTime, setUrgencyTime] = useState({
    hours: 1,
    minutes: 14,
    seconds: 34,
  })

  const [activeTab, setActiveTab] = useState("flores")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  useEffect(() => {
    let totalSeconds = 1 * 3600 + 14 * 60 + 34

    const timer = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--
        const hours = Math.floor(totalSeconds / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        const seconds = totalSeconds % 60
        setUrgencyTime({ hours, minutes, seconds })
      } else {
        setUrgencyTime({ hours: 0, minutes: 0, seconds: 0 })
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const flores = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2g5JqaYnJWtBfTKxn4ZCcNYjdqOxWO.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-uip5X5QBTxS4LW7bbqj4TZYDaigoqn.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2g5JqaYnJWtBfTKxn4ZCcNYjdqOxWO.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-uip5X5QBTxS4LW7bbqj4TZYDaigoqn.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png",
  ]
  const suculentas = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2g5JqaYnJWtBfTKxn4ZCcNYjdqOxWO.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-uip5X5QBTxS4LW7bbqj4TZYDaigoqn.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2g5JqaYnJWtBfTKxn4ZCcNYjdqOxWO.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-uip5X5QBTxS4LW7bbqj4TZYDaigoqn.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png",
  ]

  const scrollToPricing = () => {
    const plansContainer = document.getElementById("pricing-plans")
    if (plansContainer) {
      plansContainer.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/60 via-white to-green-50/30 font-sans overflow-x-hidden">
      <PurchaseNotificationEs />

      {/* Urgency Banner - Fixed Top */}
      <div className="bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 text-white py-3 sm:py-4 px-3 relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_30px,rgba(255,255,255,0.04)_30px,rgba(255,255,255,0.04)_60px)]" />
        <div className="relative z-10 flex flex-col items-center gap-1.5 sm:gap-2">
          <p className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider">
            Las inscripciones cierran hoy
          </p>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5">
              <div className="bg-white/25 backdrop-blur-sm rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 min-w-[44px] sm:min-w-[52px] text-center shadow-lg">
                <span className="text-lg sm:text-xl md:text-2xl font-bold font-display tabular-nums">
                  {String(urgencyTime.hours).padStart(2, "0")}
                </span>
              </div>
              <span className="text-xl font-bold opacity-80">:</span>
              <div className="bg-white/25 backdrop-blur-sm rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 min-w-[44px] sm:min-w-[52px] text-center shadow-lg">
                <span className="text-lg sm:text-xl md:text-2xl font-bold font-display tabular-nums">
                  {String(urgencyTime.minutes).padStart(2, "0")}
                </span>
              </div>
              <span className="text-xl font-bold opacity-80">:</span>
              <div className="bg-white/25 backdrop-blur-sm rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 min-w-[44px] sm:min-w-[52px] text-center shadow-lg">
                <span className="text-lg sm:text-xl md:text-2xl font-bold font-display tabular-nums">
                  {String(urgencyTime.seconds).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="fixed top-24 left-6 w-20 h-20 opacity-15 pointer-events-none animate-float hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-400">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="12 6" />
        </svg>
      </div>
      <div className="fixed bottom-48 right-10 w-14 h-14 opacity-12 pointer-events-none animate-float hidden lg:block" style={{ animationDelay: "1.5s" }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-teal-300">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="12 6" />
        </svg>
      </div>
      <div className="fixed top-1/3 right-4 w-8 h-8 opacity-10 pointer-events-none animate-float hidden lg:block" style={{ animationDelay: "2s" }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-green-400">
          <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-emerald-100/70 via-green-50/50 to-white yarn-texture">
        {/* Hero Image Area */}
        <div className="relative h-52 sm:h-60 md:h-80 lg:h-[28rem] overflow-hidden rounded-b-[2.5rem] sm:rounded-b-[3rem] md:rounded-b-[4rem]">
          <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png" alt="Imagen Principal" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-emerald-900/15" />
        </div>

        {/* Content Card */}
        <div className="bg-white/95 backdrop-blur-sm mx-3 sm:mx-4 md:mx-auto md:max-w-xl lg:max-w-2xl -mt-14 sm:-mt-16 md:-mt-24 lg:-mt-28 rounded-3xl sm:rounded-[2rem] shadow-2xl p-5 sm:p-7 md:p-9 lg:p-12 relative z-10 border border-emerald-200/50">
          <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 mt-1 sm:mt-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png"
              alt="Universo Amigurumi - Digital Ebook con plantitas y bonos"
              width={600}
              height={400}
              priority
              className="object-contain w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[520px] h-auto drop-shadow-lg rounded-xl"
            />
          </div>

          <h1 className="text-emerald-800 text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug mb-3 sm:mb-4 md:mb-5 lg:mb-6 font-display text-balance">
            Aprende a crear plantitas hermosas y rentables en amigurumi. Transforma tu pasion por el crochet en un negocio verde y rentable, aunque estes empezando ahora.
          </h1>

          <p className="text-gray-600 text-[11px] sm:text-xs md:text-sm lg:text-base text-center leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            El <span className="font-bold text-emerald-700">Jardin Creativo Amigurumi</span> es el curso de{" "}
            <span className="font-bold text-emerald-700">Universo Amigurumi</span> que ensena, <span className="font-bold">de cero a avanzado</span>
            , a crear una coleccion exclusiva con <span className="font-bold">mas de 100 plantitas y suculentas</span>{" "}
            en amigurumi, pensadas para <span className="font-bold">encantar clientes</span>,{" "}
            <span className="font-bold">decorar ambientes</span> y <span className="font-bold">generar ingresos</span> con
            crochet.
          </p>

          <button
            onClick={scrollToPricing}
            className="w-full md:w-auto md:px-10 lg:px-12 md:mx-auto md:block bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-3 sm:py-3.5 md:py-4 lg:py-5 text-sm sm:text-base lg:text-lg rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 tracking-tight animate-pulse-soft"
          >
            QUIERO INSCRIBIRME EN EL CURSO
          </button>
        </div>

        {/* Decorative wave */}
        <div className="h-12 sm:h-16 md:h-20 lg:h-24 mt-6 sm:mt-8 relative">
          <svg viewBox="0 0 1440 120" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
            <path fill="white" d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </div>

      {/* Featured Plants Strip */}
      <div className="bg-white py-6 sm:py-8 overflow-hidden">
        <div className="flex animate-scroll-x gap-4 sm:gap-6">
          {[
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2g5JqaYnJWtBfTKxn4ZCcNYjdqOxWO.webp",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-uip5X5QBTxS4LW7bbqj4TZYDaigoqn.webp",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2g5JqaYnJWtBfTKxn4ZCcNYjdqOxWO.webp",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-uip5X5QBTxS4LW7bbqj4TZYDaigoqn.webp",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2g5JqaYnJWtBfTKxn4ZCcNYjdqOxWO.webp",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-uip5X5QBTxS4LW7bbqj4TZYDaigoqn.webp",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2g5JqaYnJWtBfTKxn4ZCcNYjdqOxWO.webp",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-uip5X5QBTxS4LW7bbqj4TZYDaigoqn.webp",
          ].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-emerald-100 shadow-md"
            >
              <Image
                src={src}
                alt={`Plantita amigurumi ${i + 1}`}
                width={150}
                height={150}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-8 sm:py-10 md:py-16 lg:py-20 px-3 sm:px-4 bg-white">
        <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-[11px] sm:text-xs md:text-sm text-emerald-700 font-medium">
            <span>{"📖"}</span> Galeria de Amigurumis
          </div>

          <h2 className="text-emerald-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 font-display">+de 100 Creaciones Magicas</h2>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8 md:max-w-xl lg:max-w-2xl">
            Explora una <span className="font-bold">vista previa</span> de las encantadoras plantitas que aprenderas a
            tejer a crochet. Cada patron fue disenado con amor para hacer florecer tu creatividad.
          </p>

          {/* Tabs */}
          <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-sm md:max-w-md">
            <button
              onClick={() => setActiveTab("flores")}
              className={`flex-1 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm sm:text-base lg:text-lg rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === "flores"
                  ? "bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 shadow-md border-2 border-emerald-300"
                  : "bg-gray-50 text-gray-400 hover:bg-emerald-50 hover:text-emerald-500"
              }`}
            >
              {"🌸"} Flores
            </button>
            <button
              onClick={() => setActiveTab("suculentas")}
              className={`flex-1 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm sm:text-base lg:text-lg rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === "suculentas"
                  ? "bg-gradient-to-r from-green-100 to-teal-100 text-green-700 shadow-md border-2 border-green-300"
                  : "bg-gray-50 text-gray-400 hover:bg-green-50 hover:text-green-500"
              }`}
            >
              {"🌵"} Suculentas
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 lg:gap-5">
            {activeTab === "flores"
              ? flores.map((image, i) => (
                  <div
                    key={i}
                    onClick={() => setLightboxImage(image)}
                    className="aspect-square bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-emerald-100 hover:border-emerald-300 hover-lift"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Flor en Amigurumi ${i + 1}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))
              : suculentas.map((image, i) => (
                  <div
                    key={i}
                    onClick={() => setLightboxImage(image)}
                    className="aspect-square bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-green-100 hover:border-green-300 hover-lift"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Suculenta en Amigurumi ${i + 1}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>

      {/* Fioleta IA Section */}
      

      {/* Success Stories */}
      <div className="py-8 sm:py-10 md:py-16 lg:py-20 px-3 sm:px-4 bg-gradient-to-b from-emerald-50 to-white dots-pattern">
        <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-[11px] sm:text-xs md:text-sm text-emerald-700 font-medium">
            Testimonios de Alumnas
          </div>

          <h2 className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 font-display">Historias de Exito de Nuestra Comunidad</h2>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-5 sm:mb-6 md:mb-8 md:max-w-xl lg:max-w-2xl">
            Nuestras alumnas ya superaron desafios y hacen crochet que <span className="font-bold text-emerald-600">encanta clientes</span>,
            generan <span className="font-bold text-green-600">ingresos extra</span> y despiertan una{" "}
            <span className="font-bold text-amber-600">alegria</span> inolvidable.
          </p>

          <div className="space-y-3 sm:space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 lg:gap-6 mb-4 sm:mb-6">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-emerald-100 hover:border-emerald-200 hover-lift">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0a14939d-b061-41b7-9235-ab76b98da915-b2DYX0wsAW3oy7ox2UiBwCAJos2OCC.png"
                alt="Testimonio Maria de Lurdes"
                width={600}
                height={800}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-emerald-100 hover:border-emerald-200 hover-lift">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1da01890-9e09-43fe-9638-c92bb2ad41cc-F9aJkOMissTBoHPPnHSzakPoNHtVXv.png"
                alt="Testimonio Gabriela Fonseca"
                width={600}
                height={800}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Exclusive Bonus Packs Section */}
      <div className="py-10 sm:py-12 md:py-20 lg:py-24 px-3 sm:px-4 bg-white">
        <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-14">
            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-[11px] sm:text-xs md:text-sm text-amber-600 font-medium mx-auto">
              {"🎁"} Bonos Exclusivos
            </div>

            <h2 className="text-emerald-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 font-display text-balance">
              Bonos Exclusivos Que Recibes Hoy
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg max-w-xl mx-auto">
              3 Packs Profesionales de Amigurumi Para Multiplicar Tus Ventas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
            {/* Card 1 - Anime & Series */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:scale-105 hover:border-emerald-200 transition-all duration-300 group">
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-gray-50 to-white">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png"
                  alt="Bonus Anime y Series - Pack Amigurumi"
                  fill
                  className="object-contain p-3 sm:p-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 text-center">
                <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1.5 sm:mb-2 font-display">Anime & Series</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Personajes inspirados en animes y series que se venden como agua.
                </p>
              </div>
            </div>

            {/* Card 2 - Pack Terror Halloween */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:scale-105 hover:border-emerald-200 transition-all duration-300 group">
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-gray-50 to-white">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png"
                  alt="Bonus Pack Terror Halloween - Pack Amigurumi"
                  fill
                  className="object-contain p-3 sm:p-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 text-center">
                <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1.5 sm:mb-2 font-display">Pack Terror Halloween</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Coleccion tematica de Halloween para fechas estacionales altamente lucrativas.
                </p>
              </div>
            </div>

            {/* Card 3 - Amigos del Bosque */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:scale-105 hover:border-emerald-200 transition-all duration-300 group">
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-gray-50 to-white">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png"
                  alt="Bonus Amigos del Bosque - Pack Amigurumi"
                  fill
                  className="object-contain p-3 sm:p-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 text-center">
                <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1.5 sm:mb-2 font-display">Amigos del Bosque</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Coleccion tierna estilo bosque con alto atractivo emocional.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToPricing}
              className="bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-3.5 sm:py-4 md:py-5 px-8 sm:px-10 md:px-14 text-sm sm:text-base lg:text-lg rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 tracking-tight"
            >
              Quiero Garantizar Mis 3 Bonos Ahora
            </button>
          </div>
        </div>
      </div>

      {/* What You'll Learn - Plant Showcase */}
      <div className="py-10 sm:py-12 md:py-20 px-3 sm:px-4 bg-gradient-to-b from-white via-emerald-50/40 to-white">
        <div className="max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-[11px] sm:text-xs md:text-sm text-emerald-700 font-medium">
              Mira lo que vas a crear
            </div>
            <h2 className="text-emerald-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-display text-balance">
              Plantitas que Enamoran y Venden
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 max-w-lg mx-auto">
              Cada pieza es unica, hecha a mano con amor. Aprende a crear desde las mas simples hasta las mas elaboradas.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {/* Large featured */}
            <div className="col-span-2 row-span-2 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-emerald-100 group cursor-pointer" onClick={() => setLightboxImage("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png")}>
              <div className="aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png"
                  alt="Orquidea amigurumi"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-5">
                <span className="text-white font-bold text-sm sm:text-base font-display">Orquidea Premium</span>
                <p className="text-white/80 text-[10px] sm:text-xs mt-0.5">Nivel intermedio</p>
              </div>
            </div>

            {/* Top right */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-emerald-100 group cursor-pointer" onClick={() => setLightboxImage("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png")}>
              <div className="aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png"
                  alt="Cactus amigurumi"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4">
                <span className="text-white font-bold text-xs sm:text-sm font-display">Cactus</span>
              </div>
            </div>

            {/* Top right 2 */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-emerald-100 group cursor-pointer" onClick={() => setLightboxImage("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2g5JqaYnJWtBfTKxn4ZCcNYjdqOxWO.webp")}>
              <div className="aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2g5JqaYnJWtBfTKxn4ZCcNYjdqOxWO.webp"
                  alt="Lavanda amigurumi"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4">
                <span className="text-white font-bold text-xs sm:text-sm font-display">Lavanda</span>
              </div>
            </div>

            {/* Bottom right */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-emerald-100 group cursor-pointer" onClick={() => setLightboxImage("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-uip5X5QBTxS4LW7bbqj4TZYDaigoqn.webp")}>
              <div className="aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-uip5X5QBTxS4LW7bbqj4TZYDaigoqn.webp"
                  alt="Margarita amigurumi"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4">
                <span className="text-white font-bold text-xs sm:text-sm font-display">Margaritas</span>
              </div>
            </div>

            {/* Bottom right 2 */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-emerald-100 group cursor-pointer" onClick={() => setLightboxImage("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png")}>
              <div className="aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png"
                  alt="Flor amigurumi"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4">
                <span className="text-white font-bold text-xs sm:text-sm font-display">Flor Exotica</span>
              </div>
            </div>
          </div>

          {/* Second row - 4 equal items */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-5 mt-3 sm:mt-4 md:mt-5">
            {[
              { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png", name: "Suculenta Mini" },
              { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png", name: "Rosa Encantada" },
              { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2g5JqaYnJWtBfTKxn4ZCcNYjdqOxWO.webp", name: "Suculenta Verde" },
              { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-uip5X5QBTxS4LW7bbqj4TZYDaigoqn.webp", name: "Tulipan" },
            ].map((item, i) => (
              <div key={i} className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border-2 border-emerald-100 group cursor-pointer" onClick={() => setLightboxImage(item.src)}>
                <div className="aspect-square">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 sm:p-3">
                  <span className="text-white font-bold text-[10px] sm:text-xs font-display">{item.name}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-[10px] sm:text-xs mt-4 sm:mt-6">Y muchas mas creaciones esperandote dentro del curso...</p>
        </div>
      </div>

      {/* Bonus */}
      <div className="py-8 sm:py-10 md:py-16 lg:py-20 px-3 sm:px-4 bg-white">
        <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-[11px] sm:text-xs md:text-sm text-amber-600 font-medium">
            {"🎁"} Bonos Exclusivos
          </div>

          <h2 className="text-emerald-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 font-display">Gana Aun Mas</h2>

          <div className="space-y-3 sm:space-y-4">
            <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border-2 border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="text-3xl sm:text-4xl animate-bounce-gentle">{"📅"}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1.5 sm:mb-2 font-display">
                    Coleccion Plantitas de Exito 2026
                    <br />
                    <span className="text-emerald-600">De regalo por registrarte</span>
                  </h3>
                  <p className="text-gray-600 text-[11px] sm:text-xs leading-relaxed">
                    Un calendario lleno de patrones unicos y creativos para que explores todo el ano. Accede a cualquier
                    plantita en cualquier momento y colecciona ingresos ilimitados.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/48d998db-ed4a-4050-8cb2-505dcb86f43e-OIVvPkWNzGoleWUEExBrP1AHzIt0oH.png"
                alt="Testimonios de clientas satisfechas"
                width={480}
                height={720}
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-lg border-2 border-emerald-100"
                loading="lazy"
              />
            </div>

            {[
              { icon: "🍯", title: "Guia de Precios", desc: "De regalo por registrarte", color: "amber" },
              { icon: "📄", title: "Kit Papeleria Digital", desc: "De regalo por registrarte", color: "sky" },
              { icon: "📅", title: "Coleccion Plantitas de Exito 2026", desc: "De regalo por registrarte", color: "emerald" },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-gradient-to-r ${
                  item.color === "amber" ? "from-amber-50 to-yellow-50 border-amber-200" :
                  item.color === "sky" ? "from-sky-50 to-blue-50 border-sky-200" :
                  "from-emerald-50 to-teal-50 border-emerald-200"
                } border-2 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hover:shadow-md transition-all duration-300 hover-lift`}
              >
                <div className="text-3xl sm:text-4xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-0.5 sm:mb-1 font-display">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plant Photos Before Pricing */}
      <div className="bg-gradient-to-b from-white to-emerald-50 py-6 sm:py-8 px-3 sm:px-4">
        <div className="max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
            {[
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2g5JqaYnJWtBfTKxn4ZCcNYjdqOxWO.webp",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-uip5X5QBTxS4LW7bbqj4TZYDaigoqn.webp",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d55ee38d-aed8-4baf-b7fc-b415a62f22fb-gEiKXak0IHX9mpwagzZ5XsA6F0olQC.png",
            ].map((src, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden border-2 border-emerald-100 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setLightboxImage(src)}
              >
                <Image
                  src={src}
                  alt={`Creacion amigurumi ${i + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="plano-completo" className="bg-gradient-to-b from-emerald-100 via-green-50 to-white py-8 sm:py-10 md:py-16 lg:py-20 px-3 sm:px-4 dots-pattern">
        <div className="max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-[11px] sm:text-xs md:text-sm text-emerald-700 font-medium">
              Elige tu plan
            </div>
            <h2 className="text-emerald-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-display text-balance">Comienza tu camino en el amigurumi</h2>
          </div>

          <div id="pricing-plans" className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 md:items-start">

            {/* Plan Basico - Card Style */}
            <div className="flex-1 max-w-sm mx-auto md:mx-0 w-full">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                {/* Green Header */}
                <div className="bg-emerald-600 text-white text-center py-3 sm:py-4 px-4">
                  <p className="text-sm sm:text-base font-bold leading-snug">
                    {"❤️"} Ideal para quienes estan empezando en el crochet amigurumi
                  </p>
                </div>

                <div className="p-5 sm:p-6">
                  {/* Product Image */}
                  <div className="flex justify-center mb-4">
                    
                  </div>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-1">
                      Precio normal <span className="line-through">$30 USD</span>
                    </p>
                    <h3 className="text-gray-800 text-lg sm:text-xl font-bold uppercase tracking-wide mb-2">
                      OFERTA EXCLUSIVA:
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-display">$9,90</span>
                      <span className="text-lg sm:text-xl font-bold text-gray-900">USD</span>
                    </div>
                    <p className="text-gray-500 text-[10px] sm:text-xs mt-1.5 leading-relaxed">
                      {'Equivalente local ($9,90). El cobro puede realizarse en USD.'}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-dashed border-gray-200 my-4" />

                  <p className="text-gray-500 text-[10px] sm:text-xs text-center uppercase tracking-widest font-semibold mb-1">
                    Precio en dolares
                  </p>
                  <p className="text-emerald-600 text-xs sm:text-sm text-center font-semibold mb-4">
                    {'Verifica el valor en tu moneda local'}
                  </p>

                  {/* CTA Button */}
                  <a
                    href="https://pay.hotmart.com/C102078250Q?checkoutMode=10&bid=1772242912043"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-center text-sm sm:text-base uppercase tracking-wide animate-pulse-soft"
                  >
                    {'QUIERO MI EBOOK!'}
                  </a>

                  {/* Features */}
                  <div className="mt-5 space-y-3">
                    {[
                      { bold: "25+ patrones exclusivos", rest: " de Plantas y Flores Amigurumi" },
                      { bold: "Paso a paso", rest: " en espanol" },
                      { bold: "Pago unico", rest: " Acceso de por vida" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                          <span className="font-bold">{item.bold}</span>{item.rest}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Payment Badges */}
                  <div className="mt-5 flex justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66a1d00548291_19-1024x119.png-yEjsolE0cBpjrTb6uIv6cN2dkZ9noB.webp"
                      alt="VISA, MasterCard, PayPal, OXXO - Compra Segura"
                      className="h-8 sm:h-9 object-contain opacity-60"
                    />
                  </div>

                  {/* Mini Countdown */}
                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <p className="text-gray-600 text-xs sm:text-sm text-center font-semibold mb-2">
                      Esta oferta termina en:
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="text-center">
                        <div className="bg-gray-900 text-white rounded-lg px-2.5 py-1.5 min-w-[40px]">
                          <span className="text-lg sm:text-xl font-bold tabular-nums font-display">
                            {String(urgencyTime.hours).padStart(2, "0")}
                          </span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 block">Horas</span>
                      </div>
                      <div className="text-center">
                        <div className="bg-gray-900 text-white rounded-lg px-2.5 py-1.5 min-w-[40px]">
                          <span className="text-lg sm:text-xl font-bold tabular-nums font-display">
                            {String(urgencyTime.minutes).padStart(2, "0")}
                          </span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 block">Minutos</span>
                      </div>
                      <div className="text-center">
                        <div className="bg-gray-900 text-white rounded-lg px-2.5 py-1.5 min-w-[40px]">
                          <span className="text-lg sm:text-xl font-bold tabular-nums font-display">
                            {String(urgencyTime.seconds).padStart(2, "0")}
                          </span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 block">Segundos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan Completo - Card Style (Highlighted) */}
            <div className="flex-1 max-w-sm mx-auto md:mx-0 w-full">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-emerald-400 relative">
                {/* MAS VENDIDO ribbon */}
                <div className="absolute top-0 left-0 right-0 z-10">
                  <div className="bg-red-500 text-white text-center py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    Mas Vendido
                  </div>
                </div>

                {/* Green Header */}
                <div className="bg-emerald-600 text-white text-center py-3 sm:py-4 px-4 pt-8 sm:pt-9">
                  <p className="text-sm sm:text-base font-bold leading-snug">
                    {"❤️"} Si amas el crochet, esta apostilla te va a conquistar. {'Garantizado!'}
                  </p>
                </div>

                <div className="p-5 sm:p-6">
                  {/* Product Image */}
                  <div className="flex justify-center mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png"
                      alt="Ebook Plantas y Flores Amigurumi - Plan Completo"
                      width={280}
                      height={200}
                      className="object-contain rounded-lg"
                    />
                  </div>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-1">
                      Precio normal <span className="line-through">$95 USD</span>
                    </p>
                    <h3 className="text-gray-800 text-lg sm:text-xl font-bold uppercase tracking-wide mb-2">
                      OFERTA EXCLUSIVA:
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-600 font-display">$14,90</span>
                      <span className="text-lg sm:text-xl font-bold text-emerald-600">USD</span>
                    </div>
                    <p className="text-gray-500 text-[10px] sm:text-xs mt-1.5 leading-relaxed">
                      {'Equivalente local ($14,90). El cobro puede realizarse en USD.'}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-dashed border-gray-200 my-4" />

                  <p className="text-gray-500 text-[10px] sm:text-xs text-center uppercase tracking-widest font-semibold mb-1">
                    Precio en dolares
                  </p>
                  <p className="text-emerald-600 text-xs sm:text-sm text-center font-semibold mb-4">
                    {'Verifica el valor en tu moneda local'}
                  </p>

                  {/* CTA Button */}
                  <a
                    href="https://pay.hotmart.com/I102081196A?checkoutMode=10&bid=1772237455516"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-center text-sm sm:text-base uppercase tracking-wide animate-pulse-soft"
                  >
                    {'QUIERO MI EBOOK!'}
                  </a>

                  {/* Features */}
                  <div className="mt-5 space-y-3">
                    {[
                      { bold: "100+ patrones exclusivos", rest: " de Plantas y Flores Amigurumi" },
                      { bold: "Paso a paso", rest: " en espanol" },
                      { bold: "Pago unico", rest: " Acceso de por vida" },
                      { bold: "3 Bonos exclusivos", rest: " incluidos gratis" },
                      { bold: "Asistente IA", rest: " 24h/dia + Comunidad" },
                      { bold: "Colecciones futuras", rest: " gratis siempre" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                          <span className="font-bold">{item.bold}</span>{item.rest}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Payment Badges */}
                  <div className="mt-5 flex justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66a1d00548291_19-1024x119.png-F3orGZZlI9RGieEfq2TXnxAgeLeZZG.webp"
                      alt="VISA, MasterCard, PayPal, OXXO - Compra Segura"
                      className="h-8 sm:h-9 object-contain opacity-60"
                    />
                  </div>

                  {/* Mini Countdown */}
                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <p className="text-gray-600 text-xs sm:text-sm text-center font-semibold mb-2">
                      Esta oferta termina en:
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="text-center">
                        <div className="bg-gray-900 text-white rounded-lg px-2.5 py-1.5 min-w-[40px]">
                          <span className="text-lg sm:text-xl font-bold tabular-nums font-display">
                            {String(urgencyTime.hours).padStart(2, "0")}
                          </span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 block">Horas</span>
                      </div>
                      <div className="text-center">
                        <div className="bg-gray-900 text-white rounded-lg px-2.5 py-1.5 min-w-[40px]">
                          <span className="text-lg sm:text-xl font-bold tabular-nums font-display">
                            {String(urgencyTime.minutes).padStart(2, "0")}
                          </span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 block">Minutos</span>
                      </div>
                      <div className="text-center">
                        <div className="bg-gray-900 text-white rounded-lg px-2.5 py-1.5 min-w-[40px]">
                          <span className="text-lg sm:text-xl font-bold tabular-nums font-display">
                            {String(urgencyTime.seconds).padStart(2, "0")}
                          </span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 block">Segundos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 border-dashed rounded-3xl p-6 mt-8 text-center shadow-lg max-w-sm sm:max-w-md md:max-w-lg mx-auto">
            <div className="mb-4">
              <Image
                src="https://i.ibb.co/5Xs3TZwx/30-dias-de-garantia-metodo-pi-compressor.png"
                alt="Garantia de 30 dias"
                width={180}
                height={180}
                className="mx-auto"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-amber-700 mb-2 font-display">
              30 Dias de Garantia
              <br />
              Incondicional
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Tienes 30 dias para explorar el contenido del curso, la calidad y los bonos. Si por cualquier motivo sientes
              que no es para ti, solo envianos un correo y te devolvemos el 100% del valor sin burocracia. Tu
              satisfaccion es nuestra prioridad.
            </p>
          </div>
        </div>
      </div>

      {/* Expert Section */}
      <div className="py-12 lg:py-20 px-4 bg-white">
        <div className="max-w-md lg:max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-4 py-1.5 inline-flex items-center gap-2 mb-4 text-xs lg:text-sm text-emerald-700 font-medium">
            Nuestra Mision
          </div>

          <h2 className="text-emerald-700 text-2xl lg:text-4xl font-bold mb-8 lg:max-w-2xl font-display leading-tight">
            Ayudarte a transformar tus habilidades de crochet en una fuente de ingresos, despues la realizacion personal.
          </h2>

          <div className="relative w-64 lg:w-80 h-80 lg:h-96 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-green-200 rounded-3xl transform rotate-3" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b3ae29-2393-4e63-b7e9-1038dea5d345-wm-dZrQFasP6g34iyEEXmuG6cJvEM9oxp.png"
              alt="Laura Vianell - Experta en Amigurumi"
              fill
              className="object-cover rounded-3xl shadow-xl relative z-10"
              loading="lazy"
            />
          </div>

          <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-6 lg:mb-8 lg:max-w-xl lg:mx-auto lg:text-center">
            Gisele Santos transformo su pasion por el crochet en un negocio prospero y en la mision de capacitar a otras
            personas. Ella cree que el amigurumi es mas que una artesania; es un camino hacia la independencia
            financiera y el aumento de la autoestima.
          </p>

          <div className="space-y-4 mb-8 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0 lg:max-w-2xl lg:mx-auto">
            <div className="flex gap-4 bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-2xl border border-amber-100 hover-lift">
              <div className="text-3xl">{"🏆"}</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1 font-display">
                  Metodo validado por +2500 alumnas
                </h3>
                <p className="text-sm text-gray-600">
                  Su metodo de ensenanza fue comprobado por mas de 2500 alumnas que ahora venden sus creaciones con
                  exito.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-2xl border border-emerald-100 hover-lift">
              <div className="text-3xl">{"🎯"}</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1 font-display">Nuestra Mision</h3>
                <p className="text-sm text-gray-600">
                  Ayudarte a transformar tus habilidades de crochet en una fuente de ingresos, alegria y realizacion personal.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-8 lg:mb-10 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-6 lg:p-8 border border-emerald-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3 font-display">Lista para Cultivar tu Talento en el Crochet?</h3>
            <p className="text-sm lg:text-base text-gray-600 mb-6 lg:max-w-lg lg:mx-auto">
              No pierdas la oportunidad de crear plantitas de amigurumi que encantan y transforman tu pasion en un negocio de
              exito. Inscribete ahora!
            </p>
          </div>

          <button
            onClick={scrollToPricing}
            className="w-full lg:w-auto lg:px-16 lg:mx-auto lg:block bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-4 lg:py-5 lg:text-lg rounded-2xl shadow-lg mb-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-pulse-soft"
          >
            QUIERO INSCRIBIRME
          </button>

          <div className="flex justify-center mb-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20%282%29-CVas4v5aUvGU77IKWTfkUqPjwiQOJk.png"
              alt="Sitio Seguro - Google - Sitio Blindado - Compra 100% Segura"
              className="object-contain opacity-70 w-auto h-36"
            />
          </div>

          <p className="text-center text-xs text-gray-400">{"©"} 2026 Universo Amigurumi. Todos los derechos reservados.</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden border-4 border-emerald-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-emerald-50 transition-colors border-2 border-emerald-200"
              aria-label="Cerrar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-4">
              <Image
                src={lightboxImage || "/placeholder.svg"}
                alt="Vista ampliada"
                width={800}
                height={800}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LandingPageEs
