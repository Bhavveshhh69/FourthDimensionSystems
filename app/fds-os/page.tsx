import { Navigation } from "@/components/navigation"
import { FdsOsSection } from "@/components/fds-os-section"
import { Footer } from "@/components/footer"

export default function FdsOsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <FdsOsSection />
      </main>
      <Footer />
    </div>
  )
}
