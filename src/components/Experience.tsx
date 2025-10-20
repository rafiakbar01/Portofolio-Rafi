import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();
  const experiences = [
    {
      company: "PT Denso Manufacturing Indonesia (PT DMIA)",
      position: "System Development Intern",
      location: "Indonesia",
      period: "Magang",
      responsibilities: [
        "Mengembangkan sistem internal berbasis web untuk membantu otomasi proses di departemen IT",
        "Membuat sistem monitoring proyek, approval workflow, dan dashboard analytics",
        "Implementasi notifikasi otomatis dan reminder meeting",
        "Integrasi dengan database SQL Server untuk manajemen data"
      ],
      tags: ["PHP", "CodeIgniter", "JavaScript", "SQL Server", "Bootstrap", "Microsoft Power Automate", 'Jquery']
    },
    {
      company: "PT Aisan Nasmoco Industri (PT ANI)",
      position: "PPIC Delivery",
      location: "Indonesia",
      period: "Magang",
      responsibilities: [
        "Menginventori part di warehouse dan line produksi",
        "Menyiapkan finish good untuk dikirim ke customer",
        "Koordinasi dengan tim produksi untuk memastikan kelancaran pengiriman"
      ],
      tags: ["Inventory Management", "Supply Chain", "Forklift Operation"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 section-light">
      <div 
        ref={ref}
        className={`container mx-auto max-w-6xl transition-all duration-[1200ms] ease-out ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Pengalaman Kerja
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-hover-effect transition-smooth border-border gradient-card"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {exp.position}
                    </h3>
                    <p className="text-xl font-semibold text-primary mb-3">
                      {exp.company}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-3">
                      Tanggung Jawab:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
