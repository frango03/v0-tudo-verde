"use client"

import { useState, useEffect } from "react"
import { AnnouncementBar } from "@/components/announcement-bar"
import { HeroSection } from "@/components/hero-section"
import { PainPoints } from "@/components/pain-points"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import { BenefitsSection } from "@/components/benefits-section"
import { BreedsSection } from "@/components/breeds-section"
import { OfferSection } from "@/components/offer-section"
import { BonusSection } from "@/components/bonus-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { StickyBar } from "@/components/sticky-bar"
import { SalePopup } from "@/components/sale-popup"

export default function LandingPage() {
  const [viewers, setViewers] = useState(21)

  useEffect(() => {
    const rand = () => Math.floor(Math.random() * (28 - 14 + 1)) + 14

    const tick = () => {
      setViewers(rand())
    }

    const scheduleNext = () => {
      setTimeout(() => {
        tick()
        scheduleNext()
      }, 7000 + Math.random() * 5000)
    }

    tick()
    scheduleNext()
  }, [])

  return (
    <main className="font-sans">
      <AnnouncementBar />
      <HeroSection viewers={viewers} />
      <PainPoints />
      <ReviewsCarousel />
      <BenefitsSection />
      <BreedsSection />
      <OfferSection viewers={viewers} />
      <BonusSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta viewers={viewers} />
      <Footer />
      <StickyBar />
      <SalePopup />
    </main>
  )
}
