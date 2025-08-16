import { Code, Database, Cloud, Shield, Smartphone, Brain, Cog, Monitor } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TechnologyStackSection() {
  const techCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern, responsive user interfaces with exceptional user experience",
      technologies: [
        "React.js",
        "Next.js",
        "Vue.js",
        "Angular",
        "TypeScript",
        "Tailwind CSS",
        "Material-UI",
        "Ant Design",
        "React Native",
        "Flutter",
        "Progressive Web Apps",
      ],
    },
    {
      icon: Database,
      title: "Backend & Databases",
      description: "Scalable server architectures and robust data management systems",
      technologies: [
        "Node.js",
        "Python",
        "Java",
        "C#",
        ".NET Core",
        "Express.js",
        "FastAPI",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Elasticsearch",
        "Apache Kafka",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Modern cloud infrastructure and automated deployment pipelines",
      technologies: [
        "AWS",
        "Microsoft Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "GitLab CI/CD",
        "Ansible",
        "Prometheus",
        "Grafana",
        "ELK Stack",
      ],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced artificial intelligence and data science capabilities",
      technologies: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenCV",
        "YOLO",
        "BERT",
        "GPT",
        "Apache Spark",
        "Jupyter",
        "MLflow",
        "Kubeflow",
        "Computer Vision APIs",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications with native performance",
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Xamarin",
        "Ionic",
        "Firebase",
        "AWS Amplify",
        "Push Notifications",
        "Offline Storage",
      ],
    },
    {
      icon: Shield,
      title: "Security Technologies",
      description: "Enterprise-grade security systems and protocols",
      technologies: [
        "Biometric Systems",
        "RFID/NFC",
        "IP Cameras",
        "Access Control",
        "Intrusion Detection",
        "Fire Alarm Systems",
        "Video Analytics",
        "Facial Recognition",
        "License Plate Recognition",
      ],
    },
    {
      icon: Cog,
      title: "IoT & Automation",
      description: "Industrial automation and Internet of Things solutions",
      technologies: [
        "MQTT",
        "OPC-UA",
        "Modbus",
        "PLC Programming",
        "SCADA",
        "HMI Development",
        "LoRaWAN",
        "Zigbee",
        "WiFi 6",
        "5G",
        "Edge Computing",
        "Time Series Databases",
      ],
    },
    {
      icon: Monitor,
      title: "Monitoring & Analytics",
      description: "Real-time monitoring and business intelligence platforms",
      technologies: [
        "Grafana",
        "Kibana",
        "Tableau",
        "Power BI",
        "Apache Superset",
        "InfluxDB",
        "Prometheus",
        "New Relic",
        "DataDog",
        "Splunk",
        "Google Analytics",
        "Mixpanel",
      ],
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Technology Stack & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Our comprehensive technology stack spans the entire development lifecycle, from frontend interfaces to
            backend systems, cloud infrastructure, and specialized security hardware. We stay current with emerging
            technologies while maintaining expertise in proven, enterprise-grade solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <Card key={index} className="border-2 border-border hover:border-primary/30 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif">{category.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary/10 transition-colors"
                    >
                      {tech}
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
              <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">Technology Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe in choosing the right technology for each specific use case rather than following trends. Our
                technology decisions are driven by performance requirements, scalability needs, security considerations,
                and long-term maintainability.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">Performance-first architecture design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">Security-by-design implementation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">Scalable and maintainable code practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">Continuous integration and deployment</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">System Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
