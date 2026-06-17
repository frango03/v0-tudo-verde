"use client"

import { useState, useEffect, useRef } from "react"

const buyers = [
  { message: "Mariana de Sao Paulo acabou de garantir a colecao com 61% OFF por R$17,90" },
  { message: "Juliana do Rio de Janeiro liberou a Colecao Completa por apenas R$47,00 agora!" },
  { message: "Camila de Belo Horizonte aproveitou o desconto e pagou so R$27,00" },
  { message: "Fernanda de Curitiba acabou de pegar a Colecao Completa por R$47,00" },
  { message: "Larissa de Porto Alegre correu e garantiu a colecao com 61% OFF" },
  { message: "Amanda de Salvador nao perdeu tempo e levou a Colecao Completa por R$47,00" },
  { message: "Renata de Recife acabou de comprar por R$27,00 com desconto especial" },
  { message: "Beatriz de Brasilia garantiu a Colecao Completa por R$47,00 agora!" },
  { message: "Carolina de Fortaleza aproveitou e pagou so R$27,00" },
  { message: "Patricia de Campinas acabou de liberar a Colecao Completa por R$47,00" },
  { message: "Gabriela de Goiania viu a oferta e correu pra garantir por R$27,00" },
  { message: "Daniela de Florianopolis garantiu a Colecao Completa por R$47,00" },
  { message: "Isabela de Manaus aproveitou o desconto e comprou por R$27,00" },
  { message: "Vanessa de Santos nao pensou duas vezes e levou a colecao por R$47,00!" },
  { message: "Luciana de Vitoria acabou de garantir a Colecao Completa por R$27,00" },
]

export function SalePopup() {
  const [show, setShow] = useState(false)
  const [buyerIndex, setBuyerIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const showNotification = () => {
      setShow(true)

      timeoutRef.current = setTimeout(() => {
        setShow(false)

        timeoutRef.current = setTimeout(() => {
          setBuyerIndex((prev) => (prev + 1) % buyers.length)
          showNotification()
        }, 10000 + Math.random() * 5000)
      }, 5000)
    }

    timeoutRef.current = setTimeout(() => {
      showNotification()
    }, 7000)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleClose = () => {
    setShow(false)
  }

  return (
    <div
      className={`fixed top-3 left-3 right-3 sm:right-auto z-[9999] max-w-[300px] sm:max-w-[280px] bg-[#0D0D0D] rounded-lg shadow-[0_4px_18px_rgba(0,0,0,.3)] border border-[rgba(255,106,0,.25)] flex items-center gap-2.5 py-2.5 pl-3 pr-8 transition-all duration-400 ${show ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-4 opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={handleClose}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-xs text-white/30 leading-none p-0 hover:text-white/70"
        aria-label="Fechar"
      >
        ✕
      </button>

      <span className="w-2 h-2 rounded-full bg-[#22C55E] flex-shrink-0 animate-[ks08pulse_2s_infinite]" />

      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20260225_1747_Image_Generation_simple_compose_01kjb8vcmxecnb2ptf3s7evtje-PUxcaF5yZuiXfUMZh3Pjvq996cYcU3.webp"
        alt="Colecao"
        className="w-11 h-11 rounded-lg object-cover flex-shrink-0"
      />

      <div className="flex-1 min-w-0">
        <div className="text-[11px] text-white leading-tight">
          {buyers[buyerIndex].message}
        </div>
      </div>
    </div>
  )
}
