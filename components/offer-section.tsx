"use client"

import PricingSection from "@/components/ui/pricing"

interface OfferSectionProps {
  viewers: number
}

export function OfferSection({ viewers }: OfferSectionProps) {
  return <PricingSection viewers={viewers} />
}
