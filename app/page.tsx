import Hero from "@/components/Hero"
import NeuronBackground from "@/components/NeuronBackground"
import SkillsGrid from "@/components/SkillsGrid"
import ExperienceTimeline from "@/components/ExperienceTimeline"
import ProjectsGrid from "@/components/ProjectsGrid"
import WorldMap from "@/components/WorldMap"
import CTASection from "@/components/CTASection"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function Home() {
  return (
    <main className="min-h-screen">
      <NeuronBackground />
      <ThemeToggle />

      <Hero />
      <SkillsGrid />
      <ExperienceTimeline />
      <ProjectsGrid />
      <WorldMap />
      <CTASection />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mohak Wadhwa. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </main>
  )
}
