"use client"

import { useInView } from "@/hooks/use-in-view"

export function PainPoints() {
  const { ref: ref1, inView: inView1 } = useInView()
  const { ref: ref2, inView: inView2 } = useInView()

  const painItems = [
    {
      emoji: "😤",
      text: (
        <>
          Você quer oferecer algo diferente, mas <strong>acaba competindo por preço</strong> com quem vende os mesmos
          bonecos.
        </>
      ),
    },
    {
      emoji: "😞",
      text: (
        <>
          Já tentou adaptar padrões por conta própria, mas o resultado <strong>nunca se parece</strong> com um pet real.
        </>
      ),
    },
    {
      emoji: "💔",
      text: (
        <>
          Quer dar de presente algo feito à mão que seja especial, não <strong>&ldquo;mais uma pelúcia&rdquo;</strong> do
          montão.
        </>
      ),
    },
    {
      emoji: "😤",
      text: (
        <>
          Te <strong>frustra investir horas</strong> fazendo crochê de algo que no final não te convence e fica guardado
          na gaveta.
        </>
      ),
    },
  ]

  return (
    <div>
      {/* Dark section */}
      <div
        ref={ref1}
        className={`bg-[#0D0D0D] py-10 md:py-[72px] px-4 sm:px-6 text-center transition-all duration-[650ms] ease-out ${inView1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-[540px] mx-auto">
          <p className="text-[11px] font-extrabold tracking-[.14em] uppercase text-[#FF6A00] mb-3.5">
            PORQUE TODOS AMAMOS NOSSOS PETS.
          </p>
          <h2 className="font-serif text-[clamp(26px,5vw,46px)] font-black text-white leading-tight">
            Não é um boneco.
            <br />É o<em className="italic text-[#FF6A00]"> pet da família</em>, feito com amor.
          </h2>
          <div className="w-12 h-[3px] bg-[#FF6A00] rounded-full mx-auto mt-5" />
        </div>
      </div>

      {/* Pain points section */}
      <div className="bg-[#F5F5F5] py-10 md:py-16 px-4 sm:px-6">
        <div className="max-w-[580px] mx-auto">
          <p className="text-center text-[11px] font-extrabold tracking-[.14em] uppercase text-[#FF6A00] mb-2.5">
            PARECE FAMILIAR?
          </p>
          <h2
            ref={ref2}
            className={`font-serif text-[clamp(22px,4.5vw,34px)] font-black text-center text-[#0D0D0D] mb-5 transition-all duration-[650ms] ease-out ${inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Sabemos como você se sente...
          </h2>

          <div className="flex flex-col gap-3">
            {painItems.map((item, index) => (
              <PainItem key={index} emoji={item.emoji} delay={index * 100}>
                {item.text}
              </PainItem>
            ))}
          </div>

          <p className="text-center mt-5 text-sm italic text-[#FF6A00] font-semibold">
            Se você disse &ldquo;sim&rdquo; para pelo menos uma... continue lendo
          </p>
        </div>
      </div>
    </div>
  )
}

function PainItem({ emoji, children, delay }: { emoji: string; children: React.ReactNode; delay: number }) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg p-4 flex items-start gap-3.5 border border-[rgba(255,106,0,.12)] shadow-[0_4px_16px_rgba(13,13,13,.06)] text-sm leading-relaxed text-[#0D0D0D] transition-all duration-[650ms] ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-xl flex-shrink-0 mt-px">{emoji}</span>
      <span>{children}</span>
    </div>
  )
}
