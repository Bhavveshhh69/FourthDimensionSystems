import { Building2, Globe, Award, TrendingUp, Shield, Users2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function CompanyOverviewSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Leading India's Digital Security Revolution
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Since 1993, Fourth Dimension Electronic Systems has been at the forefront of security innovation, evolving
            from traditional electronic systems to AI-powered digital transformation solutions that protect and empower
            enterprises across India and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">Our Legacy</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded with a vision to revolutionize security systems in India, FDS has grown from a small electronics
                company to a comprehensive digital transformation partner. Our journey spans three decades of continuous
                innovation, adapting to emerging technologies while maintaining our core commitment to security
                excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we stand as pioneers in AI-powered security solutions, combining traditional expertise with
                cutting-edge artificial intelligence, machine learning, and IoT technologies to deliver unparalleled
                protection and operational efficiency.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">Market Leadership</h3>
              <p className="text-muted-foreground leading-relaxed">
                As one of India's most trusted security solution providers, we've successfully deployed over 500
                projects across 7 states, serving government agencies, defense organizations, multinational
                corporations, and emerging enterprises. Our solutions protect critical infrastructure, sensitive data,
                and valuable assets worth billions of rupees.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Enterprise Focus</h4>
                <p className="text-muted-foreground text-sm">
                  Specialized solutions for large-scale operations and complex security requirements
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Pan-India Presence</h4>
                <p className="text-muted-foreground text-sm">
                  Strategic operations across multiple states with local support teams
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Industry Recognition</h4>
                <p className="text-muted-foreground text-sm">
                  Multiple awards for innovation and excellence in security technology
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Continuous Growth</h4>
                <p className="text-muted-foreground text-sm">
                  Year-over-year expansion in capabilities, team size, and market reach
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">Why Enterprises Choose FDS</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our unique combination of deep security expertise, advanced AI capabilities, and comprehensive digital
                transformation services makes us the preferred partner for organizations seeking robust, scalable, and
                future-ready solutions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Military-grade security standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">24/7 expert support team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Scalable architecture design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Industry-leading SLAs</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-4xl font-bold text-primary mb-2">₹50+ Cr</div>
              <div className="text-sm text-muted-foreground mb-4">Assets Protected</div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
