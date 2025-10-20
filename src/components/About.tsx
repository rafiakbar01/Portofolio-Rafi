import { Code, Database, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const highlights = [
    {
      icon: Code,
      title: "Web Development",
      description: "Pengembangan sistem berbasis web yang efisien dan user-friendly"
    },
    {
      icon: Database,
      title: "Sistem Informasi",
      description: "Merancang dan mengimplementasikan sistem informasi untuk kebutuhan bisnis"
    },
    {
      icon: Cpu,
      title: "Otomasi Proses",
      description: "Meningkatkan efisiensi kerja melalui otomasi dan teknologi modern"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 section-light">
      <div 
        ref={ref}
        className={`container mx-auto max-w-6xl transition-all duration-[1200ms] ease-out ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Tentang Saya
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Saya adalah mahasiswa <span className="font-semibold text-foreground">Teknologi Rekayasa Perangkat Lunak</span> yang memiliki passion dalam pengembangan web, sistem informasi, dan otomasi proses kerja.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Dengan pengalaman magang di perusahaan manufaktur terkemuka, saya telah mengembangkan berbagai sistem internal yang meningkatkan efisiensi operasional dan mengurangi proses manual.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Saya fokus pada pengembangan <span className="font-semibold text-foreground">solusi teknologi yang efisien dan praktis</span> untuk mendukung kebutuhan bisnis, dengan pendekatan yang berorientasi pada hasil dan dampak nyata.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-hover-effect transition-smooth border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
