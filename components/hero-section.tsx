
'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, Sparkles, Zap, Shield, Brain } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse-slower" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gradient">
                AI-Powered Digital Transformation
              </span>
              <Sparkles className="w-4 h-4 text-secondary" />
            </div>
          </motion.div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="text-gradient">Future-Ready</span>
            <br />
            <span className="text-foreground">Technology Solutions</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Transforming businesses with cutting-edge AI, advanced security systems,
            and intelligent automation. Where innovation meets reliability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Button variant="gradient" size="xl" className="group">
              Explore Solutions
              <div className="animate-bounce-x">
                <ChevronRight className="w-5 h-5" />
              </div>
            </Button>
            <Button variant="outline" size="xl" className="hover:border-primary/50">
              View Case Studies
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="animate-float">
              <Card variant="glass" className="p-6 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">AI Intelligence</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Advanced machine learning and computer vision solutions
                </p>
              </Card>
            </motion.div>

            <div className="animate-float" style={{ animationDelay: '0.2s' }}>
              <Card variant="glass" className="p-6 hover:border-secondary/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold">Security Systems</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Next-generation security and surveillance technology
                </p>
              </Card>
            </div>

            <div className="animate-float" style={{ animationDelay: '0.4s' }}>
              <Card variant="glass" className="p-6 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                    <Zap className="w-6 h-6 text-gradient" />
                  </div>
                  <h3 className="font-semibold">Smart Automation</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Intelligent process automation and digital transformation
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
