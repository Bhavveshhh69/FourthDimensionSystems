import { Navigation } from "@/components/navigation"
import { ClientsSection } from "@/components/clients-section"
import { WhyPartnerSection } from "@/components/why-partner-section"
import { VisionSection } from "@/components/vision-section"
import { Footer } from "@/components/footer"

export default function ClientsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ClientsSection />
        <WhyPartnerSection />
        <VisionSection />
      </main>
      <Footer />
    </div>
  )
}
