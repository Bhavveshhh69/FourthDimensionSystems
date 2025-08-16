import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  Users,
  TrendingUp,
  MapPin,
  BarChart3,
  Zap,
  Clock,
  Shield,
  Smartphone,
  Globe,
} from "lucide-react"

export function FdsOsSection() {
  return (
    <section id="fds-os" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Flagship Innovation – FDS OS
          </h2>
          <p className="text-xl text-muted-foreground mb-4">The World's Most Advanced Tourism Management Ecosystem</p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Revolutionary AI-powered digital transformation platform that has redefined how parks, attractions, hotels,
            and tourism facilities operate worldwide. From instant WhatsApp bookings to predictive crowd analytics, FDS
            OS delivers unprecedented operational intelligence and visitor experiences.
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">30sec</div>
              <div className="text-sm text-muted-foreground">Average Booking Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Revenue Increase</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Automated Operations</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">Revolutionary Tourism Technology Platform</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              FDS OS isn't just software – it's a complete digital ecosystem that transforms tourism operations from the
              ground up. Our AI-powered platform seamlessly integrates WhatsApp commerce, predictive analytics, dynamic
              pricing, and intelligent automation to create experiences that delight visitors while maximizing
              operational efficiency.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Deployed across India's most prestigious tourism destinations, FDS OS has revolutionized how attractions
              operate, delivering measurable improvements in visitor satisfaction, revenue optimization, and operational
              excellence. From heritage sites to modern theme parks, our platform adapts to any tourism environment.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              What makes FDS OS truly revolutionary is its ability to predict visitor behavior, optimize resource
              allocation in real-time, and create personalized experiences that turn first-time visitors into loyal
              advocates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Request Demo</Button>
              <Button variant="outline" size="lg">
                Download Brochure
              </Button>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
            <h4 className="font-serif font-semibold text-lg mb-6 text-primary">Transformational Benefits</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Lightning-Fast Bookings</div>
                  <div className="text-sm">30-second WhatsApp ticket purchasing with AI assistance</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Predictive Crowd Intelligence</div>
                  <div className="text-sm">AI-powered visitor flow optimization and congestion prevention</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Dynamic Revenue Optimization</div>
                  <div className="text-sm">Automated pricing that maximizes revenue based on demand patterns</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Unified Multi-Location Control</div>
                  <div className="text-sm">Centralized management of attractions, hotels, and events</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Advanced Business Intelligence</div>
                  <div className="text-sm">Real-time analytics and predictive insights for strategic decisions</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold text-center mb-12">Core Platform Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Omnichannel Booking Engine</CardTitle>
                <CardDescription>WhatsApp, Web & Mobile Integration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  Revolutionary booking ecosystem enabling instant ticket purchases through WhatsApp, mobile apps, and
                  web platforms with AI-powered customer assistance and multilingual support.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• 30-second booking completion</li>
                  <li>• AI chatbot assistance</li>
                  <li>• Multi-language support</li>
                  <li>• Instant digital tickets</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Intelligent Crowd Analytics</CardTitle>
                <CardDescription>Predictive Flow Management & Safety</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  Advanced AI algorithms continuously monitor visitor patterns, predict congestion hotspots, and provide
                  real-time recommendations for optimal crowd distribution and safety management.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Real-time density monitoring</li>
                  <li>• Predictive congestion alerts</li>
                  <li>• Automated flow optimization</li>
                  <li>• Safety compliance tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Dynamic Pricing Intelligence</CardTitle>
                <CardDescription>AI-Driven Revenue Optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  Sophisticated machine learning algorithms automatically adjust pricing based on demand forecasting,
                  competitor analysis, weather patterns, and special events to maximize revenue potential.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Real-time price optimization</li>
                  <li>• Demand forecasting models</li>
                  <li>• Competitor price monitoring</li>
                  <li>• Event-based adjustments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Unified Operations Hub</CardTitle>
                <CardDescription>Multi-Location Command Center</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  Centralized platform managing multiple attractions, accommodations, restaurants, and events from a
                  single dashboard with unified reporting, inventory management, and staff coordination.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Multi-site management</li>
                  <li>• Unified inventory control</li>
                  <li>• Cross-location reporting</li>
                  <li>• Staff coordination tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Advanced Business Intelligence</CardTitle>
                <CardDescription>Predictive Analytics & Insights</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  Comprehensive analytics platform providing deep insights into visitor behavior, revenue trends,
                  operational efficiency, and predictive modeling for strategic business decisions.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Visitor behavior analysis</li>
                  <li>• Revenue trend forecasting</li>
                  <li>• Operational KPI tracking</li>
                  <li>• Custom report generation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Smart Access Control</CardTitle>
                <CardDescription>Seamless Entry & Security Management</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  Integrated electronic gates with QR code scanning, biometric validation, RFID support, and real-time
                  access control ensuring smooth visitor flow while maintaining security protocols.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• QR code validation</li>
                  <li>• Biometric authentication</li>
                  <li>• RFID integration</li>
                  <li>• Real-time monitoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-serif font-semibold text-center mb-8">Proven Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-serif font-semibold mb-2">Heritage Site Transformation</h4>
              <p className="text-muted-foreground text-sm">
                Reduced visitor wait times by 75% and increased satisfaction scores to 95% at a major heritage
                destination
              </p>
            </div>
            <div>
              <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-serif font-semibold mb-2">Theme Park Revolution</h4>
              <p className="text-muted-foreground text-sm">
                Achieved 40% revenue increase through dynamic pricing and 90% mobile booking adoption rate
              </p>
            </div>
            <div>
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-serif font-semibold mb-2">Multi-Location Success</h4>
              <p className="text-muted-foreground text-sm">
                Streamlined operations across 15+ locations with unified management and 99.8% system uptime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
