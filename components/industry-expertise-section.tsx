import { Building, Factory, GraduationCap, Plane, ShoppingBag, Heart, Landmark, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function IndustryExpertiseSection() {
  const industries = [
    {
      icon: Building,
      title: "Corporate & Enterprise",
      description:
        "Comprehensive security and digital transformation for large corporations and multinational companies.",
      solutions: [
        "Executive protection systems",
        "Corporate campus security",
        "Employee access management",
        "Visitor tracking systems",
        "Conference room automation",
        "Digital workplace solutions",
      ],
      clients: "Fortune 500 companies, MNCs, Business parks",
    },
    {
      icon: Landmark,
      title: "Government & Public Sector",
      description: "Mission-critical security solutions for government agencies and public infrastructure.",
      solutions: [
        "High-security access control",
        "Surveillance for public spaces",
        "Emergency response systems",
        "Citizen service portals",
        "Document management systems",
        "Compliance monitoring tools",
      ],
      clients: "Central & State Governments, Municipal corporations",
    },
    {
      icon: Factory,
      title: "Manufacturing & Industrial",
      description: "Smart factory solutions combining security, automation, and operational efficiency.",
      solutions: [
        "Industrial IoT implementation",
        "Production line monitoring",
        "Quality control automation",
        "Predictive maintenance",
        "Energy management systems",
        "Safety compliance monitoring",
      ],
      clients: "Automotive, Pharmaceuticals, Textiles, Chemical plants",
    },
    {
      icon: GraduationCap,
      title: "Education & Research",
      description: "Safe and smart campus solutions for educational institutions and research facilities.",
      solutions: [
        "Campus-wide security systems",
        "Student attendance tracking",
        "Library management systems",
        "Research data protection",
        "Emergency alert systems",
        "Digital learning platforms",
      ],
      clients: "Universities, Schools, Research institutes, Training centers",
    },
    {
      icon: Heart,
      title: "Healthcare & Hospitals",
      description: "Specialized security and management systems for healthcare facilities and patient care.",
      solutions: [
        "Patient monitoring systems",
        "Medical equipment tracking",
        "Access control for sensitive areas",
        "Emergency response coordination",
        "Visitor management for hospitals",
        "Compliance reporting systems",
      ],
      clients: "Hospitals, Clinics, Medical research facilities",
    },
    {
      icon: ShoppingBag,
      title: "Retail & Hospitality",
      description: "Customer experience enhancement through smart security and operational systems.",
      solutions: [
        "Loss prevention systems",
        "Customer analytics platforms",
        "Inventory management automation",
        "Point-of-sale integration",
        "Guest management systems",
        "Revenue optimization tools",
      ],
      clients: "Shopping malls, Hotels, Restaurants, Retail chains",
    },
    {
      icon: Plane,
      title: "Transportation & Logistics",
      description: "Comprehensive solutions for airports, ports, and transportation hubs.",
      solutions: [
        "Baggage tracking systems",
        "Passenger flow management",
        "Cargo security monitoring",
        "Fleet management systems",
        "Route optimization platforms",
        "Maintenance scheduling tools",
      ],
      clients: "Airports, Seaports, Railway stations, Logistics companies",
    },
    {
      icon: Users,
      title: "Tourism & Entertainment",
      description: "Complete attraction management systems and visitor experience solutions.",
      solutions: [
        "Ticketing and entry systems",
        "Crowd management solutions",
        "Visitor analytics platforms",
        "Revenue management systems",
        "Mobile app development",
        "Digital marketing tools",
      ],
      clients: "Theme parks, Museums, Tourist attractions, Event venues",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Industry Expertise & Specialization
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Three decades of experience across diverse industries has given us deep domain knowledge and the ability to
            deliver tailored solutions that address specific sector challenges and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <industry.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-2 text-foreground">{industry.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-foreground">Key Solutions</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Typical Clients</h4>
                  <p className="text-sm text-muted-foreground">{industry.clients}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">Cross-Industry Innovation</h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Our diverse industry experience enables us to bring innovative solutions from one sector to another,
              creating unique competitive advantages for our clients through cross-pollination of ideas and
              technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground mb-2">Industry Verticals</div>
              <p className="text-xs text-muted-foreground">Deep expertise across major sectors</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground mb-2">Projects Delivered</div>
              <p className="text-xs text-muted-foreground">Successful implementations across industries</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground mb-2">Client Retention</div>
              <p className="text-xs text-muted-foreground">Long-term partnerships and repeat business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
