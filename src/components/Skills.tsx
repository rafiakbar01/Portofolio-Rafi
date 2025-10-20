import { Code2, Database, Wrench, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const skillCategories = [
    {
      icon: Code2,
      title: "Pemrograman",
      color: "bg-blue-500/10 text-blue-500",
      skills: ["CodeIgniter", "Laravel", "PHP", "JavaScript", "jQuery", "HTML", "CSS","React","TypeScript"]
    },
    {
      icon: Zap,
      title: "Otomasi & Tools",
      color: "bg-purple-500/10 text-purple-500",
      skills: ["Microsoft Power Automate", "Git", "GitHub", "Cursor", "Visual Studio Code"]
    },
    {
      icon: Database,
      title: "Database",
      color: "bg-green-500/10 text-green-500",
      skills: ["SQL Server", "MySQL"]
    },
    {
      icon: Wrench,
      title: "Lainnya",
      color: "bg-orange-500/10 text-orange-500",
      skills: ["Microsoft Office", "Figma", "Operasi Forklift"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 section-light">
      <div 
        ref={ref}
        className={`container mx-auto max-w-6xl transition-all duration-[1200ms] ease-out ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Keahlian Teknis
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berikut adalah teknologi, tools, dan keahlian yang saya kuasai dalam pengembangan perangkat lunak.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-hover-effect transition-smooth border-border gradient-card"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-4 rounded-xl ${category.color}`}>
                  <category.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mt-2">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge 
                    key={idx}
                    variant="secondary"
                    className="text-sm py-2 px-4 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="p-8 max-w-3xl mx-auto gradient-card border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Fokus Keahlian
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Spesialisasi dalam <span className="font-semibold text-foreground">pengembangan sistem internal</span> berbasis web untuk otomasi proses bisnis, dengan pengalaman mengintegrasikan berbagai teknologi seperti <span className="font-semibold text-foreground">RFID, Email Notification, dan Power Automate</span> untuk meningkatkan efisiensi operasional perusahaan manufaktur.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
