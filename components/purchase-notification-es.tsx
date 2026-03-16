"use client"

import { useState, useEffect } from "react"

interface Purchase {
  name: string
  place: string
}

const purchases: Purchase[] = [
  { name: "Camila", place: "Santiago - Chile" },
  { name: "Francisca", place: "Valparaiso - Chile" },
  { name: "Constanza", place: "Concepcion - Chile" },
  { name: "Valentina", place: "Vina del Mar - Chile" },
  { name: "Catalina", place: "Temuco - Chile" },
  { name: "Isidora", place: "Antofagasta - Chile" },
  { name: "Fernanda", place: "La Serena - Chile" },
  { name: "Javiera", place: "Rancagua - Chile" },
  { name: "Martina", place: "Puerto Montt - Chile" },
  { name: "Antonella", place: "Iquique - Chile" },
  { name: "Sofia", place: "Talca - Chile" },
  { name: "Macarena", place: "Arica - Chile" },
]

export default function PurchaseNotificationEs() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null)

  useEffect(() => {
    const showNotification = () => {
      const randomPurchase = purchases[Math.floor(Math.random() * purchases.length)]
      setCurrentPurchase(randomPurchase)
      setIsVisible(true)

      setTimeout(() => {
        setIsVisible(false)
      }, 4000)
    }

    // First display after 40 seconds
    const initialTimeout = setTimeout(showNotification, 40000)

    // Display every 40 seconds
    const interval = setInterval(showNotification, 40000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  if (!currentPurchase) return null

  return (
    <div
      className={`fixed top-14 right-4 md:top-16 md:right-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 px-4 rounded-2xl font-sans text-sm shadow-lg flex items-center gap-3 z-[9999] pointer-events-none transition-all duration-500 ease-out border-2 border-white/30 ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95"
      }`}
    >
      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-lg">
        {"🧶"}
      </div>
      <div>
        <span className="font-bold">{currentPurchase.name}</span> acaba de inscribirse
        <span className="block text-xs text-white/80">{currentPurchase.place}</span>
      </div>
    </div>
  )
}
