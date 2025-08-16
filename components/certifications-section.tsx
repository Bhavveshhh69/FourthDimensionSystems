import { Award, Shield, CheckCircle, Star, Trophy, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CertificationsSection() {
  const certifications = [
    {
      category: "Quality Management",
      icon: Award,
      items: [
        "ISO 9001:2015 - Quality Management Systems",
        "ISO 27001:2013 - Information Security Management",
        "ISO 14001:2015 - Environmental Management Systems",
        "OHSAS 18001 - Occupational Health & Safety",
      ],
    },
    {
      category: "Security Standards",
      icon: Shield,
      items: [
        "Common Criteria EAL4+ Certification",
        "FIPS 140-2 Level 3 Compliance",
        "NIST Cybersecurity Framework Alignment",
        "SOC 2 Type II Compliance",
      ],
    },
    {
      category: "Technology Partnerships",
      icon: Star,
      items: [
        "Microsoft Gold Partner - Cloud Platform",
        "AWS Advanced Consulting Partner",
        "Google Cloud Premier Partner",
        "Oracle Platinum Partner",
      ],
    },
    {
      category: "Industry Recognition",
      icon: Trophy,
      items: [
        "Best Security Solution Provider 2023",
        "Innovation Excellence Award 2022",
        "Digital Transformation Leader 2023",
        "Customer Choice Award 2022",
      ],
    },
  ]

  const achievements = [
    {
      icon: CheckCircle,
      title: "Government Approved",
      description: "Certified vendor for central and state government projects",
    },
    {
      icon: Shield,
      title: "Security Cleared",
      description: "Personnel with appropriate security clearances for sensitive projects",
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "24/7 support with guaranteed response times",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous quality processes and continuous improvement",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Certifications & Accreditations
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Our commitment to excellence is validated through rigorous certifications, industry partnerships, and
            recognition from leading organizations. These credentials ensure that our solutions meet the highest
            standards of quality, security, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-2 border-border hover:border-primary/30 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <cert.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">{cert.category}</h3>
                </div>
                <div className="space-y-3">
                  {cert.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2 text-foreground">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">Compliance & Standards</h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              We maintain strict adherence to international standards and regulatory requirements, ensuring our
              solutions are compliant with industry regulations and government mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-3 text-foreground">Data Protection</h4>
              <div className="space-y-2">
                <Badge variant="outline" className="block">
                  GDPR Compliant
                </Badge>
                <Badge variant="outline" className="block">
                  Data Localization
                </Badge>
                <Badge variant="outline" className="block">
                  Privacy by Design
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-3 text-foreground">Security Standards</h4>
              <div className="space-y-2">
                <Badge variant="outline" className="block">
                  Zero Trust Architecture
                </Badge>
                <Badge variant="outline" className="block">
                  End-to-End Encryption
                </Badge>
                <Badge variant="outline" className="block">
                  Multi-Factor Authentication
                </Badge>
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-3 text-foreground">Quality Assurance</h4>
              <div className="space-y-2">
                <Badge variant="outline" className="block">
                  Continuous Testing
                </Badge>
                <Badge variant="outline" className="block">
                  Performance Monitoring
                </Badge>
                <Badge variant="outline" className="block">
                  Regular Audits
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
