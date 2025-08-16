import { Card, CardContent } from "@/components/ui/card"
import { Building2, Globe, Award, Target, Users, Lightbulb, Shield, Rocket } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            About Fourth Dimension Electronic Systems
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            A pioneering Indian technology powerhouse that has revolutionized security solutions and digital
            transformation across industries. From humble beginnings to becoming the trusted partner of government
            agencies and Fortune 500 companies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">Our Extraordinary Journey</h3>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Founded in the vibrant tech hub of Hyderabad, Fourth Dimension Electronic Systems has grown from a
                visionary startup to India's most trusted security and technology partner. With over three decades of
                relentless innovation, we've transformed from traditional hardware manufacturing to pioneering
                AI-powered digital transformation solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our evolution story is remarkable: we began as security system manufacturers and evolved into complete
                technology architects, seamlessly blending physical security with artificial intelligence, automation,
                and cutting-edge software development. Today, we're the bridge between legacy systems and future-ready
                digital ecosystems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From the bustling metros of Mumbai and Delhi to the heritage sites of Rajasthan, from the tech corridors
                of Bangalore to the industrial landscapes of Gujarat - our solutions protect and empower organizations
                across Andhra Pradesh, Karnataka, Tamil Nadu, West Bengal, Gujarat, Madhya Pradesh, and beyond.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What sets us apart is our unique ability to understand both the security challenges of today and the
                technological possibilities of tomorrow, creating solutions that are not just effective but truly
                transformative.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-serif font-semibold text-lg mb-2">30+ Years</h4>
                <p className="text-muted-foreground text-sm">
                  Three decades of proven expertise in security innovation & technology excellence
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-serif font-semibold text-lg mb-2">Pan-India</h4>
                <p className="text-muted-foreground text-sm">
                  Nationwide presence with deep local expertise across 7+ states
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-serif font-semibold text-lg mb-2">Elite Clientele</h4>
                <p className="text-muted-foreground text-sm">
                  Trusted by government agencies, defense, and Fortune 500 enterprises
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-serif font-semibold text-lg mb-2">AI-First</h4>
                <p className="text-muted-foreground text-sm">
                  Leading the future with artificial intelligence & intelligent automation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Core Values Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="font-serif font-semibold mb-2">Innovation</h4>
                <p className="text-muted-foreground text-sm">
                  Constantly pushing boundaries with cutting-edge technology
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="font-serif font-semibold mb-2">Security</h4>
                <p className="text-muted-foreground text-sm">Uncompromising commitment to safety and protection</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="font-serif font-semibold mb-2">Partnership</h4>
                <p className="text-muted-foreground text-sm">
                  Building lasting relationships through trust and excellence
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Rocket className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="font-serif font-semibold mb-2">Excellence</h4>
                <p className="text-muted-foreground text-sm">Delivering superior quality in every solution we create</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <h4 className="font-serif font-semibold text-xl mb-4 text-primary">Our Mission</h4>
              <p className="text-muted-foreground leading-relaxed">
                To revolutionize security and technology landscapes by delivering innovative, AI-powered solutions that
                enhance safety, operational excellence, and digital transformation. We empower organizations to thrive
                in an increasingly connected world while maintaining the highest standards of security and efficiency.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <h4 className="font-serif font-semibold text-xl mb-4 text-primary">Our Vision</h4>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted technology partner and the global leader in AI-powered security solutions. We
                envision a future where intelligent automation, seamless digital experiences, and uncompromising
                security converge to create safer, smarter, and more efficient organizations across all industries.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
