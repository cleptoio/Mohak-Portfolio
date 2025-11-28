"use client"

import { motion } from "framer-motion"
import { experience } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Calendar } from "lucide-react"

export default function ExperienceTimeline() {
  return (
    <section className="py-20 px-4 bg-muted/30" id="experience">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey through digital transformation and technology consulting
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-clepto-cyan via-primary to-clepto-red" />

          {/* Experience items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.startDate}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -ml-[7px] md:-ml-2 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                  <Card className="glass border-border/50 hover:border-primary/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex items-center gap-2 text-primary">
                          <Briefcase className="w-5 h-5" />
                          <CardTitle className="text-xl">{exp.company}</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-base font-semibold text-foreground">
                        {exp.position}
                      </CardDescription>
                      <div className="flex flex-wrap gap-3 mt-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
