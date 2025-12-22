"use client"

import { ShieldCheck, Award, FileCheck, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TrustBadges() {
  const { t } = useLanguage()

  const badges = [
    { icon: ShieldCheck, label: t("badge.pbf") },
    { icon: Award, label: t("badge.cdob") },
    { icon: FileCheck, label: t("badge.import") },
    { icon: Globe, label: t("badge.psef") },
  ]

  return (
    <section className="py-8 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-blue-700">
              <badge.icon className="h-5 w-5" />
              <span className="font-medium text-sm md:text-base">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
