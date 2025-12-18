import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  MessageSquare,
  Languages,
  Activity,
  CheckCircle2,
  ArrowRight,
  Users,
  MapPin,
  Shield,
  DollarSign,
} from "lucide-react";
import heroImage from "@/assets/hero-chatbot.png";
import { useLanguage } from "@/context/LanguageContext"; // Import hook
import { translations } from "@/data/translations"; // Import data

const Index = () => {
  // 1. Get the current language
  const { language } = useLanguage();
  
  // 2. Get the specific translations for the index page
  // Note: Ensure you added 'index' key to translations.ts as per the step above
  const t = translations[language].index; 

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                {t.badge}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {t.title}{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {t.titleHighlight}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                {t.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full text-lg">
                  <Link to="/chatbot">
                    {t.startAssessment} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full text-lg">
                  <Link to="/features">{t.learnMore}</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt="Friendly mental health chatbot with multilingual support"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Snapshot */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.crisisTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.crisisSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-destructive/5 to-warning/5 border-destructive/20">
              <Users className="h-12 w-12 mx-auto mb-4 text-destructive" />
              <div className="text-4xl font-bold mb-2 text-destructive">1:100,000</div>
              <p className="text-muted-foreground">{t.stat1Label}</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-warning/5 to-accent/5 border-warning/20">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-warning" />
              <div className="text-4xl font-bold mb-2 text-warning">{t.stat2Title}</div>
              <p className="text-muted-foreground">{t.stat2Label}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.howWorksTitle}</h2>
            <p className="text-lg text-muted-foreground">{t.howWorksSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br from-primary/5 to-background">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Languages className="h-8 w-8 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.step1Title}</h3>
              <p className="text-muted-foreground">
                {t.step1Desc}
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br from-accent/5 to-background">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-accent" />
              </div>
              <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.step2Title}</h3>
              <p className="text-muted-foreground">
                {t.step2Desc}
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br from-secondary/5 to-background">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-secondary" />
              </div>
              <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.step3Title}</h3>
              <p className="text-muted-foreground">
                {t.step3Desc}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.whyTitle}</h2>
            <p className="text-lg text-muted-foreground">
              {t.whySubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CheckCircle2 className="h-10 w-10 mx-auto mb-4 text-success" />
              <h3 className="font-semibold mb-2">{t.why1Title}</h3>
              <p className="text-sm text-muted-foreground">
                {t.why1Desc}
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <MapPin className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">{t.why2Title}</h3>
              <p className="text-sm text-muted-foreground">
                {t.why2Desc}
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <DollarSign className="h-10 w-10 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">{t.why3Title}</h3>
              <p className="text-sm text-muted-foreground">
                {t.why3Desc}
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="h-10 w-10 mx-auto mb-4 text-secondary" />
              <h3 className="font-semibold mb-2">{t.why4Title}</h3>
              <p className="text-sm text-muted-foreground">
                {t.why4Desc}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.ctaSubtitle}
            </p>
            <Button asChild size="lg" className="rounded-full text-lg">
              <Link to="/chatbot">
                {t.ctaButton} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
