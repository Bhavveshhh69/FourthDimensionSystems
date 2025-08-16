
'use client'

export function VisionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-transparent to-muted/20" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Our <span className="text-gradient">Vision</span>
          </h2>
          
          <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic mb-8 relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="absolute -top-4 -left-4 text-4xl text-primary/20 font-serif">"</div>
            To be the leading technology partner delivering AI-powered security, automation, and digital transformation
            solutions that redefine safety, efficiency, and customer experience across industries.
            <div className="absolute -bottom-8 -right-4 text-4xl text-secondary/20 font-serif">"</div>
          </blockquote>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full animate-expand" style={{ animationDelay: '0.8s' }} />
        </div>
      </div>
    </section>
  )
}
