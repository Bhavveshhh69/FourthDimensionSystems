import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Landmark, Shield, Plane, Factory, Globe } from "lucide-react"

export function ClientsSection() {
  const clientCategories = [
    {
      icon: Landmark,
      title: "Government & Tourism",
      clients: [
        "Nehru Zoological Park, Hyderabad",
        "Nandankanan Zoological Park, Bhubaneshwar",
        "Sanjay Gandhi Biological Park, Patna",
        "Borra Caves & Bellum Caves - APTDC",
        "Rajgir Ropeway - Bihar Tourism",
        "NTR Gardens & Lumbini Park - HMDA",
      ],
    },
    {
      icon: Building2,
      title: "Corporate & Industry",
      clients: [
        "Reliance Infocomm Ltd.",
        "TATA Motors",
        "Apollo Health Street",
        "WIPRO",
        "Aurabindo Pharma",
        "Dr. Reddy's Laboratories",
      ],
    },
    {
      icon: Shield,
      title: "Defence & Government",
      clients: [
        "Zen Technologies Ltd.",
        "DRDL - Defence Research Lab",
        "Department of Atomic Energy",
        "Tamil Nadu Atomic Power Station",
        "Army HQ (ATNK & K HQ)",
        "Kolkata Police Department",
      ],
    },
    {
      icon: Plane,
      title: "Theme Parks & Entertainment",
      clients: [
        "Jalavihar Water Park",
        "Now or Never Land - Pune",
        "Crazy World Water Park",
        "Hyderabad Race Club",
        "Treasure Island Theme Park",
        "Laser Show @ Lumbini Park",
      ],
    },
    {
      icon: Factory,
      title: "Manufacturing & Pharma",
      clients: [
        "Coca-Cola (Ameenpura)",
        "Hyderabad Industries Ltd.",
        "Mylan Industries",
        "Pace Technologies Ltd.",
        "Mint Corporation & Security Press",
      ],
    },
    {
      icon: Globe,
      title: "International Clients",
      clients: ["Elbana Photonics Ltd. - Abu Dhabi", "Carlton Energy Systems - Nigeria"],
    },
  ]

  return (
    <section id="clients" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Our Esteemed Clients</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by government agencies, PSUs, tourism corporations, hotels, IT companies, and industries across
            India and internationally.
          </p>
        </div>

        {/* Market Coverage */}
        <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 mb-16 text-center">
          <h3 className="font-serif font-semibold text-xl mb-4 text-primary">Market Presence</h3>
          <p className="text-muted-foreground">
            <strong>Serving across:</strong> Andhra Pradesh • Karnataka • Tamil Nadu • West Bengal • Gujarat • Madhya
            Pradesh • Bihar • Telangana • Jharkhand • Mumbai • Abu Dhabi • Nigeria
          </p>
        </div>

        {/* Client Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <IconComponent className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.clients.map((client, clientIndex) => (
                      <li key={clientIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {client}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Marquee Projects */}
        <div className="mt-16">
          <h3 className="text-2xl font-serif font-semibold text-center mb-8">Marquee Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <h4 className="font-serif font-semibold text-lg mb-2 text-primary">Nandankanan Zoo</h4>
                <p className="text-muted-foreground text-sm">Complete access control and visitor management system</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h4 className="font-serif font-semibold text-lg mb-2 text-primary">Hyderabad Race Club</h4>
                <p className="text-muted-foreground text-sm">Advanced security and ticketing infrastructure</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h4 className="font-serif font-semibold text-lg mb-2 text-primary">Rajgir Ropeway</h4>
                <p className="text-muted-foreground text-sm">Tourism management and safety systems</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
