"use client"

import { useState, useEffect } from "react"

export function StickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[9998] bg-[#0D0D0D] px-4 sm:px-6 py-2.5 pb-4 sm:pb-3 flex flex-col items-center gap-2 shadow-[0_-4px_24px_rgba(0,0,0,.4)] transition-transform duration-400 ${visible ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="text-[13px] font-bold text-white text-center leading-tight">
        <em className="italic text-[#FF6A00]">Amigurumis de Pets</em> — Padrões por raça em PDF
      </div>

      <button
        onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })}
        className="w-full max-w-[400px] bg-gradient-to-b from-[#FF8533] to-[#FF6A00] text-white font-bold text-[14px] sm:text-[15px] tracking-wide rounded-xl py-3.5 px-5 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] transition-all border-none cursor-pointer">
        QUERO A COLEÇÃO!
      </button>
    </div>
  )
}
