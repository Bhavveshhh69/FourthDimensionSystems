import { Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/fds-logo.png"
                alt="Fourth Dimension Electronic Systems"
                width={200}
                height={67}
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <h3 className="font-serif font-bold text-xl mb-4">Fourth Dimension Electronic Systems</h3>
            <p className="text-background/80 mb-4 max-w-md">
              Leading provider of security systems, AI-powered digital transformation, and enterprise software solutions
              with 30+ years of expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:info@fds.co.in" className="text-background/80 hover:text-background transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+91XXXXXXXXX" className="text-background/80 hover:text-background transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-background/80 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-background/80 hover:text-background transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/fds-os" className="text-background/80 hover:text-background transition-colors">
                  FDS OS
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-background/80 hover:text-background transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80">Security Systems</li>
              <li className="text-background/80">Software Development</li>
              <li className="text-background/80">AI Automation</li>
              <li className="text-background/80">Mobile Applications</li>
              <li className="text-background/80">Tourism Management</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/80 text-sm">
            © {currentYear} Fourth Dimension Electronic Systems Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
