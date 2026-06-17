"use client"

interface FinalCtaProps {
  viewers: number
}

export function FinalCta({ viewers }: FinalCtaProps) {
  return (
    <div className="bg-[#F5F5F5] py-12 md:py-20 px-4 sm:px-6 text-center">
      <div className="max-w-[400px] mx-auto flex flex-col items-center">
        <h2 className="font-serif text-[clamp(24px,5vw,40px)] font-black text-[#0D0D0D] mb-2.5 leading-tight">
          Pronta para fazer amigurumis de pets?
        </h2>
        <p className="text-sm text-[#4A4A4A] mb-6 leading-relaxed">
          O melhor companheiro peludo merece ser imortalizado. Comece hoje com a coleção completa.
        </p>

        <div className="relative">
          <div className="absolute -inset-4 bg-[#FF6A00]/10 rounded-3xl blur-xl" />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PACK-39-br-drfK796myXaMuDT6Q2fcKuL26A2o0d.webp"
            alt="Coleção completa"
            className="relative w-full h-auto max-w-[360px] rounded-lg mb-5 shadow-[0_20px_60px_rgba(13,13,13,.15)]"
          />
        </div>

        <div className="w-full bg-[#0D0D0D] rounded-lg px-4 py-3 mb-4 text-[13px] text-white/70 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] inline-block mr-1 animate-pulse" />
            <span className="font-bold text-[#FF6A00]">{viewers}</span> pessoas vendo
          </span>
          <span className="w-full text-xs text-center">So 11 vagas com desconto</span>
        </div>

        {/* Pricing Block - Glassmorphism Card */}
        <div className="w-full max-w-[400px] p-6 rounded-[20px] bg-white/75 backdrop-blur-[12px] border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.08)] mb-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[13px] text-[#6b7280] tracking-[1px] uppercase">OFERTA EXCLUSIVA</span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#fff7ed] text-[#ea580c] border border-[#fed7aa]">
              61% OFF
            </span>
          </div>
          <div className="text-base text-[#9ca3af] line-through text-center">
            R$ 69,90
          </div>
          <div className="flex items-baseline justify-center gap-1 my-2">
            <span className="text-xl text-[#111827]">R$</span>
            <span className="text-[52px] font-extrabold text-[#111827]">27,00</span>
          </div>
          <p className="text-sm text-[#16a34a] font-semibold mb-5 text-center">
            Você economiza R$ 42,90
          </p>
        </div>
        <p className="text-xs text-[#4A4A4A] italic mb-5">
          {"O preço será mostrado na sua moeda local ao finalizar a compra."}
        </p>

        <button
          onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full max-w-[320px] flex items-center justify-center gap-2 bg-gradient-to-b from-[#FF8533] to-[#FF6A00] text-white font-bold text-base md:text-lg tracking-wide px-10 py-4 rounded-xl transition-all border-none cursor-pointer shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02]">
          QUERO MEUS PADRÕES!
        </button>
      </div >
    </div >
  )
}
