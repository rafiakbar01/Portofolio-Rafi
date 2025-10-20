import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-foreground text-background">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm opacity-80">
            © 2025 Rafi Akbar Hibatullah.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
