import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();
  const educations = [
    {
      institution: "Politeknik Meta Industri Cikarang",
      degree: "Teknologi Rekayasa Perangkat Lunak",
      status: "Mahasiswa Aktif",
      period: "Sedang Berlangsung",
      type: "Diploma 4",
      organizations: [
        {
          name: "HIMTECH",
          role: "Divisi 3 ( 2022-2023 ) dan Anggota( 2023-2025)",
          status: "Aktif"
        },
        {
          name: "UKM Badminton",
          role: "Anggota",
          status: "Aktif"
        }
      ]
    },
    {
      institution: "SMK Ananda Mitra Industri Deltamas",
      degree: "Teknik Pemesinan",
      status: "Lulus",
      period: "Lulus Tahun 2022",
      type: "Sekolah Menengah Kejuruan",
      organizations: [
        {
          name: "Ekstrakurikuler Badminton",
          role: "Anggota",
          status: "aktif"
        },
        {
          name: "Ekstrakurikuler Bahasa Jepang",
          role: "Anggota",
          status: "Aktif"
        }
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 section-dark">
      <div 
        ref={ref}
        className={`container mx-auto max-w-6xl transition-all duration-[1200ms] ease-out ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Pendidikan
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {educations.map((edu, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-hover-effect transition-smooth border-border gradient-card"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <h3 className="text-2xl font-bold text-foreground">
                      {edu.institution}
                    </h3>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === "Mahasiswa Aktif" 
                        ? "bg-primary/10 text-primary" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <p className="text-lg font-semibold text-foreground mb-2">
                    {edu.degree}
                  </p>
                  
                  <p className="text-muted-foreground mb-2">
                    {edu.type}
                  </p>

                  {edu.organizations && edu.organizations.length > 0 && (
                    <div className="mb-2">
                      <span className="text-sm font-medium text-primary">
                        Organisasi: 
                      </span>
                      <div className="mt-1 space-y-1">
                        {edu.organizations.map((org, orgIndex) => (
                          <div key={orgIndex} className="text-muted-foreground text-sm">
                            <span className="font-medium">{org.name}</span> - {org.role} ({org.status})
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{edu.period}</span>
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

export default Education;
