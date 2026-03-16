"use client"

import { useEffect, useState } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: "01",
    minutes: "13",
    seconds: "43",
  })

  useEffect(() => {
    let totalSeconds = 1 * 3600 + 13 * 60 + 43

    const timer = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--

        const hours = Math.floor(totalSeconds / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        const seconds = totalSeconds % 60

        setTimeLeft({
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        })
      } else {
        setTimeLeft({
          hours: "00",
          minutes: "00",
          seconds: "00",
        })
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-red-600 text-white max-w-sm mx-auto my-3 py-3 px-4 rounded-lg text-center shadow-md">
      <div className="text-xs sm:text-sm font-semibold mb-2 uppercase tracking-wide">⚠️ Oferta por tempo limitado</div>
      <div className="text-2xl sm:text-3xl font-bold tracking-wider">
        {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
      </div>
    </div>
  )
}
