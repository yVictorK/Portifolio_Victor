import { About } from "../components/AboutMe"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { NavBar } from "../components/NavBar"
import { ProjectsSection } from "../components/ProjectsSection"
import { SkillsSection } from "../components/SkillsSection"
import { Meteors } from "../components/MeteorBackground"
import { StarsCanvas } from "../components/StarBackground"
import { ScrollFadeIn } from "../components/ScrollFadeIn"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarsCanvas className="absolute inset-0 z-0" value={5000} />
      <Meteors />
      <NavBar />
      <main className="relative z-20">
        <ScrollFadeIn>
          <HeroSection />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <About />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <SkillsSection />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <ProjectsSection />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <ContactSection />
        </ScrollFadeIn>
        <Footer />
      </main>
    </div>
  )
}