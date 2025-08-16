import { Navigation } from "@/components/navigation"
import { SolutionsSection } from "@/components/solutions-section"
import { Footer } from "@/components/footer"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <SolutionsSection />
      </main>
      <Footer />
    </div>
  )
}
