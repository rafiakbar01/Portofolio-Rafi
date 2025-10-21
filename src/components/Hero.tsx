import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/Rafi_profile.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 px-4 gradient-hero pt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Photo */}
         <div className="flex-shrink-0 flex items-end mt-6 md:mt-16">
            <div className="relative w-80 h-80 md:w-[30rem] md:h-[30rem] rounded-full overflow-hidden shadow-elegant border-4 border-white/20">
              <img 
                src={profilePhoto} 
                alt="Rafi Akbar Hibatullah"
                className="w-full h-full object-cover object-[center_25%] transition-all duration-700"
              />
            </div>
          </div>




          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Rafi Akbar Hibatullah
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-4 opacity-90">
              Mahasiswa Teknologi Rekayasa Perangkat Lunak
            </h2>
            <p className="text-lg md:text-xl mb-2 opacity-80">
              Politeknik Meta Industri Cikarang
            </p>
            <p className="text-xl md:text-2xl font-semibold mb-8 mt-6 italic">
              "Membangun sistem yang efisien dan berdampak melalui inovasi teknologi."
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Hubungi Saya
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FileText className="mr-2 h-5 w-5" />
                Lihat Project
              </Button>
              <a
                href="/assets/CV_RAFI_AKBAR_HIBATULLAH.pdf"
                download
                className="inline-block"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg w-full"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>

            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a 
                href="https://github.com/rafiakbar01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-smooth border border-white/20 hover:border-white/40"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/rafi-akbar-hibatullah/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-smooth border border-white/20 hover:border-white/40"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                 onClick={() =>
                  window.open(
                    'https://mail.google.com/mail/?view=cm&fs=1&to=rafiihibatullah420@gmail.com',
                    '_blank'
                  )
                }
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-smooth border border-white/20 hover:border-white/40"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
