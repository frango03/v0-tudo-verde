"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import PurchaseNotification from "./purchase-notification"

const LandingPage = () => {
  const [urgencyTime, setUrgencyTime] = useState({
    days: 1,
    hours: 8,
    minutes: 20,
    seconds: 18,
  })
  const [deadlineDate, setDeadlineDate] = useState("")

  const [activeTab, setActiveTab] = useState("flores")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  useEffect(() => {
    const getTargetDate = () => {
      const now = new Date()
      const tomorrow = new Date(now)
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(23, 59, 59, 999)
      return tomorrow
    }

    const formatDeadlineDate = (date: Date) => {
      const day = date.getDate()
      const months = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
      ]
      const month = months[date.getMonth()]
      return `${day} de ${month}`
    }

    const targetDate = getTargetDate()
    setDeadlineDate(formatDeadlineDate(targetDate))

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        setUrgencyTime({ days, hours, minutes, seconds })
      } else {
        setUrgencyTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const flores = [
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2Fanturio.jpg&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2Ftulipas.jpg&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2Fgirassol.jpg&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2Fgerbera.jpg&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2Frosa-deserto.jpg&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F5.webp&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F8.webp&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F2.webp&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F10.webp&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F9.webp&w=640&q=75",
  ]
  const suculentas = [
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2Fnew-1.jpg&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2Fnew-2.jpg&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2Fnew-3.jpg&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2Fnew-4.jpg&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2Fnew-5.jpg&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2Fnew-6.jpg&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2F14.webp&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2F16.webp&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2F15.webp&w=640&q=75",
    "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2F13.webp&w=640&q=75",
  ]

  const scrollToPricing = () => {
    const plansContainer = document.getElementById("pricing-plans")
    if (plansContainer) {
      plansContainer.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/60 via-white to-green-50/30 font-sans overflow-x-hidden">
      <PurchaseNotification />

      {/* Urgency Banner - Fixed Top */}
      <div className="bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 text-white py-3 sm:py-4 px-3 relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_30px,rgba(255,255,255,0.04)_30px,rgba(255,255,255,0.04)_60px)]" />
        <div className="relative z-10 flex flex-col items-center gap-1.5 sm:gap-2">
          <p className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider">
            Inscrições abertas até dia {deadlineDate}
          </p>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5">
              <div className="bg-white/25 backdrop-blur-sm rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 min-w-[44px] sm:min-w-[52px] text-center shadow-lg">
                <span className="text-lg sm:text-xl md:text-2xl font-bold font-display tabular-nums">
                  {String(urgencyTime.days).padStart(2, "0")}
                </span>
                <span className="block text-[8px] sm:text-[10px] uppercase tracking-wide opacity-90 font-medium">Dias</span>
              </div>
              <span className="text-xl font-bold opacity-80">:</span>
              <div className="bg-white/25 backdrop-blur-sm rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 min-w-[44px] sm:min-w-[52px] text-center shadow-lg">
                <span className="text-lg sm:text-xl md:text-2xl font-bold font-display tabular-nums">
                  {String(urgencyTime.hours).padStart(2, "0")}
                </span>
                <span className="block text-[8px] sm:text-[10px] uppercase tracking-wide opacity-90 font-medium">Horas</span>
              </div>
              <span className="text-xl font-bold opacity-80">:</span>
              <div className="bg-white/25 backdrop-blur-sm rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 min-w-[44px] sm:min-w-[52px] text-center shadow-lg">
                <span className="text-lg sm:text-xl md:text-2xl font-bold font-display tabular-nums">
                  {String(urgencyTime.minutes).padStart(2, "0")}
                </span>
                <span className="block text-[8px] sm:text-[10px] uppercase tracking-wide opacity-90 font-medium">Minutos</span>
              </div>
              <span className="text-xl font-bold opacity-80">:</span>
              <div className="bg-white/25 backdrop-blur-sm rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 min-w-[44px] sm:min-w-[52px] text-center shadow-lg">
                <span className="text-lg sm:text-xl md:text-2xl font-bold font-display tabular-nums">
                  {String(urgencyTime.seconds).padStart(2, "0")}
                </span>
                <span className="block text-[8px] sm:text-[10px] uppercase tracking-wide opacity-90 font-medium">Segundos</span>
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
          <Image src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fhero-banner.png&w=1920&q=75" alt="Imagem Principal" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-emerald-900/15" />
        </div>

        {/* Content Card */}
        <div className="bg-white/95 backdrop-blur-sm mx-3 sm:mx-4 md:mx-auto md:max-w-xl lg:max-w-2xl -mt-14 sm:-mt-16 md:-mt-24 lg:-mt-28 rounded-3xl sm:rounded-[2rem] shadow-2xl p-5 sm:p-7 md:p-9 lg:p-12 relative z-10 border border-emerald-200/50">
          <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 mt-1 sm:mt-2">
            <Image
              src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fhero-banner-es.png&w=1200&q=75"
              alt="Universo Amigurumi - Ebook Digital com plantinhas e bonus"
              width={600}
              height={400}
              priority
              className="object-contain w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[520px] h-auto drop-shadow-lg rounded-xl"
            />
          </div>

          <h1 className="text-gray-900 text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug mb-4 sm:mb-5 md:mb-6 lg:mb-7 font-display text-balance">
            Aprenda a criar plantinhas lindas e lucrativas em amigurumi. Transforme sua paixão pelo crochê em um negócio verde e rentável, mesmo começando do zero.
          </h1>

          <p className="text-gray-600 text-[11px] sm:text-xs md:text-sm lg:text-base text-center leading-relaxed mb-5 sm:mb-6 md:mb-7 lg:mb-9">
            O <span className="font-bold text-emerald-700">Jardim Criativo Amigurumi</span> é o curso do{" "}
            <span className="font-bold text-emerald-700">Universo Amigurumi</span> que ensina, <span className="font-bold">do zero ao avançado</span>
            , a criar uma coleção exclusiva com <span className="font-bold">mais de 100 plantinhas e suculentas</span>{" "}
            em amigurumi, pensadas para <span className="font-bold">encantar clientes</span>,{" "}
            <span className="font-bold">decorar ambientes</span> e <span className="font-bold">gerar renda</span> com
            crochê.
          </p>
        </div>

        {/* Decorative wave */}
        <div className="h-12 sm:h-16 md:h-20 lg:h-24 mt-6 sm:mt-8 relative">
          <svg viewBox="0 0 1440 120" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
            <path fill="white" d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </div>

      {/* Featured Plants Strip */}
      <div className="bg-gradient-to-r from-emerald-50/50 via-white to-green-50/50 py-8 sm:py-10 overflow-hidden">
        <div className="flex animate-scroll-x gap-5 sm:gap-7">
          {[
            "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F11.webp&w=384&q=75",
            "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2F17.webp&w=384&q=75",
            "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F3.webp&w=384&q=75",
            "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2F18.webp&w=384&q=75",
            "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F4.webp&w=384&q=75",
            "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2F19.webp&w=384&q=75",
            "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F6.webp&w=384&q=75",
            "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2F20.webp&w=384&q=75",
            "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F7.webp&w=384&q=75",
            "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2F21.webp&w=384&q=75",
            "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F11.webp&w=384&q=75",
            "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2F17.webp&w=384&q=75",
            "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F3.webp&w=384&q=75",
            "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2F18.webp&w=384&q=75",
            "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F4.webp&w=384&q=75",
            "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2F19.webp&w=384&q=75",
          ].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-3xl overflow-hidden border-2 border-emerald-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={src}
                alt={`Plantinha amigurumi ${i + 1}`}
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
      <div className="py-10 sm:py-14 md:py-20 lg:py-24 px-3 sm:px-4 bg-white">
        <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 inline-flex items-center gap-2 sm:gap-2.5 mb-4 sm:mb-5 text-[11px] sm:text-xs md:text-sm text-emerald-700 font-semibold shadow-sm">
            <span>{"📖"}</span> Galeria de Amigurumis
          </div>

          <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 font-display">+de 100 Criações Mágicas</h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 md:max-w-xl lg:max-w-2xl leading-relaxed">
            Explore uma <span className="font-bold">prévia</span> das encantadoras plantinhas que você vai aprender a
            fazer em crochê. Cada receita foi criada com carinho para fazer sua criatividade florescer.
          </p>

          {/* Tabs */}
          <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-sm md:max-w-lg">
            <button
              onClick={() => setActiveTab("flores")}
              className={`flex-1 py-3 sm:py-3.5 md:py-4 lg:py-5 text-sm sm:text-base lg:text-lg rounded-2xl sm:rounded-3xl font-bold transition-all duration-300 ${activeTab === "flores"
                ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-200"
                : "bg-gray-100 text-gray-500 hover:bg-emerald-50 hover:text-emerald-600"
                }`}
            >
              Flores
            </button>
            <button
              onClick={() => setActiveTab("suculentas")}
              className={`flex-1 py-3 sm:py-3.5 md:py-4 lg:py-5 text-sm sm:text-base lg:text-lg rounded-2xl sm:rounded-3xl font-bold transition-all duration-300 ${activeTab === "suculentas"
                ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-200"
                : "bg-gray-100 text-gray-500 hover:bg-teal-50 hover:text-teal-600"
                }`}
            >
              {"🌵"} Suculentas
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {activeTab === "flores"
              ? flores.map((image, i) => (
                <div
                  key={i}
                  onClick={() => setLightboxImage(image)}
                  className="aspect-square bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] cursor-pointer border border-emerald-100 hover:border-emerald-300 group"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Flor em Amigurumi ${i + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))
              : suculentas.map((image, i) => (
                <div
                  key={i}
                  onClick={() => setLightboxImage(image)}
                  className="aspect-square bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] cursor-pointer border border-teal-100 hover:border-teal-300 group"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Suculenta em Amigurumi ${i + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-28 px-3 sm:px-4 bg-gradient-to-b from-emerald-50/70 via-green-50/40 to-white dots-pattern">
        <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 inline-flex items-center gap-2 sm:gap-2.5 mb-4 sm:mb-5 text-[11px] sm:text-xs md:text-sm text-emerald-700 font-semibold shadow-sm">
            Depoimentos de Alunas
          </div>

          <h2 className="text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 font-display">Histórias de Sucesso da Nossa Comunidade</h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 md:max-w-xl lg:max-w-2xl leading-relaxed">
            Nossas alunas já superaram desafios e fazem crochê que <span className="font-bold text-emerald-600">encanta clientes</span>,
            gera <span className="font-bold text-green-600">renda extra</span> e desperta uma{" "}
            <span className="font-bold text-amber-600">alegria</span> inesquecível.
          </p>

          <div className="space-y-4 sm:space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200 group">
              <Image
                src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Ftestimonials%2F1.webp&w=640&q=75"
                alt="Depoimento Maria de Lurdes"
                width={600}
                height={800}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200 group">
              <Image
                src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Ftestimonials%2F2.webp&w=640&q=75"
                alt="Depoimento Gabriela Fonseca"
                width={600}
                height={800}
                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Exclusive Bonus Packs Section */}
      <div className="py-14 sm:py-18 md:py-24 lg:py-32 px-3 sm:px-4 bg-white">
        <div className="max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16">
            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 inline-flex items-center gap-2 sm:gap-2.5 mb-4 sm:mb-5 text-[11px] sm:text-xs md:text-sm text-amber-700 font-semibold mx-auto shadow-sm">
              {"🎁"} Bônus Exclusivos
            </div>

            <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 font-display text-balance">
              Bônus Exclusivos Que Você Recebe Hoje
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              3 Packs Profissionais de Amigurumi Para Multiplicar Suas Vendas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-10 sm:mb-12 md:mb-16">
            {/* Card 1 - Anime & Series */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:border-emerald-200 transition-all duration-300 group">
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
                <Image
                  src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fbonus-anime-series.png&w=640&q=75"
                  alt="Bônus Anime e Séries - Pack Amigurumi"
                  fill
                  className="object-contain p-3 sm:p-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 text-center">
                <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1.5 sm:mb-2 font-display">Anime & Series</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Personagens inspirados em animes e séries que vendem como água.
                </p>
              </div>
            </div>

            {/* Card 2 - Pack Terror Halloween */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:border-emerald-200 transition-all duration-300 group">
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-green-50/50 to-white">
                <Image
                  src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fbonus-pack-terror.png&w=640&q=75"
                  alt="Bônus Pack Terror Halloween - Pack Amigurumi"
                  fill
                  className="object-contain p-3 sm:p-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 text-center">
                <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1.5 sm:mb-2 font-display">Pack Terror Halloween</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Coleção temática de Halloween para datas sazonais altamente lucrativas.
                </p>
              </div>
            </div>

            {/* Card 3 - Amigos da Floresta */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:scale-[1.03] hover:border-emerald-200 transition-all duration-300 group">
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-teal-50/50 to-white">
                <Image
                  src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fbonus-amigos-bosque.png&w=640&q=75"
                  alt="Bônus Amigos da Floresta - Pack Amigurumi"
                  fill
                  className="object-contain p-3 sm:p-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 text-center">
                <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1.5 sm:mb-2 font-display">Amigos da Floresta</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Coleção fofa estilo floresta com alto apelo emocional.
                </p>
              </div>
            </div>
          </div>

          {/* Bonus 4 - Assistente Amigurumi IA */}
          <div className="mt-10 sm:mt-12 md:mt-16 mb-10 sm:mb-12 md:mb-16">
            <div className="bg-gradient-to-br from-emerald-700 via-green-600 to-teal-700 rounded-3xl sm:rounded-[2rem] p-7 sm:p-9 md:p-12 lg:p-14 shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                {/* Left - Content */}
                <div className="w-full lg:w-1/2 text-white">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 inline-flex items-center gap-2 mb-4 sm:mb-5 text-xs sm:text-sm font-medium">
                    <span className="text-lg">{"🌱"}</span> Sua mentora digital de amigurumi
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-display">
                    Você nunca vai criar sozinha.
                  </h3>

                  <p className="text-white/90 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 leading-relaxed">
                    Com a <span className="font-bold">Assistente Amigurumi</span>, você tem uma mentora digital disponível 24 horas para te guiar em cada ponto:
                  </p>

                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-lg sm:text-xl mt-0.5">{"🌿"}</span>
                      <span className="text-sm sm:text-base text-white/95">Gera ideias criativas de peças e estratégias para lucrar com seus fios</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg sm:text-xl mt-0.5">{"🌿"}</span>
                      <span className="text-sm sm:text-base text-white/95">Tira todas as suas dúvidas sobre técnicas e pontos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg sm:text-xl mt-0.5">{"🌿"}</span>
                      <span className="text-sm sm:text-base text-white/95">Sugere combinações de plantinhas em kits para aumentar seu ticket médio</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-lg sm:text-xl mt-0.5">{"🌿"}</span>
                      <span className="text-sm sm:text-base text-white/95">Te motiva e inspira quando você trava nas ideias</span>
                    </li>
                  </ul>

                  <p className="text-white/70 text-xs sm:text-sm italic border-l-2 border-white/30 pl-4">
                    "Suas plantas de crochê vão florescer. Se precisar de ajuda, chama a IA!" - Universo IA
                  </p>
                </div>

                {/* Right - Video */}
                <div className="w-full lg:w-1/2">
                  <p className="text-white/90 text-center text-sm sm:text-base font-medium mb-4">Veja ela em ação:</p>
                  <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                    <video
                      className="w-full aspect-[9/16] object-cover"
                      controls
                      poster="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fvideo-poster.webp&w=640&q=75"
                      playsInline
                    >
                      <source src="https://www.universoamigurumi.shop/videos/universo-amigurumi-ia.mp4" type="video/mp4" />
                      Seu navegador não suporta vídeo.
                    </video>
                  </div>
                  <p className="text-white/60 text-center text-xs sm:text-sm mt-3">
                    {"🔒"} Exclusiva para alunas do curso
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToPricing}
              className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white font-bold py-4 sm:py-5 md:py-6 px-10 sm:px-12 md:px-16 text-sm sm:text-base lg:text-lg rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 tracking-tight"
            >
              Quero Garantir Meus Bônus Agora
            </button>
          </div>
        </div>
      </div>

      {/* How It Works - Step by Step Section */}
      <div className="py-14 sm:py-18 md:py-24 lg:py-32 px-3 sm:px-4 bg-gradient-to-b from-emerald-50/60 via-green-50/40 to-white">
        <div className="max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-5 py-2 inline-flex items-center gap-2.5 mb-5 text-xs sm:text-sm text-emerald-700 font-semibold shadow-md border border-emerald-100">
              Passo a Passo
            </div>
            <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 font-display text-balance">
              Super fácil e simples de usar
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl">
              Acesse pelo computador, notebook, celular ou tablet.
            </p>
          </div>

          {/* Steps Timeline - Centered */}
          <div className="max-w-2xl mx-auto space-y-8 sm:space-y-10">
            {/* Step 1 */}
            <div className="flex gap-5 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg shadow-emerald-200">
                  1
                </div>
                <div className="w-0.5 h-full bg-gradient-to-b from-emerald-300 to-emerald-100 mt-4" />
              </div>
              <div className="flex-1 pb-8 sm:pb-10">
                <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-3 font-display">Escolha seu acesso</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Selecione o plano desejado, efetue seu pagamento na área de pagamento e finalize sua compra de forma segura.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-5 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg shadow-green-200">
                  2
                </div>
                <div className="w-0.5 h-full bg-gradient-to-b from-green-300 to-green-100 mt-4" />
              </div>
              <div className="flex-1 pb-8 sm:pb-10">
                <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-3 font-display">Receba o acesso na hora</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Assim que o pagamento é aprovado, você recebe imediatamente no seu e-mail e WhatsApp o login e senha para entrar na área de membros exclusiva.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-5 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg shadow-teal-200">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-3 font-display">Siga o passo a passo e crie</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  As videoaulas e receitas são claras e detalhadas. Você vai aprender no seu ritmo e criar peças incríveis desde o primeiro dia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn - Plant Showcase */}
      <div className="py-14 sm:py-18 md:py-24 px-3 sm:px-4 bg-gradient-to-b from-white via-emerald-50/30 to-white">
        <div className="max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 inline-flex items-center gap-2 sm:gap-2.5 mb-4 sm:mb-5 text-[11px] sm:text-xs md:text-sm text-emerald-700 font-semibold shadow-sm">
              Veja o que você vai criar
            </div>
            <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-balance">
              Plantinhas que Encantam e Vendem
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-xl mx-auto leading-relaxed">
              Cada peça é única, feita à mão com muito amor. Aprenda a criar desde as mais simples até as mais elaboradas.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {/* Large featured */}
            <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden shadow-xl border border-emerald-100 group cursor-pointer" onClick={() => setLightboxImage("https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fplants%2Forquidea-amigurumi.jpg&w=640&q=75")}>
              <div className="aspect-square">
                <Image
                  src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fplants%2Forquidea-amigurumi.jpg&w=640&q=75"
                  alt="Orquídea amigurumi"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-5 sm:p-6">
                <span className="text-white font-bold text-base sm:text-lg font-display">Orquídea Premium</span>
                <p className="text-white/90 text-xs sm:text-sm mt-1">Nível intermediário</p>
              </div>
            </div>

            {/* Top right */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-emerald-100 group cursor-pointer" onClick={() => setLightboxImage("https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fplants%2Fcactus-amigurumi.jpg&w=384&q=75")}>
              <div className="aspect-square">
                <Image
                  src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fplants%2Fcactus-amigurumi.jpg&w=384&q=75"
                  alt="Cacto amigurumi"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-5">
                <span className="text-white font-bold text-sm sm:text-base font-display">Cacto</span>
              </div>
            </div>

            {/* Top right 2 */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-emerald-100 group cursor-pointer" onClick={() => setLightboxImage("https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fplants%2Flavanda-amigurumi.jpg&w=384&q=75")}>
              <div className="aspect-square">
                <Image
                  src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fplants%2Flavanda-amigurumi.jpg&w=384&q=75"
                  alt="Lavanda amigurumi"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-5">
                <span className="text-white font-bold text-sm sm:text-base font-display">Lavanda</span>
              </div>
            </div>

            {/* Bottom right */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-emerald-100 group cursor-pointer" onClick={() => setLightboxImage("https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fplants%2Fmargarita-amigurumi.jpg&w=384&q=75")}>
              <div className="aspect-square">
                <Image
                  src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fplants%2Fmargarita-amigurumi.jpg&w=384&q=75"
                  alt="Margarida amigurumi"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-5">
                <span className="text-white font-bold text-sm sm:text-base font-display">Margaridas</span>
              </div>
            </div>

            {/* Bottom right 2 */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-emerald-100 group cursor-pointer" onClick={() => setLightboxImage("https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F11.webp&w=384&q=75")}>
              <div className="aspect-square">
                <Image
                  src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F11.webp&w=384&q=75"
                  alt="Flor amigurumi"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-5">
                <span className="text-white font-bold text-sm sm:text-base font-display">Flor Exótica</span>
              </div>
            </div>
          </div>

          {/* Second row - 4 equal items */}
          <div className="grid grid-cols-4 gap-4 sm:gap-5 md:gap-6 mt-4 sm:mt-5 md:mt-6">
            {[
              { src: "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2F12.webp&w=256&q=75", name: "Suculenta Mini" },
              { src: "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F3.webp&w=256&q=75", name: "Rosa Encantada" },
              { src: "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2F21.webp&w=256&q=75", name: "Suculenta Verde" },
              { src: "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F7.webp&w=256&q=75", name: "Tulipa" },
            ].map((item, i) => (
              <div key={i} className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-emerald-100 group cursor-pointer" onClick={() => setLightboxImage(item.src)}>
                <div className="aspect-square">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                  <span className="text-white font-bold text-xs sm:text-sm font-display">{item.name}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-xs sm:text-sm mt-6 sm:mt-8">E muitas outras criações te esperando dentro do curso...</p>
        </div>
      </div>

      {/* Bonus */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 bg-white">
        <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 inline-flex items-center gap-2 sm:gap-2.5 mb-4 sm:mb-5 text-[11px] sm:text-xs md:text-sm text-amber-700 font-semibold shadow-sm">
            {"🎁"} Bônus Exclusivos
          </div>

          <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 font-display">Ganhe Ainda Mais</h2>

          <div className="space-y-4 sm:space-y-5">
            <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-5 sm:p-6 md:p-8 rounded-3xl border border-amber-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="text-3xl sm:text-4xl animate-bounce-gentle">{"📅"}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1.5 sm:mb-2 font-display">
                    Coleção Plantinhas de Sucesso 2026
                    <br />
                    <span className="text-emerald-600">De presente por se inscrever</span>
                  </h3>
                  <p className="text-gray-600 text-[11px] sm:text-xs leading-relaxed">
                    Um calendário cheio de receitas únicas e criativas para você explorar o ano todo. Acesse qualquer
                    plantinha a qualquer momento e colecione rendas ilimitadas.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
              <Image
                src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Ftestimonials%2F6455.webp&w=640&q=75"
                alt="Depoimentos de clientes satisfeitas"
                width={480}
                height={720}
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-lg border-2 border-emerald-100"
                loading="lazy"
              />
            </div>

            {[
              { icon: "🍯", title: "Guia de Preços", desc: "De presente por se inscrever", color: "amber" },
              { icon: "📄", title: "Kit Papelaria Digital", desc: "De presente por se inscrever", color: "emerald" },
              { icon: "📅", title: "Coleção Plantinhas de Sucesso 2026", desc: "De presente por se inscrever", color: "teal" },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-gradient-to-r ${item.color === "amber" ? "from-amber-50 to-yellow-50 border-amber-200" :
                  item.color === "emerald" ? "from-emerald-50 to-green-50 border-emerald-200" :
                    "from-teal-50 to-emerald-50 border-teal-200"
                  } border rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-1.5 font-display">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plant Photos Before Pricing */}
      <div className="bg-gradient-to-b from-white via-emerald-50/40 to-green-50/50 py-8 sm:py-10 px-3 sm:px-4">
        <div className="max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-6xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
            {[
              "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2F20.webp&w=384&q=75",
              "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F6.webp&w=384&q=75",
              "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2F19.webp&w=384&q=75",
              "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F4.webp&w=384&q=75",
              "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsucculents%2F18.webp&w=384&q=75",
              "https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fflowers%2F3.webp&w=384&q=75",
            ].map((src, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border border-emerald-100 shadow-lg hover:shadow-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer group"
                onClick={() => setLightboxImage(src)}
              >
                <Image
                  src={src}
                  alt={`Criação amigurumi ${i + 1}`}
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
      <div id="plano-completo" className="bg-gradient-to-b from-emerald-100/80 via-green-50/60 to-white py-12 sm:py-16 md:py-20 lg:py-28 px-3 sm:px-4 dots-pattern">
        <div className="max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 inline-flex items-center gap-2 sm:gap-2.5 mb-4 sm:mb-5 text-[11px] sm:text-xs md:text-sm text-emerald-700 font-semibold shadow-sm">
              Escolha seu plano
            </div>
            <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-balance">Comece sua jornada no amigurumi</h2>
          </div>

          <div id="pricing-plans" className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 md:items-start">

            {/* Plano Basico - Card Style */}
            <div className="flex-1 max-w-sm mx-auto md:mx-0 w-full">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50">
                {/* Green Header */}
                <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white text-center py-4 sm:py-5 px-5">
                  <p className="text-sm sm:text-base font-bold leading-snug">
                    {"❤️"} Ideal para quem está começando no crochê amigurumi
                  </p>
                </div>

                <div className="p-5 sm:p-6">
                  {/* Product Image */}
                  <div className="flex justify-center mb-4">

                  </div>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-1">
                      Preço normal <span className="line-through">R$ 149,90</span>
                    </p>
                    <h3 className="text-gray-800 text-lg sm:text-xl font-bold uppercase tracking-wide mb-2">
                      OFERTA EXCLUSIVA:
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl sm:text-4xl md:text-5xl text-gray-900 font-display font-black">R$ 27,90</span>
                    </div>
                    <p className="text-gray-500 text-[10px] sm:text-xs mt-1.5 leading-relaxed">
                      {'Ou até 12x de R$ 4,78 no cartão'}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-dashed border-gray-200 my-4" />


                  <p className="text-emerald-600 text-xs sm:text-sm text-center font-semibold mb-4">
                    {'Aceitamos Cartão e Pix'}
                  </p>

                  {/* CTA Button */}
                  <a
                    href="https://go.pepperpay.com.br/iazwm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 text-white font-bold py-4 sm:py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 text-center text-sm sm:text-base uppercase tracking-wide animate-pulse-soft"
                  >
                    {'QUERO ACESSO AGORA!'}
                  </a>

                  {/* Features */}
                  <div className="mt-5 space-y-3">
                    {[
                      { bold: "25+ receitas exclusivas", rest: " de Plantas e Flores Amigurumi" },
                      { bold: "Passo a passo", rest: " em português" },
                      { bold: "Pagamento único", rest: " Acesso vitalício" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          <span className="font-bold">{item.bold}</span>{item.rest}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Payment Badges */}
                  <div className="mt-6 flex justify-center">
                    <img
                      src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fhero-banner-es.png&w=640&q=75"
                      alt="VISA, MasterCard, PayPal, Pix - Compra Segura"
                      className="h-9 sm:h-10 object-contain opacity-70"
                    />
                  </div>

                  {/* Mini Countdown */}
                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <p className="text-gray-600 text-xs sm:text-sm text-center font-semibold mb-2">
                      Esta oferta termina em:
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

            {/* Plano Completo - Card Style (destaque) */}
            <div className="flex-1 max-w-sm mx-auto md:mx-0 w-full relative">
              {/* Badge "Mais Popular" */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 text-amber-900 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full shadow-xl">
                Mais Popular
              </div>

              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-emerald-400 ring-4 ring-emerald-100">
                {/* Green Header */}
                <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white text-center py-4 sm:py-5 px-5">
                  <p className="text-sm sm:text-base font-bold leading-snug">
                    {"⭐"} Para quem quer resultados profissionais + todos os bônus
                  </p>
                </div>

                <div className="p-5 sm:p-6">
                  {/* Product Image */}
                  <div className="flex justify-center mb-4">
                    <Image
                      src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fhero-banner-es.png&w=640&q=75"
                      alt="Ebook Plantas e Flores Amigurumi - Plano Completo"
                      width={280}
                      height={200}
                      className="object-contain rounded-lg"
                    />
                  </div>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-1">
                      Preço normal <span className="line-through">R$ 297,00</span>
                    </p>
                    <h3 className="text-gray-800 text-lg sm:text-xl font-bold uppercase tracking-wide mb-2">
                      OFERTA EXCLUSIVA:
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl sm:text-4xl md:text-5xl text-emerald-600 font-display font-black">R$ 47,90</span>
                    </div>
                    <p className="text-gray-500 text-[10px] sm:text-xs mt-1.5 leading-relaxed">
                      {'Ou até 12x de R$ 6,79 no cartão'}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-dashed border-gray-200 my-4" />


                  <p className="text-emerald-600 text-sm sm:text-base text-center font-semibold mb-5">
                    {'Aceitamos Cartão e Pix'}
                  </p>

                  {/* CTA Button */}
                  <a
                    href="https://go.pepperpay.com.br/1fbar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 text-white font-bold py-4 sm:py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 text-center text-base sm:text-lg uppercase tracking-wide animate-pulse-soft"
                  >
                    {'QUERO ACESSO COMPLETO!'}
                  </a>

                  {/* Features */}
                  <div className="mt-5 space-y-3">
                    {[
                      { bold: "100+ receitas exclusivas", rest: " de Plantas e Flores Amigurumi" },
                      { bold: "Passo a passo", rest: " em português" },
                      { bold: "Pagamento único", rest: " Acesso vitalício" },
                      { bold: "3 Bônus exclusivos", rest: " inclusos grátis" },
                      { bold: "Assistente IA", rest: " 24h/dia + Comunidade" },
                      { bold: "Coleções futuras", rest: " grátis para sempre" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          <span className="font-bold">{item.bold}</span>{item.rest}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Payment Badges */}
                  <div className="mt-6 flex justify-center">
                    <img
                      src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fgarantia.webp&w=384&q=75"
                      alt="VISA, MasterCard, PayPal, Pix - Compra Segura"
                      className="h-9 sm:h-10 object-contain opacity-70"
                    />
                  </div>

                  {/* Mini Countdown */}
                  <div className="mt-5 border-t border-gray-100 pt-5">
                    <p className="text-gray-600 text-xs sm:text-sm text-center font-semibold mb-2">
                      Esta oferta termina em:
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
          <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-amber-300 rounded-[2rem] p-8 sm:p-10 mt-12 text-center shadow-2xl max-w-sm sm:max-w-md md:max-w-lg mx-auto">
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
              Você tem 30 dias para explorar o conteúdo do curso, a qualidade e os bônus. Se por qualquer motivo sentir
              que não é para você, basta nos enviar um e-mail e devolvemos 100% do valor sem burocracia. Sua
              satisfação é nossa prioridade.
            </p>
          </div>
        </div>
      </div>

      {/* Expert Section */}
      <div className="py-16 lg:py-24 px-4 bg-white">
        <div className="max-w-md lg:max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-5 py-2 inline-flex items-center gap-2.5 mb-5 text-xs lg:text-sm text-emerald-700 font-semibold shadow-sm">
            Nossa Missao
          </div>

          <h2 className="text-gray-900 text-2xl lg:text-4xl font-bold mb-10 lg:max-w-2xl font-display leading-tight">
            Ajudar voce a transformar suas habilidades de croche em uma fonte de renda e realizacao pessoal.
          </h2>

          <div className="relative w-72 lg:w-96 h-80 lg:h-96 mx-auto mb-10">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-green-200 rounded-3xl transform rotate-3" />
            <Image
              src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fexpert-laura.png&w=640&q=75"
              alt="Gisele Santos - Especialista em Amigurumi"
              fill
              className="object-cover rounded-3xl shadow-xl relative z-10"
              loading="lazy"
            />
          </div>

          <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-6 lg:mb-8 lg:max-w-xl lg:mx-auto lg:text-center">
            Gisele Santos transformou sua paixao pelo croche em um negocio prospero e na missao de capacitar outras
            pessoas. Ela acredita que o amigurumi e mais que artesanato; e um caminho para a independencia
            financeira e o aumento da autoestima.
          </p>

          <div className="space-y-5 mb-10 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0 lg:max-w-3xl lg:mx-auto">
            <div className="flex gap-5 bg-gradient-to-r from-amber-50 to-yellow-50 p-5 sm:p-6 rounded-3xl border border-amber-100 shadow-lg group hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{"🏆"}</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 font-display text-lg">
                  Metodo validado por +2500 alunas
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Seu metodo de ensino foi comprovado por mais de 2500 alunas que agora vendem suas criacoes com
                  sucesso.
                </p>
              </div>
            </div>

            <div className="flex gap-5 bg-gradient-to-r from-emerald-50 to-green-50 p-5 sm:p-6 rounded-3xl border border-emerald-100 shadow-lg group hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{"🎯"}</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 font-display text-lg">Nossa Missao</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Ajudar voce a transformar suas habilidades de croche em uma fonte de renda, alegria e realizacao pessoal.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-10 lg:mb-12 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-[2rem] p-8 lg:p-10 border border-emerald-100 shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3 font-display">Pronta Para Cultivar Seu Talento no Croche?</h3>
            <p className="text-sm lg:text-base text-gray-600 mb-6 lg:max-w-lg lg:mx-auto">
              Nao perca a oportunidade de criar plantinhas de amigurumi que encantam e transformam sua paixao em um negocio de
              sucesso. Inscreva-se agora!
            </p>
          </div>

          <button
            onClick={scrollToPricing}
            className="w-full lg:w-auto lg:px-20 lg:mx-auto lg:block bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white font-bold py-5 lg:py-6 lg:text-xl rounded-3xl shadow-xl mb-8 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 animate-pulse-soft"
          >
            QUERO ME INSCREVER
          </button>

          <div className="flex justify-center mb-4">
            <img
              src="https://www.universoamigurumi.shop/_next/image?url=%2Fimages%2Fsite-seguro-selos.png&w=384&q=75"
              alt="Site Seguro - Google - Site Blindado - Compra 100% Segura"
              className="object-contain opacity-70 w-auto h-36"
            />
          </div>

          <p className="text-center text-xs text-gray-400">{"©"} 2026 Universo Amigurumi. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative bg-white rounded-[2rem] shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden border-2 border-emerald-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 w-11 h-11 flex items-center justify-center bg-white rounded-full shadow-xl hover:bg-emerald-50 transition-colors border border-emerald-200"
              aria-label="Fechar"
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

export default LandingPage
