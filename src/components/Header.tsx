import { useState, useEffect } from "react";
import { Menu, X, Home, User, GraduationCap, Briefcase, Code, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation items berdasarkan komponen yang ada
  const navigationItems = [
    { id: "hero", label: "Beranda", icon: Home },
    { id: "about", label: "Tentang", icon: User },
    { id: "education", label: "Pendidikan", icon: GraduationCap },
    { id: "experience", label: "Pengalaman", icon: Briefcase },
    { id: "projects", label: "Proyek", icon: Code },
    { id: "skills", label: "Keahlian", icon: Star },
    { id: "contact", label: "Kontak", icon: MessageCircle },
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  // Track scroll position untuk mengubah warna header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Ubah warna setelah scroll 50px untuk mobile
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" 
          : "bg-transparent backdrop-blur-none border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden transition-all duration-300 ${
              isScrolled ? "bg-white" : "bg-white/20"
            }`}>
              <img 
                src="/assets/img_logo.jpg" 
                alt="Rafi Akbar Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`font-bold text-base sm:text-lg transition-all duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>Rafi Akbar</span>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 transition-all duration-300 ${
                    isScrolled 
                      ? activeSection === item.id 
                        ? "bg-primary text-primary-foreground" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      : activeSection === item.id
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Tablet Navigation - Show icons only */}
          <div className="hidden md:flex lg:hidden items-center gap-1">
            {navigationItems.slice(0, 5).map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-center w-10 h-10 transition-all duration-300 ${
                    isScrolled 
                      ? activeSection === item.id 
                        ? "bg-primary text-primary-foreground" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      : activeSection === item.id
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  title={item.label}
                >
                  <Icon className="h-4 w-4" />
                </Button>
              );
            })}
            {/* More menu for remaining items */}
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center justify-center w-10 h-10 transition-all duration-300 ${
                isScrolled 
                  ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              title="Menu Lainnya"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden transition-all duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile & Tablet Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden lg:block border-t transition-all duration-300 ${
            isScrolled 
              ? "border-border bg-background/95 backdrop-blur-md" 
              : "border-white/20 bg-black/20 backdrop-blur-md"
          }`}>
            <div className="py-3 sm:py-4 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full justify-start flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 transition-all duration-300 text-sm sm:text-base ${
                      isScrolled
                        ? activeSection === item.id 
                          ? "bg-primary text-primary-foreground" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        : activeSection === item.id
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span className="font-medium">{item.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;