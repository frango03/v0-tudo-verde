"use client"

import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"

const reviewImages = [
  { src: "/reviews/review-1.webp", alt: "Depoimento de Mariana Fabre" },
  { src: "/reviews/review-2.webp", alt: "Depoimento de Gabriela Vieira" },
  { src: "/reviews/review-3.webp", alt: "Depoimento de Julia Santos" },
  { src: "/reviews/review-4.webp", alt: "Depoimento de Tatiana Lima" },
  { src: "/reviews/review-5.webp", alt: "Depoimento de Cristina Martins" },
]

export function ReviewsCarousel() {
  const { ref, inView } = useInView()

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...reviewImages, ...reviewImages]

  return (
    <div className="bg-[#0D0D0D] py-10 md:py-16 overflow-hidden">
      <div
        ref={ref}
        className={`text-center mb-8 px-4 transition-all duration-[650ms] ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="text-[11px] font-extrabold tracking-[.14em] uppercase text-[#FF6A00] mb-2">
          DEPOIMENTOS REAIS
        </p>
        <h2 className="font-serif text-[clamp(22px,4.5vw,34px)] font-black text-white leading-tight text-balance">
          Veja o que nossas clientes estao dizendo
        </h2>
      </div>

      {/* Carousel container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-scroll-left gap-4 md:gap-6 w-max">
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={380}
                height={380}
                className="object-cover"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
