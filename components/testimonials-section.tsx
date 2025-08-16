import { Quote, Star, Building, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "FDS transformed our entire security infrastructure with their AI-powered solutions. The predictive analytics have reduced security incidents by 85% and their 24/7 support is exceptional.",
      author: "Rajesh Kumar",
      position: "Chief Security Officer",
      company: "TechCorp Industries",
      rating: 5,
      avatar: "RK",
    },
    {
      quote:
        "The FDS OS platform revolutionized our visitor management. We've seen a 300% improvement in operational efficiency and our guests love the seamless experience.",
      author: "Priya Sharma",
      position: "Operations Director",
      company: "Heritage Resort Group",
      rating: 5,
      avatar: "PS",
    },
    {
      quote:
        "Working with FDS for our smart factory implementation was outstanding. Their IoT solutions and automation systems have increased our production efficiency by 40%.",
      author: "Michael Chen",
      position: "Plant Manager",
      company: "Global Manufacturing Ltd",
      rating: 5,
      avatar: "MC",
    },
    {
      quote:
        "FDS delivered a comprehensive mobile app solution that exceeded our expectations. The offline capabilities and real-time sync have been game-changers for our field operations.",
      author: "Anita Desai",
      position: "IT Director",
      company: "Logistics Solutions Inc",
      rating: 5,
      avatar: "AD",
    },
    {
      quote:
        "The level of expertise and professionalism from FDS is unmatched. They understood our complex requirements and delivered a solution that perfectly fits our government compliance needs.",
      author: "Dr. Suresh Patel",
      position: "Project Director",
      company: "State Government Agency",
      rating: 5,
      avatar: "SP",
    },
    {
      quote:
        "FDS's custom software development capabilities are impressive. They built us a scalable platform that handles millions of transactions daily with zero downtime.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "FinTech Innovations",
      rating: 5,
      avatar: "SJ",
    },
  ]

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Satisfied Clients",
      description: "Across multiple industries and sectors",
    },
    {
      icon: Award,
      value: "95%",
      label: "Client Retention",
      description: "Long-term partnerships and repeat business",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Average Rating",
      description: "Based on client feedback and reviews",
    },
    {
      icon: Building,
      value: "7",
      label: "States Covered",
      description: "Pan-India presence and support",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Client Testimonials & Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Our clients' success is our greatest achievement. Here's what industry leaders say about their experience
            working with FDS and the transformative impact of our solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-border hover:border-primary/30 transition-colors h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-primary/30 mb-4" />

                <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center space-x-3 mt-auto">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">Client Success Metrics</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our commitment to client success is reflected in these key metrics that demonstrate the value and impact
              of our solutions across different industries and project types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg mb-4 inline-block">
                  <stat.icon className="h-8 w-8 text-primary mx-auto" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Ready to Join Our Success Stories?</h4>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven solutions and expert team. Contact us today to
              discuss your requirements and see how we can transform your operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
