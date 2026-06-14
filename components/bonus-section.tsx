"use client"

import { useInView } from "@/hooks/use-in-view"

const bonuses = [
  {
    title: "Aulas Essenciais — Domine os Pontos Básicos de Crochê",
    description:
      "Videoaulas essenciais para dominar os pontos básicos do crochê do zero. Ideal se você está começando ou quer reforçar sua técnica.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amigurumis-e-Cobrar-BR-EZ49CuD8nsblkbgHeaTZYbXpnvknNA.webp",
    pill: "PARA INICIANTES",
    oldPrice: "R$169,90",
    fullWidth: true,
  },
  {
    title: "Como Vender Amigurumis e Cobrar Preço Premium",
    description: "Aprenda a oferecer pets por raça como serviço exclusivo e se diferenciar da concorrência.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Como-Vender-Amigurumis-e-Cobrar-BR-B3Iv6lqJqul0su1f43af4ZpJBZ8CVe.webp",
    pill: "FAVORITO DAS EMPREENDEDORAS",
    oldPrice: "R$74,90",
  },
  {
    title: "Pack Amigos da Kitty",
    description: "Coleção especial de padrões inspirados nos personagens mais fofos. Perfeitos para presentear ou vender.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pack-Amigos-da-Kitty-BR-fdHAwMOUg3C4z7YjBliETsGt81Er8b.webp",
    pill: "PADRÕES EXTRAS",
    oldPrice: "R$99,90",
  },
  {
    title: "Padrões Gatinhos Halloween",
    description: "Gatinhos com tema de Halloween: abóboras, bruxinhas e fantasminhas. Ideais para a temporada.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Padroes-Gatinhos-Halloween-BR-BM7E91S6tvM1VysCNOfabd8Cfo2Pe6.webp",
    pill: "EDIÇÃO ESPECIAL",
    oldPrice: "R$39,90",
  },
  {
    title: "Gatinhos Cactos",
    description: "A combinação mais adorável: gatinhos fantasiados de cactos. Um design único que encanta a todos.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gatinhos-Cactos-BR-95ghvLOECJOXq0HlLYliuB0pwSyyny.webp",
    pill: "EDIÇÃO ESPECIAL",
    oldPrice: "R$39,90",
  },
]

export function BonusSection() {
  const { ref: totalRef, inView: totalInView } = useInView()

  return (
    <div className="bg-[#0D0D0D] py-10 md:py-16 px-4 sm:px-6">
      <div className="max-w-[680px] mx-auto">
        <p className="text-center text-[11px] font-extrabold tracking-[.14em] uppercase text-[#FF6A00] mb-2">
          5 Bônus Incluídos
        </p>
        <h2 className="font-serif text-[clamp(22px,4.5vw,34px)] font-black text-center text-white mb-1.5">
          E além disso, você leva esses presentes
        </h2>
        <p className="text-center text-sm text-white/60 mx-auto mb-7 leading-relaxed max-w-[520px]">
          Bônus exclusivos que complementam sua coleção e te dão ainda mais valor.
        </p>

        <div className="flex flex-col gap-3.5">
          {/* First bonus - full width */}
          <BonusCard bonus={bonuses[0]} />

          {/* Grid 2x2 for other bonuses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {bonuses.slice(1).map((bonus, index) => (
              <BonusCard key={index} bonus={bonus} />
            ))}
          </div>

          {/* Total */}
          <div
            ref={totalRef}
            className={`bg-white rounded-lg p-4 text-center border-2 border-[#FF6A00] text-[13px] sm:text-[15px] font-bold text-[#0D0D0D] transition-all duration-[650ms] ease-out ${totalInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Valor total dos bônus: <s className="text-[#0D0D0D]/40 mx-1">R$373,50</s> →{" "}
            <strong className="text-[#FF6A00]">HOJE INCLUÍDOS GRÁTIS</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

interface BonusCardProps {
  bonus: {
    title: string
    description: string
    image: string
    pill: string
    oldPrice: string
    fullWidth?: boolean
  }
}

function BonusCard({ bonus }: BonusCardProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg overflow-hidden border border-[rgba(255,106,0,.15)] shadow-[0_4px_16px_rgba(13,13,13,.08)] transition-all duration-[650ms] ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="relative w-full pt-[56.25%] bg-[#F5F5F5] overflow-hidden">
        <img src={bonus.image} alt={bonus.title} className="absolute inset-0 w-full h-full object-cover" />
        <span className="absolute top-2.5 left-2.5 bg-[#0D0D0D] text-white text-[10px] font-extrabold tracking-wide uppercase px-3 py-1 rounded-full z-10">
          {bonus.pill}
        </span>
      </div>
      <div className="p-4 flex flex-col gap-1.5">
        <h3 className="font-serif text-[15px] font-black text-[#0D0D0D] leading-tight">{bonus.title}</h3>
        <p className="text-[13px] text-[#4A4A4A] leading-relaxed">{bonus.description}</p>
        <div className="flex items-center gap-2.5 mt-1">
          <span className="text-[13px] line-through text-[#0D0D0D]/35 font-semibold">{bonus.oldPrice}</span>
          <span className="bg-[#22C55E] text-white text-[11px] font-black px-3 py-0.5 rounded-full shadow-[0_2px_8px_rgba(34,197,94,.25)]">HOJE GRATIS</span>
        </div>
      </div>
    </div>
  )
}
