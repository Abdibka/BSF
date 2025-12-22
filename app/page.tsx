import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { TrustBadges } from "@/components/trust-badges";
import { AboutSection } from "@/components/about-section";
import { VisionMission } from "@/components/vision-mission";
import { Advantages } from "@/components/advantages";
import { Services } from "@/components/services";
import { ProductCategories } from "@/components/product-categories";
import { NetworkMap } from "@/components/network-map";
import { Principals } from "@/components/principals";
import { Timeline } from "@/components/timeline";
import { GallerySection } from "@/components/gallery-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <TrustBadges />
      <AboutSection />
      <Timeline />
      <VisionMission />
      <Advantages />
      <Services />
      <ProductCategories />
      <Principals />
      <NetworkMap />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
