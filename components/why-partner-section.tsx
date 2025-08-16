import { Card, CardContent } from "@/components/ui/card"
import { Award, Cpu, Globe, Shield, TrendingUp, Users } from "lucide-react"

export function WhyPartnerSection() {
  const reasons = [
    {
      icon: Award,
      title: "30+ Years Expertise",
      description:
        "Proven domain expertise in security systems with a track record of successful implementations across diverse industries.",
    },
    {
      icon: Cpu,
      title: "Strong R&D in AI",
      description:
        "In-house software and AI development team focused on cutting-edge automation and intelligent solutions.",
    },
    {
      icon: Globe,
      title: "Nationwide Support",
      description:
        "Comprehensive installation and support network across multiple states with local presence and expertise.",
    },
    {
      icon: Shield,
      title: "Compliance Focused",
      description:
        "Future-ready, scalable, and secure solutions that meet industry standards and regulatory requirements.",
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description:
        "Demonstrated results in improving operational efficiency, reducing costs, and enhancing security for clients.",
    },
    {
      icon: Users,
      title: "Trusted by Leaders",
      description:
        "Preferred partner for government agencies, Fortune companies, and leading organizations across sectors.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Why Partner with FDS?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose FDS as your technology partner for unmatched expertise, innovation, and commitment to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <Card key={index} className="text-center h-full">
                <CardContent className="p-8">
                  <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-serif font-semibold text-lg mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 max-w-4xl mx-auto">
            <h3 className="font-serif font-semibold text-2xl mb-4 text-primary">Ready to Transform Your Operations?</h3>
            <p className="text-muted-foreground mb-6">
              If you're looking for a security partner who also understands software, AI, and automation, FDS is your
              one-stop solution. Let's discuss how we can enhance your security, efficiency, and operational excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
