
'use client'

import { motion } from "framer-motion/client"

export function VisionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-transparent to-muted/20" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our <span className="text-gradient">Vision</span>
          </motion.h2>
          
          <motion.blockquote 
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic mb-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-4 -left-4 text-4xl text-primary/20 font-serif">"</div>
            To be the leading technology partner delivering AI-powered security, automation, and digital transformation
            solutions that redefine safety, efficiency, and customer experience across industries.
            <div className="absolute -bottom-8 -right-4 text-4xl text-secondary/20 font-serif">"</div>
          </motion.blockquote>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
  )
}
