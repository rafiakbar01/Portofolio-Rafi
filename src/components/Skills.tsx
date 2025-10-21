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
      skills: [
        { name: "CodeIgniter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
        { name: "Laravel", img: "https://tse4.mm.bing.net/th/id/OIP.bX2TQK--FaRjUxOYoQ8CrwHaDt?rs=1&pid=ImgDetMain&o=7&rm=3" },
        { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "jQuery", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain.svg" },
        { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      ],
    },
    {
      icon: Zap,
      title: "Otomasi & Tools",
      color: "bg-purple-500/10 text-purple-500",
      skills: [
        { name: "Microsoft Power Automate", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
        { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Cursor", img: "https://paulstamatiou.com/gear/cursor-app-icon.png" },
        { name: "Visual Studio Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      ],
    },
    {
      icon: Database,
      title: "Database",
      color: "bg-green-500/10 text-green-500",
      skills: [
        { name: "SQL Server", img: "https://tse2.mm.bing.net/th/id/OIP.NJ9iVF6yzkGNw11Q-7zeQgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
        { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzd1b16ARVbLAqWCkGBudkPCJjTuPx04PcTw&s" },
      ],
    },
    {
      icon: Wrench,
      title: "Lainnya",
      color: "bg-orange-500/10 text-orange-500",
      skills: [
        { name: "Microsoft Office", img: "https://tse2.mm.bing.net/th/id/OIP.oV0bRLDY35OquVAKpq2cjAHaEK?w=1280&h=720&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Operasi Forklift", img: "https://cdn-icons-png.flaticon.com/512/3197/3197700.png" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 md:px-20 section-light text-lg md:text-xl">
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
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berikut adalah teknologi, tools, dan keahlian yang saya kuasai dalam pengembangan perangkat lunak.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border rounded-2xl bg-background/60 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-xl ${category.color}`}>
                  <category.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-secondary/40 text-secondary-foreground py-2 px-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <img src={skill.img} alt={skill.name} className="h-5 w-5 object-contain" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 max-w-3xl mx-auto border border-border rounded-2xl bg-background/60 backdrop-blur-sm">
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
