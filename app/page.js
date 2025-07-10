import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Articles from "./components/homepage/articles";
import Skills from "./components/homepage/skills";

export default async function Home() {

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <Skills />
      <Education />
      <Experience />
      <Articles />
      <Projects />
      <ContactSection />
    </div>
  )
};