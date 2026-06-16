"use client"

import { useEffect } from "react"
import Clarity from "@microsoft/clarity"

const CLARITY_PROJECT_ID = "x80i47znu4"

export function ClarityAnalytics() {
  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      Clarity.init(CLARITY_PROJECT_ID)
    } catch (e) {
      console.log("[v0] Clarity init error:", e)
    }
  }, [])

  return null
}
