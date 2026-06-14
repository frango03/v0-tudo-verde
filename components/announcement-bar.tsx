"use client"

import { useCountdown } from "@/hooks/use-countdown"

export function AnnouncementBar() {
  const { timeLeft, formatTime } = useCountdown()

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-[#ff6a00] to-[#ff8c00] text-white py-2.5 px-3 shadow-lg">
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <span className="text-[12px] sm:text-[14px] font-bold tracking-wide flex items-center gap-1.5">
          <span className="text-base">🔥</span>
          <span>ULTIMAS HORAS DA OFERTA — TERMINA EM</span>
        </span>
        <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg shadow-md animate-pulse">
          <span className="text-[#ff6a00] font-extrabold text-[14px] sm:text-[16px] tracking-wider tabular-nums">
            {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </span>
        </div>
      </div>
    </div>
  )
}
