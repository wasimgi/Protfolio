import Hero from "@/components/Hero";
import About from "@/components/About";
import ResearchInterests from "@/components/ResearchInterests";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ResearchInterests />
      <Education />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
    </div>
  );
};

export default Index;
