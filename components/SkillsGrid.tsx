"use client"

import { motion } from "framer-motion"
import { skills, certifications } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Settings,
  Users,
  TrendingUp,
  RefreshCw,
  FileSearch,
  ClipboardList,
  GitBranch,
  Shield,
  Database,
  BarChart,
  Code,
  Award,
} from "lucide-react"

const iconMap: { [key: string]: any } = {
  settings: Settings,
  users: Users,
  "trending-up": TrendingUp,
  "refresh-cw": RefreshCw,
  "file-search": FileSearch,
  "clipboard-list": ClipboardList,
  "git-branch": GitBranch,
  shield: Shield,
  database: Database,
  "bar-chart": BarChart,
  code: Code,
}

export default function SkillsGrid() {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive technical and business expertise across multiple domains
          </p>
        </motion.div>

        <div className="grid gap-8 mb-12">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <Card className="glass border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skillList.map((skill, skillIndex) => {
                      const Icon = iconMap[skill.icon] || Code
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
                        >
                          <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">
            <span className="gradient-text">Certifications</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                      <Badge variant="secondary" className="text-xs">
                        {cert.year}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
