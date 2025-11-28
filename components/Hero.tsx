"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"
import SocialLinks from "./SocialLinks"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-clepto-cyan/20 to-clepto-red/20 animate-pulse" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-clepto-cyan to-clepto-red rounded-full opacity-20 blur-2xl animate-glow" />
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              {personalInfo.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              {personalInfo.tagline}
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <SocialLinks />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
