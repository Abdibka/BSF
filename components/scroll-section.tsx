"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ScrollSectionProps {
  children: ReactNode
  className?: string
  id?: string
  animation?: "fade-up" | "scale" | "slide-left" | "slide-right" | "none"
  delay?: number
  threshold?: number
}

export function ScrollSection({
  children,
  className = "",
  id,
  animation = "fade-up",
  delay = 0,
  threshold = 0.15,
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: "-50px" },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [delay, threshold])

  const animationClass = {
    "fade-up": "animate-fade-in-up",
    scale: "animate-scale-in",
    "slide-left": "animate-slide-in-left",
    "slide-right": "animate-slide-in-right",
    none: "",
  }[animation]

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`
        scroll-section min-h-screen flex items-center
        ${animation !== "none" && !isVisible ? "opacity-0" : ""}
        ${isVisible ? animationClass : ""}
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-full">{children}</div>
    </section>
  )
}
