"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(scrollPercent)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200/50 z-[60]">
      <div
        className="h-full bg-gradient-to-r from-[#1E8FAA] via-[#4AB8D3] to-orange-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
