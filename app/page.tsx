import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsOverview from "@/components/SkillsOverview";
import ExperienceSection from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <SkillsOverview />
      <ExperienceSection />
      <FeaturedProjects />
      <Education />
      <Contact />
    </>
  );
}
