import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Siap Bermitra dengan Kami?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Hubungi tim kami untuk diskusi kerjasama distribusi produk farmasi Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8"
            >
              Hubungi Kami
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
