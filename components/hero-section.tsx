"use client"

interface HeroSectionProps {
  viewers: number
}

export function HeroSection({ viewers }: HeroSectionProps) {
  return (
    <section className="bg-[#F5F5F5] py-10 md:py-16 px-4 sm:px-6 text-center relative overflow-hidden">
      {/* Decorative gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 85% 15%, rgba(255,106,0,.10), transparent 55%),
            radial-gradient(ellipse 50% 40% at 10% 80%, rgba(255,106,0,.06), transparent 50%)
          `,
        }}
      />

      <div className="w-full max-w-[560px] mx-auto relative flex flex-col items-center">
        <h1 className="font-serif font-black text-[clamp(28px,6vw,50px)] leading-tight text-[#0D0D0D] mb-2 text-balance">
          <span className="block">Transforme seu Pet</span>
          <span className="block">em um <em className="italic text-[#FF6A00] not-italic">Amigurumi Eterno</em></span>
          <span className="block text-[clamp(16px,3vw,24px)] font-bold text-[#4A4A4A] mt-2 font-sans">
            em menos de 24 horas
          </span>
        </h1>

        <p className="text-[clamp(14px,3vw,17px)] text-[#4A4A4A] leading-relaxed mx-auto mb-6 max-w-[460px]">
          Não é só um padrão. É a oportunidade de criar uma lembrança{" "}
          <strong className="text-[#FF6A00]">idêntica ao seu melhor amigo peludo</strong>, e fazer peças que as pessoas
          querem guardar para sempre.
        </p>

        <div className="inline-block relative rounded-[20px] overflow-hidden shadow-[0_12px_40px_rgba(13,13,13,.18),0_0_0_4px_rgba(255,106,0,.15)] max-w-[460px] w-full mb-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260225_1747_Image_Generation_simple_compose_01kjb8vcmxecnb2ptf3s7evtje-7z500lwQKd1mpZdhlCeOYc3R3kvtJf.webp"
            alt="Pet real e seu amigurumi identico"
            className="block w-full h-auto"
          />
          <span className="absolute top-3 left-3 text-[11px] font-extrabold tracking-wide px-3 py-1 rounded-full shadow-sm bg-white/95 text-[#0D0D0D]">
            Seu Pet
          </span>
          <span className="absolute top-3 right-3 text-[11px] font-extrabold tracking-wide px-3 py-1 rounded-full shadow-sm bg-[#FF6A00] text-white">
            Sua Criacao
          </span>
        </div>

        <div className="bg-white rounded-xl px-4 py-3 text-[13px] italic text-[#0D0D0D] inline-flex items-center justify-center mb-5 w-full max-w-[400px] text-left border border-[rgba(255,106,0,.2)] shadow-[0_4px_16px_rgba(13,13,13,.06)]">
          <div>
            <div className="text-[#FF6A00] text-[13px] not-italic mb-1.5">★★★★★</div>
            <span>&ldquo;Minha cliente chorou quando viu. Disse que era igualzinho ao Toby dela.&rdquo;</span>
            <div className="mt-1.5 not-italic text-[9px] font-bold text-[#4A4A4A] tracking-wide">
              SOFIA R. — São Paulo, Brasil · Empreendedora de Crochê
            </div>
          </div>
        </div>

        {/* Pricing Block - Glassmorphism Card */}
          <div className="w-full max-w-[400px] p-6 rounded-[20px] bg-white/75 backdrop-blur-[12px] border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.08)] mb-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[13px] text-[#6b7280] tracking-[1px] uppercase">OFERTA EXCLUSIVA</span>
              <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#fff7ed] text-[#ea580c] border border-[#fed7aa]">
                70% OFF
              </span>
            </div>
            <div className="text-base text-[#9ca3af] line-through text-center">
              R$ 133,00
            </div>
            <div className="flex items-baseline justify-center gap-1 my-2">
              <span className="text-xl text-[#111827]">R$</span>
              <span className="text-[52px] font-extrabold text-[#111827]">39,90</span>
            </div>
            <p className="text-sm text-[#16a34a] font-semibold mb-5 text-center">
              Você economiza R$ 93,10
            </p>
          </div>

        <div className="w-full flex flex-col items-center">
          <button
            onClick={() => {
              const element = document.getElementById('mega-pack')
              if (element) {
                const yOffset = -80
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                window.scrollTo({ top: y, behavior: 'smooth' })
              }
            }}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#FF8533] to-[#FF6A00] text-white font-bold text-base md:text-lg tracking-wide px-9 py-4 rounded-xl border-none cursor-pointer transition-all w-full max-w-[320px] shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02]">
            QUERO A COLEÇÃO!
          </button>

          <p className="text-[12px] italic text-[#4A4A4A] mt-3 max-w-[320px] mx-auto leading-relaxed text-center">
            Perfeitos para criar seu próprio design, presentear... ou transformar seu talento em fonte de renda.
            <br />
            <strong className="text-[#FF6A00]">Ebook Digital — Download Imediato</strong>
          </p>
          <p className="text-[11px] text-[#4A4A4A] mt-2 text-center">Garantia de reembolso de 7 dias — sem perguntas</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-[13px] text-[#4A4A4A]">
          <div className="flex">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fotoag2015museo-t44HwNbzGSoNM0haH5v4UAz6prQO9D.jpg"
              alt=""
              className="rounded-full object-cover border-2 border-white w-[30px] h-[30px]"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images_7__1_11zon-mNzWoRJyI0cnJNHc6hOBWO06LedPOf.jpg"
              alt=""
              className="rounded-full object-cover border-2 border-white -ml-2 w-[30px] h-[30px]"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d40244aa3f0ef852d37e20e7d8d6893d-Co0HJFfRDVlGN4MPQqSFYO38PrQ5FK.jpg"
              alt=""
              className="rounded-full object-cover border-2 border-white -ml-2 w-[30px] h-[30px]"
            />
          </div>
          <span>
            <strong className="text-[#FF6A00]">+1.200 crocheteiras felizes</strong>
          </span>
        </div>
      </div>
    </section>
  )
}
