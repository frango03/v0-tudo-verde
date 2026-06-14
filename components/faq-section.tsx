"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"

const faqs = [
  {
    question: "Preciso saber fazer crochê para usar este ebook?",
    answer:
      "Não! Incluímos como bônus 10 videoaulas de pontos básicos do crochê, pensadas para iniciantes completos. Você vai aprender do zero: anel mágico, ponto baixo, aumentos, diminuições e tudo o que precisa para seguir os padrões com confiança.",
  },
  {
    question: "Como recebo o ebook?",
    answer:
      "Você receberá acesso imediato por email ao confirmar sua compra. Não há envios físicos nem esperas. Você pode começar a fazer crochê hoje mesmo do seu celular ou computador.",
  },
  {
    question: "Posso vender os amigurumis que eu fizer?",
    answer:
      "Sim. Inclusive incluímos um bônus especial sobre como vender amigurumis personalizados e cobrar preço premium.",
  },
  {
    question: "Está em português?",
    answer:
      "Sim, 100% em português. Todos os padrões, instruções e guias estão escritos em português claro e fácil de seguir.",
  },
  {
    question: "Em quanto tempo posso terminar um amigurumi?",
    answer:
      "Depende da sua experiência e do modelo que escolher, mas muitas crocheteiras completam seu primeiro amigurumi em um fim de semana. Os padrões incluem fotos passo a passo e notas técnicas para que você possa avançar com confiança desde o primeiro dia.",
  },
  {
    question: "Tenho garantia?",
    answer:
      "Sim. Oferecemos uma garantia de satisfação de 7 dias. Se por algum motivo você não ficar satisfeita, devolvemos 100% do seu dinheiro. Sem perguntas, sem letra miúda.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-[#0D0D0D] py-10 md:py-16 px-4 sm:px-6">
      <div className="max-w-[600px] mx-auto">
        <h2 className="font-serif text-[clamp(22px,4.5vw,34px)] font-black text-center text-white mb-6">
          Perguntas Frequentes
        </h2>

        <div>
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={`border-b border-[rgba(255,106,0,.2)] transition-all duration-[650ms] ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <button
        onClick={onToggle}
        className="w-full bg-transparent border-none text-left py-4 text-[15px] font-bold text-white cursor-pointer flex items-center justify-between gap-3"
      >
        {question}
        <span
          className={`text-lg text-[#FF6A00] transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>
      <div
        className={`text-sm text-white/70 leading-relaxed overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[400px] pb-4" : "max-h-0"}`}
      >
        {answer}
      </div>
    </div>
  )
}
