import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { CompanyOverviewSection } from "@/components/company-overview-section"
import { CoreCapabilitiesSection } from "@/components/core-capabilities-section"
import { IndustryExpertiseSection } from "@/components/industry-expertise-section"
import { BusinessOutcomesSection } from "@/components/business-outcomes-section"
import { CertificationsSection } from "@/components/certifications-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <CompanyOverviewSection />
        <CoreCapabilitiesSection />
        <IndustryExpertiseSection />
        <BusinessOutcomesSection />
        <CertificationsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
