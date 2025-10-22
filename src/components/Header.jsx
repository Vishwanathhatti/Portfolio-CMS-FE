import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ScrollProgress from "./ScrollProgress";
import {api} from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const isHomePage = location.pathname === '/';

  const { data: info } = useQuery({
    queryKey: ['info'],
    queryFn: async () => {
      const response = await api.getInfo();
      return response.data.data;
    },
  });

  const downloadCV = () => {
    if (info?.cv) {
      const link = document.createElement('a');
      link.href = `${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}${info.cv}`;
      link.setAttribute('download', 'Vishwanath_Hatti_CV.pdf');
      link.setAttribute('target', '_blank');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const scrollToSection = (id) => {
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">VH</span>
            </div>
            <span className="text-xl font-bold">Vishwanath</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className="text-sm hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button className="hidden md:inline-flex" onClick={downloadCV}>
            Download CV
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-lg hover:text-primary transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ))}
                <Button className="mt-4 w-full" onClick={downloadCV}>
                  Download CV
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <ScrollProgress/>
    </header>
  );
};

export default Header;
