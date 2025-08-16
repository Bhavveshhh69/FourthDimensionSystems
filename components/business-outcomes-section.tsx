import { TrendingUp, Shield, Clock, Users, Award, Target, Zap, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BusinessOutcomesSection() {
  const businessAreas = [
    {
      icon: Shield,
      title: "Security & Risk Management",
      description: "Comprehensive security solutions that protect assets and ensure business continuity",
      outcomes: [
        "99.9% Security Incident Prevention",
        "24/7 Monitoring & Response",
        "Compliance Assurance",
        "Risk Assessment & Mitigation",
        "Emergency Response Systems",
        "Asset Protection",
        "Perimeter Security",
        "Access Control Management",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "Strategic technology initiatives that drive operational efficiency and growth",
      outcomes: [
        "Process Automation",
        "Digital Workflow Optimization",
        "Legacy System Modernization",
        "Data-Driven Decision Making",
        "Customer Experience Enhancement",
        "Operational Cost Reduction",
        "Scalable Infrastructure",
        "Business Intelligence",
      ],
    },
    {
      icon: Users,
      title: "Enterprise Solutions",
      description: "Tailored software solutions that address specific business challenges and requirements",
      outcomes: [
        "Custom Application Development",
        "Enterprise Resource Planning",
        "Customer Relationship Management",
        "Supply Chain Management",
        "Human Resource Management",
        "Financial Management Systems",
        "Inventory Management",
        "Business Process Management",
      ],
    },
    {
      icon: Zap,
      title: "AI-Powered Automation",
      description: "Intelligent automation solutions that enhance productivity and reduce manual effort",
      outcomes: [
        "Intelligent Process Automation",
        "Predictive Analytics",
        "Machine Learning Integration",
        "Computer Vision Applications",
        "Natural Language Processing",
        "Automated Decision Making",
        "Smart Monitoring Systems",
        "Cognitive Computing",
      ],
    },
    {
      icon: Globe,
      title: "Mobile & Web Solutions",
      description: "Cross-platform applications that extend business reach and improve accessibility",
      outcomes: [
        "Mobile-First Applications",
        "Progressive Web Apps",
        "Cross-Platform Compatibility",
        "Offline Functionality",
        "Real-Time Synchronization",
        "User Experience Optimization",
        "Performance Optimization",
        "Responsive Design",
      ],
    },
    {
      icon: Target,
      title: "Tourism & Hospitality",
      description: "Specialized solutions for tourism attractions and hospitality management",
      outcomes: [
        "Visitor Management Systems",
        "Ticketing & Reservations",
        "Queue Management",
        "Revenue Optimization",
        "Guest Experience Enhancement",
        "Operational Analytics",
        "Staff Management",
        "Multi-Location Management",
      ],
    },
    {
      icon: Clock,
      title: "Real-Time Operations",
      description: "Mission-critical systems that ensure continuous operations and instant response",
      outcomes: [
        "Real-Time Monitoring",
        "Instant Alert Systems",
        "Live Dashboard Analytics",
        "Automated Reporting",
        "Performance Tracking",
        "System Health Monitoring",
        "Predictive Maintenance",
        "Continuous Operations",
      ],
    },
    {
      icon: Award,
      title: "Quality & Compliance",
      description: "Industry-standard practices that ensure reliability, security, and regulatory compliance",
      outcomes: [
        "ISO Certified Processes",
        "Quality Assurance",
        "Regulatory Compliance",
        "Security Standards",
        "Performance Benchmarks",
        "Continuous Improvement",
        "Best Practice Implementation",
        "Industry Certifications",
      ],
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Business Outcomes & Value Delivery
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Our solutions are designed to deliver measurable business outcomes that drive growth, enhance security, and
            improve operational efficiency. We focus on solving real business challenges with proven methodologies and
            industry best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {businessAreas.map((area, index) => (
            <Card key={index} className="border-2 border-border hover:border-primary/30 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <area.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif">{area.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {area.outcomes.map((outcome, outcomeIndex) => (
                    <Badge
                      key={outcomeIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary/10 transition-colors"
                    >
                      {outcome}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">Our Approach to Success</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We partner with organizations to understand their unique challenges and deliver solutions that create
                lasting value. Our methodology focuses on measurable outcomes, sustainable growth, and long-term
                success.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">Strategic planning and requirement analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">Agile development with continuous feedback</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">Rigorous testing and quality assurance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">Ongoing support and optimization</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
