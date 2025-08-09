import { Navbar } from "../components/Navbar"
import { ThemeToggle } from "../components/ThemeToggle"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* theme toggle */}
        <ThemeToggle />


        {/* bg  */}

        {/* NavBar */}
        <Navbar />


        {/* content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />

        </main>


        
        {/* footer */}
    </div>
  )
}
