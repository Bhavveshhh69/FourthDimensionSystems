import { Button } from "@/components/ui/button"
import { Shield, Cpu, Smartphone, BarChart3, Users, Trophy, Zap, ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-red-50/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-100/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Star className="w-4 h-4 mr-2" />
            30+ Years of Innovation Excellence
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-red-700 bg-clip-text text-transparent mb-8 leading-tight">
            Fourth Dimension Electronic Systems
          </h1>

          <p className="text-2xl md:text-3xl font-medium text-blue-700 mb-6">
            Pioneering AI-Powered Security & Digital Transformation Excellence
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Three decades of security innovation meets cutting-edge artificial intelligence. We transform enterprises
            across India with revolutionary security systems, intelligent automation, and next-generation digital
            solutions trusted by government agencies, defense organizations, and Fortune 500 companies.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button
              size="lg"
              className="text-lg px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              Contact Us
            </Button>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 mb-20 shadow-2xl transform hover:scale-105 transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  30+
                </div>
                <div className="text-blue-100 font-medium">Years of Excellence</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-blue-100 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  7
                </div>
                <div className="text-blue-100 font-medium">States Covered</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  99.9%
                </div>
                <div className="text-blue-100 font-medium">System Uptime</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 hover:border-blue-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-4 text-gray-800">Advanced Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Military-grade turnstiles, AI-powered CCTV, biometric access control with 99.7% accuracy
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 hover:border-red-300">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="h-12 w-12 text-white" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-4 text-gray-800">AI Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">
                Predictive analytics, behavioral detection, automated threat response with machine learning
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 hover:border-blue-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="h-12 w-12 text-white" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-4 text-gray-800">Mobile Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Cross-platform apps, real-time dashboards, offline-first architecture with seamless sync
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 hover:border-red-300">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-12 w-12 text-white" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-4 text-gray-800">Enterprise Software</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom applications, cloud integration, scalable architectures with microservices
              </p>
            </div>
          </div>

          <div className="mt-24 pt-16 border-t border-gray-200">
            <h3 className="text-2xl font-serif font-bold mb-12 text-gray-700">
              Trusted by Leading Organizations Across India
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center space-y-4 group">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <span className="text-gray-700 font-medium text-lg">Government Agencies</span>
              </div>
              <div className="flex flex-col items-center space-y-4 group">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <span className="text-gray-700 font-medium text-lg">Defense Organizations</span>
              </div>
              <div className="flex flex-col items-center space-y-4 group">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <span className="text-gray-700 font-medium text-lg">Fortune 500 Companies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
