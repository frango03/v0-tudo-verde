"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"

const breeds = [
  {
    name: "Dachshund",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260225_1912_Image_Generation_simple_compose_01kjbdrg11ewxv6nnar0hhycrv-Qu5uVRteHImVrvIJOYohjPAMPpIykL.webp",
  },
  {
    name: "Golden Retriever",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260225_1918_Image_Generation_simple_compose_01kjbe3ewcfnxsyah3g5mv1z4c-1o4URoJXoG2o8fMkqmmkLCc7b3IvKH.webp",
  },
  {
    name: "Bulldog Frances",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260225_1913_Hyper-Realistic_Crochet_Bulldog_simple_compose_01kjbds9qgfcbtgtwstnejfp5f-eNqIyk5ocr3k3j0itFYdHzao076lRe.webp",
  },
  {
    name: "Labrador",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260225_1922_Image_Generation_simple_compose_01kjbe9d6ffaj9xrezyw03e6eb-pTUmFGqZQNLOaQlhwNmVkkc6U5W1SA.webp",
  },
  {
    name: "Chihuahua",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260225_1921_Crochet_Chihuahua_Close-up_simple_compose_01kjbe83azfqzsx9jrh4af0b0d-yzZgFtIYOkRyCUokBP8UYzPlTuHLXF.webp",
  },
  {
    name: "Poodle",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260225_1921_Crochet_Poodle_Amigurumi_simple_compose_01kjbe8cnbfgwadkdw1cchy9ra-4umpt0TJR6rG74vTRpkDz7L5rVWrgH.webp",
  },
  {
    name: "Husky Siberiano",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260225_1921_Crochet_Husky_Replica_simple_compose_01kjbe7mgeefkaachbvxg1ecsx-mEUOpJw6aVYsaq9sEmVveMTLU5zh0A.webp",
  },
  {
    name: "Pastor Alemao",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260225_1920_Amigurumi_Shepherd_Duo_simple_compose_01kjbe79bcf5yt4dnvm4ccx6as-kW6OHryqx8Gq6EL12tEcx4EoOGvyTd.webp",
  },
  {
    name: "Dalmata",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260225_2056_Image_Generation_simple_compose_01kjbkpzjremsrmhg08xgn0pwb-JSs6bTCvmJkbu7n7J8kJFDA3CoCoHm.webp",
  },
  {
    name: "Doberman",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260225_2122_Image_Generation_remix_01kjbn656pffksrqbh5sf0vwwt_1-01LcUemInuGpNb4rXCpG0GCY9KwxEC.webp",
  },
  {
    name: "Gato Siames",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260225_2052_Image_Generation_simple_compose_01kjbkedwff66b2wbh1nh7bz3c-RgjEr1H0TWSC7CzPzTyr3xFte7N7Dg.webp",
  },
  {
    name: "Gato Persa",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hf_20260225_221856_c993e774-758d-450e-8df0-f435a44a3a53-0TC4MsGQ30PqjiBvM7qj35UsB8i5TU.webp",
  },
]

export function BreedsSection() {
  const { ref: titleRef, inView: titleInView } = useInView()
  const { ref: gridRef, inView: gridInView } = useInView()
  const { ref: videoRef, inView: videoInView } = useInView()

  return (
    <div>
      {/* Breeds Grid */}
      <div className="bg-[#F5F5F5] py-10 md:py-16 px-4 sm:px-6 text-center">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[11px] font-extrabold tracking-[.14em] uppercase text-[#FF6A00] mb-2.5">
            O QUE VOCÊ VAI ENCONTRAR NESTE EBOOK?
          </p>
          <h2
            ref={titleRef}
            className={`font-serif text-[clamp(22px,4.5vw,34px)] font-black text-[#0D0D0D] mb-2 leading-tight transition-all duration-[650ms] ease-out ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-[#FF6A00]">+60 padrões</span> organizados por raça
          </h2>
          <p className="text-sm text-[#4A4A4A] leading-relaxed mx-auto mb-5 max-w-[480px]">
            Raças de cachorros e gatos com padrões detalhados. Cada um projetado para{" "}
            <span className="text-[#FF6A00] font-bold">capturar os traços únicos de cada pet</span>. Veja algumas das
            raças incluídas:
          </p>

          <div
            ref={gridRef}
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3 mb-4 transition-all duration-[650ms] ease-out ${gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "150ms" }}
          >
            {breeds.map((breed) => (
              <BreedCard key={breed.name} name={breed.name} image={breed.image} />
            ))}
          </div>

          <p className="text-[13px] text-[#FF6A00] font-bold mb-1.5">E muitas outras...</p>
          <p className="text-[11px] italic text-[#4A4A4A] max-w-[460px] mx-auto leading-relaxed">
            * Todos os padrões incluem instruções para adaptar cores e manchas para que quando virem digam:
            &ldquo;É igualzinho!&rdquo;
          </p>
        </div>
      </div>

      {/* Video Preview */}
      <div className="bg-[#0D0D0D] py-10 md:py-16 px-4 sm:px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[11px] font-extrabold tracking-[.14em] uppercase text-[#FF6A00] mb-2.5">VEJA POR DENTRO</p>
          <h2
            ref={videoRef}
            className={`font-serif text-[clamp(22px,4.5vw,34px)] font-black text-white mb-1.5 transition-all duration-[650ms] ease-out ${videoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Assim você vai ver o ebook <em className="italic text-[#FF6A00]">por dentro</em>
          </h2>
          <p className="text-sm text-white/60 leading-relaxed mb-7">
            Padrões detalhados, instruções claras e guias visuais passo a passo para cada raça.
          </p>

          <div className="flex justify-center">
            <div
              className={`bg-[#1a1a1a] rounded-[40px] p-3.5 pt-3.5 pb-4 shadow-[0_0_0_2px_#FF6A00,0_30px_60px_rgba(0,0,0,.4)] w-full max-w-[240px] transition-all duration-[650ms] ease-out ${videoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-[68px] h-[18px] bg-[#1a1a1a] rounded-b-xl mx-auto mb-1.5" />
              <div className="rounded-[28px] overflow-hidden bg-black aspect-[9/16] w-full">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover block">
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Universo%20Amigurumi%20VIDEO%20PDF-W9MZl10F0G2LJoGZSYuVKwywshpyPf.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BreedCard({ name, image }: { name: string; image: string }) {
  const [touched, setTouched] = useState(false)

  const handleTouch = () => {
    setTouched(true)
    setTimeout(() => setTouched(false), 700)
  }

  return (
    <div
      className="rounded-lg overflow-hidden bg-white shadow-[0_4px_16px_rgba(13,13,13,.08)] border border-[rgba(255,106,0,.1)] relative cursor-pointer"
      onTouchStart={handleTouch}
      onMouseDown={handleTouch}
    >
      <span
        className={`absolute top-2 right-2 w-8 h-8 bg-white/95 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,.18)] z-10 transition-all duration-200 ${touched ? "opacity-100 scale-110" : "opacity-0 scale-75"}`}
      >
        <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-[#FF6A00]">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </span>
      <img
        src={image}
        alt={name}
        className={`w-full aspect-square object-cover block transition-transform duration-300 ${touched ? "scale-105" : ""}`}
      />
      <div className="text-center text-[11px] font-bold py-1.5 px-1 text-[#0D0D0D]">{name}</div>
    </div>
  )
}
