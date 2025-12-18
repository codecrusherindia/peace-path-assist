import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Globe } from "lucide-react"; // Added Globe icon
import { useLanguage } from "@/context/LanguageContext"; // Import Context
import { translations, Language } from "@/data/translations"; // Import Data

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // 1. Get global language state
  const { language, setLanguage } = useLanguage();
  
  // 2. Get translated text for the navigation
  const t = translations[language].nav;

  // List of available languages
  const languages: Language[] = ["English", "Hindi", "Marathi", "Bengali", "Telugu", "Tamil"];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
            <Heart className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MindCare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* NavLinks using translated text (t.home, t.features, etc.) */}
            <NavLink
              to="/"
              end
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary"
            >
              {t.home}
            </NavLink>
            <NavLink
              to="/chatbot"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary"
            >
              {t.chatbot}
            </NavLink>
            <NavLink
              to="/features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary"
            >
              {t.features}
            </NavLink>
            <NavLink
              to="/business"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary"
            >
              {t.business}
            </NavLink>
            <NavLink
              to="/research"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary"
            >
              {t.research}
            </NavLink>
            <NavLink
              to="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary"
            >
              {t.about}
            </NavLink>

            {/* Language Selector (Desktop) */}
            <div className="relative flex items-center">
              <Globe className="absolute left-2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="h-9 pl-8 pr-3 rounded-md border border-input bg-transparent text-sm font-medium shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer hover:bg-accent hover:text-accent-foreground appearance-none"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang} className="bg-background text-foreground">
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            <Button asChild size="sm" className="rounded-full">
              <Link to="/chatbot">{t.start}</Link>
            </Button>
          </div>

          {/* Mobile Header Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Language Selector (Compact) */}
            <div className="relative flex items-center">
               <Globe className="absolute left-2 h-4 w-4 text-muted-foreground pointer-events-none" />
               <select
                 value={language}
                 onChange={(e) => setLanguage(e.target.value as Language)}
                 className="h-9 w-[50px] pl-7 pr-0 rounded-md border border-input bg-transparent text-sm font-medium shadow-sm cursor-pointer appearance-none overflow-hidden"
               >
                 {languages.map((lang) => (
                    <option key={lang} value={lang}>{lang.slice(0, 2)}</option>
                 ))}
               </select>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <NavLink
              to="/"
              end
              className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              activeClassName="text-primary bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.home}
            </NavLink>
            <NavLink
              to="/chatbot"
              className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              activeClassName="text-primary bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.chatbot}
            </NavLink>
            <NavLink
              to="/features"
              className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              activeClassName="text-primary bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.features}
            </NavLink>
            <NavLink
              to="/business"
              className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              activeClassName="text-primary bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.business}
            </NavLink>
            <NavLink
              to="/research"
              className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              activeClassName="text-primary bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.research}
            </NavLink>
            <NavLink
              to="/about"
              className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              activeClassName="text-primary bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.about}
            </NavLink>
            <div className="px-4 pt-2">
              <Button asChild className="w-full rounded-full">
                <Link to="/chatbot" onClick={() => setMobileMenuOpen(false)}>
                  {t.start}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
