"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLink, Github, Info } from "lucide-react"

interface ProjectCardProps {
  title: string
  subtitle: string
  description: string
  technologies: string[]
  features: string[]
  liveUrl: string
  githubUrl: string
  index: number
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  technologies,
  features,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="glass border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <CardTitle className="text-2xl mb-2">{title}</CardTitle>
              <CardDescription className="text-sm">{subtitle}</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="flex-shrink-0">
                  <Info className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{title}</DialogTitle>
                  <DialogDescription>{subtitle}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <h4 className="font-semibold mb-2">Description</h4>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    {liveUrl !== "#" && (
                      <Button asChild>
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                    )}
                    {githubUrl !== "#" && (
                      <Button variant="outline" asChild>
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{technologies.length - 4} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
