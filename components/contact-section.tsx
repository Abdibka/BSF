"use client"

import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const phoneNumber = "+6281112540380";
const whatsappNumber = "6281112540380";
const email = "pt_bsf@yahoo.com";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#4AB8D3] font-semibold text-sm uppercase tracking-wider">
              {t("contact.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              {t("contact.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">
                PT Bintang Semesta Farma
              </h3>

              <div className="space-y-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ruko+Mutiara+Taman+Palem,+Jl.+Kamal+Raya+Outer+Ring+Road+No.88+4,+RT.4/RW.14,+Cengkareng+Tim.,+Kecamatan+Cengkareng,+Kota+Jakarta+Barat,+Daerah+Khusus+Ibukota+Jakarta+11810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-[#E8F7FA] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#C5EDF5] transition-colors">
                    <MapPin className="h-5 w-5 text-[#4AB8D3]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{t("contact.address")}</p>
                    <p className="text-gray-600 group-hover:text-[#4AB8D3] transition-colors">
                      Ruko Mutiara Taman Palem, Blok D8 No.88-90
                      <br />
                      Cengkareng - Jakarta Barat, Indonesia
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-orange-200 transition-colors">
                    <Phone className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{t("contact.phone")}</p>
                    <p className="text-gray-600 group-hover:text-orange-600 transition-colors">
                      +62 811-1254-0380
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-[#C5EDF5] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#8FDAEB] transition-colors">
                    <Mail className="h-5 w-5 text-[#1E8FAA]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600 group-hover:text-[#1E8FAA] transition-colors">
                      {email}
                    </p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${t("contact.whatsapp.message")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-200 transition-colors">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">WhatsApp</p>
                    <p className="text-gray-600 group-hover:text-green-600 transition-colors">
                      +62 811-1254-0380
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=PT+Bintang+Semesta+Farma,+Jakarta&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi PT Bintang Semesta Farma"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
