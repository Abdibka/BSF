"use client"

import {
  Target,
  Compass,
  Heart,
  Shield,
  Clock,
  Award,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function VisionMission() {
  const { t } = useLanguage();

  const coreValues = [
    {
      name: "Integrity",
      icon: Shield,
      description: t("visionmission.values.integrity.desc"),
    },
    {
      name: "Reliability",
      icon: CheckCircle,
      description: t("visionmission.values.reliability.desc"),
    },
    {
      name: "Service Excellence",
      icon: Award,
      description: t("visionmission.values.excellence.desc"),
    },
    {
      name: "Compliance",
      icon: Clock,
      description: t("visionmission.values.compliance.desc"),
    },
    {
      name: "Innovation",
      icon: Sparkles,
      description: t("visionmission.values.innovation.desc"),
    },
  ];

  const missions = [
    t("visionmission.mission.1"),
    t("visionmission.mission.2"),
    t("visionmission.mission.3"),
    t("visionmission.mission.4"),
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#4AB8D3] font-semibold text-sm uppercase tracking-wider">
              {t("visionmission.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              {t("visionmission.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Visi - blue accent */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-[#E8F7FA] rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-[#4AB8D3]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t("visionmission.vision.title")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("visionmission.vision.text")}
              </p>
            </div>

            {/* Misi - orange accent */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Compass className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t("visionmission.mission.title")}</h3>
              <ul className="space-y-3">
                {missions.map((mission, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                    {mission}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="bg-gradient-to-r from-[#4AB8D3] to-[#1E8FAA] rounded-2xl p-8 md:p-10">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Heart className="h-6 w-6 text-orange-300" />
              <h3 className="text-xl font-bold text-white">Core Values</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {coreValues.map((value) => (
                <div key={value.name} className="text-center group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
                    <value.icon className="h-6 w-6 text-orange-300" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">{value.name}</h4>
                  <p className="text-white/80 text-sm font-medium leading-relaxed hidden md:block">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
