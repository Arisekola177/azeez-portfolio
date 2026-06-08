import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import SkillSection from "./components/skills/SkillSection";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <div>
      <Banner />
      <Features />
      <Resume />
      <SkillSection />
      <Projects />
      <Contact />
    </div>
  );
}
