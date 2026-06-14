"use client"

import { cn } from "@/lib/utils"
import { motion, useInView } from "motion/react"
import type { RefObject } from "react"
import { forwardRef } from "react"

interface TimelineContentProps {
  children: React.ReactNode
  animationNum: number
  timelineRef: RefObject<HTMLElement | null>
  className?: string
  as?: keyof JSX.IntrinsicElements
  customVariants?: {
    visible: (i: number) => Record<string, unknown>
    hidden: Record<string, unknown>
  }
}

const TimelineContent = forwardRef<HTMLElement, TimelineContentProps>(
  (
    {
      children,
      animationNum,
      timelineRef,
      className,
      as: Component = "div",
      customVariants,
    },
    ref
  ) => {
    const isInView = useInView(timelineRef, { once: true, amount: 0.2 })

    const defaultVariants = {
      visible: (i: number) => ({
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          delay: i * 0.15,
          duration: 0.5,
          ease: "easeOut",
        },
      }),
      hidden: {
        filter: "blur(10px)",
        y: 20,
        opacity: 0,
      },
    }

    const variants = customVariants || defaultVariants

    const MotionComponent = motion.create(Component as keyof JSX.IntrinsicElements)

    return (
      <MotionComponent
        ref={ref as never}
        custom={animationNum}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        className={cn(className)}
      >
        {children}
      </MotionComponent>
    )
  }
)

TimelineContent.displayName = "TimelineContent"

export { TimelineContent }
