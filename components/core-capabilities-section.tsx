import { Brain, Code, Cog, Smartphone, Shield, Database, Cloud, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CoreCapabilitiesSection() {
  const capabilities = [
    {
      icon: Brain,
      title: "AI Solutions & Machine Learning",
      description:
        "Advanced artificial intelligence systems that learn, adapt, and optimize security operations in real-time.",
      features: [
        "Predictive threat analysis with 95% accuracy",
        "Behavioral pattern recognition",
        "Automated incident response",
        "Computer vision for surveillance",
        "Natural language processing for reports",
        "Deep learning anomaly detection",
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "YOLO", "BERT"],
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Enterprise-grade software solutions built with modern architectures and best practices.",
      features: [
        "Microservices architecture design",
        "Cloud-native application development",
        "API-first development approach",
        "Real-time data processing",
        "Scalable database design",
        "DevOps and CI/CD implementation",
      ],
      technologies: ["React", "Node.js", "Python", "Java", "Docker", "Kubernetes"],
    },
    {
      icon: Cog,
      title: "Industrial Automation",
      description: "Smart automation systems that optimize operations, reduce costs, and improve efficiency.",
      features: [
        "IoT sensor integration",
        "SCADA system development",
        "Process automation workflows",
        "Predictive maintenance systems",
        "Energy management solutions",
        "Quality control automation",
      ],
      technologies: ["PLC", "HMI", "MQTT", "OPC-UA", "InfluxDB", "Grafana"],
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description: "Cross-platform mobile solutions with offline capabilities and seamless synchronization.",
      features: [
        "Native iOS and Android development",
        "Cross-platform React Native apps",
        "Offline-first architecture",
        "Real-time push notifications",
        "Biometric authentication",
        "Enterprise mobility management",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify"],
    },
    {
      icon: Shield,
      title: "Advanced Security Systems",
      description: "Comprehensive security infrastructure with AI-powered threat detection and response.",
      features: [
        "Biometric access control systems",
        "AI-powered CCTV surveillance",
        "Intrusion detection systems",
        "Fire safety and alarm systems",
        "Visitor management solutions",
        "Perimeter security systems",
      ],
      technologies: ["Hikvision", "Dahua", "ZKTeco", "Honeywell", "Bosch", "Axis"],
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Core Capabilities & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Our comprehensive suite of services combines cutting-edge technology with deep domain expertise to deliver
            transformative solutions that drive business growth and operational excellence.
          </p>
        </div>

        <div className="space-y-12">
          {capabilities.map((capability, index) => (
            <Card key={index} className="border-2 border-border hover:border-primary/30 transition-colors">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <capability.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-serif mb-3">{capability.title}</CardTitle>
                    <p className="text-muted-foreground text-lg leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-lg mb-4 text-foreground">Key Features & Capabilities</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {capability.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {capability.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground">Integrated Solution Approach</h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              Our unique strength lies in integrating these capabilities to create comprehensive solutions. Whether you
              need AI-powered security systems with custom mobile apps, or automated industrial processes with real-time
              monitoring software, we deliver end-to-end solutions that work seamlessly together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Database className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Data Integration</h4>
                <p className="text-sm text-muted-foreground">Unified data architecture across all systems</p>
              </div>
              <div className="text-center">
                <Cloud className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Cloud Deployment</h4>
                <p className="text-sm text-muted-foreground">Scalable cloud infrastructure and hybrid solutions</p>
              </div>
              <div className="text-center">
                <Zap className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Real-time Processing</h4>
                <p className="text-sm text-muted-foreground">Instant data processing and response systems</p>
              </div>
              <div className="text-center">
                <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Security First</h4>
                <p className="text-sm text-muted-foreground">End-to-end encryption and security protocols</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
