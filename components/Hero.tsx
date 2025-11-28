"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"
import SocialLinks from "./SocialLinks"
import { ArrowDown, MapPin, Building2 } from "lucide-react"
import { Badge } from "./ui/badge"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <Badge variant="outline" className="text-sm px-3 py-1 border-clepto-cyan/30 text-clepto-cyan">
                <MapPin className="w-3 h-3 mr-1" />
                {personalInfo.location}
              </Badge>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                I&apos;m <span className="gradient-text">Mohak.</span>
              </h1>
            </motion.div>

            {/* Title & Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                {personalInfo.title}
              </h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="w-5 h-5 text-clepto-cyan" />
                <span className="text-lg">{personalInfo.company}</span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-clepto-cyan/20 border-dashed"
              />

              {/* Second rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-clepto-cyan/10"
              />

              {/* Profile Image */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-clepto-cyan/30 shadow-2xl shadow-clepto-cyan/20">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-clepto-cyan/10 to-transparent" />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-clepto-cyan/20 to-clepto-red/20 rounded-full opacity-30 blur-3xl animate-pulse" />
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            { label: "Years Experience", value: personalInfo.stats.experience, color: "from-clepto-cyan/20 to-clepto-cyan/5" },
            { label: "Projects Delivered", value: personalInfo.stats.projects, color: "from-purple-500/20 to-purple-500/5" },
            { label: "Client Satisfaction", value: personalInfo.stats.efficiency, color: "from-clepto-red/20 to-clepto-red/5" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 border border-border/50 hover:border-clepto-cyan/50 transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${stat.color} rounded-lg p-4 mb-3 inline-block`}>
                <span className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
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
    </section>
  )
}
