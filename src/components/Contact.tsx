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
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=rafiihibatullah420@gmail.com"
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
    <section id="contact" className="py-16 sm:py-20 px-4 section-dark">
      <div 
        ref={ref}
        className={`container mx-auto max-w-6xl transition-all duration-[1200ms] ease-out ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
        }`}
      >
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Hubungi Saya
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Tertarik untuk berkolaborasi atau mendiskusikan peluang kerja? Jangan ragu untuk menghubungi saya melalui kontak di bawah ini Nuxt.js
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-6 sm:p-8 gradient-card border-border">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                Informasi Kontak
              </h3>
              <div className="space-y-4 sm:space-y-5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    {info.link ? (
                      <a 
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-smooth cursor-pointer flex-shrink-0"
                        title={`Buka ${info.label}`}
                      >
                        <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </a>
                    ) : (
                      <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-smooth text-xs sm:text-sm break-all sm:break-normal"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-xs sm:text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 sm:p-8 gradient-card border-border">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                Status Ketersediaan
              </h3>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-foreground font-medium text-sm sm:text-base">
                  Terbuka untuk Peluang Kerja
                </span>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                Saat ini saya terbuka untuk posisi <span className="font-semibold text-foreground">IT Staff, Web Developer, atau System Developer</span> di perusahaan yang inovatif dan dinamis.
              </p>
            </Card>
          </div>

          {/* Social Links & CTA */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-6 sm:p-8 gradient-card border-border">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                Temukan Saya di
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-border transition-smooth ${social.color}`}
                  >
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <social.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground text-sm sm:text-base">
                        {social.label}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground truncate">
                        {social.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* CTA Card */}
            <Card className="p-6 sm:p-8 gradient-hero border-0">
              <div className="text-center text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  Mari Berkolaborasi!
                </h3>
                <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
                  Tertarik untuk bekerja sama atau ingin mendiskusikan proyek? Hubungi saya sekarang!
                </p>
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg w-full sm:w-auto text-sm sm:text-base"
                  onClick={() =>
                    window.open(
                      'https://mail.google.com/mail/?view=cm&fs=1&to=rafiihibatullah420@gmail.com',
                      '_blank'
                    )
                  }
                >
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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
