"use client"

import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"
import { socialLinks } from "@/lib/data"
import { motion } from "framer-motion"

export default function SocialLinks() {
  const links = [
    { icon: FaLinkedin, url: socialLinks.linkedin, label: "LinkedIn", color: "#0077B5" },
    { icon: FaGithub, url: socialLinks.github, label: "GitHub", color: "#333" },
    { icon: FaTwitter, url: socialLinks.twitter, label: "Twitter", color: "#1DA1F2" },
    { icon: FaEnvelope, url: socialLinks.email, label: "Email", color: "#EA4335" },
  ]

  return (
    <div className="flex gap-4 justify-center">
      {links.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border group-hover:border-primary transition-all duration-300">
            <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {link.label}
          </span>
        </motion.a>
      ))}
    </div>
  )
}
