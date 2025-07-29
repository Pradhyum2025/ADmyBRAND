import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"
import { InteractivePricingCalculator } from "@/components/landing/interactive-pricing-calculator"
import { DemoVideoSection } from "@/components/landing/demo-video-section"
import { BlogSection } from "@/components/landing/blog-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <InteractivePricingCalculator />
      <PricingSection />
      <DemoVideoSection />
      <BlogSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  )
} 