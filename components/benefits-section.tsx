"use client"

import { useInView } from "@/hooks/use-in-view"

export function BenefitsSection() {
  const { ref, inView } = useInView()

  const benefits = [
    {
      emoji: "Padrão",
      text: (
        <>
          Cada padrão respeita a <strong>anatomia real da raça</strong>: as orelhas, o focinho, a expressão única. Não
          são genéricos.
        </>
      ),
    },
    {
      emoji: "Cores",
      text: (
        <>
          Guia incluído para adaptar cada padrão à <strong>cor exata de cada pet</strong>. Manchas, tons, marcas... para
          ficar idêntico.
        </>
      ),
    },
    {
      emoji: "Resultado",
      text: (
        <>
          Quando virem, vão dizer: <strong>&ldquo;É igualzinho!&rdquo;</strong>. Prepare-se para as lágrimas de emoção.
        </>
      ),
    },
    {
      emoji: "Fácil",
      text: (
        <>
          <strong>Não precisa de experiência prévia</strong>. Incluímos 10 videoaulas de pontos básicos do crochê para
          você começar do zero com confiança.
        </>
      ),
    },
  ]

  return (
    <div className="bg-[#0D0D0D] py-10 md:py-16 px-4 sm:px-6">
      <div className="max-w-[580px] mx-auto">
        <h2
          ref={ref}
          className={`font-serif text-[clamp(22px,4.5vw,34px)] font-black text-center text-white mb-5 leading-tight transition-all duration-[650ms] ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Imagine poder fazer o crochê{" "}
          <em className="italic text-[#FF6A00] underline decoration-[rgba(255,106,0,.4)]">exatamente</em> do seu pet
        </h2>

        <div className="flex flex-col gap-3">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} emoji={benefit.emoji} delay={index * 100}>
              {benefit.text}
            </BenefitItem>
          ))}
        </div>
      </div>
    </div>
  )
}

function BenefitItem({ emoji, children, delay }: { emoji: string; children: React.ReactNode; delay: number }) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg p-4 flex items-start gap-3.5 border border-[rgba(255,106,0,.15)] shadow-[0_4px_16px_rgba(13,13,13,.08)] text-sm leading-relaxed text-[#0D0D0D] transition-all duration-[650ms] ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-xs font-bold text-[#FF6A00] bg-[rgba(255,106,0,.1)] px-2 py-1 rounded flex-shrink-0 mt-0.5">{emoji}</span>
      <span>{children}</span>
    </div>
  )
}
