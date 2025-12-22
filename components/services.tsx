"use client"

import { Truck, Warehouse, Store, FileText, Globe } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"

const colorClasses = {
  blue: { bg: "bg-[#E8F7FA]", text: "text-[#4AB8D3]", hoverBg: "group-hover:bg-[#4AB8D3]" },
  orange: { bg: "bg-orange-100", text: "text-orange-600", hoverBg: "group-hover:bg-orange-500" },
  cyan: { bg: "bg-[#C5EDF5]", text: "text-[#1E8FAA]", hoverBg: "group-hover:bg-[#1E8FAA]" },
  red: { bg: "bg-red-100", text: "text-red-600", hoverBg: "group-hover:bg-red-600" },
  yellow: { bg: "bg-yellow-100", text: "text-yellow-600", hoverBg: "group-hover:bg-yellow-500" },
}

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  const services = [
    {
      icon: Truck,
      title: t("services.distribution.title"),
      description: t("services.distribution.desc"),
      color: "blue",
    },
    {
      icon: Warehouse,
      title: t("services.warehouse.title"),
      description: t("services.warehouse.desc"),
      color: "orange",
    },
    {
      icon: Store,
      title: t("services.retail.title"),
      description: t("services.retail.desc"),
      color: "cyan",
    },
    {
      icon: FileText,
      title: t("services.import.title"),
      description: t("services.import.desc"),
      color: "red",
    },
    {
      icon: Globe,
      title: t("services.digital.title"),
      description: t("services.digital.desc"),
      color: "yellow",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="layanan" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#4AB8D3] font-semibold text-sm uppercase tracking-wider">{t("services.label")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{t("services.title")}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const colors = colorClasses[service.color as keyof typeof colorClasses]
              return (
                <div
                  key={service.title}
                  className={`group flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-100 hover:border-[#8FDAEB] hover:shadow-lg transition-all duration-500 hover:-translate-y-1 cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center shrink-0 ${colors.hoverBg} group-hover:rotate-6 transition-all duration-300`}
                  >
                    <service.icon className={`h-6 w-6 ${colors.text} group-hover:text-white transition-colors`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#4AB8D3] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
