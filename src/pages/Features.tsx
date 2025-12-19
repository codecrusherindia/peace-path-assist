import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import {
  Brain,
  Languages,
  Smartphone,
  Zap,
  BarChart3,
  Shield,
  DollarSign,
  Globe,
} from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mental Wellness
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced AI technology meets clinically validated methods to deliver accurate, accessible
            mental health screening
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need for comprehensive mental health assessment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hybrid Scoring Model</h3>
              <p className="text-muted-foreground mb-4">
                Combines sentiment analysis with PHQ-9 and GAD-7 questionnaire scoring for comprehensive
                assessment
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Real-time emotional pattern detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Clinically validated questionnaires</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>AI-powered sentiment analysis</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Languages className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Regional Language Support</h3>
              <p className="text-muted-foreground mb-4">
                Accessible in multiple Indian languages for maximum reach and comfort
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Hindi, Marathi, Telugu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Tamil, Bengali, English</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Natural language understanding</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Smartphone className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Affordable & Scalable</h3>
              <p className="text-muted-foreground mb-4">
                Works seamlessly on low-end devices with minimal data requirements
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Low bandwidth consumption</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Works on entry-level smartphones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>WhatsApp and web deployment</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Triage</h3>
              <p className="text-muted-foreground mb-4">
                Instant risk assessment and actionable recommendations
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">•</span>
                  <span>Immediate risk categorization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">•</span>
                  <span>Personalized guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">•</span>
                  <span>Emergency resource referrals</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-warning/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-warning" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy-to-Understand Reports</h3>
              <p className="text-muted-foreground mb-4">
                Clear visualizations and summaries that anyone can understand
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-warning mt-1">•</span>
                  <span>Visual risk indicators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning mt-1">•</span>
                  <span>Downloadable PDF reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning mt-1">•</span>
                  <span>Plain language explanations</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-destructive/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy & Security</h3>
              <p className="text-muted-foreground mb-4">
                Your data is protected with enterprise-grade security
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>No personal data storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>HIPAA-compliant architecture</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Flow Diagram Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Simple, intelligent workflow</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <Card className="p-6 flex-1 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">User Chat</h3>
                <p className="text-sm text-muted-foreground">
                  Natural conversation in preferred language
                </p>
              </Card>

              <div className="hidden md:block text-4xl text-primary">→</div>

              <Card className="p-6 flex-1 text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Emotional Analysis</h3>
                <p className="text-sm text-muted-foreground">AI detects sentiment patterns</p>
              </Card>

              <div className="hidden md:block text-4xl text-primary">→</div>

              <Card className="p-6 flex-1 text-center">
                <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">PHQ-9 / GAD-7</h3>
                <p className="text-sm text-muted-foreground">Clinical questionnaire scoring</p>
              </Card>

              <div className="hidden md:block text-4xl text-primary">→</div>

              <Card className="p-6 flex-1 text-center">
                <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Risk Output</h3>
                <p className="text-sm text-muted-foreground">Instant actionable results</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
