import { Mail, Github, Linkedin, MapPin, Phone, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rafiihibatullah420@gmail.com",
      link: "mailto:rafiihibatullah420@gmail.com"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+62 858-8261-6559",
      link: "https://wa.me/6285882616559"
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: "Cikarang, Jawa Barat, Indonesia",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@rafiakbar",
      link: "https://github.com/rafiakbar01/",
      color: "hover:bg-gray-100 dark:hover:bg-gray-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Rafi Akbar Hibatullah",
      link: "https://www.linkedin.com/in/rafi-akbar-hibatullah/",
      color: "hover:bg-blue-50 dark:hover:bg-blue-950"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 section-dark">
      <div 
        ref={ref}
        className={`container mx-auto max-w-6xl transition-all duration-[1200ms] ease-out ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Hubungi Saya
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau mendiskusikan peluang kerja? Jangan ragu untuk menghubungi saya melalui kontak di bawah ini.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-8 gradient-card border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informasi Kontak
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-8 gradient-card border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Status Ketersediaan
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-foreground font-medium">
                  Terbuka untuk Peluang Kerja
                </span>
              </div>
              <p className="text-muted-foreground">
                Saat ini saya terbuka untuk posisi <span className="font-semibold text-foreground">IT Staff, Web Developer, atau System Developer</span> di perusahaan yang inovatif dan dinamis.
              </p>
            </Card>
          </div>

          {/* Social Links & CTA */}
          <div className="space-y-6">
            <Card className="p-8 gradient-card border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Temukan Saya di
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg border border-border transition-smooth ${social.color}`}
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <social.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {social.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {social.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* CTA Card */}
            <Card className="p-8 gradient-hero border-0">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-3">
                  Mari Berkolaborasi!
                </h3>
                <p className="mb-6 opacity-90">
                  Tertarik untuk bekerja sama atau ingin mendiskusikan proyek? Hubungi saya sekarang!
                </p>
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                  onClick={() =>
                    window.open(
                      'https://mail.google.com/mail/?view=cm&fs=1&to=rafiihibatullah420@gmail.com',
                      '_blank'
                    )
                  }
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Kirim Email
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
