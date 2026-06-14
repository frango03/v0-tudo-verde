"use client"

import { useState, useEffect } from "react"

// Tempo inicial em segundos: 1h 13min 34seg = 4414 segundos
const INITIAL_TIME_SECONDS = 1 * 3600 + 13 * 60 + 34

// Armazena o timestamp de inicio globalmente para sincronizar todos os cronometros
let globalStartTime: number | null = null

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 13, seconds: 34 })

  useEffect(() => {
    // Inicializa o timestamp global na primeira vez
    if (globalStartTime === null) {
      globalStartTime = Date.now()
    }

    const calculateTimeLeft = () => {
      const elapsed = Math.floor((Date.now() - globalStartTime!) / 1000)
      const remaining = Math.max(0, INITIAL_TIME_SECONDS - elapsed)
      
      const hours = Math.floor(remaining / 3600)
      const minutes = Math.floor((remaining % 3600) / 60)
      const seconds = remaining % 60

      return { hours, minutes, seconds }
    }

    // Atualiza imediatamente
    setTimeLeft(calculateTimeLeft())

    // Atualiza a cada segundo
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (num: number) => num.toString().padStart(2, '0')

  return { timeLeft, formatTime }
}
