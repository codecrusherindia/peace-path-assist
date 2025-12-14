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
  Clock,
  TrendingUp,
} from "lucide-react";
import heroImage from "@/assets/hero-chatbot.png";

const Index = () => {
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
                Solving India's Mental Health Screening Shortage
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Instant Mental Health{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Check-In
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A simple, private, low-cost chatbot that helps you understand your emotional risk level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full text-lg">
                  <Link to="/chatbot">
                    Start Assessment <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full text-lg">
                  <Link to="/features">Learn More</Link>
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
              Mental Health Access Crisis in India
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the gap between need and availability
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-destructive/5 to-warning/5 border-destructive/20">
              <Users className="h-12 w-12 mx-auto mb-4 text-destructive" />
              <div className="text-4xl font-bold mb-2 text-destructive">1:100,000</div>
              <p className="text-muted-foreground">Psychiatrist to population ratio in India</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-warning/5 to-accent/5 border-warning/20">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-warning" />
              <div className="text-4xl font-bold mb-2 text-warning">Millions</div>
              <p className="text-muted-foreground">Struggle to access mental health support</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Simple, quick, and effective in 3 steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br from-primary/5 to-background">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Languages className="h-8 w-8 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Chat in Your Language</h3>
              <p className="text-muted-foreground">
                Choose from Hindi, Marathi, Telugu, Tamil, Bengali, or English for a comfortable conversation
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br from-accent/5 to-background">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-accent" />
              </div>
              <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Answer Simple Questions</h3>
              <p className="text-muted-foreground">
                Complete PHQ-9 and GAD-7 assessments in a conversational, guided format that's easy to understand
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br from-secondary/5 to-background">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-secondary" />
              </div>
              <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Immediate Insights</h3>
              <p className="text-muted-foreground">
                Receive your risk-level assessment (Low, Moderate, High) with actionable next steps
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why It Matters</h2>
            <p className="text-lg text-muted-foreground">
              Accessible mental health screening for everyone
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CheckCircle2 className="h-10 w-10 mx-auto mb-4 text-success" />
              <h3 className="font-semibold mb-2">Early Detection</h3>
              <p className="text-sm text-muted-foreground">
                Identify potential concerns before they escalate
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <MapPin className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Accessible Anywhere</h3>
              <p className="text-sm text-muted-foreground">
                Works on any device, even low-end phones
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <DollarSign className="h-10 w-10 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Affordable for All</h3>
              <p className="text-sm text-muted-foreground">
                Low-cost solution for widespread accessibility
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="h-10 w-10 mx-auto mb-4 text-secondary" />
              <h3 className="font-semibold mb-2">Clinically Aligned</h3>
              <p className="text-sm text-muted-foreground">
                Based on validated PHQ-9 and GAD-7 standards
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
              Ready to Check Your Mental Health?
            </h2>
            <p className="text-xl text-muted-foreground">
              Take the first step towards understanding your emotional wellbeing
            </p>
            <Button asChild size="lg" className="rounded-full text-lg">
              <Link to="/chatbot">
                Start Your Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
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
