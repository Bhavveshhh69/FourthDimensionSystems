import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Linkedin, Clock, Users, Award, Headphones } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Connect With Our Experts</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Ready to revolutionize your security infrastructure and operational efficiency? Our team of technology
            experts is standing by to understand your unique requirements and design solutions that transform your
            business. From initial consultation to ongoing support, we're your trusted partner in digital
            transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-serif font-semibold mb-2">Expert Consultation</h4>
              <p className="text-muted-foreground text-sm">
                30+ years of experience in security and technology solutions
              </p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Award className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-serif font-semibold mb-2">Proven Track Record</h4>
              <p className="text-muted-foreground text-sm">500+ successful projects across government and enterprise</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-serif font-semibold mb-2">Rapid Response</h4>
              <p className="text-muted-foreground text-sm">24-hour response time with dedicated project managers</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Headphones className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-serif font-semibold mb-2">Ongoing Support</h4>
              <p className="text-muted-foreground text-sm">Comprehensive support and maintenance for all solutions</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif font-semibold text-xl mb-6">Multiple Ways to Reach Us</h3>
              <div className="space-y-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Corporate Headquarters</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Fourth Dimension Electronic Systems Pvt Ltd
                          <br />
                          Technology Hub, Hyderabad
                          <br />
                          Telangana 500001, India
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          State-of-the-art facility with R&D labs and customer experience center
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Direct Contact</h4>
                        <p className="text-muted-foreground">
                          Sales: +91 XXX XXX XXXX
                          <br />
                          Support: +91 XXX XXX XXXX
                          <br />
                          Emergency: +91 XXX XXX XXXX (24/7)
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Dedicated lines for sales, technical support, and emergency assistance
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Email Communications</h4>
                        <p className="text-muted-foreground">
                          General Inquiries: info@fds.co.in
                          <br />
                          Sales Team: sales@fds.co.in
                          <br />
                          Technical Support: support@fds.co.in
                          <br />
                          Partnerships: partners@fds.co.in
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Linkedin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Professional Network</h4>
                        <p className="text-muted-foreground">
                          Connect with us on LinkedIn for industry insights, company updates, and professional
                          networking opportunities.
                        </p>
                        <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                          Follow on LinkedIn
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Business Hours & Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday - Friday:</span>
                    <span className="text-muted-foreground">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Saturday:</span>
                    <span className="text-muted-foreground">9:00 AM - 1:00 PM IST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday:</span>
                    <span className="text-muted-foreground">Emergency Support Only</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Emergency Support:</span>
                    <span className="text-primary font-medium">24/7 Available</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> For urgent security issues or system emergencies, our technical team is
                    available 24/7 through our emergency hotline.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Form */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Start Your Digital Transformation Journey</CardTitle>
              <p className="text-muted-foreground">
                Tell us about your requirements and we'll design a custom solution for your organization.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <Input id="firstName" placeholder="Enter your first name" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <Input id="lastName" placeholder="Enter your last name" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Business Email Address *
                </label>
                <Input id="email" type="email" placeholder="Enter your business email" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company/Organization *
                  </label>
                  <Input id="company" placeholder="Enter your company name" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium mb-2">
                  Industry/Sector
                </label>
                <Input id="industry" placeholder="e.g., Tourism, Government, Manufacturing" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Project Type *
                </label>
                <Input
                  id="subject"
                  placeholder="e.g., Security System, FDS OS Implementation, Custom Software"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Requirements *
                </label>
                <Textarea
                  id="message"
                  placeholder="Please describe your requirements, timeline, budget range, and any specific challenges you're facing..."
                  rows={5}
                  required
                />
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" id="consent" className="mt-1" required />
                <label htmlFor="consent" className="text-xs text-muted-foreground">
                  I agree to receive communications from FDS regarding my inquiry and understand that my information
                  will be handled according to the privacy policy.
                </label>
              </div>

              <Button className="w-full" size="lg">
                Send Inquiry & Request Consultation
              </Button>

              <div className="text-center space-y-2">
                <p className="text-sm font-medium text-primary">⚡ Guaranteed Response Within 24 Hours</p>
                <p className="text-xs text-muted-foreground">
                  Our experts will review your requirements and schedule a personalized consultation to discuss your
                  project in detail.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
