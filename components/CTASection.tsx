"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"
import { Mail, Calendar } from "lucide-react"
import SocialLinks from "./SocialLinks"

export default function CTASection() {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 border border-border/50 text-center relative overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-clepto-cyan/10 via-primary/5 to-clepto-red/10 animate-gradient-shift bg-200%" />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="gradient-text">Let&apos;s Work Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Looking for a Technology Consultant to drive digital transformation and business excellence?
              Let&apos;s discuss how we can collaborate to achieve your goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Button size="lg" asChild className="group">
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Send Email
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="group">
                <a href={`tel:${personalInfo.phone}`}>
                  <Calendar className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Schedule Call
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-8 border-t border-border/50"
            >
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <SocialLinks />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-sm text-muted-foreground"
            >
              <p>{personalInfo.location}</p>
              <p className="mt-1">{personalInfo.email}</p>
              <p className="mt-1">{personalInfo.phone}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
