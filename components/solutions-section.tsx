import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Code, Brain, Zap, Smartphone } from "lucide-react"

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Core Offerings</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Revolutionary technology solutions powered by AI, spanning intelligent automation, enterprise software,
            mobile innovation, and next-generation security systems.
          </p>
        </div>

        <Tabs defaultValue="ai" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            <TabsTrigger value="ai">AI Solutions</TabsTrigger>
            <TabsTrigger value="software">Software</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
            <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="ai" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">AI-Powered Intelligence</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Harness the power of artificial intelligence to transform your operations with cutting-edge machine
                learning, computer vision, and predictive analytics.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Brain className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Advanced Surveillance Analytics</CardTitle>
                  <CardDescription>Face Recognition & Behavioral Intelligence</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Revolutionary AI-powered surveillance systems featuring real-time face recognition, crowd behavior
                    analysis, and threat detection with 99.7% accuracy.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Real-time facial recognition & tracking</li>
                    <li>• Behavioral anomaly detection</li>
                    <li>• Crowd density monitoring</li>
                    <li>• Automated alert systems</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Brain className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Predictive Visitor Analytics</CardTitle>
                  <CardDescription>Tourism Intelligence & Forecasting</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Machine learning algorithms that predict visitor patterns, optimize capacity planning, and enhance
                    guest experiences through data-driven insights.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Visitor flow prediction</li>
                    <li>• Revenue optimization models</li>
                    <li>• Seasonal trend analysis</li>
                    <li>• Personalized recommendations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Brain className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Intelligent Anomaly Detection</CardTitle>
                  <CardDescription>Proactive Security Monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Advanced neural networks continuously monitor security operations, detecting unusual patterns and
                    potential threats before they escalate.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 24/7 automated monitoring</li>
                    <li>• Pattern recognition algorithms</li>
                    <li>• Predictive threat assessment</li>
                    <li>• Instant alert notifications</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="software" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Enterprise Software Excellence</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Custom-engineered software solutions that scale with your business, integrating seamlessly with existing
                systems while delivering exceptional performance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Code className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Custom Enterprise Applications</CardTitle>
                  <CardDescription>Tailored Business Solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Bespoke enterprise applications built with modern architectures, designed to streamline operations
                    and boost productivity across all departments.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Microservices architecture</li>
                    <li>• API-first development</li>
                    <li>• Scalable cloud deployment</li>
                    <li>• Advanced security protocols</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Code className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Advanced Ticketing Platforms</CardTitle>
                  <CardDescription>Complete Operational Management</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Comprehensive ticketing ecosystems with dynamic pricing, real-time inventory management, and
                    integrated payment processing for tourism and events.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Multi-channel booking system</li>
                    <li>• Dynamic pricing engine</li>
                    <li>• Real-time analytics dashboard</li>
                    <li>• Integrated payment gateway</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Code className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Cloud Integration & Modernization</CardTitle>
                  <CardDescription>Legacy System Transformation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Seamless migration of legacy systems to modern cloud-native architectures, ensuring enhanced
                    performance, security, and scalability.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Zero-downtime migration</li>
                    <li>• Hybrid cloud solutions</li>
                    <li>• Data synchronization</li>
                    <li>• Performance optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="automation" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Intelligent Automation</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Transform your operations with smart automation that learns, adapts, and optimizes processes in
                real-time, reducing costs while improving efficiency.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Smart Workflow Automation</CardTitle>
                  <CardDescription>Intelligent Process Orchestration</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    AI-driven workflow automation that intelligently routes tasks, manages approvals, and optimizes
                    resource allocation across your entire organization.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Intelligent task routing</li>
                    <li>• Automated approval workflows</li>
                    <li>• Resource optimization</li>
                    <li>• Performance analytics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Dynamic Pricing Intelligence</CardTitle>
                  <CardDescription>Revenue Optimization Engine</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Advanced algorithms that automatically adjust pricing based on demand patterns, competitor analysis,
                    and market conditions to maximize revenue.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Real-time price optimization</li>
                    <li>• Demand forecasting</li>
                    <li>• Competitor monitoring</li>
                    <li>• Revenue analytics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Omnichannel Chatbot Platform</CardTitle>
                  <CardDescription>AI-Powered Customer Engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Sophisticated chatbot ecosystem spanning WhatsApp, web, and mobile platforms with natural language
                    processing and contextual understanding.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Natural language processing</li>
                    <li>• Multi-platform integration</li>
                    <li>• Contextual conversations</li>
                    <li>• Automated escalation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Next-Generation Mobile Solutions</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge mobile applications that deliver exceptional user experiences with offline capabilities,
                real-time synchronization, and intuitive interfaces.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Smartphone className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Cross-Platform Excellence</CardTitle>
                  <CardDescription>Universal Booking & Management</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Feature-rich mobile applications for seamless ticket booking, visitor management, and hotel
                    operations with offline functionality and real-time sync.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Offline-first architecture</li>
                    <li>• Real-time synchronization</li>
                    <li>• Intuitive user interface</li>
                    <li>• Push notifications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Smartphone className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Professional Staff Applications</CardTitle>
                  <CardDescription>Advanced Validation & Control</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Powerful mobile tools for staff validation, access control management, and comprehensive reporting
                    with biometric authentication and GPS tracking.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Biometric authentication</li>
                    <li>• GPS-based tracking</li>
                    <li>• Instant reporting tools</li>
                    <li>• Offline validation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Smartphone className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Executive Dashboards</CardTitle>
                  <CardDescription>Real-Time Command Centers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Comprehensive mobile dashboards providing executives and security officers with real-time insights,
                    alerts, and control over all operations.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Live monitoring feeds</li>
                    <li>• Interactive analytics</li>
                    <li>• Emergency response tools</li>
                    <li>• Customizable widgets</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Advanced Security Systems</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Military-grade security solutions combining physical barriers with intelligent monitoring systems to
                create impenetrable defense networks.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Intelligent Access Control</CardTitle>
                  <CardDescription>Smart Barriers & Entry Systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Advanced turnstiles, tripods, and boom barriers integrated with AI-powered access control systems
                    for seamless yet secure entry management.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• AI-powered entry validation</li>
                    <li>• Anti-tailgating technology</li>
                    <li>• Emergency override systems</li>
                    <li>• Real-time access logs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Next-Gen CCTV Systems</CardTitle>
                  <CardDescription>AI-Enhanced Surveillance Network</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    Ultra-high-definition IP cameras with advanced night vision, thermal imaging, and AI-powered
                    analytics for comprehensive surveillance coverage.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 4K Ultra HD recording</li>
                    <li>• Thermal imaging capability</li>
                    <li>• Motion detection algorithms</li>
                    <li>• Cloud storage integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Biometric & RFID Solutions</CardTitle>
                  <CardDescription>Multi-Factor Authentication</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    State-of-the-art biometric systems combining fingerprint, facial recognition, and RFID technology
                    for the highest level of identity verification.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Multi-modal biometrics</li>
                    <li>• Encrypted RFID cards</li>
                    <li>• Anti-spoofing technology</li>
                    <li>• Audit trail management</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
