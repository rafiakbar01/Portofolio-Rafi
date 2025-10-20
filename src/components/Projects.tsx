import { ExternalLink, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "PE-MCN Project Control",
      company: "PT Denso Manufacturing Indonesia",
      description: "Sistem internal monitoring proyek dan planning dengan fitur approval, notifikasi, reminder meeting, export PDF, dan dashboard analytics yang komprehensif.",
      technologies: ["PHP", "CodeIgniter", "jQuery", "Bootstrap", "SQL Server"],
      features: ["Approval Workflow", "Email Notification", "Dashboard", "PDF Export"]
    },
    {
      title: "JDE CIGMA Automation",
      company: "PT Denso Manufacturing Indonesia",
      description: "Sistem otomasi untuk Departemen Finance Accounting menggunakan Microsoft Power Automate untuk input data otomatis, meningkatkan efisiensi dan mengurangi human error.",
      technologies: ["Microsoft Power Automate",  "Integration"],
      features: ["Automated Data Entry", "Process Optimization"]
    },
    {
      title: "Sistem Absensi MICO",
      company: "HIMTECH Politeknik Meta Industri",
      description: "Sistem absensi orientasi mahasiswa baru dengan notifikasi email otomatis, export data ke PDF/Excel, dan dashboard monitoring real-time.",
      technologies: ["Laravel", "MySQL", "PHP", "Bootstrap"],
      features: ["Email Notification", "PDF/Excel Export", "Real-time Dashboard"]
    },
    {
      title: "Sistem Tapping Uniform Karyawan",
      company: "PT Denso Manufacturing Indonesia",
      description: "Sistem pengambilan seragam karyawan berbasis RFID tapping dengan tracking history, export data, dan dashboard monitoring inventory.",
      technologies: ["PHP", "CodeIgniter", "jQuery", "SQL Server", "RFID"],
      features: ["RFID Integration", "History Tracking", "Inventory Dashboard"]
    },
    {
      title: "Sistem Safety Device Management",
      company: "PT Denso Manufacturing Indonesia",
      description: "Sistem manajemen perangkat keselamatan dengan approval workflow, notifikasi email otomatis, dan dashboard monitoring compliance.",
      technologies: ["PHP", "CodeIgniter", "JavaScript", "Bootstrap", "SQL Server"],
      features: ["Approval System", "Email Alerts", "Compliance Dashboard"]
    },
    {
      title: "Sistem Pengajuan Cuti Karyawan",
      company: "PT Aisan Nasmoco Industri",
      description: "Sistem digital untuk mempermudah karyawan mengajukan cuti dan HRD memverifikasi secara online, mengurangi proses manual dan mempercepat persetujuan.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      features: ["Online Submission", "Digital Approval", "Leave Balance Tracking"]
    },
    {
      title: "System Summary Pricing",
      company: "PT Denso Manufacturing Indonesia",
      description: "Sistem dokumentasi audit pricing dengan approval workflow, notifikasi email, dan dashboard untuk monitoring pricing accuracy.",
      technologies: ["PHP", "CodeIgniter", "jQuery", "Bootstrap", "SQL Server"],
      features: ["Audit Documentation", "Multi-level Approval", "Pricing Dashboard"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 section-dark">
      <div 
        ref={ref}
        className={`container mx-auto max-w-7xl transition-all duration-[1200ms] ease-out ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Proyek yang Dikerjakan
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berikut adalah beberapa proyek sistem informasi dan aplikasi web yang telah saya kembangkan untuk meningkatkan efisiensi operasional perusahaan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="hover:shadow-hover-effect transition-smooth border-border gradient-card flex flex-col"
            >
              <CardHeader>
                <div className="mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg inline-block mb-3">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm font-medium text-primary">
                  {project.company}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Fitur Utama:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.features.map((feature, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Teknologi:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>

              {/* <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full"
                  size="sm"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Lihat Detail
                </Button>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
